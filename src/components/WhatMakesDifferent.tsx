"use client";

import { motion } from "framer-motion";
import { expertiseItems } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function WhatMakesDifferent() {
  return (
    <section id="expertise" className="bg-spark-bg py-24 md:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">OUR EXPERTISE</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-spark-primary md:text-5xl">
            What Makes Us Different
          </h2>
          <p className="mt-5 max-w-4xl text-zinc-700 md:text-lg">
            Sparkcraft Consulting is not a generalist firm. We are specialists — in Africa, in
            extractives, in the regulatory environments that define commercial success on this
            continent. Our depth is our differentiation.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {expertiseItems.map((item, index) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-spark-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-spark-accent/50 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="h-8 w-1 rounded bg-spark-primary transition-colors duration-300 group-hover:bg-spark-accent" />
                <span className="text-sm font-black text-spark-primary/20 transition-colors duration-300 group-hover:text-spark-accent/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-bold leading-snug text-spark-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
