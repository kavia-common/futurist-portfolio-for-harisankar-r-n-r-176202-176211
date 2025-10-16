import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { ANCHORS, scrollToAnchor } from "../router/anchors";
import { useScrollSpy } from "../hooks/useScrollSpy";

// PUBLIC_INTERFACE
export default function Navbar({ theme, onToggleTheme }) {
  /** Fixed, semi-transparent navbar with active link highlight */
  const ids = Object.values(ANCHORS);
  const activeId = useScrollSpy(ids);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`navbar-wrap ${scrolled ? "is-scrolled" : ""}`} role="navigation" aria-label="Primary">
      <div className="container navbar">
        <a className="brand" href={`#${ANCHORS.hero}`} onClick={(e) => { e.preventDefault(); scrollToAnchor(ANCHORS.hero); }}>
          <span aria-hidden="true">🌊</span> Harisankar
        </a>
        <nav className="links" aria-label="Section links">
          {ids.slice(0, -1).map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollToAnchor(id); }}
              className={activeId === id ? "active" : ""}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <div className="actions">
          <button
            className="theme"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <a
            className="cta"
            href={`#${ANCHORS.contact}`}
            onClick={(e) => { e.preventDefault(); scrollToAnchor(ANCHORS.contact); }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
