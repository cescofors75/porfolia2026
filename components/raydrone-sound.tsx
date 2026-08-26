'use client';

import { useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const labels = {
  es: { play: "Escuchar RayDrone", pause: "Pausar RayDrone" }, ca: { play: "Escoltar RayDrone", pause: "Pausar RayDrone" },
  en: { play: "Listen to RayDrone", pause: "Pause RayDrone" }, de: { play: "RayDrone anhören", pause: "RayDrone pausieren" },
  fr: { play: "Écouter RayDrone", pause: "Mettre RayDrone en pause" },
} as const;

export function RayDroneSound() {
  const { language } = useLanguage();
  const media = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = async () => {
    if (!media.current) return;
    if (media.current.paused) { try { await media.current.play(); setPlaying(true); } catch { setPlaying(false); } }
    else { media.current.pause(); setPlaying(false); }
  };
  return <div className="fixed bottom-5 left-5 z-50">
    <video ref={media} className="hidden" loop playsInline preload="metadata" onEnded={() => setPlaying(false)}><source src="/daisy/IMG_7878%20(1).mov" type="video/quicktime" /></video>
    <button onClick={toggle} className="group inline-flex items-center gap-3 rounded-full border border-primary/30 bg-background/85 px-3 py-3 sm:pr-5 text-sm font-semibold shadow-2xl backdrop-blur-xl hover:border-primary/60 transition-colors" aria-label={playing ? labels[language].pause : labels[language].play}>
      <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">{playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}</span>
      <span className="hidden sm:flex items-center gap-2"><Volume2 size={15} className={playing ? "text-primary" : "text-muted-foreground"} />{playing ? labels[language].pause : labels[language].play}</span>
    </button>
  </div>;
}
