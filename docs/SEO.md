# SEO Audit — SparkCraft

Last reviewed: August 2026

---

## Current SEO Implementation

### Page Metadata

| Page | Title | Description | Keywords | OpenGraph | Twitter Card | Canonical |
|------|-------|-------------|----------|-----------|-------------|-----------|
| `/` | Sparkcraft Consulting \| Africa Market Intelligence & Advisory | Yes (155 chars) | Yes (5 keywords) | Partial | No | No |
| `/sparkgreen` | Sparkgreen by Sparkcraft \| Creative Carbon Solutions... | Yes | No | Partial | No | No |

### Root Layout Metadata (`layout.tsx`)

```typescript
title: "Sparkcraft Consulting | Africa Market Intelligence & Advisory"
description: "Leading advisory firm providing business intelligence..."
keywords: ["Africa market entry", "Tanzania advisory", ...]
openGraph: {
  title: "Sparkcraft Consulting",
  description: "Africa's Markets, Decoded for You.",
  url: "https://sparkcraftconsulting.com",  // WRONG DOMAIN
  siteName: "Sparkcraft Consulting",
  locale: "en_US",
  type: "website",
}
```

### Sparkgreen Metadata (`sparkgreen/page.tsx`)

```typescript
title: "Sparkgreen by Sparkcraft | Creative Carbon Solutions for Organizations in Tanzania"
description: "Sparkgreen, Sparkcraft's sustainability arm..."
openGraph: {
  url: "https://sparkcraftconsulting.com/sparkgreen",  // WRONG DOMAIN
  ...
}
```

---

## Missing SEO Elements

| Element | Status | Impact | Recommendation |
|---------|--------|--------|----------------|
| `metadataBase` | Missing | Relative OG URLs won't resolve correctly | Set to `https://sparkcraft.co.tz` |
| Canonical URLs | Missing | Potential duplicate content issues | Add `alternates.canonical` per page |
| Open Graph images | Missing | Poor social sharing previews | Add `og:image` (1200×630) |
| Twitter/X cards | Missing | No Twitter preview | Add `twitter:card`, `twitter:image` |
| Favicon | Missing | No `public/` directory | Add `favicon.ico` and app icons |
| `robots.txt` | Missing | No crawl directives | Add `public/robots.txt` or generate dynamically |
| `sitemap.xml` | Missing | No sitemap for search engines | Add `app/sitemap.ts` (Next.js built-in) |
| JSON-LD structured data | Missing | No rich search results | Add Organization schema |
| `hreflang` | Missing | Single language site — low priority | N/A for now |

---

## Heading Hierarchy

### Homepage

| Level | Content | Component |
|-------|---------|-----------|
| H1 | "Africa's Markets, Decoded for You." | Hero |
| H2 | Section titles (About, Services, etc.) | Each section |
| H3 | Card titles, service names | Services, Expertise, etc. |

Heading hierarchy is correct — single H1, logical H2/H3 nesting.

### Sparkgreen

| Level | Content |
|-------|---------|
| H1 | Sparkgreen hero headline |
| H2 | Section titles |
| H3 | Card titles, FAQ questions |

Correct hierarchy maintained.

---

## Content SEO

### Keyword Coverage

Homepage naturally covers:
- Africa market entry, market intelligence, Tanzania advisory
- Mining, oil & gas, regulatory compliance
- Business intelligence, stakeholder management

Sparkgreen covers:
- Carbon footprint, sustainability, Tanzania
- Clean cooking, solar, carbon offset, ESG

### Internal Linking

| From | To | Method |
|------|----|--------|
| Navbar | All homepage sections + /sparkgreen | Anchor links |
| Footer | Services, expertise, company pages | Anchor links |
| Homepage | /sparkgreen | Nav link |
| Sparkgreen | / (via Sparkcraft navbar) | Logo link |

Internal linking is functional but limited to 2 routes.

### Image Alt Text

No `<img>` tags used — all visuals are CSS/SVG/Lucide icons. SVG map has `aria-label`. No image SEO concerns.

---

## Technical SEO

| Factor | Status | Details |
|--------|--------|---------|
| Static generation | Good | All pages pre-rendered at build time |
| Mobile-friendly | Good | Responsive Tailwind design |
| Page speed (estimated) | Good | ~134 kB First Load JS, static content |
| HTTPS | **Broken** | SSL certificate error due to DNS misconfiguration |
| URL structure | Good | Clean routes: `/`, `/sparkgreen` |
| Duplicate content | Risk | Legacy HTML files duplicate Next.js content |
| Indexability | Blocked | HTTPS error prevents crawling |

---

## Issues by Severity

### CRITICAL

| Issue | Evidence | Impact |
|-------|----------|--------|
| HTTPS certificate invalid | DNS points to Hostinger with expired cert | Site unreachable via HTTPS; search engines cannot crawl |

### HIGH

| Issue | Evidence | Impact |
|-------|----------|--------|
| OpenGraph URL wrong domain | `sparkcraftconsulting.com` in metadata | Social shares link to wrong/non-existent domain |
| No sitemap.xml | No `public/sitemap.xml` or `app/sitemap.ts` | Search engines lack page discovery aid |
| No robots.txt | No file in repository | No crawl directives |

### MEDIUM

| Issue | Evidence | Impact |
|-------|----------|--------|
| No OG images | No `og:image` in metadata | Poor social media previews |
| No canonical URLs | No `alternates.canonical` | Potential duplicate content if legacy HTML is also served |
| No structured data | No JSON-LD | Missing rich search result eligibility |
| No favicon | No `public/` directory | Missing browser tab icon |

### LOW

| Issue | Evidence | Impact |
|-------|----------|--------|
| No Twitter cards | No twitter metadata | Suboptimal Twitter sharing |
| No `metadataBase` | Not set in layout | OG URLs may not resolve correctly |
| Legacy HTML indexed | `index.html` at repo root | Potential duplicate content if served |

---

## Recommendations

### Immediate (fix with DNS/SSL resolution)

1. Point DNS to Vercel to restore HTTPS
2. Verify site is crawlable after DNS fix

### Short-term (code changes)

1. Set `metadataBase: new URL('https://sparkcraft.co.tz')` in root layout
2. Update OpenGraph URLs from `sparkcraftconsulting.com` to `sparkcraft.co.tz`
3. Add `app/sitemap.ts` for automatic sitemap generation
4. Add `public/robots.txt` with sitemap reference
5. Add favicon and app icons to `public/`
6. Add OG image (1200×630 branded image)

### Medium-term

1. Add JSON-LD Organization schema to layout
2. Add Twitter card metadata
3. Add canonical URLs per page
4. Remove or block legacy HTML from indexing (if still served)
5. Submit sitemap to Google Search Console (verification TXT record already present)

### Example: metadataBase fix

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://sparkcraft.co.tz'),
  // ... rest of metadata with relative OG URLs
};
```

### Example: sitemap.ts

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://sparkcraft.co.tz', lastModified: new Date(), priority: 1 },
    { url: 'https://sparkcraft.co.tz/sparkgreen', lastModified: new Date(), priority: 0.8 },
  ];
}
```
