"use client";

import { motion } from "framer-motion";
import { expertiseItems } from "@/lib/data";

export default function WhatMakesDifferent() {
  return (
    <motion.section
      id="expertise"
      className="bg-spark-bg py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container-wide">
        <p className="section-label">OUR EXPERTISE</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-spark-primary md:text-5xl">
          What Makes Us Different
        </h2>
        <p className="mt-5 max-w-4xl text-zinc-700 md:text-lg">
          Sparkcraft Consulting is not a generalist firm. We are specialists — in Africa, in
          extractives, in the regulatory environments that define commercial success on this
          continent. Our depth is our differentiation.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {expertiseItems.map((item) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-spark-primary/10 bg-white p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 h-8 w-1 rounded bg-spark-primary" />
              <h3 className="text-xl font-bold text-spark-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-700 md:text-base">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}