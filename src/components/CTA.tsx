"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-r from-[#C9982A] to-[#A07820] py-24 text-spark-dark md:py-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container-wide text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Your African Market Strategy Starts Here
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-8 md:text-lg">
          Whether you&apos;re beginning a market assessment, managing a compliance challenge, or
          building a long-term stakeholder strategy — Sparkcraft is ready to engage. Bespoke
          advisory. Real intelligence. Tangible results.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-spark-dark px-7 py-3 text-sm font-semibold text-white"
          >
            Contact Our Team →
          </a>
          <a
            href="#services"
            className="rounded-full border border-spark-dark px-7 py-3 text-sm font-semibold text-spark-dark"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </motion.section>
  );
}