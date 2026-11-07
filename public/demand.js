'use strict';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const key='hiai-review-demands';
const sourceTypes={official:'官方',cloud:'云平台',aggregator:'聚合平台',custom:'自定义'};
const supplySources=(Array.isArray(window.HIAI_SUPPLY_SOURCES)?window.HIAI_SUPPLY_SOURCES:[]).filter(x=>x&&typeof x.id==='string'&&x.id!=='custom'&&typeof x.name==='string'&&x.name.trim()&&x.name.length<=80&&['official','cloud','aggregator'].includes(x.type));
const isModelProduct=value=>['模型 API','模型预置吞吐量'].includes(value);
const productLabel=value=>value==='GPU 算力'?'GPU云服务器':value;
function sourceLabel(d){return typeof d.sourceName==='string'&&d.sourceName.trim()&&d.sourceName.length<=80?d.sourceName:'未填写'}
const families=Array.isArray(window.HIAI_CATALOG?.families)?window.HIAI_CATALOG.families:[];
const firstFamily=families.find(f=>f.versions?.length), firstVersion=firstFamily?.versions[0];
const seeds=[
 {id:'seed-buy-api',kind:'buy',product:'模型 API',title:'为客服助手寻找模型 API 方案',family:firstFamily?.family||'待确认',version:firstVersion?.version||'待确认',modelId:firstVersion?.modelId||'',spec:'每月 1000 万输入 tokens · 中文问答',budget:'500 / 月',region:'亚太',description:'演示采购计划：需要配置建议，实际可供、价格与服务条件待确认。',contact:'演示采购团队',date:'示例'},
 {id:'seed-sell-gpu',kind:'sell',product:'GPU 算力',title:'80GB GPU 实例合作供应意向',spec:'单卡 80GB · 按小时或包月',budget:'面议',region:'欧洲',description:'演示供给信息，库存、交付和报价需单独确认。',contact:'演示算力供应商',date:'示例'},
 {id:'seed-buy-app',kind:'buy',product:'软件订阅',title:'采购研发团队 AI 编程工具',spec:'20 席位 · 月度订阅',budget:'1000 / 月',region:'亚太',description:'需要团队授权、统一账单和使用指引。品牌与套餐可协商。',contact:'演示研发团队',date:'示例'}
];
let localDemands=[],rawRecords=[],loadedValue=null,storageReadable=true,demandTab='all',toastTimer;
function validDemand(d){return d&&typeof d==='object'&&typeof d.id==='string'&&d.id.startsWith('local-')&&['buy','sell'].includes(d.kind)&&['title','spec','budget','region','description','contact','product','date'].every(k=>typeof d[k]==='string'&&d[k].length<=1000)}
function load(){
 try{loadedValue=localStorage.getItem(key);rawRecords=JSON.parse(loadedValue||'[]');if(!Array.isArray(rawRecords))throw Error('invalid');localDemands=rawRecords.filter(validDemand).map(d=>({...d,local:true}));storageReadable=true;$('#storageError').hidden=true}
 catch{storageReadable=false;rawRecords=[];localDemands=[];$('#storageError').hidden=false;$('#storageError').textContent='本机供需记录暂时无法读取。原数据未覆盖，请检查浏览器存储后刷新重试。'}
}
function error(message){const el=document.querySelector('dialog[open] [data-form-error]')||$('#storageError');el.textContent=message;el.hidden=false;el.scrollIntoView({block:'nearest'})}
function save(next){
 if(!storageReadable){error('已有记录无法读取，本次未保存。请检查存储设置后刷新重试。');return false}
 try{if(localStorage.getItem(key)!==loadedValue){load();render();error('另一页面更新了供需记录，已重新载入。请核对后再次操作。');return false}const value=JSON.stringify(next);localStorage.setItem(key,value);loadedValue=value;rawRecords=next;localDemands=next.filter(validDemand).map(d=>({...d,local:true}));return true}
 catch{error('浏览器无法保存，内容尚未更改。请检查存储设置后重试。');return false}
}
function toast(message){$('#toast').textContent=message;$('#toast').style.display='block';clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').style.display='none',4500)}
function models(d){return isModelProduct(d.product)?`${typeof d.family==='string'?d.family:'旧记录未指定模型'} · ${typeof d.version==='string'?d.version:'旧记录未指定版本'}`:'模型 / 版本：不适用'}
function items(){return [...localDemands,...seeds]}
function render(){
 const q=$('#demandSearch').value.trim().toLowerCase(),product=$('#productFilter').value;
 const filtered=items().filter(d=>(demandTab==='all'||demandTab==='mine'&&d.local||d.kind===demandTab)&&(product==='all'||d.product===product)&&[d.title,d.spec,d.description,d.product,productLabel(d.product),d.region,models(d),d.modelId,sourceLabel(d)].join(' ').toLowerCase().includes(q));
 $('#demandCount').textContent=`${filtered.length} 条供需 · 示例与本机发布`;$('#demandEmpty').hidden=filtered.length>0;
 $('#demandList').innerHTML=filtered.map(d=>`<article class="demand-card"><div class="demand-meta"><span class="demand-badge ${d.kind}">${d.kind==='buy'?'采购需求':'供应信息'}</span><span>${esc(productLabel(d.product))} · ${esc(d.region)}</span><small>${d.local?'本机发布':'示例内容'}</small></div><h3>${esc(d.title)}</h3><p class="model-version">${esc(models(d))}</p><p class="demand-source">供应源：${esc(sourceLabel(d))}</p><p class="demand-spec">${esc(d.spec)}</p><div class="demand-bottom"><strong>${esc(d.budget)} <small>USD</small></strong><button data-demand-detail="${esc(d.id)}">查看详情</button></div></article>`).join('');
 document.querySelectorAll('[data-demand]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.demand===demandTab)));
}
function clearError(dialog){const el=$('#'+dialog+' [data-form-error]');el.hidden=true;el.textContent=''}
function versions(){const family=families.find(f=>f.id===$('#demandFamily').value);$('#demandVersion').innerHTML='<option value="">请选择版本</option>'+(family?.versions||[]).map(v=>`<option value="${esc(v.modelId)}">${esc(v.version||v.name)}</option>`).join('')}
function productChanged(){
 const api=isModelProduct($('#demandProduct').value);
 for(const id of ['demandFamily','demandVersion']){$('#'+id).disabled=!api;$('#'+id).required=api}
 $('#demandFamily').innerHTML=api?'<option value="">请选择模型系列</option>'+families.map(f=>`<option value="${esc(f.id)}">${esc(f.family)}</option>`).join(''):'<option value="">不适用</option>';
 if(api)versions();else $('#demandVersion').innerHTML='<option value="">不适用</option>';
 $('#modelHint').textContent=api?(families.length?'模型和版本来自当前目录；用量、并发和交付要求请填写在规格描述中。':'模型目录未能载入，请刷新后重试；GPU 和软件订阅仍可发布。'):'GPU云服务器和软件订阅无需模型字段。请在规格描述中填写显存、实例、软件名称或席位要求。';
}
function sourceChanged(){const custom=$('#demandSource').value==='custom';$('#customSourceField').hidden=!custom;$('#demandSourceName').disabled=!custom;$('#demandSourceName').required=custom;$('#demandSourceName').setCustomValidity('')}
function initSources(){$('#demandSource').innerHTML='<option value="">未指定供应源</option>'+supplySources.map(x=>'<option value="'+esc(x.id)+'">'+esc(x.name)+' · '+esc(sourceTypes[x.type])+'</option>').join('')+'<option value="custom">自定义供应源…</option>';sourceChanged()}
function openPublish(kind){clearError('publishDialog');$('#publishForm').reset();$('#demandKind').value=kind;$('#publishTitle').textContent=kind==='buy'?'发布采购需求':'发布供应';productChanged();sourceChanged();$('#publishDialog').showModal()}
function openService(context=''){document.querySelectorAll('dialog[open]').forEach(d=>d.close());$('#serviceContext').textContent=context?'咨询主题：'+context:'客服渠道为虚拟演示信息，正式上线前配置。';$('#serviceDialog').showModal()}
function detail(id){
 const d=items().find(d=>d.id===id);if(!d)return;clearError('demandDialog');
 $('#demandDetail').innerHTML=`<p class="muted">${d.kind==='buy'?'采购需求':'供应信息'} · ${d.local?'本机发布':'示例内容'}</p><h2 id="demandDetailTitle">${esc(d.title)}</h2><dl><dt>产品类型</dt><dd>${esc(productLabel(d.product))}</dd><dt>模型与版本</dt><dd>${esc(models(d))}</dd><dt>供应源</dt><dd>${esc(sourceLabel(d))}</dd><dt>规格描述</dt><dd class="preserve-text">${esc(d.spec)}</dd><dt>预算 / 报价</dt><dd>${esc(d.budget)} USD</dd><dt>地区与日期</dt><dd>${esc(d.region)} · ${esc(d.date)}</dd><dt>补充详情</dt><dd class="preserve-text">${esc(d.description)}</dd><dt>演示联系人</dt><dd>${esc(d.contact)}</dd></dl><p class="muted">此内容仅供原型演示。联系入口未连接真实交易对方。</p><button id="matchContact" class="primary">联系官方客服</button>${d.local?'<button id="withdrawDemand" class="text-button">撤下本机发布</button>':''}`;
 $('#matchContact').onclick=()=>openService(d.title);
 if(d.local)$('#withdrawDemand').onclick=()=>{if(save(rawRecords.filter(x=>x?.id!==id))){$('#demandDialog').close();render();toast('已撤下本机发布');document.querySelector('[data-demand="mine"]').focus()}};
 $('#demandDialog').showModal();
}
document.querySelectorAll('dialog .close').forEach(b=>b.onclick=()=>b.closest('dialog').close());
document.querySelectorAll('[data-publish]').forEach(b=>b.onclick=()=>openPublish(b.dataset.publish));
document.querySelectorAll('[data-demand]').forEach(b=>b.onclick=()=>{demandTab=b.dataset.demand;render()});
document.querySelectorAll('[data-service]').forEach(b=>b.onclick=()=>openService());
$('#demandSearch').oninput=render;$('#productFilter').onchange=render;
$('#resetFilters').onclick=()=>{demandTab='all';$('#productFilter').value='all';$('#demandSearch').value='';render()};
$('#demandList').onclick=e=>{const b=e.target.closest('[data-demand-detail]');if(b)detail(b.dataset.demandDetail)};
$('#demandSource').onchange=sourceChanged;
$('#demandProduct').onchange=productChanged;$('#demandFamily').onchange=versions;
$('#demandKind').onchange=()=>$('#publishTitle').textContent=$('#demandKind').value==='buy'?'发布采购需求':'发布供应';
$('#publishForm').oninput=e=>e.target.setCustomValidity?.('');
$('#publishForm').onsubmit=e=>{
 e.preventDefault();clearError('publishDialog');
 for(const id of ['demandTitle','demandSpec','demandBudget','demandDescription','demandContact']){const el=$('#'+id);if(!el.value.trim()){el.setCustomValidity('请填写有效内容');el.reportValidity();return}}
 if(localDemands.length>=100){error('本机最多保存 100 条，请先撤下不需要的内容。');return}
 const product=$('#demandProduct').value,family=families.find(f=>f.id===$('#demandFamily').value),version=family?.versions.find(v=>v.modelId===$('#demandVersion').value);
 if(isModelProduct(product)&&!version){error('请选择目录中的模型系列和版本。');return}
 const sourceId=$('#demandSource').value,source=supplySources.find(x=>x.id===sourceId),customName=$('#demandSourceName').value.trim();
 if(sourceId==='custom'&&(!customName||customName.length>80)){error('自定义供应源请填写 1–80 字名称。');return}
 if(sourceId&&sourceId!=='custom'&&!source){error('请选择列表中的供应源，或使用自定义输入。');return}
 const sourceFields={nativeSourceId:source?.id||'',sourceName:source?source.name:sourceId==='custom'?customName:'',sourceType:source?source.type:sourceId==='custom'?'custom':''};
 const d={...sourceFields,id:'local-'+crypto.randomUUID(),kind:$('#demandKind').value,product,title:$('#demandTitle').value.trim(),family:isModelProduct(product)?family.family:'',version:isModelProduct(product)?(version.version||version.name):'',modelId:isModelProduct(product)?version.modelId:'',spec:$('#demandSpec').value.trim(),budget:$('#demandBudget').value.trim(),region:$('#demandRegion').value,description:$('#demandDescription').value.trim(),contact:$('#demandContact').value.trim(),date:new Date().toLocaleDateString('zh-CN'),local:true};
 if(save([d,...rawRecords])){$('#publishDialog').close();demandTab='mine';$('#productFilter').value='all';$('#demandSearch').value='';render();$('#community').scrollIntoView();toast('已保存到本机，未上传或发送')}
};
window.addEventListener('storage',e=>{if(e.key===key||e.key===null){load();render()}});
load();render();initSources();
const prefill=new URLSearchParams(location.search),initialKind=prefill.get('kind')||prefill.get('publish');
if(['buy','sell'].includes(initialKind)){
 openPublish(initialKind);const warnings=[],familyName=prefill.get('family'),versionName=prefill.get('version');
 if(familyName||versionName){const family=families.find(f=>f.family===familyName);if(family){$('#demandFamily').value=family.id;versions();const version=family.versions.find(v=>(v.version||v.name)===versionName);if(version)$('#demandVersion').value=version.modelId;else if(versionName)warnings.push('链接中的模型版本不在所选系列目录中，请重新选择。');}else warnings.push('链接中的模型系列无法核实，请从目录重新选择。');}
 const sourceId=prefill.get('source'),name=prefill.get('sourceName');
 if(sourceId&&sourceId!=='custom'){const source=supplySources.find(x=>x.id===sourceId);if(source)$('#demandSource').value=source.id;else warnings.push('链接中的供应源未收录，未自动选入；可自行选择或填写。');}
 else if(sourceId==='custom'||name){if(name&&name.trim()&&name.length<=80){$('#demandSource').value='custom';$('#demandSourceName').value=name.trim();}else warnings.push('链接中的自定义供应源为空或超过 80 字，未自动填入。');}
 sourceChanged();if(warnings.length)error(warnings.join(' '));
}

