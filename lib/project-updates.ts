import type { Language } from "@/lib/translations";

export const reviewDate = "2026-09-24";
export type UpdateCopy = { title: string; summary: string; body: string[]; status: string; caption?: string; secondaryCaption?: string; videoCaption?: string; designCaption?: string };
export type ProjectUpdate = { slug: string; name: string; stack: string[]; image?: string; homeImage?: "secondary"; secondaryImage?: string; video?: string; videoPoster?: string; designImage?: string; portrait?: boolean; href?: string; copy: Record<Language, UpdateCopy> };

export const updateUI = {
  "es": {
    "title": "Septiembre en el laboratorio",
    "intro": "CELESTE: Line-In, efectos paralelos y control desde el DAW. Más proyectos y avances documentados.",
    "project": "Explorar proyecto",
    "article": "Leer la historia",
    "back": "Volver al portfolio",
    "blog": "Volver al blog",
    "status": "Estado y próximos pasos",
    "latest": "Novedades de septiembre",
    "archive": "Archivo de la primera generación. Descubre RED808 V2: P4 + Daisy por USB.",
    "source": "Código y documentación",
    "period": "Revisión actualizada el 24 de septiembre de 2026"
  },
  "ca": {
    "title": "Setembre al laboratori",
    "intro": "CELESTE: Line-In, efectes paral·lels i control des del DAW. Més projectes i avenços documentats.",
    "project": "Explorar el projecte",
    "article": "Llegir la història",
    "back": "Tornar al portafolis",
    "blog": "Tornar al blog",
    "status": "Estat i pròxims passos",
    "latest": "Novetats de setembre",
    "archive": "Arxiu de la primera generació. Descobreix RED808 V2: P4 + Daisy per USB.",
    "source": "Codi i documentació",
    "period": "Revisió actualitzada el 24 de setembre de 2026"
  },
  "en": {
    "title": "September in the lab",
    "intro": "CELESTE: Line-In, parallel effects and DAW control. More projects and documented progress.",
    "project": "Explore project",
    "article": "Read the story",
    "back": "Back to portfolio",
    "blog": "Back to blog",
    "status": "Status and next steps",
    "latest": "September updates",
    "archive": "First-generation archive. Discover RED808 V2: P4 + Daisy over USB.",
    "source": "Code and documentation",
    "period": "Review updated on 24 September 2026"
  },
  "fr": {
    "title": "Septembre au laboratoire",
    "intro": "CELESTE : Line-In, effets parallèles et contrôle depuis le DAW. Projets et avancées documentées.",
    "project": "Explorer le projet",
    "article": "Lire le récit",
    "back": "Retour au portfolio",
    "blog": "Retour au blog",
    "status": "État et prochaines étapes",
    "latest": "Nouveautés de septembre",
    "archive": "Archives de la première génération. Découvrez RED808 V2 : P4 + Daisy par USB.",
    "source": "Code et documentation",
    "period": "Revue actualisée le 24 septembre 2026"
  },
  "de": {
    "title": "September im Labor",
    "intro": "CELESTE: Line-In, parallele Effekte und DAW-Steuerung. Projekte und dokumentierte Fortschritte.",
    "project": "Projekt entdecken",
    "article": "Beitrag lesen",
    "back": "Zurück zum Portfolio",
    "blog": "Zurück zum Blog",
    "status": "Stand und nächste Schritte",
    "latest": "Neuigkeiten im September",
    "archive": "Archiv der ersten Generation. RED808 V2 entdecken: P4 + Daisy über USB.",
    "source": "Code und Dokumentation",
    "period": "Aktualisiert am 24. September 2026"
  }
} satisfies Record<Language, Record<string,string>>;

