# SparkCraft UI/UX Revision

Last updated: August 2026

---

## Goals

This revision improves the SparkCraft website from a card-heavy marketing layout into a polished consultancy and market intelligence experience — without changing brand identity or business content.

Primary objectives:

- Reduce excessive card-based layouts
- Improve visual hierarchy and section flow
- Introduce editorial, structured layout patterns
- Add purposeful microinteractions and navigation feedback
- Improve accessibility and responsive behavior
- Maintain brand colors, tone, and content direction

---

## Design Direction

**Tone:** Authoritative, premium, analytical, trustworthy, modern, intentional.

**Avoided:** Playful startup aesthetics, excessive rounded cards, flashy animations, glassmorphism, oversized decorative elements.

**Preserved:** Dark forest green (`#1A3C2E`), warm cream background (`#F8F6F1`), gold accent (`#C9982A`), Inter typography, professional copy.

---

## Design System

### Color Tokens (Tailwind)

| Token | Hex | Usage |
|-------|-----|-------|
| `spark-primary` | `#1A3C2E` | Headings, emphasis |
| `spark-accent` | `#C9982A` | CTAs, labels, highlights |
| `spark-bg` | `#F8F6F1` | Page background |
| `spark-surface` | `#FFFFFF` | Light section surfaces |
| `spark-dark` | `#0D1F17` | Dark sections, footer |
| `spark-text` | `#1C1C1C` | Body text |
| `spark-muted` | `#5C5C5C` | Secondary text |
| `spark-border` | `#E5E0D4` | Dividers, borders |

Sparkgreen tokens (`sg`, `sg-dark`, `sg-lime`, `sg-soft`) unchanged.

### Typography Scale

| Class | Usage |
|-------|-------|
| `text-display-xl` | Hero H1 (fluid clamp) |
| `text-display-md` | Section H2 |
| `text-display-sm` | Subsection H3 |
| `text-body-lg` | Lead paragraphs |
| `section-label` | Uppercase section labels |

### Layout Primitives

| Component | Location | Purpose |
|-----------|----------|---------|
| `Section` | `src/components/ui/Section.tsx` | Consistent spacing, tone, dividers |
| `SectionHeader` | `src/components/ui/SectionHeader.tsx` | Label + title + description |
| `Button` | `src/components/ui/Button.tsx` | Primary/secondary/ghost/dark variants |
| `Reveal` | `src/components/ui/Reveal.tsx` | Scroll-triggered fade-up |
| `StatBand` | `src/components/ui/StatBand.tsx` | Editorial statistics row |

### Utility Classes (`globals.css`)

- `.editorial-row` / `.editorial-row-dark` — icon/number + content rows
- `.link-underline` — animated underline on hover
- `.skip-link` — keyboard skip-to-content
- `.section-divider-top/bottom` — section border transitions

---

## Card Reduction Strategy

### Before → After

| Section | Before | After |
|---------|--------|-------|
| Hero stats | 3 bordered stat cards | Unified `StatBand` with dividers |
| About highlights | 3 small cards under map | Inline principles list with dividers |
| Services | 4 large service cards (2×2 grid) | Tabbed navigation + detail panel |
| Expertise | 8 white cards (4-column grid) | Two-column numbered editorial list |
| Who We Serve | 6 bordered cards (carousel/grid) | Divided editorial rows |
| Industries | 10 pill buttons | Two-column numbered sector list |
| BI Reports | Nested card inside split panel | Clean split layout, plain checklist |
| CTA contact | 3 bordered contact cards | Divided horizontal contact band |
| Sparkgreen approach | 4 cards | Horizontal process rows |
| Sparkgreen solutions | 6 cards | Editorial icon rows |
| Sparkgreen differentiators | 3 cards | Editorial rows |
| Sparkgreen segments | 4 cards | Editorial rows |
| Sparkgreen FAQ | Bordered card accordions | Divider-style accordions |

**Estimated card reduction:** ~35 card containers removed or replaced with editorial patterns.

---

## New Layout Patterns

1. **Tabbed service navigation** — Services section uses left nav + sticky detail panel
2. **Editorial numbered lists** — Expertise and industries use number-led rows
3. **Divided content bands** — Stats and contact info use horizontal dividers
4. **Split editorial layouts** — About, BI Reports use text + visual columns without boxes
5. **Process rows** — Sparkgreen approach as sequential horizontal steps
6. **Icon-led rows** — Solutions, differentiators, segments as bordered lists

---

## Interaction Principles

- **Scroll reveal:** Subtle fade-up via `Reveal` component (respects `prefers-reduced-motion`)
- **Nav active state:** Intersection Observer highlights current section
- **Nav height:** Reduces from 80px to 64px on scroll
- **Link underlines:** Footer and Sparkgreen nav use animated underlines
- **Service tabs:** Click to switch service detail (keyboard accessible buttons)
- **FAQ accordions:** Expand/collapse with `aria-expanded`
- **Back to top:** Footer button with smooth scroll (not `href="#"`)

Animations use 200ms transitions. No decorative-only motion.

---

## Responsive Approach

- Fluid typography via `clamp()` in display sizes
- Hero: stacked on mobile, two-column on desktop
- Services tabs: stacked nav above content on mobile
- Expertise: single column on mobile, two columns on md+
- Contact band: vertical stack on mobile, horizontal on sm+
- Tested breakpoints: 320px–1440px+ via Tailwind responsive utilities

---

## Accessibility Improvements

- Skip-to-content link in root layout
- `#main-content` landmark on both routes
- `aria-current` on active nav sections
- Ticker marked `aria-hidden` (decorative)
- FAQ buttons with `aria-expanded`
- Semantic headings maintained (single H1 per page)
- Focus-visible styles preserved
- Footer back-to-top as `<button>` with label

---

## Performance

- No new dependencies added
- Reused Framer Motion (already in project)
- Removed redundant card DOM nodes
- Build size: homepage ~144 kB First Load JS (acceptable)
- Static generation unchanged

---

## Files Changed

### New

- `src/lib/motion.ts`
- `src/lib/utils.ts`
- `src/components/ui/Section.tsx`
- `src/components/ui/SectionHeader.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Reveal.tsx`
- `src/components/ui/StatBand.tsx`

### Modified

- `tailwind.config.ts` — extended tokens and typography
- `src/app/globals.css` — design utilities
- `src/app/layout.tsx` — skip link, metadataBase fix
- `src/app/page.tsx` — main landmark
- `src/app/sparkgreen/page.tsx` — OG URL fix
- All homepage section components
- `src/components/sparkgreen/SparkgreenContent.tsx`

---

## Future Recommendations

- Add scroll-spy indicator (progress bar) for long pages
- Create OG image for social sharing
- Consider reducing Framer Motion usage in static sections (convert to CSS)
- Add contact form with validation when backend is available
- A/B test hero left-align vs center on conversion metrics
