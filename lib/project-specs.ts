import type { Language } from "@/lib/translations";

export const detailUI = {
  es: { specs: "Ficha técnica", questions: "Preguntas sobre el proyecto", related: "Proyectos relacionados", demo: "Escuchar demo y descargar plugin gratuito", story: "Decisiones y evolución", video: "Cargar vídeo", documentation: "Documentación e instalación" },
  ca: { specs: "Fitxa tècnica", questions: "Preguntes sobre el projecte", related: "Projectes relacionats", demo: "Escoltar demo i descarregar el plugin gratuït", story: "Decisions i evolució", video: "Carregar vídeo", documentation: "Documentació i instal·lació" },
  en: { specs: "Technical specifications", questions: "Project questions", related: "Related projects", demo: "Listen to the demo and download the free plugin", story: "Decisions and development", video: "Load video", documentation: "Documentation and installation" },
  fr: { specs: "Fiche technique", questions: "Questions sur le projet", related: "Projets associés", demo: "Écouter la démo et télécharger le plugin gratuit", story: "Choix et évolution", video: "Charger la vidéo", documentation: "Documentation et installation" },
  de: { specs: "Technische Daten", questions: "Fragen zum Projekt", related: "Verwandte Projekte", demo: "Demo anhören und kostenloses Plugin herunterladen", story: "Entscheidungen und Entwicklung", video: "Video laden", documentation: "Dokumentation und Installation" },
};
const labels = {
  architecture: { es: "Arquitectura", ca: "Arquitectura", en: "Architecture", fr: "Architecture", de: "Architektur" },
  capacity: { es: "Capacidad documentada", ca: "Capacitat documentada", en: "Documented capacity", fr: "Capacité documentée", de: "Dokumentierter Umfang" },
  interface: { es: "Interfaces", ca: "Interfícies", en: "Interfaces", fr: "Interfaces", de: "Schnittstellen" },
  format: { es: "Formatos", ca: "Formats", en: "Formats", fr: "Formats", de: "Formate" },
  dimensions: { es: "Dimensiones", ca: "Dimensions", en: "Dimensions", fr: "Dimensions", de: "Abmessungen" },
};
type Spec = [keyof typeof labels, string];
export const projectSpecs: Record<string, Spec[]> = {
  "k8-buggy": [["dimensions", "200 × 80 × 65 mm · R1"], ["capacity", "10 · STL"], ["format", "STL / STEP / 3MF"], ["interface", "M3 · TT"]],
  "kayak-frame": [["architecture", "320 V5 ELEGANCE RC1"], ["capacity", "23 · STL"], ["dimensions", "A1 mini · 180 × 180 mm"], ["format", "STL · CAD"]],
  "monitor-solar-esp32": [["architecture", "Waveshare ESP32-S3 Touch LCD 7B"], ["dimensions", "1024 × 600 px"], ["interface", "GT911 · I²C · Wi-Fi · HTTP /api/status"], ["format", "C++ · PlatformIO"]],
  "eurorack-parts": [["architecture", "V1.0-RC1"], ["capacity", "53 · CAD"], ["interface", "M2.5 / M3"], ["format", "STL / STEP / 3MF"]],
  "celeste-perform": [["architecture", "Web Audio · Web Worker · Rust / WASM"], ["capacity", "8 × 6 × 16"], ["interface", "Play · Break · Drop"], ["format", "TypeScript"]],
  "celeste-parallel": [["architecture", "Tang Nano 20K · FPGA"], ["interface", "PCM1808 → FPGA → PCM5102 · 48 kHz"], ["capacity", "19 384 / 20 736 cells · 38 / 46 RAM · 23 / 24 DSP"], ["format", "Web Serial · HDMI · Tang Control"]],
  "celeste-pocket": [["architecture", "FPGA · MiniDrumMachine"], ["capacity", "8 × 16"], ["interface", "HDMI · ST7789 · M5Stack 8Encoder"], ["format", "PLAY / MIXER"]],
  "red808-v2": [["architecture", "ESP32-P4 + Daisy Pod"], ["interface", "USB CDC · MIDI · LVGL"], ["format", "Protocol 2.4 · checksum"], ["capacity", "BANK4 · 4 rotaries"]],
  "toonjs": [["architecture", "TypeScript · Float64Array"], ["format", "ESM / CommonJS"], ["interface", "NodeNext / Bundler"], ["capacity", "455 tests · Phase B"]],
  "raydrone": [["architecture", "Rust → WebAssembly → AudioWorklet"], ["capacity", "2 000 → Top-36 · 100 Hz"], ["interface", "12 ms · crossfade"], ["format", "Web Audio"]],
  "visor-endoscopico": [["architecture", "FFmpeg → JPEG / UART → ESP32-S3"], ["dimensions", "1024 × 600 px"], ["interface", "CRC · RGB565 · LVGL"], ["format", "BMP · microSD · firmware 0.2.0"]],
};
export function specsFor(slug: string, language: Language) {
  const capacity: Record<string, Record<Language, string>> = {
    "k8-buggy": { es: "10 piezas en el kit", ca: "10 peces al kit", en: "10 kit parts", fr: "10 pièces dans le kit", de: "10 Bausatzteile" },
    "kayak-frame": { es: "23 STL individuales · 3 placas", ca: "23 STL individuals · 3 plaques", en: "23 individual STL files · 3 plates", fr: "23 STL individuels · 3 plaques", de: "23 einzelne STL-Dateien · 3 Platten" },
    "eurorack-parts": { es: "53 modelos CAD", ca: "53 models CAD", en: "53 CAD models", fr: "53 modèles CAO", de: "53 CAD-Modelle" },
    "celeste-perform": { es: "8 bancos · 6 pistas · 16 compases por banco", ca: "8 bancs · 6 pistes · 16 compassos per banc", en: "8 banks · 6 tracks · 16 bars per bank", fr: "8 banques · 6 pistes · 16 mesures par banque", de: "8 Bänke · 6 Spuren · 16 Takte pro Bank" },
    "celeste-pocket": { es: "8 voces · 16 patrones", ca: "8 veus · 16 patrons", en: "8 voices · 16 patterns", fr: "8 voix · 16 patterns", de: "8 Stimmen · 16 Patterns" },
  };
  return (projectSpecs[slug] ?? []).map(([key, value]) => ({ label: labels[key][language], value: key === "capacity" ? capacity[slug]?.[language] ?? value : value }));
}
export const relatedProjects: Record<string, string[]> = {
  "k8-buggy": ["kayak-frame", "eurorack-parts"], "kayak-frame": ["k8-buggy", "eurorack-parts"],
  "eurorack-parts": ["k8-buggy", "red808-v2"], "monitor-solar-esp32": ["red808-v2", "visor-endoscopico"],
  "celeste-parallel": ["celeste-pocket", "red808-v2", "celeste-perform"], "celeste-pocket": ["celeste-parallel", "red808-v2"],
  "celeste-perform": ["celeste-parallel", "raydrone"], "red808-v2": ["celeste-parallel", "monitor-solar-esp32"],
  "toonjs": ["raydrone", "celeste-perform"], "raydrone": ["celeste-perform", "celeste-parallel"], "visor-endoscopico": ["monitor-solar-esp32", "red808-v2"],
};

