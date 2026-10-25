import { languageUrl, languageAlternates, ogLocale } from "@/lib/seo";
import type { Metadata } from "next";
import type { Language } from "@/lib/translations";
import { reviewDate, type ProjectUpdate } from "@/lib/project-updates";

export function updateMetadata(project: ProjectUpdate, language: Language, blog = false): Metadata {
  const copy = project.copy[language];
  const path = `/${blog ? "blog" : "proyectos"}/${project.slug}`;
  const url = languageUrl(path, language);
  return {
    title: `${blog ? copy.title : project.name} | Cesco.dev`, description: copy.summary,
    alternates: languageAlternates(path, language),
    twitter: { card: project.image ? "summary_large_image" : "summary", title: copy.title, description: copy.summary, images: project.image ? [project.image] : [] },
    openGraph: { title: copy.title, description: copy.summary, url, type: "article", publishedTime: project.publishedAt ?? reviewDate, modifiedTime: project.updatedAt ?? reviewDate, locale: ogLocale[language], ...(project.image ? { images: [{ url: project.image, alt: copy.caption ?? project.name }] } : {}) },
  };
}
