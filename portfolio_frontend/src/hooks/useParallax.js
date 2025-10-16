import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

// PUBLIC_INTERFACE
export function useParallax(strength = 0.2) {
  /** Returns y offset based on scroll for parallax transforms */
  const [offset, setOffset] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setOffset(y * strength);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength, reduced]);

  return offset;
}
