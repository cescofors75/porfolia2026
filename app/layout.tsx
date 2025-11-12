import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeSelector } from "@/components/theme-selector";
import { LanguageSelector } from "@/components/language-selector";
import { LanguageProvider } from "@/lib/language-context";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Francesc 'Cesco' Fors | Senior Full Stack Developer",
  description: "Senior Full Stack Developer especializado en JavaScript, TypeScript, React, Next.js, C# e IA. Fundador de Baco AI.",
  keywords: [
    "full stack developer",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "csharp",
    "azure",
    "ia",
    "baco ai",
  ],
  authors: [{ name: "Francesc 'Cesco' Fors Ferrer" }],
  creator: "Francesc 'Cesco' Fors Ferrer",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://cesco.dev",
    siteName: "Cesco.dev",
    title: "Francesc 'Cesco' Fors | Senior Full Stack Developer",
    description: "Senior Full Stack Developer con más de 25 años de experiencia. Especializado en JavaScript, TypeScript, React, Next.js, C# e IA.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ThemeSelector />
          <LanguageSelector />
        </LanguageProvider>
      </body>
    </html>
  );
}
