'use client';

const items = [
  "FULL STACK",
  "IA GENERATIVA",
  "RAG & EMBEDDINGS",
  "IOT & EMBEBIDOS",
  "DEVOPS AZURE",
  "NEXT.JS 16",
  "TYPESCRIPT",
  "AUDIO DSP",
];

export function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="relative py-8 border-y border-border/50 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display text-4xl md:text-6xl font-bold tracking-tight text-stroke-faint hover:text-foreground transition-colors duration-500 px-6">
              {item}
            </span>
            <span className="w-3 h-3 rounded-full bg-primary/40 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
