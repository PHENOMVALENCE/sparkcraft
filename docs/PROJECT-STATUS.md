# SparkCraft Project Status

Last Reviewed: September 2, 2026

---

## Production Status

| Property | Value |
|----------|-------|
| Production Status | **DOWN** — SSL certificate error |
| Production Domain | `sparkcraft.co.tz` |
| Production Platform | Vercel (deployment ready, DNS misconfigured) |
| Repository | `github.com/PHENOMVALENCE/sparkcraft` |
| Production Branch | `main` |
| Development Branch | `codex/master-changes` |

---

## Implemented

- [x] Next.js 14 App Router marketing site
- [x] Homepage with 10 content sections (Hero, Ticker, About, Services, Expertise, Who We Serve, Ventures portfolio, Industries, BI Reports, CTA)
- [x] Sparkgreen subsidiary landing page (`/sparkgreen`)
- [x] FinSpark venture page (`/finspark`) with a route-scoped navy/gold/teal palette
- [x] Parent company presented as **Sparkcraft Technologies** across app, metadata and structured data
- [x] Navbar Ventures dropdown exposing FinSpark and Sparkgreen, dismissible via Escape and outside click
- [x] Venture-specific footers on `/finspark` and `/sparkgreen`
- [x] sitemap.xml and robots.txt (`src/app/sitemap.ts`, `src/app/robots.ts`)
- [x] Dynamic OpenGraph images for all three routes
- [x] Absolute canonical URLs and per-page metadata via `src/lib/seo.ts`
- [x] JSON-LD Organization schema with FinSpark and Sparkgreen brands
- [x] Favicon and Apple touch icon (`src/app/icon.svg`, `src/app/apple-icon.svg`)
- [x] Skip-to-content link and `#main-content` landmark
- [x] Scroll-spy active section indication in navigation
- [x] Responsive design (mobile, tablet, desktop)
- [x] Framer Motion scroll animations
- [x] Mobile navigation drawer
- [x] Scroll-aware navbar styling
- [x] FAQ accordion on Sparkgreen page
- [x] Contact via mailto/tel links
- [x] Tailwind CSS design system with brand tokens
- [x] Vercel deployment configuration (`vercel.json`)
- [x] Static site generation (all pages pre-rendered)
- [x] ESLint configuration
- [x] TypeScript strict mode
- [x] Focus-visible accessibility styles
- [x] Reduced motion support
- [x] Git workflow documentation (AGENTS.md)

---

## Partially Implemented

- [ ] Sparkgreen page (functional; placeholder testimonial still present)
- [ ] Domain configuration (Vercel domain added but DNS still points to Hostinger)
- [ ] SSL/HTTPS (Hostinger cert expired; Vercel cert ready but not receiving traffic)

---

## Known Issues

### Critical

- [ ] **SSL certificate error** — `NET::ERR_CERT_DATE_INVALID` on sparkcraft.co.tz
- [ ] **DNS misconfiguration** — A records point to Hostinger (5.252.75.64, 88.222.223.123), not Vercel
- [ ] **Production site unreachable** — Users cannot access the Vercel deployment via production domain

### High

- [ ] www subdomain points to Hostinger CDN (`cdn.hstgr.net`)

### Medium

- [ ] Legacy HTML/CSS/JS files at the repo root duplicate Next.js content
- [ ] Placeholder testimonial on Sparkgreen page

### Low

- [ ] Legacy root `index.html` / `sparkgreen.html` still carry the old "Sparkcraft Consulting" name (left untouched — they are not the active application)

---

## Open items requiring human confirmation (FinSpark)

