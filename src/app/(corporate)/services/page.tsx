import Link from "next/link";
import { ArrowUpRight, CreditCard, Network, PackageCheck } from "lucide-react";
import CorporatePageIntro from "@/components/CorporatePageIntro";
import CorporateCTA from "@/components/CorporateCTA";
import { divisions, sectors } from "@/lib/solutions";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "ICT, Fintech & General Supplies | SparkCraft Technologies", description: "Explore SparkCraft's ICT solutions, enterprise hardware, payment integration, IT support, and general procurement in Tanzania.", path: "/services" });
const icons = [Network, CreditCard, PackageCheck];

export default function ServicesPage() {
  return <main id="main-content">
    <CorporatePageIntro eyebrow="Our services" title="Technology and business solutions, designed around you." description="From individual equipment requirements to integrated technology projects, our three divisions help organizations access, deploy, and maintain what they need." action={{ label: "Request a quote", href: "/contact" }}/>
    <nav className="corporate-service-nav" aria-label="Service sections"><div className="container-wide flex gap-2 overflow-x-auto py-4">{divisions.map(item => <a key={item.id} href={`#${item.id}`} className="shrink-0 rounded-md px-4 py-2.5 text-sm font-bold text-[var(--sc-navy)] transition-colors hover:bg-[var(--sc-surface)] focus-visible:bg-[var(--sc-surface)]">{item.name}</a>)}</div></nav>
    {divisions.map((item, i) => { const Icon = icons[i]; return <section id={item.id} key={item.id} className={`corporate-section scroll-mt-36 ${i % 2 === 0 ? "bg-white" : "bg-[var(--sc-surface)]"}`}><div className="container-wide"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16" data-reveal><div><div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--sc-amber)] text-[var(--sc-navy)]"><Icon size={30} strokeWidth={1.6}/></div><p className="corporate-kicker mt-7">Service {item.number} / Flagship</p><h2 className="corporate-title mt-4">{item.name}</h2></div><div className="self-end"><p className="text-2xl font-semibold text-[var(--sc-link)]">{item.headline}</p><p className="corporate-copy mt-5">{item.description}</p></div></div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{item.offerings.map(([title, copy]) => <article key={title} className="corporate-card corporate-service-card" data-reveal><h3 className="text-xl font-bold">{title}</h3><p className="corporate-copy mt-3">{copy}</p></article>)}</div>
      {item.id === "ict" && <div className="mt-14 border-t border-[var(--sc-border)] pt-10"><h3 className="text-2xl font-bold">Solutions across industries</h3><div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{sectors.slice(0, 5).map(([title, copy]) => <div className="border-l-2 border-[var(--sc-gold)] pl-5" key={title}><h4 className="font-bold">{title}</h4><p className="mt-2 leading-7 text-[var(--sc-muted)]">{copy}</p></div>)}</div></div>}
      {item.id === "fintech" && <p className="mt-10 max-w-4xl border-l-2 border-[var(--sc-gold)] pl-5 text-sm leading-7 text-[var(--sc-muted)]">Payment processing, aggregation, settlement, and handling of customer funds are subject to applicable Tanzanian requirements and relevant provider authorizations. SparkCraft’s role is defined by each agreed technical scope; integration itself does not constitute a payment service licence.</p>}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--sc-border)] pt-8"><p className="max-w-2xl leading-7 text-[var(--sc-muted)]">{item.prompt}</p><Link href={`/contact?service=${item.id}`} className="corporate-button">{item.cta} <ArrowUpRight size={17}/></Link></div></div></section>; })}
    <CorporateCTA title="Need help choosing the right solution?" description="Tell us about the challenge, and we’ll help identify the right service and scope."/>
  </main>;
}
