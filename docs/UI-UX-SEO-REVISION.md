# SparkCraft UI/UX & SEO Revision — Landing Experience

Last updated: August 2026

---

## Hero Strategy

The homepage hero uses a **single-viewport composition** (`100svh` / `100dvh`) so that on typical desktop and laptop screens (1366×768 through 1920×1080), visitors see:

- Floating navigation
- Positioning eyebrow
- H1 headline and supporting copy
- Primary and secondary CTAs
- Location line
- Africa map visual
- Three key metrics (30+ markets, 4 services, 10 sectors)

### Implementation

| Technique | Purpose |
|-----------|---------|
| `min-height: 100svh / 100dvh` | Fit hero to initial viewport |
| `clamp()` headline sizing (`.hero-headline`) | Fluid typography without overflow |
| `--nav-offset: clamp(5rem, 8vh, 6.5rem)` | Account for floating navbar |
| Compact `StatBand` | Metrics integrated at hero bottom |
| `max-height: min(38vh, 360px)` on map | Proportional map scaling |

Mobile does **not** force single-viewport fit — content stacks naturally with readable spacing.

---

## Floating Navigation

| Property | Value |
|----------|-------|
| Position | Fixed, centered, `max-w-6xl` |
| Offset | `top: 12–16px`, horizontal padding |
| Shape | `rounded-2xl` (refined, not pill) |
| At hero top | Dark translucent (`bg-spark-dark/80`), blur, subtle border |
| After scroll | Cream surface (`bg-spark-bg/92`), shadow |
| Height | ~58–62px |
| CTA | Gold button with arrow micro-interaction |

### Scroll behavior

- Sticky/fixed at all times
- Background opacity increases on scroll
- Active section tracking via Intersection Observer (homepage)
- Mobile menu locks body scroll

---

## Interaction System

| Element | Behavior |
|---------|----------|
| Section content | Fade-up on enter (`Reveal`, 500ms) |
| Hero content | Animate on mount |
| Hero stats | Staggered mount animation |
| Nav links | Animated underline |
| CTA button | Arrow translate on hover |
| Stat band items | Subtle hover background |
| Reduced motion | Animations disabled via `useReducedMotion` |

Duration: 200–500ms. Movement: 8–24px translateY.

---

## Favicon & App Icons

| File | Purpose |
|------|---------|
| `src/app/icon.svg` | Browser tab favicon (32×32, "S" mark + gold dot) |
| `src/app/apple-icon.svg` | Apple touch icon (180×180) |

Design: Simplified SparkCraft initial on dark green — readable at 16px.

Configured in root `layout.tsx` metadata `icons`.

---

## SEO Metadata Strategy

### Shared utilities

- `src/lib/seo.ts` — `createPageMetadata()` helper
- `SITE_URL`: `https://sparkcraft.co.tz`
- Canonical URLs on every public page
- Open Graph + Twitter cards on every public page

### Dynamic OG images

- `src/app/opengraph-image.tsx` — Homepage (1200×630, edge runtime)
- `src/app/sparkgreen/opengraph-image.tsx` — Sparkgreen page

### Structured data

- `src/components/JsonLd.tsx` — `ProfessionalService` schema
- Factual fields only: name, url, description, address (Dar es Salaam), areaServed (Africa), email, phone

### Sitemap & robots

- `src/app/sitemap.ts` — `/` and `/sparkgreen`
- `src/app/robots.ts` — Allow all, sitemap reference

---

## SEO Route Audit

| Route | Title | Description | Canonical | OG | Twitter | Structured Data | Indexable |
|-------|-------|-------------|-----------|-----|---------|-----------------|-----------|
| `/` | Sparkcraft Consulting \| Africa Market Intelligence & Advisory | Unique (155 chars) | `https://sparkcraft.co.tz` | Yes + image | Yes + image | Organization (layout) | Yes |
| `/sparkgreen` | Sparkgreen by Sparkcraft \| Creative Carbon Solutions... | Unique (160 chars) | `https://sparkcraft.co.tz/sparkgreen` | Yes + image | Yes + image | Organization (layout) | Yes |

---

## Responsive Behavior

| Breakpoint | Hero behavior |
|------------|---------------|
| 1920×1080 | Full viewport fit, side-by-side layout |
| 1440×900 | Reduced gaps, compact stats |
| 1366×768 | Minimum target — all elements visible |
| 768×1024 | Stacked or compact two-column |
| 375×812 | Stacked, full-width CTAs, map centered |

---

## Accessibility

- Skip-to-content link preserved
- `#main-content` landmark
- `aria-current` on active nav
- Mobile menu `aria-expanded`
- Body scroll lock when menu open
- `prefers-reduced-motion` respected in Reveal and StatBand
- Semantic landmarks unchanged

---

## Performance

- No new dependencies
- OG images generated at edge (no static PNG committed)
- SVG favicons (minimal weight)
- Hero uses CSS `svh/dvh` (no JS viewport hacks)
- Map dimensions constrained to prevent CLS

---

## Files Added/Modified

**New:** `src/lib/seo.ts`, `src/components/JsonLd.tsx`, `src/components/AfricaMap.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/opengraph-image.tsx`, `src/app/sparkgreen/opengraph-image.tsx`, `src/app/icon.svg`, `src/app/apple-icon.svg`

**Modified:** `Hero.tsx`, `Navbar.tsx`, `StatBand.tsx`, `Reveal.tsx`, `layout.tsx`, `page.tsx`, `sparkgreen/page.tsx`, `globals.css`, `SparkgreenContent.tsx`
