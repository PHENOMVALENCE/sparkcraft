"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const footerCols = {
  Services: [
    "Market Intelligence",
    "Country Assessment",
    "Stakeholder Management",
    "Permitting & Compliance",
  ],
  Expertise: [
    "Mining & Extractives",
    "Oil & Gas",
    "Government Relations",
    "Local Content",
    "Tenement Management",
  ],
  Company: ["About Us", "Who We Serve", "Sectors", "Contact"],
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
          <p className="text-sm text-zinc-300 md:text-base">Africa Market Intelligence & Advisory</p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerCols).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-spark-accent">
                {title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-spark-accent">
              Contact
            </h3>
            <p className="mt-4 flex items-center gap-2 text-sm text-zinc-300">
              <MapPin size={16} className="text-spark-accent" />
              Dar es Salaam, Tanzania
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs text-zinc-400 md:text-sm">
          © 2025 Sparkcraft Consulting. All rights reserved. · Empowering informed decisions across
          Africa.
        </div>
      </div>
    </motion.footer>
  );
}