'use client';

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Maximize2, Play, X } from "lucide-react";
import { processArchive, processVideo, type ProcessPhase } from "@/lib/process-archive";
import { useLanguage } from "@/lib/language-context";

const filters: Array<"Todo" | ProcessPhase> = ["Todo", "Origen", "Prototipo", "Integración", "Interfaz", "Instrumento"];

const galleryCopy = {
  es: { filters: ["Todo", "Origen", "Prototipo", "Integración", "Interfaz", "Instrumento"], filterLabel: "Filtrar galería", archive: "Archivo", video: "Registro en movimiento", dialog: "Visor de imagen", close: "Cerrar visor" },
  ca: { filters: ["Tot", "Origen", "Prototip", "Integració", "Interfície", "Instrument"], filterLabel: "Filtrar la galeria", archive: "Arxiu", video: "Registre en moviment", dialog: "Visor d'imatges", close: "Tancar el visor" },
  en: { filters: ["All", "Origin", "Prototype", "Integration", "Interface", "Instrument"], filterLabel: "Filter gallery", archive: "Archive", video: "Record in motion", dialog: "Image viewer", close: "Close viewer" },
  de: { filters: ["Alle", "Ursprung", "Prototyp", "Integration", "Oberfläche", "Instrument"], filterLabel: "Galerie filtern", archive: "Archiv", video: "Aufzeichnung in Bewegung", dialog: "Bildbetrachter", close: "Betrachter schließen" },
  fr: { filters: ["Tout", "Origine", "Prototype", "Intégration", "Interface", "Instrument"], filterLabel: "Filtrer la galerie", archive: "Archive", video: "Trace en mouvement", dialog: "Visionneuse d'images", close: "Fermer la visionneuse" },
} as const;

export function ProcessGallery() {
  const { language } = useLanguage();
  const copy = galleryCopy[language];
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todo");
  const [active, setActive] = useState<number | null>(null);
  const visible = useMemo(() => filter === "Todo" ? processArchive : processArchive.filter((item) => item.phase === filter), [filter]);

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

      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {visible.map((item, index) => (
          <motion.button layout key={item.id} onClick={() => setActive(index)} className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border/50 bg-card/40 text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * .018, .25) }}>
            <Image src={item.src} alt={`${copy.filters[filters.indexOf(item.phase)]} · ${copy.archive} ${item.number}`} width={1200} height={index % 5 === 0 ? 1500 : index % 3 === 0 ? 900 : 1200} className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.025]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            <span className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-4 text-white"><span><span className="block text-[10px] tracking-[.22em] uppercase text-white/60 mb-1">{copy.filters[filters.indexOf(item.phase)]}</span><span className="block text-sm font-medium">{copy.archive} {item.number}</span></span><Maximize2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" /></span>
          </motion.button>
        ))}
      </motion.div>

      <section className="mt-16 relative overflow-hidden rounded-3xl border border-border/50 bg-black">
        <video controls playsInline preload="metadata" className="w-full max-h-[78vh] object-contain" aria-label={copy.video}><source src={processVideo} type="video/quicktime" /></video>
        <div className="pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/60 text-white text-xs backdrop-blur"><Play size={13} fill="currentColor" /> {copy.video}</div>
      </section>

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
