import type { Metadata } from "next";
import { ProcessGallery } from "@/components/process-gallery";
import { GalleryHeader } from "@/components/gallery-header";

export const metadata: Metadata = {
  title: "Galería de proceso | Del prototipo al instrumento | Cesco.dev",
  description: "Archivo visual del proceso de diseño, electrónica, firmware e interfaces de los instrumentos de Cesco Fors desde finales de 2025.",
  alternates: { canonical: "https://cesco.dev/galeria" },
};

export default function GaleriaPage() {
  return <article className="pt-32 pb-24 px-4"><div className="max-w-7xl mx-auto">
    <GalleryHeader />
    <ProcessGallery />
  </div></article>;
}
