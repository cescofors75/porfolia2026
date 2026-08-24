import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeSelector } from "@/components/theme-selector";
import { LanguageSelector } from "@/components/language-selector";
import { CursorFollower } from "@/components/cursor-follower";
import { Preloader } from "@/components/preloader";
import { AuroraBackground } from "@/components/aurora-background";
import { LanguageProvider } from "@/lib/language-context";
import { Analytics } from "@vercel/analytics/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cesco.dev"),
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://cesco.dev",
    siteName: "Cesco.dev",
    title: "Francesc 'Cesco' Fors | Ingeniero de Software & Consultor IA en Girona",
    description: "Desarrollador Full Stack e Ingeniero de Software en Girona. Consultoría tecnológica y de IA para empresas de Girona, Lloret de Mar y Blanes.",
  },
  twitter: {
    card: "summary",
    title: "Francesc 'Cesco' Fors | Ingeniero de Software & Consultor IA en Girona",
    description: "Desarrollador Full Stack e Ingeniero de Software en Girona. Consultoría tecnológica y de IA para Girona, Lloret de Mar y Blanes.",
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

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-foreground font-sans antialiased">
        <Preloader />
        <AuroraBackground />
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ThemeSelector />
          <LanguageSelector />
          <CursorFollower />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
