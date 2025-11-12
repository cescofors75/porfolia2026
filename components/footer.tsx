'use client';

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/lib/language-context";

// Precalcular el año actual para evitar problemas con SSR
const currentYear = new Date().getFullYear();

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2 gradient-text">{t.footer.brand}</h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: t.nav.inicio, href: "/" },
                { label: t.nav.proyectos, href: "#portfolio" },
                { label: t.nav.habilidades, href: "#skills" },
                { label: t.nav.contacto, href: "#contact" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:cescofors75@gmail.com" className="hover:text-primary transition-colors">
                  cescofors75@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/34618900003" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <FaWhatsapp size={16} />
                  +34 618 900 003
                </a>
              </li>
              <li>
                <a href="http://www.linkedin.com/in/cescofors/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="http://github.com/cescofors75" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Francesc 'Cesco' Fors Ferrer. {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://baco.cat" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Baco AI
            </a>
            <a href="mailto:cescofors75@gmail.com" className="hover:text-primary transition-colors">
              {t.footer.contact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
