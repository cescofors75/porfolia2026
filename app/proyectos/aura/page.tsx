import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Aura | Instrumento hardware ESP32-P4 con RayDrone | Cesco.dev",
  description: "Aura es el instrumento hardware ESP32-P4 que lleva el algoritmo RayDrone a una unidad autónoma, táctil y orientada a la interpretación.",
  alternates: { canonical: "https://cesco.dev/proyectos/aura" },
};

export default function AuraPage() {
  return (
    <article className="py-24 lg:py-32 px-4 pt-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"><ArrowRight size={14} className="rotate-180" /> Volver al portfolio</Link>
        <header className="mb-12">
          <span className="inline-flex px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-6">ESP32-P4 · Embedded Audio · Hardware</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 gradient-text-animated">Aura</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">Aura es el <strong className="text-foreground">instrumento hardware</strong>: RayDrone + ESP32-P4 en una unidad autónoma con interfaz táctil, controles inmediatos y audio en tiempo real.</p>
        </header>
        <div className="grid md:grid-cols-5 gap-8 items-center mb-20">
          <figure className="md:col-span-3"><div className="relative aspect-[4/5] max-h-[680px] rounded-3xl overflow-hidden border border-border/50 elevation-3"><Image src="/imgRaydrone/imagen_proyecto_Final_IA.webp" alt="Concepto de Aura, instrumento hardware con pantalla táctil basado en ESP32-P4 y RayDrone" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" /></div></figure>
          <div className="md:col-span-2 text-muted-foreground leading-relaxed"><Cpu className="text-primary mb-5" size={28} /><h2 className="font-display text-2xl font-bold text-foreground mb-4">Una encarnación física</h2><p className="mb-4">La separación es deliberada: RayDrone define el comportamiento acústico; Aura define la experiencia instrumental, la interfaz y su ejecución sobre P4.</p><p>Capturar, modelar el campo y tocar el resultado sucede en una sola superficie, sin depender de un ordenador durante la interpretación.</p></div>
        </div>
        <section className="mb-16 p-8 md:p-10 rounded-3xl border border-border/50 bg-card/30"><h2 className="font-display text-2xl md:text-3xl font-bold mb-5">Arquitectura</h2><p className="text-muted-foreground leading-relaxed max-w-3xl">ESP32-P4 aloja la interfaz y la lógica del instrumento alrededor del motor RayDrone. La arquitectura conserva una frontera clara entre algoritmo y producto para que la investigación pueda evolucionar sin quedar atada a una única forma física.</p></section>
        <div className="flex flex-col sm:flex-row gap-4"><Link href="/proyectos/raydrone" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">Explorar RayDrone <ArrowUpRight size={16} /></Link><a href="https://github.com/cescofors75/RayDrone" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-card/50 rounded-full font-semibold hover:bg-card transition-colors"><Github size={18} /> GitHub</a></div>
      </div>
    </article>
  );
}
