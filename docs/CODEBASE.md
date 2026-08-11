# SparkCraft Codebase Map

Last reviewed: August 2026

---

## Directory Structure

```
sparkcraft/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, metadata, Navbar/Footer shell
│   │   ├── page.tsx            # Homepage route (/)
│   │   ├── globals.css         # Global styles, CSS variables, utilities
│   │   └── sparkgreen/
│   │       └── page.tsx        # Sparkgreen route (/sparkgreen)
│   ├── components/
│   │   ├── About.tsx
│   │   ├── BIReports.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Industries.tsx
│   │   ├── Navbar.tsx
│   │   ├── Services.tsx
│   │   ├── TickerStrip.tsx
│   │   ├── WhatMakesDifferent.tsx
│   │   ├── WhoWeServe.tsx
│   │   └── sparkgreen/
│   │       └── SparkgreenContent.tsx
│   └── lib/
│       └── data.ts             # Homepage content constants
├── docs/                       # Technical documentation
├── index.html                  # LEGACY — static homepage
├── sparkgreen.html             # LEGACY — static Sparkgreen page
├── style.css                   # LEGACY — stylesheet
├── script.js                   # LEGACY — client JavaScript
├── next.config.js
├── vercel.json
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── .eslintrc.json
├── .gitignore
├── AGENTS.md
└── package.json
```

**Notable absences:**

- No `public/` directory (no favicon, robots.txt, sitemap, or static assets)
- No `src/app/api/` (no API routes)
- No test directory
- No `.env` or `.env.example` (created during this audit)

---

## Entry Points

| Entry | File | Purpose |
|-------|------|---------|
| Application bootstrap | `src/app/layout.tsx` | HTML shell, fonts, metadata, global nav/footer |
| Homepage | `src/app/page.tsx` | Composes homepage sections |
| Sparkgreen page | `src/app/sparkgreen/page.tsx` | Page metadata + `SparkgreenContent` |
| Content data | `src/lib/data.ts` | Homepage copy and navigation links |
| Styles | `src/app/globals.css` + `tailwind.config.ts` | Design tokens and utilities |

---

## Route Inventory

| Route | Purpose | Primary Components | Data Source | SEO Metadata | Auth | Status |
|-------|---------|-------------------|-------------|--------------|------|--------|
| `/` | Sparkcraft homepage — market intelligence advisory | Hero, TickerStrip, About, Services, WhatMakesDifferent, WhoWeServe, Industries, BIReports, CTA | `src/lib/data.ts` | Root `layout.tsx` metadata | None | Complete |
| `/sparkgreen` | Sparkgreen sustainability subsidiary landing page | SparkgreenContent (9 sections) | Inline arrays in component | `sparkgreen/page.tsx` metadata | None | Complete |
| `/_not-found` | 404 page | Next.js default | — | Inherits root | None | Default |

### Homepage Anchor Sections

| Anchor ID | Component | Purpose |
|-----------|-----------|---------|
| (top) | Hero | Primary headline and CTAs |
| — | TickerStrip | Scrolling service keywords |
| `#about` | About | Company introduction |
| `#services` | Services | Four core advisory services |
| `#expertise` | WhatMakesDifferent | Eight expertise cards |
| `#who-we-serve` | WhoWeServe | Six audience segments |
| `#sectors` | Industries | Ten industry pills |
| — | BIReports | Business intelligence promo |
| `#contact` | CTA | Contact channels |

### Sparkgreen Anchor Sections

| Anchor ID | Section | Purpose |
|-----------|---------|---------|
| (hero) | Hero band | Sparkgreen headline |
| `#gap` | The Gap We Close | Problem statement |
| `#approach` | Measure/Reduce/Offset/Report | Four-step approach |
| `#solutions` | Solutions Portfolio | Six solution cards |
| `#why-sparkgreen` | Differentiators | Three differentiator cards |
| `#who-we-work-with` | Audience segments | Four segment cards |
| `#consultation` | CTA band | Consultation call-to-action |
| `#faq` | FAQ accordion | Five FAQ items |

---

## Component Inventory

### Global Components

| Component | Location | Responsibility | Client/Server | Used By |
|-----------|----------|----------------|---------------|---------|
| Navbar | `src/components/Navbar.tsx` | Fixed header, scroll-aware styling, mobile drawer | Client | All routes (via layout) |
| Footer | `src/components/Footer.tsx` | Site-wide footer with link columns and contact | Client | All routes (via layout) |

### Homepage Components

| Component | Location | Responsibility | Data Source | Props |
|-----------|----------|----------------|-------------|-------|
| Hero | `src/components/Hero.tsx` | Hero section with headline, CTAs, stats | Inline `stats` array | None |
| TickerStrip | `src/components/TickerStrip.tsx` | Infinite horizontal marquee | `data.ts` → `tickerItems` | None |
| About | `src/components/About.tsx` | About section with map SVG | `data.ts` → `aboutParagraphs` | None |
| Services | `src/components/Services.tsx` | Four service cards with tags | `data.ts` → `services` | None |
| WhatMakesDifferent | `src/components/WhatMakesDifferent.tsx` | Eight expertise cards | `data.ts` → `expertiseItems` | None |
| WhoWeServe | `src/components/WhoWeServe.tsx` | Six audience cards (horizontal scroll on mobile) | `data.ts` → `whoWeServeItems` | None |
| Industries | `src/components/Industries.tsx` | Ten industry sector pills | `data.ts` → `industries` | None |
| BIReports | `src/components/BIReports.tsx` | BI report promo panel | `data.ts` → `reportItems` | None |
| CTA | `src/components/CTA.tsx` | Contact section | Hardcoded email/phone | None |

