"use client";

import { useState } from "react";

export function DeferredVideo({ id, title, label }: { id: string; title: string; label: string }) {
  const [active, setActive] = useState(false);
  return <div className="relative aspect-video w-full bg-gradient-to-br from-primary/15 to-background">
    {active ? <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1`} title={title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen /> :
      <button type="button" onClick={() => setActive(true)} className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" aria-label={`${label}: ${title}`}>
        <span aria-hidden="true" className="rounded-full bg-primary px-6 py-4 text-primary-foreground">▶</span>
        <span className="font-semibold">{title}</span><span className="text-sm text-primary">{label} · YouTube</span>
      </button>}
  </div>;
}
