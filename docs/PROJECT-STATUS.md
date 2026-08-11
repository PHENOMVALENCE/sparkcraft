# SparkCraft Project Status

Last Reviewed: August 11, 2026

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
- [x] Homepage with 9 content sections (Hero, Ticker, About, Services, Expertise, Who We Serve, Industries, BI Reports, CTA)
- [x] Sparkgreen subsidiary landing page (`/sparkgreen`)
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

- [ ] SEO metadata (basic title/description present; missing sitemap, robots.txt, OG images, canonical URLs, structured data)
- [ ] Sparkgreen page (functional but has placeholder testimonial, double footer, Sparkcraft-branded nav)
- [ ] Domain configuration (Vercel domain added but DNS still points to Hostinger)
- [ ] SSL/HTTPS (Hostinger cert expired; Vercel cert ready but not receiving traffic)

---

## Known Issues

### Critical

- [ ] **SSL certificate error** — `NET::ERR_CERT_DATE_INVALID` on sparkcraft.co.tz
- [ ] **DNS misconfiguration** — A records point to Hostinger (5.252.75.64, 88.222.223.123), not Vercel
- [ ] **Production site unreachable** — Users cannot access the Vercel deployment via production domain

### High

- [ ] OpenGraph URLs reference `sparkcraftconsulting.com` instead of `sparkcraft.co.tz`
- [ ] No sitemap.xml or robots.txt
- [ ] www subdomain points to Hostinger CDN (`cdn.hstgr.net`)

### Medium

- [ ] Double footer on `/sparkgreen` page
- [ ] Legacy HTML/CSS/JS files duplicate Next.js content
- [ ] No favicon or app icons
- [ ] No Open Graph images for social sharing
- [ ] Placeholder testimonial on Sparkgreen page

### Low

- [ ] Hero stat says "6 sectors" but 10 are listed
- [ ] Copyright year mismatch (2025 vs 2026)
- [ ] No skip-to-content link
- [ ] No active section indication in navigation

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

- [ ] Double footer on Sparkgreen page
- [ ] Sparkcraft navbar on Sparkgreen page (no Sparkgreen-branded nav)
- [ ] No skip-to-content link
- [ ] No scroll-spy / active section highlighting
- [ ] Who We Serve horizontal scroll lacks visual affordance on mobile
- [ ] Placeholder testimonial on Sparkgreen

---

## SEO Issues

- [ ] HTTPS broken (blocks crawling)
- [ ] Wrong OpenGraph domain
- [ ] No sitemap.xml
- [ ] No robots.txt
- [ ] No OG images
- [ ] No JSON-LD structured data
- [ ] No favicon
- [ ] No canonical URLs
- [ ] No metadataBase configured

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

1. Fix OpenGraph URLs to `sparkcraft.co.tz`
2. Add `metadataBase` to root layout
3. Add `app/sitemap.ts` and `public/robots.txt`
4. Add favicon and OG image
5. Remove or archive legacy HTML/CSS/JS files
6. Fix double footer on Sparkgreen

### Medium-term

1. Add JSON-LD Organization schema
2. Add security headers
3. Add skip-to-content link
4. Centralize Sparkgreen content in data file
5. Add scroll-spy navigation
6. Update dev dependencies

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
