import Image from "next/image";
import CorporateCTA from "@/components/CorporateCTA";
import PartnersMarquee from "@/components/PartnersMarquee";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, CreditCard, GraduationCap, HeartPulse, Network, PackageCheck, Truck, Users } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { corporateImages } from "@/lib/corporate-images";
import { divisions, sectors } from "@/lib/solutions";

export const metadata = createPageMetadata({ title: "SparkCraft Technologies | ICT, Fintech & Enterprise Solutions", description: "SparkCraft Technologies delivers ICT solutions, digital payment integration, and enterprise procurement in Dar es Salaam, Tanzania.", path: "" });
const serviceIcons = [Network, CreditCard, PackageCheck];
const sectorIcons = [CreditCard, Building2, GraduationCap, HeartPulse, Truck, Users];
const advantages = [
  ["Solutions built around you", "Products and configurations aligned with your requirements, environment, and budget."],
  ["Connected capabilities", "Hardware, software, payment connectivity, and procurement in one coordinated engagement."],
  ["Partnership-led delivery", "We work with clients and technology providers toward agreed business objectives."],
  ["Support beyond deployment", "Installation, maintenance, troubleshooting, and technical support under agreed arrangements."],
];
const steps = [
  ["Understand", "We assess your objectives, environment, budget, and delivery expectations."],
  ["Design & Source", "We identify suitable products, configurations, and integration options."],
  ["Deploy & Integrate", "We coordinate supply, installation, testing, and handover."],
  ["Support & Maintain", "We provide agreed support and follow-up to help sustain performance."],
];

