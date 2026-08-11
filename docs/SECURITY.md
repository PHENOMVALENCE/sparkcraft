# Security Review — SparkCraft

Last reviewed: August 2026

Scope: Non-destructive review of repository code and configuration.

---

## Summary

SparkCraft is a static marketing site with minimal attack surface. No authentication, no user input processing, no API endpoints, and no secrets in the codebase. The primary security concerns are infrastructure-related (DNS/SSL) and dependency vulnerabilities in dev tooling.

**Overall risk level: LOW** (application code) / **HIGH** (infrastructure — expired SSL, DNS misconfiguration)

---

## Secrets and Credentials

| Check | Result | Severity |
|-------|--------|----------|
| `.env` files committed | None found | OK |
| API keys in code | None found | OK |
| Tokens/passwords in code | None found | OK |
| Private keys (`.pem`) | None found (`.gitignore` excludes `*.pem`) | OK |
| Hardcoded secrets | None | OK |
| Git history secrets | Not scanned — REQUIRES MANUAL VERIFICATION if concerned | INFO |

Contact information (email, phone) is hardcoded by design — this is public business contact info, not secrets.

---

## Client-Side Security

| Check | Result | Severity |
|-------|--------|----------|
| `dangerouslySetInnerHTML` | Not used in React components | OK |
| User input handling | No forms or input fields | OK |
| XSS surface | Minimal — static content only | OK |
| Client-side secrets | None | OK |
| External script loading (Next.js) | Google Fonts via `next/font` (self-hosted at build) | OK |
| External script loading (legacy) | Font Awesome from cdnjs.cloudflare.com | LOW — supply chain risk if legacy served |

---

## API and Network Security

| Check | Result |
|-------|--------|
| API routes | None |
| External API calls | None |
| Fetch/XMLHttpRequest | None |
| WebSocket connections | None |
| Mixed HTTP/HTTPS content | None detected in code |

---

## Dependency Security

`npm audit` results (August 2026):

| Package | Severity | Via | Fix Available |
|---------|----------|-----|---------------|
| `@next/eslint-plugin-next` | High | `glob` | Major version bump to eslint-config-next 16.x |
| `brace-expansion` | High | — | Transitive dependency |
| Additional vulnerabilities | Various | Transitive | See full `npm audit` output |

**Note:** All flagged vulnerabilities are in **development dependencies** (ESLint toolchain), not production runtime dependencies. They do not affect the deployed application but should be addressed during maintenance.

Production dependencies (next, react, framer-motion, lucide-react) had no critical runtime vulnerabilities at audit time.

---

## HTTP Security Headers

| Header | Status | Recommendation |
|--------|--------|----------------|
| Content-Security-Policy | Not configured | Add via `next.config.js` headers or Vercel |
| X-Frame-Options | Not configured | Vercel may set by default — verify |
| X-Content-Type-Options | Not configured | Add `nosniff` |
| Strict-Transport-Security | Depends on hosting provider | Vercel sets HSTS when HTTPS is active |
| Referrer-Policy | Not configured | Add `strict-origin-when-cross-origin` |
| Permissions-Policy | Not configured | Restrict unnecessary browser features |

No security headers are configured in `next.config.js` or `vercel.json`.

### Recommended headers (future)

```javascript
// next.config.js
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ],
  }];
}
```

---

## Infrastructure Security

| Issue | Severity | Details |
|-------|----------|---------|
| SSL certificate expired/invalid | **CRITICAL** | DNS points to Hostinger with expired cert — users see security warning |
| DNS misconfiguration | **HIGH** | Domain traffic not reaching intended Vercel deployment |
| No WAF | INFO | Vercel Firewall shown as active in dashboard (INFERRED) |
| Legacy files served | MEDIUM | If Hostinger serves repo root, legacy HTML/JS with CDN dependencies is exposed |

---

## External Links

All external links in the application are contact links (`mailto:`, `tel:`). No links to external websites that could be exploited.

Legacy HTML files load external CDN resources:
- `fonts.googleapis.com` — Google Fonts
- `cdnjs.cloudflare.com` — Font Awesome 6.4

These are only relevant if legacy files are served in production.

---

## .gitignore Assessment

| Pattern | Covered |
|---------|---------|
| `.env*.local` | Yes |
| `.env` | **No** — not in `.gitignore` |
| `node_modules` | Yes |
| `.vercel` | Yes |
| `*.pem` | Yes |

**Recommendation:** Add `.env` to `.gitignore to prevent accidental secret commits.

---

## Findings Summary

| # | Issue | Severity | Action |
|---|-------|----------|--------|
| 1 | SSL certificate invalid (infrastructure) | CRITICAL | Fix DNS to point to Vercel |
| 2 | DNS misconfiguration | HIGH | Update A/CNAME records |
| 3 | No security headers configured | MEDIUM | Add headers in next.config.js |
| 4 | Dev dependency vulnerabilities | MEDIUM | Update ESLint toolchain |
| 5 | `.env` not in `.gitignore` | LOW | Add to `.gitignore` |
| 6 | Legacy CDN dependencies | LOW | Remove legacy files |
| 7 | No CSP configured | LOW | Add when needed |

**No CRITICAL application-code security issues found. No secrets committed. No secret rotation required.**
