'use client';

import { useCallback } from "react";
import { Mail, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/lib/language-context";
import { useSmoothPointer } from "@/lib/use-smooth-pointer";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
}

function MagneticButton({ children, className = "", href, target, rel }: MagneticButtonProps) {
  // Efecto magnético con variables CSS en vez de useSpring de framer-motion.
  const toVars = useCallback(
    (x: number, y: number) => ({
      "--magnet-x": `${x * 26}px`,
      "--magnet-y": `${y * 26}px`,
    }),
    []
  );
  const ref = useSmoothPointer<HTMLAnchorElement>({ ease: 0.2, toVars });

  return (
    <a ref={ref} href={href} target={target} rel={rel} className={`magnetic ${className}`}>
      {children}
    </a>
  );
}

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[1200px] h-[800px] rounded-full animate-cta-halo"
          style={{
            background: "radial-gradient(ellipse, hsl(var(--primary) / 0.15) 0%, hsl(var(--secondary) / 0.1) 35%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full animate-cta-drift"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center reveal-scroll">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-6">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[0.95]">
            {t.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <MagneticButton
              href="mailto:cescofors75@gmail.com"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all duration-300 elevation-2 hover:elevation-3"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <Mail size={20} />
                {t.cta.btnEmail}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>
            <MagneticButton
              href="https://wa.me/34618900003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-border bg-card/50 text-foreground rounded-full font-semibold hover:bg-card hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <FaWhatsapp size={20} />
              {t.cta.btnCall}
            </MagneticButton>
          </div>

          <div className="flex justify-center gap-3">
            {[
              { icon: Mail, label: "Email", href: "mailto:cescofors75@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", href: "http://www.linkedin.com/in/cescofors/" },
              { icon: Twitter, label: "GitHub", href: "http://github.com/cescofors75" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border/60 bg-card/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card/60 hover:-translate-y-[3px] hover:scale-110 hover:rotate-[5deg] active:scale-95 transition-all duration-300"
                  title={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
