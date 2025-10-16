import React from "react";

export default function TimelineItem({ company, title, period, description, bullets = [] }) {
  return (
    <article className="timeline-item">
      <div className="timeline-card">
        <div className="timeline-meta">
          <span className="title">{title}</span>
          <span>•</span>
          <span>{company}</span>
          <span className="period">{period}</span>
        </div>
        <p className="p-muted" style={{ marginTop: 6 }}>{description}</p>
        {bullets?.length ? (
          <ul className="timeline-bullets">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
