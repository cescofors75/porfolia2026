import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "RayDrone | Sintetizador de drones de audio en tiempo real | Cesco.dev",
  description:
    "RayDrone: metodología de render 3D de los años 90 aplicada a la síntesis de audio en 2026. Campo de granos de 32 voces sobre Daisy Seed con UI táctil en ESP32-P4. El drone no existe en el buffer: emerge de la convergencia.",
  alternates: {
    canonical: "https://cesco.dev/proyectos/raydrone",
  },
  openGraph: {
    title: "RayDrone | Sintetizador de drones de audio en tiempo real",
    description:
      "Metodología de render 3D de los 90 aplicada a la síntesis de audio: el sonido emerge de la suma de caminos sobre el buffer, como el píxel emerge de la suma de caminos de luz.",
    url: "https://cesco.dev/proyectos/raydrone",
    images: [
      {
        url: "/imgRaydrone/metafora_de_La_idea_una_camaraReflex_plato.jpeg",
        width: 1535,
        height: 1024,
        alt: "RayDrone: metáfora de la idea — render 3D aplicado a síntesis de audio",
      },
    ],
  },
};

const stack = [
  "Daisy Seed (STM32H750)",
  "ESP32-P4",
  "LVGL",
  "C++",
  "DSP en tiempo real",
  "Síntesis granular",
  "USB-C",
];

export default function RayDronePage() {
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
            Audio DSP · IoT · R+D
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 gradient-text-animated">
            RayDrone
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Un sintetizador de <em>drones</em> de audio en tiempo real construido
            sobre una idea inesperada: aplicar la metodología de{" "}
            <strong className="text-foreground">render 3D de los años 90</strong>{" "}
            al buffer de audio. El sonido no se escribe en el buffer:{" "}
            <strong className="text-foreground">
              emerge de la suma de caminos
            </strong>
            , igual que un píxel emerge de la suma de caminos de luz.
          </p>
        </header>

        {/* Hero: la metáfora */}
        <figure className="mb-20">
          <div className="relative aspect-[3/2] rounded-3xl overflow-hidden border border-border/50 elevation-3">
            <Image
              src="/imgRaydrone/metafora_de_La_idea_una_camaraReflex_plato.jpeg"
              alt="RayDrone: metáfora de la idea — un giradiscos trazando caminos de luz que convergen en una forma de onda"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          <figcaption className="mt-4 text-sm text-muted-foreground text-center">
            La metáfora fundacional: metodología de render 3D de los 90 aplicada
            a síntesis de audio en 2026.
          </figcaption>
        </figure>

        {/* Concepto */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            El drone no existe en el buffer. Emerge de la convergencia.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>
              En gráficos, el píxel emerge de la suma de caminos de luz que
              rebotan por la escena. En RayDrone, el sonido emerge de la suma de
              caminos sobre el buffer de audio: cada «rayo» recorre el material
              capturado, acumula energía y converge con el resto en el campo de
              granos.
            </p>
            <p>
              Un drone es una textura sonora continua, con cambios sutiles y
              evolución lenta, que genera una sensación de inmersión y de
              espacio. RayDrone lo sintetiza en tiempo real con hasta{" "}
              <strong className="text-foreground">32 voces de grano</strong>,
              geometría de rayos configurable y acordes seleccionables.
            </p>
          </div>
        </section>

        {/* Pantallas de la UI */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            La interfaz en la unidad
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <figure>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 elevation-2">
                <Image
                  src="/imgRaydrone/pantalla_principal.jpeg"
                  alt="Pantalla principal de RayDrone: captura, campo de granos de 32 voces, forma de onda y acorde"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Pantalla principal: captura en vivo, campo de granos de 32
                voces, forma de onda y acorde activo.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 elevation-2">
                <Image
                  src="/imgRaydrone/fx.jpeg"
                  alt="Geometría de rayos: trazado inverso, semillas, niveles, nacimientos, dispersión y deriva"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Geometría de rayos: trazado inverso, semillas, niveles,
                nacimientos por segundo, dispersión y deriva.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Diagnóstico */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Telemetría en tiempo real
          </h2>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <figure className="md:col-span-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 elevation-2">
                <Image
                  src="/imgRaydrone/dashboard_cpu_ram.jpeg"
                  alt="Dashboard de diagnóstico: CPU Daisy, RAM libre del P4, latencia, paquetes del bus y errores"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Diagnóstico en vivo: picos de CPU, RAM, latencia y bus.
              </figcaption>
            </figure>
            <div className="md:col-span-2 text-muted-foreground leading-relaxed">
              <p>
                El panel de diagnóstico monitoriza en tiempo real la CPU del
                Daisy Seed, la RAM libre del ESP32-P4, la latencia extremo a
                extremo (del orden de{" "}
                <strong className="text-foreground">21 ms</strong>), los
                paquetes del bus entre placas y los errores de datos — todo
                con histórico de picos visible para afinar el motor de síntesis
                sin adivinar qué está pasando dentro.
              </p>
            </div>
          </div>
        </section>

        {/* La unidad final */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            La unidad de investigación
          </h2>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 text-muted-foreground leading-relaxed order-2 md:order-1">
              <p className="mb-4">
                RayDrone Research Unit: una caja autónoma con el DSP de audio en
                un <strong className="text-foreground">Daisy Seed (STM32H750)</strong>,
                la interfaz táctil LVGL en un{" "}
                <strong className="text-foreground">ESP32-P4</strong> y
                comunicación por USB-C. Entrada de línea o captura en vivo,
                freeze, memorias y guardado en SD.
              </p>
              <p>
                Hecha para exploradores del sonido: se conecta, se captura
                material y el campo de granos empieza a converger.
              </p>
            </div>
            <figure className="md:col-span-3 order-1 md:order-2">
              <div className="relative aspect-[4/5] max-h-[640px] rounded-2xl overflow-hidden border border-border/50 elevation-2">
                <Image
                  src="/imgRaydrone/imagen_proyecto_Final_IA.png"
                  alt="RayDrone Research Unit: unidad hardware final con pantalla táctil y placa Daisy Seed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                La unidad final: «RayDrone Research Unit — Made for sound
                explorers — Built 2026».
              </figcaption>
            </figure>
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
            href="https://github.com/cescofors75/RayDrone"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 elevation-2 hover:elevation-3"
          >
            <Github size={18} />
            Ver código en GitHub
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
