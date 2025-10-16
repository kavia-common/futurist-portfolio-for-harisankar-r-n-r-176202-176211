import React, { useEffect, useState } from "react";
import "./Hero.css";
import { profile } from "../utils/content";
import { ANCHORS, scrollToAnchor } from "../router/anchors";
import SocialLinks from "./SocialLinks";

// PUBLIC_INTERFACE
export default function Hero() {
  /** Hero with name, rotating roles, CTAs, and social links */
  const roles = profile.roles;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <section id={ANCHORS.hero} className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container">
        <div className="hero-inner">
          <p className="overline">Ocean Professional</p>
          <h1 className="h1">{profile.name}</h1>
          <p className="roles">
            <span className="role">{roles[idx]}</span>
          </p>
          <p className="summary">{profile.summary}</p>
          <div className="cta-row">
            <a
              href={`#${ANCHORS.projects}`}
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor(ANCHORS.projects);
              }}
            >
              View Projects
            </a>
            <a
              href={`#${ANCHORS.contact}`}
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor(ANCHORS.contact);
              }}
            >
              Contact Me
            </a>
          </div>
          <div className="social">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
