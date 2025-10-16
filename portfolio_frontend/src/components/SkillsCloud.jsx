import React from "react";
import "./SkillsCloud.css";
import SectionHeading from "./SectionHeading";
import { skills } from "../utils/content";
import { ANCHORS } from "../router/anchors";

// PUBLIC_INTERFACE
export default function SkillsCloud() {
  /** Skills grouped by category as tag cloud */
  return (
    <section id={ANCHORS.skills} className="section">
      <div className="container">
        <SectionHeading title="Skills" subtitle="Tooling and stacks I use" />
        <div className="skills-grid">
          {Object.entries(skills).map(([cat, list]) => (
            <div key={cat} className="surface skill-col">
              <h3 className="cat">{cat}</h3>
              <div className="tags">
                {list.map((s, i) => <span key={i} className="badge">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
