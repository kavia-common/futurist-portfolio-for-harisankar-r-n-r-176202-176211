import React from "react";
import "./Timeline.css";
import SectionHeading from "./SectionHeading";
import { experience } from "../utils/content";
import { ANCHORS } from "../router/anchors";
import TimelineItem from "./TimelineItem";

// PUBLIC_INTERFACE
export default function Timeline() {
  /** Experience section as a vertical timeline */
  return (
    <section id={ANCHORS.experience} className="section">
      <div className="container">
        <SectionHeading title="Experience" subtitle="Where I’ve worked" />
        <div className="timeline">
          {experience.map((e, idx) => (
            <TimelineItem key={idx} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}
