// Build replaces these two JSON literals; this source is also importable by tests.
const ASSETS = /* HIAI_ASSETS */ {};
const BASE_CATALOG = /* HIAI_CATALOG */ {};
const KEY = 'hiai/official-prices-v1.json';
const LIMIT = 1024 * 1024;
const encoder = new TextEncoder();
const priceKeys = new Set(['input','output','offPeakInput','offPeakOutput','currency','unit','sourceUrl','updatedAt','checkedAt','status','method','tier','note','lastError','evidenceHash']);
const reportKeys = new Set(['checkedAt','status','schedule','sources','updatedModels','retainedModels','uncoveredModels','counts']);
const object = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const same = (a,b) => canonical(a) === canonical(b);
function canonical(x) { return JSON.stringify(x,(_,v)=>object(v)?Object.fromEntries(Object.keys(v).sort().map(k=>[k,v[k]])):v); }
function fail(code,status=400) { throw Object.assign(new Error(code),{status}); }
function keys(x,allowed) { if (!object(x) || Object.keys(x).some(k=>!allowed.has(k))) fail('INVALID_FIELDS'); }
function date(value) { if(typeof value!=='string'||!/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d{3})?Z$/.test(value)||!Number.isFinite(Date.parse(value))) fail('INVALID_TIME'); return Date.parse(value); }
function https(value) { if(typeof value!=='string'||value.length>2048)fail('INVALID_SOURCE');try{const u=new URL(value);if(u.protocol!=='https:'||u.username||u.password||u.hash)fail('INVALID_SOURCE');}catch{fail('INVALID_SOURCE');} }
function versions(catalog) { if(!Array.isArray(catalog?.families))fail('INVALID_CATALOG');const all=[];for(const f of catalog.families){if(!Array.isArray(f?.versions))fail('INVALID_CATALOG');all.push(...f.versions);}return all; }
function withoutPrices(catalog) { const c=structuredClone(catalog);for(const v of versions(c))delete v.officialPricing;return c; }
async function digest(text) { return new Uint8Array(await crypto.subtle.digest('SHA-256',encoder.encode(text))); }
async function hash(text) { return Array.from(await digest(text),b=>b.toString(16).padStart(2,'0')).join(''); }
async function authenticate(request,env) {
 if(typeof env.PRICE_UPDATE_TOKEN!=='string'||env.PRICE_UPDATE_TOKEN.length<32)fail('UPDATE_NOT_CONFIGURED',503);
 const header=request.headers.get('Authorization')||'';
 if(header.length>4096||!header.startsWith('Bearer '))fail('UNAUTHORIZED',401);
 const [a,b]=await Promise.all([digest(header.slice(7)),digest(env.PRICE_UPDATE_TOKEN)]);let difference=0;
 for(let i=0;i<a.length;i++)difference|=a[i]^b[i];if(difference)fail('UNAUTHORIZED',401);
}
async function boundedJSON(request) {
 if(!/^application\/json(?:\s*;|$)/i.test(request.headers.get('content-type')||''))fail('JSON_REQUIRED');
 if(Number(request.headers.get('content-length'))>LIMIT)fail('BODY_TOO_LARGE',413);
 if(!request.body)fail('EMPTY_BODY');
 const reader=request.body.getReader(),parts=[];let size=0;
 try{while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>LIMIT){await reader.cancel();fail('BODY_TOO_LARGE',413);}parts.push(value);}}finally{reader.releaseLock();}
 const bytes=new Uint8Array(size);let offset=0;for(const part of parts){bytes.set(part,offset);offset+=part.byteLength;}
 try{return JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes));}catch{fail('INVALID_JSON');}
}
function validatePrice(price,baseline,previous,checkedAt,changing=true) {
 keys(price,priceKeys);
 if(!['verified','stale','unsupported','unavailable'].includes(price.status))fail('INVALID_PRICE_STATUS');
 for(const field of ['input','output','offPeakInput','offPeakOutput']){
  const v=price[field];if(v!==undefined&&v!==null&&(typeof v!=='number'||!Number.isFinite(v)||v<0||v>1000))fail('INVALID_AMOUNT');
  if(previous?.[field]!=null&&v==null)fail('PRICE_LOSS_FORBIDDEN');
 }
 if(!['USD','CNY','EUR','GBP','JPY'].includes(price.currency)||price.unit!=='百万 tokens')fail('INVALID_PRICE_UNIT');
 if(price.sourceUrl!=null){https(price.sourceUrl);if(baseline?.sourceUrl&&price.sourceUrl!==baseline.sourceUrl)fail('SOURCE_NOT_ALLOWED');}
 if((price.input!=null||price.output!=null)&&!price.sourceUrl)fail('PRICE_SOURCE_REQUIRED');
 if(price.status==='verified'&&(price.input==null||price.output==null||!price.updatedAt))fail('VERIFIED_PRICE_REQUIRED');
 for(const field of ['updatedAt','checkedAt'])if(price[field]!=null&&date(price[field])>checkedAt)fail('PRICE_TIME_AFTER_REPORT');
 for(const field of ['method','tier','note','lastError'])if(price[field]!==undefined&&(typeof price[field]!=='string'||price[field].length>1000))fail('INVALID_PRICE_TEXT');
 if(price.evidenceHash!==undefined&&!/^[a-f0-9]{64}$/.test(price.evidenceHash))fail('INVALID_EVIDENCE_HASH');
 if(changing&&previous?.updatedAt&&price.updatedAt&&date(price.updatedAt)<date(previous.updatedAt))fail('PRICE_TIME_REGRESSION',409);
 if(changing&&previous&&price.status!=='verified'){
  for(const field of ['input','output','offPeakInput','offPeakOutput','currency','unit','updatedAt'])if(!same(price[field],previous[field]))fail('UNVERIFIED_PRICE_CHANGE');
 }
 if(changing&&price.status==='verified'&&!same(price,previous)&&date(price.updatedAt)!==checkedAt)fail('NEW_PRICE_TIME_REQUIRED');
}
function validateReport(report,ids,baseline,now) {
 keys(report,reportKeys);const time=date(report.checkedAt);if(time>now)fail('FUTURE_REPORT');
 if(!['ok','partial'].includes(report.status))fail('INVALID_REPORT_STATUS');
 if(report.schedule!==undefined&&(typeof report.schedule!=='string'||report.schedule.length>200))fail('INVALID_SCHEDULE');
 const seen=new Set();for(const field of ['updatedModels','retainedModels','uncoveredModels']){
  if(!Array.isArray(report[field]))fail('INVALID_REPORT_MODELS');
  for(const id of report[field]){if(!ids.has(id)||seen.has(id))fail('INVALID_REPORT_MODELS');seen.add(id);}
 }
 if(seen.size!==ids.size)fail('INCOMPLETE_REPORT');
 keys(report.counts,new Set(['total','updated','retained','unsupported']));
 if(!same(report.counts,{total:ids.size,updated:report.updatedModels.length,retained:report.retainedModels.length,unsupported:report.uncoveredModels.length}))fail('INVALID_COUNTS');
 // Updater status describes configured source checks; uncovered models stay explicit.
 if(report.status==='ok'&&report.retainedModels.length)fail('REPORT_COVERAGE_MISMATCH');
 if(!Array.isArray(report.sources)||report.sources.length>100)fail('INVALID_SOURCES');
 const allowedSources=new Set(versions(baseline).map(v=>v.officialPricing?.sourceUrl).filter(Boolean));
 for(const s of report.sources){keys(s,new Set(['id','status','models','sourceUrl','evidenceHash','error']));if(typeof s.id!=='string'||!/^[a-z0-9-]{1,80}$/i.test(s.id)||!['ok','failed'].includes(s.status))fail('INVALID_SOURCE_REPORT');https(s.sourceUrl);if(!allowedSources.has(s.sourceUrl))fail('SOURCE_NOT_ALLOWED');if(s.models!==undefined&&(!Number.isInteger(s.models)||s.models<0||s.models>ids.size))fail('INVALID_SOURCE_COUNT');if(s.error!==undefined&&(typeof s.error!=='string'||s.error.length>160))fail('INVALID_SOURCE_ERROR');if(s.evidenceHash!==undefined&&!/^[a-f0-9]{64}$/.test(s.evidenceHash))fail('INVALID_EVIDENCE_HASH');}
 return time;
}
function mergeCatalog(incoming,baseline,current,report,now=Date.now()) {
 if(!same(withoutPrices(incoming),withoutPrices(baseline)))fail('CATALOG_CHANGES_FORBIDDEN');
 const baseVersions=versions(baseline),nextVersions=versions(incoming),oldVersions=versions(current);
 const ids=new Set(baseVersions.map(v=>v.modelId));if(ids.size!==baseVersions.length||ids.has(undefined))fail('INVALID_BASELINE',503);
 if(nextVersions.length!==ids.size||new Set(nextVersions.map(v=>v.modelId)).size!==ids.size)fail('INVALID_MODEL_IDS');
 const time=validateReport(report,ids,baseline,now);const merged=structuredClone(current),dest=versions(merged);
 for(let i=0;i<nextVersions.length;i++){
  const next=nextVersions[i];if(next.modelId!==baseVersions[i].modelId)fail('INVALID_MODEL_IDS');
  validatePrice(next.officialPricing,baseVersions[i].officialPricing,oldVersions[i].officialPricing,time);
  if(report.updatedModels.includes(next.modelId)&&(next.officialPricing.status!=='verified'||date(next.officialPricing.updatedAt)!==time))fail('UPDATED_MODEL_MISMATCH');
  dest[i].officialPricing=structuredClone(next.officialPricing);
 }
 return merged;
}
async function readState(bucket,baseline) {
 if(!bucket)return {catalog:baseline,report:null,hash:await hash(canonical(baseline)),etag:null};
 const stored=await bucket.get(KEY);if(!stored)return {catalog:baseline,report:null,hash:await hash(canonical(baseline)),etag:null};
 let state;try{state=await stored.json();}catch{fail('STORAGE_INVALID',503);}
 // Stored documents are never allowed to introduce new HTML, scripts or catalog fields.
 if(!object(state)||!same(withoutPrices(state.catalog),withoutPrices(baseline)))fail('STORAGE_BASELINE_MISMATCH',503);
 const actualHash=await hash(canonical(state.catalog));if(state.hash!==actualHash)fail('STORAGE_INTEGRITY_ERROR',503);
 const ids=new Set(versions(baseline).map(v=>v.modelId));const time=validateReport(state.report,ids,baseline,Date.now());
 versions(state.catalog).forEach((v,i)=>validatePrice(v.officialPricing,versions(baseline)[i].officialPricing,null,time,false));
 return {...state,etag:stored.etag};
}
function response(body,status=200,type='application/json; charset=utf-8',extra={}) {return new Response(body,{status,headers:{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...extra}});}
function json(body,status=200) {return response(JSON.stringify(body),status);}
function routePath(request) {let value;try{value=decodeURIComponent(new URL(request.url).pathname);}catch{fail('INVALID_PATH');}if(value.includes('\\')||value.includes('\0')||value.split('/').some(p=>p==='..'||p==='.')||value.includes('%'))fail('INVALID_PATH');return value==='/'?'/index.html':value;}

