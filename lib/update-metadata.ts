import type { Metadata } from "next";
import type { Language } from "@/lib/translations";
import { reviewDate, type ProjectUpdate } from "@/lib/project-updates";

export function updateMetadata(project: ProjectUpdate, language: Language, blog = false): Metadata {
  const copy = project.copy[language];
  const url = `https://cesco.dev/${blog ? "blog" : "proyectos"}/${project.slug}`;
  return {
    title: `${blog ? copy.title : project.name} | Cesco.dev`, description: copy.summary,
    alternates: { canonical: url },
    twitter: { card: project.image ? "summary_large_image" : "summary", title: copy.title, description: copy.summary, images: project.image ? [project.image] : [] },
    openGraph: { title: copy.title, description: copy.summary, url, type: "article", publishedTime: reviewDate, modifiedTime: reviewDate, locale: { es: "es_ES", ca: "ca_ES", en: "en_GB", fr: "fr_FR", de: "de_DE" }[language], ...(project.image ? { images: [{ url: project.image, alt: copy.caption ?? project.name }] } : {}) },
  };
}
