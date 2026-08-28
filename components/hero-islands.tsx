'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import { useSmoothPointer } from "@/lib/use-smooth-pointer";

/**
 * Islas de cliente del hero. El resto de la sección es un server component:
 * sólo estas cuatro piezas necesitan JS, así que sólo ellas se hidratan.
 */

/* ── Glow que sigue al puntero ───────────────────────────────── */
export function HeroGlow() {
  const toVars = useCallback(
    (x: number, y: number) => ({
      "--glow-x": `${x * 520}px`,
      "--glow-y": `${y * 520}px`,
    }),
    []
  );
  // El envoltorio cubre el hero entero, así que su rect es la referencia
  // correcta para normalizar la posición del ratón.
  const ref = useSmoothPointer<HTMLDivElement>({ toVars, global: true });

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="absolute left-1/2 top-1/2 -ml-[300px] -mt-[300px] w-[600px] h-[600px] rounded-full hero-glow"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 55%)" }}
      />
    </div>
  );
}

/* ── Rotating words ─────────────────────────────────────────── */
export function RotatingWords({ words }: { words: string[] }) {
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
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
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

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  // El terminal está oculto por CSS por debajo de lg, pero sigue en el DOM.
  // Sin esta comprobación su animación de escritura mantenía un setInterval de
  // 25 ms — 40 re-renders por segundo — corriendo en el móvil para algo que
  // no se ve.
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    setEnabled(query.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
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
  }, [lineIndex, enabled]);

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

