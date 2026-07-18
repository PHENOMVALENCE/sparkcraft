"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Industries() {
  return (
    <section id="sectors" className="py-24 md:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">SECTORS</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-spark-primary md:text-5xl">
            Industries We Cover
          </h2>
          <p className="mt-5 max-w-4xl text-zinc-700 md:text-lg">
            From subsurface to supply chain, Sparkcraft operates across the sectors that define
            Africa&apos;s economic development trajectory.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {industries.map((item) => (
            <motion.span
              key={item}
              variants={itemVariants}
              transition={{ duration: 0.4 }}
              className="cursor-default rounded-full border border-spark-primary bg-spark-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-spark-accent hover:bg-spark-accent hover:text-spark-dark hover:shadow-md md:text-base"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
