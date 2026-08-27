'use client';

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

/* ── Rotating words ─────────────────────────────────────────── */
function RotatingWords({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <AnimatePresence mode="wait" presenceAffectsLayout={false}>
        <motion.span
          key={words[index]}
          className="inline-block gradient-text"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ── Animated counter ───────────────────────────────────────── */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

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
    <motion.div
      className="relative rounded-2xl border border-border/60 bg-[#0d0d14]/90 backdrop-blur-xl overflow-hidden elevation-3 w-full max-w-lg"
      initial={{ opacity: 0, x: 60, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d" }}
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
              <motion.span
                className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
export function HeroSection() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Translate offsets (px) instead of a background-position string: this lets the
  // spotlight follow the cursor via a GPU-composited transform, so moving the mouse
  // never forces a full-viewport repaint the way animating `background` would.
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-260, 260]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-260, 260]);

  useEffect(() => {
    const rectRef = { current: heroRef.current?.getBoundingClientRect() ?? null };
    const updateRect = () => {
      rectRef.current = heroRef.current?.getBoundingClientRect() ?? null;
    };
    updateRect();
    window.addEventListener("resize", updateRect);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = rectRef.current;
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateRect);
    };
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const rotatingWords: string[] = [...t.hero.rotating];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* Mouse-following gradient — fixed-size glow moved via transform (GPU-composited)
          instead of recomputing the `background` string every frame, which would repaint
          the full viewport on each mousemove. */}
      <motion.div
        className="absolute left-1/2 top-1/2 -ml-[300px] -mt-[300px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 55%)",
          x: glowX,
          y: glowY,
        }}
      />

      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[900px] bg-gradient-radial opacity-60" />

        <motion.div
          className="absolute top-[15%] left-[5%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[0%] w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--secondary) / 0.1) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
          {/* Left: text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 gradient-text-animated"
            >
              {t.hero.title}
            </motion.h1>

            {/* Rotating words */}
            <motion.div
              variants={itemVariants}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 h-[1.3em] text-foreground/90"
            >
              <RotatingWords words={rotatingWords} />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="#portfolio"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all duration-300 elevation-2 hover:elevation-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  {t.hero.btnProjects}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                href="mailto:cescofors75@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-card/50 text-foreground rounded-full font-semibold hover:bg-card hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.btnContact}
              </motion.a>
            </motion.div>

            {/* Animated counters */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 md:gap-12"
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
            </motion.div>
          </motion.div>

          {/* Right: terminal */}
          <div className="hidden lg:flex justify-center">
            <Terminal />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2"
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
