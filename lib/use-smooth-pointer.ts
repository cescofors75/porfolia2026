'use client';

import { useEffect, useRef } from "react";

/**
 * Sustituye el patrón useMotionValue + useSpring de framer-motion para los
 * efectos que siguen al puntero, sin cargar la librería (~288 KB sin comprimir
 * en el bundle, que bloqueaban el hilo principal antes del primer pintado).
 *
 * Escribe el resultado suavizado en variables CSS del propio elemento, así que
 * la animación la resuelve el compositor y no React: no hay re-render por frame.
 */
export interface SmoothPointerOptions {
  /** Cuánto se acerca al objetivo en cada frame (0-1). Más bajo = más inercia. */
  ease?: number;
  /** Convierte la posición normalizada (-0.5..0.5) en las variables CSS a escribir. */
  toVars: (x: number, y: number) => Record<string, string>;
  /** Variables aplicadas al soltar/salir, para volver al reposo. */
  restVars?: Record<string, string>;
  /** Si es true escucha en window; si no, sólo sobre el propio elemento. */
  global?: boolean;
}

export function useSmoothPointer<T extends HTMLElement>({
  ease = 0.14,
  toVars,
  global = false,
}: SmoothPointerOptions) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Sin puntero fino (móvil/táctil) el efecto no aporta nada y sólo gastaría CPU.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = 0;
    let idle = 0;

    const apply = (x: number, y: number) => {
      const vars = toVars(x, y);
      for (const key in vars) el.style.setProperty(key, vars[key]);
    };

    const tick = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      apply(currentX, currentY);

      const settled =
        Math.abs(targetX - currentX) < 0.0005 && Math.abs(targetY - currentY) < 0.0005;
      if (settled && ++idle > 3) {
        frame = 0;
        return;
      }
      if (!settled) idle = 0;
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      idle = 0;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      targetX = (event.clientX - rect.left) / rect.width - 0.5;
      targetY = (event.clientY - rect.top) / rect.height - 0.5;
      start();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      start();
    };

    const target: Window | T = global ? window : el;
    target.addEventListener("mousemove", onMove as EventListener, { passive: true });
    if (!global) el.addEventListener("mouseleave", onLeave);

    return () => {
      target.removeEventListener("mousemove", onMove as EventListener);
      if (!global) el.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ease, toVars, global]);

  return ref;
}
