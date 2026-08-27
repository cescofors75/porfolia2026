import type { Metadata } from "next";
import { ProcessGallery } from "@/components/process-gallery";
import { GalleryHeader } from "@/components/gallery-header";
import { getLanguage } from "@/lib/language-server";

export const metadata: Metadata = {
  title: "Galería de proceso | Del prototipo al instrumento | Cesco.dev",
  description: "Archivo visual del proceso de diseño, electrónica, firmware e interfaces de los instrumentos de Cesco Fors desde finales de 2025.",
  alternates: { canonical: "https://cesco.dev/galeria" },
  openGraph: { title: "Galería de proceso | Del prototipo al instrumento", description: "Electrónica, firmware, DSP e interfaces documentados desde finales de 2025.", url: "https://cesco.dev/galeria", images: [{ url: "/gallery/IMG_8083.webp", width: 1500, height: 2000, alt: "Instrumento electrónico durante una sesión nocturna" }] },
};

export default async function GaleriaPage() {
  const language = await getLanguage();

  return <article className="pt-32 pb-24 px-4"><div className="max-w-7xl mx-auto">
    <GalleryHeader language={language} />
    <ProcessGallery language={language} />
  </div></article>;
}