### Sparkgreen Components

| Component | Location | Responsibility | Props |
|-----------|----------|----------------|-------|
| SparkgreenContent | `src/components/sparkgreen/SparkgreenContent.tsx` | Full Sparkgreen page (712 lines) | None |
| FaqItem (internal) | Same file | FAQ accordion item | `{ question, answer, isOpen, onToggle }` |

---

## Shared Utilities

| File | Exports |
|------|---------|
| `src/lib/data.ts` | `navLinks`, `tickerItems`, `aboutParagraphs`, `services`, `expertiseItems`, `whoWeServeItems`, `industries`, `reportItems` |

No shared utility functions (`utils/`, `helpers/`) exist.

---

## Configuration Files

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js config: `output: "standalone"`, image optimization |
| `vercel.json` | Vercel deployment hints |
| `tailwind.config.ts` | Tailwind theme: Sparkcraft + Sparkgreen color palettes |
| `tsconfig.json` | TypeScript: strict mode, `@/*` path alias |
| `postcss.config.js` | PostCSS with Tailwind and Autoprefixer |
| `.eslintrc.json` | ESLint: Next.js core-web-vitals + TypeScript |
| `.gitignore` | Ignores `node_modules`, `.next`, `.env*.local`, `.vercel` |

---

## Design Tokens

### Sparkcraft Brand

| Token | Hex | Tailwind Class |
|-------|-----|----------------|
| Primary | `#1A3C2E` | `spark-primary` |
| Accent | `#C9982A` | `spark-accent` |
| Background | `#F8F6F1` | `spark-bg` |
| Dark | `#0D1F17` | `spark-dark` |
| Text | `#1C1C1C` | `spark-text` |

### Sparkgreen Brand

| Token | Hex | Tailwind Class |
|-------|-----|----------------|
| Primary | `#1E6B3C` | `sg` |
| Dark | `#14522C` | `sg-dark` |
| Lime accent | `#8BC34A` | `sg-lime` |
| Soft background | `#F3F8F4` | `sg-soft` |

### Typography

- Font: Inter (via `next/font/google`)
- Utilities: `tracking-tightest` (-0.04em), `tracking-wider2` (0.2em), `.section-label`

### Layout

- Container: `.container-wide` — max-width 7xl (80rem), responsive padding
- Nav height: 80px (`h-20`)
- Scroll padding: 6rem (`scroll-padding-top`)

---

## Dead / Suspicious Files

| File | Status | Risk |
|------|--------|------|
| `index.html` | Legacy — not used by Next.js | Content drift from Next.js version |
| `sparkgreen.html` | Legacy — not used by Next.js | Content drift |
| `style.css` | Legacy — ~2000 lines | Maintenance burden |
| `script.js` | Legacy — DOM manipulation | Uses `innerHTML` for ticker duplication |

**Recommendation:** Archive or remove legacy files once Next.js is confirmed as the sole production deployment target.

---

## Code Quality Observations

| Finding | Severity | Details |
|---------|----------|---------|
| Duplicated content (Next.js + legacy HTML) | MEDIUM | Two sources of truth for all page content |
| Sparkgreen content not in `data.ts` | LOW | 712-line component with inline data arrays |
| Hero stat mismatch | LOW | Hero says "6 Key Industry Sectors"; Industries lists 10 |
| Copyright year inconsistency | LOW | Footer: © 2025; Sparkgreen footer: © 2026 |
| Double footer on `/sparkgreen` | MEDIUM | Sparkgreen inline footer + global Sparkcraft Footer |
| OpenGraph URL wrong domain | HIGH | References `sparkcraftconsulting.com` instead of `sparkcraft.co.tz` |
| No `public/` directory | MEDIUM | Missing favicon, robots.txt, sitemap, OG images |

---

## Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^14.2.35 | Framework |
| react | 18.3.1 | UI library |
| react-dom | 18.3.1 | DOM rendering |
| framer-motion | ^11.3.6 | Animations |
| lucide-react | ^0.460.0 | Icons |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| typescript | ^5.6.2 | Type checking |
| tailwindcss | ^3.4.13 | CSS framework |
| eslint | ^8.57.1 | Linting |
| eslint-config-next | 14.2.15 | Next.js ESLint rules |
| autoprefixer | ^10.4.20 | CSS prefixing |
| postcss | ^8.4.47 | CSS processing |
| @types/node | ^20.16.5 | Node.js types |
| @types/react | ^18.3.8 | React types |
| @types/react-dom | ^18.3.0 | React DOM types |
