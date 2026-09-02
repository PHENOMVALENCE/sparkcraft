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
│   │   ├── icon.svg            # Favicon
│   │   ├── apple-icon.svg      # Apple touch icon
│   │   ├── opengraph-image.tsx # Dynamic OG image for /
│   │   ├── robots.ts           # /robots.txt
│   │   ├── sitemap.ts          # /sitemap.xml
│   │   ├── finspark/
│   │   │   ├── page.tsx            # FinSpark route (/finspark)
│   │   │   └── opengraph-image.tsx # Dynamic OG image for /finspark
│   │   └── sparkgreen/
│   │       ├── page.tsx            # Sparkgreen route (/sparkgreen)
│   │       └── opengraph-image.tsx # Dynamic OG image for /sparkgreen
│   ├── components/
│   │   ├── About.tsx
│   │   ├── BIReports.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Industries.tsx
│   │   ├── JsonLd.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx       # Homepage Ventures section
│   │   ├── Services.tsx
│   │   ├── TickerStrip.tsx
│   │   ├── WhatMakesDifferent.tsx
│   │   ├── WhoWeServe.tsx
│   │   ├── ui/                 # Button, Reveal, Section, SectionHeader, StatBand
│   │   ├── finspark/
│   │   │   ├── FinSparkContent.tsx   # Assembles the /finspark page
│   │   │   ├── FinSparkHero.tsx
│   │   │   ├── FinSparkSection.tsx   # Shared section shell + heading
│   │   │   ├── SignalMark.tsx        # Decorative hero SVG
│   │   │   ├── EvidenceBand.tsx      # Sourced statistics + citations
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── OperatingModel.tsx
│   │   │   ├── ProductGrid.tsx       # Score / Tag / Reach / Till
│   │   │   ├── LegibilityLoop.tsx
│   │   │   ├── AudienceGrid.tsx
│   │   │   ├── WhySparkcraft.tsx
│   │   │   ├── FinSparkCTA.tsx
│   │   │   └── FinSparkFooter.tsx
│   │   └── sparkgreen/
│   │       └── SparkgreenContent.tsx
│   └── lib/
│       ├── data.ts             # Homepage + ventures content constants
│       ├── finspark-data.ts    # FinSpark content constants
│       ├── motion.ts           # Framer Motion variants
│       ├── seo.ts              # SITE_NAME/SITE_URL + createPageMetadata
│       └── utils.ts            # cn() class joiner
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

- No `public/` directory — icons, robots, sitemap and OG images are all App Router file conventions under `src/app/`
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
| `/` | Sparkcraft Technologies group homepage | Hero, TickerStrip, About, Services, WhatMakesDifferent, WhoWeServe, Portfolio, Industries, BIReports, CTA | `src/lib/data.ts` | `page.tsx` via `createPageMetadata` | None | Complete |
| `/finspark` | FinSpark — last-mile financial infrastructure | FinSparkContent (9 sections + own footer) | `src/lib/finspark-data.ts` | `finspark/page.tsx` metadata + WebPage JSON-LD | None | Complete |
| `/sparkgreen` | Sparkgreen sustainability venture landing page | SparkgreenContent (9 sections) | Inline arrays in component | `sparkgreen/page.tsx` metadata | None | Complete |
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
| `#ventures` | Portfolio | FinSpark and Sparkgreen venture cards |
| `#sectors` | Industries | Ten industry pills |
| — | BIReports | Business intelligence promo |
| `#contact` | CTA | Contact channels |

### FinSpark Anchor Sections

| Anchor ID | Component | Purpose |
|-----------|-----------|---------|
| (hero) | FinSparkHero | Headline, endorsement and both CTAs |
| — | EvidenceBand | Four sourced statistics with citation links |
| `#problem` | ProblemSection | Four-point problem argument + pull quote |
| `#model` | OperatingModel | What FinSpark is and is not; three principles |
| `#products` | ProductGrid | Score, Tag, Reach, Till |
| `#loop` | LegibilityLoop | Four-stage diagram + text equivalent |
| `#audiences` | AudienceGrid | Four partner types |
| `#why-sparkcraft` | WhySparkcraft | Parent-company positioning |
| `#partner` | FinSparkCTA | Partnership mailto + contact channels |

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
| Navbar | `src/components/Navbar.tsx` | Fixed header, scroll-aware styling, Ventures dropdown, mobile drawer, FinSpark colour variant | Client | All routes (via layout) |
| Footer | `src/components/Footer.tsx` | Group footer; returns `null` on `/finspark` and `/sparkgreen`, which ship their own | Client | All routes (via layout) |
| JsonLd | `src/components/JsonLd.tsx` | Organization schema with FinSpark and Sparkgreen brands | Server | Root layout |

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
| Portfolio | `src/components/Portfolio.tsx` | Ventures section linking to FinSpark and Sparkgreen | `data.ts` → `ventures` | None |
| CTA | `src/components/CTA.tsx` | Contact section | Hardcoded email/phone | None |

