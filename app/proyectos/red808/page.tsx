import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "RED808 | Caja de ritmos IoT open source | Cesco.dev",
  description:
    "RED808: caja de ritmos IoT open source distribuida en tres placas — ESP32-S3 como secuenciador maestro, ESP32-P4 con interfaz LVGL y Daisy Seed (STM32H750) para el DSP de audio — con app web móvil para tocar desde el navegador.",
  alternates: {
    canonical: "https://cesco.dev/proyectos/red808",
  },
  openGraph: {
    title: "RED808 | Caja de ritmos IoT open source",
    description:
      "Secuenciador por pasos, 16 pads, mixer de 16 canales y app web móvil vía WiFi. Firmware ESP32-S3 + ESP32-P4 + Daisy Seed.",
    url: "https://cesco.dev/proyectos/red808",
    images: [
      {
        url: "/imgRed808/IMG_7425.webp",
        width: 4032,
        height: 3024,
        alt: "RED808: unidad con mixer de 16 canales, piano y app web móvil",
      },
    ],
  },
};

const stack = [
  "ESP32-S3 (maestro)",
  "ESP32-P4 (UI LVGL)",
  "Daisy Seed (STM32H750)",
  "C++",
  "LVGL",
  "WebSockets",
  "App web móvil",
  "Open Source",
];

