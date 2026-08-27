'use client';

import { useCallback } from "react";
import { useSmoothPointer } from "@/lib/use-smooth-pointer";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({ children, className = "", href, target, rel }: MagneticButtonProps) {
  // Efecto magnético con variables CSS en vez de useSpring de framer-motion.
  const toVars = useCallback(
    (x: number, y: number) => ({
      "--magnet-x": `${x * 26}px`,
      "--magnet-y": `${y * 26}px`,
    }),
    []
  );
  const ref = useSmoothPointer<HTMLAnchorElement>({ ease: 0.2, toVars });

  return (
    <a ref={ref} href={href} target={target} rel={rel} className={`magnetic ${className}`}>
      {children}
    </a>
  );
}

