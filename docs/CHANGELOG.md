# Changelog

All notable documentation and project changes for SparkCraft.

Format based on [Keep a Changelog](https://keepachangelog.com/).

---

## [Unreleased]

### Added
- Complete technical documentation suite (`docs/` directory)
- Root `README.md` as project entry point
- `.env.example` placeholder for future environment variables
- Technical audit report (`docs/AUDIT-REPORT.md`)
- Project status tracker (`docs/PROJECT-STATUS.md`)
- Domain/DNS/SSL documentation with verified DNS records
- UI/UX, SEO, and security audit documents
- Maintenance and troubleshooting guides

### Documented
- Technology stack: Next.js 14.2.35, React 18.3.1, TypeScript, Tailwind CSS
- Application architecture: static marketing site, 2 routes, no backend
- Deployment pipeline: GitHub → Vercel → production
- Critical DNS misconfiguration: domain points to Hostinger, not Vercel
- SSL incident root cause: expired Hostinger certificate due to DNS
- Legacy static files at repo root (pre-Next.js implementation)
- 41 audit findings across architecture, code, UI, SEO, security, and infrastructure

### Verified
- Production build passes (`npm run build`)
- ESLint passes with no warnings or errors
- DNS A records for sparkcraft.co.tz resolve to Hostinger IPs
- SPF and Google verification TXT records present
- No environment variables in use
- No secrets committed to repository

---

## [1.0.0] — Prior to August 2026

### Existing (pre-audit)
- Next.js 14 App Router implementation
- Homepage with 9 content sections
- Sparkgreen subsidiary page at `/sparkgreen`
- Vercel deployment configuration
- Tailwind CSS design system
- Framer Motion animations
- Legacy static HTML/CSS/JS files (original implementation)
- GitHub repository with `main` and `codex/master-changes` branches
- Vercel production deployment (application ready, DNS misconfigured)
