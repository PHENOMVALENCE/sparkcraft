# SparkCraft

Marketing website for **Sparkcraft Consulting** — Africa market intelligence and advisory — and its sustainability subsidiary **Sparkgreen**.

**Production website:** [https://sparkcraft.co.tz](https://sparkcraft.co.tz)

---

## Overview

SparkCraft is a static, single-page-style marketing site built with Next.js (App Router). The homepage composes multiple anchor sections; a separate `/sparkgreen` route hosts the sustainability subsidiary landing page. There is no backend, database, authentication, or CMS — all content is hardcoded in React components and `src/lib/data.ts`.

---

## Technology Stack

| Layer | Technology | Version (verified) |
|-------|------------|-------------------|
| Framework | Next.js (App Router) | 14.2.35 |
| UI library | React | 18.3.1 |
| Language | TypeScript | 5.6.2 |
| Styling | Tailwind CSS | 3.4.13 |
| Animation | Framer Motion | 11.3.6 |
| Icons | Lucide React | 0.460.0 |
| Package manager | npm | (lockfile present) |
| Deployment | Vercel | (see `vercel.json`) |
| Source control | GitHub | `PHENOMVALENCE/sparkcraft` |

---

## Repository Structure

```
sparkcraft/
├── src/
│   ├── app/              # Next.js App Router (routes, layout, globals)
│   ├── components/       # React section components
│   └── lib/data.ts       # Homepage content data
├── docs/                 # Technical documentation (this audit)
├── index.html            # Legacy static homepage (not used by Next.js)
├── sparkgreen.html       # Legacy Sparkgreen page (not used by Next.js)
├── style.css             # Legacy stylesheet (~2000 lines)
├── script.js             # Legacy client JS
├── next.config.js
├── vercel.json
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

See [docs/CODEBASE.md](docs/CODEBASE.md) for a full codebase map.

---

## Local Development

### Prerequisites

- Node.js 18+ (recommended; verify with `node -v`)
- npm

### Installation

```bash
git clone https://github.com/PHENOMVALENCE/sparkcraft.git
cd sparkcraft
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) for full setup instructions.

---

## Environment Variables

The application currently uses **no environment variables**. A placeholder `.env.example` is provided for future configuration.

See [docs/ENVIRONMENT.md](docs/ENVIRONMENT.md).

---

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |

---

## Build

```bash
npm run build
```

Build output: `.next/` (standalone mode enabled in `next.config.js`).

**Last verified:** Build and lint pass on Next.js 14.2.35 (August 2026 audit).

---

## Production Deployment

```
Developer → Feature branch → Pull Request → main → Vercel → sparkcraft.co.tz
```

- **Production branch:** `main` (INFERRED from Vercel dashboard screenshot; verify in Vercel)
- **Development branch:** `codex/master-changes`
- **Preview deployments:** Automatic for non-`main` branches (INFERRED — verify in Vercel)

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

## Vercel

Repository includes `vercel.json`:

- Framework preset: `nextjs`
- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`

Dashboard-only settings (environment variables, domain mapping, production branch) must be verified in the Vercel project dashboard.

---

## Domain

**Production domain:** `sparkcraft.co.tz`

| Role | Provider | Status |
|------|----------|--------|
| Domain registration | Hostinger (INFERRED from hPanel screenshot) | REQUIRES MANUAL VERIFICATION |
| DNS management | Hostinger (VERIFIED — SPF TXT, www CNAME to `cdn.hstgr.net`) | Active |
| Application hosting | Vercel | Configured in dashboard (INFERRED) |
| Email | Hostinger (`include:_spf.mail.hostinger.com`) | VERIFIED via DNS TXT |

**Important:** As of the August 2026 audit, DNS for `sparkcraft.co.tz` resolves to **Hostinger IP addresses**, not Vercel. This is the likely root cause of the SSL certificate error. See [docs/DOMAIN-DNS-SSL.md](docs/DOMAIN-DNS-SSL.md).

---

## SSL

HTTPS certificates are served by whichever infrastructure receives traffic for the domain. If DNS points to Hostinger, Hostinger's certificate applies. If DNS points to Vercel, Vercel's certificate applies.

Recent incident: `NET::ERR_CERT_DATE_INVALID` — see [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) and [docs/DOMAIN-DNS-SSL.md](docs/DOMAIN-DNS-SSL.md).

---

## Git Workflow

| Branch | Purpose |
|--------|---------|
| `main` | Production (deployed to Vercel) |
| `codex/master-changes` | Development / documentation / PRs |

Do not push directly to `main`. Submit changes via pull request from `codex/master-changes`.

See [AGENTS.md](AGENTS.md) for Codex workflow rules.

---

## Documentation

| Document | Description |
|----------|-------------|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | System and deployment architecture |
| [docs/CODEBASE.md](docs/CODEBASE.md) | Codebase map, routes, components |
| [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) | Local development guide |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Vercel deployment workflow |
| [docs/DOMAIN-DNS-SSL.md](docs/DOMAIN-DNS-SSL.md) | Domain, DNS, and SSL architecture |
| [docs/ENVIRONMENT.md](docs/ENVIRONMENT.md) | Environment variables |
| [docs/UI-UX-AUDIT.md](docs/UI-UX-AUDIT.md) | UI/UX and accessibility audit |
| [docs/SEO.md](docs/SEO.md) | SEO audit and recommendations |
| [docs/SECURITY.md](docs/SECURITY.md) | Security review |
| [docs/MAINTENANCE.md](docs/MAINTENANCE.md) | Operational maintenance procedures |
| [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) | Common problems and fixes |
| [docs/AUDIT-REPORT.md](docs/AUDIT-REPORT.md) | Full technical audit findings |
| [docs/PROJECT-STATUS.md](docs/PROJECT-STATUS.md) | Living project status tracker |
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | Documentation and project changelog |

---

## Troubleshooting

Common issues:

- **SSL certificate error** — DNS likely points to Hostinger instead of Vercel
- **Site shows old static HTML** — Legacy `index.html` may be served if Hostinger static hosting is active
- **OpenGraph URL mismatch** — Metadata references `sparkcraftconsulting.com` instead of `sparkcraft.co.tz`

See [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md).

---

## Maintenance

Weekly, monthly, and quarterly checklists are documented in [docs/MAINTENANCE.md](docs/MAINTENANCE.md).

Priority items:

- [ ] Point DNS for `sparkcraft.co.tz` to Vercel
- [ ] Verify HTTPS certificate after DNS change
- [ ] Update OpenGraph URLs to `sparkcraft.co.tz`
- [ ] Add `robots.txt`, `sitemap.xml`, and favicon
- [ ] Archive or remove legacy root HTML/CSS/JS files
