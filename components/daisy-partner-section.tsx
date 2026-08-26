'use client';

import Image from "next/image";
import { ArrowUpRight, Cable, Cpu, Waves } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const copy = {
  es: { eyebrow: "Partner tecnológico", title: "Daisy.audio en el camino de la señal", body: "Daisy aporta una plataforma especializada para DSP musical en tiempo real. Daisy Seed y Daisy Pod forman parte del laboratorio físico donde RED808, RayDrone y Aura pasan del algoritmo al instrumento.", crew: "Electro-Crew · ordenadores que aprenden a cantar", identity: "No soy DJ. No soy productor. No soy músico. Solo developer / engineer… y enseño a los ordenadores a cantar.", link: "Conocer Daisy" },
  ca: { eyebrow: "Partner tecnològic", title: "Daisy.audio en el camí del senyal", body: "Daisy aporta una plataforma especialitzada per a DSP musical en temps real. Daisy Seed i Daisy Pod formen part del laboratori físic on RED808, RayDrone i Aura passen de l'algoritme a l'instrument.", crew: "Electro-Crew · ordinadors que aprenen a cantar", identity: "No soc DJ. No soc productor. No soc músic. Només developer / engineer… i ensenyo els ordinadors a cantar.", link: "Conèixer Daisy" },
  en: { eyebrow: "Technology partner", title: "Daisy.audio in the signal path", body: "Daisy provides a platform built for real-time musical DSP. Daisy Seed and Daisy Pod belong to the physical lab where RED808, RayDrone and Aura move from algorithm to instrument.", crew: "Electro-Crew · computers learning to sing", identity: "Not a DJ. Not a producer. Not a musician. Just a dev / engineer… teaching computers how to sing.", link: "Discover Daisy" },
  de: { eyebrow: "Technologiepartner", title: "Daisy.audio im Signalweg", body: "Daisy bietet eine spezialisierte Plattform für musikalisches Echtzeit-DSP. Daisy Seed und Daisy Pod gehören zum Labor, in dem RED808, RayDrone und Aura vom Algorithmus zum Instrument werden.", crew: "Electro-Crew · Computer lernen singen", identity: "Kein DJ. Kein Produzent. Kein Musiker. Nur Dev / Engineer… der Computern das Singen beibringt.", link: "Daisy entdecken" },
  fr: { eyebrow: "Partenaire technologique", title: "Daisy.audio dans le chemin du signal", body: "Daisy fournit une plateforme dédiée au DSP musical en temps réel. Daisy Seed et Daisy Pod font partie du laboratoire où RED808, RayDrone et Aura passent de l'algorithme à l'instrument.", crew: "Electro-Crew · des ordinateurs qui apprennent à chanter", identity: "Ni DJ. Ni producteur. Ni musicien. Juste dev / engineer… j'apprends aux ordinateurs à chanter.", link: "Découvrir Daisy" },
} as const;

export function DaisyPartnerSection() {
  const { language } = useLanguage();
  const t = copy[language];
  return <section className="py-24 px-4 overflow-hidden"><div className="max-w-7xl mx-auto rounded-[2rem] border border-border/50 bg-card/30 p-6 md:p-10 lg:p-14">
    <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-16 items-center">
      <div><a href="https://daisy.audio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 mb-7 group" aria-label="Daisy.audio"><img src="https://daisy.audio/cdn/shop/files/new_daisy_3c312508-8723-41aa-8245-bb451e82feca.svg?crop=center&height=160&v=1759329338&width=160" alt="Daisy.audio" width="72" height="72" className="size-[72px] rounded-full transition-transform duration-500 group-hover:rotate-12" /><span className="font-display text-2xl font-bold">Daisy.audio</span></a><div className="flex gap-3 text-primary mb-6"><Cpu /><Waves /><Cable /></div><p className="text-xs font-semibold uppercase tracking-[.22em] text-primary mb-4">{t.eyebrow}</p><h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.title}</h2><p className="text-muted-foreground leading-relaxed mb-7">{t.body}</p><a href="https://daisy.audio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary">{t.link}<ArrowUpRight size={16} /></a></div>
      <figure><div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 bg-black"><Image src="/daisy/daisyRopa.jpeg" alt={t.crew} fill className="object-cover transition-transform duration-700 hover:scale-[1.03]" style={{ objectPosition: "50% 78%" }} sizes="(max-width: 1024px) 100vw, 48vw" /><div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent" /><span className="absolute left-5 bottom-5 font-mono text-sm text-white tracking-wider">{t.crew}</span></div></figure>
    </div>
    <div className="mt-10 overflow-hidden rounded-2xl border border-primary/25 bg-primary/[.06] py-5">
      <div className="flex min-w-max animate-marquee-fast items-center gap-7 px-7 font-display text-xl md:text-2xl font-bold uppercase tracking-tight">
        {["ELECTRO-CREW", "✦", "I TEACH COMPUTERS HOW TO SING", "✦", "NOT A DJ", "NOT A PRODUCER", "NOT A MUSICIAN", "DEV / ENGINEER", "✦", "ELECTRO-CREW", "✦", "I TEACH COMPUTERS HOW TO SING"].map((item, index) => <span key={`${item}-${index}`} className={item === "✦" ? "text-primary" : "whitespace-nowrap"}>{item}</span>)}
      </div>
    </div>
    <p className="mt-6 text-center font-mono text-sm text-muted-foreground">{t.identity}</p>
  </div></section>;
}
