import React from "react";
import "./Projects.css";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { projects } from "../utils/content";
import ProjectCard from "./ProjectCard";

// PUBLIC_INTERFACE
export default function Projects() {
  /** Projects section in responsive grid */
  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Projects" subtitle="Selected work" />
      <div className="projects-grid">
        {projects.map((p, idx) => <ProjectCard key={idx} {...p} />)}
      </div>
    </SectionWrapper>
  );
}
