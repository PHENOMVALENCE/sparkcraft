# SparkCraft website architecture

Last reviewed: 28 September 2026. This describes repository behavior, not verified production configuration.

## Runtime

Next.js 14 App Router renders static corporate and venture pages. There is no API route, database, authentication, or CMS in this repository. Corporate content is defined in `src/lib/solutions.ts` and page components. The contact form runs in the browser and prepares a `mailto:` link; it does not store inquiries. The frontend uses Tailwind CSS and route-specific styles in `src/app/globals.css`.

## Routes and shells

| Route | Source | Purpose |
| --- | --- | --- |
| `/` | `src/app/(corporate)/page.tsx` | Corporate homepage |
| `/about` | `src/app/(corporate)/about/page.tsx` | Company profile |
| `/services` | `src/app/(corporate)/services/page.tsx` | Three service divisions and inquiry CTAs |
| `/portfolio` | `src/app/(corporate)/portfolio/page.tsx` | General engagement categories pending verified references |
| `/contact` | `src/app/(corporate)/contact/page.tsx` | Contact information and email preparation form |
| `/privacy`, `/terms` | `src/app/(corporate)/` | Website information pages |
| `/finspark`, `/sparkgreen` | `src/app/` | Existing venture pages |

The route group `(corporate)` adds the corporate navigation and footer without changing URLs. The root layout supplies font, metadata, structured data, and skip link. `VentureChrome` keeps the existing venture navigation on the two venture paths; each venture provides its own footer. Corporate pages use their own responsive header and footer. The old homepage section components remain in the source tree but are no longer rendered on the parent site.

## Metadata

`src/lib/seo.ts` creates canonical, Open Graph, and Twitter metadata. Corporate pages share the root Open Graph image; venture routes retain their route-specific images. `src/app/sitemap.ts` lists public routes and `robots.ts` links to it. `JsonLd.tsx` contains organization contact and brand data. Editorial claims in venture content should be reviewed separately.

## Delivery

`vercel.json` specifies Next.js commands; `next.config.js` selects standalone output. `.github/workflows/ci.yml` installs locked dependencies, checks TypeScript, and builds on pull request open, synchronize, and reopen. See `README.md` for local commands and `docs/REBRAND.md` for publication checks and the inquiry limitation.
