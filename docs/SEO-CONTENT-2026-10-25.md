# Content and mobile review — 25 October 2026

## Content

- Eleven project pages now present technical specifications, project status and related projects. Their paired blog pages retain the development narrative. The complete historical paragraphs are no longer duplicated in the project pages.
- CELESTE Parallel, RED808 V2 and K8 have project-specific questions and answers in all five languages. Answers derive from existing project records; no new hardware validation is implied.
- CELESTE's native plugin documentation includes free VST3 search language, Windows/macOS compatibility, MP3 demo, downloads and installation. Its blog route now presents the origin story and links to the technical documentation instead of duplicating it.
- Existing URLs and localized canonicals remain stable. Search topics reflect the actual projects, not measured search-volume claims.

## Mobile changes and measurement

Baseline Lighthouse mobile simulation against production: performance 86, accessibility 91, best practices 100, SEO 100; FCP 1.9 s, LCP 3.4 s, TBT 190 ms, CLS 0.03, transfer 519 KiB. This is a single laboratory run, not field Core Web Vitals or a ranking prediction. Raw report: ignored `.tmp/seo-before.json`.

- Removed the artificial full-screen preloader (700 ms progress plus exit delays).
- Preload the two above-the-fold text fonts; monospace remains without preload.
- Request smaller responsive image candidates for portrait cards.
- YouTube players on the homepage mount only after a keyboard-accessible button is activated. Browser check confirmed zero initial iframes and the intended embed after activation.
- Static discovery files and media bypass cookie-based language negotiation.

## Search Console

The sitemap detail report confirms successful processing and **146 discovered URLs**. The list briefly showed an older fetch error; the newer detail report confirms success. The performance report still says data is being processed and supplies no query data. Discovered URLs are not equivalent to indexed URLs. No recurring monitor was created.

## Validation

Production build and TypeScript checks; 110 localized project/blog route checks including absence of duplicated story bodies; plugin documentation/story separation and original ZIP hash; 146 sitemap URL, canonical, language, metadata and schema checks. Browser interaction check for deferred video. Re-run the mobile production audit after deployment and record its result separately.
