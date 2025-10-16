import React, { useEffect, useState } from "react";
import "./index.css";
import "./App.css";

// Sections and components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import SkillsCloud from "./components/SkillsCloud";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Section styles (ensure CSS is bundled)
import "./components/Navbar.css";
import "./components/Hero.css";
import "./components/About.css";
import "./components/Timeline.css";
import "./components/Projects.css";
import "./components/SkillsCloud.css";
import "./components/Education.css";
import "./components/Achievements.css";
import "./components/Contact.css";
import "./components/Footer.css";

import { ANCHORS as NAV_ANCHORS } from "./router/anchors";
import { useScrollSpy } from "./hooks/useScrollSpy";

// Helper hook to persist and apply theme
function useInitialTheme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}

// PUBLIC_INTERFACE
function App() {
  /** Main SPA composition rendering all portfolio sections with scroll spy highlighting. */
  const [theme, setTheme] = useInitialTheme();
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // Track active section for Navbar highlighting via scroll spy
  const sectionIds = Object.values(NAV_ANCHORS);
  const activeId = useScrollSpy(sectionIds);

  // Optional: set document title
  useEffect(() => {
    document.title = "Harisankar R N R — Ocean Professional Portfolio";
  }, []);

  return (
    <div className="App">
      <a href={`#${NAV_ANCHORS.hero}`} className="skip-link">Skip to content</a>
      <div className="bg-noise" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} activeId={activeId} />
      <main className="main" id={NAV_ANCHORS.hero} tabIndex="-1">
        {/* SectionWrapper internally sets id and container; components also manage their content */}
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <SkillsCloud />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
