import assert from 'node:assert/strict';

const base = process.argv[2] ?? 'http://localhost:3001';
const origin = 'https://www.cesco.dev';
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"');
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]));
assert.equal(new Set(locations).size, locations.length, 'Duplicate sitemap URLs');
let checked = 0;
for (const location of locations) {
  const url = new URL(location);
  assert.equal(url.origin, origin);
  const response = await fetch(base + url.pathname + url.search, {
    headers: { Cookie: 'portfolio-language=de', 'Accept-Language': 'fr' },
  });
  assert.equal(response.status, 200, location);
  const html = decode(await response.text());
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.equal(canonical?.[1] && new URL(canonical[1]).href, new URL(location).href, `Canonical mismatch: ${location}`);
  assert.ok(html.match(/<title>[^<]+<\/title>/), location);
  assert.ok(html.match(/<meta name="description" content="[^"]+"/), location);
  const language = url.searchParams.get('lang') ?? (html.includes('<link rel="alternate" hrefLang=') ? 'es' : null);
  if (language) {
    assert.ok(html.includes(`lang="${language}"`), `URL must override cookie: ${location}`);
    for (const lang of ['es', 'ca', 'en', 'fr', 'de']) {
      const alternate = html.match(new RegExp(`hrefLang="${lang}" href="([^"]+)"`));
      assert.equal(alternate?.[1] && new URL(alternate[1]).href, `${origin}${url.pathname}${lang === "es" ? "" : `?lang=${lang}`}`, `Missing alternate: ${location} ${lang}`);
    }
  }
  if (url.pathname === '/blog/k8-buggy' || url.pathname === '/proyectos/k8-buggy') {
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].flatMap(match => JSON.parse(match[1]));
    const article = schemas.find(schema => ['Article', 'BlogPosting'].includes(schema['@type']));
    assert.equal(article?.url, location);
    assert.equal(article?.inLanguage, language);
    assert.equal(article?.dateModified, '2026-10-25');
    assert.ok(schemas.some(schema => schema['@type'] === 'BreadcrumbList'));
  }
  checked++;
}
const robots = await (await fetch(`${base}/robots.txt`)).text();
assert.ok(robots.includes(`${origin}/sitemap.xml`));
const missing = await fetch(`${base}/proyectos/not-a-real-project?lang=en`);
assert.equal(missing.status, 404);
assert.ok((await missing.text()).includes('noindex'));
console.log(`PASS: ${checked} sitemap destinations, canonical URLs, descriptions, language precedence, hreflang, article schemas, robots and noindex 404`);

// Spanish aliases converge permanently; unrelated filters survive normalization.
for (const path of ['/', '/blog/celeste-pocket', '/proyectos/monitor-solar-esp32']) {
  const response = await fetch(`${base}${path}?lang=es&source=test`, {redirect:'manual'});
  assert.equal(response.status, 308);
  const target = new URL(response.headers.get('location'), base);
  assert.equal(target.pathname, path);
  assert.equal(target.search, '?source=test');
}
const english = await (await fetch(`${base}/?lang=en`)).text();
assert.ok(english.includes('href="/blog?lang=en"'), 'Navigation must preserve English');
assert.ok(english.includes('href="/proyectos/celeste-parallel?lang=en"'), 'Project cards must preserve English');
assert.ok(english.includes('href="/?lang=en#portfolio"'), 'Anchor must follow the query');
const spanish = await (await fetch(base + '/', {headers:{Cookie:'portfolio-language=de', 'Accept-Language':'fr'}})).text();
assert.ok( /<html\b[^>]*\blang="es"/.test(spanish), 'Clean URLs must always render Spanish');
console.log('PASS: permanent Spanish redirects, stable default language and localized navigation');
