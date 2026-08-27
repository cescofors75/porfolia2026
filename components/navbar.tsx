'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language } = useLanguage();
  const archiveLabels = {
    ca: { gallery: "Galeria", journal: "Diari", music: "Música & Amics" }, es: { gallery: "Galería", journal: "Diario", music: "Música & Amigos" },
    en: { gallery: "Gallery", journal: "Journal", music: "Music & Friends" }, de: { gallery: "Galerie", journal: "Tagebuch", music: "Musik & Freunde" },
    fr: { gallery: "Galerie", journal: "Journal", music: "Musique & Amis" },
  }[language];
  // Un solo listener de scroll, limitado a un frame, que hace las dos cosas:
  // marcar el estado "scrolled" y escribir el progreso en una variable CSS.
  // Sustituye a useScroll + useSpring de framer-motion sin re-renderizar por frame.
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? Math.min(doc.scrollTop / max, 1) : 0;
      progressRef.current?.style.setProperty("--scroll-progress", String(progress));
      setIsScrolled(doc.scrollTop > 20);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const menuItems = [
    { label: t.nav.inicio, href: "/" },
    { label: t.nav.proyectos, href: "/#portfolio" },
    { label: archiveLabels.gallery, href: "/galeria" },
    { label: archiveLabels.journal, href: "/blog" },
    { label: archiveLabels.music, href: "/music-friends" },
    { label: t.nav.casos, href: "/casos-de-exito" },
    { label: t.nav.habilidades, href: "/#skills" },
    { label: t.nav.contacto, href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo navbar-in ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress bar */}
        <div
          ref={progressRef}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent origin-left z-10 navbar-progress"
        />

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/cesco-logo-mark.png"
                  alt=""
                  fill
                  priority
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                Cesco<span className="text-primary">.</span>dev
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="mailto:cescofors75@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 hover:border-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                {t.nav.contratar}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg border border-border/50 hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {/* El desplegable anima con grid-template-rows en CSS, que permite ir de
              0 a "alto automático" sin medir nada en JS ni usar AnimatePresence. */}
          <div
            id="mobile-menu"
            className={`md:hidden mobile-menu bg-background/95 backdrop-blur-xl rounded-b-2xl${
              isOpen ? " is-open" : ""
            }`}
            aria-hidden={!isOpen}
          >
            <div className="mobile-menu-inner">
              <div className="py-4 space-y-1 border-t border-border/50">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2 px-4">
                    <a
                      href="mailto:cescofors75@gmail.com"
                      className="block w-full text-center px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
                    >
                      {t.nav.contratar}
                    </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
