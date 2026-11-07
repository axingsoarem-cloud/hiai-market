import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, '../..');
const clean = s => s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const dollars = s => { const m = s.replace(/\\\$/g, '$').match(/^\s*\$([\d.]+)(?:\s|\/|$)/); if (!m) throw Error('PRICE_CELL_INVALID'); const n = Number(m[1]); if (!Number.isFinite(n) || n < 0 || n > 1000) throw Error('PRICE_RANGE_INVALID'); return n; };
const hash = s => createHash('sha256').update(s).digest('hex');

// Only declared exact model IDs and declared table sections can update a price.
// Navigation text, cached-input columns, batch prices and other providers are not fallbacks.
export function parseSource(source, body) {
  if (body.length > 5_000_000 || /app-unavailable-in-region|cf-chl-|Just a moment/i.test(body)) throw Error('SOURCE_NOT_PRICING');
  if (source.parser === 'deepseek') {
    const table = (body.match(/<table\b[\s\S]*?<\/table>/gi) || []).find(t => clean(t).includes('MODEL VERSION'));
    if (!table) throw Error('TABLE_MISSING');
    const text = clean(table);
    if (!/MODEL VERSION DeepSeek-V4\.1-Flash-1017 DeepSeek-V4-Pro-0813 THINKING MODE/.test(text)) throw Error('MODEL_COLUMN_ORDER_CHANGED');
    if (!text.includes('DeepSeek-V4.1-Flash-1017') || !text.includes('deepseek-flash') || !/1M INPUT TOKENS/.test(text)) throw Error('MODEL_OR_UNIT_CHANGED');
    const input = text.match(/1M INPUT TOKENS\s*\(CACHE MISS\)\s*OFF-PEAK\s*\$([\d.]+)\s*\$[\d.]+\s*PEAK\s*\$([\d.]+)/);
    const output = text.match(/1M OUTPUT TOKENS\s*OFF-PEAK\s*\$([\d.]+)\s*\$[\d.]+\s*PEAK\s*\$([\d.]+)/);
    if (!input || !output) throw Error('PEAK_TIER_STRUCTURE_CHANGED');
    return new Map([[source.models[0].id, { input: dollars('$'+input[2]), output: dollars('$'+output[2]), tier: '高峰标准价；低峰价另列', offPeakInput: dollars('$'+input[1]), offPeakOutput: dollars('$'+output[1]), note: '高峰：周一至周五 UTC 01:00–04:00、06:00–10:00，中国法定节假日除外；其他时间为低峰。' }]]);
  }
  if (/€|\bEUR\b|\bCNY\b|\bRMB\b/.test(body)) throw Error('CURRENCY_AMBIGUOUS');
  let section = body;
  if (source.start) {
    const start = body.indexOf(source.start); if (start < 0) throw Error('SECTION_MISSING');
    section = body.slice(start + source.start.length);
  }
  if (source.end) { const end = section.indexOf(source.end); if (end < 0) throw Error('SECTION_END_MISSING'); section = section.slice(0, end); }
  if (!source.units.some(u => section.includes(u) || body.slice(0, body.indexOf(source.start || '') + 800).includes(u))) throw Error('UNIT_MISSING');
  if (source.parser === 'xai') {
    const m = section.match(/grok-4\.7[\s\S]{0,3000}?Input\s*\n+\s*\$([\d.]+)\s*\/\s*1M tokens[\s\S]{0,200}?Output\s*\n+\s*\$([\d.]+)\s*\/\s*1M tokens/i);
    if (!m) throw Error('MODEL_PRICE_STRUCTURE_CHANGED');
    return new Map([[source.models[0].id, { input: dollars('$'+m[1]), output: dollars('$'+m[2]), tier:'Standard' }]]);
  }
  const rows = section.split(/\r?\n/).map(l => l.trim().replace(/^>\s*/, '')).filter(l => l.startsWith('|')).map(l => l.split('|').slice(1,-1).map(c => clean(c).replace(/\\\$/g,'$')));
  const headerIndex = rows.findIndex(r => r.includes('Input') && r.includes('Output'));
  if (headerIndex < 0) throw Error('TABLE_HEADER_MISSING');
  const header = rows[headerIndex];
  if (source.header && JSON.stringify(header) !== JSON.stringify(source.header)) throw Error('TABLE_HEADER_CHANGED');
  const result = new Map();
  for (const model of source.models) {
    const matches = rows.slice(headerIndex+1).filter(r => { const label = r[0].replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/[*`]/g,'').trim(); return label === model.label; });
    if (matches.length !== 1) continue;
    const row = matches[0]; if (row.length !== header.length) throw Error('ROW_WIDTH_CHANGED');
    result.set(model.id, {input:dollars(row[header.indexOf('Input')]), output:dollars(row[header.indexOf('Output')]), tier:source.tier || 'Standard'});
  }
  if (!result.size) throw Error('EXACT_MODEL_NOT_FOUND');
  return result;
}

export function mergePricing(version, value, source, now, evidenceHash) {
  if (value) return { ...value, unit:'百万 tokens', currency:'USD', sourceUrl:source.sourceUrl, updatedAt:now, checkedAt:now, status:'verified', method:'official-source-parser', evidenceHash };
  const old = version.officialPricing;
  return { ...(old || {input:null,output:null,unit:'百万 tokens',currency:'USD',sourceUrl:source?.sourceUrl || null,updatedAt:null}), status: old?.updatedAt ? 'stale' : 'unavailable', checkedAt:now, lastError:'未取得同型号、同档位官方价格；保留已有价格及其核验时间。' };
}

export async function run(options={}) {
  const catalogPath = path.resolve(options.catalog || path.join(projectRoot,'public/catalog-v3.json'));
  const reportPath = path.resolve(options.report || path.join(path.dirname(catalogPath),'pricing-update-report.json'));
  const registry = JSON.parse(await readFile(path.join(here,'official-sources.json'),'utf8'));
  const catalog = JSON.parse(await readFile(catalogPath,'utf8'));
  const now = options.now || new Date().toISOString();
  const report = {checkedAt:now,status:'ok',schedule:'每天北京时间09:00（UTC 01:00）',sources:[],updatedModels:[],retainedModels:[],uncoveredModels:[]};
  const available = new Map();
  for (const source of registry.sources) {
    try {
      let body;
      if (options.fixtures) body = await readFile(path.join(options.fixtures,source.id+'.txt'),'utf8');
      else {
        const response = await (options.fetchImpl || fetch)(source.fetchUrl,{signal:AbortSignal.timeout(15000),redirect:'follow',headers:{Accept:'text/markdown,text/html;q=0.8','User-Agent':'HiAi-public-price-monitor/1.0'}});
        if (!response.ok) throw Error('HTTP_'+response.status);
        if (new URL(response.url || source.fetchUrl).hostname !== new URL(source.fetchUrl).hostname) throw Error('REDIRECT_HOST_CHANGED');
        if (Number(response.headers.get('content-length')) > 5_000_000) throw Error('SOURCE_TOO_LARGE');
        body = await response.text();
      }
      const prices = parseSource(source,body); const evidenceHash=hash(body);
      for (const [id,value] of prices) available.set(id,{value,source,evidenceHash});
      report.sources.push({id:source.id,status:'ok',models:prices.size,sourceUrl:source.sourceUrl,evidenceHash});
    } catch(error) { report.status='partial'; report.sources.push({id:source.id,status:'failed',error:String(error.message).slice(0,160),sourceUrl:source.sourceUrl}); }
  }
  for (const family of catalog.families) for (const version of family.versions) {
    const match=available.get(version.modelId);
    const source=registry.sources.find(s=>s.models.some(m=>m.id===version.modelId));
    if(match) {version.officialPricing=mergePricing(version,match.value,match.source,now,match.evidenceHash); report.updatedModels.push(version.modelId);}
    else if(source) {version.officialPricing=mergePricing(version,null,source,now); report.retainedModels.push(version.modelId);report.status='partial';}
    else { version.officialPricing ||= {input:null,output:null,unit:'百万 tokens',currency:'USD',sourceUrl:null,updatedAt:null,status:'unsupported',note:'尚未接入同型号的官方标准价来源；OpenRouter参考价单独保留。'}; report.uncoveredModels.push(version.modelId); }
  }
  report.counts={total:catalog.families.reduce((n,f)=>n+f.versions.length,0),updated:report.updatedModels.length,retained:report.retainedModels.length,unsupported:report.uncoveredModels.length};
  if(options.write) {
    const json=JSON.stringify(catalog,null,2); const jsPath=catalogPath.replace(/\.json$/,'.js');
    const oldJson=await readFile(catalogPath,'utf8');const oldJs=await readFile(jsPath,'utf8');
    try { await writeFile(catalogPath+'.tmp',json);await writeFile(jsPath+'.tmp','window.HIAI_CATALOG = '+json+';');await rename(catalogPath+'.tmp',catalogPath);await rename(jsPath+'.tmp',jsPath); }
    catch(error) {await writeFile(catalogPath,oldJson);await writeFile(jsPath,oldJs);throw error;}
  }
  await mkdir(path.dirname(reportPath),{recursive:true});await writeFile(reportPath,JSON.stringify(report,null,2));
  return report;
}

if (typeof process !== 'undefined' && process.argv[1] && import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  const args=process.argv.slice(2);const val=key=>{const i=args.indexOf(key);return i<0?undefined:args[i+1]};
  if(args.includes('--help')) console.log('node scripts/hiai/update-prices.mjs [--check|--write] [--catalog PATH] [--report PATH] [--allow-partial]\nNo keys. Check is default. Exit 2 indicates partial source coverage/failure; --allow-partial exits 0 but retains report.status.');
  else run({write:args.includes('--write'),catalog:val('--catalog'),report:val('--report')}).then(r=>{console.log(JSON.stringify({status:r.status,...r.counts}));process.exitCode=r.status==='partial'&&!args.includes('--allow-partial')?2:0}).catch(e=>{console.error(e.message);process.exitCode=1});
}