export default function Red808Page() {
  return (
    <article className="py-24 lg:py-32 px-4 pt-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowRight size={14} className="rotate-180" />
          Volver al portfolio
        </Link>

        {/* Header */}
        <header className="mb-12">
          <span className="inline-flex px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
            IoT · Audio DSP · Open Source
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 gradient-text-animated">
            RED808
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Una caja de ritmos IoT construida como un sistema distribuido de{" "}
            <strong className="text-foreground">tres placas</strong>: un ESP32-S3
            actúa como secuenciador maestro, un ESP32-P4 sirve la interfaz táctil
            LVGL y un <strong className="text-foreground">Daisy Seed (STM32H750)</strong>{" "}
            se dedica por completo al DSP de audio en tiempo real. Y además se
            puede tocar desde el móvil, sin instalar nada.
          </p>
        </header>

        {/* Hero */}
        <figure className="mb-20">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/50 elevation-3">
            <Image
              src="/imgRed808/IMG_7425.webp"
              alt="RED808 en funcionamiento: mixer de 16 canales, piano en pantalla y app web móvil con live pads"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          <figcaption className="mt-4 text-sm text-muted-foreground text-center">
            La unidad en acción: mixer de 16 canales y piano en la pantalla, con
            la app web móvil controlando live pads en paralelo.
          </figcaption>
        </figure>

        {/* Concepto */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Arquitectura maestro-esclavo
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>
              Un instrumento con DSP de audio profesional y una interfaz táctil
              fluida no cabe en un solo microcontrolador. RED808 reparte el
              trabajo: el <strong className="text-foreground">ESP32-S3</strong> es
              el cerebro del secuenciador por pasos, patrones y sincronización;
              el <strong className="text-foreground">ESP32-P4</strong> renderiza
              la UI LVGL como esclavo remoto; y el{" "}
              <strong className="text-foreground">Daisy Seed</strong> solo genera
              audio — síntesis y samples — con latencia mínima.
            </p>
            <p>
              Las tres placas se comunican por un bus interno con paquetes
              verificados, y el conjunto se controla también desde una app web
              (StemsGroove) para gestionar los stems de cada patrón. Todo el
              firmware es <strong className="text-foreground">open source</strong>{" "}
              y está publicado en GitHub.
            </p>
          </div>
        </section>

        {/* UI Screens */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            La interfaz LVGL
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <figure>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 elevation-2">
                <Image
                  src="/imgRed808/IMG_7893.webp"
                  alt="RED808: grid de 16 pads con instrumentos 808, 909, 505 y samples"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                16 pads con motores 808, 909, 505 y samples: volumen maestro,
                BPM, patrones, FX, mixer y piano.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 elevation-2">
                <Image
                  src="/imgRed808/IMG_7892.webp"
                  alt="RED808: secuenciador por pasos de 16 pasos con un patrón techno"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Secuenciador por pasos: 16 instrumentos × 16 pasos, con fills,
                variaciones y builds/drops.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 elevation-2">
                <Image
                  src="/imgRed808/IMG_7894.webp"
                  alt="RED808: mixer de 16 canales con faders y control de BPM"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Mixer de 16 canales con faders individuales, mute por canal,
                master y BPM.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* App web móvil */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Escanea, conecta y toca
          </h2>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <figure className="md:col-span-2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 elevation-2">
                <Image
                  src="/imgRed808/IMG_7889.webp"
                  alt="RED808: pantalla de conexión con código QR para conectar el móvil por WiFi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                La unidad crea su propia red WiFi y muestra un QR para conectar.
              </figcaption>
            </figure>
            <div className="md:col-span-3 text-muted-foreground leading-relaxed">
              <p className="mb-4">
                RED808 levanta un punto de acceso WiFi propio: escaneas el QR de
                la pantalla, te conectas a la red{" "}
                <strong className="text-foreground">RED808</strong> y el navegador
                se abre directamente en la app — sin instalar nada, sin
                configuración.
              </p>
              <p>
                La app web móvil ofrece los live pads con los mismos instrumentos
                (808, 909, 505, samples), control de FX y sintetizador por pad,
                cuadrícula ajustable y selector de idioma. Es la forma más rápida
                de tocar en directo: la pantalla de la unidad para secuenciar, el
                móvil para interpretar.
              </p>
            </div>
          </div>
          <figure className="mt-8 max-w-sm mx-auto">
            <div className="relative aspect-[9/19] max-h-[560px] rounded-2xl overflow-hidden border border-border/50 elevation-2">
              <Image
                src="/imgRed808/IMG_7891.webp"
                alt="App web móvil de RED808: live pads 808, 909, 505 con FX y sintetizador, en catalán"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 384px"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground text-center">
              La app móvil servida desde el propio ESP32: pads, FX, synth por
              canal e idioma seleccionable.
            </figcaption>
          </figure>
        </section>

        {/* Hardware */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            El banco de trabajo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <figure>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 elevation-2">
                <Image
                  src="/imgRed808/home.webp"
                  alt="RED808 DIY Power Lab: ESP32-S3 y Daisy Seed sobre breadboard en caja boutique"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                «Compact. Powerful. Boutique.» — el núcleo: ESP32-S3 + Daisy Seed
                sobre el DIY Power Lab.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 elevation-2">
                <Image
                  src="/imgRed808/IMG_7920.webp"
                  alt="RED808: placa Daisy Pod, pantalla con pads y encoders con anillos LED"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Daisy Pod, la pantalla con los pads y la hilera de encoders con
                anillos LED para los parámetros de síntesis.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Pull quote */}
        <section className="mb-20">
          <div className="relative p-8 md:p-12 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={72} className="text-primary" />
            </div>
            <p className="text-xl md:text-2xl font-display font-medium leading-relaxed mb-6 max-w-3xl relative">
              «La demo de RED808 me encantó: la idea, el sonido y las
              capacidades. Una caja de ritmos IoT con un potencial enorme.»
            </p>
            <p className="text-sm text-muted-foreground relative">
              <span className="text-foreground font-semibold">Francesc Ferrer</span>
              {" · "}Co-fundador del ON/OFF Festival, Lloret de Mar
            </p>
          </div>
        </section>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-12 p-4 rounded-xl border border-border/50 bg-card/30">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg border border-border/60 bg-background/50 text-xs text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/cescofors75/RedMaster-ESP32S3"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 elevation-2 hover:elevation-3"
          >
            <Github size={18} />
            Ver firmware en GitHub
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <Link
            href="/#portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-card/50 text-foreground rounded-full font-semibold hover:bg-card hover:border-primary/30 transition-all duration-300"
          >
            Ver más proyectos
          </Link>
        </div>
      </div>
    </article>
  );
}
