import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import CorporatePageIntro from "@/components/CorporatePageIntro";
import CorporateCTA from "@/components/CorporateCTA";
import { corporateImages } from "@/lib/corporate-images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "About SparkCraft Technologies | Technology Solutions Tanzania", description: "Learn about SparkCraft Technologies, a Tanzania-based provider of ICT, fintech integration, and enterprise procurement services.", path: "/about" });
const values = [
  ["Integrity & Accountability", "Transparency, professional conduct, and responsible delivery."],
  ["Innovation & Practicality", "Technology that addresses real operational challenges."],
  ["Client-Centered Service", "Solutions developed around the organizations we serve."],
  ["Quality & Reliability", "Appropriate specifications, professional implementation, and dependable service."],
  ["Collaboration", "Working with clients, technology providers, and partners toward agreed objectives."],
];

export default function AboutPage() {
  return <main id="main-content">
    <CorporatePageIntro eyebrow="About SparkCraft Technologies" title="Technology, connectivity, and reliable solutions." description="We help organizations acquire, deploy, connect, and maintain the systems and operational resources they need to perform." action={{ label: "Explore our services", href: "/services" }}/>
    <section className="container-wide pt-12 md:pt-16" data-reveal><div className="corporate-photo-panel relative min-h-[280px] sm:min-h-[380px] lg:min-h-[520px]"><Image src={corporateImages.about.src} alt={corporateImages.about.alt} fill priority sizes="100vw" className="object-cover"/></div></section>
    <section className="corporate-section container-wide grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24" data-reveal><div><p className="corporate-kicker">Who we are</p><h2 className="corporate-title mt-4">Built around real business needs.</h2></div><div className="corporate-copy space-y-5"><p>SparkCraft Technologies is a Tanzania-based technology solutions provider focused on helping businesses and institutions access the technology, digital systems, and operational resources they need.</p><p>Headquartered in Dar es Salaam, we bring together ICT solutions, fintech integration, and enterprise procurement to address practical challenges across industries.</p><p>We believe technology should help organizations work more efficiently, connect their systems, improve visibility, and serve their customers better. Our approach combines requirements assessment with sourcing, implementation coordination, integration, and support.</p></div></section>
    <section className="corporate-section bg-[var(--sc-surface)]"><div className="container-wide grid gap-6 sm:grid-cols-2"><article className="corporate-card" data-reveal><span className="corporate-kicker">Our vision</span><h2 className="mt-5 text-2xl font-bold">A trusted solutions partner</h2><p className="corporate-copy mt-4">To become a trusted technology and business solutions partner across Tanzania and the wider African market, enabling growth through innovation, connectivity, and reliable service delivery.</p></article><article className="corporate-card" data-reveal><span className="corporate-kicker">Our mission</span><h2 className="mt-5 text-2xl font-bold">Practical, lasting value</h2><p className="corporate-copy mt-4">To empower businesses and institutions with accessible technology, integrated digital solutions, and dependable procurement services that improve operational efficiency.</p></article></div></section>
    <section className="corporate-section container-wide" data-reveal><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="corporate-kicker">What guides us</p><h2 className="corporate-title mt-4">Our Core Values</h2><p className="corporate-copy mt-6">Our focus remains the same in every engagement: make technology work for your organization.</p></div><div className="divide-y divide-[var(--sc-border)] border-y border-[var(--sc-border)]">{values.map(([title, copy]) => <div className="flex gap-4 py-5 sm:gap-5" key={title}><CheckCircle2 size={23} className="mt-1 shrink-0 text-[var(--sc-accent-ink)]"/><div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 leading-7 text-[var(--sc-muted)]">{copy}</p></div></div>)}</div></div></section>
    <section className="bg-[var(--sc-navy)] py-12 text-white sm:py-16"><div className="container-wide grid gap-7 lg:grid-cols-[.8fr_1.2fr]" data-reveal><p className="corporate-kicker corporate-kicker-light">Our commitment</p><div><h2 className="text-3xl font-bold leading-tight md:text-4xl">Clear requirements. Practical recommendations. Accountable delivery.</h2><p className="mt-5 max-w-2xl leading-8 text-white/75">We commit to understanding each project, communicating clearly, and delivering against agreed specifications and timelines.</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--sc-gold-light)]">Talk to our team <ArrowUpRight size={18}/></Link></div></div></section>
    <CorporateCTA />
  </main>;
}
