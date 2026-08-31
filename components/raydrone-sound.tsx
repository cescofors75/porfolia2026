'use client';

import { FormEvent, useEffect, useRef, useState } from "react";
import { ListMusic, Pause, Play, Plus, SkipBack, SkipForward, Trash2, Volume2, X } from "lucide-react";
import type { Language } from "@/lib/translations";

const labels = {
  es: { play: "Reproducir", pause: "Pausar", previous: "Tema anterior", next: "Tema siguiente", now: "Sonando ahora", list: "Lista de reproducción", close: "Cerrar lista", add: "Añadir tema", artist: "Artista · Tema", directUrl: "URL directa del audio", save: "Añadir a la lista", remove: "Eliminar", invalid: "Introduce un título y una URL válida", error: "Esta URL no se puede reproducir" },
  ca: { play: "Reproduir", pause: "Pausar", previous: "Tema anterior", next: "Tema següent", now: "Sonant ara", list: "Llista de reproducció", close: "Tancar la llista", add: "Afegir tema", artist: "Artista · Tema", directUrl: "URL directa de l'àudio", save: "Afegir a la llista", remove: "Eliminar", invalid: "Introdueix un títol i una URL vàlida", error: "Aquesta URL no es pot reproduir" },
  en: { play: "Play", pause: "Pause", previous: "Previous track", next: "Next track", now: "Now playing", list: "Playlist", close: "Close playlist", add: "Add track", artist: "Artist · Track", directUrl: "Direct audio URL", save: "Add to playlist", remove: "Remove", invalid: "Enter a title and valid URL", error: "This URL cannot be played" },
  de: { play: "Abspielen", pause: "Pause", previous: "Vorheriger Titel", next: "Nächster Titel", now: "Läuft gerade", list: "Wiedergabeliste", close: "Liste schließen", add: "Titel hinzufügen", artist: "Künstler · Titel", directUrl: "Direkte Audio-URL", save: "Zur Liste hinzufügen", remove: "Entfernen", invalid: "Titel und gültige URL eingeben", error: "Diese URL kann nicht abgespielt werden" },
  fr: { play: "Lire", pause: "Pause", previous: "Titre précédent", next: "Titre suivant", now: "En cours", list: "Liste de lecture", close: "Fermer la liste", add: "Ajouter un titre", artist: "Artiste · Titre", directUrl: "URL audio directe", save: "Ajouter à la liste", remove: "Supprimer", invalid: "Saisissez un titre et une URL valide", error: "Impossible de lire cette URL" },
} as const;

