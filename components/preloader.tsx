'use client';

import { useEffect, useState } from "react";

const SESSION_KEY = "cf-preloader-shown";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadyShown = false;
    }
    if (alreadyShown) {
      setCount(100);
      setDone(true);
      return;
    }
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage no disponible (modo privado): se muestra sólo esta carga
    }

    const start = performance.now();
    const duration = 700;
    let frame: number;
    let exit: ReturnType<typeof setTimeout>;
    let remove: ReturnType<typeof setTimeout>;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        exit = setTimeout(() => {
          setLeaving(true);
          remove = setTimeout(() => setDone(true), 500);
        }, 100);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(exit);
      clearTimeout(remove);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center preloader${
        leaving ? " is-leaving" : ""
      }`}
    >
      <div className="font-display text-8xl md:text-9xl font-bold gradient-text-animated mb-6 preloader-mark">
        CF
      </div>

      <div className="w-48 h-px bg-border relative overflow-hidden mb-4">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent"
          style={{ width: `${count}%` }}
        />
      </div>

      <div className="font-mono text-sm text-muted-foreground tabular-nums">{count}%</div>
    </div>
  );
}
