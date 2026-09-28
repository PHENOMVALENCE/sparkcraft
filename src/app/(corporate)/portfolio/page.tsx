import CorporatePageIntro from "@/components/CorporatePageIntro";
import CorporateCTA from "@/components/CorporateCTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Our Portfolio & Partners | SparkCraft Technologies", description: "Learn how SparkCraft approaches ICT, digital payment, and enterprise procurement engagements and partnerships.", path: "/portfolio" });
const areas = [
  ["01", "Enterprise ICT", "Computing equipment, networking infrastructure, configuration, and deployment."],
  ["02", "Digital payments", "Supported payment connectivity, reporting, and reconciliation workflows."],
  ["03", "Institutional procurement", "Specification-led sourcing and coordinated delivery of operational supplies."],
];
export default function PortfolioPage() {
  return <main id="main-content">
    <CorporatePageIntro eyebrow="Portfolio & partnerships" title="Collaboration connects technology with opportunity." description="Effective delivery depends on technical expertise, responsiveness, and a clear understanding of each client’s environment." action={{ label: "Discuss an engagement", href: "/contact" }}/>
    <section className="corporate-section container-wide grid gap-10 lg:grid-cols-2" data-reveal><div><p className="corporate-kicker">How we collaborate</p><h2 className="corporate-title mt-4">Built around the work that needs to get done.</h2></div><div className="corporate-copy space-y-5"><p>We work with organizations and technology providers to define requirements, coordinate implementation, and support business needs across ICT, digital payments, and enterprise procurement.</p><p>Each engagement is shaped by the systems involved, the agreed scope, and the outcomes expected. We present only verified client work and approved partnerships as case studies.</p></div></section>
    <section className="corporate-section bg-[var(--sc-surface)]"><div className="container-wide"><p className="corporate-kicker">Solution areas</p><h2 className="corporate-title mt-4">Where we can support your organization.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{areas.map(([number, title, copy]) => <article className="corporate-card" key={title} data-reveal><span className="text-3xl font-light text-[var(--sc-accent-ink)]">{number}</span><h3 className="mt-8 text-2xl font-bold">{title}</h3><p className="corporate-copy mt-4">{copy}</p></article>)}</div><p className="mt-8 max-w-3xl border-l-2 border-[var(--sc-gold)] pl-5 text-sm leading-7 text-[var(--sc-muted)]">Verified project details and approved partner references will be added as they become available. These solution areas are not claims of completed projects.</p></div></section>
    <CorporateCTA title="Bring us your next technology requirement." description="We’ll review the scope, discuss available options, and align the next steps with your organization’s needs."/>
  </main>;
}