export function createWorker(assets=ASSETS,baseline=BASE_CATALOG) {
 return {async fetch(request,env={}) {
  try{
   const pathname=routePath(request);
   if(pathname==='/api/prices'){
    if(request.method!=='POST')return response('',405,'text/plain',{Allow:'POST'});
    await authenticate(request,env);if(!env.BUCKET)fail('STORAGE_NOT_CONFIGURED',503);
    const input=await boundedJSON(request);keys(input,new Set(['catalog','report']));
    const current=await readState(env.BUCKET,baseline);
    const checkedAt=date(input.report?.checkedAt);if(current.report&&checkedAt<=date(current.report.checkedAt))fail('STALE_REPORT',409);
    const catalog=mergeCatalog(input.catalog,baseline,current.catalog,input.report);
    const next={catalog,report:input.report,hash:await hash(canonical(catalog))};
    const conditions=new Headers(current.etag?{'If-Match':'"'+current.etag+'"'}:{'If-None-Match':'*'});
    const result=await env.BUCKET.put(KEY,JSON.stringify(next),{onlyIf:conditions,httpMetadata:{contentType:'application/json',cacheControl:'no-store'}});
    if(!result)fail('WRITE_CONFLICT',409);
    const verified=await readState(env.BUCKET,baseline);if(verified.hash!==next.hash||verified.report.checkedAt!==input.report.checkedAt)fail('READBACK_CONFLICT',409);
    return json({ok:true,hash:verified.hash,checkedAt:verified.report.checkedAt,status:verified.report.status});
   }
   if(!['GET','HEAD'].includes(request.method))return response('',405,'text/plain',{Allow:'GET, HEAD'});
   if(['/api/catalog','/catalog-v3.json','/catalog-v3.js','/api/price-status'].includes(pathname)){
    const state=await readState(env.BUCKET,baseline);let body,type='application/json; charset=utf-8';
    if(pathname==='/api/price-status')body=JSON.stringify({storage:state.etag?'r2':'baseline',hash:state.hash,checkedAt:state.report?.checkedAt||null,report:state.report});
    else if(pathname==='/catalog-v3.js'){type='text/javascript; charset=utf-8';body='window.HIAI_CATALOG = '+JSON.stringify(state.catalog).replace(/</g,'\\u003c')+';';}
    else body=JSON.stringify(state.catalog);
    return response(request.method==='HEAD'?null:body,200,type);
   }
   const asset=Object.hasOwn(assets,pathname)?assets[pathname]:null;if(!asset)return response(request.method==='HEAD'?null:'Not found',404,'text/plain; charset=utf-8');
   const bytes=request.method==='HEAD'?null:Uint8Array.from(atob(asset.base64),c=>c.charCodeAt(0));
   return response(bytes,200,asset.type,{'Content-Length':String(asset.size),ETag:'"'+asset.hash+'"','Cache-Control':'no-cache'});
  }catch(error){const known=Number.isInteger(error.status);return json({error:known?error.message:'SERVICE_UNAVAILABLE'},known?error.status:503);}
 }};
}
export default createWorker();
