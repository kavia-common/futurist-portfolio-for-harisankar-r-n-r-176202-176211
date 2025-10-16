import React from "react";
import "./About.css";
import SectionHeading from "./SectionHeading";
import Badge from "./Badge";
import { highlights } from "../utils/content";
import { ANCHORS } from "../router/anchors";

// PUBLIC_INTERFACE
export default function About() {
  /** About section with highlight chips and quick stats */
  return (
    <section id={ANCHORS.about} className="section">
      <div className="container">
        <SectionHeading title="About" subtitle="Who I am and what I build" />
        <div className="about-grid">
          <div className="about-card surface">
            <p>
              I’m an engineer focused on shipping intelligent products. I love turning ideas into
              reliable systems that operate in the wild — from ML pipelines to robotics stacks and
              scalable backends.
            </p>
            <div className="chips">
              {highlights.map((h, i) => (
                <Badge key={i}>{h}</Badge>
              ))}
            </div>
          </div>
          <div className="about-stats surface" aria-label="Quick stats">
            <div>
              <span className="num">4+</span>
              <span className="lbl">Years Experience</span>
            </div>
            <div>
              <span className="num">20+</span>
              <span className="lbl">Projects</span>
            </div>
            <div>
              <span className="num">10+</span>
              <span className="lbl">Articles & Talks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