export default function Home() {
  return <main id="main-content" className="bg-white">
    <section className="grid lg:grid-cols-2" aria-labelledby="home-heading">
      <div className="flex items-center bg-[var(--sc-amber)] px-6 py-16 sm:px-10 lg:min-h-[610px] lg:px-[max(3rem,calc((100vw-80rem)/2))] lg:pr-12">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-[var(--sc-accent-ink)]">ICT · Fintech · Enterprise Solutions</p>
          <h1 id="home-heading" className="mt-7 text-[clamp(2.75rem,5vw,5.2rem)] font-semibold leading-[1.07] tracking-[-.055em] text-[var(--sc-navy)]">Technology That Moves Your Business Forward.</h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[var(--sc-body)]">SparkCraft delivers ICT solutions, digital payment integration, and essential business supplies to help organizations operate efficiently and grow with confidence.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/services" className="corporate-button !bg-[var(--sc-navy)] !text-white">Explore Our Solutions <ArrowUpRight size={17}/></Link><Link href="/contact" className="corporate-button-outline border-[var(--sc-navy)] text-[var(--sc-navy)] hover:bg-[var(--sc-navy)] hover:text-white">Request a Quote</Link></div>
          <p className="mt-12 border-t border-[var(--sc-accent-ink)]/30 pt-5 text-sm font-medium text-[var(--sc-body)]">Dar es Salaam, Tanzania · Serving businesses and institutions</p>
        </div>
      </div>
      <div className="corporate-hero-photo"><Image src="/images/sparkcraft-hero.webp" alt="Technology professionals collaborating in a modern enterprise environment" fill priority sizes="(max-width: 1024px) 100vw, 50vw"/></div>
    </section>

    <section className="corporate-section container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20" data-reveal>
      <div className="corporate-image-frame relative min-h-[360px] sm:min-h-[520px]"><Image src={corporateImages.about.src} alt={corporateImages.about.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover"/></div>
      <div><p className="corporate-kicker">Your technology & business solutions partner</p><h2 className="corporate-title mt-4">The Right Technology. The Right Systems. The Right Support.</h2><div className="mt-8 h-px w-16 bg-[var(--sc-gold)]"/><p className="corporate-copy mt-8">Every organization needs reliable systems, efficient operations, and a partner who understands its business requirements.</p><p className="corporate-copy mt-5">Whether you are equipping an office, connecting payment channels, deploying digital systems, or sourcing essential supplies, we coordinate the work from assessment to delivery and agreed support.</p><div className="mt-7 flex flex-wrap gap-2"><span className="corporate-capability-pill">ICT Infrastructure</span><span className="corporate-capability-pill">Fintech Integration</span><span className="corporate-capability-pill">Enterprise Procurement</span></div><Link href="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-[var(--sc-link)] hover:gap-3">More about SparkCraft <ArrowRight size={18}/></Link></div>
    </section>

    <section className="corporate-section bg-[var(--sc-surface)]"><div className="container-wide"><div className="mx-auto max-w-3xl text-center" data-reveal><p className="corporate-kicker">What we do</p><h2 className="corporate-title mx-auto mt-4">Three Divisions. One Dependable Partner.</h2><p className="corporate-copy mt-5">From infrastructure to payment connectivity and essential supplies, our services are built around what your organization needs.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{divisions.map((item, i) => { const Icon = serviceIcons[i]; const visual = corporateImages.services[item.id]; return <article data-reveal className="corporate-card corporate-service-card overflow-hidden !p-0" key={item.id}><div className="corporate-card-image relative"><Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover"/></div><div className="flex h-full flex-col p-7"><div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--sc-amber)] text-[var(--sc-navy)]"><Icon size={27} strokeWidth={1.7}/></span><span className="text-xs font-bold tracking-widest text-[var(--sc-accent-ink)]">{item.number} / FLAGSHIP</span></div><h3 className="mt-7 text-2xl font-bold text-[var(--sc-navy)]">{item.name}</h3><p className="corporate-copy mt-4 flex-1">{item.short}</p><Link className="mt-8 inline-flex items-center gap-2 font-bold text-[var(--sc-link)]" href={`/services#${item.id}`}>Explore solution <ArrowUpRight size={18}/></Link></div></article>; })}</div><div className="mt-10 text-center"><Link href="/services" className="corporate-button !bg-[var(--sc-navy)] !text-white">Explore All Services <ArrowUpRight size={17}/></Link></div></div></section>

    <PartnersMarquee />

    <section className="corporate-section container-wide" data-reveal><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="corporate-kicker">The SparkCraft advantage</p><h2 className="corporate-title mt-4">More Than a Supplier. Your Technology Delivery Partner.</h2><p className="corporate-copy mt-6">Successful implementation starts with understanding your needs, sourcing appropriate solutions, and staying accountable through delivery.</p></div><div className="grid gap-px overflow-hidden rounded-lg border border-[var(--sc-border)] bg-[var(--sc-border)] sm:grid-cols-2">{advantages.map(([title, copy], i) => <div className="bg-white p-7" key={title}><span className="text-sm font-bold text-[var(--sc-accent-ink)]">0{i+1}</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="corporate-copy mt-3">{copy}</p></div>)}</div></div></section>

    <section className="corporate-section bg-[var(--sc-navy)] text-white"><div className="container-wide"><div className="max-w-3xl" data-reveal><p className="corporate-kicker corporate-kicker-light">Industries & sectors</p><h2 className="corporate-title mt-4">Technology for the Organizations That Keep Business Moving.</h2><p className="mt-5 text-lg leading-8 text-white/70">We support organizations across sectors with the systems and supplies needed to deliver services effectively.</p></div><div className="mt-10 grid gap-5 lg:grid-cols-3"><figure className="corporate-sector-photo relative min-h-64"><Image src={corporateImages.payments.src} alt={corporateImages.payments.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover"/><figcaption>Payments & financial services</figcaption></figure><figure className="corporate-sector-photo relative min-h-64"><Image src={corporateImages.corporate.src} alt={corporateImages.corporate.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover"/><figcaption>Corporate & enterprise</figcaption></figure><figure className="corporate-sector-photo relative min-h-64"><Image src={corporateImages.education.src} alt={corporateImages.education.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover"/><figcaption>Education & digital learning</figcaption></figure></div><div className="mt-6 grid gap-px overflow-hidden rounded-lg bg-white/20 md:grid-cols-2 lg:grid-cols-3">{sectors.map(([title, copy], i) => { const Icon = sectorIcons[i]; return <div data-reveal className="bg-[var(--sc-navy-soft)] p-7 transition-colors hover:bg-[var(--sc-navy-hover)]" key={title}><Icon className="text-[var(--sc-gold-light)]" size={27} strokeWidth={1.6}/><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-white/70">{copy}</p></div>; })}</div></div></section>

    <section className="corporate-section container-wide" data-reveal><div className="mx-auto max-w-2xl text-center"><p className="corporate-kicker">Our approach</p><h2 className="corporate-title mt-4">From Requirement to Reliable Delivery.</h2></div><div className="mt-14 grid gap-7 md:grid-cols-4">{steps.map(([title, copy], i) => <div className="border-t-2 border-[var(--sc-gold)] pt-6" key={title}><span className="text-4xl font-light text-[var(--sc-accent-ink)]">0{i+1}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="corporate-copy mt-3">{copy}</p></div>)}</div></section>

    <CorporateCTA title="Have a technology or procurement requirement?" description="Tell us what your organization needs and we’ll discuss an appropriate solution."/>
  </main>;
}
