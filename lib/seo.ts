import type { Language } from "@/lib/translations";

export const SITE_URL = "https://www.cesco.dev";
export const SEO_LANGUAGES = ["es", "ca", "en", "fr", "de"] as const;
export const ogLocale = { es: "es_ES", ca: "ca_ES", en: "en_GB", fr: "fr_FR", de: "de_DE" };

// Explicit query URLs work without cookies and preserve existing route links.
export function languageUrl(path: string, language: Language) {
  return `${SITE_URL}${path === "/" ? "/" : path}?lang=${language}`;
}

export function languageAlternates(path: string, language: Language) {
  return {
    canonical: languageUrl(path, language),
    languages: {
      ...Object.fromEntries(SEO_LANGUAGES.map(lang => [lang, languageUrl(path, lang)])),
      "x-default": `${SITE_URL}${path}`,
    },
  };
}

export const homeSEO = {
  es: ["Cesco Fors | Software, IA y hardware en Girona", "Desarrollo web, consultoría de IA y prototipos de hardware en Girona. Explora CELESTE, RED808, plugins de audio y proyectos con ESP32, FPGA e impresión 3D."],
  ca: ["Cesco Fors | Programari, IA i hardware a Girona", "Desenvolupament web, consultoria d’IA i prototips de hardware a Girona. Descobreix CELESTE, RED808, plugins d’àudio, ESP32, FPGA i impressió 3D."],
  en: ["Cesco Fors | Software, AI & hardware in Girona", "Web development, AI consulting and hardware prototypes in Girona. Explore CELESTE, RED808, audio plugins, ESP32, FPGA and 3D printing projects."],
  fr: ["Cesco Fors | Logiciel, IA et hardware à Gérone", "Développement web, conseil en IA et prototypes matériels à Gérone. Découvrez CELESTE, RED808, plugins audio, ESP32, FPGA et impression 3D."],
  de: ["Cesco Fors | Software, KI und Hardware in Girona", "Webentwicklung, KI-Beratung und Hardware-Prototypen in Girona. Entdecken Sie CELESTE, RED808, Audio-Plugins, ESP32, FPGA und 3D-Druck-Projekte."],
} satisfies Record<Language, [string, string]>;
