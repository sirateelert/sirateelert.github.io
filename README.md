# Siratee Lertsubthaworn — Personal Website

A clean, 4-page personal site built with Astro + Tailwind CSS. Static, no backend, deploys to
GitHub Pages.

## Pages

- `/` — Home
- `/about` — About
- `/resume` — Resume
- `/contact` — Contact
- `/404` — fallback for broken links (not in navigation, kept for GitHub Pages compatibility)

## Local development

Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

```bash
npm run build     # production build to ./dist
npm run preview   # serve that build locally
```

## Editing your content

Everything is driven by two JSON files — no component code needs to change for routine updates.

- **`src/data/personal.json`** — name, title, bio, contact info, education, experience, teaching
  experience, awards, skills, research interests, philosophy. All four pages read from this file.
- **`src/data/social.json`** — your 5 contact links (Email, LinkedIn, GitHub, WhatsApp, LINE).
  Add/remove/reorder entries here; they render automatically as plain-text underline links via
  `SocialLinks.astro`.
- **`src/data/site.json`** — site URL, theme colors, and loading-screen settings (enable/disable,
  play-once-per-session, duration).
- **`public/files/resume.pdf`** — replace with your real resume, keeping the same filename. The
  Resume page and every "Download Resume" button point at this exact path.

## Design

- Fonts: Inter (body) + Manrope (headings), loaded in `src/styles/global.css`.
- Colors: `tailwind.config.mjs` — `ink`/`paper` (light mode), `midnight`/`cloud` (dark mode), and a
  `gold` accent scale.
- Dark mode: class-based, defaults to OS preference, toggle remembers manual overrides in
  `localStorage`.
- Loading screen: `src/components/LoadingScreen.astro` — your initials "SL" sit centered, then
  part sideways as your full name fades into the gap between them. Plays once per browser session
  (configurable in `site.json`), and is skipped entirely for visitors with reduced-motion
  preferences enabled.

## Deploying to GitHub Pages

You're deploying to `sirateelert.github.io` (a user-site repo), so:

1. Push this project to the `sirateelert.github.io` repository, on the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions.**
3. `astro.config.mjs` is already set to `site: 'https://sirateelert.github.io'` with `base` left
   commented out — correct for a user site. Leave it as-is.
4. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) builds and deploys
   automatically — check the **Actions** tab for progress.

## Project structure

```
├── src/
│   ├── components/       Nav, Footer, SocialLinks, ThemeToggle, LoadingScreen, SEO
│   ├── data/               personal.json, social.json, site.json — all editable content
│   ├── layouts/
│   │   └── BaseLayout.astro  <head>, nav, footer, theme init, wraps every page
│   ├── pages/               index.astro, about.astro, resume.astro, contact.astro, 404.astro
│   └── styles/global.css   Tailwind entry point + base styles
├── public/
│   ├── files/                resume.pdf, vCard
│   ├── images/                favicon assets, headshot placeholder, OG image
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.mjs
└── .github/workflows/deploy.yml
```