### FinSpark Components

All FinSpark components are server components except `FinSparkHero` (mount animation) and the shared `Reveal`/`SectionHeader` primitives.

| Component | Location | Responsibility |
|-----------|----------|----------------|
| FinSparkContent | `src/components/finspark/FinSparkContent.tsx` | Applies `.finspark-theme` and composes the page |
| FinSparkSection | `src/components/finspark/FinSparkSection.tsx` | Shared section shell (`tone`, `grid`) + `FinSparkHeading` |
| FinSparkHero | `src/components/finspark/FinSparkHero.tsx` | H1, endorsement link, both CTAs (client) |
| SignalMark | `src/components/finspark/SignalMark.tsx` | Decorative hero SVG, `aria-hidden` |
| EvidenceBand | `src/components/finspark/EvidenceBand.tsx` | Sourced stats with a visible Sources list |
| ProblemSection | `src/components/finspark/ProblemSection.tsx` | Problem argument and pull quote |
| OperatingModel | `src/components/finspark/OperatingModel.tsx` | Not-a-lender statement + three principles |
| ProductGrid | `src/components/finspark/ProductGrid.tsx` | Four product modules |
| LegibilityLoop | `src/components/finspark/LegibilityLoop.tsx` | Four-stage diagram; CSS-only pulse; `sr-only` text equivalent |
| AudienceGrid | `src/components/finspark/AudienceGrid.tsx` | Four partner audiences |
| WhySparkcraft | `src/components/finspark/WhySparkcraft.tsx` | Parent-company rationale |
| FinSparkCTA | `src/components/finspark/FinSparkCTA.tsx` | Partnership mailto + contact channels |
| FinSparkFooter | `src/components/finspark/FinSparkFooter.tsx` | Route-specific footer and portfolio sign-off |

### Sparkgreen Components

| Component | Location | Responsibility | Props |
|-----------|----------|----------------|-------|
| SparkgreenContent | `src/components/sparkgreen/SparkgreenContent.tsx` | Full Sparkgreen page (712 lines) | None |
| FaqItem (internal) | Same file | FAQ accordion item | `{ question, answer, isOpen, onToggle }` |

---

## Shared Utilities

| File | Exports |
|------|---------|
| `src/lib/data.ts` | `navLinks`, `ventures`, `tickerItems`, `aboutParagraphs`, `services`, `expertiseItems`, `whoWeServeItems`, `industries`, `reportItems` |
| `src/lib/finspark-data.ts` | `FINSPARK_CONTACT`, `evidenceStats`, `evidenceNote`, `problemPoints`, `problemPullQuote`, `operatingModelStatement`, `operatingPrinciples`, `products`, `loopSteps`, `loopOutcome`, `loopStrapline`, `loopTextEquivalent`, `audiences`, `whySparkcraft`, `ctaHeadline`, `ctaBody` |
| `src/lib/seo.ts` | `SITE_URL`, `SITE_NAME`, `createPageMetadata()` |
| `src/lib/motion.ts` | `fadeUp`, `fadeIn`, `stagger()`, `viewport`, `transition` |
| `src/lib/utils.ts` | `cn()` |

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

### FinSpark Brand

Route-scoped. CSS custom properties are declared on `.finspark-theme` in `globals.css`; the same values are exposed as Tailwind `fs-*` classes. Gold and teal-light are used on navy only; teal and ink carry text on the light canvas.

| Token | Hex | Tailwind Class |
|-------|-----|----------------|
| Navy | `#0B2545` | `fs-navy` |
| Navy 2 | `#123A66` | `fs-navy-2` |
| Navy 3 | `#071A33` | `fs-navy-3` |
| Gold | `#C8A951` | `fs-gold` |
| Gold bright | `#DCBE6A` | `fs-gold-bright` |
| Teal | `#0F6A70` | `fs-teal` |
| Teal light | `#1FA0A8` | `fs-teal-light` |
| Ink | `#1B2530` | `fs-ink` |
| Slate | `#55636F` | `fs-slate` |
| Canvas | `#F5F7F8` | `fs-canvas` |
| Line | `#D8DEE3` | `fs-line` |

FinSpark utilities in `globals.css`: `.fs-grid`, `.fs-grid-light`, `.fs-rule`, `.fs-rule-dark`, `.fs-eyebrow`, `.fs-display`, `.fs-heading`, `.fs-signal-track`, `.fs-signal-pulse`.

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
| Legacy files carry the old company name | LOW | Root `index.html`/`sparkgreen.html` still say "Sparkcraft Consulting"; not the active app, left untouched |
| `package.json` name is `sparkcraft-consulting` | LOW | Private package name only; no user-facing impact |

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
