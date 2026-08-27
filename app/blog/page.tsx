import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CircuitBoard, Cpu, Radio, Waves } from "lucide-react";
import { BlogLocaleSync } from "@/components/blog-locale-sync";

export const metadata: Metadata = {
  title: "Cuaderno de laboratorio | Hardware, DSP e instrumentos | Cesco.dev",
  description: "El proceso completo de investigación y construcción que conecta RED808, RayDrone, Aura y Celestial Field desde finales de 2025.",
  alternates: { canonical: "https://cesco.dev/blog" },
  openGraph: {
    title: "Cuaderno de laboratorio — del cable al campo acústico",
    description: "Hardware, firmware, interfaces, DSP y síntesis: el proceso completo desde finales de 2025.",
    url: "https://cesco.dev/blog",
    images: [{ url: "/gallery/IMG_8083.webp", width: 1500, height: 2000, alt: "Instrumento en funcionamiento durante una sesión nocturna" }],
  },
};

type Chapter = {
  id: string;
  number: string;
  date: string;
  kicker: string;
  title: string;
  lead: string;
  body: string[];
  images: { src: string; alt: string }[];
  note: string;
  tags: string[];
};

const chapters: Chapter[] = [
  {
    id: "energia",
    number: "01",
    date: "Finales de 2025",
    kicker: "Energía antes que música",
    title: "La primera decisión no suena",
    lead: "Antes de escribir un secuenciador o dibujar un pad había una pregunta menos vistosa: ¿cómo alimentar una máquina formada por varias inteligencias sin convertir el audio en ruido?",
    body: [
      "Las primeras fotografías muestran una investigación deliberadamente física: batería, reguladores, pinzas, voltímetro y módulos todavía sin una caja definitiva. El objetivo no era montar una fuente bonita, sino conocer el comportamiento real del sistema cuando pantalla, microcontroladores, almacenamiento y audio empiezan a pedir corriente al mismo tiempo.",
      "Ese trabajo fija una disciplina que continuará durante todo el proyecto: medir antes de simplificar. Una caída de tensión, una masa mal resuelta o un pico al encender la pantalla pueden parecer errores de firmware. Separar el problema eléctrico del lógico evita construir software para compensar un fallo que vive en el cableado.",
    ],
    images: [
      { src: "/gallery/IMG_6497.webp", alt: "Prueba de alimentación a 12 voltios con batería y módulo regulador" },
      { src: "/gallery/IMG_6507.webp", alt: "Arduino Nano cableado sobre una protoboard durante las primeras pruebas" },
    ],
    note: "Principio de laboratorio: si una anomalía puede ser eléctrica, se mide antes de buscarla en el código.",
    tags: ["12 V", "regulación", "masa común", "prototipado"],
  },
  {
    id: "pulso",
    number: "02",
    date: "Invierno 2025/26",
    kicker: "El tiempo compartido",
    title: "El secuenciador encuentra un pulso",
    lead: "Una caja de ritmos distribuida solo existe si todas sus partes están de acuerdo sobre el mismo instante.",
    body: [
      "Las primeras interfaces ya contienen la semilla del instrumento: BPM, dieciséis pasos, selección de voz, mute y volumen. Al principio son pantallas de prueba conectadas a placas distintas. Lo importante no es todavía la estética; es comprobar que un cambio en un lugar aparece en los demás sin perder el compás.",
      "Aquí nace la arquitectura maestro/esclavo. Un nodo conserva el estado musical y marca el tiempo; las demás superficies observan, representan y modifican ese estado. La palabra “slave”, visible en las primeras carcasas, describe una responsabilidad técnica: obedecer al reloj, no duplicar la verdad y recuperarse cuando el enlace vuelve.",
      "El secuenciador radial fue una exploración útil. Ver los dieciséis pasos como rayos alrededor de una voz convertía el patrón en una forma. Más adelante esa intuición visual reaparecerá, transformada, en el lenguaje de RayDrone.",
    ],
    images: [
      { src: "/gallery/IMG_6640.webp", alt: "Dos pantallas sincronizadas mostrando pads y secuenciador a 115 BPM" },
      { src: "/gallery/IMG_6841.webp", alt: "Secuenciador radial de dieciséis pasos en la pantalla RED808" },
    ],
    note: "Una sola fuente de verdad: patrón, tempo y transporte pertenecen al maestro; las interfaces son proyecciones sincronizadas.",
    tags: ["clock", "16 pasos", "estado", "master/slave"],
  },
  {
    id: "arquitectura",
    number: "03",
    date: "Enero de 2026",
    kicker: "De placas a sistema",
    title: "Distribuir para especializar",
    lead: "Cuando una placa intenta secuenciar, dibujar, servir una web y procesar audio a la vez, cada nueva función compite con el tiempo real.",
    body: [
      "La mesa de trabajo empieza a llenarse de candidatos: ESP32, pantallas, displays auxiliares, SD, encoders y placas de expansión. No es acumulación accidental. Cada combinación permite descubrir qué responsabilidad debe vivir en cada procesador y qué información necesita cruzar el bus.",
      "RED808 termina separando tres mundos. El ESP32-S3 actúa como cerebro musical y secuenciador. El ESP32-P4 se ocupa de una interfaz gráfica más ambiciosa. Daisy Seed queda reservado para el DSP, donde cada microsegundo importa. Esta división permite que la pantalla se anime sin introducir un clic y que el audio siga funcionando aunque una vista tarde más en dibujarse.",
      "Distribuir también obliga a diseñar lo incómodo: paquetes incompletos, reconexión, estados obsoletos y diagnóstico. La robustez no aparece al final; se convierte en parte del protocolo desde que hay más de una placa.",
    ],
    images: [
      { src: "/gallery/IMG_6723.webp", alt: "Mesa con pantallas, displays, módulos ESP32 y controles durante la definición de arquitectura" },
      { src: "/gallery/IMG_6749.webp", alt: "ESP32-S3 montado sobre una placa de expansión con terminales" },
    ],
    note: "La arquitectura distribuida no busca usar más hardware: busca aislar tiempos críticos y hacer visible cada responsabilidad.",
    tags: ["ESP32-S3", "ESP32-P4", "Daisy Seed", "bus"],
  },
  {
    id: "audio",
    number: "04",
    date: "Enero de 2026",
    kicker: "El camino de la señal",
    title: "El audio merece su propio territorio",
    lead: "El sonido en tiempo real no admite pausas de interfaz, recolección de memoria ni esperas de red.",
    body: [
      "Los módulos I²S, conectores de línea y pequeñas placas de conversión representan una fase esencial: construir un camino de audio que pueda probarse por separado. Entrada, salida, reloj, formato de muestra y niveles deben quedar definidos antes de añadir capas de síntesis o efectos.",
      "La decisión de reservar Daisy Seed para DSP nace de esa exigencia. El STM32H750 ofrece un entorno apropiado para procesar bloques de audio con latencia constante, mientras el P4 puede concentrarse en LVGL, visualización y control. No se trata únicamente de potencia bruta; se trata de evitar interferencias entre tareas con ritmos incompatibles.",
      "Esta frontera se mantendrá en Aura: la experiencia puede cambiar, la pantalla puede crecer y el algoritmo puede evolucionar, pero el contrato del audio debe seguir siendo predecible.",
    ],
    images: [
      { src: "/gallery/IMG_6752.webp", alt: "Módulo de audio I2S con entrada y salida de línea" },
      { src: "/gallery/IMG_7177.webp", alt: "Módulo de control conectado durante pruebas de hardware" },
    ],
    note: "En audio, la estabilidad temporal es una función. Un sistema que suena bien nueve de cada diez veces todavía no es un instrumento.",
    tags: ["I²S", "DSP", "latencia", "STM32H750"],
  },
  {
    id: "lenguaje-visual",
    number: "05",
    date: "Primer trimestre de 2026",
    kicker: "La máquina se explica",
    title: "Color, jerarquía y estados legibles",
    lead: "La interfaz deja de ser una ventana de diagnóstico cuando permite actuar sin traducir mentalmente cada parámetro.",
    body: [
      "La evolución visual es visible en el archivo: de botones funcionales y pequeños displays se pasa a una superficie donde cada voz tiene identidad, el transporte ocupa una zona estable y las funciones secundarias no compiten con los pads. El color agrupa, confirma y anticipa; no se usa como simple decoración.",
      "Cada iteración reduce distancia entre intención y resultado. Tocar un pad, cambiar patrón, abrir el mixer o entrar en FX debe ser posible sin recorrer una jerarquía profunda. La pantalla táctil se diseña como panel de instrumento: objetivos grandes, feedback inmediato y suficiente información para no perder el contexto musical.",
      "Las versiones fotografiadas conservan errores, reflejos y cables. Precisamente por eso importan: muestran que la interfaz no nació como un mockup aislado, sino tocándose sobre el hardware real y adaptándose a sus límites.",
    ],
    images: [
      { src: "/gallery/IMG_7363.webp", alt: "Menú táctil de RED808 con accesos a pads, secuenciador, volúmenes y patrones" },
      { src: "/gallery/IMG_7399.webp", alt: "Interfaz de dieciséis pads y controles de transporte sobre pantalla táctil" },
    ],
    note: "Una interfaz musical no se evalúa por cuántos parámetros muestra, sino por cuántas decisiones permite tomar sin romper el flujo.",
    tags: ["LVGL", "touch", "jerarquía", "feedback"],
  },
  {
    id: "grafo",
    number: "06",
    date: "Primer trimestre de 2026",
    kicker: "Señal como estructura",
    title: "Del mixer al grafo de efectos",
    lead: "Cuando dieciséis voces comparten efectos, la ruta importa tanto como el valor de cada control.",
    body: [
      "El experimento de grafo convierte la cadena de señal en un objeto visible. Las voces convergen en un bitcrusher, atraviesan distorsión y delay, y terminan en la salida maestra. Esta representación hace explícito algo que un panel de potenciómetros puede ocultar: el orden de los procesos cambia el resultado.",
      "La idea del grafo no sustituye a la vista rápida de interpretación. Sirve como laboratorio para pensar ruteo, buses auxiliares y combinaciones de efectos. A partir de ahí aparece FX Lab: una superficie más directa donde flange, delay, reverb, fold, crush y phaser pueden activarse y regularse sin abandonar el instrumento.",
      "Este movimiento entre representación técnica y control performativo se repite en todo el proyecto. Primero se entiende el sistema; después se diseña el gesto mínimo para gobernarlo.",
    ],
    images: [
      { src: "/gallery/IMG_6996.webp", alt: "Grafo visual con múltiples pads conectados a bitcrusher, distorsión y delay" },
      { src: "/gallery/IMG_7895.webp", alt: "Pantalla FX Lab con controles de flange, delay, reverb, fold, crush y phaser" },
    ],
    note: "La topología también es un parámetro musical: efecto, orden, envío y retorno forman parte del sonido.",
    tags: ["FX graph", "routing", "delay", "reverb"],
  },
  {
    id: "web",
    number: "07",
    date: "Primavera de 2026",
    kicker: "Una segunda superficie",
    title: "El navegador entra en el instrumento",
    lead: "La web no se añade como panel de administración: se convierte en otra manera de tocar la misma máquina.",
    body: [
      "El ESP32 crea su propia red y sirve una interfaz accesible desde ordenador, tableta o teléfono. La misma arquitectura de estado que sincroniza las placas permite que el navegador observe el patrón, dispare voces y modifique parámetros. El instrumento deja de estar atado a una única pantalla física.",
      "La vista de dieciséis canales ofrece live pads, secuenciador, volúmenes, FX, MIDI, SD, información y melodía. En otra iteración, una matriz organiza escenas completas —fill, variación, drums, bass, synth, build y drop— para pensar la interpretación a una escala superior al paso individual.",
      "Trabajar con una UI web también acelera el diseño. Las ideas se prueban en una pantalla grande, pasan a una tableta y finalmente se condensan en el P4. El navegador funciona como banco de pruebas y como superficie remota real.",
    ],
    images: [
      { src: "/gallery/IMG_7105.webp", alt: "Interfaz web RED808 con dieciséis canales y herramientas de interpretación" },
      { src: "/gallery/IMG_7892.webp", alt: "Secuenciador matricial de RED808 funcionando en una tableta" },
    ],
    note: "Una máquina, múltiples superficies: el estado musical no pertenece a la pantalla que lo muestra.",
    tags: ["Web UI", "Wi‑Fi local", "tablet", "stems"],
  },
  {
    id: "gesto",
    number: "08",
    date: "Primavera de 2026",
    kicker: "Más allá del panel",
    title: "Probar el gesto antes de necesitarlo",
    lead: "No todas las ramas de investigación tienen que convertirse en producto para cambiar la forma de pensar el instrumento.",
    body: [
      "Una de las imágenes más reveladoras muestra una interfaz experimental de visión: la cámara reconoce la mano y superpone sus articulaciones mientras cuatro zonas flotantes proponen control sobre sonido, patrón y efectos. Es una prueba lateral, pero formula una pregunta importante: ¿qué ocurre cuando el cuerpo deja de tocar una superficie y empieza a modular el espacio frente a ella?",
      "El experimento no reemplaza los pads. Investiga continuidad. Un botón es binario; una mano en movimiento produce distancia, velocidad, apertura y trayectoria. Esas magnitudes encajan mejor con parámetros como dispersión, densidad, morphing o espacio que con la simple selección de un paso.",
      "La rama gestual anticipa el vocabulario de Aura y RayDrone: menos navegación, más relación directa entre movimiento y campo sonoro.",
    ],
    images: [
      { src: "/gallery/IMG_7454.webp", alt: "Experimento de control gestual en navegador con seguimiento de mano" },
      { src: "/gallery/IMG_7298.webp", alt: "Dos superficies táctiles RED808 funcionando en paralelo" },
    ],
    note: "Un prototipo también puede servir para descartar una interfaz y conservar una idea.",
    tags: ["hand tracking", "gesto", "Web camera", "control continuo"],
  },
  {
    id: "instrumento",
    number: "09",
    date: "Primavera–verano de 2026",
    kicker: "Del test a la sesión",
    title: "La caja desaparece y queda el gesto",
    lead: "El punto de inflexión llega cuando se deja de comprobar si las piezas funcionan y se empieza a tocar durante horas.",
    body: [
      "La iluminación, los encoders y las pantallas ya no son componentes dispersos: forman una escena coherente. Los pads responden, el secuenciador avanza, el mixer conserva el contexto y los anillos LED devuelven estado sin exigir mirar un número. El prototipo se vuelve legible incluso en una habitación oscura.",
      "Ese cambio revela problemas que una prueba corta nunca encuentra: fatiga de navegación, controles demasiado pequeños, estados ambiguos, latencias que solo molestan al repetir un gesto y reconexiones que ocurren después de mucho tiempo. Tocar es una forma de test más exigente que cualquier demo.",
      "RED808 se consolida así como laboratorio de arquitectura instrumental. No es solamente el proyecto anterior a RayDrone; es el lugar donde se aprende qué debe permanecer estable cuando software, hardware y músico comparten tiempo real.",
    ],
    images: [
      { src: "/gallery/IMG_7202.webp", alt: "RED808 en una sesión nocturna con pads táctiles y controles iluminados" },
      { src: "/gallery/IMG_8083.webp", alt: "Unidad integrada con superficie táctil, MIDI y luz roja durante una sesión" },
    ],
    note: "Un instrumento empieza donde termina la demo: debe seguir respondiendo cuando la novedad desaparece.",
    tags: ["performance", "encoders", "MIDI", "resiliencia"],
  },
  {
    id: "raydrone",
    number: "10",
    date: "Verano de 2026",
    kicker: "Cambio de pregunta",
    title: "Del ritmo al trazado acústico",
    lead: "Después de construir una máquina que organiza eventos, la investigación cambia de escala: ¿puede un sonido emerger de caminos, como una imagen emerge de rayos?",
    body: [
      "La referencia a los primeros libros de ray tracing no es nostalgia ornamental. Recupera una manera de pensar computación gráfica donde una escena, sus materiales y la propagación de energía producen el píxel final. RayDrone traslada esa estructura conceptual al buffer de audio.",
      "En lugar de escribir una forma de onda terminada, el motor lanza recorridos sobre material sonoro capturado. Cada trayectoria acumula, dispersa y converge. El drone aparece como resultado estadístico de muchos caminos, no como reproducción de un único oscilador. Material, carácter, movimiento y espacio se convierten en controles perceptivos de ese campo.",
      "La primera encarnación vive en Rust y WebAssembly. Ejecutar el DSP localmente con AudioWorklet permite separar la investigación del hardware, medir el algoritmo y compartir un experimento reproducible. RayDrone se define así como núcleo, implementación y paper; ya no como una caja concreta.",
    ],
    images: [
      { src: "/gallery/IMG_7550.webp", alt: "Libro clásico Ray Tracing Creations que inspira la investigación de RayDrone" },
      { src: "/imgRaydrone/raydrone-wasm.webp", alt: "RayDrone ejecutándose en Rust y WebAssembly dentro del navegador" },
    ],
    note: "El algoritmo debe poder existir sin la máquina. Esa independencia permite estudiarlo, publicarlo y volver a encarnarlo.",
    tags: ["Rust", "WebAssembly", "AudioWorklet", "QMC"],
  },
  {
    id: "aura",
    number: "11",
    date: "Ahora",
    kicker: "El algoritmo vuelve al cuerpo",
    title: "Aura: RayDrone + P4",
    lead: "Después de separar el algoritmo del dispositivo, el siguiente paso es diseñar el instrumento que realmente necesita.",
    body: [
      "Aura toma RayDrone como motor acústico y el ESP32-P4 como centro de la experiencia física. No es un cambio de nombre para el prototipo anterior. Es una frontera de producto: RayDrone define cómo emerge el sonido; Aura define cómo se captura, se moldea y se interpreta desde una unidad autónoma.",
      "La telemetría deja claro por qué esta separación importa. CPU, memoria libre del P4, latencia con Daisy, frecuencia de paquetes y errores del bus se observan en tiempo real. Afinar un instrumento distribuido exige saber si un fallo nace en el algoritmo, en la interfaz, en la comunicación o en el camino de audio.",
      "La experiencia acumulada con RED808 permite que Aura no empiece desde cero. Hereda protocolos, disciplina de medición, diseño táctil y la idea de múltiples superficies; descarta lo que pertenecía específicamente a una caja de ritmos y concentra la interfaz alrededor del campo acústico.",
    ],
    images: [
      { src: "/gallery/IMG_8006.webp", alt: "Dashboard de telemetría con memoria P4, latencia Daisy, bus y errores" },
      { src: "/imgRaydrone/imagen_proyecto_Final_IA.webp", alt: "Concepto del instrumento hardware Aura basado en RayDrone y ESP32-P4" },
    ],
    note: "RayDrone es el comportamiento. Aura es el objeto, la superficie y la interpretación.",
    tags: ["ESP32-P4", "telemetría", "Aura", "embedded audio"],
  },
];

