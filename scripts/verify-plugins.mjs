import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import ts from 'typescript';
const base=process.argv[2]??'http://localhost:3001';
const seoSource = await fs.readFile('lib/seo.ts', 'utf8');
const seoJs = ts.transpileModule(seoSource, {compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const seoUrl = `data:text/javascript;base64,${Buffer.from(seoJs).toString('base64')}`;
const source=(await fs.readFile('lib/plugins.ts','utf8')).replaceAll('@/lib/seo', seoUrl);
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {pluginCopy,pluginDownload,pluginSha256}=await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
for(const [lang,copy] of Object.entries(pluginCopy)) {
 for(const path of ['/plugins','/plugins/celeste-parallel','/blog/celeste-parallel-vst3']) {
  const r=await fetch(base+path,{headers:{Cookie:`portfolio-language=${lang}`}}); assert.equal(r.status,200);
  const h=await r.text(); if (!path.startsWith("/blog/")) { assert.ok(h.includes(copy.download)); assert.ok(h.includes(pluginDownload)); } assert.ok(h.includes(`lang="${lang}"`)); assert.ok(h.includes(`https://www.cesco.dev${path}`));
  if(path!='/plugins') {
    assert.ok(h.includes(copy.storyTitle)); assert.ok(h.includes('<audio'));
    if (path.startsWith('/blog/')) { assert.ok(h.includes('/plugins/celeste-parallel')); assert.ok(!h.includes('id="installation"')); }
    else { assert.ok(h.includes(copy.install)); assert.ok(h.includes(copy.controls)); assert.ok(!h.includes(copy.story[0])); }
  }
 }
 console.log(`${lang}: plugin index, documentation and blog passed`);
}
const zip=await fetch(base+pluginDownload); assert.equal(zip.status,200); const bytes=Buffer.from(await zip.arrayBuffer());assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),pluginSha256);console.log(`ZIP verified: ${bytes.length} bytes, SHA-256 matches original`);
for(const asset of ['/plugins/celeste-parallel/demo.mp3','/plugins/celeste-parallel/interface.png','/plugins/celeste-parallel/LEEME.md','/plugins/celeste-parallel/PRUEBAS.md']) {const r=await fetch(base+asset);assert.equal(r.status,200);await r.body.cancel();}
const sitemap=await(await fetch(base+'/sitemap.xml')).text(); assert.ok(sitemap.includes('/plugins/celeste-parallel'));console.log('Assets and sitemap passed');
