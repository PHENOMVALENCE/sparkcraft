# SparkCraft Technologies website

The corporate website for SparkCraft Technologies, a Tanzania-based ICT, fintech integration, and enterprise procurement provider. The parent site contains Home, About, Services, Portfolio, Contact, Privacy, and Terms pages. Existing FinSpark and Sparkgreen venture routes remain available.

## Stack

- Next.js 14 App Router, React 18, TypeScript, Tailwind CSS
- Vercel configuration in `vercel.json`; Next standalone output in `next.config.js`
- No database, server-side contact endpoint, or CRM integration is currently present

## Local setup

Use Node.js 20 and npm. Run `npm ci`, then `npm run dev` and visit `http://localhost:3000`. No environment variables are required by the corporate pages. Run `npx tsc --noEmit` and `npm run build` before submitting changes. The existing `lint` script calls `next lint`; inspect its behavior before relying on it as a CI gate.

## Structure

- `src/app/(corporate)/`: corporate routes and shared corporate layout
- `src/app/finspark/`, `src/app/sparkgreen/`: existing venture routes
- `src/components/CorporateNav.tsx`, `CorporateFooter.tsx`, `CorporatePageIntro.tsx`: corporate UI
- `src/lib/solutions.ts`: service and sector content
- `src/lib/seo.ts`, `src/app/sitemap.ts`, `src/components/JsonLd.tsx`: metadata and structured data
- `docs/REBRAND.md`: editorial decisions, verification checklist, and limitations
- `.github/workflows/ci.yml`: PR build validation

## Inquiries

The contact form uses a `mailto:` URL and requires the visitor to send the prepared message in their email application. It does not persist or submit a request to a backend. Links from each service preselect its division; service-specific prompts ask for the relevant requirements. Do not ask visitors to include passwords or payment credentials. See `docs/REBRAND.md` before replacing this flow with a production endpoint.

## Deployment

The repository includes a Vercel configuration for Next.js. Deployment, domain routing, and credentials are managed outside this repository. This change is delivered as a draft pull request; merging or deploying requires human review.
