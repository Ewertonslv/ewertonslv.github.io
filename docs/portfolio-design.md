# Portfolio Design Spec — ewertonslv.github.io

**Date:** 2026-06-09 · **Owner:** Ewerton Silva · **Goal:** a personal portfolio that makes an
international recruiter want to hire — recruiter-grade content, modern stack, deployed.

## Tech & architecture
- **Vite + React + TypeScript + Tailwind CSS** (single-page).
- Component-per-section: `Hero`, `About`, `Projects`, `Stack`, `Experience`, `Contact`, plus shared
  `ProjectCard`, `Tag`, `SectionHeader`. Project data in a typed `src/data/projects.ts`.
- **Deploy:** GitHub Actions builds and publishes to **GitHub Pages** (user page → base `/`).
- SEO/OG meta tags, semantic HTML, responsive, accessible, Lighthouse 90+.

## Visual direction
Evolve the existing dark aesthetic (keep what's good): bg `#080810`, **Syne** display + clean text font,
gradient accents (mint → indigo → pink), subtle blurred orbs + noise, glassmorphism cards, smooth
fade-up animations. Refined for a senior feel: strong type hierarchy, generous spacing, micro-interactions.
**All content in English** (international target).

## Sections (curated content)
1. **Hero** — "Ewerton Silva", **AI & Full Stack Engineer**. Tagline: *"I build production systems where
   mistakes are expensive — financial software, tax-compliance engines, and AI agents in production."*
   Status pill: **"Open to remote work"** (no region lock). CTAs: View work · GitHub · Contact.
   Replace vanity stats (stars=0) with meaningful ones (4+ yrs, projects in production).
2. **About** — 4+ years at Viggo Sistemas shipping critical ERP (NF-e/NFC-e, SPED, CBS/IBS tax reform);
   now multi-agent AI systems with the Claude API (orchestration, RAG, MCP).
3. **Featured Projects** — curated, each with impact + links (Live demo / Code / npm):
   - **recepia** — AI WhatsApp receptionist SaaS — Live: recepia.app.br · FastAPI·PostgreSQL·LLM·LGPD
   - **evolution-whatsapp-mcp** — MCP server — npm + Code · TypeScript·MCP SDK
   - **Monarch-IA** — 12-agent orchestration platform — Code · Python·FastAPI·Claude API
   - **liveaula** — full-stack EdTech monorepo — Code · Next.js·Fastify·Expo·Prisma
   - **Landing Pages Monorepo** — 6 conversion templates — Code · React·Vite·Tailwind
4. **Tech Stack** — grouped & curated: Languages · AI/LLM · Frontend · Backend · Data · DevOps.
5. **Experience** — Viggo Sistemas, Software Engineer (4+ yrs) — impact bullets (e-invoicing, CBS/IBS,
   SPED, AI squads, PostgreSQL).
6. **Contact / Footer** — email · LinkedIn · GitHub · "Open to remote work". Correct year (2026).

## Out of scope (v1)
- Resume PDF, blog, testimonials, i18n toggle. (Can add later.)

## Notes
- Build in `Projetos github/ewertonslv.github.io` (synced with remote). The older copy in
  `Documents/Portifolio/ewertonslv.github.io` becomes obsolete after this ships.
- Pages source must be set to **GitHub Actions** in repo Settings → Pages.
