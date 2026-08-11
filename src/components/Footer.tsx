"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const footerCols: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Market Intelligence", href: "/#services" },
    { label: "Country Assessment", href: "/#services" },
    { label: "Stakeholder Management", href: "/#services" },
    { label: "Permitting & Compliance", href: "/#services" },
  ],
  Expertise: [
    { label: "Mining & Extractives", href: "/#expertise" },
    { label: "Oil & Gas", href: "/#expertise" },
    { label: "Government Relations", href: "/#expertise" },
    { label: "Local Content", href: "/#expertise" },
  ],
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Who We Serve", href: "/#who-we-serve" },
    { label: "Sectors", href: "/#sectors" },
    { label: "Sparkgreen", href: "/sparkgreen" },
    { label: "Contact", href: "/#contact" },
  ],
};

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/sparkgreen") {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-spark-dark py-16 text-white">
      <div className="container-wide">
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-8 border-b border-white/10 pb-10">
            <div className="max-w-sm">
              <Link href="/" className="leading-none">
                <span className="block text-xl font-black tracking-tightest text-white md:text-2xl">
                  SPARKCRAFT
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-wider2 text-spark-accent md:text-xs">
                  CONSULTING
                </span>
              </Link>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Africa market intelligence and advisory — helping organisations navigate
                complexity with evidence-led strategy.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-spark-accent hover:text-spark-accent"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerCols).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-spark-accent">
                {title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="link-underline text-sm text-zinc-400">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-spark-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <a
                  href="mailto:contact@sparkcraft.co.tz"
                  className="inline-flex items-center gap-2 transition-colors hover:text-spark-accent"
                >
                  <Mail size={15} className="shrink-0 text-spark-accent" aria-hidden="true" />
                  contact@sparkcraft.co.tz
                </a>
              </li>
              <li>
                <a
                  href="tel:+255756948267"
                  className="inline-flex items-center gap-2 transition-colors hover:text-spark-accent"
                >
                  <Phone size={15} className="shrink-0 text-spark-accent" aria-hidden="true" />
                  +255 756 948 267
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} className="shrink-0 text-spark-accent" aria-hidden="true" />
                Dar es Salaam, Tanzania
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-zinc-500 md:text-sm">
          <p>
            © {new Date().getFullYear()} Sparkcraft Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
