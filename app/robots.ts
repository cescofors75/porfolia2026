import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.cesco.dev/sitemap.xml",
    host: "https://www.cesco.dev",
  };
}
