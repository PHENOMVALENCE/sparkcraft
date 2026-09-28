"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { divisions } from "@/lib/solutions";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio & Partners" },
  { href: "/contact", label: "Contact" },
];

export default function CorporateNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); setServicesOpen(false); }, [path]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); setServicesOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return <header className={`corporate-nav ${scrolled ? "corporate-nav-scrolled" : ""}`}>
    <nav className="container-wide flex min-h-[68px] items-center justify-between gap-4 py-3 sm:min-h-[76px] sm:gap-5 sm:py-4" aria-label="Main navigation">
      <Link href="/" className="shrink-0 leading-tight" onClick={() => setOpen(false)} aria-label="SparkCraft Technologies home"><span className="block text-lg font-black tracking-tight sm:text-xl">SPARKCRAFT</span><span className="block text-[10px] font-bold uppercase tracking-[.18em] text-[var(--sc-gold-light)] sm:text-xs sm:tracking-[.22em]">TECHNOLOGIES</span></Link>
      <div className="hidden items-center gap-6 lg:flex">
        {links.slice(0, 2).map(link => <Link key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined} className="corporate-nav-link">{link.label}</Link>)}
        <div className="corporate-nav-group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
          <div className="flex items-center gap-1"><Link href="/services" aria-current={path === "/services" ? "page" : undefined} className="corporate-nav-link">Services</Link><button type="button" aria-label="Show services" aria-expanded={servicesOpen} aria-controls="corporate-services-menu" onClick={() => setServicesOpen(!servicesOpen)} className="rounded p-1 hover:bg-white/10"><ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}/></button></div>
          <div id="corporate-services-menu" className={`corporate-dropdown ${servicesOpen ? "corporate-dropdown-open" : ""}`} aria-hidden={!servicesOpen}><div className="p-3"><p className="px-3 pb-2 text-xs font-bold uppercase tracking-widest text-[var(--sc-accent-ink)]">Our solutions</p>{divisions.map(item => <Link key={item.id} href={`/services#${item.id}`} onClick={() => setServicesOpen(false)} tabIndex={servicesOpen ? 0 : -1} className="corporate-dropdown-item"><span className="text-xs font-bold text-[var(--sc-accent-ink)]">{item.number}</span><span><strong className="block text-sm text-[var(--sc-navy)]">{item.name}</strong><small className="mt-1 block leading-5 text-[var(--sc-muted)]">{item.short}</small></span><ArrowUpRight size={17} className="shrink-0"/></Link>)}</div></div>
        </div>
        {links.slice(2).map(link => <Link key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined} className="corporate-nav-link">{link.label}</Link>)}
        <Link href="/contact" className="corporate-button">Request a Quote <ArrowUpRight size={16}/></Link>
      </div>
      <button type="button" className="grid min-h-11 min-w-11 place-items-center rounded-lg border border-white/40 p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-controls="corporate-mobile-nav" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </nav>
    <nav id="corporate-mobile-nav" className={`corporate-mobile-nav lg:hidden ${open ? "corporate-mobile-nav-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}><div className="container-wide max-h-[calc(100dvh-68px)] overflow-y-auto overscroll-contain border-t border-white/20 pb-5">{links.slice(0,2).map(link => <Link key={link.href} href={link.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="block border-b border-white/15 py-3.5 text-base">{link.label}</Link>)}<Link href="/services" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="block border-b border-white/15 py-3">Services</Link>{divisions.map(item => <Link key={item.id} href={`/services#${item.id}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 pl-3 text-sm leading-5 text-white/75">{item.name}</Link>)}{links.slice(2).map(link => <Link key={link.href} href={link.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="block border-b border-white/15 py-3">{link.label}</Link>)}<Link href="/contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="corporate-button mt-5 w-full">Request a Quote <ArrowUpRight size={16}/></Link></div></nav>
  </header>;
}
