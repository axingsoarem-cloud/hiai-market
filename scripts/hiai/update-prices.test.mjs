import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseSource, mergePricing, run } from './update-prices.mjs';
const here=path.dirname(fileURLToPath(import.meta.url));
const registry=JSON.parse(await readFile(path.join(here,'official-sources.json'),'utf8'));
const source=id=>registry.sources.find(s=>s.id===id);
const zai=await readFile(path.join(here,'fixtures/zai.txt'),'utf8');
const deepseek=await readFile(path.join(here,'fixtures/deepseek.txt'),'utf8');

test('live DeepSeek fixture: use peak cache-miss, never cached/discounted rate',()=>{
  const p=parseSource(source('deepseek'),deepseek).get('deepseek/deepseek-v4.1-flash-1017');
  assert.equal(p.input,0.3);assert.equal(p.output,1.2);assert.equal(p.offPeakInput,0.15);
});
test('DeepSeek changed version or column order is rejected',()=>{
  assert.throws(()=>parseSource(source('deepseek'),deepseek.replaceAll('DeepSeek-V4.1-Flash-1017','DeepSeek-V5')));
  assert.throws(()=>parseSource(source('deepseek'),deepseek.replace('DeepSeek-V4.1-Flash-1017','DeepSeek-V4-Pro-0813')));
});
test('live ZAI fixture maps exact legal variant and output column, excluding cache columns',()=>{
  const p=parseSource(source('zai'),zai).get('z-ai/glm-5.3-flashx-legal');
  assert.deepEqual(p,{input:0.37,output:1.25,tier:'Standard'});
});
test('changed headers, unit, currency and duplicate exact model rows fail closed',()=>{
  assert.throws(()=>parseSource(source('zai'),zai.replaceAll('Cached Input Storage','Discount')));
  assert.throws(()=>parseSource(source('zai'),zai.replaceAll('Prices per 1M tokens.','Prices per 1K tokens.')));
  assert.throws(()=>parseSource(source('zai'),zai.replace('USD','EUR')));
  const line=zai.split('\n').find(l=>l.includes('| GLM-5.3-FlashX-Legal |'));
  assert.throws(()=>parseSource(source('zai'),zai.replace(line,line+'\n'+line)));
});
test('failed refresh preserves price and timestamp; unknown price is never zero-filled',()=>{
  const version={officialPricing:{input:4,output:20,updatedAt:'2026-11-01T00:00:00Z',sourceUrl:'https://example.com'}};
  const p=mergePricing(version,null,source('anthropic'),'2026-11-07T00:00:00Z');
  assert.equal(p.input,4);assert.equal(p.output,20);assert.equal(p.updatedAt,version.officialPricing.updatedAt);assert.equal(p.status,'stale');
  const missing=mergePricing({},null,source('anthropic'),'2026-11-07T00:00:00Z');assert.equal(missing.input,null);assert.equal(missing.updatedAt,null);
});
test('Claude Fast and Batch suffixes cannot replace Standard prices',()=>{
  for (const variant of ['Fast','Batch']) {
    const body='## Model pricing\nPrices USD / MTok\n| Name | Input | Output |\n| --- | --- | --- |\n| Claude Opus 5.5 '+variant+' | $24 / MTok | $120 / MTok |\n## Cloud platform pricing';
    assert.throws(()=>parseSource(source('anthropic'),body),/EXACT_MODEL_NOT_FOUND/);
    const old={officialPricing:{input:4,output:20,updatedAt:'2026-11-01T00:00:00Z'}};
    const retained=mergePricing(old,null,source('anthropic'),'2026-11-07T00:00:00Z');
    assert.equal(retained.input,4);assert.equal(retained.output,20);assert.equal(retained.updatedAt,old.officialPricing.updatedAt);
  }
});
test('synthetic adapter contracts: standard table only; these fixtures are not live verification',()=>{
  const openai='## Flagship models\nPrices per 1M tokens.\n| Model | Input | Output | Cached input |\n| --- | --- | --- | --- |\n| gpt-6.1-terra | $1.00 | $5.00 | $0.05 |\n| gpt-6-luna | $0.10 | $0.50 | $0.01 |\nAll models\n| gpt-6-luna | $0.05 | $0.25 | $0.005 |';
  assert.equal(parseSource(source('openai'),openai).get('openai/gpt-6-luna').input,0.1);
  const claude='## Model pricing\nPrices USD / MTok\n| Name | Input | Output |\n| --- | --- | --- |\n| Claude Opus 5.5 | $4 / MTok | $20 / MTok |\n| Claude Haiku 4.5 | $1 / MTok | $5 / MTok |\n## Cloud platform pricing';
  assert.equal(parseSource(source('anthropic'),claude).get('anthropic/claude-haiku-4.5').output,5);
  assert.equal(parseSource(source('xai'),'grok-4.7\nInput\n$2.00 / 1M tokens\nOutput\n$6.00 / 1M tokens').get('x-ai/grok-4.7').output,6);
});
test('integration: denied source retains existing official price and write keeps JSON/JS identical',async()=>{
  const dir=await mkdtemp(path.join(tmpdir(),'hiai-pricing-'));
  try {
    const catalog={families:[{id:'claude',versions:[{modelId:'anthropic/claude-opus-5.5',inputPrice:99,officialPricing:{input:4,output:20,updatedAt:'2026-11-01T00:00:00Z',status:'verified'}}]}]};
    const p=path.join(dir,'catalog.json');await writeFile(p,JSON.stringify(catalog));await writeFile(path.join(dir,'catalog.js'),'old');
    const result=await run({catalog:p,report:path.join(dir,'report.json'),write:true,now:'2026-11-07T00:00:00Z',fetchImpl:async()=>({ok:false,status:403})});
    const saved=JSON.parse(await readFile(p,'utf8'));assert.equal(result.status,'partial');assert.equal(saved.families[0].versions[0].officialPricing.updatedAt,'2026-11-01T00:00:00Z');assert.equal(saved.families[0].versions[0].inputPrice,99);
    assert.equal(await readFile(path.join(dir,'catalog.js'),'utf8'),'window.HIAI_CATALOG = '+JSON.stringify(saved,null,2)+';');
  } finally {await rm(dir,{recursive:true,force:true});}
});

