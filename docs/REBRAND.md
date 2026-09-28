# Corporate website rebrand

## Positioning and page map

SparkCraft leads with technology delivery rather than market advisory. Its three divisions are ICT & Technology Solutions, Fintech & Digital Payments, and IT & General Supplies. Navigation: Home `/`, About `/about`, Services `/services` with `#ict`, `#fintech`, `#supplies`, Portfolio `/portfolio`, Contact `/contact`, plus `/privacy` and `/terms`. The existing venture pages are maintained at `/finspark` and `/sparkgreen` but are not presented as flagship corporate services.

The homepage moves from a clear B2B statement to divisions, capabilities, sectors, delivery steps, and a proposal CTA. This follows the reference site's straightforward service-to-quote information architecture without reproducing its copy, visual assets, testimonials, or claims.

## Content sources and approval

The corporate copy and contact details are based on the rebrand brief supplied for this change. The reference for information architecture was `https://axeglobal.co.tz/`, reviewed on 28 September 2026. The image search links in the brief are third-party references, not cleared website assets. No third-party logos or photographs were copied.

GSM Group of Companies, ICEALION, Azania Bank, and Simplify are **not published** as clients or partners pending confirmation of the exact relationship, permission to use each name and logo, and approved case details. The portfolio page contains explicitly general solution categories, not completed case studies. Add documented scope, dates, outcomes, approved images, and accurate relationship labels before making project claims. Validate hardware protection ratings per specific available model and confirm any warranties before quoting.

Payment integrations are described as technical services under the agreed scope. Verify partner capabilities and applicable authorizations before promising processing, aggregation, settlement, or custody functions. A technical integration does not itself grant a payment service licence.

## Inquiry flow and limitations

`/contact?service=ict|fintech|supplies` preselects a division. The client-side form uses required name, organization, email, service, and requirements fields. On submit it constructs an encoded `mailto:` subject and body. The visitor must send the email themselves. This requires a configured email application and gives no delivery confirmation or server-side audit trail. The `prepared` message explains the handoff. There is no CRM, attachment upload, analytics, or backend storage.

Before replacing mailto with an API: agree on a receiving system and retention policy; implement server-side validation, abuse protection, secure transport, consent/privacy text, delivery failure handling, and monitoring. Avoid placing sensitive credentials in inquiry text. The current privacy and terms pages describe only the observable website behavior and should receive legal review before production publication.

## SEO and accessibility

Corporate pages have route metadata, canonical URLs, a shared Open Graph image, sitemap entries, semantic headings, descriptive links, focus states, and a mobile menu. Review text and imagery at mobile widths and 200% text zoom. Recheck all claims, spelling of the legal brand, and local contact details before launch. Existing venture content retains its own branding and needs separate editorial review if its older advisory claims are no longer accurate.

## Validation and release

Run `npm ci`, `npx tsc --noEmit`, and `npm run build`. CI runs on PR open, synchronize, and reopen. Human review should verify copy and legal pages, confirm portfolio relationships and logos, test the mailto flow on target devices, and approve any production deployment. The repository has no documented deployment credentials.

## Visual interaction revision

The homepage uses a split warm-amber hero and original illustrative office imagery inspired by the supplied layout screenshot. These generated photographs depict fictional professionals; they are not SparkCraft staff, clients, or evidence of a completed engagement. The page then alternates editorial image-and-copy, service cards, a capability grid, sector grid, process steps, and an inquiry banner. The reference informed section rhythm and navigation clarity; SparkCraft's copy, components, and imagery are original.

The corporate header stays visible while scrolling, adds a desktop service menu with keyboard-operable toggle and Escape dismissal, and collapses to a mobile menu. Cards use small hover lifts; sections reveal when they enter the viewport. Reduced-motion preferences disable the movement, and content remains visible if JavaScript is unavailable. Recheck menu focus order and image crops on target devices during PR review.

## Corporate design system

The parent website uses a route-scoped palette in `.corporate-site` within `src/app/globals.css`: deep navy (`--sc-navy`), warm amber and gold (`--sc-amber`, `--sc-gold`), cool white and pale gray surfaces, and consistent muted and link colors. Shared classes define page heroes, typography, cards, fields, buttons, focus states, and section rhythm. The corporate footer, navigation, contact form, and all corporate routes consume those tokens. The favicon and Open Graph image use the same navy and gold identity. FinSpark and Sparkgreen retain their separate visual systems.

For future pages, use these semantic variables and shared classes instead of new hard-coded colors. Check text contrast in each context; gold labels on dark navy use `--sc-gold-light`, while text on light surfaces uses `--sc-accent-ink`. Keep body copy at or above 16px and preserve reduced-motion behavior.

## Complete corporate page system

The shared `CorporatePageIntro` gives About, Services, Portfolio, and Contact a consistent title, concise purpose, and optional next step. `CorporateCTA` closes informational pages with a direct inquiry. About explains identity, mission, values, and delivery commitment. Services offers a sticky section selector, detailed capabilities, and a relevant quote action for each division. Portfolio describes solution areas without implying verified case studies. Contact pairs direct channels with the service-specific inquiry form. This gives visitors a clear path from context to capability to contact across the whole site.
