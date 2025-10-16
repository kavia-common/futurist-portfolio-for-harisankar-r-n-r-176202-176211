import React from "react";

// PUBLIC_INTERFACE
export default function ParallaxLayer({ children, offset = 0, style = {} }) {
  /** Generic parallax wrapper (not used directly; kept for future extensibility) */
  return <div style={{ transform: `translateY(${offset}px)`, willChange: "transform", ...style }}>{children}</div>;
}
