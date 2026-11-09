import { useEffect, useRef } from "react";

/**
 * Adds `reveal` + (later) `is-visible` classes when the element scrolls
 * into view. Respects prefers-reduced-motion by revealing immediately.
 */
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.classList.add("reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.style.transitionDelay = `${delayMs}ms`;
            element.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delayMs]);

  return ref;
}
