import { cookies } from "next/headers";
import { translations, type Language } from "@/lib/translations";

export const LANGUAGE_COOKIE = "portfolio-language";
export const DEFAULT_LANGUAGE: Language = "es";

export const SUPPORTED_LANGUAGES = ["ca", "es", "en", "de", "fr"] as const;

export function isLanguage(value: string | undefined | null): value is Language {
  return !!value && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

/**
 * Resuelve el idioma en el servidor a partir de la cookie.
 *
 * El idioma se lee aquí y no desde un contexto de React a propósito: leerlo en
 * cliente (localStorage / navigator.language) obligaba a marcar como 'use client'
 * todos los componentes que muestran texto, de modo que la página entera se
 * enviaba como app de cliente y había que hidratarla antes de poder pintar nada.
 * Además el servidor renderizaba siempre en español y el árbol completo se
 * volvía a renderizar en otro idioma justo después de hidratar.
 */
export async function getLanguage(): Promise<Language> {
  const store = await cookies();
  const value = store.get(LANGUAGE_COOKIE)?.value;
  return isLanguage(value) ? value : DEFAULT_LANGUAGE;
}

export async function getTranslations() {
  const language = await getLanguage();
  return { language, t: translations[language] };
}
