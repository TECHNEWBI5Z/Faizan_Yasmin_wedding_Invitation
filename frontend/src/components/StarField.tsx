import { useMemo } from "react";

interface Star {
  left: string;
  top: string;
  size: string;
  delay: string;
  twinkle: string;
  opacity: string;
}

export function StarField({ count = 70 }: { count?: number }) {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: `${(Math.random() * 100).toFixed(2)}%`,
        top: `${(Math.random() * 100).toFixed(2)}%`,
        size: `${(1 + Math.random() * 1.8).toFixed(2)}px`,
        delay: `${(Math.random() * 6).toFixed(2)}s`,
        twinkle: `${(3 + Math.random() * 4).toFixed(2)}s`,
        opacity: (0.35 + Math.random() * 0.5).toFixed(2),
      })),
    [count],
  );

  return (
    <div className="starfield" aria-hidden="true" data-testid="starfield">
      {stars.map((star, index) => (
        <span
          key={index}
          className="star"
          style={
            {
              left: star.left,
              top: star.top,
              "--size": star.size,
              "--delay": star.delay,
              "--twinkle": star.twinkle,
              "--base-opacity": star.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
