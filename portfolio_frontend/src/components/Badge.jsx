import React from "react";

// PUBLIC_INTERFACE
export default function Badge({ children, color = "primary", ariaLabel }) {
  /** Renders a rounded badge with optional aria-label */
  return (
    <span
      className="badge"
      style={
        color !== "primary"
          ? {
              background: "rgba(245,158,11,0.12)",
              color: "var(--color-secondary)",
              borderColor: "rgba(245,158,11,0.3)",
            }
          : undefined
      }
      aria-label={ariaLabel}
    >
      {children}
    </span>
  );
}
