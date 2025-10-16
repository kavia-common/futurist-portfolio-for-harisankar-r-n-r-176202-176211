import React from "react";
import "./Education.css";
import SectionHeading from "./SectionHeading";
import { education } from "../utils/content";
import { ANCHORS } from "../router/anchors";

// PUBLIC_INTERFACE
export default function Education() {
  /** Education history */
  return (
    <section id={ANCHORS.education} className="section">
      <div className="container">
        <SectionHeading title="Education" />
        <div className="edu">
          {education.map((e, i) => (
            <article key={i} className="surface edu-item">
              <h3>{e.school}</h3>
              <p className="p-muted">{e.degree} • {e.period}</p>
              {e.details ? <p>{e.details}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
