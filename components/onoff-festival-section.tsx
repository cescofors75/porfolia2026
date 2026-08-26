'use client';

import Image from "next/image";
import { ArrowUpRight, CalendarDays, MapPin, Mic2, Radio, Waves } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const copy = {
  es: {
    eyebrow: "Demo presencial · ON·OFF Showcase 2026",
    title: "Del laboratorio al escenario de Sa Caleta",
    lead: "Presentamos en directo nuestra evolución de la síntesis analógica a la digital y conversamos con FITEL Televisió sobre el proceso, los instrumentos y la tecnología que hay detrás del sonido.",
    body: "La tercera edición del ON·OFF convirtió Sa Caleta, en Lloret de Mar, en un espacio de música electrónica y cultura abierta. El 1 de agosto reunió 16 horas de programación, tres escenarios, market, gastro-bar, zona kids, showcases y entrevistas: un contexto perfecto para sacar el prototipo del estudio, hacerlo sonar ante el público y explicar cómo se construye.",
    date: "1 de agosto de 2026", place: "Sa Caleta · Lloret de Mar", interview: "Ver la entrevista completa", festival: "Visitar ON·OFF Festival", video: "Entrevista ON·OFF Showcase: evolución synth de lo analógico a lo digital",
  },
  ca: {
    eyebrow: "Demo presencial · ON·OFF Showcase 2026",
    title: "Del laboratori a l'escenari de Sa Caleta",
    lead: "Vam presentar en directe la nostra evolució de la síntesi analògica a la digital i vam conversar amb FITEL Televisió sobre el procés, els instruments i la tecnologia que hi ha darrere del so.",
    body: "La tercera edició de l'ON·OFF va convertir Sa Caleta, a Lloret de Mar, en un espai de música electrònica i cultura oberta. L'1 d'agost va reunir 16 hores de programació, tres escenaris, market, gastro-bar, zona kids, showcases i entrevistes: el context perfecte per treure el prototip de l'estudi, fer-lo sonar davant del públic i explicar com es construeix.",
    date: "1 d'agost de 2026", place: "Sa Caleta · Lloret de Mar", interview: "Veure l'entrevista completa", festival: "Visitar ON·OFF Festival", video: "Entrevista ON·OFF Showcase: evolució synth de l'analògic a digital",
  },
  en: {
    eyebrow: "Live demo · ON·OFF Showcase 2026",
    title: "From the lab to the stage at Sa Caleta",
    lead: "We presented our journey from analog to digital synthesis live and spoke with FITEL Televisió about the process, the instruments and the technology behind the sound.",
    body: "The third ON·OFF edition turned Sa Caleta in Lloret de Mar into a space for electronic music and open culture. On August 1, it brought together 16 hours of programming, three stages, a market, gastro-bar, kids area, showcases and interviews: the ideal setting to take a prototype out of the studio, play it for an audience and explain how it is built.",
    date: "August 1, 2026", place: "Sa Caleta · Lloret de Mar", interview: "Watch the full interview", festival: "Visit ON·OFF Festival", video: "ON·OFF Showcase interview: the evolution from analog to digital synths",
  },
  de: {
    eyebrow: "Live-Demo · ON·OFF Showcase 2026",
    title: "Vom Labor auf die Bühne von Sa Caleta",
    lead: "Wir präsentierten live unseren Weg von analoger zu digitaler Synthese und sprachen mit FITEL Televisió über Prozess, Instrumente und die Technologie hinter dem Klang.",
    body: "Die dritte Ausgabe von ON·OFF verwandelte Sa Caleta in Lloret de Mar in einen Ort für elektronische Musik und offene Kultur. Am 1. August verbanden 16 Stunden Programm drei Bühnen, Markt, Gastro-Bar, Kids-Bereich, Showcases und Interviews – der ideale Rahmen, um den Prototyp aus dem Studio zu holen, vor Publikum zu spielen und seine Entstehung zu erklären.",
    date: "1. August 2026", place: "Sa Caleta · Lloret de Mar", interview: "Ganzes Interview ansehen", festival: "ON·OFF Festival besuchen", video: "ON·OFF Showcase Interview: Synth-Evolution von analog zu digital",
  },
  fr: {
    eyebrow: "Démo en public · ON·OFF Showcase 2026",
    title: "Du laboratoire à la scène de Sa Caleta",
    lead: "Nous avons présenté en direct notre évolution de la synthèse analogique vers le numérique et échangé avec FITEL Televisió sur le processus, les instruments et la technologie derrière le son.",
    body: "La troisième édition d'ON·OFF a transformé Sa Caleta, à Lloret de Mar, en un espace de musique électronique et de culture ouverte. Le 1er août, elle a réuni 16 heures de programmation, trois scènes, market, gastro-bar, espace kids, showcases et interviews : le cadre idéal pour sortir le prototype du studio, le jouer devant le public et expliquer sa construction.",
    date: "1er août 2026", place: "Sa Caleta · Lloret de Mar", interview: "Voir l'interview complète", festival: "Visiter ON·OFF Festival", video: "Interview ON·OFF Showcase : évolution des synthés analogiques au numérique",
  },
} as const;

export function OnOffFestivalSection() {
  const { language } = useLanguage();
  const t = copy[language];
  return <section className="py-24 px-4 overflow-hidden"><div className="max-w-7xl mx-auto">
    <div className="rounded-[2rem] border border-pink-400/25 bg-[linear-gradient(135deg,rgba(244,114,182,.08),transparent_50%)] overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="p-7 md:p-12 lg:p-14 flex flex-col justify-center">
          <a href="https://onoffmusicfestival.com/" target="_blank" rel="noopener noreferrer" className="relative block w-64 max-w-[80%] aspect-[1.46/1] mb-8 transition-transform duration-500 hover:scale-[1.03]"><Image src="/onoff-festival-logo.png" alt="ON·OFF Music Festival" fill className="object-contain" sizes="256px" /></a>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-pink-400 mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{t.title}</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-5">{t.lead}</p>
          <p className="text-muted-foreground leading-relaxed mb-8">{t.body}</p>
          <div className="flex flex-wrap gap-3 mb-8 text-sm"><span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-2"><CalendarDays size={15} className="text-pink-400" />{t.date}</span><span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-2"><MapPin size={15} className="text-pink-400" />{t.place}</span></div>
          <div className="flex flex-col sm:flex-row gap-3"><a href="https://www.youtube.com/watch?v=Et51ZgcMuR8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-400 px-6 py-3.5 font-semibold text-black hover:bg-pink-300 transition-colors"><Mic2 size={17} />{t.interview}<ArrowUpRight size={15} /></a><a href="https://onoffmusicfestival.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3.5 font-semibold hover:bg-card transition-colors">{t.festival}<ArrowUpRight size={15} /></a></div>
        </div>
        <div className="relative self-center m-4 lg:ml-0 lg:mr-8 rounded-2xl overflow-hidden border border-pink-400/20 bg-black shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          <iframe className="block w-full aspect-video" src="https://www.youtube-nocookie.com/embed/Et51ZgcMuR8?rel=0&modestbranding=1" title={t.video} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          <div className="pointer-events-none absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-xs text-white backdrop-blur"><Radio size={13} /><Waves size={13} /> FITEL TELEVISIÓ</div>
        </div>
      </div>
    </div>
  </div></section>;
}
