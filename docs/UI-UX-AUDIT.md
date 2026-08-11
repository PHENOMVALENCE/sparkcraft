# UI/UX Audit — SparkCraft

Last reviewed: August 2026

Scope: Next.js application (`src/`). Legacy HTML/CSS not evaluated for production UX.

---

## Navigation

### Navbar (`Navbar.tsx`)

| Aspect | Assessment | Severity |
|--------|-----------|----------|
| Fixed header with scroll-aware styling | Good — transparent over dark hero, cream background when scrolled | — |
| Desktop navigation | 6 anchor links + CTA button | — |
| Mobile navigation | Slide-down drawer with hamburger toggle | — |
| Active section indication | Missing — no `aria-current` or visual active state for current section | MEDIUM |
| Skip-to-content link | Missing (present in legacy HTML but not in Next.js) | MEDIUM |
| CTA hierarchy | "Start Your Engagement" button prominent in nav | — |
| Sparkgreen page nav | Shows Sparkcraft-branded navbar (not Sparkgreen-branded) | LOW |
| Link type | Uses `<a>` tags for anchor links (correct for same-page scrolling) | — |

### Footer (`Footer.tsx`)

| Aspect | Assessment | Severity |
|--------|-----------|----------|
| Link columns | Services, Expertise, Company, Contact — well organized | — |
| Contact info | Email, phone, location with icons | — |
| Back to top | Uses `href="#"` — works but not ideal (`href="#top"` preferred) | LOW |
| Copyright | © 2025 (Sparkgreen page shows © 2026 — inconsistent) | LOW |

---

## Homepage

### Hero

| Aspect | Assessment |
|--------|-----------|
| Headline | "Africa's Markets, Decoded for You." — strong, clear value proposition |
| Subheadline | Descriptive, mentions Dar es Salaam and continent-wide scope |
| Visual hierarchy | H1 → subtext → CTAs → stats → location badge — logical flow |
| CTAs | Primary: "Start Your Engagement →"; Secondary: "Our Services" |
| Trust indicators | Stats (30+ markets, 4 services, 6 sectors), location badge |
| Background | Dark with grain overlay and accent blur effects — premium feel |

**Issue:** Hero stat says "6 Key Industry Sectors" but Industries section lists 10 sectors.

### Content Sequencing

Homepage flow: Hero → Ticker → About → Services → Expertise → Who We Serve → Industries → BI Reports → CTA

Logical progression from brand introduction through capabilities to contact. Good conversion path.

### Ticker Strip

Infinite horizontal marquee of service keywords. Adds visual energy but:
- No `aria-hidden` on animated content (may distract screen reader users)
- Reduced motion handled via CSS (good)

---

## Typography

| Property | Value | Assessment |
|----------|-------|-----------|
| Font family | Inter (Google Fonts) | Clean, professional, good readability |
| H1 size | 4xl → 7xl responsive | Strong hierarchy |
| Body text | base → lg, leading-8 | Good line height |
| Section labels | Uppercase, 0.24em tracking, accent color | Consistent pattern |
| Font weights | black (900), semibold (600), medium (500) | Clear hierarchy |
| Line lengths | max-w-2xl to max-w-4xl on text blocks | Good readability |

---

## Colors

### Sparkcraft Palette

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Primary | `spark-primary` | `#1A3C2E` | Headings, pills, dark accents |
| Accent | `spark-accent` | `#C9982A` | CTAs, labels, highlights |
| Background | `spark-bg` | `#F8F6F1` | Page background (warm cream) |
| Dark | `spark-dark` | `#0D1F17` | Hero, services section, footer |
| Text | `spark-text` | `#1C1C1C` | Body text |

### Sparkgreen Palette

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Primary | `sg` | `#1E6B3C` | Primary green |
| Dark | `sg-dark` | `#14522C` | Hero/footer |
| Lime | `sg-lime` | `#8BC34A` | Accent/CTA |
| Soft | `sg-soft` | `#F3F8F4` | Background |

### Contrast Assessment

| Combination | Ratio (estimated) | WCAG AA |
|-------------|-------------------|---------|
| `spark-text` on `spark-bg` | ~12:1 | Pass |
| White on `spark-dark` | ~15:1 | Pass |
| `spark-accent` on `spark-dark` | ~5:1 | Pass (large text) |
| `spark-accent` on white | ~3:1 | Fail for small text (CTA buttons use accent bg with dark text — Pass) |
| White/90 on `spark-dark` | ~12:1 | Pass |

---

## Spacing

| Pattern | Value | Consistency |
|---------|-------|-------------|
| Container | max-w-7xl, px-6/lg:px-10 | Consistent across sections |
| Section padding | py-16 to py-24 | Consistent vertical rhythm |
| Card gaps | gap-4 to gap-8 | Consistent grid spacing |
| Nav height | h-20 (80px) | Fixed, scroll-padding-top matches |

---

## Components

### Cards

