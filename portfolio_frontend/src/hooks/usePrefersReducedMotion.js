import { useEffect, useState } from "react";

// PUBLIC_INTERFACE
export function usePrefersReducedMotion() {
  /** Returns true if user prefers reduced motion */
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(!!mq.matches);
    onChange();
    try {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    } catch {
      // Safari fallback
      mq.addListener(onChange);
      return () => mq.removeListener(onChange);
    }
  }, []);
  return reduced;
}
