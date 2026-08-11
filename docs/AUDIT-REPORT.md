# SparkCraft Technical Audit Report

Last reviewed: August 2026  
Auditor: Codex (automated repository audit)  
Branch: `codex/master-changes`

---

## Executive Summary

SparkCraft is a well-structured static Next.js 14 marketing website with two routes, clean component architecture, and no backend complexity. The application code is production-ready and builds successfully.

The **critical production issue** is infrastructure: DNS for `sparkcraft.co.tz` points to Hostinger instead of Vercel, causing an expired SSL certificate error (`NET::ERR_CERT_DATE_INVALID`) and preventing users from accessing the Vercel-deployed application.

---

## Findings by Category

### Architecture

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| A1 | DNS points to Hostinger, not Vercel | **CRITICAL** | nslookup: A records `5.252.75.64`, `88.222.223.123` | Production site unreachable via HTTPS | Update DNS to Vercel | Medium |
| A2 | Dual implementation (Next.js + legacy HTML) | MEDIUM | `index.html`, `sparkgreen.html`, `style.css`, `script.js` at repo root | Content drift, confusion about canonical source | Archive legacy files | Small |
| A3 | No `public/` directory | MEDIUM | Glob search returned 0 assets | Missing favicon, robots.txt, sitemap, OG images | Create `public/` with assets | Small |
| A4 | OpenGraph URL uses wrong domain | HIGH | `layout.tsx`: `sparkcraftconsulting.com` | Social sharing links to wrong domain | Update to `sparkcraft.co.tz` | Small |

### Code Quality

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| C1 | Sparkgreen content inline (712 lines) | LOW | `SparkgreenContent.tsx` | Harder to maintain vs centralized data.ts | Extract to `sparkgreen-data.ts` | Medium |
| C2 | Hero stat mismatch (6 vs 10 sectors) | LOW | Hero.tsx vs Industries | Minor content inconsistency | Fix stat or reword | Small |
| C3 | Copyright year inconsistency | LOW | Footer: 2025, Sparkgreen: 2026 | Minor inconsistency | Align years | Small |
| C4 | No test framework | LOW | No test scripts or files | No automated quality gate | Add testing when needed | Medium |

### UI/UX

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| U1 | Double footer on /sparkgreen | MEDIUM | SparkgreenContent footer + layout Footer | Confusing UX, redundant links | Conditionally hide global Footer | Small |
| U2 | No skip-to-content link | MEDIUM | Legacy has it, Next.js doesn't | Accessibility gap | Add skip link to layout | Small |
| U3 | No active nav section indication | MEDIUM | Navbar.tsx | Users can't see current section | Add scroll-spy | Medium |
| U4 | Placeholder testimonial on Sparkgreen | MEDIUM | SparkgreenContent.tsx | Unprofessional appearance | Replace with real content | Content |
| U5 | Sparkcraft navbar on Sparkgreen page | LOW | layout.tsx wraps all routes | Brand inconsistency | Consider Sparkgreen nav variant | Medium |

### Responsive Design

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| R1 | Who We Serve horizontal scroll lacks affordance | LOW | WhoWeServe.tsx snap-x | Keyboard users may miss scrollable content | Add scroll indicator | Small |

No critical responsive design issues found. Layout adapts well across breakpoints.

### Accessibility

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| X1 | Missing skip-to-content link | MEDIUM | layout.tsx | Keyboard users must tab through nav | Add skip link | Small |
| X2 | Ticker not hidden from assistive tech | LOW | TickerStrip.tsx | Screen readers may announce repeating content | Add aria-hidden | Small |
| X3 | Back-to-top uses href="#" | LOW | Footer.tsx | Minor navigation issue | Use href="#top" | Small |

Overall accessibility is good — semantic HTML, focus styles, reduced motion support, ARIA on interactive elements.

### Performance

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| P1 | Framer Motion on most components | LOW | 11 client components with motion | ~134 kB First Load JS (acceptable) | Consider reducing animations | Medium |
| P2 | All homepage components are client-side | LOW | Most components have "use client" | Larger JS bundle than necessary | Convert static sections to server components | Medium |
| P3 | No image optimization needed | INFO | No raster images used | N/A — SVG/CSS only | N/A | — |

Build output is healthy for a marketing site. No critical performance issues.

**Estimated Core Web Vitals (static site, no runtime testing):**
- LCP: Good (static content, no large images)
- CLS: Good (no dynamic layout shifts observed in code)
- INP: Good (minimal interactivity)

