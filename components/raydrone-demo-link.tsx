'use client';

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const labels = { es: "Abrir demo pública", ca: "Obrir demo pública", en: "Open public demo", de: "Öffentliche Demo öffnen", fr: "Ouvrir la démo publique" } as const;

export function RayDroneDemoLink() {
  const { language } = useLanguage();
  return <a href="https://wasm-neon.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">{labels[language]} <ArrowUpRight size={16} /></a>;
}
