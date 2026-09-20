import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { projectUpdates, reviewDate } from "@/lib/project-updates";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(reviewDate);
  return [
    ...projectUpdates.flatMap((project) => ["proyectos", "blog"].filter((section) => section !== "proyectos" || project.slug !== "raydrone").map((section) => ({ url: `https://cesco.dev/${section}/${project.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 }))),
    {
      url: "https://cesco.dev",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cesco.dev/casos-de-exito",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cesco.dev/galeria",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cesco.dev/blog",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cesco.dev/proyectos/raydrone",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://cesco.dev/music-friends",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://cesco.dev/music-friends/mapa",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://cesco.dev/proyectos/aura",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cesco.dev/proyectos/red808",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://cesco.dev/proyectos/openstems",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://cesco.dev/proyectos/newschyper",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...caseStudies.map((cs) => ({
      url: `https://cesco.dev/casos-de-exito/${cs.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
