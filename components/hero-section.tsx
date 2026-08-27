import { ArrowRight } from "lucide-react";
import { translations, type Language } from "@/lib/translations";
import { HeroGlow, RotatingWords, Counter, Terminal } from "@/components/hero-islands";

/* ── Hero ───────────────────────────────────────────────────── */
export function HeroSection({ language }: { language: Language }) {
  const t = translations[language];

  const rotatingWords: string[] = [...t.hero.rotating];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 pt-24 pb-16">
      <HeroGlow />

      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[900px] bg-gradient-radial opacity-60" />

        {/* Blobs decorativos: animados en CSS para que los componga la GPU en
            lugar de mantener un rAF de framer-motion vivo indefinidamente. */}
        <div
          className="absolute top-[15%] left-[5%] w-[600px] h-[600px] rounded-full animate-hero-blob-1"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[20%] right-[0%] w-[700px] h-[700px] rounded-full animate-hero-blob-2"
          style={{
            background: "radial-gradient(circle, hsl(var(--secondary) / 0.1) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: text — revelado con CSS (.reveal-load) y no con framer-motion,
              para que salga visible en el HTML del servidor en lugar de esperar
              a que hidrate el bundle. */}
          <div>
            <div className="mb-8 reveal-load">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t.hero.badge}
              </span>
            </div>

            <h1
              className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 gradient-text-animated reveal-load"
              style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
            >
              {t.hero.title}
            </h1>

            {/* Rotating words */}
            <div
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 h-[1.3em] text-foreground/90 reveal-load"
              style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
            >
              <RotatingWords words={rotatingWords} />
            </div>

            <p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed reveal-load"
              style={{ "--reveal-delay": "0.24s" } as React.CSSProperties}
            >
              {t.hero.description}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-12 reveal-load"
              style={{ "--reveal-delay": "0.32s" } as React.CSSProperties}
            >
              <a
                href="#portfolio"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all duration-300 elevation-2 hover:elevation-3 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  {t.hero.btnProjects}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="mailto:cescofors75@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-card/50 text-foreground rounded-full font-semibold hover:bg-card hover:border-primary/30 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.hero.btnContact}
              </a>
            </div>

            {/* Animated counters */}
            <div
              className="flex flex-wrap gap-8 md:gap-12 reveal-load"
              style={{ "--reveal-delay": "0.4s" } as React.CSSProperties}
            >
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text">
                  <Counter value={25} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{t.hero.stat1}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text">
                  <Counter value={100} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{t.hero.stat2}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text">
                  IA
                </div>
                <div className="text-sm text-muted-foreground mt-1">{t.hero.stat3}</div>
              </div>
            </div>
          </div>

          {/* Right: terminal */}
          <div className="hidden lg:flex justify-center">
            <Terminal />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal-load"
        style={{ "--reveal-delay": "0.5s" } as React.CSSProperties}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2 animate-scroll-hint">
          <div className="w-1 h-2 bg-primary rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