- Service cards: dark background, numbered, tagged — visually distinct
- Expertise cards: white on cream, numbered — clean grid
- Who We Serve: horizontal scroll on mobile with snap — good mobile UX
- Industry pills: hover animation, non-interactive spans — appropriate

### Buttons

- Primary: rounded-full, accent background, dark text, hover lift
- Secondary: rounded-full, border, hover fill
- Consistent styling across Hero, Navbar, CTA

### Forms

No forms present. Contact is via `mailto:` and `tel:` links only.

---

## Responsiveness

### Breakpoints (Tailwind defaults)

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Default | <640px | Single column, mobile nav, horizontal scroll cards |
| sm | 640px+ | Stats grid 3-col, some text size increases |
| md | 768px+ | Desktop nav visible, larger typography |
| lg | 1024px+ | Wider container padding, multi-column grids |

### Issues

| Issue | Severity | Details |
|-------|----------|---------|
| Who We Serve horizontal scroll | LOW | No scroll indicator or instructions for keyboard users |
| Hero H1 at 4xl on mobile | LOW | Still readable but tight on very small screens |
| Sparkgreen page length | LOW | Long single page — no sub-navigation for sections |
| Double footer on /sparkgreen | MEDIUM | Sparkgreen inline footer + global Sparkcraft Footer |

---

## Accessibility Audit

### Strengths

| Feature | Implementation |
|---------|---------------|
| Semantic HTML | `main`, `section`, `article`, `nav`, `blockquote`, `header`, `footer` |
| Focus styles | `:focus-visible` outlines in `globals.css` |
| Reduced motion | `prefers-reduced-motion` disables scroll behavior and ticker animation |
| FAQ accordion | `aria-expanded` on toggle buttons |
| Decorative elements | `aria-hidden="true"` on icons and background effects |
| SVG accessibility | Africa map has `role="img"` and `aria-label` |
| Language | `lang="en"` on `<html>` |
| Mobile nav toggle | `aria-label="Toggle menu"`, `aria-expanded` |

### Issues

| Issue | Severity | Details | Recommendation |
|-------|----------|---------|----------------|
| No skip-to-content link | MEDIUM | Legacy HTML has one; Next.js layout does not | Add skip link in `layout.tsx` |
| No active nav indication | MEDIUM | Users can't tell which section they're viewing | Add scroll-spy or `aria-current` |
| Ticker not hidden from AT | LOW | Animated marquee may be announced repeatedly | Add `aria-hidden="true"` to ticker |
| Back-to-top `href="#"` | LOW | Causes page jump to top of `<body>` | Use `href="#top"` with id on main |
| Placeholder testimonial | LOW | Sparkgreen page has unattributed quote | Replace with real testimonial or remove |
| Double footer on /sparkgreen | MEDIUM | Two footers stacked — confusing for screen readers | Hide global Footer on Sparkgreen route |
| Horizontal scroll affordance | LOW | Who We Serve carousel lacks scroll hint | Add visual scroll indicator |
| Missing heading on Sparkgreen | LOW | Some sections jump from visual labels to H2 without clear H1 context beyond hero | Review heading hierarchy |

---

## Sparkgreen Page Specific

| Aspect | Assessment |
|--------|-----------|
| Brand differentiation | Distinct green palette — clearly different from Sparkcraft |
| Content depth | Comprehensive — approach, solutions, differentiators, FAQ |
| FAQ accordion | Well-implemented with single-open behavior |
| Testimonial | Placeholder text — needs real content |
| Navigation | Uses Sparkcraft navbar (not Sparkgreen-branded) |
| Footer | Has own inline footer PLUS global Sparkcraft footer |
| Contact | `hello@sparkgreen.co.tz` — separate from Sparkcraft contact |

---

## Content Issues

| Issue | Severity | Location |
|-------|----------|----------|
| Hero "6 sectors" vs 10 listed | LOW | Hero.tsx vs Industries |
| Copyright year mismatch (2025 vs 2026) | LOW | Footer.tsx vs SparkgreenContent |
| OpenGraph URL wrong domain | HIGH | layout.tsx, sparkgreen/page.tsx |
| Placeholder testimonial | MEDIUM | SparkgreenContent.tsx |
| Duplicate HeartHandshake icon | LOW | SparkgreenContent segments array |
| Em dash inconsistency | LOW | Mix of `—` and `-` in copy |

---

## Recommendations Summary

| Priority | Action | Effort |
|----------|--------|--------|
| HIGH | Fix OpenGraph URLs to `sparkcraft.co.tz` | Small |
| HIGH | Point DNS to Vercel (infrastructure, not UI) | Medium |
| MEDIUM | Add skip-to-content link | Small |
| MEDIUM | Resolve double footer on `/sparkgreen` | Small |
| MEDIUM | Replace placeholder testimonial | Content |
| LOW | Add active section indication in nav | Medium |
| LOW | Fix hero stat (6 → 10 or reword) | Small |
| LOW | Align copyright years | Small |
| LOW | Add `aria-hidden` to ticker | Small |
| LOW | Archive legacy HTML/CSS/JS files | Small |
