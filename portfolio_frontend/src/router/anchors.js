export const ANCHORS = {
  hero: "hero",
  about: "about",
  experience: "experience",
  projects: "projects",
  skills: "skills",
  education: "education",
  achievements: "achievements",
  contact: "contact",
  footer: "footer",
};

// PUBLIC_INTERFACE
export function scrollToAnchor(id) {
  /** Smoothly scrolls to the element with provided id while accounting for fixed navbar offset. */
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const offset = window.scrollY + rect.top - 56; // approx navbar height
  window.scrollTo({ top: offset, behavior: "smooth" });
}
