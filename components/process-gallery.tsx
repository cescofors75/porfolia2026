'use client';

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Heart, Maximize2, X } from "lucide-react";
import { processArchive, type ProcessPhase } from "@/lib/process-archive";
import { useLanguage } from "@/lib/language-context";

const filters: Array<"Todo" | ProcessPhase> = ["Todo", "Origen", "Prototipo", "Integración", "Interfaz", "Instrumento"];

const galleryCopy = {
  es: { filters: ["Todo", "Origen", "Prototipo", "Integración", "Interfaz", "Instrumento"], filterLabel: "Filtrar galería", archive: "Archivo", video: "Registro en movimiento", videoLabels: ["RED808 · registro de proceso", "RayDrone · prueba de sonido"], loadVideo: "Cargar vídeo", openVideo: "Abrir archivo original", dialog: "Visor de imagen", close: "Cerrar visor", vote: "Votar esta imagen", voted: "Ya forma parte de tu selección", selection: "Tu selección local", local: "Un voto por imagen · guardado en este dispositivo" },
  ca: { filters: ["Tot", "Origen", "Prototip", "Integració", "Interfície", "Instrument"], filterLabel: "Filtrar la galeria", archive: "Arxiu", video: "Registre en moviment", videoLabels: ["RED808 · registre de procés", "RayDrone · prova de so"], loadVideo: "Carregar vídeo", openVideo: "Obrir l'arxiu original", dialog: "Visor d'imatges", close: "Tancar el visor", vote: "Votar aquesta imatge", voted: "Ja forma part de la teva selecció", selection: "La teva selecció local", local: "Un vot per imatge · desat en aquest dispositiu" },
  en: { filters: ["All", "Origin", "Prototype", "Integration", "Interface", "Instrument"], filterLabel: "Filter gallery", archive: "Archive", video: "Record in motion", videoLabels: ["RED808 · process record", "RayDrone · sound test"], loadVideo: "Load video", openVideo: "Open original file", dialog: "Image viewer", close: "Close viewer", vote: "Vote for this image", voted: "Already in your selection", selection: "Your local selection", local: "One vote per image · saved on this device" },
  de: { filters: ["Alle", "Ursprung", "Prototyp", "Integration", "Oberfläche", "Instrument"], filterLabel: "Galerie filtern", archive: "Archiv", video: "Aufzeichnung in Bewegung", videoLabels: ["RED808 · Prozessaufnahme", "RayDrone · Klangtest"], loadVideo: "Video laden", openVideo: "Originaldatei öffnen", dialog: "Bildbetrachter", close: "Betrachter schließen", vote: "Für dieses Bild stimmen", voted: "Bereits in deiner Auswahl", selection: "Deine lokale Auswahl", local: "Eine Stimme pro Bild · auf diesem Gerät gespeichert" },
  fr: { filters: ["Tout", "Origine", "Prototype", "Intégration", "Interface", "Instrument"], filterLabel: "Filtrer la galerie", archive: "Archive", video: "Trace en mouvement", videoLabels: ["RED808 · trace du processus", "RayDrone · essai sonore"], loadVideo: "Charger la vidéo", openVideo: "Ouvrir le fichier original", dialog: "Visionneuse d'images", close: "Fermer la visionneuse", vote: "Voter pour cette image", voted: "Déjà dans votre sélection", selection: "Votre sélection locale", local: "Un vote par image · enregistré sur cet appareil" },
} as const;

export function ProcessGallery() {
  const { language } = useLanguage();
  const copy = galleryCopy[language];
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todo");
  const [active, setActive] = useState<number | null>(null);
  const [votes, setVotes] = useState<Set<string>>(new Set());
  const visible = useMemo(() => filter === "Todo" ? processArchive : processArchive.filter((item) => item.phase === filter), [filter]);

  useEffect(() => {
    try { setVotes(new Set(JSON.parse(localStorage.getItem("process-gallery-votes") || "[]") as string[])); } catch { setVotes(new Set()); }
  }, []);

  const voteFor = (id: string) => {
    if (votes.has(id)) return;
    const next = new Set(votes).add(id);
    setVotes(next);
    localStorage.setItem("process-gallery-votes", JSON.stringify([...next]));
  };

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % visible.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + visible.length) % visible.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active, visible.length]);

  return (
    <>
      <div className="flex gap-2 overflow-x-auto pb-3 mb-10 gallery-filter" aria-label={copy.filterLabel}>
        {filters.map((item, index) => <button key={item} onClick={() => { setFilter(item); setActive(null); }} className={`shrink-0 px-4 py-2 rounded-full border text-sm transition-colors ${filter === item ? "bg-foreground text-background border-foreground" : "border-border/70 bg-card/40 text-muted-foreground hover:text-foreground"}`}>{copy.filters[index]}</button>)}
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/[.04] px-5 py-4"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-primary/10 text-primary"><Heart size={17} fill={votes.size ? "currentColor" : "none"} /></span><div><p className="text-sm font-semibold">{copy.selection}: {votes.size}</p><p className="text-xs text-muted-foreground">{copy.local}</p></div></div></div>

      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {visible.map((item, index) => (
          <motion.div layout key={item.id} className="relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border/50 bg-card/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * .018, .25) }}>
            <button onClick={() => setActive(index)} className="group relative block w-full text-left cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary">
            <Image src={item.src} alt={`${copy.filters[filters.indexOf(item.phase)]} · ${copy.archive} ${item.number}`} width={1200} height={index % 5 === 0 ? 1500 : index % 3 === 0 ? 900 : 1200} className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.025]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            <span className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-4 text-white"><span><span className="block text-[10px] tracking-[.22em] uppercase text-white/60 mb-1">{copy.filters[filters.indexOf(item.phase)]}</span><span className="block text-sm font-medium">{copy.archive} {item.number}</span></span><Maximize2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" /></span>
            </button>
            <button onClick={(event) => { event.stopPropagation(); voteFor(item.id); }} disabled={votes.has(item.id)} className={`absolute right-3 top-3 grid size-10 place-items-center rounded-full backdrop-blur transition-all cursor-pointer ${votes.has(item.id) ? "bg-primary text-primary-foreground" : "bg-black/55 text-white hover:bg-primary hover:text-primary-foreground"}`} aria-label={votes.has(item.id) ? copy.voted : copy.vote} title={votes.has(item.id) ? copy.voted : copy.vote}><Heart size={17} fill={votes.has(item.id) ? "currentColor" : "none"} /></button>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {active !== null && visible[active] && (
          <motion.div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl p-3 md:p-10 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label={copy.dialog}>
            <button onClick={() => setActive(null)} className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20" aria-label={copy.close}><X /></button>
            <motion.div key={visible[active].id} className="relative w-full h-full" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} onClick={(event) => event.stopPropagation()}>
              <Image src={visible[active].src} alt={`${copy.filters[filters.indexOf(visible[active].phase)]} · ${copy.archive} ${visible[active].number}`} fill priority className="object-contain" sizes="100vw" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-5 py-3 text-center text-white backdrop-blur"><span className="text-xs uppercase tracking-widest text-white/60">{visible[active].phase} · {visible[active].number}/{String(visible.length).padStart(2, "0")}</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
