# Portfolio editorial review — 20 September 2026

Scope: nine projects registered in Codex, recent project tasks and local repository evidence, covering 5–20 September. No other projects were edited or deployed. Project source state can include unpublished local work; articles distinguish this from released software.

## Editorial inventory

| Project | Evidence consulted | Publication |
| --- | --- | --- |
| CELESTE PATCH PARALEL FPGA | README, DSP_V1, AUDIO_AUDIT, DUAL_DELAY, SONIC_ENGINE | CELESTE Parallel Fabric project + article; active prototype, digital/analog distinction |
| CELESTE TANG NANO 20K PCM HDMI FXBOX | Git history, README, docs/POCKET.md, build/pocket_dashboard.png | Pocket / MiniDrumMachine project + article; generated display reference clearly labeled |
| DrumMachine-V2-P4-DaisyPod3 | README, CORRECCIONES_Y_RENDIMIENTO, BANK4_IMPLEMENTACION | RED808 V2 project + article; existing RED808 page labeled first-generation archive |
| ToonJS | README, PHASE_A_REPORT, phase-b-evidence validation and coverage logs | Project + article; 455 passing tests in recorded audit, no claim of a published 2.0 release |
| wasm / RayDrone | Git history, README, recorded UI audit | Updated project + article; fresh local interface screenshot |
| ESP32-S3 endoscope | README firmware 0.2.0 and 20 September test record | New project + article; PC bridge dependency and physical checks pending |
| NewsChyper | Git history, README | Latest commit 28 August; no new update claimed |
| FingerDrum / SimonDrum | Git history, index.html | Latest commit 27 August; no new update claimed |
| Portfolio | Current site routes and translations | New index, links, localized metadata and sitemap entries |

## Images

- `public/updates/2026-09/celeste-parallel.png`: browser screenshot of the local editor on 20 September, disconnected hardware state. A UI capture is not evidence of analog audio quality.
- `public/updates/2026-09/raydrone.png`: browser screenshot of the local Basic interface on 20 September.
- `public/updates/2026-09/celeste-pocket-simulation.png`: existing generated dashboard reference copied from the FPGA project, visually inspected; not a physical monitor photograph.
- Projects without a verified current capture use a typographic card, not invented hardware imagery.
- RED808 V2: the owner subsequently supplied a real photograph of the matte red aluminium top panel. `public/updates/2026-09/red808-aluminio-rojo-mate.jpg` preserves the original photograph; Next.js serves optimized variants. Project and blog show the full portrait, with captions in all five languages.

## Validation

On 21 September the owner also supplied a real photograph of the CELESTE Parallel DSP monitor. `public/updates/2026-09/celeste-hdmi-real.jpg` is the primary project image; the web editor screenshot is retained as a secondary image. Captions distinguish the physical display (showing bypass) from the disconnected editor and make no new analog measurement claims.

`npm run type-check`, `npm run build`, and `node scripts/verify-project-updates.mjs [base-url]`.
The route check validates all six projects and six articles in es/ca/en/de/fr, body/status translation, canonical URLs, document language, images, sitemap and 404 behavior. Browser inspection covers desktop, mobile, real language switching and project/article navigation. QA captures are kept in `.tmp/` outside published assets.

The existing historical blog translation system is retained. New content is rendered in the selected language on the server rather than translated by client-side DOM mutations.

Validation outcome: production build and all 60 route variants passed locally. Browser switching from Spanish to English passed on the production server. A development-only hydration stall was observed; the production build was tested separately and did not reproduce it.
