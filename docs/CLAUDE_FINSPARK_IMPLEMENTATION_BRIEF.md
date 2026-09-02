# Claude implementation brief: Sparkcraft Technologies and FinSpark

Use this document as the complete implementation prompt for the existing Sparkcraft repository.

## Role and objective

Act as a senior product designer, brand designer, UX writer, and Next.js engineer. Revise the existing Sparkcraft website into a cohesive technology-group website and add a high-end FinSpark product page based on the supplied `FinSpark_OnePager.html` reference.

The finished work must:

1. Rename the parent company from **Sparkcraft Consulting** to **Sparkcraft Technologies** throughout the active Next.js implementation.
2. Introduce **FinSpark**, a Sparkcraft Technologies company/product, as a new first-class route at `/finspark`.
3. Preserve the existing `/sparkgreen` subsidiary experience and make the relationship between Sparkcraft Technologies, FinSpark, and Sparkgreen clear.
4. Deliver a distinctive, premium, responsive design appropriate for an African technology and infrastructure company.
5. Preserve the strongest existing accessibility, performance, SEO, and responsive behavior.

Do not reproduce the reference HTML mechanically. Use its content strategy, product model, and navy/gold/teal direction as source material, then elevate it into a polished web experience consistent with the existing application.

## Repository context

- Framework: Next.js 14 App Router
- Language: TypeScript with strict mode
- Styling: Tailwind CSS
- Animation: Framer Motion
- Icons: Lucide React
- Active routes: `/` and `/sparkgreen`
- New required route: `/finspark`
- Current content source: `src/lib/data.ts`
- Shared layout: `src/app/layout.tsx`
- Shared navigation: `src/components/Navbar.tsx`
- Shared footer: `src/components/Footer.tsx`
- SEO helper: `src/lib/seo.ts`
- Sitemap and robots metadata already exist.
- The root `index.html`, `sparkgreen.html`, `style.css`, and `script.js` files are legacy artifacts and are not the active application.

Follow all instructions in `AGENTS.md`. Work only on `codex/master-changes`, never push directly to `main`, never force-push, and do not deploy.

## Product and brand architecture

The parent identity is now:

- Name: **Sparkcraft Technologies**
- Short display name: **SPARKCRAFT**
- Descriptor beneath the wordmark: **TECHNOLOGIES**
- Domain: `sparkcraft.co.tz`
- Location: Dar es Salaam, Tanzania
- Existing contact: `contact@sparkcraft.co.tz`
- Existing phone: `+255 756 948 267`

The brand portfolio is:

- **Sparkcraft Technologies**: parent technology and market-infrastructure company.
- **FinSpark**: last-mile financial infrastructure for lenders, insurers, development organizations, cooperatives, aggregators, traders, and farmers.
- **Sparkgreen**: sustainability and climate-solutions arm.

Do not imply that Sparkcraft or FinSpark is itself a licensed lender or insurer. FinSpark should be positioned as infrastructure that helps regulated partners deploy their capital and services.

## Site-wide rename and positioning revision

Replace user-facing references to “Sparkcraft Consulting” with “Sparkcraft Technologies” across active application code, metadata, structured data, Open Graph artwork, navigation, footer, and relevant current documentation.

Do not perform a blind global replacement. Rewrite nearby language where “consulting,” “advisory firm,” or similar positioning would conflict with the new technology-company identity.

Recommended parent positioning:

> Sparkcraft Technologies builds intelligence and infrastructure that help organizations operate, invest, and create measurable impact across African markets.

The homepage should still communicate the company’s established market-intelligence and advisory capabilities, but it should now feel like the group platform from which FinSpark and Sparkgreen emerge. Retain useful existing service content while reframing it under a broader technology-and-infrastructure story.

Update at minimum:

- Root metadata and page metadata
- JSON-LD organization name, description, and suitable schema type
- Navbar wordmark descriptor
- Homepage hero and supporting positioning where required
- Homepage portfolio/subsidiary presentation
- Footer branding and copyright
- Dynamic Open Graph images
- Favicon/app-icon text only if the artwork contains the old descriptor
- README and living status/documentation where the old company name describes the current product

Keep historical changelog entries intact when changing them would falsify history.

## New FinSpark route

Create a production-quality `/finspark` page. Organize it into maintainable components and data rather than one oversized component. Suggested structure:

