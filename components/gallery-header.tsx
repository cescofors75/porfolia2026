import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import type { Language } from "@/lib/translations";

const copy = {
  es: { eyebrow: "Archivo visual · 58 registros", line1: "Dentro del", line2: "laboratorio.", body: "Placas desnudas, cables provisionales, interfaces que cambian y máquinas que empiezan a sonar. Un archivo sin pulir del camino desde finales de 2025.", link: "Leer el proceso" },
  ca: { eyebrow: "Arxiu visual · 58 registres", line1: "Dins del", line2: "laboratori.", body: "Plaques nues, cables provisionals, interfícies que canvien i màquines que comencen a sonar. Un arxiu sense polir del camí des de finals de 2025.", link: "Llegir el procés" },
  en: { eyebrow: "Visual archive · 58 records", line1: "Inside the", line2: "laboratory.", body: "Bare boards, temporary wires, changing interfaces and machines beginning to sound. An unpolished archive of the journey since late 2025.", link: "Read the process" },
  de: { eyebrow: "Visuelles Archiv · 58 Einträge", line1: "Im", line2: "Labor.", body: "Offene Platinen, provisorische Kabel, wechselnde Oberflächen und Maschinen, die zu klingen beginnen. Ein ungeschöntes Archiv des Weges seit Ende 2025.", link: "Den Prozess lesen" },
  fr: { eyebrow: "Archive visuelle · 58 traces", line1: "Dans le", line2: "laboratoire.", body: "Cartes nues, câbles provisoires, interfaces changeantes et machines qui commencent à sonner. Une archive brute du chemin parcouru depuis fin 2025.", link: "Lire le processus" },
};

export function GalleryHeader({ language }: { language: Language }) {
  const t = copy[language];
  return <header className="mb-14 md:mb-20"><span className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[.24em] mb-5"><Images size={15} /> {t.eyebrow}</span><h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-7">{t.line1}<br /><span className="gradient-text-animated">{t.line2}</span></h1><div className="flex flex-col md:flex-row md:items-end justify-between gap-6"><p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">{t.body}</p><Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">{t.link} <ArrowRight size={16} /></Link></div></header>;
}
