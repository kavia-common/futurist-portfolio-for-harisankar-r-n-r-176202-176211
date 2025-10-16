# Ocean Professional Portfolio - Harisankar R N R

Single-page, responsive portfolio built with React and vanilla CSS. Ocean Professional palette with subtle animations, dark mode, scroll spy, and a contact form with multiple submission strategies.

## Quick start

- Node 16+ recommended
- Install: `npm install`
- Start: `npm start`
- Test: `npm test`
- Build: `npm run build`

The app runs without any environment variables. The Contact section will display “Email not configured” when submission is attempted without configuration.

## Environment variables

Copy `.env.example` to `.env` and fill as needed:

- REACT_APP_CONTACT_ENDPOINT: Optional HTTP endpoint to receive `{ name, email, message }` JSON
- REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY: EmailJS REST fallback
- REACT_APP_ANALYTICS_ID: Optional analytics identifier (stub only)

Priority:
1) If CONTACT_ENDPOINT is set, it is used.
2) Else if EmailJS variables are set, EmailJS REST is used.
3) Else submission shows “Email not configured”.

## Theme

Ocean Professional colors:
- primary #2563EB, secondary/success #F59E0B, error #EF4444
- text #111827, background #f9fafb, surface #ffffff

CSS variables are in `src/index.css`. Dark mode toggles via the navbar button storing preference in localStorage. Reduced motion is respected via `prefers-reduced-motion`.

## Structure

- src/components: Navbar, Hero, About, Timeline, Projects, SkillsCloud, Education, Achievements, Contact, Footer, and small UI pieces
- src/hooks: useScrollSpy, useParallax, usePrefersReducedMotion
- src/utils: content placeholders, validations, email strategies, analytics stub
- src/router/anchors.js: Anchor constants and smooth scroll helper

## Accessibility

- Semantic sectioning and headings
- Focus outlines, skip link, alt attributes, aria labels
- Prefers-reduced-motion respected

## Notes

- External links use `target=_blank` with `rel="noopener"`.
- No heavy animation libraries; animations are CSS/IntersectionObserver based.
- Replace content in `src/utils/content.js` and assets under `src/assets` with your own.
