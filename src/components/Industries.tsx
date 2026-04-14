"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/data";

export default function Industries() {
  return (
    <motion.section
      id="sectors"
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container-wide">
        <p className="section-label">SECTORS</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-spark-primary md:text-5xl">
          Industries We Cover
        </h2>
        <p className="mt-5 max-w-4xl text-zinc-700 md:text-lg">
          From subsurface to supply chain, Sparkcraft operates across the sectors that define
          Africa&apos;s economic development trajectory.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {industries.map((item) => (
            <motion.span
              key={item}
              className="rounded-full bg-spark-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-spark-accent hover:text-spark-dark md:text-base"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}