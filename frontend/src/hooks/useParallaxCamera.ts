import { useEffect } from "react";

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Slow cinematic camera drift: publishes window scroll position as a CSS
 * custom property (--scroll-y) that parallax layers multiply. One rAF-
 * throttled listener for the whole page; a no-op under reduced motion.
 */
export function useParallaxCamera() {
  useEffect(() => {
    if (reducedMotion()) return;

    let ticking = false;

    const update = () => {
      document.documentElement.style.setProperty("--scroll-y", String(window.scrollY));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
