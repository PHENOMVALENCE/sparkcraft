"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import StatBand from "@/components/ui/StatBand";
import { fadeUp, transition } from "@/lib/motion";

const stats = [
  { value: "30+", label: "African Markets Covered" },
  { value: "4", label: "Core Advisory Services" },
  { value: "10", label: "Key Industry Sectors" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-spark-dark text-white">
      <div className="grain-overlay absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-spark-accent/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 pt-28 pb-0 md:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={transition}
          >
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-spark-accent" aria-hidden="true" />
              Africa Market Intelligence &amp; Advisory
            </p>

            <h1 className="text-display-xl text-white">
              Africa&apos;s Markets,
              <br />
              <span className="text-spark-accent">Decoded for You.</span>
            </h1>

            <p className="mt-6 max-w-prose text-body-lg text-zinc-300">
              Sparkcraft Consulting provides business intelligence, market entry strategy,
              and regulatory navigation for companies entering or expanding across African
              markets — from Dar es Salaam to the continent.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contact" variant="primary">
                Start Your Engagement →
              </Button>
              <Button href="#services" variant="secondary" className="text-white border-white/40">
                Our Services
              </Button>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={14} className="text-spark-accent" aria-hidden="true" />
              Dar es Salaam, Tanzania · Operating Across Africa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.15 }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <svg viewBox="0 0 420 500" className="h-full w-full opacity-90" role="presentation">
                <path
                  d="M206 32L248 56L274 94L312 108L326 160L302 198L298 246L332 286L314 334L278 364L236 370L214 406L182 444L146 420L126 374L98 342L70 302L78 252L110 212L128 170L160 138L176 96L206 32Z"
                  fill="#1A3C2E"
                  stroke="#C9982A"
                  strokeWidth="1"
                  opacity="0.85"
                />
                <circle cx="278" cy="364" r="8" fill="#C9982A" />
                <circle cx="278" cy="364" r="20" fill="none" stroke="#C9982A" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16">
          <StatBand stats={stats} dark />
        </div>

        <motion.a
          href="#about"
          className="mt-8 mb-6 flex flex-col items-center gap-1 text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-spark-accent md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          aria-label="Scroll to learn more"
        >
          <span>Explore</span>
          <ChevronDown size={16} className="animate-bounce" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
