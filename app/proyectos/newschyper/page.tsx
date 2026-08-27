import type { Metadata } from "next";
import { NewsChyperProject } from "@/components/newschyper-project";

export const metadata: Metadata = {
  title: "newsChyper | Pipeline editorial de agentes IA | Cesco.dev",
  description: "newsChyper transforma actualidad en micros, letras, música y portadas mediante un pipeline de agentes de inteligencia artificial.",
  alternates: { canonical: "https://cesco.dev/proyectos/newschyper" },
  openGraph: { title: "newsChyper | Cinco voces, una antena clandestina", description: "Pipeline de agentes IA para síntesis de noticias, escritura, música y diseño editorial.", url: "https://cesco.dev/proyectos/newschyper", images: [{ url: "/newschyper/a328cddf-f98d-4f9e-9338-11d0bce0e9cd.webp", width: 1067, height: 1536, alt: "Portada Hasta septiembre de newsChyper" }] },
};

export default function NewsChyperPage() { return <NewsChyperProject />; }
