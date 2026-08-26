'use client';

import { useRef, useState } from "react";
import { Pause, Play, SkipForward, Volume2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const labels = {
  es: { play: "Reproducir música", pause: "Pausar música", next: "Cambiar de tema", now: "Sonando ahora" }, ca: { play: "Reproduir música", pause: "Pausar música", next: "Canviar de tema", now: "Sonant ara" },
  en: { play: "Play music", pause: "Pause music", next: "Next track", now: "Now playing" }, de: { play: "Musik abspielen", pause: "Musik pausieren", next: "Nächster Titel", now: "Läuft gerade" },
  fr: { play: "Lire la musique", pause: "Mettre en pause", next: "Titre suivant", now: "En cours" },
} as const;

const tracks = [
  { title: "RayDrone · Live texture", src: "/music/music.MP4" },
  { title: "NewsChyper · Santa Cristina", src: "/music/2407_2026NewsChyper%20SantaCristina.mp3.mpeg" },
  { title: "NewsChyper · Día de odio", src: "/music/28072026newsChyperOdio.mp3.mpeg" },
  { title: "NewsChyper · 08.07.2026", src: "/music/NEWS08072026.mp3.mpeg" },
] as const;

export function RayDroneSound() {
  const { language } = useLanguage();
  const media = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);
  const toggle = async () => {
    if (!media.current) return;
    if (media.current.paused) { try { await media.current.play(); setPlaying(true); } catch { setPlaying(false); } }
    else { media.current.pause(); setPlaying(false); }
  };
  const nextTrack = async (keepPlaying = playing) => {
    if (!media.current) return;
    const next = (track + 1) % tracks.length;
    setTrack(next);
    media.current.src = tracks[next].src;
    media.current.load();
    if (keepPlaying) { try { await media.current.play(); setPlaying(true); } catch { setPlaying(false); } }
  };
  return <div className="fixed bottom-5 right-40 z-50">
    <audio ref={media} className="hidden" src={tracks[track].src} preload="none" onEnded={() => void nextTrack(true)} />
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/85 p-2 pr-2.5 text-sm shadow-2xl backdrop-blur-xl">
      <button onClick={toggle} className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform" aria-label={playing ? labels[language].pause : labels[language].play}>{playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}</button>
      <div className="hidden sm:block min-w-0 w-48 px-1"><span className="flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-muted-foreground"><Volume2 size={12} className={playing ? "text-primary" : ""} />{labels[language].now}</span><span className="block truncate font-medium text-xs mt-0.5">{tracks[track].title}</span></div>
      <button onClick={() => void nextTrack()} className="grid size-9 place-items-center rounded-full border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors" aria-label={labels[language].next} title={labels[language].next}><SkipForward size={16} /></button>
    </div>
  </div>;
}
