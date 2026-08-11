# SparkCraft Maintenance Guide

Last reviewed: August 2026

---

## Weekly Checks

- [ ] Production site loads at `https://sparkcraft.co.tz`
- [ ] HTTPS certificate is valid (check browser padlock)
- [ ] Vercel latest deployment status is "Ready"
- [ ] Homepage sections render correctly
- [ ] `/sparkgreen` page loads
- [ ] Contact email link opens mail client
- [ ] Contact phone link works on mobile
- [ ] Mobile navigation opens and closes
- [ ] No console errors in browser DevTools

---

## Monthly Checks

- [ ] Review Vercel deployment logs for build failures
- [ ] Check for broken internal links (anchor navigation)
- [ ] Verify DNS records haven't changed unexpectedly
  ```bash
  nslookup sparkcraft.co.tz
  nslookup www.sparkcraft.co.tz
  ```
- [ ] Check SSL certificate expiration date
- [ ] Review Vercel usage/bandwidth (Hobby plan limits)
- [ ] Check GitHub repository for open security advisories (Dependabot)
- [ ] Run local build to verify it still passes
  ```bash
  npm run build
  npm run lint
  ```
- [ ] Review npm audit for new vulnerabilities
  ```bash
  npm audit
  ```
- [ ] Verify email delivery still works (send test to contact@sparkcraft.co.tz)
- [ ] Check Google Search Console for crawl errors (if configured)

---

## Quarterly Checks

- [ ] Review and update content (services, sectors, copy)
- [ ] Update copyright year in Footer if needed
- [ ] Review dependency updates (Next.js, React, Tailwind, Framer Motion)
- [ ] Evaluate Core Web Vitals (PageSpeed Insights or Vercel Analytics)
- [ ] Review SEO metadata accuracy (titles, descriptions, OG tags)
- [ ] Verify domain registration expiration date (Hostinger hPanel)
- [ ] Review DNS configuration against Vercel requirements
- [ ] Audit for content duplication (legacy files vs Next.js)
- [ ] Review accessibility (manual keyboard navigation test)
- [ ] Check Vercel project settings (Node.js version, env vars)
- [ ] Review and update documentation if architecture changed
- [ ] Test preview deployments for PR branches

---

## Dependency Updates

When updating dependencies:

1. Create branch from `codex/master-changes`
2. Update specific packages (avoid mass upgrades)
3. Run build and lint locally
4. Test all routes manually
5. Submit PR for review

Priority update targets:
- `next` — security patches
- `react` / `react-dom` — security patches
- `eslint-config-next` — align with Next.js version

---

## Content Updates

Content is hardcoded in:
- `src/lib/data.ts` — Homepage content
- `src/components/sparkgreen/SparkgreenContent.tsx` — Sparkgreen content (inline arrays)
- Individual component files — Stats, footer links, contact info

**Important:** If legacy HTML files still exist, updating Next.js components alone does not update legacy content. Prefer removing legacy files.

---

## SSL Certificate Monitoring

SSL is managed automatically by whichever provider receives DNS traffic:

| Provider | Renewal | Monitoring |
|----------|---------|------------|
| Vercel | Automatic (Let's Encrypt) | Vercel Dashboard → Domains |
| Hostinger | "Lifetime SSL" (Let's Encrypt) | hPanel → Security → SSL |

After DNS points to Vercel, Hostinger SSL monitoring becomes irrelevant.

---

## Domain Registration

REQUIRES MANUAL VERIFICATION:
- Registrar: Hostinger (likely)
- TLD: `.co.tz` (Tanzania)
- Check expiration in Hostinger hPanel → Domains

---

## Backup Considerations

| Asset | Backup Method |
|-------|--------------|
| Source code | GitHub (primary) |
| Vercel deployment | Automatic (linked to Git) |
| DNS configuration | Document in DOMAIN-DNS-SSL.md; screenshot Hostinger DNS |
| Email | Managed by Hostinger |
| Content | In Git repository (data.ts, components) |

No database backups needed (no database).

---

## Incident Response

| Incident | First Action | Document |
|----------|-------------|----------|
| Site down | Check Vercel deployment status | TROUBLESHOOTING.md |
| SSL error | Check DNS records | DOMAIN-DNS-SSL.md |
| Build failure | Check Vercel build logs | TROUBLESHOOTING.md |
| Content error | Fix in code, deploy via PR | DEVELOPMENT.md |
| Domain expired | Renew in Hostinger hPanel | DOMAIN-DNS-SSL.md |

---

## Documentation Maintenance

Update documentation when:
- Architecture changes (new routes, services, integrations)
- Deployment process changes
- DNS or domain configuration changes
- New environment variables added
- Dependencies significantly upgraded
- New third-party integrations added

Documentation files: `docs/` directory and root `README.md`.
