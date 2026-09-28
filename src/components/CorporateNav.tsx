"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { divisions } from "@/lib/solutions";

const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About Us" }, { href: "/services", label: "Services" }, { href: "/portfolio", label: "Portfolio & Partners" }, { href: "/contact", label: "Contact" }];

export default function CorporateNav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <header className="corporate-nav">
    <nav className="container-wide flex items-center justify-between gap-5 py-4" aria-label="Main navigation">
      <Link href="/" className="shrink-0 leading-tight" onClick={() => setOpen(false)} aria-label="SparkCraft Technologies home"><span className="block text-xl font-black tracking-tight">SPARKCRAFT</span><span className="block text-xs font-bold uppercase tracking-[.22em] text-spark-accent">TECHNOLOGIES</span></Link>
      <div className="hidden items-center gap-6 lg:flex">{links.map(link => <Link key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined} className="text-sm font-semibold hover:text-spark-accent">{link.label}</Link>)}<Link href="/contact" className="corporate-button">Request a Quote</Link></div>
      <button type="button" className="rounded-lg border border-white/40 p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-controls="corporate-mobile-nav" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <nav id="corporate-mobile-nav" className="container-wide max-h-[75dvh] overflow-auto border-t border-white/20 pb-5 lg:hidden" aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/15 py-3">{link.label}</Link>)}<div className="py-2 text-xs uppercase tracking-widest text-spark-accent">Our services</div>{divisions.map(item => <Link key={item.id} href={`/services#${item.id}`} onClick={() => setOpen(false)} className="block py-2 pl-3">{item.name}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="corporate-button mt-4">Request a Quote</Link></nav>}
  </header>;
}