export const projectUpdates: ProjectUpdate[] = [
  {
    "slug": "celeste-parallel",
    "name": "CELESTE · Parallel Fabric",
    "stack": [
      "Tang Nano 20K",
      "PCM1808 / PCM5102",
      "Web Serial",
      "Tang Control"
    ],
    "image": "/updates/2026-09/celeste-hdmi-real.jpg",
    "homeImage": "secondary",
    "video": "/updates/2026-09/celeste-demo-live-web-hdmi.mp4",
    "videoPoster": "/updates/2026-09/celeste-demo-live-poster.jpg",
    "secondaryImage": "/updates/2026-09/celeste-parallel.png",
    "designImage": "/updates/2026-09/celeste-v1-frontal-cad.png",
    "copy": {
      "es": {
        "videoCaption": "CELESTE · Demo del editor web con FPGA conectada y fotografía de la salida HDMI. Audio: fuente ambient original, no una grabación de la salida procesada por la FPGA.",
        "designCaption": "Diseño CAD del frontal CELESTE V1 en CAD Assistant: distribución de controles, aberturas y ranuras de fijación.",
        "caption": "Fotografía real del monitor de CELESTE Parallel DSP: rutas de efectos, parámetros y medidores FPGA. Estado mostrado: bypass.",
        "title": "CELESTE: del patch web al audio FPGA",
        "summary": "Line-In estéreo, efectos paralelos y un mismo control desde web, encoders y HDMI.",
        "body": [
          "La versión actual recibe audio por PCM1808, lo procesa en la Tang Nano 20K y sale por PCM5102 a 48 kHz. La web controla rutas, presets, bypass, mute y solo; los 16 controles de dos bancos coinciden con los encoders y la columna de valores del HDMI. El USB de este firmware transporta control y telemetría, no música.",
          "Glitch, dos delays, cuatro modos de filtro, Wavefolder y VCA comparten el patch con Chorus, Flanger, Crusher, Freeze, Tremolo y Auto-pan. LFO, Chaos y Envelope aportan modulación. Las ramas son bloques físicos concurrentes: duplicar efectos requiere recursos y una nueva síntesis. La compilación usa 19.384/20.736 celdas, 38/46 bloques RAM y 23/24 DSP.",
          "Parallel Tides amplía DEMO LIVE a 4:34, 168 BPM y 12 escenas. La música sale del ordenador al Line-In y la web automatiza combinaciones en la FPGA. Tang Control añade 44 parámetros automatizables desde el DAW. Las imágenes y el vídeo de esta página documentan la revisión anterior; el vídeo conserva la música original, no una captura del audio procesado."
        ],
        "status": "Prototipo activo: firmware guardado con SHA-256, flash verificada y 70 pruebas web aprobadas. Persisten pérdidas intermitentes de reloj del ADC; no se da por resuelta la continuidad ni se han medido ruido o distorsión analógica.",
        "secondaryCaption": "Captura del editor local · modo sin conexión · 20 septiembre 2026"
      },
      "ca": {
        "videoCaption": "CELESTE · Demo de l’editor web amb FPGA connectada i fotografia de la sortida HDMI. Àudio: font ambient original, no una gravació de la sortida processada per l’FPGA.",
        "designCaption": "Disseny CAD del frontal CELESTE V1 a CAD Assistant: distribució dels controls, obertures i ranures de fixació.",
        "caption": "Fotografia real del monitor de CELESTE Parallel DSP: rutes d’efectes, paràmetres i mesuradors FPGA. Estat mostrat: bypass.",
        "title": "CELESTE: del patch web a l'àudio FPGA",
        "summary": "Line-In estèreo, efectes paral·lels i control compartit entre web, encoders i HDMI.",
        "body": [
          "La versió actual rep àudio pel PCM1808, el processa a la Tang Nano 20K i surt pel PCM5102 a 48 kHz. La web controla rutes, presets, bypass, mute i solo; els 16 controls de dos bancs coincideixen amb els encoders i la columna HDMI. USB transporta control i telemetria, no música.",
          "Glitch, dos delays, quatre modes de filtre, Wavefolder i VCA conviuen amb Chorus, Flanger, Crusher, Freeze, Tremolo i Auto-pan. LFO, Chaos i Envelope modulen. Les branques són blocs físics concurrents; duplicar efectes requereix recursos i síntesi. Ús: 19.384/20.736 cel·les, 38/46 RAM i 23/24 DSP.",
          "Parallel Tides amplia DEMO LIVE a 4:34, 168 BPM i 12 escenes. La música arriba del PC al Line-In i la web automatitza la FPGA. Tang Control aporta 44 paràmetres automatitzables al DAW. Imatges i vídeo documenten la revisió anterior; el vídeo conserva música original, no àudio processat capturat."
        ],
        "status": "Prototip actiu: firmware amb SHA-256, flash verificada i 70 proves web aprovades. Pèrdues intermitents del rellotge ADC encara obertes; continuïtat i qualitat analògica no certificades.",
        "secondaryCaption": "Captura de l'editor local · mode sense connexió · 20 setembre 2026"
      },
      "en": {
        "videoCaption": "CELESTE · Web editor demo with the FPGA connected and a photograph of the HDMI output. Audio: original ambient source, not a recording of the FPGA-processed output.",
        "designCaption": "CELESTE V1 front-panel CAD design in CAD Assistant: control layout, openings and mounting slots.",
        "caption": "Real photograph of the CELESTE Parallel DSP monitor: effects routing, parameters and FPGA meters. Displayed state: bypass.",
        "title": "CELESTE: from a web patch to FPGA audio",
        "summary": "Stereo Line-In, parallel effects and shared control across web, encoders and HDMI.",
        "body": [
          "The current firmware receives PCM1808 audio, processes it on Tang Nano 20K and outputs through PCM5102 at 48 kHz. The web controls routing, presets, bypass, mute and solo; 16 controls across two banks match the encoders and HDMI value column. USB carries control and telemetry, not music.",
          "Glitch, two delays, four filter modes, Wavefolder and VCA join Chorus, Flanger, Crusher, Freeze, Tremolo and Auto-pan. LFO, Chaos and Envelope provide modulation. Branches are concurrent physical blocks; adding duplicate effects requires resources and synthesis. Usage: 19,384/20,736 cells, 38/46 RAM blocks and 23/24 DSP.",
          "Parallel Tides extends DEMO LIVE to 4:34, 168 BPM and 12 scenes. PC audio feeds Line-In while the web automates FPGA combinations. Tang Control adds 44 DAW-automatable parameters. These images and video document the earlier revision; the video uses original music, not a recording of FPGA-processed audio."
        ],
        "status": "Active prototype: SHA-256-pinned firmware, verified flash and 70 passing web tests. Intermittent ADC clock losses remain unresolved; continuous operation and analog noise/distortion are not certified.",
        "secondaryCaption": "Local editor screenshot · disconnected mode · 20 September 2026"
      },
      "fr": {
        "videoCaption": "CELESTE · Démonstration de l’éditeur web avec FPGA connecté et photographie de la sortie HDMI. Audio : source ambient originale, pas un enregistrement de la sortie traitée par le FPGA.",
        "designCaption": "Conception CAO de la façade CELESTE V1 dans CAD Assistant : disposition des commandes, ouvertures et fentes de fixation.",
        "caption": "Photographie réelle du moniteur CELESTE Parallel DSP : routage des effets, paramètres et indicateurs FPGA. État affiché : bypass.",
        "title": "CELESTE : du patch web à l'audio FPGA",
        "summary": "Line-In stéréo, effets parallèles et commandes communes au web, aux encodeurs et au HDMI.",
        "body": [
          "Le firmware reçoit le PCM1808, traite le signal sur Tang Nano 20K et sort par PCM5102 à 48 kHz. Le web gère routage, presets, bypass, mute et solo ; 16 commandes sur deux banques correspondent aux encodeurs et à la colonne HDMI. USB transporte commandes et télémétrie, pas la musique.",
          "Glitch, deux delays, quatre filtres, Wavefolder et VCA rejoignent Chorus, Flanger, Crusher, Freeze, Tremolo et Auto-pan. LFO, Chaos et Envelope modulent. Les branches sont des blocs physiques concurrents ; les dupliquer exige ressources et synthèse. Utilisation : 19 384/20 736 cellules, 38/46 RAM et 23/24 DSP.",
          "Parallel Tides porte DEMO LIVE à 4:34, 168 BPM et 12 scènes. Le PC alimente le Line-In et le web automatise le FPGA. Tang Control ajoute 44 paramètres automatisables dans le DAW. Les images et la vidéo illustrent la révision précédente ; la musique est originale, sans capture de la sortie FPGA traitée."
        ],
        "status": "Prototype actif : firmware identifié par SHA-256, flash vérifiée et 70 tests web réussis. Les pertes intermittentes d’horloge ADC restent ouvertes ; continuité et qualité analogique non certifiées.",
        "secondaryCaption": "Capture de l'éditeur local · mode déconnecté · 20 septembre 2026"
      },
      "de": {
        "videoCaption": "CELESTE · Demo des Web-Editors mit angeschlossenem FPGA und einem Foto der HDMI-Ausgabe. Audio: ursprüngliche Ambient-Quelle, keine Aufnahme der vom FPGA verarbeiteten Ausgabe.",
        "designCaption": "CAD-Entwurf der CELESTE-V1-Frontplatte in CAD Assistant: Anordnung der Bedienelemente, Ausschnitte und Befestigungsschlitze.",
        "caption": "Echtes Foto des CELESTE-Parallel-DSP-Monitors: Effektrouting, Parameter und FPGA-Pegelanzeigen. Angezeigter Zustand: Bypass.",
        "title": "CELESTE: vom Web-Patch zum FPGA-Audio",
        "summary": "Stereo-Line-In, parallele Effekte und gemeinsame Steuerung über Web, Encoder und HDMI.",
        "body": [
          "Die Firmware empfängt PCM1808-Audio, verarbeitet es auf dem Tang Nano 20K und gibt es mit 48 kHz über PCM5102 aus. Das Web steuert Routing, Presets, Bypass, Mute und Solo; 16 Regler in zwei Bänken entsprechen Encodern und HDMI-Wertespalte. USB überträgt Steuerung und Telemetrie, keine Musik.",
          "Glitch, zwei Delays, vier Filtermodi, Wavefolder und VCA werden durch Chorus, Flanger, Crusher, Freeze, Tremolo und Auto-pan ergänzt. LFO, Chaos und Envelope modulieren. Zweige sind gleichzeitig arbeitende Hardwareblöcke; Duplikate benötigen Ressourcen und Synthese. Belegt: 19.384/20.736 Zellen, 38/46 RAM und 23/24 DSP.",
          "Parallel Tides erweitert DEMO LIVE auf 4:34, 168 BPM und 12 Szenen. PC-Audio speist Line-In; das Web automatisiert das FPGA. Tang Control ergänzt 44 DAW-automatisierbare Parameter. Bilder und Video zeigen den früheren Stand; die Musik ist das Original, keine Aufnahme des verarbeiteten FPGA-Ausgangs."
        ],
        "status": "Aktiver Prototyp: Firmware mit SHA-256, geprüfter Flash und 70 bestandene Webtests. Sporadische ADC-Taktverluste sind weiter offen; Dauerbetrieb und Analogqualität sind nicht zertifiziert.",
        "secondaryCaption": "Aufnahme des lokalen Editors · ohne Verbindung · 20. September 2026"
      }
    },
    "href": "https://github.com/cescofors75/celeste-fpga"
  },
  {
    "slug": "celeste-pocket",
    "name": "CELESTE · Pocket / MiniDrumMachine",
    "stack": [
      "FPGA",
      "HDMI",
      "ST7789",
      "M5Stack 8Encoder"
    ],
    "image": "/updates/2026-09/celeste-pocket-simulation.png",
    "copy": {
      "es": {
        "title": "Ocho voces y dieciséis grooves en una FPGA",
        "summary": "La rama autónoma de CELESTE evoluciona hacia una pequeña caja de ritmos con controles físicos y visualización HDMI.",
        "body": [
          "Pocket organiza ocho voces en dos vistas: PLAY para tempo, swing y groove; MIXER para niveles y mute. Los dieciséis patrones propios cambian al inicio del compás y el control táctil solicita un fill cuantizado. HDMI y ST7789 muestran el estado del instrumento.",
          "La evolución MiniDrumMachine añade efectos por canal y un dashboard HDMI unificado. El historial conserva una versión FX Fast grabada y verificada en Flash. Esta rama genera el ritmo en la FPGA; es independiente del editor web y del streaming WAV de Parallel Fabric."
        ],
        "status": "Prototipos versionados y pruebas de carga documentadas. La imagen es una referencia generada del dashboard, no una fotografía del monitor. Pocket documenta 49.218,75 Hz; no debe confundirse con los 48 kHz de Parallel Fabric.",
        "caption": "Referencia generada del dashboard MiniDrumMachine · simulación visual"
      },
      "ca": {
        "title": "Vuit veus i setze grooves en una FPGA",
        "summary": "La branca autònoma de CELESTE evoluciona cap a una petita caixa de ritmes amb controls físics i visualització HDMI.",
        "body": [
          "Pocket organitza vuit veus en dues vistes: PLAY per a tempo, swing i groove; MIXER per a nivells i mute. Els setze patrons propis canvien a l'inici del compàs i el control tàctil demana un fill quantitzat. HDMI i ST7789 mostren l'estat de l'instrument.",
          "L'evolució MiniDrumMachine afegeix efectes per canal i un dashboard HDMI unificat. L'historial conserva una versió FX Fast gravada i verificada en Flash. Aquesta branca genera el ritme a l'FPGA i és independent de l'editor web i del streaming WAV de Parallel Fabric."
        ],
        "status": "Prototips versionats amb proves de càrrega documentades. La imatge és una referència generada del dashboard, no una fotografia del monitor. Pocket documenta 49.218,75 Hz, diferents dels 48 kHz de Parallel Fabric.",
        "caption": "Referència generada del dashboard MiniDrumMachine · simulació visual"
      },
      "en": {
        "title": "Eight voices and sixteen grooves on an FPGA",
        "summary": "The standalone CELESTE branch becomes a compact drum machine with physical controls and HDMI visualization.",
        "body": [
          "Pocket organizes eight voices into two views: PLAY for tempo, swing and groove; MIXER for levels and mute. Sixteen original patterns switch at bar boundaries, while touch requests a quantized fill. HDMI and ST7789 display the instrument state.",
          "The MiniDrumMachine evolution adds per-channel effects and a unified HDMI dashboard. The history preserves an FX Fast version programmed and verified in Flash. This branch generates rhythm on the FPGA, independently of Parallel Fabric's web editor and WAV streaming."
        ],
        "status": "Versioned prototypes with documented programming checks. The image is a generated dashboard reference, not a monitor photograph. Pocket documents 49,218.75 Hz, distinct from Parallel Fabric's 48 kHz.",
        "caption": "Generated MiniDrumMachine dashboard reference · visual simulation"
      },
      "fr": {
        "title": "Huit voix et seize grooves sur un FPGA",
        "summary": "La branche autonome de CELESTE devient une boîte à rythmes compacte avec commandes physiques et affichage HDMI.",
        "body": [
          "Pocket organise huit voix en deux vues : PLAY pour le tempo, le swing et le groove ; MIXER pour les niveaux et le mute. Seize motifs originaux changent au début de la mesure ; la commande tactile demande un fill quantifié. HDMI et ST7789 affichent l'état de l'instrument.",
          "L'évolution MiniDrumMachine ajoute des effets par canal et un dashboard HDMI unifié. L'historique conserve une version FX Fast programmée et vérifiée en Flash. Cette branche génère le rythme sur le FPGA, indépendamment de l'éditeur web et du streaming WAV de Parallel Fabric."
        ],
        "status": "Prototypes versionnés avec vérifications de programmation documentées. L'image est une référence générée du dashboard, pas une photo du moniteur. Pocket documente 49 218,75 Hz, distincts des 48 kHz de Parallel Fabric.",
        "caption": "Référence générée du dashboard MiniDrumMachine · simulation visuelle"
      },
      "de": {
        "title": "Acht Stimmen und sechzehn Grooves auf einem FPGA",
        "summary": "Der eigenständige CELESTE-Zweig wird zur kompakten Drum-Machine mit physischen Reglern und HDMI-Anzeige.",
        "body": [
          "Pocket ordnet acht Stimmen in zwei Ansichten: PLAY für Tempo, Swing und Groove; MIXER für Pegel und Mute. Sechzehn eigene Patterns wechseln am Taktanfang, die Touch-Steuerung fordert einen quantisierten Fill an. HDMI und ST7789 zeigen den Instrumentenstatus.",
          "MiniDrumMachine ergänzt Effekte pro Kanal und ein gemeinsames HDMI-Dashboard. Die Historie enthält eine in Flash programmierte und verifizierte FX-Fast-Version. Dieser Zweig erzeugt den Rhythmus im FPGA, unabhängig von Web-Editor und WAV-Streaming in Parallel Fabric."
        ],
        "status": "Versionierte Prototypen mit dokumentierten Programmierprüfungen. Das Bild ist eine erzeugte Dashboard-Referenz, kein Monitorfoto. Pocket dokumentiert 49.218,75 Hz; Parallel Fabric arbeitet mit 48 kHz.",
        "caption": "Erzeugte MiniDrumMachine-Dashboard-Referenz · visuelle Simulation"
      }
    }
  },
  {
    "slug": "red808-v2",
    "image": "/updates/2026-09/red808-aluminio-rojo-mate.jpg",
    "portrait": true,
    "name": "RED808 V2 · P4 + Daisy",
    "stack": [
      "ESP32-P4",
      "Daisy Pod",
      "USB CDC",
      "LVGL"
    ],
    "href": "https://github.com/cescofors75/DrumMachine-V2-P4-DaisyPod3",
    "copy": {
      "es": {
        "caption": "RED808 V2 con tapa de aluminio rojo mate. Fotografía real del instrumento, septiembre de 2026.",
        "title": "RED808 V2: dos placas, un estado musical",
        "summary": "La nueva arquitectura concentra interfaz y secuenciador en el P4 y reserva Daisy para el audio, unidos por USB-C.",
        "body": [
          "V2 abandona el ESP32-S3 y la interfaz Wi-Fi de la primera generación. P4 gestiona pantalla, patrones, MIDI y USB host; DaisyPod3 reúne sampler, síntesis y efectos. BANK4 incorpora cuatro rotaries contextuales y selección de banco con fader, conservando el acceso táctil.",
          "El protocolo 2.4 verifica patrones completos con checksum y los activa al comenzar un bloque de audio. Una carga incompleta conserva el patrón anterior. La revisión corrige ratchet, swing por pista y el doble disparo de pads, y mueve el guardado fuera del callback de LVGL."
        ],
        "status": "Ambos firmwares deben actualizarse juntos. Los builds y las regresiones están documentados; la carga DSP y la respuesta musical final requieren comprobación en placa. Los 2,667 ms por bloque son presupuesto de cálculo, no latencia total medida."
      },
      "ca": {
        "caption": "RED808 V2 amb tapa d’alumini vermell mat. Fotografia real de l’instrument, setembre de 2026.",
        "title": "RED808 V2: dues plaques, un estat musical",
        "summary": "La nova arquitectura concentra interfície i seqüenciador al P4 i reserva Daisy per a l'àudio, units per USB-C.",
        "body": [
          "V2 deixa enrere l'ESP32-S3 i la interfície Wi-Fi de la primera generació. P4 gestiona pantalla, patrons, MIDI i USB host; DaisyPod3 reuneix sampler, síntesi i efectes. BANK4 incorpora quatre rotaries contextuals i selecció de banc amb fader, mantenint l'accés tàctil.",
          "El protocol 2.4 verifica patrons complets amb checksum i els activa a l'inici d'un bloc d'àudio. Una càrrega incompleta conserva el patró anterior. La revisió corregeix ratchet, swing per pista i el doble dispar dels pads, i treu el desament del callback de LVGL."
        ],
        "status": "Cal actualitzar tots dos firmwares alhora. Els builds i les regressions estan documentats; la càrrega DSP i la resposta musical final necessiten comprovació en placa. Els 2,667 ms per bloc són pressupost de càlcul, no latència total mesurada."
      },
      "en": {
        "caption": "RED808 V2 with a matte red aluminium top panel. Real photograph of the instrument, September 2026.",
        "title": "RED808 V2: two boards, one musical state",
        "summary": "The new architecture puts the interface and sequencer on P4 and dedicates Daisy to audio, linked by USB-C.",
        "body": [
          "V2 moves beyond the first generation's ESP32-S3 and Wi-Fi interface. P4 handles the display, patterns, MIDI and USB host; DaisyPod3 combines sampling, synthesis and effects. BANK4 adds four contextual rotary controls and fader-based bank selection while retaining touch access.",
          "Protocol 2.4 verifies complete patterns with a checksum and activates them at an audio-block boundary. Incomplete transfers preserve the previous pattern. The review fixes ratchets, per-track swing and duplicate pad triggers, and moves saving outside the LVGL callback."
        ],
        "status": "Both firmwares must be updated together. Builds and regression checks are documented; DSP load and final musical response need on-board validation. The 2.667 ms block duration is a processing budget, not measured end-to-end latency."
      },
      "fr": {
        "caption": "RED808 V2 avec façade en aluminium rouge mat. Photographie réelle de l’instrument, septembre 2026.",
        "title": "RED808 V2 : deux cartes, un état musical",
        "summary": "La nouvelle architecture confie l'interface et le séquenceur au P4, et l'audio à Daisy, reliés par USB-C.",
        "body": [
          "V2 abandonne l'ESP32-S3 et l'interface Wi-Fi de la première génération. P4 gère écran, patterns, MIDI et USB host ; DaisyPod3 réunit sampler, synthèse et effets. BANK4 ajoute quatre commandes rotatives contextuelles et la sélection de banque par fader, en conservant le tactile.",
          "Le protocole 2.4 vérifie les patterns complets par checksum et les active au début d'un bloc audio. Un transfert incomplet conserve le pattern précédent. La revue corrige les ratchets, le swing par piste et les doubles déclenchements des pads ; la sauvegarde sort du callback LVGL."
        ],
        "status": "Les deux firmwares doivent être mis à jour ensemble. Builds et régressions sont documentés ; charge DSP et réponse musicale finale restent à vérifier sur carte. Les 2,667 ms par bloc sont un budget de calcul, pas une latence totale mesurée."
      },
      "de": {
        "caption": "RED808 V2 mit mattroter Aluminium-Deckplatte. Echtes Foto des Instruments, September 2026.",
        "title": "RED808 V2: zwei Platinen, ein musikalischer Zustand",
        "summary": "Die neue Architektur bündelt Oberfläche und Sequencer auf dem P4 und überlässt Daisy das Audio, verbunden über USB-C.",
        "body": [
          "V2 löst den ESP32-S3 und die WLAN-Oberfläche der ersten Generation ab. P4 übernimmt Anzeige, Patterns, MIDI und USB-Host; DaisyPod3 vereint Sampling, Synthese und Effekte. BANK4 ergänzt vier kontextabhängige Drehregler und Bankwahl per Fader, zusätzlich zur Touch-Bedienung.",
          "Protokoll 2.4 prüft vollständige Patterns per Prüfsumme und aktiviert sie an einer Audioblockgrenze. Unvollständige Übertragungen erhalten das vorherige Pattern. Die Überarbeitung korrigiert Ratchets, Swing pro Spur und doppelte Pad-Trigger; Speichern erfolgt außerhalb des LVGL-Callbacks."
        ],
        "status": "Beide Firmwares müssen gemeinsam aktualisiert werden. Builds und Regressionen sind dokumentiert; DSP-Last und musikalisches Verhalten müssen auf der Platine geprüft werden. 2,667 ms pro Block sind ein Rechenbudget, keine gemessene Gesamtlatenz."
      }
    }
  },
  {
    "slug": "toonjs",
    "name": "ToonJS",
    "stack": [
      "TypeScript",
      "Float64Array",
      "ESM / CommonJS",
      "455 tests"
    ],
    "href": "https://github.com/cescofors75/toonjs",
    "copy": {
      "es": {
        "title": "ToonJS: preparar 2.0 empieza por los contratos",
        "summary": "La auditoría refuerza el motor tabular, la semántica de los datos y la instalación real del paquete.",
        "body": [
          "Las fases A y B precisan qué significa importar, transformar y serializar una tabla. Los valores numéricos ausentes o no válidos pasan a NaN; los conflictos de columnas lanzan errores explícitos y los datos anidados admitidos se protegen frente a mutaciones externas.",
          "El paquete conserva CommonJS y añade un wrapper ESM explícito. Se comprueban resoluciones TypeScript NodeNext y Bundler desde un tarball instalado, además del uso en navegador mediante bundler. Los registros de la fase B muestran 455 pruebas aprobadas y validaciones de tipos, lint, build, cobertura y empaquetado correctas."
        ],
        "status": "Preparación para 2.0, no anuncio de una versión publicada. No se afirma aceleración WASM ni ausencia de dependencias: Pino sigue declarado y se inicializa al utilizar el logger compatible. La validación adicional tiene costes de rendimiento documentados."
      },
      "ca": {
        "title": "ToonJS: preparar 2.0 comença pels contractes",
        "summary": "L'auditoria reforça el motor tabular, la semàntica de les dades i la instal·lació real del paquet.",
        "body": [
          "Les fases A i B precisen què significa importar, transformar i serialitzar una taula. Els valors numèrics absents o invàlids passen a NaN; els conflictes de columnes generen errors explícits i les dades imbricades admeses es protegeixen de mutacions externes.",
          "El paquet conserva CommonJS i afegeix un wrapper ESM explícit. Es comproven les resolucions TypeScript NodeNext i Bundler des d'un tarball instal·lat, i l'ús al navegador amb bundler. Els registres de la fase B mostren 455 proves aprovades i validacions correctes de tipus, lint, build, cobertura i empaquetat."
        ],
        "status": "Preparació per a 2.0, no anunci d'una versió publicada. No s'afirma acceleració WASM ni absència de dependències: Pino continua declarat i s'inicialitza en fer servir el logger compatible. La validació addicional té costos de rendiment documentats."
      },
      "en": {
        "title": "ToonJS: preparing 2.0 starts with contracts",
        "summary": "The audit strengthens the tabular engine, data semantics and real package installation.",
        "body": [
          "Phases A and B clarify what importing, transforming and serializing a table mean. Missing or invalid numeric values become NaN; column conflicts throw explicit errors and supported nested data is protected against external mutation.",
          "The package keeps CommonJS and adds an explicit ESM wrapper. TypeScript NodeNext and Bundler resolution are checked from an installed tarball, alongside browser use through a bundler. Phase B logs show 455 passing tests and successful type, lint, build, coverage and packaging checks."
        ],
        "status": "Preparation for 2.0, not a published release announcement. No WASM acceleration or zero-dependency claim: Pino remains declared and initializes when the compatibility logger is used. Additional validation has documented performance costs."
      },
      "fr": {
        "title": "ToonJS : préparer la 2.0 commence par les contrats",
        "summary": "L'audit renforce le moteur tabulaire, la sémantique des données et l'installation réelle du paquet.",
        "body": [
          "Les phases A et B précisent les contrats d'importation, de transformation et de sérialisation. Les valeurs numériques absentes ou invalides deviennent NaN ; les conflits de colonnes produisent des erreurs explicites et les données imbriquées admises sont protégées des mutations externes.",
          "Le paquet conserve CommonJS et ajoute un wrapper ESM explicite. Les résolutions TypeScript NodeNext et Bundler sont vérifiées depuis un tarball installé, ainsi que l'usage dans le navigateur via un bundler. Les journaux de la phase B indiquent 455 tests réussis et des contrôles de types, lint, build, couverture et paquet validés."
        ],
        "status": "Préparation de la 2.0, sans annonce de publication. Aucune accélération WASM ni absence de dépendances revendiquée : Pino reste déclaré et démarre avec le logger compatible. La validation supplémentaire a des coûts de performance documentés."
      },
      "de": {
        "title": "ToonJS: der Weg zu 2.0 beginnt mit klaren Verträgen",
        "summary": "Das Audit stärkt die Tabellen-Engine, Datensemantik und tatsächliche Paketinstallation.",
        "body": [
          "Die Phasen A und B präzisieren Import, Transformation und Serialisierung von Tabellen. Fehlende oder ungültige numerische Werte werden zu NaN; Spaltenkonflikte lösen explizite Fehler aus und unterstützte verschachtelte Daten werden gegen externe Änderungen geschützt.",
          "Das Paket behält CommonJS und ergänzt einen expliziten ESM-Wrapper. TypeScript-Auflösung mit NodeNext und Bundler wird anhand eines installierten Tarballs geprüft, ebenso die Browser-Nutzung über einen Bundler. Die Phase-B-Protokolle zeigen 455 bestandene Tests sowie erfolgreiche Typ-, Lint-, Build-, Coverage- und Paketprüfungen."
        ],
        "status": "Vorbereitung auf 2.0, keine Ankündigung einer veröffentlichten Version. Keine behauptete WASM-Beschleunigung oder Abhängigkeitsfreiheit: Pino bleibt deklariert und startet bei Nutzung des kompatiblen Loggers. Zusätzliche Validierung verursacht dokumentierte Leistungskosten."
      }
    }
  },
  {
    "slug": "raydrone",
    "name": "RayDrone",
    "stack": [
      "Rust",
      "WebAssembly",
      "AudioWorklet",
      "Top-36"
    ],
    "image": "/updates/2026-09/raydrone.png",
    "href": "https://github.com/cescofors75/RayDrone",
    "copy": {
      "es": {
        "title": "RayDrone: una interfaz de estudio sobre un núcleo reproducible",
        "summary": "El instrumento granular estrena jerarquía visual, controles progresivos y un proceso de compilación y regresión documentado.",
        "body": [
          "La interfaz abre en Básico con material, carácter, movimiento, espacio y volumen. Medio y Profesional despliegan más detalle sin cambiar la escena. El estilo de estudio incorpora grafito, acentos verdes y un selector legible para los nueve idiomas del instrumento.",
          "El DSP Rust se ejecuta en AudioWorklet mediante WebAssembly. La configuración musical documentada explora 2.000 candidatos, selecciona un Top-36 a 100 Hz y aplica crossfades de 12 ms. El núcleo compartido y los scripts de build permiten reconstruir y comprobar el motor desde el repositorio."
        ],
        "status": "La suite incluye regresiones numéricas, envolvente, filtros, cambios de fuente y recursos GPU. Las pruebas del DSP bajo WASM no sustituyen la validación del plugin VST nativo. La captura corresponde a la versión local revisada.",
        "caption": "Captura local de RayDrone · vista Básico · 20 septiembre 2026"
      },
      "ca": {
        "title": "RayDrone: una interfície d'estudi sobre un nucli reproduïble",
        "summary": "L'instrument granular estrena jerarquia visual, controls progressius i un procés documentat de compilació i regressió.",
        "body": [
          "La interfície s'obre en Bàsic amb material, caràcter, moviment, espai i volum. Mitjà i Professional despleguen més detall sense canviar l'escena. L'estil d'estudi incorpora grafit, accents verds i un selector llegible per als nou idiomes de l'instrument.",
          "El DSP Rust s'executa en AudioWorklet amb WebAssembly. La configuració musical documentada explora 2.000 candidats, selecciona un Top-36 a 100 Hz i aplica crossfades de 12 ms. El nucli compartit i els scripts de build permeten reconstruir i comprovar el motor des del repositori."
        ],
        "status": "La suite inclou regressions numèriques, envolupant, filtres, canvis de font i recursos GPU. Les proves DSP sota WASM no substitueixen la validació del plugin VST natiu. La captura correspon a la versió local revisada.",
        "caption": "Captura local de RayDrone · vista Bàsic · 20 setembre 2026"
      },
      "en": {
        "title": "RayDrone: a studio interface over a reproducible core",
        "summary": "The granular instrument gains clearer visual hierarchy, progressive controls and a documented build and regression process.",
        "body": [
          "The interface opens in Basic with material, character, movement, space and volume. Medium and Professional reveal more detail without changing the scene. The studio style uses graphite, green accents and a readable selector for the instrument's nine languages.",
          "Rust DSP runs inside AudioWorklet through WebAssembly. The documented musical configuration explores 2,000 candidates, selects a Top-36 at 100 Hz and applies 12 ms crossfades. The shared core and build scripts make the engine reproducible from the repository."
        ],
        "status": "The suite covers numeric regressions, envelopes, filters, source changes and GPU resources. DSP tests under WASM do not replace native VST plugin validation. The screenshot shows the reviewed local version.",
        "caption": "Local RayDrone screenshot · Basic view · 20 September 2026"
      },
      "fr": {
        "title": "RayDrone : une interface de studio sur un noyau reproductible",
        "summary": "L'instrument granulaire gagne une hiérarchie visuelle claire, des commandes progressives et un processus documenté de compilation et de régression.",
        "body": [
          "L'interface s'ouvre en mode Basique avec matériau, caractère, mouvement, espace et volume. Moyen et Professionnel dévoilent plus de détails sans changer la scène. Le style studio adopte le graphite, des accents verts et un sélecteur lisible pour les neuf langues de l'instrument.",
          "Le DSP Rust fonctionne dans AudioWorklet via WebAssembly. La configuration musicale documentée explore 2 000 candidats, sélectionne un Top-36 à 100 Hz et applique des fondus de 12 ms. Le noyau partagé et les scripts de build permettent de reconstruire et vérifier le moteur depuis le dépôt."
        ],
        "status": "La suite couvre régressions numériques, enveloppes, filtres, changements de source et ressources GPU. Les tests DSP sous WASM ne remplacent pas la validation du plugin VST natif. La capture montre la version locale revue.",
        "caption": "Capture locale de RayDrone · vue Basique · 20 septembre 2026"
      },
      "de": {
        "title": "RayDrone: eine Studio-Oberfläche auf reproduzierbarem Kern",
        "summary": "Das Granularinstrument erhält klarere visuelle Hierarchie, abgestufte Regler und einen dokumentierten Build- und Regressionsprozess.",
        "body": [
          "Die Oberfläche startet in Basic mit Material, Charakter, Bewegung, Raum und Lautstärke. Medium und Professional zeigen weitere Details, ohne die Szene zu verändern. Der Studio-Stil kombiniert Graphit, grüne Akzente und eine lesbare Auswahl für die neun Sprachen des Instruments.",
          "Der Rust-DSP läuft über WebAssembly in AudioWorklet. Die dokumentierte musikalische Konfiguration untersucht 2.000 Kandidaten, wählt Top-36 mit 100 Hz aus und nutzt Crossfades von 12 ms. Gemeinsamer Kern und Build-Skripte machen die Engine aus dem Repository reproduzierbar."
        ],
        "status": "Die Suite umfasst numerische Regressionen, Hüllkurven, Filter, Quellenwechsel und GPU-Ressourcen. DSP-Tests unter WASM ersetzen keine native VST-Plugin-Prüfung. Das Bild zeigt die geprüfte lokale Version.",
        "caption": "Lokale RayDrone-Aufnahme · Basic-Ansicht · 20. September 2026"
      }
    }
  },
  {
    "slug": "visor-endoscopico",
    "name": "ESP32 · Endoscope Viewer",
    "stack": [
      "ESP32-S3",
      "LVGL",
      "Python",
      "JPEG / UART"
    ],
    "copy": {
      "es": {
        "title": "Una cámara USB en la pantalla ESP32 de siete pulgadas",
        "summary": "El primer visor utiliza un puente Windows para transportar vídeo de una cámara endoscópica a la pantalla táctil.",
        "body": [
          "El PC captura la cámara con FFmpeg, codifica JPEG y envía los frames por UART. El ESP32-S3 decodifica a RGB565 y dibuja con LVGL en la Waveshare de 1024 × 600. El flujo incorpora créditos de recepción y CRC para evitar desbordamientos y rechazar tramas dañadas.",
          "El firmware 0.2.0 implementa congelación, zoom, giro, espejo, brillo y fotos BMP en microSD. La prueba registrada del 20 de septiembre recibió y decodificó 71 imágenes, entregó 70 al renderizador y no registró errores de vídeo. Se observaron aproximadamente 3 FPS a 320 × 240."
        ],
        "status": "El PC debe permanecer encendido: esta versión no conecta la cámara directamente al USB del S3. La inspección visual, los controles con vídeo y las fotos en microSD siguen pendientes de prueba física. No hay captura de la pantalla física verificada para publicar."
      },
      "ca": {
        "title": "Una càmera USB a la pantalla ESP32 de set polzades",
        "summary": "El primer visor utilitza un pont Windows per portar vídeo d'una càmera endoscòpica a la pantalla tàctil.",
        "body": [
          "El PC captura la càmera amb FFmpeg, codifica JPEG i envia frames per UART. L'ESP32-S3 descodifica a RGB565 i dibuixa amb LVGL a la Waveshare de 1024 × 600. El flux incorpora crèdits de recepció i CRC per evitar desbordaments i rebutjar trames malmeses.",
          "El firmware 0.2.0 implementa congelació, zoom, gir, mirall, brillantor i fotos BMP a microSD. La prova registrada del 20 de setembre va rebre i descodificar 71 imatges, en va lliurar 70 al renderitzador i no va registrar errors de vídeo. Es van observar aproximadament 3 FPS a 320 × 240."
        ],
        "status": "El PC ha de romandre encès: aquesta versió no connecta la càmera directament a l'USB de l'S3. La inspecció visual, els controls amb vídeo i les fotos a microSD estan pendents de prova física. No hi ha cap captura verificada de la pantalla física per publicar."
      },
      "en": {
        "title": "A USB camera on a seven-inch ESP32 screen",
        "summary": "The first viewer uses a Windows bridge to carry endoscope-camera video to the touchscreen.",
        "body": [
          "The PC captures the camera with FFmpeg, encodes JPEG and sends frames over UART. ESP32-S3 decodes to RGB565 and renders with LVGL on the 1024 × 600 Waveshare panel. Receive credits and CRC protect against overflow and corrupted frames.",
          "Firmware 0.2.0 implements freeze, zoom, rotation, mirror, brightness and BMP photos on microSD. The recorded 20 September test received and decoded 71 images, handed 70 to the renderer and reported no video errors. Approximately 3 FPS at 320 × 240 were observed."
        ],
        "status": "The PC must stay on: this version does not connect the camera directly to the S3's USB port. Visual inspection, controls during video and microSD photos still need physical testing. No verified photograph of the physical screen is available for publication."
      },
      "fr": {
        "title": "Une caméra USB sur un écran ESP32 de sept pouces",
        "summary": "Le premier visualiseur utilise un pont Windows pour transmettre la vidéo d'une caméra endoscopique à l'écran tactile.",
        "body": [
          "Le PC capture la caméra avec FFmpeg, encode en JPEG et transmet les images par UART. L'ESP32-S3 décode en RGB565 et affiche avec LVGL sur la Waveshare de 1024 × 600. Des crédits de réception et un CRC protègent contre les débordements et les trames corrompues.",
          "Le firmware 0.2.0 propose arrêt sur image, zoom, rotation, miroir, luminosité et photos BMP sur microSD. Le test enregistré du 20 septembre a reçu et décodé 71 images, en a transmis 70 au moteur de rendu et n'a signalé aucune erreur vidéo. Environ 3 FPS à 320 × 240 ont été observés."
        ],
        "status": "Le PC doit rester allumé : cette version ne relie pas la caméra directement à l'USB du S3. L'inspection visuelle, les commandes pendant la vidéo et les photos microSD attendent des essais physiques. Aucune capture vérifiée de l'écran physique n'est disponible pour publication."
      },
      "de": {
        "title": "Eine USB-Kamera auf einem sieben Zoll großen ESP32-Display",
        "summary": "Der erste Viewer überträgt das Video einer Endoskopkamera über eine Windows-Brücke auf den Touchscreen.",
        "body": [
          "Der PC erfasst die Kamera mit FFmpeg, kodiert JPEG und sendet Frames per UART. Der ESP32-S3 dekodiert RGB565 und zeichnet mit LVGL auf dem Waveshare-Display mit 1024 × 600 Pixeln. Empfangsguthaben und CRC schützen vor Überläufen und beschädigten Frames.",
          "Firmware 0.2.0 implementiert Standbild, Zoom, Rotation, Spiegelung, Helligkeit und BMP-Fotos auf microSD. Der dokumentierte Test vom 20. September empfing und dekodierte 71 Bilder, übergab 70 an den Renderer und meldete keine Videofehler. Beobachtet wurden etwa 3 FPS bei 320 × 240."
        ],
        "status": "Der PC muss eingeschaltet bleiben: Diese Version verbindet die Kamera nicht direkt mit dem USB-Anschluss des S3. Sichtprüfung, Regler während der Wiedergabe und microSD-Fotos müssen noch physisch getestet werden. Eine verifizierte Aufnahme des echten Displays liegt nicht zur Veröffentlichung vor."
      }
    }
  }
];

export function findUpdate(slug: string) { return projectUpdates.find(project => project.slug === slug); }
