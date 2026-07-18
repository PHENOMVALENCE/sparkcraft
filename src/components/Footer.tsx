"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

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
    { label: "Tenement Management", href: "/#expertise" },
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
  return (
    <motion.footer
      className="bg-spark-dark py-16 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-10">
          <Link href="/" className="leading-none">
            <span className="block text-xl font-black tracking-tightest text-white md:text-2xl">
              SPARKCRAFT
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider2 text-spark-accent md:text-xs">
              CONSULTING
            </span>
          </Link>
          <p className="text-sm text-zinc-300 md:text-base">
            Africa Market Intelligence &amp; Advisory
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerCols).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-spark-accent">
                {title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition-colors hover:text-spark-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-spark-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>
                <a
                  href="mailto:contact@sparkcraft.co.tz"
                  className="flex items-center gap-2 transition-colors hover:text-spark-accent"
                >
                  <Mail size={16} className="shrink-0 text-spark-accent" aria-hidden="true" />
                  contact@sparkcraft.co.tz
                </a>
              </li>
              <li>
                <a
                  href="tel:+255756948267"
                  className="flex items-center gap-2 transition-colors hover:text-spark-accent"
                >
                  <Phone size={16} className="shrink-0 text-spark-accent" aria-hidden="true" />
                  +255 756 948 267
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-spark-accent" aria-hidden="true" />
                Dar es Salaam, Tanzania
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-zinc-400 md:text-sm">
          <p>
            © 2025 Sparkcraft Consulting. All rights reserved. · Empowering informed decisions
            across Africa.
          </p>
          <a
            href="#"
            aria-label="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-spark-accent hover:text-spark-accent"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