```text
src/app/finspark/page.tsx
src/app/finspark/opengraph-image.tsx
src/components/finspark/FinSparkContent.tsx
src/components/finspark/FinSparkHero.tsx
src/components/finspark/ProductGrid.tsx
src/components/finspark/LegibilityLoop.tsx
src/components/finspark/AudienceGrid.tsx
src/components/finspark/FinSparkCTA.tsx
src/lib/finspark-data.ts
```

The exact split may vary, but content data and repeated UI must not be embedded in an unmaintainable monolith.

### Page narrative

Build the page around this sequence:

1. Hero
2. Evidence/stat band
3. The problem
4. The FinSpark operating model
5. Four products
6. The Legibility Loop
7. Who FinSpark builds for
8. Why Sparkcraft Technologies is positioned to deliver it
9. Partnership CTA
10. FinSpark-specific footer or portfolio sign-off

### Hero

Use:

- Brand: `FinSpark`
- Endorsement: `A Sparkcraft Technologies company`
- Location: `Dar es Salaam · Tanzania`
- Headline: `The last mile isn’t unbankable. It’s unreadable.`
- Supporting statement: `FinSpark builds the credit, insurance and distribution infrastructure that turns farmers, traders and cooperatives from a data gap into a portfolio.`
- Primary CTA: `Start a Partnership Conversation`
- Secondary CTA: `Explore the FinSpark Model`

The hero should immediately make FinSpark feel like a serious infrastructure platform, not a generic fintech landing-page template.

### Evidence/stat band

The source reference contains these proposed statistics:

- `60.75M` active mobile-money accounts in Tanzania in 2024
- `43.1%` of Tanzanians using some form of insurance in 2024
- `~$100B` estimated annual agricultural financing gap across Africa
- `0` formal credit files held by many farmers and traders

These numbers are **not approved facts merely because they appear in the reference file**. Before publishing them:

- Verify each quantitative claim against a primary, authoritative source.
- Prefer the Bank of Tanzania and other original institutional reports.
- Add a visible source note or accessible citation link where appropriate.
- Include the reporting year.
- If a figure cannot be verified, replace it with non-numeric, defensible language or mark it clearly for human confirmation. Never fabricate a source.

### Problem statement

Preserve the core argument:

- Farmers and small traders may have years of reliable behavior.
- Their transactions, deliveries, repayments, cooperative participation, and yields are rarely assembled into lender-readable risk files.
- Capital providers therefore price the unknown or decline it.
- The gap is not necessarily willingness or economic activity; it is legible, consented, auditable data.

Retain the strongest source line as an editorial pull quote, but format it elegantly and avoid overusing text:

> The capital is willing. The paperwork does not exist.

### Operating model

Make this distinction unambiguous:

> FinSpark does not lend and does not underwrite insurance. It provides infrastructure that helps banks, MFIs, insurers, development programs, cooperatives, and distributors identify, reach, and serve last-mile customers.

Communicate three principles:

- It uses operational data partners already generate.
- Data ownership, consent, privacy, retention, and processing roles must be stated carefully.
- Relevant coverage can be embedded into real transactions or inputs through licensed partners.

Any claim of compliance with Tanzania’s Personal Data Protection Act or any financial regulation must be reviewed and supported. Prefer “designed with the requirements of … in mind” until legal counsel confirms stronger language.

### Four products

Create four visually distinct but clearly related product modules:

1. **FinSpark Score**  
   Embedded credit scoring for credit-invisible customers. Converts partner-held behavioral and operational data into explainable, lender-usable risk files. Emphasize explainability and credit-committee usefulness rather than a mysterious black-box score.

2. **FinSpark Tag**  
   A QR-enabled identity, provenance, registration, and embedded-cover touchpoint attached to products such as agricultural inputs. Insurance must be described as underwritten by an appropriately licensed partner.

3. **FinSpark Reach**  
   Last-mile dispatch, delivery confirmation, aggregation, and credit-linked distribution infrastructure for cooperatives, unions, aggregators, and distributors.

4. **FinSpark Till**  
   Point-of-sale, inventory, and automated reconciliation for small traders, cooperative outlets, and agro-dealers. Emphasize the verified transaction record it generates.

Each product module should include:

- Product number and name
- One-sentence proposition
- Concise explanation
- Intended partner/customer types
- Its role in generating or using the shared data signal
- A restrained product-specific icon or abstract graphic

Do not imply any product is already deployed, regulated, or generally available unless the repository contains evidence.

### The Legibility Loop

Create a memorable interactive or diagrammatic section showing:

```text
Till + Tag → Score → Reach → Repayment signal → stronger next decision
```

