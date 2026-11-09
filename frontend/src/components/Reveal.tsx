import type { ReactNode } from "react";

import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
