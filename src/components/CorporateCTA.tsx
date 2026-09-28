import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CorporateCTA({ title = "Let’s talk about what you need.", description = "Share your requirements and we’ll discuss an appropriate next step for your organization." }: { title?: string; description?: string }) {
  return <section className="bg-[var(--sc-amber)] py-12 sm:py-14 md:py-20"><div className="container-wide flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center sm:gap-8"><div><p className="text-sm font-bold uppercase tracking-[.16em] text-[var(--sc-accent-ink)]">Start a conversation</p><h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-[var(--sc-navy)] sm:text-3xl md:text-4xl">{title}</h2><p className="mt-4 max-w-2xl text-[var(--sc-body)]">{description}</p></div><Link href="/contact" className="corporate-button w-full !bg-[var(--sc-navy)] !text-white sm:w-auto">Request a Quote <ArrowUpRight size={18}/></Link></div></section>;
}
