"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const stats = [
  { value: "30+", label: "African Markets Covered" },
  { value: "4", label: "Core Advisory Services" },
  { value: "6", label: "Key Industry Sectors" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-spark-dark pt-24 text-white">
      <div className="grain-overlay absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-spark-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-24 h-[28rem] w-[28rem] rounded-full bg-spark-primary/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-spark-accent" aria-hidden="true" />
            Africa Market Intelligence &amp; Advisory
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tightest sm:text-6xl md:text-7xl lg:text-8xl">
            Africa&apos;s Markets,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Decoded for You.</span>
              <span
                className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-spark-accent/30 md:h-5"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-200 md:text-lg">
            Sparkcraft Consulting is a leading advisory firm providing business intelligence,
            market entry strategy, and regulatory navigation for companies entering or
            expanding across African markets - from Dar es Salaam to the continent.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-spark-accent px-7 py-3.5 text-sm font-semibold text-spark-dark shadow-lg shadow-spark-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-spark-accent/30"
            >
              Start Your Engagement →
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-spark-dark"
            >
              Our Services
            </a>
          </div>

          <motion.div
            className="mt-12 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="border-l-2 border-spark-accent/60 pl-4"
              >
                <p className="text-3xl font-black text-spark-accent md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-zinc-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white/90">
            <MapPin size={14} className="text-spark-accent" aria-hidden="true" />
            Dar es Salaam, Tanzania · Operating Across Africa
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/50 transition-colors hover:text-spark-accent md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
