import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import CorporatePageIntro from "@/components/CorporatePageIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Contact SparkCraft Technologies | Request a Quote", description: "Contact SparkCraft Technologies in Dar es Salaam for ICT, fintech integration, IT equipment, and procurement quotations.", path: "/contact" });

export default function ContactPage() {
  return <main id="main-content">
    <CorporatePageIntro eyebrow="Contact" title="Let’s discuss your next project." description="Tell us what your organization needs. We’ll review the details and discuss practical next steps with you."/>
    <section className="corporate-section bg-[var(--sc-surface)]"><div className="container-wide grid min-w-0 items-start gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><div data-reveal><p className="corporate-kicker">Get in touch</p><h2 className="mt-4 text-3xl font-bold">Start with a conversation.</h2><p className="corporate-copy mt-5">Whether you need enterprise technology, payment integration, IT support, or institutional supplies, share your requirements with our team.</p><dl className="mt-10 space-y-7 border-t border-[var(--sc-border)] pt-8"><div className="flex gap-4"><Mail className="mt-1 shrink-0 text-[var(--sc-accent-ink)]"/><div><dt className="text-sm font-bold uppercase tracking-widest text-[var(--sc-accent-ink)]">Email</dt><dd className="mt-2 min-w-0 text-base sm:text-lg"><a className="break-all hover:underline" href="mailto:contact@sparkcraft.co.tz">contact@sparkcraft.co.tz</a></dd></div></div><div className="flex gap-4"><Phone className="mt-1 shrink-0 text-[var(--sc-accent-ink)]"/><div><dt className="text-sm font-bold uppercase tracking-widest text-[var(--sc-accent-ink)]">Phone</dt><dd className="mt-2 text-lg"><a className="hover:underline" href="tel:+255756948267">+255 756 948 267</a></dd></div></div><div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-[var(--sc-accent-ink)]"/><div><dt className="text-sm font-bold uppercase tracking-widest text-[var(--sc-accent-ink)]">Location</dt><dd className="mt-2 text-lg">Dar es Salaam, Tanzania</dd></div></div></dl></div><Suspense fallback={<p>Loading inquiry form…</p>}><InquiryForm /></Suspense></div></section>
  </main>;
}
