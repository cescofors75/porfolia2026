'use client';

import { useCallback } from "react";
import { useSmoothPointer } from "@/lib/use-smooth-pointer";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function TiltCard({ children, className = "", glowColor = "#6366f1" }: TiltCardProps) {
  // Inclinación y foco de luz resueltos con variables CSS sobre el propio nodo,
  // en lugar de useSpring/useMotionTemplate de framer-motion: sin la librería y
  // sin un re-render de React por cada movimiento del ratón.
  const toVars = useCallback(
    (x: number, y: number) => ({
      "--tilt-x": `${-y * 16}deg`,
      "--tilt-y": `${x * 16}deg`,
      "--spot-x": `${(x + 0.5) * 100}%`,
      "--spot-y": `${(y + 0.5) * 100}%`,
    }),
    []
  );
  const ref = useSmoothPointer<HTMLDivElement>({ toVars });

  return (
    <div ref={ref} className={`relative tilt-card ${className}`}>
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none z-0 tilt-spotlight"
        style={{ ["--spot-color" as string]: `${glowColor}26` }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