export default function BlogPage() {
  return (
    <article className="pt-32 pb-24 px-4 overflow-hidden">
      <BlogLocaleSync />
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 md:mb-28">
          <span data-blog-ui="eyebrow" className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[.24em] mb-5"><CalendarDays size={15} /> Cuaderno de laboratorio · 2025—2026</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 max-w-5xl"><span data-blog-ui="title1">Del cable al</span><br /><span data-blog-ui="title2" className="gradient-text-animated">campo acústico.</span></h1>
          <div className="grid md:grid-cols-[1fr_320px] gap-10 items-end">
            <p data-blog-ui="intro" className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">Un archivo de electrónica, firmware, interfaces y síntesis. Once capítulos sobre cómo una colección de pruebas terminó definiendo una familia de instrumentos.</p>
            <div className="grid grid-cols-3 gap-3 font-mono text-center"><div className="p-4 rounded-2xl border border-border/60 bg-card/30"><strong className="block text-2xl text-foreground">58</strong><span className="text-[10px] text-muted-foreground uppercase">registros</span></div><div className="p-4 rounded-2xl border border-border/60 bg-card/30"><strong className="block text-2xl text-foreground">11</strong><span className="text-[10px] text-muted-foreground uppercase">capítulos</span></div><div className="p-4 rounded-2xl border border-border/60 bg-card/30"><strong className="block text-2xl text-foreground">4</strong><span className="text-[10px] text-muted-foreground uppercase">sistemas</span></div></div>
          </div>
        </header>

        <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-12 xl:gap-20 items-start">
          <aside className="hidden lg:block sticky top-28">
            <p data-blog-ui="index" className="text-[10px] uppercase tracking-[.24em] text-muted-foreground mb-5">Índice</p>
            <nav className="space-y-1 border-l border-border/60">
              {chapters.map((chapter) => <a key={chapter.id} href={`#${chapter.id}`} className="group flex items-center gap-3 py-2 pl-4 -ml-px border-l border-transparent hover:border-primary text-xs text-muted-foreground hover:text-foreground transition-colors"><span className="font-mono text-primary/60">{chapter.number}</span><span>{chapter.kicker}</span></a>)}
              <a href="#celestial-field" className="group flex items-center gap-3 py-2 pl-4 -ml-px border-l border-transparent hover:border-primary text-xs text-muted-foreground hover:text-foreground"><span className="font-mono text-primary/60">12</span><span data-blog-ui="nextField">Próximo campo</span></a>
            </nav>
          </aside>

          <div className="min-w-0">
            {chapters.map((chapter, chapterIndex) => (
              <section key={chapter.id} id={chapter.id} data-blog-chapter={chapter.id} className="scroll-mt-28 mb-28 md:mb-40">
                <div className="flex items-center gap-4 mb-7"><span className="font-display text-5xl md:text-7xl font-bold text-stroke leading-none">{chapter.number}</span><div><p data-role="kicker" className="text-xs uppercase tracking-[.22em] text-primary font-semibold">{chapter.kicker}</p><p data-role="date" className="font-mono text-xs text-muted-foreground mt-1">{chapter.date}</p></div></div>
                <h2 data-role="title" className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-7 max-w-4xl">{chapter.title}</h2>
                <p data-role="lead" className="text-xl md:text-2xl leading-relaxed text-foreground/85 max-w-4xl mb-10">{chapter.lead}</p>

                <div className={`grid gap-4 mb-10 ${chapterIndex % 3 === 1 ? "md:grid-cols-[1.35fr_.65fr]" : chapterIndex % 3 === 2 ? "md:grid-cols-[.72fr_1.28fr]" : "md:grid-cols-2"}`}>
                  {chapter.images.map((image, imageIndex) => <figure key={image.src} className={`relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 ${chapter.id === "raydrone" && imageIndex === 1 ? "aspect-[1.85/1] md:self-center" : imageIndex === 0 && chapterIndex % 3 === 1 ? "aspect-[4/3]" : "aspect-[3/4]"}`}><Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /><figcaption className="absolute inset-x-0 bottom-0 p-5 pt-16 bg-gradient-to-t from-black/85 to-transparent text-xs text-white/80">{image.alt}</figcaption></figure>)}
                </div>

                <div className="grid md:grid-cols-[minmax(0,1fr)_260px] gap-8 md:gap-12">
                  <div data-role="body" className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">{chapter.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                  <aside className="md:row-span-2"><div className="p-6 rounded-2xl border border-primary/20 bg-primary/[.045]"><p data-blog-ui="labNote" className="text-[10px] uppercase tracking-[.22em] text-primary font-semibold mb-3">Nota de laboratorio</p><p data-role="note" className="text-sm leading-relaxed text-foreground/80">{chapter.note}</p></div><div className="flex flex-wrap gap-2 mt-4">{chapter.tags.map((tag) => <span key={tag} className="px-2.5 py-1 rounded-full border border-border/60 text-[10px] font-mono text-muted-foreground">{tag}</span>)}</div></aside>
                </div>
              </section>
            ))}

            <section id="celestial-field" className="scroll-mt-28 relative p-8 md:p-14 lg:p-16 rounded-[2rem] border border-primary/20 bg-card/40 overflow-hidden">
              <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative"><div className="flex gap-3 mb-7 text-primary"><CircuitBoard /><Cpu /><Radio /><Waves /></div><p data-blog-ui="coming" className="text-xs uppercase tracking-[.22em] text-primary font-semibold mb-4">12 · Próximamente</p><h2 className="font-display text-4xl md:text-6xl font-bold mb-7">Celestial Field</h2><p data-blog-ui="celestialLead" className="text-xl md:text-2xl leading-relaxed max-w-3xl mb-8">La siguiente investigación no es una versión de Aura. Es un instrumento FPGA independiente basado en un banco masivo de resonadores y parciales.</p><div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed mb-10"><p data-blog-ui="celestialBody1">La FPGA cambia la relación con el paralelismo. En lugar de repartir voces en el tiempo sobre un único procesador, permite imaginar muchos resonadores evolucionando simultáneamente como estructura física digital.</p><p data-blog-ui="celestialBody2">Celestial Field recogerá una lección de todo el recorrido: separar con claridad algoritmo, arquitectura e interfaz. El objetivo no es aumentar el número de parámetros, sino hacer audible un campo armónico que no sería práctico con la misma aproximación secuencial.</p></div><Link href="/galeria" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"><span data-blog-ui="galleryCta">Explorar los 58 registros</span> <ArrowRight size={17} /></Link></div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
