import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Github } from "lucide-react";
import { RayDroneDemoLink } from "@/components/raydrone-demo-link";

export const metadata: Metadata = {
  title: "RayDrone | Rust, WebAssembly y síntesis acústica | Cesco.dev",
  description: "RayDrone es un algoritmo de síntesis acústica por trazado de rayos escrito en Rust y ejecutado localmente en WebAssembly mediante AudioWorklet.",
  alternates: { canonical: "https://cesco.dev/proyectos/raydrone" },
  openGraph: {
    title: "RayDrone | Acoustic Ray Instrument",
    description: "Algoritmo, implementación Rust/WASM y paper técnico sobre síntesis acústica por trazado de rayos.",
    url: "https://cesco.dev/proyectos/raydrone",
    images: [{ url: "/imgRaydrone/raydrone-wasm.webp", width: 1702, height: 920, alt: "RayDrone ejecutándose localmente en WebAssembly" }],
  },
};

const stack = ["Rust", "WebAssembly", "AudioWorklet", "DSP en tiempo real", "QMC Engine", "Web Audio API"];

export default function RayDronePage() {
  return (
    <article className="py-24 lg:py-32 px-4 pt-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"><ArrowRight size={14} className="rotate-180" /> Volver al portfolio</Link>
        <header className="mb-12">
          <span className="inline-flex px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-6">Rust · WebAssembly · Audio DSP</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 gradient-text-animated">RayDrone</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">El <strong className="text-foreground">algoritmo base</strong>: una investigación de síntesis acústica que traslada la lógica del ray tracing al dominio del audio. Está escrito en Rust, compilado a WebAssembly y funciona en el navegador, enteramente en local, mediante AudioWorklet.</p>
        </header>
        <figure className="mb-20">
          <div className="relative aspect-[1.85/1] rounded-3xl overflow-hidden border border-border/50 elevation-3 bg-black"><Image src="/imgRaydrone/raydrone-wasm.webp" alt="Interfaz del experimento RayDrone WASM con campo de rayos, osciloscopio y controles de material" fill priority className="object-contain" sizes="(max-width: 1024px) 100vw, 1024px" /></div>
          <figcaption className="mt-4 text-sm text-muted-foreground text-center">Implementación Rust + WebAssembly: DSP en vivo, local y sin servidor.</figcaption>
        </figure>
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3"><span className="w-8 h-px bg-primary" />El drone emerge de la convergencia</h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>En gráficos, un píxel emerge de la suma de caminos de luz. RayDrone aplica esa intuición al buffer: cada rayo recorre el material sonoro, acumula energía y converge con el resto para formar una textura continua.</p>
            <p>La interfaz expone materiales, carácter, movimiento y espacio como propiedades perceptivas. Debajo, el motor QMC mantiene la exploración determinista y el DSP se ejecuta fuera del hilo visual para conservar la respuesta en tiempo real.</p>
          </div>
        </section>
        <section className="mb-20 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl border border-border/50 bg-card/30"><BookOpen className="text-primary mb-5" size={24} /><h2 className="font-display text-2xl font-bold mb-3">Paper técnico</h2><p className="text-muted-foreground leading-relaxed">La formulación del algoritmo, sus decisiones de diseño y los resultados perceptivos se documentan como parte inseparable del proyecto. Publicación en preparación.</p></div>
          <div className="p-8 rounded-2xl border border-border/50 bg-card/30"><ArrowUpRight className="text-primary mb-5" size={24} /><h2 className="font-display text-2xl font-bold mb-3">Del algoritmo al instrumento</h2><p className="text-muted-foreground leading-relaxed">RayDrone es el núcleo compartido. Aura lo materializa en hardware ESP32-P4; Celestial Field abre una línea independiente sobre FPGA.</p></div>
        </section>
        <div className="flex flex-wrap gap-2 mb-12 p-4 rounded-xl border border-border/50 bg-card/30">{stack.map((tech) => <span key={tech} className="px-3 py-1.5 rounded-lg border border-border/60 bg-background/50 text-xs text-foreground">{tech}</span>)}</div>
        <div className="flex flex-col sm:flex-row gap-4">
          <RayDroneDemoLink />
          <a href="https://github.com/cescofors75/RayDrone" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-card/50 rounded-full font-semibold hover:bg-card transition-colors"><Github size={18} /> Ver código en GitHub <ArrowUpRight size={16} /></a>
          <Link href="/proyectos/aura" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-card/50 rounded-full font-semibold hover:bg-card transition-colors">Conocer Aura <ArrowRight size={16} /></Link>
        </div>
      </div>
    </article>
  );
}
