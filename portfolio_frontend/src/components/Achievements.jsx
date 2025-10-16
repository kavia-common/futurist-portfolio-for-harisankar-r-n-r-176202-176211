import React from "react";
import "./Achievements.css";
import SectionHeading from "./SectionHeading";
import { achievements } from "../utils/content";
import { ANCHORS } from "../router/anchors";

// PUBLIC_INTERFACE
export default function Achievements() {
  /** Notable achievements */
  return (
    <section id={ANCHORS.achievements} className="section">
      <div className="container">
        <SectionHeading title="Achievements" />
        <ul className="ach-list">
          {achievements.map((a, i) => (
            <li key={i} className="surface ach-item">{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
