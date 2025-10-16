import React from "react";
import "./Projects.css";
import SectionHeading from "./SectionHeading";
import { projects } from "../utils/content";
import { ANCHORS } from "../router/anchors";

// Small inline ProjectCard to avoid missing import
function ProjectCard({ title, description, tags = [], link, repo }) {
  return (
    <article className="project">
      <h3 className="title">{title}</h3>
      <p className="desc">{description}</p>
      <div className="tags">
        {tags.map((t, i) => (
          <span key={i} className="badge">{t}</span>
        ))}
      </div>
      <div className="links">
        {link && (
          <a href={link} target="_blank" rel="noopener">Live</a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener">Code</a>
        )}
      </div>
    </article>
  );
}

// PUBLIC_INTERFACE
export default function Projects() {
  /** Projects section in responsive grid */
  return (
    <section id={ANCHORS.projects} className="section">
      <div className="container">
        <SectionHeading title="Projects" subtitle="Selected work" />
        <div className="projects-grid">
          {projects.map((p, idx) => <ProjectCard key={idx} {...p} />)}
        </div>
      </div>
    </section>
  );
}
