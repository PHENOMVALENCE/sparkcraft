"use client";

import { motion } from "framer-motion";
import { BarChart3, FileCheck2, Landmark, Users2 } from "lucide-react";
import { services } from "@/lib/data";

const serviceIcons = [BarChart3, Landmark, Users2, FileCheck2];

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
    <section
      id="services"
      className="relative overflow-hidden bg-spark-dark py-24 text-white md:py-32"
    >
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-spark-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">CORE SERVICES</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Four Pillars of African Advisory
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-300 md:text-lg">
            Each service is designed to remove a specific barrier between your organisation and
            successful market outcomes in Africa.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <motion.article
                key={service.id}
                variants={itemVariants}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-spark-accent/70 hover:bg-white/[0.05]"
              >
                <p
                  className="pointer-events-none absolute right-6 top-2 text-7xl font-black text-spark-accent/15 transition-colors duration-300 group-hover:text-spark-accent/25"
                  aria-hidden="true"
                >
                  {service.id}
                </p>

                <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-spark-accent/40 bg-spark-accent/10 text-spark-accent">
                  <Icon size={22} aria-hidden="true" />
                </div>

                <h3 className="relative text-2xl font-bold text-spark-accent">{service.name}</h3>
                <p className="relative mt-4 flex-1 leading-7 text-zinc-300">
                  {service.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-spark-accent/50 bg-spark-accent/5 px-3 py-1 text-xs font-medium text-spark-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