type FAQ = [string, string][];
export const projectQuestions: Record<string, Record<Language, FAQ>> = {
  "celeste-parallel": {
    es: [["¿Cómo procesa audio la Tang Nano 20K?", "CELESTE recibe la señal del PCM1808 y ejecuta los efectos en la FPGA; el PCM5102 entrega la salida a 48 kHz. La web cambia parámetros y rutas del patch."], ["¿El USB transporta audio?", "En este firmware, USB lleva control y telemetría. El audio entra por Line-In; HDMI muestra el estado y los valores del instrumento."], ["¿Necesito la FPGA para usar el plugin gratuito?", "El plugin nativo procesa audio en el ordenador. Tang Control es la integración de control del hardware; la página del plugin reúne la demo MP3, las descargas Windows/macOS y las instrucciones."]],
    ca: [["Com processa àudio la Tang Nano 20K?", "CELESTE rep el senyal del PCM1808 i executa els efectes a la FPGA; el PCM5102 lliura la sortida a 48 kHz. El web modifica paràmetres i rutes del patch."], ["L’USB transporta àudio?", "En aquest firmware, USB transporta control i telemetria. L’àudio entra per Line-In; HDMI mostra l’estat i els valors de l’instrument."], ["Cal la FPGA per utilitzar el plugin gratuït?", "El plugin natiu processa àudio a l’ordinador. Tang Control integra el control del hardware; la pàgina del plugin reuneix demo MP3, descàrregues Windows/macOS i instruccions."]],
    en: [["How does Tang Nano 20K process audio?", "CELESTE receives the PCM1808 signal and runs effects in the FPGA; PCM5102 provides 48 kHz output. The web interface changes patch parameters and routing."], ["Does USB carry audio?", "In this firmware, USB carries control and telemetry. Audio enters through Line-In; HDMI displays instrument state and parameter values."], ["Does the free plugin require an FPGA?", "The native plugin processes audio on the computer. Tang Control integrates hardware control; the plugin page provides an MP3 demo, Windows/macOS downloads and installation instructions."]],
    fr: [["Comment la Tang Nano 20K traite-t-elle l’audio ?", "CELESTE reçoit le signal du PCM1808 et exécute les effets dans le FPGA ; le PCM5102 fournit la sortie à 48 kHz. Le web règle paramètres et routage."], ["L’USB transporte-t-il l’audio ?", "Ce firmware utilise USB pour le contrôle et la télémétrie. L’audio entre par Line-In ; HDMI affiche l’état et les paramètres de l’instrument."], ["Le plugin gratuit nécessite-t-il un FPGA ?", "Le plugin natif traite l’audio sur l’ordinateur. Tang Control intègre le contrôle matériel ; la page du plugin contient démo MP3, téléchargements Windows/macOS et instructions."]],
    de: [["Wie verarbeitet Tang Nano 20K Audio?", "CELESTE empfängt das Signal vom PCM1808 und berechnet Effekte im FPGA; PCM5102 liefert die Ausgabe mit 48 kHz. Die Weboberfläche steuert Parameter und Signalwege."], ["Überträgt USB Audio?", "Diese Firmware nutzt USB für Steuerung und Telemetrie. Audio kommt über Line-In; HDMI zeigt Zustand und Parameter des Instruments."], ["Benötigt das kostenlose Plugin einen FPGA?", "Das native Plugin verarbeitet Audio auf dem Computer. Tang Control integriert die Hardwaresteuerung; die Plugin-Seite enthält MP3-Demo, Windows/macOS-Downloads und Installationsanleitung."]],
  },
  "red808-v2": {
    es: [["¿Qué hace el ESP32-P4 en RED808?", "Gestiona pantalla, patrones, MIDI y USB host. Daisy Pod se ocupa del sampler, la síntesis y los efectos; ambas placas se comunican por USB CDC."], ["¿Cómo se actualiza un patrón sin interrumpir el audio?", "El protocolo 2.4 comprueba el patrón completo mediante checksum y lo activa al inicio de un bloque de audio. Si la carga queda incompleta, conserva el patrón anterior."]],
    ca: [["Què fa l’ESP32-P4 a RED808?", "Gestiona pantalla, patrons, MIDI i USB host. Daisy Pod s’ocupa del sampler, la síntesi i els efectes; es comuniquen per USB CDC."], ["Com s’actualitza un patró sense interrompre l’àudio?", "El protocol 2.4 comprova el patró complet amb checksum i l’activa a l’inici d’un bloc d’àudio. Una càrrega incompleta conserva el patró anterior."]],
    en: [["What does ESP32-P4 do in RED808?", "It manages the display, patterns, MIDI and USB host. Daisy Pod handles sampling, synthesis and effects; the boards communicate over USB CDC."], ["How are patterns updated without interrupting audio?", "Protocol 2.4 checks the complete pattern using a checksum and activates it at an audio block boundary. An incomplete transfer leaves the previous pattern active."]],
    fr: [["Quel est le rôle de l’ESP32-P4 dans RED808 ?", "Il gère écran, patterns, MIDI et USB host. Daisy Pod assure sampler, synthèse et effets ; les cartes communiquent par USB CDC."], ["Comment actualiser un pattern sans interrompre l’audio ?", "Le protocole 2.4 vérifie le pattern complet par checksum et l’active au début d’un bloc audio. Un transfert incomplet conserve le pattern précédent."]],
    de: [["Welche Aufgabe übernimmt ESP32-P4 in RED808?", "Er steuert Display, Patterns, MIDI und USB-Host. Daisy Pod übernimmt Sampling, Synthese und Effekte; die Boards kommunizieren per USB CDC."], ["Wie werden Patterns ohne Audiounterbrechung aktualisiert?", "Protokoll 2.4 prüft das vollständige Pattern per Checksumme und aktiviert es an einer Audioblockgrenze. Bei unvollständiger Übertragung bleibt das bisherige Pattern aktiv."]],
  },
  "k8-buggy": {
    es: [["¿Qué contiene el chasis impreso K8 R1?", "El kit divide el chasis en diez piezas, con techo desmontable y bandeja de electrónica. Los archivos de diseño incluyen STL, STEP, placas 3MF y probetas para insertos M3."], ["¿Está listo para conducir o vender?", "Está en montaje y pruebas. La foto muestra piezas reales, pero las comprobaciones CAD no validan resistencia, suspensión ni conducción. Los adaptadores TT y las torretas requieren comprobación física."]],
    ca: [["Què conté el xassís imprès K8 R1?", "El kit divideix el xassís en deu peces, amb sostre desmuntable i safata d’electrònica. El disseny inclou STL, STEP, plaques 3MF i provetes per a inserts M3."], ["Està preparat per circular o vendre?", "Està en muntatge i proves. La foto mostra peces reals, però el CAD no valida resistència, suspensió ni conducció. Adaptadors TT i torretes requereixen comprovació física."]],
    en: [["What is included in the K8 R1 printed chassis?", "The kit divides the chassis into ten parts, including a removable roof and electronics tray. Design files include STL, STEP, 3MF plates and M3 insert coupons."], ["Is it ready to drive or sell?", "Assembly and testing are ongoing. The photo shows real parts, but CAD checks do not validate strength, suspension or driving. TT adapters and shock towers require physical checks."]],
    fr: [["Que contient le châssis imprimé K8 R1 ?", "Le kit comprend dix pièces, dont un toit amovible et un plateau électronique. Les fichiers incluent STL, STEP, plaques 3MF et éprouvettes pour inserts M3."], ["Est-il prêt à rouler ou à être vendu ?", "Montage et essais sont en cours. La photo montre des pièces réelles, mais la CAO ne valide ni résistance, ni suspension, ni conduite. Adaptateurs TT et tours d’amortisseurs restent à tester."]],
    de: [["Was enthält das gedruckte K8-R1-Chassis?", "Der Bausatz besteht aus zehn Teilen mit abnehmbarem Dach und Elektronikträger. Die Entwurfsdateien enthalten STL, STEP, 3MF-Platten und M3-Einsatzproben."], ["Ist es fahrbereit oder verkaufsfertig?", "Montage und Tests laufen noch. Das Foto zeigt echte Teile, doch CAD-Prüfungen belegen keine Festigkeit, Federung oder Fahreigenschaften. TT-Adapter und Dämpferbrücken müssen praktisch geprüft werden."]],
  },
};
