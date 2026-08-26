'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/lib/language-context";

const currentYear = new Date().getFullYear();

export function Footer() {
  const { t, language } = useLanguage();
  const archiveLabels = {
    ca: { gallery: "Galeria", journal: "Diari", music: "Música & Amics" }, es: { gallery: "Galería", journal: "Diario", music: "Música & Amigos" },
    en: { gallery: "Gallery", journal: "Journal", music: "Music & Friends" }, de: { gallery: "Galerie", journal: "Tagebuch", music: "Musik & Freunde" },
    fr: { gallery: "Galerie", journal: "Journal", music: "Musique & Amis" },
  }[language];

  const quickLinks = [
    { label: t.nav.inicio, href: "/" },
    { label: t.nav.proyectos, href: "/#portfolio" },
    { label: archiveLabels.gallery, href: "/galeria" },
    { label: archiveLabels.journal, href: "/blog" },
    { label: archiveLabels.music, href: "/music-friends" },
    { label: t.nav.casos, href: "/casos-de-exito" },
    { label: t.nav.habilidades, href: "/#skills" },
    { label: t.nav.contacto, href: "/#contact" },
  ];

  const contactLinks = [
    { label: "cescofors75@gmail.com", href: "mailto:cescofors75@gmail.com" },
    { label: "+34 618 900 003", href: "https://wa.me/34618900003", icon: FaWhatsapp },
    { label: "LinkedIn", href: "http://www.linkedin.com/in/cescofors/" },
    { label: "GitHub", href: "http://github.com/cescofors75" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-card/20 backdrop-blur-sm overflow-hidden">
      {/* Giant wordmark */}
      <div
        className="pointer-events-none select-none absolute inset-x-0 -bottom-6 md:-bottom-10 flex justify-center"
        aria-hidden="true"
      >
        <span className="font-display font-bold text-[22vw] leading-none tracking-tighter text-stroke-faint whitespace-nowrap">
          CESCO.DEV
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary font-bold text-sm font-display">
                CF
              </div>
              <span className="text-lg font-display font-bold tracking-tight">
                Cesco<span className="text-primary">.</span>dev
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {Icon && <Icon size={14} />}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services / Location */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Full Stack Development</li>
              <li>AI Consulting & RAG</li>
              <li>Cloud & DevOps</li>
              <li>IoT & Embedded Systems</li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Francesc &apos;Cesco&apos; Fors Ferrer. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://baco.cat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Baco AI
            </a>
            <span className="text-border">·</span>
            <span>Girona, Costa Brava</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
