import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import ts from 'typescript';
const require = createRequire(import.meta.url);
function loadTypeScript(path) {
  const source = readFileSync(new URL(path, import.meta.url),'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const exports = {};
  new Function('exports','require',outputText)(exports, require);
  return exports;
}
const { agentSchema } = loadTypeScript('../src/lib/agentSchema.ts');
const { outbound } = loadTypeScript('../src/lib/editorial.ts');
const folder = new URL('../src/content/agents/', import.meta.url);
const profiles = readdirSync(folder).filter(name=>name.endsWith('.md')).map(name => {
  const text = readFileSync(new URL(name,folder),'utf8');
  const header = text.split('---')[1];
  return { name, data: Object.fromEntries(header.trim().split('\n').map(line => {
    const index = line.indexOf(':');
    return [line.slice(0,index),JSON.parse(line.slice(index+1).trim())];
  })) };
});
test('every public profile has source-based metadata and no fabricated assessment fields',()=>{
  assert.ok(profiles.length >= 2);
  for (const {name,data} of profiles) {
    assert.equal(agentSchema.safeParse(data).success,true,`${name}: ${JSON.stringify(agentSchema.safeParse(data).error?.issues)}`);
    assert.ok(data.sources.some(source=>new URL(source.url).hostname === new URL(data.websiteUrl).hostname),name);
    assert.ok(data.sources.some(source=>source.url===data.pricingUrl),name);
    assert.equal(outbound(data).affiliate,false,name);
    assert.equal(outbound(data).url,data.websiteUrl,name);
  }
});
test('schema rejects legacy ratings, fake pricing and compliance badges',()=>{
  const valid = profiles[0].data;
  for (const field of ['rating','ratingCount','aiActCompliant','priceStartingAt','affiliateUrl']) {
    assert.equal(agentSchema.safeParse({...valid,[field]:field==='rating'?4.8:true}).success,false,field);
  }
  assert.equal(agentSchema.safeParse({...valid,sources:[]}).success,false);
  assert.equal(agentSchema.safeParse({...valid,lastReviewed:'2099-01-01'}).success,false);
  assert.equal(agentSchema.safeParse({...valid,lastReviewed:'2026-02-30'}).success,false);
  assert.equal(agentSchema.safeParse({...valid,websiteUrl:'javascript:alert(1)'}).success,false);
});
test('an affiliate link requires actual approval metadata and a valid date',()=>{
  const valid = profiles[0].data;
  const affiliate = { status:'approved',url:'https://publisher.example/assigned-link',programUrl:'https://publisher.example/affiliates',approvedAt:valid.lastReviewed };
  assert.equal(agentSchema.safeParse({...valid,affiliate}).success,true);
  assert.equal(outbound({...valid,affiliate}).rel,'sponsored noopener noreferrer');
  assert.equal(outbound({...valid,affiliate:{...affiliate,status:'pending'}}).url,valid.websiteUrl);
  assert.equal(agentSchema.safeParse({...valid,affiliate:{...affiliate,status:'pending'}}).success,false);
  assert.equal(agentSchema.safeParse({...valid,affiliate:{url:affiliate.url}}).success,false);
});
