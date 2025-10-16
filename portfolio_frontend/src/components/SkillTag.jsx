import React from "react";

export default function SkillTag({ label }) {
  return (
    <span
      className="badge"
      style={{ background: "rgba(17,24,39,0.04)", color: "var(--color-text)", borderColor: "rgba(17,24,39,0.12)" }}
    >
      {label}
    </span>
  );
}
