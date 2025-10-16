import React, { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

// PUBLIC_INTERFACE
export default function AnimatedCounter({ to = 0, duration = 1200 }) {
  /** Counts up to a number; respects reduced motion */
  const reduced = usePrefersReducedMotion();
  const [val, setVal] = useState(reduced ? to : 0);
  useEffect(() => {
    if (reduced) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.round(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, reduced]);
  return <span>{val}</span>;
}