type Track = { id: string; title: string; src: string; custom?: boolean };
const defaults: Track[] = [
  { id: "raydrone", title: "RayDrone · Live texture", src: "/music/raydrone.mp3" },
  { id: "santa", title: "NewsChyper · Santa Cristina", src: "/music/newschyper-santa-cristina.mp3" },
  { id: "odio", title: "NewsChyper · Día de odio", src: "/music/newschyper-dia-de-odio.mp3" },
  { id: "0807", title: "NewsChyper · 08.07.2026", src: "/music/newschyper-08-07-2026.mp3" },
  { id: "noeron-gypsy-queen", title: "Noeron · Gypsy Queen · Preview", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/41/99/57/4199577c-106f-2b65-f8e4-252b72abd5c4/mzaf_6517679789841026471.plus.aac.p.m4a" },
  { id: "limabeatz-banana", title: "LIMABEATZ · BANANA · Preview", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/de/a1/70dea1a0-d36c-c449-4d2a-a841c217a5c0/mzaf_11633087033977126119.plus.aac.p.m4a" },
  { id: "manel-alsina-black-moon", title: "Manel Alsina · Black Moon · Preview", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f0/51/1d/f0511d0b-fa31-d0e8-e2a9-da3c9465f553/mzaf_4411204042336867719.plus.aac.p.m4a" },
  { id: "replicante-blue-fog", title: "Replicante Norman · Blue Fog · Preview", src: "https://audio-ssl.itunes.apple.com/itunes-assets/Music/v4/7c/ce/e5/7ccee5e5-46fe-06bd-3b5c-d3f7891d6959/mzaf_7545372415182960858.plus.aac.p.m4a" },
  { id: "nuria-ghia-origin", title: "Núria Ghia · The Origin · Preview", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/e7/8d/77/e78d775b-3908-e727-811e-688aa82232f3/mzaf_2114992638007357845.plus.aac.p.m4a" },
  { id: "dj-tillo-r2d2", title: "DJ Tillo · R2D2 · Preview", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1b/8d/8d/1b8d8d7f-21c4-cdfd-838e-01abf16e2fac/mzaf_5657746694455951340.plus.aac.p.m4a" },
];
const storageKey = "cesco-music-playlist-v1";

export function RayDroneSound({ language }: { language: Language }) {
  const t = labels[language];
  const media = useRef<HTMLAudioElement>(null);
  const [custom, setCustom] = useState<Track[]>([]);
  const [playing, setPlaying] = useState(false);
  const [trackId, setTrackId] = useState(defaults[0].id);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const tracks = [...defaults, ...custom];
  const track = Math.max(0, tracks.findIndex((item) => item.id === trackId));
  const current = tracks[track];

  useEffect(() => {
    try { setCustom(JSON.parse(localStorage.getItem(storageKey) ?? "[]") as Track[]); }
    catch { localStorage.removeItem(storageKey); }
  }, []);

  const persist = (items: Track[]) => { setCustom(items); localStorage.setItem(storageKey, JSON.stringify(items)); };

  const select = async (item: Track, autoplay = true) => {
    if (!media.current) return;
    setTrackId(item.id); setMessage("");
    media.current.src = item.src; media.current.load();
    if (autoplay) { try { await media.current.play(); setPlaying(true); } catch { setPlaying(false); setMessage(t.error); } }
  };

  const toggle = async () => {
    if (!media.current) return;
    if (media.current.paused) { try { await media.current.play(); setPlaying(true); setMessage(""); } catch { setPlaying(false); setMessage(t.error); } }
    else { media.current.pause(); setPlaying(false); }
  };

  const move = (offset: number, autoplay = playing) => {
    const next = (track + offset + tracks.length) % tracks.length;
    void select(tracks[next], autoplay);
  };

  const add = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let parsed: URL;
    try { parsed = new URL(url); } catch { setMessage(t.invalid); return; }
    if (!title.trim() || !/^https?:$/.test(parsed.protocol)) { setMessage(t.invalid); return; }
    const item: Track = { id: `custom-${Date.now()}`, title: title.trim(), src: parsed.toString(), custom: true };
    persist([...custom, item]); setTitle(""); setUrl(""); void select(item, true);
  };

  const remove = (id: string) => {
    persist(custom.filter((item) => item.id !== id));
    if (id === trackId) { media.current?.pause(); setPlaying(false); setTrackId(defaults[0].id); }
  };

  return <div className="fixed bottom-5 right-4 z-50 sm:right-40">
    <audio ref={media} className="hidden" src={current.src} preload="none" onEnded={() => move(1, true)} onError={() => { setPlaying(false); setMessage(t.error); }} />
    {open && <section aria-label={t.list} className="absolute bottom-[calc(100%+12px)] right-0 w-[min(92vw,400px)] overflow-hidden rounded-2xl border border-primary/25 bg-background/95 shadow-2xl backdrop-blur-xl">
      <header className="flex items-center justify-between border-b border-border/60 px-4 py-3"><div className="flex items-center gap-2"><ListMusic size={17} className="text-primary" /><h2 className="text-sm font-bold">{t.list}</h2><span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">{tracks.length}</span></div><button onClick={() => setOpen(false)} className="grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-white/5" aria-label={t.close}><X size={16} /></button></header>
      <div className="max-h-56 overflow-y-auto p-2">{tracks.map((item, index) => <div key={item.id} className={`group flex items-center gap-2 rounded-xl p-2 ${item.id === trackId ? "bg-primary/10" : "hover:bg-white/[.04]"}`}><button onClick={() => void select(item)} className="flex min-w-0 flex-1 items-center gap-3 text-left"><span className={`grid size-8 shrink-0 place-items-center rounded-full text-[10px] ${item.id === trackId ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}>{item.id === trackId && playing ? <Volume2 size={13} /> : String(index + 1).padStart(2, "0")}</span><span className="truncate text-xs font-medium">{item.title}</span></button>{item.custom && <button onClick={() => remove(item.id)} className="grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-red-500/10 hover:text-red-400" aria-label={`${t.remove}: ${item.title}`}><Trash2 size={14} /></button>}</div>)}</div>
      <form onSubmit={add} className="space-y-3 border-t border-border/60 p-4"><p className="flex items-center gap-2 text-xs font-bold"><Plus size={14} className="text-primary" />{t.add}</p><label className="block"><span className="mb-1 block text-[10px] uppercase tracking-widest text-muted-foreground">{t.artist}</span><input required value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Limabeatz · Nombre del tema" className="w-full rounded-lg border border-border bg-black/10 px-3 py-2 text-xs outline-none focus:border-primary/60" /></label><label className="block"><span className="mb-1 block text-[10px] uppercase tracking-widest text-muted-foreground">{t.directUrl}</span><input required value={url} onChange={(event) => setUrl(event.target.value)} inputMode="url" placeholder="https://…/tema.mp3" className="w-full rounded-lg border border-border bg-black/10 px-3 py-2 text-xs outline-none focus:border-primary/60" /></label>{message && <p role="alert" className="text-[11px] text-red-400">{message}</p>}<button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-bold text-primary-foreground"><Plus size={14} />{t.save}</button></form>
    </section>}
    <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/90 p-2 text-sm shadow-2xl backdrop-blur-xl">
      <button onClick={() => move(-1)} className="hidden size-9 place-items-center rounded-full text-muted-foreground hover:text-foreground sm:grid" aria-label={t.previous}><SkipBack size={15} /></button>
      <button onClick={toggle} className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground hover:scale-105" aria-label={playing ? t.pause : t.play}>{playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}</button>
      <div className="hidden min-w-0 w-48 px-1 sm:block"><span className="flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-muted-foreground"><Volume2 size={12} className={playing ? "text-primary" : ""} />{t.now}</span><span className="mt-0.5 block truncate text-xs font-medium">{current.title}</span></div>
      <button onClick={() => move(1)} className="grid size-9 place-items-center rounded-full text-muted-foreground hover:text-foreground" aria-label={t.next}><SkipForward size={16} /></button>
      <button onClick={() => setOpen((value) => !value)} className={`relative grid size-9 place-items-center rounded-full border ${open ? "border-primary bg-primary/10 text-primary" : "border-border/70 text-muted-foreground hover:border-primary/50"}`} aria-label={open ? t.close : t.list} aria-expanded={open}><ListMusic size={16} /><span className="absolute -right-1 -top-1 min-w-4 rounded-full bg-primary px-1 text-[9px] font-bold leading-4 text-primary-foreground">{tracks.length}</span></button>
    </div>
  </div>;
}
