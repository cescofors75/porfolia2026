import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import ts from 'typescript';

// Exercise the actual server-rendered routes and all five locale variants.
const base = process.argv[2] ?? 'http://127.0.0.1:3000';
const source = await fs.readFile(new URL('../lib/project-updates.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { projectUpdates, updateUI } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const decode = (s) => s.replaceAll('&#x27;', "'").replaceAll('&#39;', "'").replaceAll('&quot;', '"').replaceAll('&amp;', '&');
let checked = 0;
for (const language of Object.keys(updateUI)) {
  for (const project of projectUpdates) {
    assert.ok(project.copy[language].body.length >= 2);
    for (const section of ['proyectos', 'blog']) {
      const path = `/${section}/${project.slug}`;
      const response = await fetch(base + path, { headers: { Cookie: `portfolio-language=${language}` } });
      assert.equal(response.status, 200, `${language} ${path}`);
      const html = decode(await response.text());
      assert.ok(html.includes(project.copy[language].summary), `Missing translated summary: ${language} ${path}`);
      assert.ok(html.includes(project.copy[language].status), `Missing translated status: ${language} ${path}`);
      for (const paragraph of project.copy[language].body) assert.ok(html.includes(paragraph), `Missing translated body: ${language} ${path}`);
      assert.ok(html.includes(`https://cesco.dev${path}`), `Missing canonical: ${path}`);
      assert.ok(html.includes(`lang="${language}"`), `Wrong document language: ${language} ${path}`);
      checked++;
    }
  }
  console.log(`${language}: 12 project/article routes passed`);
}
for (const project of projectUpdates.filter(p => p.image)) {
  const response = await fetch(base + project.image);
  assert.equal(response.status, 200, project.image);
  assert.match(response.headers.get('content-type'), /^image\//);
}
const sitemap = await (await fetch(base + '/sitemap.xml')).text();
for (const project of projectUpdates) for (const section of ['proyectos', 'blog']) assert.ok(sitemap.includes(`https://cesco.dev/${section}/${project.slug}`));
for (const section of ['proyectos', 'blog']) assert.equal((await fetch(`${base}/${section}/missing-update-404`)).status, 404);
console.log(`PASS: ${checked} localized routes, images, sitemap and unknown-route 404s`);
