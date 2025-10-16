import React from "react";
import { socials } from "../utils/content";

import gh from "../assets/icons/github.svg";
import li from "../assets/icons/linkedin.svg";
import lc from "../assets/icons/leetcode.svg";
import md from "../assets/icons/medium.svg";

const iconMap = { github: gh, linkedin: li, leetcode: lc, medium: md };

// PUBLIC_INTERFACE
export default function SocialLinks({ size = 22 }) {
  /** Renders social icons with links */
  return (
    <nav aria-label="Social links" style={{ display: "flex", gap: 12 }}>
      {socials.map((s) => {
        const href = `${s.url}${s.username || ""}`;
        return (
          <a
            key={s.id}
            href={href}
            aria-label={s.label}
            target="_blank"
            rel="noopener"
            style={{
              width: size,
              height: size,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 8,
              borderRadius: 10,
              border: "1px solid var(--border-color)",
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-sm)",
              transition: "transform .2s ease, background .2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img src={iconMap[s.id]} alt="" width={size} height={size} />
          </a>
        );
      })}
    </nav>
  );
}
