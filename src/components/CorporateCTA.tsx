import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CorporateCTA({ title = "Let’s talk about what you need.", description = "Share your requirements and we’ll discuss an appropriate next step for your organization." }: { title?: string; description?: string }) {
  return <section className="bg-[var(--sc-amber)] py-14 md:py-20"><div className="container-wide flex flex-wrap items-center justify-between gap-8"><div><p className="text-sm font-bold uppercase tracking-[.16em] text-[var(--sc-accent-ink)]">Start a conversation</p><h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-[var(--sc-navy)] md:text-4xl">{title}</h2><p className="mt-4 max-w-2xl text-[var(--sc-body)]">{description}</p></div><Link href="/contact" className="corporate-button !bg-[var(--sc-navy)] !text-white">Request a Quote <ArrowUpRight size={18}/></Link></div></section>;
}
