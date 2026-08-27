'use client';

import { useEffect, useRef, useState } from "react";

/**
 * Cursor personalizado. La interpolación se hace con un rAF propio escribiendo
 * transform directamente sobre los nodos, en lugar de useSpring de
 * framer-motion: mismo resultado visual sin arrastrar la librería al bundle ni
 * provocar un re-render de React por frame.
 */
export function CursorFollower() {
  const [isPointer, setIsPointer] = useState(false);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointer(mediaQuery.matches);
    const handlePointerChange = (e: MediaQueryListEvent) => setIsPointer(e.matches);
    mediaQuery.addEventListener("change", handlePointerChange);
    return () => mediaQuery.removeEventListener("change", handlePointerChange);
  }, []);

  useEffect(() => {
    if (!isPointer) return;
    const dotEl = dot.current;
    const ringEl = ring.current;
    if (!dotEl || !ringEl) return;

    let targetX = -100;
    let targetY = -100;
    let x = -100;
    let y = -100;
    let frame = 0;
    let visible = false;
    let hovering = false;

    const render = () => {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      dotEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      ringEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${
        hovering ? 2 : 1
      })`;
      frame = requestAnimationFrame(render);
    };

    const setVisible = (next: boolean) => {
      if (visible === next) return;
      visible = next;
      dotEl.style.opacity = next ? "1" : "0";
      ringEl.style.opacity = next ? (hovering ? "0.5" : "0.3") : "0";
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]');
      hovering = !!interactive;
      if (visible) ringEl.style.opacity = hovering ? "0.5" : "0.3";
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    frame = requestAnimationFrame(render);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [isPointer]);

  if (!isPointer) return null;

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-0"
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9998] opacity-0 transition-opacity duration-200"
      />
    </>
  );
}
