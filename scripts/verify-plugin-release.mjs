import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import ts from 'typescript';
const base=process.argv[2] ?? 'http://127.0.0.1:3014';
const source=await fs.readFile(new URL('../lib/plugins.ts',import.meta.url),'utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const data=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
const decode=s=>s.replaceAll('&#x27;',"'").replaceAll('&#39;',"'").replaceAll('&quot;','"').replaceAll('&amp;','&');
for(const [lang,copy] of Object.entries(data.pluginCopy)) {
 for(const path of ['/plugins','/plugins/celeste-parallel','/blog/celeste-parallel-vst3']) {
  const response=await fetch(base+path,{headers:{Cookie:`portfolio-language=${lang}`}});
  assert.equal(response.status,200);
  const html=decode(await response.text());
  for(const expected of [copy.summary,data.pluginDownload,data.pluginMacDownload]) assert.ok(html.includes(expected),`${lang} ${path}: ${expected}`);
  if(path!='/plugins') for(const expected of [copy.scopeText,copy.testsText,...copy.steps,data.pluginSha256,data.pluginMacSha256]) assert.ok(html.includes(expected),`${lang} ${path}: missing release text`);
 }
}
for(const [path,hash] of [[data.pluginDownload,data.pluginSha256],[data.pluginMacDownload,data.pluginMacSha256]]) {
 const response=await fetch(base+path); assert.equal(response.status,200);
 assert.equal(crypto.createHash('sha256').update(Buffer.from(await response.arrayBuffer())).digest('hex'),hash);
}
for(const path of ['/plugins/celeste-parallel/LEEME-TANG.md','/plugins/celeste-parallel/validation-2026-09-24.json']) assert.equal((await fetch(base+path)).status,200);
console.log('PASS: 15 localized plugin pages, two download SHA-256 checks and release documents');