Explain that every product performs a useful standalone job while also contributing to a consented data loop. The value should compound through better evidence, cheaper servicing, more informed decisions, and a stronger customer record.

Use the line `Sell the service. Keep the signal.` only if stakeholders approve its tone and meaning. A safer public alternative is:

> Deliver the service. Strengthen the signal.

The loop must remain understandable without animation and must stack gracefully on mobile.

### Audiences

Provide tailored value propositions for:

- Development organizations, DFIs, and agencies
- Banks, MFIs, and insurers
- Cooperative unions, aggregators, and distributors
- Strategic and impact investors

Avoid unsupported investor claims. Explain capabilities and strategic fit rather than promising returns or market dominance.

### Partnership CTA

Use the central idea:

> Bring us a community you cannot currently underwrite or serve efficiently.

Supporting text should invite a partner to share a target group of farmers, traders, or cooperative members so Sparkcraft can assess the available data, infrastructure needed, delivery model, and likely implementation path.

CTA behavior:

- Use `mailto:contact@sparkcraft.co.tz?subject=FinSpark%20partnership%20conversation` unless a real form/backend is explicitly added.
- Do not build a fake form that silently discards submissions.
- Make email, phone, domain, and location accessible and easy to copy.

## Design direction

Create an “institutional futurism” aesthetic: credible enough for a bank or regulator, inventive enough for a technology platform, and rooted in real African last-mile infrastructure.

### Visual language

- FinSpark navy: deep, authoritative base
- Warm gold: capital, value, trust, and emphasis
- Teal: data movement, connectivity, and operational technology
- Warm off-white: editorial breathing room
- Ink/slate neutrals: readable body copy

Suggested starting tokens from the reference—not immutable values:

```css
--finspark-navy: #0b2545;
--finspark-navy-2: #123a66;
--finspark-gold: #c8a951;
--finspark-teal: #11737a;
--finspark-teal-light: #1fa0a8;
--finspark-ink: #1b2530;
--finspark-canvas: #f5f7f8;
```

Refine the palette for WCAG contrast and align it with the existing Sparkcraft system. Do not replace the entire global palette when route-scoped FinSpark tokens are sufficient.

### Composition

- Use bold editorial typography, asymmetric grids, precise alignment, and generous whitespace.
- Introduce a subtle data-grid, route-map, ledger, transaction, or network motif.
- Use borders, panels, and signal lines more than generic rounded SaaS cards.
- Cards may be used where they clarify products, but avoid making every section a card grid.
- Add meaningful depth with restrained gradients, fine rules, light grain, and layered surfaces.
- Consider a custom CSS/SVG system diagram for the Legibility Loop.
- Avoid cliché stock imagery, random African silhouettes, decorative flags, crypto aesthetics, neon cyberpunk, glassmorphism overload, and excessive pill shapes.
- Keep the experience professional, legible, and fast.

### Motion

- Use motion to explain flow and hierarchy, especially in the Legibility Loop.
- Keep reveals subtle and brief.
- Respect `prefers-reduced-motion` through the existing motion utilities.
- No autoplay video, scroll hijacking, or motion required to understand content.
- Avoid mounting the entire page as a client component solely for animation.

### Responsive behavior

Design intentionally for:

- 360–430px phones
- Tablets around 768px
- Common laptops at 1366×768
- Desktop screens at 1440px and above

The hero, statistics, products, loop diagram, citations, CTA, and navigation must remain readable without horizontal overflow. Touch targets should be at least 44×44px where practical.

## Navigation and portfolio integration

Revise the global navigation so users can discover FinSpark without overcrowding the floating nav.

Recommended approach:

- Preserve important homepage anchors.
- Add a concise `Ventures` or `Companies` menu treatment that exposes FinSpark and Sparkgreen, or add both as direct links if spacing remains robust.
- Show the active route correctly with `aria-current="page"`.
- On `/finspark`, use a FinSpark-aware visual variant while retaining a clear connection to Sparkcraft Technologies.
- Ensure cross-route homepage anchors work from `/finspark` and `/sparkgreen`.
- Keep the mobile menu usable, focus-visible, dismissible, and body-scroll-safe.

Add a tasteful portfolio section to the parent homepage introducing FinSpark and Sparkgreen. Each entry should explain its problem space and link to its route. Do not make the homepage a duplicate of either subsidiary page.

## SEO and structured data

For `/finspark`:

