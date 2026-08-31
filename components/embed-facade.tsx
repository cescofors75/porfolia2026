'use client';

import { useState } from "react";
import { Play } from "lucide-react";

interface EmbedFacadeProps {
  title: string;
  src: string;
  height: number;
  label: string;
  accentClass: string;
  className?: string;
}

export function EmbedFacade({ title, src, height, label, accentClass, className }: EmbedFacadeProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        title={title}
        width="100%"
        height={height}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        src={src}
        className={className}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      style={{ height }}
      aria-label={`${label}: ${title}`}
      className={`w-full flex items-center justify-center gap-4 rounded-xl border border-dashed bg-black/10 px-5 text-left transition-colors hover:bg-black/20 ${accentClass} ${className ?? ""}`}
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-current/10">
        <Play size={16} className="translate-x-[1px]" fill="currentColor" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-xs font-semibold uppercase tracking-widest opacity-70">{label}</span>
        <span className="mt-1 text-sm font-bold leading-snug">{title}</span>
      </span>
    </button>
  );
}
