# Environment Variables

Last reviewed: August 2026

---

## Current State

**VERIFIED:** The SparkCraft application uses **no environment variables**. There are no references to `process.env`, `NEXT_PUBLIC_*`, or `import.meta.env` anywhere in the codebase.

No `.env`, `.env.local`, or `.env.production` files exist in the repository.

---

## .env.example

A placeholder file is provided for future configuration:

```bash
# Site URL (used for canonical URLs, Open Graph, sitemap generation)
NEXT_PUBLIC_SITE_URL=

# Contact email (centralized contact configuration)
NEXT_PUBLIC_CONTACT_EMAIL=

# Sparkgreen contact email
NEXT_PUBLIC_SPARKGREEN_EMAIL=

# Analytics (not currently implemented)
# NEXT_PUBLIC_GA_ID=
# NEXT_PUBLIC_GTM_ID=
```

Copy to `.env.local` for local development:

```bash
cp .env.example .env.local
```

---

## Recommended Future Variables

These variables are **not currently used** but would improve maintainability:

| Variable | Purpose | Required | Server/Client | Where to Configure |
|----------|---------|----------|---------------|-------------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs in metadata, Open Graph, sitemap | Recommended | Client | `.env.local`, Vercel Dashboard |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Centralize Sparkcraft contact email | Optional | Client | `.env.local`, Vercel Dashboard |
| `NEXT_PUBLIC_SPARKGREEN_EMAIL` | Centralize Sparkgreen contact email | Optional | Client | `.env.local`, Vercel Dashboard |
| `NEXT_PUBLIC_GA_ID` | Google Analytics tracking | Optional | Client | Vercel Dashboard (Production) |

### Example Production Values (placeholders only)

```
NEXT_PUBLIC_SITE_URL=https://sparkcraft.co.tz
NEXT_PUBLIC_CONTACT_EMAIL=contact@sparkcraft.co.tz
NEXT_PUBLIC_SPARKGREEN_EMAIL=hello@sparkgreen.co.tz
```

---

## Hardcoded Values (Current Approach)

Contact information and URLs are currently hardcoded in components:

| Value | Location | Current Value |
|-------|----------|---------------|
| Sparkcraft email | `Footer.tsx`, `CTA.tsx` | `contact@sparkcraft.co.tz` |
| Sparkcraft phone | `Footer.tsx`, `CTA.tsx` | `+255 756 948 267` |
| Sparkcraft location | `Footer.tsx`, `CTA.tsx`, `Hero.tsx` | Dar es Salaam, Tanzania |
| Sparkgreen email | `SparkgreenContent.tsx` | `hello@sparkgreen.co.tz` |
| OpenGraph URL | `layout.tsx` | `https://sparkcraftconsulting.com` (incorrect domain) |
| Sparkgreen OG URL | `sparkgreen/page.tsx` | `https://sparkcraftconsulting.com/sparkgreen` (incorrect domain) |

---

## Configuration by Environment

| Environment | Configuration Method |
|-------------|---------------------|
| Local development | `.env.local` (optional, not required) |
| Vercel Preview | Vercel Dashboard → Environment Variables → Preview |
| Vercel Production | Vercel Dashboard → Environment Variables → Production |

---

## Security Notes

- Never commit `.env.local` or files containing real credentials
- `.gitignore` excludes `.env*.local` but **not** `.env` — be cautious
- No secrets are currently needed (static site with no API keys)
- If analytics or form services are added, store keys in Vercel environment variables only

See [SECURITY.md](SECURITY.md).
