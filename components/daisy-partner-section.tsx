'use client';

import Image from "next/image";
import { ArrowUpRight, Cable, Cpu, Waves } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const copy = {
  es: { eyebrow: "Partner tecnológico", title: "Daisy.audio en el camino de la señal", body: "Daisy aporta una plataforma especializada para DSP musical en tiempo real. Daisy Seed, Daisy Pod, conexiones y material de Electrosmith forman parte del laboratorio físico donde RED808, RayDrone y Aura pasan del algoritmo al instrumento.", pod: "Daisy Pod, Seed y cableado para prototipado de audio", crew: "Material Electrosmith · herramientas que también construyen comunidad", link: "Conocer Daisy" },
  ca: { eyebrow: "Partner tecnològic", title: "Daisy.audio en el camí del senyal", body: "Daisy aporta una plataforma especialitzada per a DSP musical en temps real. Daisy Seed, Daisy Pod, connexions i material d'Electrosmith formen part del laboratori físic on RED808, RayDrone i Aura passen de l'algoritme a l'instrument.", pod: "Daisy Pod, Seed i cablejat per prototipar àudio", crew: "Material Electrosmith · eines que també construeixen comunitat", link: "Conèixer Daisy" },
  en: { eyebrow: "Technology partner", title: "Daisy.audio in the signal path", body: "Daisy provides a platform built for real-time musical DSP. Daisy Seed, Daisy Pod, connections and Electrosmith material belong to the physical lab where RED808, RayDrone and Aura move from algorithm to instrument.", pod: "Daisy Pod, Seed and cabling for audio prototyping", crew: "Electrosmith material · tools that also build community", link: "Discover Daisy" },
  de: { eyebrow: "Technologiepartner", title: "Daisy.audio im Signalweg", body: "Daisy bietet eine spezialisierte Plattform für musikalisches Echtzeit-DSP. Daisy Seed, Daisy Pod, Verbindungen und Electrosmith-Material gehören zum Labor, in dem RED808, RayDrone und Aura vom Algorithmus zum Instrument werden.", pod: "Daisy Pod, Seed und Kabel für Audio-Prototypen", crew: "Electrosmith-Material · Werkzeuge, die Gemeinschaft schaffen", link: "Daisy entdecken" },
  fr: { eyebrow: "Partenaire technologique", title: "Daisy.audio dans le chemin du signal", body: "Daisy fournit une plateforme dédiée au DSP musical en temps réel. Daisy Seed, Daisy Pod, connexions et matériel Electrosmith font partie du laboratoire où RED808, RayDrone et Aura passent de l'algorithme à l'instrument.", pod: "Daisy Pod, Seed et câblage pour le prototypage audio", crew: "Matériel Electrosmith · des outils qui créent aussi une communauté", link: "Découvrir Daisy" },
} as const;

export function DaisyPartnerSection() {
  const { language } = useLanguage();
  const t = copy[language];
  return <section className="py-24 px-4 overflow-hidden"><div className="max-w-7xl mx-auto rounded-[2rem] border border-border/50 bg-card/30 p-6 md:p-10 lg:p-14">
    <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16 items-center">
      <div><a href="https://daisy.audio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 mb-7 group" aria-label="Daisy.audio"><img src="https://daisy.audio/cdn/shop/files/new_daisy_3c312508-8723-41aa-8245-bb451e82feca.svg?crop=center&height=160&v=1759329338&width=160" alt="Daisy.audio" width="72" height="72" className="size-[72px] rounded-full transition-transform duration-500 group-hover:rotate-12" /><span className="font-display text-2xl font-bold">Daisy.audio</span></a><div className="flex gap-3 text-primary mb-6"><Cpu /><Waves /><Cable /></div><p className="text-xs font-semibold uppercase tracking-[.22em] text-primary mb-4">{t.eyebrow}</p><h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.title}</h2><p className="text-muted-foreground leading-relaxed mb-7">{t.body}</p><a href="https://daisy.audio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary">{t.link}<ArrowUpRight size={16} /></a></div>
      <div className="grid sm:grid-cols-2 gap-4">
        <figure><div className="relative aspect-[3/4] rounded-2xl overflow-hidden"><Image src="/daisy/daisyPodParther.jpeg" alt={t.pod} fill className="object-cover" sizes="(max-width: 640px) 100vw, 30vw" /></div><figcaption className="mt-3 text-sm text-muted-foreground">{t.pod}</figcaption></figure>
        <figure className="sm:mt-10"><div className="relative aspect-[3/4] rounded-2xl overflow-hidden"><Image src="/daisy/daisyRopa.jpeg" alt={t.crew} fill className="object-cover" sizes="(max-width: 640px) 100vw, 30vw" /></div><figcaption className="mt-3 text-sm text-muted-foreground">{t.crew}</figcaption></figure>
      </div>
    </div>
  </div></section>;
}
