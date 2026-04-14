"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <motion.section
      id="services"
      className="bg-spark-dark py-24 text-white md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container-wide">
        <p className="section-label">CORE SERVICES</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
          Four Pillars of African Advisory
        </h2>
        <p className="mt-5 max-w-3xl text-zinc-300 md:text-lg">
          Each service is designed to remove a specific barrier between your organisation and
          successful market outcomes in Africa.
        </p>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-spark-accent"
            >
              <p className="pointer-events-none absolute right-6 top-2 text-7xl font-black text-spark-accent/20">
                {service.id}
              </p>
              <h3 className="relative text-2xl font-bold text-white">{service.name}</h3>
              <p className="relative mt-4 leading-7 text-zinc-300">{service.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-spark-accent/60 px-3 py-1 text-xs font-medium text-spark-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}