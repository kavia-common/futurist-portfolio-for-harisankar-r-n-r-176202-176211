import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

// PUBLIC_INTERFACE
export default function SectionWrapper({ id, children, className = "" }) {
  /** Provides standardized section spacing, max-width, and reveal-on-scroll */
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    el.classList.add("reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <section id={id} className={`section ${className}`} ref={ref}>
      <div className="container">{children}</div>
    </section>
  );
}
