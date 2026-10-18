# Website review — 18 October 2026

Review window: 12–18 October, Europe/Madrid. Earlier developments added in this release retain their source dates. Existing September articles retain their dates unless their content was actually reviewed and changed.

## Evidence and publication decisions

- **Eurorack Parts:** `CESCO3D_Biblioteca_Eurorack_V1.zip` in the owner's Downloads. Read `MANIFIESTO.json`, `VALIDACION.json` and the 53-row catalogue. Version 1.0-RC1; recorded mesh/BREP checks are not load tests or physical compatibility certification. The 17 October tasks “Generamos la web Eurorack Parts” and “Diseñar Eurorail V1” establish ongoing catalogue work and supply the printing photograph. No live catalogue URL or product download is advertised because publication was not confirmed.
- **Solar monitor:** “Proyecto solar ESP32-S3” supplies the photograph of the existing controller and battery setup. “Preparar monitor solar ESP32-S3”, active on 18 October, establishes the intended ESP32-S3 Touch LCD 7B, INA226/INA228, I²C, touch dashboard and Wi-Fi scope. Published as preparation, not completed firmware or calibrated measurement. No electrical installation advice or performance claims were inferred from the photograph.
- **CELESTE Perform:** local `docs/PERFORM-DECISIONS.md`, updated 10 October, and `build/perform-studio-desktop.png` from the same date. Eight banks, six tracks, sixteen bars per bank and 32-bar map windows. Local-server direction uses metadata rather than audio. Published as an earlier development now added to the website; no public interactive demo or new API call was created.
- **RED808 V2:** local `FX_AUDIT.md` documents the 25 September stereo FX and parameter corrections. Article explicitly dates this progress and retains the pending on-board CPU measurement.
- **Endoscope:** the 17 October task “Diagnostica ESP32 que no enciende” records unresolved display startup failure even after restoring previous firmware. The published status now distinguishes this from historical September transport tests.
- **Other repositories:** reviewed recent history/root documentation for NONENDO, CELESTE Pocket, ToonJS, RayDrone, FingerDrum and NewsChyper. No unsupported new release is claimed. NONENDO contains copied endoscope documentation and is not presented as a separate completed product on that evidence.
- **Plugins:** current Windows/Mac downloads already published in the intervening September release are preserved; no replacement binaries were supplied for this weekly review.

## Images

All additions are original supplied images or existing project captures, visually inspected before publication:

- `eurorack-print.jpeg`: supplied photograph of printing in progress.
- `eurorack-cad.png`: original `02_BASTIDOR_DEMO_M25.png` from the library; identified as CAD, not a physical assembly.
- `solar-bench.jpeg`: supplied `IMG_8478.jpeg`, showing the existing solar setup, not a new ESP32 dashboard.
- `celeste-perform.png`: existing 10 October screenshot of the real Perform interface.

Files are in `public/updates/2026-10/`. Captions and content are supplied in Spanish, Catalan, English, French and German. Firmware and private configuration are not modified. Hardware is not accessed by this website task.

## Validation

Production build, localized project/blog route checks, plugin download regression checks, image delivery, sitemap entries, and desktop/mobile browser review. Browser evidence is saved in ignored `.tmp/` files. Published and modified metadata use per-project dates for new and reviewed articles.
