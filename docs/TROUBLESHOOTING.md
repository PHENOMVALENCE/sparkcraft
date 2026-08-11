# SparkCraft Troubleshooting Guide

Last reviewed: August 2026

---

## Website Unavailable

### Symptoms
- Browser shows error page
- Connection timeout
- DNS resolution failure

### Likely Causes
- DNS records incorrect or expired
- Vercel deployment failed
- Domain registration expired

### Diagnostic Steps
1. Check Vercel dashboard → Deployments → latest status
2. Run `nslookup sparkcraft.co.tz` — does it resolve?
3. Try Vercel deployment URL directly (`.vercel.app`)
4. Check domain registration status in Hostinger

### Resolution
- If Vercel deployment failed: fix build errors, redeploy
- If DNS issue: see [Domain Not Resolving](#domain-not-resolving)
- If domain expired: renew in Hostinger hPanel

### Verification
- Site loads at production URL with valid HTTPS
- Vercel deployment shows "Ready"

---

## SSL Certificate Error (NET::ERR_CERT_DATE_INVALID)

### Symptoms
- Browser shows "Your connection isn't private"
- Error code: `NET::ERR_CERT_DATE_INVALID`
- Certificate reported as expired

### Likely Causes
- DNS points to Hostinger with expired certificate (VERIFIED root cause as of August 2026)
- DNS points to wrong server
- System clock incorrect on client machine
- Certificate not provisioned on active endpoint

### Diagnostic Steps
1. Check where DNS points:
   ```bash
   nslookup sparkcraft.co.tz
   ```
   - Hostinger IPs (`5.252.*`, `88.222.*`) → Hostinger SSL applies
   - Vercel IP (`76.76.21.21`) or CNAME → Vercel SSL applies

2. Check Vercel domain status: Dashboard → Settings → Domains

3. Check certificate in browser: padlock → Certificate → Issuer, Expiration

4. Verify system clock is correct

5. Test Vercel deployment URL directly (bypasses custom domain DNS)

### Resolution
1. Update DNS to point to Vercel:
   - A record `@` → `76.76.21.21`
   - CNAME `www` → `cname.vercel-dns.com`
2. Wait for DNS propagation (minutes to 48 hours)
3. Vercel auto-provisions SSL certificate
4. Hostinger SSL becomes irrelevant

### Verification
- `https://sparkcraft.co.tz` loads without warning
- Certificate issuer is Let's Encrypt (via Vercel)
- Certificate expiration is in the future

See [DOMAIN-DNS-SSL.md](DOMAIN-DNS-SSL.md) for full SSL documentation.

---

## Vercel Deployment Failure

### Symptoms
- Vercel dashboard shows "Error" status
- GitHub push doesn't produce working deployment

### Likely Causes
- TypeScript compilation error
- ESLint error (if configured to block builds)
- Missing dependency
- Node.js version mismatch

### Diagnostic Steps
1. Check Vercel build logs in dashboard
2. Reproduce locally:
   ```bash
   npm run build
   npm run lint
   ```
3. Check for recent dependency changes in `package.json`

### Resolution
1. Fix errors shown in build log
2. Push fix to branch
3. Vercel auto-redeploys

### Verification
- `npm run build` passes locally
- Vercel deployment shows "Ready"

---

## GitHub Deployment Not Triggering

### Symptoms
- Push to `main` doesn't create new Vercel deployment
- No preview deployment for PR branches

### Likely Causes
- Vercel Git integration disconnected
- Webhook failure
- Wrong branch configured as production

### Diagnostic Steps
1. Vercel Dashboard → Settings → Git → verify repository connection
2. GitHub → Repository → Settings → Webhooks → check Vercel webhook
3. Verify production branch setting in Vercel

### Resolution
1. Reconnect Git integration in Vercel if needed
2. Verify production branch is `main`
3. Manual redeploy from Vercel dashboard if needed

### Verification
- Push to `main` triggers production deployment
- Push to feature branch triggers preview deployment

---

## Domain Not Resolving

### Symptoms
- `nslookup sparkcraft.co.tz` returns NXDOMAIN or wrong IP
- Site unreachable by domain name but Vercel URL works

### Likely Causes
- DNS records deleted or changed
- Nameserver misconfiguration
- DNS propagation in progress
- Domain registration expired

### Diagnostic Steps
1. `nslookup sparkcraft.co.tz`
2. `nslookup -type=NS sparkcraft.co.tz`
3. Check DNS in Hostinger hPanel
4. Use [dnschecker.org](https://dnschecker.org) for global propagation

### Resolution
1. Restore correct DNS records per [DOMAIN-DNS-SSL.md](DOMAIN-DNS-SSL.md)
2. For Vercel: A `@` → `76.76.21.21` or CNAME → `cname.vercel-dns.com`
3. Wait for propagation

### Verification
- DNS resolves to expected IP/CNAME globally
- Site accessible via domain

---

## DNS Propagation

### Symptoms
- Site works for some users but not others
- DNS lookup returns different results from different locations

### Likely Causes
- Recent DNS change still propagating
- DNS TTL causing stale cache

### Diagnostic Steps
1. Check propagation at [dnschecker.org](https://dnschecker.org)
2. Compare results from different DNS servers:
   ```bash
   nslookup sparkcraft.co.tz 8.8.8.8
   nslookup sparkcraft.co.tz 1.1.1.1
   ```

### Resolution
- Wait (typically 15 minutes to 48 hours)
- Flush local DNS cache if needed:
  ```bash
  ipconfig /flushdns
  ```

### Verification
- Consistent DNS results globally

---

## 404 Errors

### Symptoms
- Page not found for valid routes
- `/sparkgreen` returns 404

### Likely Causes
- Route not built (missing page.tsx)
- Hostinger serving legacy files instead of Next.js app
- Incorrect URL

### Diagnostic Steps
1. Verify route exists in `src/app/` directory
2. Check Vercel deployment URL (not custom domain)
3. Run `npm run build` locally and check route list

### Resolution
- If route missing: create `src/app/<route>/page.tsx`
- If Hostinger serving old content: fix DNS to point to Vercel

### Verification
- Route appears in build output
- Page loads on Vercel deployment URL

---

## Environment Variable Problems

### Symptoms
- Feature depending on env var doesn't work
- Build succeeds but runtime behavior wrong

### Likely Causes
- Variable not set in Vercel dashboard
- Variable set for wrong environment scope
- Missing `NEXT_PUBLIC_` prefix for client-side vars

### Diagnostic Steps
1. Vercel Dashboard → Settings → Environment Variables
2. Check variable name matches code reference exactly
3. Verify scope (Production / Preview / Development)

### Resolution
1. Add missing variables in Vercel dashboard
2. Redeploy after adding variables

### Verification
- Variable visible in Vercel dashboard for correct scope
- Feature works after redeployment

**Note:** Currently no environment variables are used. This section applies when variables are added.

---

## Build Failures

### Symptoms
- `npm run build` fails locally or on Vercel
- TypeScript or ESLint errors

### Common Errors and Fixes

| Error | Fix |
|-------|-----|
| Type error in component | Fix TypeScript types in reported file |
| ESLint error | Fix lint issue or adjust `.eslintrc.json` |
| Module not found | Run `npm install`; check import paths |
| Out of memory | Increase Node.js memory: `NODE_OPTIONS=--max-old-space-size=4096` |

### Diagnostic Steps
```bash
npm run build 2>&1
npm run lint 2>&1
```

### Verification
- Both commands exit with code 0

---

## Production Differs from Local

### Symptoms
- Local dev looks correct but production shows different content
- Old content visible on production domain

### Likely Causes
- DNS points to Hostinger serving legacy HTML (not Vercel)
- Vercel deployment is stale (not latest main)
- Browser cache showing old version

### Diagnostic Steps
1. Compare Vercel deployment URL vs custom domain
2. Check latest commit on `main` vs Vercel deployment commit
3. Hard refresh browser (Ctrl+Shift+R)
4. Check DNS resolution

### Resolution
- If DNS issue: update DNS to Vercel
- If stale deployment: trigger redeploy in Vercel
- If cache: hard refresh or clear browser cache

### Verification
- Production domain shows same content as Vercel deployment URL

---

## www Works but Root Domain Fails (or vice versa)

### Symptoms
- `https://www.sparkcraft.co.tz` works but `https://sparkcraft.co.tz` doesn't (or reverse)

### Likely Causes
- Only one DNS record configured (www or @)
- Different SSL certificates for www vs non-www
- Vercel not configured for both variants

### Diagnostic Steps
1. `nslookup sparkcraft.co.tz`
2. `nslookup www.sparkcraft.co.tz`
3. Vercel Dashboard → Domains → check both variants

### Resolution
1. Configure both `@` and `www` in Vercel dashboard
2. Set DNS for both records
3. Configure redirect (www → non-www or vice versa) in Vercel

### Verification
- Both URLs load with valid HTTPS
- One redirects to the other (if configured)

---

## Legacy Static Site Served Instead of Next.js

### Symptoms
- Site looks like old HTML version
- Font Awesome icons instead of Lucide
- Missing Sparkgreen route

### Likely Causes
- Apache/XAMPP serving `index.html` from repo root
- Hostinger static hosting serving repo root files
- DNS points to Hostinger web hosting

### Diagnostic Steps
1. View page source — look for Next.js markers vs static HTML
2. Check if `/sparkgreen` route exists (404 = static hosting)
3. Check DNS resolution

### Resolution
1. Update DNS to point to Vercel (not Hostinger web hosting)
2. For local dev: use `npm run dev` instead of Apache
3. Remove or archive legacy files to prevent confusion

### Verification
- `/sparkgreen` route works
- Page source shows Next.js rendered HTML
