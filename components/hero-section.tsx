'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useSmoothPointer } from "@/lib/use-smooth-pointer";

/* ── Rotating words ─────────────────────────────────────────── */
function RotatingWords({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  // La primera palabra se pinta ya en su sitio para que salga visible en el HTML
  // del servidor; a partir del primer cambio cada palabra entra animada por CSS.
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotated(true);
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <span
        key={index}
        className={`inline-block gradient-text${rotated ? " animate-word-in" : ""}`}
      >
        {words[index]}
      </span>
    </span>
  );
}

/* ── Animated counter ───────────────────────────────────────── */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const run = () => {
      const duration = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      setDisplay(value);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { rootMargin: "-50px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ── Terminal typing effect ─────────────────────────────────── */
const terminalLines = [
  { prompt: "$", text: "npx create-next-app@latest cesco-portfolio", color: "text-foreground" },
  { prompt: "$", text: "pip install demucs --upgrade", color: "text-foreground" },
  { prompt: "✓", text: "demucs: separating stems [drums|bass|vocals|other]", color: "text-emerald-400" },
  { prompt: "$", text: "az pipelines run --branch main", color: "text-foreground" },
  { prompt: "✓", text: "Build succeeded · deployed to production", color: "text-emerald-400" },
  { prompt: "$", text: "baco-ai serve --rag --embeddings", color: "text-foreground" },
  { prompt: "✓", text: "Sommelier virtual listo · RAG activo", color: "text-emerald-400" },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= terminalLines.length) {
      // Restart after pause
      const restart = setTimeout(() => {
        setVisibleLines(0);
        setLineIndex(0);
        setCurrentText("");
      }, 5000);
      return () => clearTimeout(restart);
    }

    const line = terminalLines[lineIndex];
    let charIndex = 0;
    const typing = setInterval(() => {
      charIndex++;
      setCurrentText(line.text.slice(0, charIndex));
      if (charIndex >= line.text.length) {
        clearInterval(typing);
        setTimeout(() => {
          setVisibleLines((v) => v + 1);
          setLineIndex((i) => i + 1);
          setCurrentText("");
        }, 400);
      }
    }, 25);

    return () => clearInterval(typing);
  }, [lineIndex]);

  return (
    <div
      className="relative rounded-2xl border border-border/60 bg-[#0d0d14]/90 backdrop-blur-xl overflow-hidden elevation-3 w-full max-w-lg reveal-load"
      style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
    >
      {/* Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl -z-10 opacity-60" />

      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-black/30">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">cesco@workstation ~ zsh</span>
      </div>

      {/* Content */}
      <div className="p-5 font-mono text-xs md:text-sm space-y-2 min-h-[240px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className={line.prompt === "✓" ? "text-emerald-400" : "text-primary"}>
              {line.prompt}
            </span>
            <span className={line.color}>{line.text}</span>
          </div>
        ))}
        {lineIndex < terminalLines.length && (
          <div className="flex gap-2">
            <span className={terminalLines[lineIndex].prompt === "✓" ? "text-emerald-400" : "text-primary"}>
              {terminalLines[lineIndex].prompt}
            </span>
            <span className={terminalLines[lineIndex].color}>
              {currentText}
              <span className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle animate-caret" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
export function HeroSection() {
  const { t } = useLanguage();

  // El glow que sigue al ratón se resuelve escribiendo variables CSS sobre la
  // propia sección y moviendo un div de tamaño fijo con transform: lo compone
  // la GPU, no re-renderiza React y no arrastra framer-motion al bundle.
  const toVars = useCallback(
    (x: number, y: number) => ({
      "--glow-x": `${x * 520}px`,
      "--glow-y": `${y * 520}px`,
    }),
    []
  );
  const heroRef = useSmoothPointer<HTMLElement>({ toVars, global: true });

  const rotatingWords: string[] = [...t.hero.rotating];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* Mouse-following gradient — fixed-size glow moved via transform (GPU-composited)
          instead of recomputing the `background` string every frame, which would repaint
          the full viewport on each mousemove. */}
      <div
        className="absolute left-1/2 top-1/2 -ml-[300px] -mt-[300px] w-[600px] h-[600px] rounded-full pointer-events-none hero-glow"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 55%)" }}
      />

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
