'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Activa los revelados por scroll de los elementos `.reveal-scroll`.
 *
 * El contenido se sirve visible: esto sólo "arma" el efecto una vez confirmado
 * que hay JS, añadiendo `is-pending` sólo a los elementos observados. Si el bundle tarda o nunca
 * llega, no se oculta nada — lo contrario de dejar el contenido en opacity:0
 * dentro del HTML esperando a que hidrate React.
 *
 * El barrido es geométrico (se recalculan posiciones en cada frame de scroll)
 * y no por IntersectionObserver: con scroll rápido o un salto a un ancla, los
 * eventos del observer se saltan elementos y éstos quedarían ocultos de forma
 * permanente. Un barrido periódico cubre además el caso de reflow — una imagen
 * que carga y empuja contenido hasta dentro de la pantalla sin que haya scroll.
 */
const SWEEP_MS = 500;
const SWEEP_WINDOW_MS = 20000;

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-scroll"));
    let pending = elements.filter((el) => !el.classList.contains("is-revealed"));
    if (pending.length === 0) return;

    let frame = 0;
    let ticker = 0;
    let stopTicker = 0;

    const sweep = () => {
      frame = 0;
      const limit = window.innerHeight * 0.92;
      const still: HTMLElement[] = [];
      for (const el of pending) {
        if (!el.isConnected) continue;
        if (el.getBoundingClientRect().top < limit) {
          el.classList.remove("is-pending");
          el.classList.add("is-revealed");
        } else {
          still.push(el);
        }
      }
      pending = still;
      if (pending.length === 0) cleanup();
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(sweep);
    };

    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      if (ticker) clearInterval(ticker);
      if (stopTicker) clearTimeout(stopTicker);
      frame = 0;
      ticker = 0;
      stopTicker = 0;
    }

    // El layout persiste entre rutas: sólo ocultamos nodos de esta visita.
    // Los nodos que lleguen después por streaming se mantienen visibles.
    sweep();
    if (pending.length === 0) return;
    pending.forEach((el) => el.classList.add("is-pending"));

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    ticker = window.setInterval(sweep, SWEEP_MS);
    stopTicker = window.setTimeout(() => {
      if (ticker) clearInterval(ticker);
      ticker = 0;
    }, SWEEP_WINDOW_MS);

    return () => {
      cleanup();
      elements.forEach((el) => el.classList.remove("is-pending"));
    };
  }, [pathname]);

  return null;
}
