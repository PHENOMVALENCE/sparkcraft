"use client";

import { motion } from "framer-motion";
import { whoWeServeItems } from "@/lib/data";

export default function WhoWeServe() {
  return (
    <motion.section
      id="who-we-serve"
      className="bg-spark-primary py-24 text-white md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container-wide">
        <p className="section-label">WHO WE SERVE</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
          Built for Companies Serious About Africa
        </h2>

        <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {whoWeServeItems.map((item) => (
            <motion.article
              key={item.title}
              className="min-w-[85%] snap-start rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur md:min-w-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-200 md:text-base">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}