### SEO

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| S1 | HTTPS broken (infrastructure) | **CRITICAL** | SSL error | Site uncrawlable | Fix DNS | Medium |
| S2 | Wrong OpenGraph domain | HIGH | sparkcraftconsulting.com | Bad social previews | Update metadata | Small |
| S3 | No sitemap.xml | HIGH | No file in repo | Reduced discoverability | Add app/sitemap.ts | Small |
| S4 | No robots.txt | HIGH | No file in repo | No crawl directives | Add public/robots.txt | Small |
| S5 | No OG images | MEDIUM | No og:image in metadata | Poor social sharing | Create and add OG image | Medium |
| S6 | No structured data | MEDIUM | No JSON-LD | No rich results | Add Organization schema | Small |
| S7 | No favicon | MEDIUM | No public/ directory | Missing tab icon | Add favicon | Small |

### Security

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| SEC1 | SSL certificate invalid | **CRITICAL** | NET::ERR_CERT_DATE_INVALID | Users blocked from site | Fix DNS | Medium |
| SEC2 | No security headers | MEDIUM | next.config.js | Missing defense-in-depth | Add headers | Small |
| SEC3 | Dev dependency vulnerabilities | MEDIUM | npm audit high findings | Dev tooling only, not production | Update ESLint deps | Small |
| SEC4 | .env not in .gitignore | LOW | .gitignore review | Accidental secret commit risk | Add .env to .gitignore | Small |

No application secrets found. No XSS surface. No secret rotation required.

### Dependencies

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| D1 | eslint-config-next 14.2.15 vs next 14.2.35 | LOW | package.json version mismatch | Minor lint rule drift | Align versions | Small |
| D2 | Dev dependency high vulnerabilities | MEDIUM | npm audit | Dev environment only | Update when convenient | Small |
| D3 | No obviously unused packages | INFO | All deps used | — | — | — |

### Deployment

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| DEP1 | Vercel deployment ready but unreachable | **CRITICAL** | Dashboard: Ready; DNS: Hostinger | Production site down | Fix DNS | Medium |
| DEP2 | No CI/CD beyond Vercel | INFO | No GitHub Actions | Vercel handles build/deploy | Consider adding CI checks | Medium |

### Domain/DNS

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| DNS1 | A records point to Hostinger | **CRITICAL** | nslookup verified | Traffic never reaches Vercel | Update to Vercel records | Medium |
| DNS2 | www CNAME to Hostinger CDN | HIGH | cdn.hstgr.net | www also unreachable on Vercel | Update www CNAME | Medium |
| DNS3 | SOA shows dns-parking.com | MEDIUM | nslookup SOA | Possible DNS parking state | Verify nameserver config | Small |

### SSL

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|
| SSL1 | Certificate expired on Hostinger | **CRITICAL** | Browser error, hPanel "Installing" | HTTPS broken | Point DNS to Vercel | Medium |
| SSL2 | Hostinger SSL irrelevant once on Vercel | INFO | Architecture analysis | Hostinger cert not needed for Vercel hosting | Ignore after DNS fix | — |

### Maintainability

| # | Issue | Severity | Evidence | Impact | Action | Effort |
|---|-------|----------|----------|--------|--------|--------|
| M1 | No README until this audit | MEDIUM | File did not exist | Onboarding difficulty | Created during audit | Done |
| M2 | No documentation until this audit | MEDIUM | No docs/ folder | Knowledge transfer gap | Created during audit | Done |
| M3 | Content duplication (Next.js + legacy) | MEDIUM | 4 legacy files | Dual maintenance burden | Remove legacy files | Small |
| M4 | No environment variable abstraction | LOW | Hardcoded contact info | Harder to change per environment | Add env vars | Small |

---

## Severity Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 4 |
| HIGH | 6 |
| MEDIUM | 16 |
| LOW | 12 |
| INFORMATIONAL | 3 |

All CRITICAL issues are infrastructure-related (DNS/SSL). Application code has no critical defects.

---

## Validation Results

| Check | Command | Result |
|-------|---------|--------|
| Production build | `npm run build` | Pass |
| Lint | `npm run lint` | Pass (no warnings or errors) |
| Type check | Included in build | Pass |
| npm audit | `npm audit` | High findings in dev deps only |
| Tests | N/A | No test framework configured |

---

## Recommended Priority Order

1. **Fix DNS** — Point `sparkcraft.co.tz` to Vercel (resolves CRITICAL SSL + deployment issues)
2. **Update OpenGraph URLs** — Change `sparkcraftconsulting.com` to `sparkcraft.co.tz`
3. **Add SEO basics** — sitemap, robots.txt, favicon, metadataBase
4. **Remove legacy files** — Eliminate content duplication risk
5. **Fix Sparkgreen double footer** — Improve UX on subsidiary page
6. **Add skip-to-content link** — Accessibility improvement
7. **Add security headers** — Defense in depth
8. **Update dev dependencies** — Address npm audit findings
