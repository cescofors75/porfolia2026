import { NextResponse, type NextRequest } from "next/server";

const LANGUAGE_COOKIE = "portfolio-language";
const SUPPORTED = ["ca", "es", "en", "de", "fr"];
const DEFAULT = "es";
const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Fija la cookie de idioma en la primera visita a partir de Accept-Language.
 *
 * Es el equivalente en servidor de lo que antes hacía navigator.language en el
 * cliente: así el HTML ya sale en el idioma correcto y no hace falta que se
 * hidrate nada para saber en qué idioma renderizar.
 */
function pickLanguage(header: string | null): string {
  if (!header) return DEFAULT;
  const candidates = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.trim().toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of candidates) {
    const base = tag.split("-")[0];
    if (SUPPORTED.includes(base)) return base;
  }
  return DEFAULT;
}

export function proxy(request: NextRequest) {
  const existing = request.cookies.get(LANGUAGE_COOKIE)?.value;
  if (existing && SUPPORTED.includes(existing)) return NextResponse.next();

  const language = pickLanguage(request.headers.get("accept-language"));

  // La cookie se refleja también en la petición actual para que este mismo
  // render ya use el idioma detectado, no sólo el siguiente.
  const headers = new Headers(request.headers);
  const forwarded = request.cookies.getAll().filter((c) => c.name !== LANGUAGE_COOKIE);
  headers.set(
    "cookie",
    [...forwarded.map((c) => `${c.name}=${c.value}`), `${LANGUAGE_COOKIE}=${language}`].join("; ")
  );

  const response = NextResponse.next({ request: { headers } });
  response.cookies.set(LANGUAGE_COOKIE, language, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|webp|avif|svg|mp3|woff2?)$).*)"],
};
