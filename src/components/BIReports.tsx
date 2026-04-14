"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { reportItems } from "@/lib/data";

export default function BIReports() {
  return (
    <motion.section
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container-wide overflow-hidden rounded-3xl border border-spark-primary/10">
        <div className="grid lg:grid-cols-2">
          <div className="bg-spark-primary p-10 text-white md:p-14">
            <p className="section-label">BUSINESS INTELLIGENCE</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Know Your Market Before You Enter It
            </h2>
            <p className="mt-6 max-w-xl text-zinc-200 md:text-lg">
              Our business intelligence reports are the foundation of every market entry
              engagement. Built from primary research, stakeholder interviews, regulatory
              analysis, and commercial data, each report gives your team an unfair advantage.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-spark-accent px-6 py-3 text-sm font-semibold text-spark-dark"
            >
              Request a Report →
            </a>
          </div>

          <div className="bg-[#f4f0e5] p-10 md:p-14">
            <div className="rounded-2xl border border-spark-primary/10 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-spark-primary/70">
                REPORT PREVIEW
              </p>
              <h3 className="mt-3 text-2xl font-bold text-spark-primary">
                Market Entry Intelligence Dossier
              </h3>
              <ul className="mt-7 space-y-4">
                {reportItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-800">
                    <Check size={18} className="mt-1 text-spark-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}