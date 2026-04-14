"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "African Markets Covered" },
  { value: "4", label: "Core Advisory Services" },
  { value: "6", label: "Key Industry Sectors" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-spark-dark pt-24 text-white">
      <div className="grain-overlay absolute inset-0" aria-hidden="true" />
      <div className="container-wide relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <p className="mb-6 inline-flex rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Africa Market Intelligence & Advisory
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tightest sm:text-6xl md:text-7xl lg:text-8xl">
            Africa&apos;s Markets,
            <br />
            Decoded for You.
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-200 md:text-lg">
            Sparkcraft Consulting is a leading advisory firm providing business intelligence,
            market entry strategy, and regulatory navigation for companies entering or
            expanding across African markets - from Dar es Salaam to the continent.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-spark-accent px-7 py-3 text-sm font-semibold text-spark-dark transition-transform hover:-translate-y-0.5"
            >
              Start Your Engagement →
            </a>
            <a
              href="#services"
              className="rounded-full border border-white px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-spark-dark"
            >
              Our Services
            </a>
          </div>

          <motion.div
            className="mt-12 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-3xl font-black text-spark-accent md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-zinc-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 inline-flex rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs font-medium text-white/90">
            📍 Dar es Salaam, Tanzania · Operating Across Africa
          </div>
        </motion.div>
      </div>
    </section>
  );
}