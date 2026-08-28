import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeSelector } from "@/components/theme-selector";
import { LanguageSelector } from "@/components/language-selector";
import { CursorFollower } from "@/components/cursor-follower";
import { RayDroneSound } from "@/components/raydrone-sound";
import { Preloader } from "@/components/preloader";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AuroraBackground } from "@/components/aurora-background";
import { Analytics } from "@vercel/analytics/next";
import { getLanguage } from "@/lib/language-server";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cesco.dev"),
  applicationName: "Cesco.dev",
  category: "technology",
  title: "Francesc 'Cesco' Fors | Ingeniero de Software & Consultor IA en Girona",
  description: "Desarrollador Full Stack e Ingeniero de Software en Girona. Consultoría tecnológica y de IA para empresas de Girona, Lloret de Mar y Blanes. Especializado en JavaScript, TypeScript, React, Next.js, C# e Inteligencia Artificial.",
  keywords: [
    "desarrollador Girona",
    "programador Girona",
    "ingeniero de software Girona",
    "desarrollador Lloret de Mar",
    "programador Lloret de Mar",
    "desarrollador Blanes",
    "programador Blanes",
    "consultoria IA Girona",
    "consultor IA",
    "consultoria tecnologica Costa Brava",
    "desarrollador web Costa Brava",
    "full stack developer",
    "software engineer",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "csharp",
    "azure",
    "inteligencia artificial",
    "baco ai",
  ],
  authors: [{ name: "Francesc 'Cesco' Fors Ferrer" }],
  creator: "Francesc 'Cesco' Fors Ferrer",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cesco.dev",
  },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://cesco.dev",
    siteName: "Cesco.dev",
    title: "Francesc 'Cesco' Fors | Ingeniero de Software & Consultor IA en Girona",
    description: "Desarrollador Full Stack e Ingeniero de Software en Girona. Consultoría tecnológica y de IA para empresas de Girona, Lloret de Mar y Blanes.",
    images: [{ url: "/imgRaydrone/raydrone-wasm.webp", width: 1702, height: 920, alt: "RayDrone, instrumento acústico Rust y WebAssembly de Cesco Fors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Francesc 'Cesco' Fors | Ingeniero de Software & Consultor IA en Girona",
    description: "Desarrollador Full Stack e Ingeniero de Software en Girona. Consultoría tecnológica y de IA para Girona, Lloret de Mar y Blanes.",
    images: ["/imgRaydrone/raydrone-wasm.webp"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francesc 'Cesco' Fors Ferrer",
  alternateName: "Cesco Fors",
  url: "https://cesco.dev",
  jobTitle: "Ingeniero de Software & Consultor de IA",
  description: "Desarrollador Full Stack e Ingeniero de Software en Girona, especializado en JavaScript, TypeScript, React, Next.js, C# e Inteligencia Artificial.",
  email: "mailto:cescofors75@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Girona",
    addressRegion: "Catalunya",
    addressCountry: "ES",
  },
  areaServed: ["Girona", "Lloret de Mar", "Blanes", "Costa Brava", "Catalunya", "Spain"],
  knowsAbout: [
    "Full Stack Development",
    "Software Engineering",
    "Inteligencia Artificial",
    "Consultoria IA",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "C#",
    "Azure DevOps",
    "IoT",
  ],
  sameAs: [
    "https://github.com/cescofors75",
    "https://www.linkedin.com/in/cescofors/",
    "https://www.npmjs.com/package/@cescofors/toonjs",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Baco AI",
    url: "https://baco.cat",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cesco.dev",
  url: "https://cesco.dev",
  inLanguage: ["ca", "es", "en", "de", "fr"],
  author: { "@type": "Person", name: "Francesc 'Cesco' Fors Ferrer", url: "https://cesco.dev" },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // El idioma se resuelve en el servidor, así el HTML sale ya traducido y el
  // atributo lang es correcto desde la primera respuesta.
  const language = await getLanguage();

  return (
    <html
      lang={language}
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-foreground font-sans antialiased">
        <Preloader />
        <ScrollReveal />
        <AuroraBackground />
        <Navbar language={language} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer language={language} />
        <ThemeSelector language={language} />
        <LanguageSelector language={language} />
        <RayDroneSound language={language} />
        <CursorFollower />
        <Analytics />
      </body>
    </html>
  );
}