- [ ] **Unpublished statistics.** The FinSpark brief proposed "43.1% of Tanzanians using some form of insurance in 2024" and a "~$100B annual African agricultural financing gap". Neither could be traced to a primary institutional source, so neither is published. The `/finspark` evidence band instead uses four sourced figures from the Bank of Tanzania / National Council for Financial Inclusion *Annual Financial Inclusion Report 2024* and FSDT *FinScope Tanzania 2023*.
- [ ] **Data-protection language.** `/finspark` states the model is "designed with the requirements of Tanzania's Personal Data Protection Act in mind, and subject to legal review for each engagement." This deliberately stops short of a compliance claim and needs counsel sign-off before it is strengthened.
- [ ] **Strapline.** The brief's line "Sell the service. Keep the signal." was not used. `/finspark` uses the safer public alternative "Deliver the service. Strengthen the signal." pending stakeholder approval.
- [ ] **Product status.** `/finspark` states the products are in development and makes no deployment, licensing, regulatory or customer claims. Confirm this remains accurate before launch.
- [ ] **Contact details.** `/finspark` reuses `contact@sparkcraft.co.tz` and `+255 756 948 267`. Confirm whether FinSpark should have a dedicated inbox.
- [ ] **Source artifact.** The referenced `FinSpark_OnePager.html` is not present in this repository; the implementation follows `docs/CLAUDE_FINSPARK_IMPLEMENTATION_BRIEF.md` only.

---

## Technical Debt

- [ ] Legacy static files at repo root (`index.html`, `sparkgreen.html`, `style.css`, `script.js`)
- [ ] Sparkgreen content not centralized in data file (712-line component)
- [ ] No test framework or test coverage
- [ ] No CI/CD pipeline beyond Vercel auto-deploy
- [ ] No environment variable abstraction (contact info hardcoded)
- [ ] eslint-config-next version (14.2.15) lags next version (14.2.35)
- [ ] Most section components are client-side unnecessarily

---

## UI/UX Issues

- [ ] Who We Serve horizontal scroll lacks visual affordance on mobile
- [ ] Placeholder testimonial on Sparkgreen

---

## SEO Issues

- [ ] HTTPS broken at the domain level (blocks crawling — see Infrastructure Issues)

Sitemap, robots.txt, OG images, JSON-LD, favicon, canonical URLs and `metadataBase` are all now implemented.

---

## Security Issues

- [ ] SSL certificate invalid (infrastructure)
- [ ] No security headers configured
- [ ] Dev dependency vulnerabilities (npm audit)
- [ ] `.env` not in `.gitignore`

---

## Performance Issues

No critical performance issues. Minor opportunities:

- [ ] Reduce client-side components (convert static sections to server components)
- [ ] Evaluate Framer Motion bundle impact (~134 kB First Load JS is acceptable)

---

## Infrastructure Issues

- [ ] **DNS A records point to Hostinger, not Vercel**
- [ ] **SSL certificate expired on Hostinger**
- [ ] Hostinger Lifetime SSL stuck in "Installing" state (since 2024-11-28)
- [ ] SOA record references `dns-parking.com`
- [ ] Vercel deployment is "Ready" but not receiving domain traffic

---

## Recommended Improvements

### Immediate (unblock production)

1. Update DNS A record for `@` to Vercel IP (`76.76.21.21`) or CNAME to `cname.vercel-dns.com`
2. Update www CNAME to `cname.vercel-dns.com`
3. Verify HTTPS after DNS propagation
4. Keep email DNS records (SPF, MX) intact

### Short-term (code)

1. Remove or archive the legacy HTML/CSS/JS files at the repo root
2. Replace the placeholder testimonial on `/sparkgreen`
3. Centralize Sparkgreen content in a data module, as `/finspark` does

### Medium-term

1. Add security headers
2. Update dev dependencies (`eslint-config-next` lags `next`)
3. Complete the legal review of the FinSpark data-protection and insurance wording (see below)

---

## Future Features

Not currently in scope but potential additions:

- Contact form with email integration
- Analytics (Google Analytics / Plausible)
- Blog/insights section
- CMS integration for content management
- Multi-language support
- Privacy policy and terms pages
- Case studies / project portfolio pages

---

## Maintenance Tasks

See [MAINTENANCE.md](MAINTENANCE.md) for operational checklists.

### Immediate

- [ ] Fix DNS to restore production site
- [ ] Verify SSL after DNS change
- [ ] Test all routes after DNS fix

### This Week

- [ ] Update OpenGraph metadata
- [ ] Add basic SEO files (sitemap, robots.txt, favicon)
- [ ] Remove legacy static files

### This Month

- [ ] Add security headers
- [ ] Update dev dependencies
- [ ] Replace Sparkgreen placeholder content
- [ ] Add structured data
