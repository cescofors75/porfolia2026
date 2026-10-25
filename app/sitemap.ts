import { languageAlternates, languageUrl, SEO_LANGUAGES } from "@/lib/seo";
import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { projectUpdates, reviewDate } from "@/lib/project-updates";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(reviewDate);
  const entries: MetadataRoute.Sitemap = [
    ...["/plugins", "/plugins/celeste-parallel", "/blog/celeste-parallel-vst3"].map(path => ({ url: `https://www.cesco.dev${path}`, lastModified: new Date(reviewDate), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projectUpdates.flatMap((project) => ["proyectos", "blog"].filter((section) => section !== "proyectos" || project.slug !== "raydrone").map((section) => ({ url: `https://www.cesco.dev/${section}/${project.slug}`, lastModified: new Date(project.updatedAt ?? reviewDate), changeFrequency: "monthly" as const, priority: 0.8 }))),
    {
      url: "https://www.cesco.dev",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.cesco.dev/casos-de-exito",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.cesco.dev/galeria",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.cesco.dev/blog",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.cesco.dev/proyectos/raydrone",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.cesco.dev/music-friends",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.cesco.dev/music-friends/mapa",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.cesco.dev/proyectos/aura",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.cesco.dev/proyectos/red808",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.cesco.dev/proyectos/openstems",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.cesco.dev/proyectos/newschyper",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...caseStudies.map((cs) => ({
      url: `https://www.cesco.dev/casos-de-exito/${cs.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
  const latestReview = projectUpdates.reduce((date, project) => (project.updatedAt ?? reviewDate) > date ? project.updatedAt! : date, reviewDate);
  const localizedPaths = new Set(["/", "/blog", "/plugins", "/plugins/celeste-parallel", "/blog/celeste-parallel-vst3", ...projectUpdates.flatMap(p => [`/proyectos/${p.slug}`, `/blog/${p.slug}`])]);
  return entries.flatMap(entry => {
    const path = new URL(entry.url).pathname;
    if (path === "/" || path === "/blog") entry.lastModified = new Date(latestReview);
    if (!localizedPaths.has(path)) return [entry];
    return SEO_LANGUAGES.map(language => ({ ...entry, url: languageUrl(path, language), alternates: { languages: languageAlternates(path, language).languages } }));
  });
}