- Add unique title and meta description.
- Add an absolute canonical URL at `https://sparkcraft.co.tz/finspark`.
- Add Open Graph and Twitter metadata using the existing helper.
- Create a route-specific 1200×630 Open Graph image.
- Add `/finspark` to the sitemap.
- Ensure it remains crawlable through the existing robots configuration.
- Update organization/brand structured data so the parent is Sparkcraft Technologies.
- Add FinSpark structured data only where schema fields can be supported factually.

Suggested metadata direction:

- Title: `FinSpark | Last-Mile Financial Infrastructure`
- Description: `FinSpark builds credit, insurance, transaction and distribution infrastructure that helps regulated partners serve farmers, traders and cooperatives across the last mile.`

Do not add unsupported ratings, customer counts, launch dates, awards, licenses, or geographic coverage.

## Accessibility

- Preserve the skip link and `#main-content` landmark.
- Use semantic headings with one clear H1.
- Use real buttons for actions and links for navigation.
- Provide visible focus states.
- Maintain accessible color contrast.
- Give diagrams an equivalent text explanation.
- Hide purely decorative SVG/CSS art from assistive technology.
- Do not use `aria-current` on tab-like controls; use appropriate tab semantics if tabs are introduced.
- Ensure keyboard users can access every product and navigation control.
- Test with motion reduction enabled.

## Content and legal safeguards

The supplied HTML is a reference artifact, not an authority for factual or regulatory claims. It also contains an internal editorial note that must never appear in the public UI.

Before finalizing:

- Verify all statistics and cite primary sources.
- Do not claim FinSpark has a license, regulatory approval, sandbox membership, live underwriting authority, deployed customers, or validated outcomes without explicit evidence.
- Do not state that partners own all data or that consent/privacy compliance is guaranteed unless the actual contracts and architecture support that statement.
- Never expose keys, credentials, customer information, or private operational data.
- Preserve the distinction between technology infrastructure and regulated financial activity.
- Flag unresolved claims in the implementation summary for human/legal review.

## Engineering expectations

- Reuse the repository’s existing section, button, reveal, metadata, and utility patterns where they improve consistency.
- Extract reusable FinSpark content into typed data structures.
- Keep server components as the default; add `"use client"` only where interaction or Framer Motion requires it.
- Avoid new dependencies unless there is a clear, documented need.
- Do not add a CMS, database, analytics, or form service without explicit authorization.
- Avoid editing legacy static root files unless asked to archive/remove them.
- Keep the build compatible with the existing Vercel configuration.
- Do not perform an unrelated Next.js major upgrade as part of this design task.

## Required validation

Run and report:

```bash
npm run lint
npm run build
```

Also verify manually or with browser tooling:

- `/` loads and all homepage anchors work.
- `/finspark` loads with no console errors.
- `/sparkgreen` remains visually and functionally intact.
- Desktop and mobile navigation work on all three routes.
- FinSpark primary and secondary CTAs go to the intended targets.
- No horizontal overflow at 360px.
- No text or interactive control is obscured by the fixed navbar.
- Keyboard navigation and focus states are usable.
- Reduced-motion behavior works.
- Page metadata, canonical URL, sitemap entry, and OG image resolve.
- The internal note from the source HTML is absent from rendered output.
- No unsupported regulatory or performance claim has been introduced.

## Documentation

Update documentation to reflect only what was actually implemented:

- `README.md`: company name, route list, implemented features, architecture summary
- `docs/CODEBASE.md`: new route/components/data files
- `docs/PROJECT-STATUS.md`: current features and genuinely unresolved items
- `docs/CHANGELOG.md`: concise dated summary
- Any SEO or architecture document directly made inaccurate by this work

The existing project-status documents contain stale items, including features that have already been completed. Correct those while preserving legitimate unresolved infrastructure issues and historical context.

## Deliverables

Return:

1. A concise design rationale.
2. A file-by-file summary of implementation changes.
3. A list of all renamed brand references.
4. Validation results with exact commands.
5. Responsive and accessibility checks performed.
6. Any claims, statistics, licensing language, or contact details needing human confirmation.
7. Any remaining risks or intentionally deferred work.

Do not claim completion if lint, type checking, or build fails. Do not deploy or merge the work.

## Definition of done

The work is complete when Sparkcraft presents itself consistently as **Sparkcraft Technologies**, the homepage clearly communicates the technology-group portfolio, `/finspark` delivers a distinctive and credible last-mile financial-infrastructure story, `/sparkgreen` remains intact, all routes are discoverable and accessible, SEO is complete, documentation is synchronized, and the repository passes lint and production build validation.
