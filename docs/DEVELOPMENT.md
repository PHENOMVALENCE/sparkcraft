# SparkCraft Development Guide

Last reviewed: August 2026

---

## Prerequisites

| Requirement | Minimum | Verification |
|-------------|---------|--------------|
| Node.js | 18.x+ | `node -v` |
| npm | 9.x+ | `npm -v` |
| Git | Any recent version | `git --version` |

No database, Docker, or external services are required for local development.

---

## Clone Repository

```bash
git clone https://github.com/PHENOMVALENCE/sparkcraft.git
cd sparkcraft
```

---

## Install Dependencies

```bash
npm install
```

This reads `package-lock.json` for exact dependency versions.

---

## Environment Setup

The application currently requires **no environment variables** to run locally.

An optional `.env.example` is provided for future configuration. Copy it if needed:

```bash
cp .env.example .env.local
```

See [ENVIRONMENT.md](ENVIRONMENT.md) for variable documentation.

---

## Development Server

```bash
npm run dev
```

- Default URL: [http://localhost:3000](http://localhost:3000)
- Hot reload enabled
- Routes available:
  - [http://localhost:3000/](http://localhost:3000/) — Homepage
  - [http://localhost:3000/sparkgreen](http://localhost:3000/sparkgreen) — Sparkgreen page

---

## Production Build

```bash
npm run build
```

Expected output:

```
Route (app)                              Size     First Load JS
┌ ○ /                                    ~9.5 kB       ~134 kB
├ ○ /_not-found                          ~873 B        ~88 kB
└ ○ /sparkgreen                          ~10 kB        ~135 kB
```

All routes should show `○ (Static)` — confirming static pre-rendering.

### Serve Production Build Locally

```bash
npm run build
npm run start
```

Opens on [http://localhost:3000](http://localhost:3000) serving the optimized production build.

---

## Linting

```bash
npm run lint
```

Uses ESLint with `eslint-config-next` (core-web-vitals + TypeScript rules).

**Last verified:** No ESLint warnings or errors (August 2026).

---

## Testing

No test framework is configured. There are no test scripts in `package.json` and no test files in the repository.

To add testing in the future, consider:

- Jest + React Testing Library for component tests
- Playwright or Cypress for end-to-end tests

---

## Project Structure for Development

When adding features, follow existing conventions:

| Task | Location | Convention |
|------|----------|------------|
| New page/route | `src/app/<route>/page.tsx` | App Router file-based routing |
| New section component | `src/components/<Name>.tsx` | Default export, PascalCase |
| New content data | `src/lib/data.ts` | Exported `as const` arrays |
| New styles | Tailwind classes in components | Use design tokens from `tailwind.config.ts` |
| Global styles | `src/app/globals.css` | CSS variables and utility classes |

### Client vs Server Components

- Components using hooks (`useState`, `useScroll`, etc.) or event handlers need `"use client"` directive
- Components that only render static content can remain server components (default)
- Current client components: `Navbar`, `Footer`, `Hero`, `About`, `Services`, `WhatMakesDifferent`, `WhoWeServe`, `Industries`, `BIReports`, `CTA`, `SparkgreenContent`

---

## Git Workflow

### Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production — do not push directly |
| `codex/master-changes` | Development and documentation |

### Making Changes

```bash
git checkout codex/master-changes
git pull origin codex/master-changes
# Make changes
git add <files>
git commit -m "type: description"
git push origin codex/master-changes
# Open PR to main
```

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, etc.

See [AGENTS.md](../AGENTS.md) for full workflow rules.

---

## Legacy Static Files

The repository root contains legacy static files (`index.html`, `sparkgreen.html`, `style.css`, `script.js`) that are **not part of the Next.js application**.

If you are running XAMPP/Apache locally at `c:\xampp\htdocs\sparkcraft`, Apache may serve `index.html` instead of the Next.js app. Use `npm run dev` for Next.js development.

---

## Troubleshooting Local Development

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npx next dev -p 3001` |
| Module not found | Delete `node_modules` and `.next`, run `npm install` |
| TypeScript errors | Run `npm run build` to see full type check output |
| Styles not applying | Verify Tailwind content paths in `tailwind.config.ts` |
| Apache serves old HTML | Use `npm run dev` instead of Apache for Next.js |

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for production issues.
