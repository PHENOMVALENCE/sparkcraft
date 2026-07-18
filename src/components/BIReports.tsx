"use client";

import { motion } from "framer-motion";
import { Check, FileText } from "lucide-react";
import { reportItems } from "@/lib/data";

export default function BIReports() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-wide">
        <motion.div
          className="overflow-hidden rounded-3xl border border-spark-primary/10 shadow-lg"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative overflow-hidden bg-spark-primary p-10 text-white md:p-14">
              <div
                className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-spark-accent/10 blur-2xl"
                aria-hidden="true"
              />
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
                className="mt-8 inline-flex rounded-full bg-spark-accent px-6 py-3 text-sm font-semibold text-spark-dark shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Request a Report →
              </a>
            </div>

            <div className="bg-[#f4f0e5] p-10 md:p-14">
              <motion.div
                className="rounded-2xl border border-spark-primary/10 bg-white p-8 shadow-md"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-spark-primary/70">
                    REPORT PREVIEW
                  </p>
                  <FileText size={18} className="text-spark-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-2xl font-bold text-spark-primary">
                  Market Entry Intelligence Dossier
                </h3>
                <ul className="mt-7 space-y-4">
                  {reportItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-800">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-spark-accent/15">
                        <Check size={12} className="text-spark-accent" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
