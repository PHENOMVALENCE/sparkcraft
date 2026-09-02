# Changelog

All notable documentation and project changes for SparkCraft.

Format based on [Keep a Changelog](https://keepachangelog.com/).

---

## [Unreleased]

### Added
- Complete technical documentation suite (`docs/` directory)
- Root `README.md` as project entry point
- `.env.example` placeholder for future environment variables
- Technical audit report (`docs/AUDIT-REPORT.md`)
- Project status tracker (`docs/PROJECT-STATUS.md`)
- Domain/DNS/SSL documentation with verified DNS records
- UI/UX, SEO, and security audit documents
- Maintenance and troubleshooting guides

### Documented
- Technology stack: Next.js 14.2.35, React 18.3.1, TypeScript, Tailwind CSS
- Application architecture: static marketing site, 2 routes, no backend
- Deployment pipeline: GitHub → Vercel → production
- Critical DNS misconfiguration: domain points to Hostinger, not Vercel
- SSL incident root cause: expired Hostinger certificate due to DNS
- Legacy static files at repo root (pre-Next.js implementation)
- 41 audit findings across architecture, code, UI, SEO, security, and infrastructure

### Verified
- Production build passes (`npm run build`)
- ESLint passes with no warnings or errors
- DNS A records for sparkcraft.co.tz resolve to Hostinger IPs
- SPF and Google verification TXT records present
- No environment variables in use
- No secrets committed to repository

---

## [2026-09-02] — Sparkcraft Technologies rebrand and FinSpark launch page

### Added
- `/finspark` route: FinSpark venture page with hero, sourced evidence band, problem statement, operating model, four product modules (Score, Tag, Reach, Till), the Legibility Loop diagram, audience grid, parent-company rationale, partnership CTA and a route-specific footer
- `src/lib/finspark-data.ts` — typed FinSpark content, including per-statistic sources and reporting years
- `src/components/finspark/` — 13 components, server-rendered except the hero
- `src/app/finspark/opengraph-image.tsx` — route-specific 1200x630 OG image
- `src/components/Portfolio.tsx` — homepage Ventures section introducing FinSpark and Sparkgreen (`#ventures`)
- Navbar Ventures dropdown (Escape / outside-click dismissible) and a FinSpark colour variant
- Footer Ventures column
- Route-scoped FinSpark design tokens (`.finspark-theme`) and utilities in `globals.css`; `fs-*` Tailwind colours
- `WebPage` + `Brand` JSON-LD on `/finspark`; `Brand` entries for FinSpark and Sparkgreen on the Organization schema
- `/finspark` added to `sitemap.xml`

### Changed
- Parent company renamed from **Sparkcraft Consulting** to **Sparkcraft Technologies** across metadata, structured data, navbar, footer, homepage copy and OG artwork
- Positioning reframed from advisory firm to technology and market-infrastructure group
- Organization JSON-LD type changed from `ProfessionalService` to `Organization`
- Global `Footer` now returns `null` on `/finspark` as well as `/sparkgreen`

### Notes
- The proposed statistics "43.1% insurance usage (2024)" and "~$100B African agricultural financing gap" were not verifiable against a primary institutional source and were **not published**. See `docs/PROJECT-STATUS.md` for the full list of items awaiting human and legal confirmation.
- Legacy root `index.html`, `sparkgreen.html`, `style.css` and `script.js` were intentionally left untouched.

### Validation
- `npm run lint` — passed, no warnings or errors
- `npm run build` — passed, 9 static pages generated

---

## [1.0.0] — Prior to August 2026

### Existing (pre-audit)
- Next.js 14 App Router implementation
- Homepage with 9 content sections
- Sparkgreen subsidiary page at `/sparkgreen`
- Vercel deployment configuration
- Tailwind CSS design system
- Framer Motion animations
- Legacy static HTML/CSS/JS files (original implementation)
- GitHub repository with `main` and `codex/master-changes` branches
- Vercel production deployment (application ready, DNS misconfigured)
