import { NextResponse, type NextRequest } from "next/server";

const LANGUAGE_COOKIE = "portfolio-language";
const SUPPORTED = ["ca", "es", "en", "de", "fr"];
const DEFAULT = "es";
const ONE_YEAR = 60 * 60 * 24 * 365;

export function proxy(request: NextRequest) {
  // Static discovery files and media do not require language negotiation.
  if (/\.(xml|txt|mp4|zip|json|md)$/i.test(request.nextUrl.pathname)) return NextResponse.next();
  const explicit = request.nextUrl.searchParams.get("lang");
  if (explicit === "es") {
    const target = request.nextUrl.clone();
    target.searchParams.delete("lang");
    return NextResponse.redirect(target, 308);
  }
  // URL determines content, regardless of browser preferences or stale cookies.
  const language = explicit && SUPPORTED.includes(explicit) ? explicit : DEFAULT;

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
