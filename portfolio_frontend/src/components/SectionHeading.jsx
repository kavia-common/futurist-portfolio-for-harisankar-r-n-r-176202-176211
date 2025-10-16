import React from "react";

// PUBLIC_INTERFACE
export default function SectionHeading({ title, subtitle }) {
  /** Standard section heading with subtitle */
  return (
    <header style={{ marginBottom: 24 }}>
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="p-muted">{subtitle}</p>}
    </header>
  );
}
