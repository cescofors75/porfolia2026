'use client';

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/lib/language-context";

export function CTASection() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary opacity-10 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:cescofors75@gmail.com"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              {t.cta.btnEmail}
            </motion.a>
            <motion.a
              href="https://wa.me/34618900003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={20} />
              {t.cta.btnCall}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Mail, label: "Email", href: "mailto:cescofors75@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", href: "http://www.linkedin.com/in/cescofors/" },
            { icon: Twitter, label: "GitHub", href: "http://github.com/cescofors75" },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg border border-border glass flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
