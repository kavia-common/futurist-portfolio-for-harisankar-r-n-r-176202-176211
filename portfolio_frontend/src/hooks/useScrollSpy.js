import { useEffect, useState } from "react";

// PUBLIC_INTERFACE
export function useScrollSpy(ids = [], options = { rootMargin: "-40% 0px -55% 0px" }) {
  /** Observes sections by id and returns currently active section id. */
  const [activeId, setActiveId] = useState(ids[0] || null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: options.rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, options.rootMargin]);

  return activeId;
}
