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
