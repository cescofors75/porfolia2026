import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-26");
  return [
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
