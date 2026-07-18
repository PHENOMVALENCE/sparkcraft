"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  Building2,
  ClipboardCheck,
  Globe2,
  HardHat,
  TrendingUp,
} from "lucide-react";
import { whoWeServeItems } from "@/lib/data";

const serveIcons = [Globe2, Banknote, TrendingUp, Building2, ClipboardCheck, HardHat];

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="relative overflow-hidden bg-spark-primary py-24 text-white md:py-32"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-spark-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">WHO WE SERVE</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Built for Companies Serious About Africa
          </h2>
        </motion.div>

        <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3">
          {whoWeServeItems.map((item, index) => {
            const Icon = serveIcons[index % serveIcons.length];
            return (
              <motion.article
                key={item.title}
                className="min-w-[85%] snap-start rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-spark-accent/60 hover:bg-white/10 md:min-w-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-spark-accent/15 text-spark-accent">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-200 md:text-base">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
