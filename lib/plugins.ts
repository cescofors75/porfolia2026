import type { Language } from '@/lib/translations';
import type { Metadata } from 'next';
export const pluginDownload = '/downloads/CELESTE-Tang-Control-Windows.zip';
export const pluginMacDownload = '/downloads/CELESTE-Tang-Control-macOS-Universal.zip';
export const pluginImage = "/plugins/celeste-parallel/interface.png";
export const pluginSha256 = "54ef00383579ac93247844c598e7cbd2259ff02b465293b2bff78b98977b58ef";
export const pluginMacSha256 = "408a5f1be161487b9e770e221f7c02c649ae3702f941daef495e2e348359fdf1";
export const pluginCopy = {
  "es": {
    "intro": "Instrumentos y efectos del laboratorio, ahora en tu estudio.",
    "title": "Una fuente. Muchas texturas.",
    "summary": "Efecto estéreo nativo para Windows y Mac, con Tang Control opcional: 44 parámetros de CELESTE FPGA automatizables desde tu DAW.",
    "download": "Windows · VST3",
    "explore": "Historia y documentación",
    "storyTitle": "De la placa al plugin",
    "story": [
      "CELESTE empezó explorando una idea sobre la Tang Nano 20K: enviar una fuente de audio por distintas ramas y volver a reunirlas. El editor web permitió ver las conexiones; la FPGA, escuchar cómo cambiaba la señal al recorrerlas.",
      "Parallel v0.1 lleva esa idea al estudio. El procesamiento pasa a la CPU del ordenador y se integra en una pista del DAW. Delay A, Delay B y Wavefolder → Filter construyen capas de una misma fuente; Motion anima la mezcla y Space prolonga sus colas. La identidad visual sigue mostrando el recorrido del sonido.",
      "Es una primera versión concreta: cinco presets, rutas fijas y un cambio entre delays paralelos o en serie. La captura muestra el preset Neon Dust en el editor. El proyecto de hardware continúa por separado; este plugin no necesita la placa.",
      "La revisión de septiembre añade Tang Control sin sustituir el motor nativo: puedes trabajar sin placa o gestionar el hardware desde una sesión del DAW."
    ],
    "install": "Instalación y conexión",
    "steps": [
      "Descarga el ZIP de tu sistema y descomprímelo. Conserva completa la carpeta .vst3; en Mac también puedes instalar el .component para AU.",
      "Copia el plugin en la carpeta indicada abajo y vuelve a explorar plugins en tu DAW. La versión Mac usa firma de desarrollo ad hoc, sin notarización.",
      "Para DSP nativo, insértalo en una pista estéreo con audio y elige un preset. La captura muestra este editor nativo.",
      "Para Tang Control, cierra la conexión serie de la web, abre TANG CONTROL y conecta el puerto. READ TANG lee el estado real; SEND SESSION envía explícitamente los valores guardados. Controller Only deja pasar el audio del DAW sin DSP nativo.",
      "El retorno de PCM5102 necesita una entrada de línea de tu interfaz para grabarse en el DAW. No hay retorno USB ni compensación automática de latencia."
    ],
    "controls": "Guía de controles",
    "controlText": [
      "Delay A / B: 20–1200 ms y 20–1600 ms. Feedback compartido hasta 85%. SERIES A → B encadena los delays; desactivado, funcionan en paralelo.",
      "Wavefolder: plegado de onda con sobremuestreo 2×. Filter: paso bajo de esta rama entre 80 Hz y 18 kHz.",
      "Space: reverberación estéreo. Motion: modulación del filtro y de la amplitud. LFO Rate: 0,05–8 Hz, sin sincronía BPM.",
      "Master Mix: mezcla original/procesada. Output: ganancia final. BYPASS devuelve la señal a ganancia unidad.",
      "Doble clic restaura un mando. Las casillas permiten escribir valores; el DAW puede automatizar parámetros y guardar el estado en la sesión."
    ],
    "demo": "Escucha el plugin",
    "demoText": "Demo de 54 segundos renderizada con el VST3 y el preset Celestial Bloom, con cola y fundido final.",
    "scope": "Edición de septiembre de 2026",
    "scopeText": "Windows x64 VST3 y macOS Universal VST3/AU, cinco presets nativos y Tang Control. El efecto nativo funciona sin placa; controlar la Tang requiere el firmware Line-In compatible. El audio de hardware entra por PCM1808 y sale por PCM5102: USB no devuelve audio al DAW.",
    "tests": "Pruebas y alcance",
    "testsText": "Windows: pruebas de host a 44,1/48/96 kHz, estado y Controller Only; controlador C++ comprobado con la Tang real, lectura de 44 controles, escritura/restauración y exclusividad. Mac: compilación y pruebas VST3/AU en Apple Silicon e Intel. Puerto físico Mac y GUI en DAW comercial pendientes. Firma Mac ad hoc, sin notarización.",
    "files": "Documentos del paquete (español)",
    "readme": "Guía original",
    "validation": "Registro de pruebas",
    "hardware": "Explorar CELESTE en FPGA",
    "back": "Todos los plugins",
    "imageAlt": "Editor de CELESTE Parallel v0.1 con el preset Neon Dust, rutas y ocho controles",
    "size": "Windows x64 · macOS Universal (Apple Silicon + Intel) · 24.09.2026"
  },
  "ca": {
    "intro": "Instruments i efectes del laboratori, ara al teu estudi.",
    "title": "Una font. Moltes textures.",
    "summary": "Efecte estèreo natiu per a Windows i Mac, amb Tang Control opcional: 44 paràmetres de CELESTE FPGA automatitzables des del DAW.",
    "download": "Windows · VST3",
    "explore": "Història i documentació",
    "storyTitle": "De la placa al plugin",
    "story": [
      "CELESTE va començar explorant una idea sobre la Tang Nano 20K: enviar una font d’àudio per diverses branques i reunir-les de nou. L’editor web permetia veure les connexions; l’FPGA, escoltar com canviava el senyal.",
      "Parallel v0.1 porta aquesta idea a l’estudi. La CPU de l’ordinador processa l’àudio dins d’una pista del DAW. Delay A, Delay B i Wavefolder → Filter creen capes d’una mateixa font; Motion anima la mescla i Space n’allarga les cues. La interfície continua mostrant el recorregut del so.",
      "És una primera versió amb cinc presets, rutes fixes i delays en paral·lel o en sèrie. La captura mostra Neon Dust a l’editor. El projecte de hardware continua per separat; el plugin no necessita la placa.",
      "La revisió de setembre afegeix Tang Control i conserva el motor natiu: treballa sense placa o gestiona el maquinari des del DAW."
    ],
    "install": "Instal·lació i connexió",
    "steps": [
      "Descarrega i descomprimeix el ZIP del teu sistema. Conserva la carpeta .vst3 completa; Mac també inclou AU .component.",
      "Copia el plugin al directori indicat i reescaneja el DAW. Mac té firma ad hoc de desenvolupament, sense notarització.",
      "Per a DSP natiu, usa una pista estèreo amb àudio i un preset. La captura mostra aquest editor.",
      "Per a Tang Control, desconnecta el port de la web i connecta TANG CONTROL. READ TANG llegeix la placa; SEND SESSION envia els valors guardats. Controller Only deixa passar l’àudio sense DSP natiu.",
      "Per gravar PCM5102 cal una entrada de línia de la interfície. No hi ha retorn USB ni compensació automàtica de latència."
    ],
    "controls": "Guia dels controls",
    "controlText": [
      "Delay A / B: 20–1200 ms i 20–1600 ms. Feedback compartit fins al 85%. SERIES A → B encadena els delays; desactivat, treballen en paral·lel.",
      "Wavefolder: plegat d’ona amb sobremostreig 2×. Filter: passa-baix d’aquesta branca entre 80 Hz i 18 kHz.",
      "Space: reverberació estèreo. Motion: modulació del filtre i l’amplitud. LFO Rate: 0,05–8 Hz, sense sincronització BPM.",
      "Master Mix: mescla original/processada. Output: guany final. BYPASS retorna el senyal a guany unitari.",
      "Doble clic restaura un control. Pots escriure valors, automatitzar paràmetres al DAW i desar l’estat a la sessió."
    ],
    "demo": "Escolta el plugin",
    "demoText": "Demo de 54 segons renderitzada amb el VST3 i el preset Celestial Bloom, amb cua i esvaïment final.",
    "scope": "Edició de setembre de 2026",
    "scopeText": "Windows x64 VST3 i macOS Universal VST3/AU, cinc presets natius i Tang Control. El motor natiu funciona sense placa. El maquinari necessita firmware Line-In compatible: PCM1808 → FPGA → PCM5102; USB no retorna àudio.",
    "tests": "Proves i abast",
    "testsText": "Windows: host a 44,1/48/96 kHz, estat i Controller Only; controlador C++ provat amb Tang real, 44 controls, escriptura/restauració i exclusivitat. Mac: VST3/AU compilat i provat en Apple Silicon i Intel. Port físic Mac i GUI en DAW comercial pendents. Firma ad hoc, sense notarització.",
    "files": "Documents del paquet (castellà)",
    "readme": "Guia original",
    "validation": "Registre de proves",
    "hardware": "Explorar CELESTE en FPGA",
    "back": "Tots els plugins",
    "imageAlt": "Editor de CELESTE Parallel v0.1 amb el preset Neon Dust, rutes i vuit controls",
    "size": "Windows x64 · macOS Universal (Apple Silicon + Intel) · 24.09.2026"
  },
  "en": {
    "intro": "Instruments and effects from the lab, now in your studio.",
    "title": "One source. Many textures.",
    "summary": "Native stereo effect for Windows and Mac, with optional Tang Control: 44 CELESTE FPGA parameters automated from your DAW.",
    "download": "Windows · VST3",
    "explore": "Story and documentation",
    "storyTitle": "From the board to the plugin",
    "story": [
      "CELESTE began with an idea on the Tang Nano 20K: send one audio source through several branches, then bring them together again. The web editor made the connections visible; the FPGA made their effect on the signal audible.",
      "Parallel v0.1 brings that idea into the studio. Processing moves to the computer’s CPU, inside a DAW track. Delay A, Delay B and Wavefolder → Filter build layers from a single source; Motion animates the mix and Space extends its tails. The interface still reveals the path of the sound.",
      "This first release has five presets, fixed routing and parallel or serial delays. The screenshot shows Neon Dust in the editor. The hardware project continues separately; the plugin does not need the board.",
      "The September revision adds Tang Control while keeping the native engine: work without a board or manage hardware from a DAW session."
    ],
    "install": "Installation and connection",
    "steps": [
      "Download and extract your system’s ZIP. Keep the .vst3 folder intact; Mac also includes an AU .component.",
      "Copy the plugin to the path below and rescan in your DAW. Mac uses an ad-hoc development signature without notarization.",
      "For native DSP, insert on a stereo audio track and choose a preset. The screenshot shows this native editor.",
      "For Tang Control, disconnect the web serial port, open TANG CONTROL and connect. READ TANG imports hardware state; SEND SESSION explicitly sends saved values. Controller Only passes DAW audio through without native DSP.",
      "Recording the PCM5102 return requires an audio-interface line input. There is no USB audio return or automatic latency compensation."
    ],
    "controls": "Control guide",
    "controlText": [
      "Delay A / B: 20–1200 ms and 20–1600 ms. Shared feedback up to 85%. SERIES A → B chains the delays; when off, they run in parallel.",
      "Wavefolder: wavefolding with 2× oversampling. Filter: a low-pass filter on this branch, from 80 Hz to 18 kHz.",
      "Space: stereo reverb. Motion: filter and amplitude modulation. LFO Rate: 0.05–8 Hz, without BPM sync.",
      "Master Mix: dry/wet balance. Output: final gain. BYPASS returns the signal at unity gain.",
      "Double-click resets a knob. Enter values in the fields, automate parameters in your DAW and save the state in your session."
    ],
    "demo": "Hear the plugin",
    "demoText": "A 54-second demo rendered through the VST3 using Celestial Bloom, including its tail and a final fade.",
    "scope": "September 2026 edition",
    "scopeText": "Windows x64 VST3 and macOS Universal VST3/AU, five native presets and Tang Control. Native DSP works without a board. Hardware control requires compatible Line-In firmware: PCM1808 → FPGA → PCM5102. USB does not return audio to the DAW.",
    "tests": "Testing and scope",
    "testsText": "Windows: host tests at 44.1/48/96 kHz, state and Controller Only; final C++ controller tested with real Tang, 44 controls, write/restore and exclusive port access. Mac: VST3/AU builds and tests on Apple Silicon and Intel. Physical Mac serial and commercial DAW GUI remain untested. Mac signature is ad hoc, not notarized.",
    "files": "Package documents (Spanish)",
    "readme": "Original guide",
    "validation": "Test record",
    "hardware": "Explore CELESTE on FPGA",
    "back": "All plugins",
    "imageAlt": "CELESTE Parallel v0.1 editor showing Neon Dust, signal paths and eight controls",
    "size": "Windows x64 · macOS Universal (Apple Silicon + Intel) · 24.09.2026"
  },
  "fr": {
    "intro": "Instruments et effets du laboratoire, maintenant dans votre studio.",
    "title": "Une source. Plusieurs textures.",
    "summary": "Effet stéréo natif pour Windows et Mac, avec Tang Control optionnel : 44 paramètres CELESTE FPGA automatisables depuis le DAW.",
    "download": "Windows · VST3",
    "explore": "Histoire et documentation",
    "storyTitle": "De la carte au plugin",
    "story": [
      "CELESTE est né d’une idée sur la Tang Nano 20K : envoyer une source audio dans plusieurs branches, puis les réunir. L’éditeur web rendait les connexions visibles ; le FPGA permettait d’entendre leur effet sur le signal.",
      "Parallel v0.1 apporte cette idée au studio. Le processeur de l’ordinateur traite le son dans une piste du DAW. Delay A, Delay B et Wavefolder → Filter superposent les textures ; Motion anime le mixage et Space prolonge les résonances. L’interface montre toujours le parcours du son.",
      "Cette première version propose cinq presets, des routes fixes et des delays en parallèle ou en série. La capture montre Neon Dust dans l’éditeur. Le projet matériel continue séparément ; le plugin ne nécessite pas la carte.",
      "La révision de septembre ajoute Tang Control en conservant le moteur natif : travaillez sans carte ou pilotez le matériel depuis le DAW."
    ],
    "install": "Installation et connexion",
    "steps": [
      "Téléchargez et extrayez le ZIP adapté. Gardez le dossier .vst3 entier ; Mac inclut aussi AU .component.",
      "Copiez le plugin au chemin indiqué puis relancez la recherche du DAW. Mac utilise une signature de développement ad hoc, sans notarisation.",
      "Pour le DSP natif, utilisez une piste stéréo avec audio et un preset. La capture montre cet éditeur.",
      "Pour Tang Control, déconnectez le port web, ouvrez TANG CONTROL et connectez-vous. READ TANG lit la carte ; SEND SESSION envoie les valeurs sauvegardées. Controller Only transmet l’audio sans DSP natif.",
      "Enregistrer le PCM5102 exige une entrée ligne d’interface audio. Aucun retour USB ni compensation automatique de latence."
    ],
    "controls": "Guide des commandes",
    "controlText": [
      "Delay A / B : 20–1200 ms et 20–1600 ms. Feedback partagé jusqu’à 85 %. SERIES A → B met les delays en cascade ; désactivé, ils fonctionnent en parallèle.",
      "Wavefolder : repliement d’onde avec suréchantillonnage 2×. Filter : passe-bas de cette branche, de 80 Hz à 18 kHz.",
      "Space : réverbération stéréo. Motion : modulation du filtre et de l’amplitude. LFO Rate : 0,05–8 Hz, sans synchronisation BPM.",
      "Master Mix : équilibre original/traité. Output : gain final. BYPASS restitue le signal à gain unitaire.",
      "Un double-clic réinitialise une commande. Saisissez des valeurs, automatisez les paramètres dans le DAW et sauvegardez l’état dans la session."
    ],
    "demo": "Écouter le plugin",
    "demoText": "Demo de 54 secondes rendue par le VST3 avec Celestial Bloom, avec résonance et fondu final.",
    "scope": "Édition septembre 2026",
    "scopeText": "Windows x64 VST3 et macOS Universal VST3/AU, cinq presets natifs et Tang Control. Le DSP natif fonctionne sans carte. Le matériel exige un firmware Line-In compatible : PCM1808 → FPGA → PCM5102. Aucun retour audio USB.",
    "tests": "Tests et portée",
    "testsText": "Windows : tests hôte à 44,1/48/96 kHz, état et Controller Only ; contrôleur C++ testé sur Tang réelle, 44 commandes, écriture/restauration et exclusivité. Mac : VST3/AU compilés et testés sur Apple Silicon et Intel. Port physique Mac et interface dans un DAW commercial non testés. Signature ad hoc, sans notarisation.",
    "files": "Documents du paquet (espagnol)",
    "readme": "Guide original",
    "validation": "Rapport de tests",
    "hardware": "Explorer CELESTE sur FPGA",
    "back": "Tous les plugins",
    "imageAlt": "Éditeur CELESTE Parallel v0.1 avec Neon Dust, routage et huit commandes",
    "size": "Windows x64 · macOS Universal (Apple Silicon + Intel) · 24.09.2026"
  },
  "de": {
    "intro": "Instrumente und Effekte aus dem Labor, jetzt in deinem Studio.",
    "title": "Eine Quelle. Viele Texturen.",
    "summary": "Nativer Stereo-Effekt für Windows und Mac mit optionalem Tang Control: 44 CELESTE-FPGA-Parameter aus der DAW automatisieren.",
    "download": "Windows · VST3",
    "explore": "Geschichte und Dokumentation",
    "storyTitle": "Von der Platine zum Plugin",
    "story": [
      "CELESTE begann mit einer Idee auf dem Tang Nano 20K: eine Audioquelle durch mehrere Zweige schicken und wieder zusammenführen. Der Web-Editor machte die Verbindungen sichtbar; das FPGA machte ihre Wirkung hörbar.",
      "Parallel v0.1 bringt diese Idee ins Studio. Die CPU des Computers verarbeitet das Signal in einer DAW-Spur. Delay A, Delay B und Wavefolder → Filter erzeugen Schichten derselben Quelle; Motion bewegt die Mischung und Space verlängert den Nachklang. Die Oberfläche zeigt weiterhin den Weg des Klangs.",
      "Diese erste Version enthält fünf Presets, feste Signalwege und parallele oder serielle Delays. Das Bild zeigt Neon Dust im Editor. Das Hardwareprojekt läuft separat weiter; das Plugin benötigt keine Platine.",
      "Die September-Version ergänzt Tang Control und behält den nativen Motor: ohne Platine arbeiten oder Hardware aus einer DAW-Session steuern."
    ],
    "install": "Installation und Verbindung",
    "steps": [
      "Passendes ZIP herunterladen und entpacken. Den .vst3-Ordner vollständig lassen; Mac enthält auch AU .component.",
      "Plugin in den angegebenen Pfad kopieren und DAW neu scannen. Mac verwendet eine Ad-hoc-Entwicklersignatur ohne Notarisierung.",
      "Für nativen DSP eine Stereospur mit Audio und ein Preset verwenden. Das Bild zeigt diesen Editor.",
      "Für Tang Control den Web-Port trennen und TANG CONTROL verbinden. READ TANG liest die Platine; SEND SESSION sendet gespeicherte Werte ausdrücklich. Controller Only lässt DAW-Audio ohne nativen DSP passieren.",
      "Zum Aufnehmen von PCM5102 ist ein Audiointerface-Line-Eingang erforderlich. Kein USB-Rückweg und keine automatische Latenzkompensation."
    ],
    "controls": "Bedienung",
    "controlText": [
      "Delay A / B: 20–1200 ms und 20–1600 ms. Gemeinsames Feedback bis 85 %. SERIES A → B schaltet die Delays hintereinander; ausgeschaltet laufen sie parallel.",
      "Wavefolder: Wellenfaltung mit 2× Oversampling. Filter: Tiefpass dieses Zweigs von 80 Hz bis 18 kHz.",
      "Space: Stereo-Hall. Motion: Filter- und Amplitudenmodulation. LFO Rate: 0,05–8 Hz, ohne BPM-Synchronisierung.",
      "Master Mix: Verhältnis von Original und Effektsignal. Output: Ausgangspegel. BYPASS gibt das Signal mit Verstärkung eins aus.",
      "Doppelklick setzt einen Regler zurück. Werte lassen sich eingeben, Parameter in der DAW automatisieren und Einstellungen in der Session speichern."
    ],
    "demo": "Plugin anhören",
    "demoText": "54 Sekunden Demo, mit dem VST3 und Celestial Bloom gerendert, einschließlich Nachklang und Ausblendung.",
    "scope": "Ausgabe September 2026",
    "scopeText": "Windows x64 VST3 und macOS Universal VST3/AU, fünf native Presets und Tang Control. Der native DSP läuft ohne Platine. Hardwaresteuerung benötigt kompatible Line-In-Firmware: PCM1808 → FPGA → PCM5102. Kein USB-Audiorückweg.",
    "tests": "Tests und Umfang",
    "testsText": "Windows: Hosttests bei 44,1/48/96 kHz, Zustand und Controller Only; C++-Controller an echter Tang geprüft, 44 Regler, Schreiben/Wiederherstellen und exklusiver Port. Mac: VST3/AU auf Apple Silicon und Intel gebaut und getestet. Physischer Mac-Port und kommerzielle DAW-GUI ungetestet. Ad-hoc-Signatur ohne Notarisierung.",
    "files": "Paketdokumente (Spanisch)",
    "readme": "Originalanleitung",
    "validation": "Testprotokoll",
    "hardware": "CELESTE auf FPGA entdecken",
    "back": "Alle Plugins",
    "imageAlt": "CELESTE Parallel v0.1 mit Neon Dust, Signalwegen und acht Reglern",
    "size": "Windows x64 · macOS Universal (Apple Silicon + Intel) · 24.09.2026"
  }
} satisfies Record<Language,object>;

export function pluginMetadata(language: Language, path = "/plugins/celeste-parallel"): Metadata {
  const copy = pluginCopy[language];
  const title = path === "/plugins" ? "Plugins | Cesco.dev" : "CELESTE Parallel · VST3 / AU · Tang Control | Cesco.dev";
  return { title, description: copy.summary, alternates: { canonical: `https://cesco.dev${path}` }, openGraph: { title, description: copy.summary, url: `https://cesco.dev${path}`, images: [{ url: pluginImage, alt: copy.imageAlt }] }, twitter: { card: "summary_large_image", title, description: copy.summary, images: [pluginImage] } };
}
