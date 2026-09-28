# Responsive review

Reviewed: 28 September 2026

## Scope

This responsive pass covers the SparkCraft corporate experience:

- global corporate navigation and footer;
- homepage hero, services, partner marquee, advantages, sectors, process, and CTA;
- Services page and sticky service navigation;
- About page;
- Portfolio page;
- Contact page and direct contact pathways;
- Privacy and Terms pages through shared container and typography rules.

FinSpark and SparkGreen retain their route-scoped visual systems and were not restyled by this corporate pass.

## Breakpoint strategy

- Mobile: below 640px
- Small/tablet: 640px and above
- Desktop: 1024px and above
- Wide layouts: 1280px and above where card density benefits from additional width

## Revisions made

- Corporate gutters reduce to 16px on small phones and expand progressively.
- Hero typography uses a lower mobile floor and mobile CTAs stack full-width.
- Hero, About, and service photography use shorter mobile heights and scale up by breakpoint.
- Three-column layouts defer to wider breakpoints where needed to avoid cramped cards.
- The four-step delivery process uses two columns on medium screens and four on wide screens.
- Page-intro supporting copy uses a top rule on mobile and a left rule on wider screens.
- Sticky service tabs are horizontally scrollable, snap to items, and hide scrollbars.
- Mobile navigation uses 44px minimum touch targets and a viewport-safe scroll region.
- - Footer, legal links, contact email, and CTAs wrap safely on narrow screens.
- Partner marquee cards reduce in size on mobile and animation respects reduced-motion preferences.
- Hover transforms are neutralized on non-hover touch devices.

## QA widths

Review at minimum:

- 320px, 360px, 390px, and 430px phones;
- 768px and 820px tablets;
- 1024px landscape/tablet-small-desktop;
- 1280px and 1440px desktops.

## Interaction checks

- mobile menu open/close and internal scrolling;
- Services sticky tabs and anchor jumps;
- partner marquee motion and reduced-motion mode;
- direct contact and email-action layout on iOS and Android;
- long text wrapping in footer and contact details;
- CTA buttons and service cards across tablet breakpoints.
