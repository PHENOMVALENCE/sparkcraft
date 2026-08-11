"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import AfricaMap from "@/components/AfricaMap";
import Button from "@/components/ui/Button";
import StatBand from "@/components/ui/StatBand";
import { fadeUp, transition } from "@/lib/motion";

const HERO_STATS = [
  { value: "30+", label: "African Markets Covered" },
  { value: "4", label: "Core Advisory Services" },
  { value: "10", label: "Key Industry Sectors" },
] as const;

export default function Hero() {
  return (
    <section className="hero-viewport relative flex flex-col overflow-hidden bg-spark-dark text-white">
      <div className="grain-overlay absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[24rem] w-[24rem] rounded-full bg-spark-accent/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 flex flex-1 flex-col pb-4 pt-[var(--nav-offset)] lg:pb-5">
        <div className="grid flex-1 items-center gap-6 md:gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={transition}
            className="min-w-0"
          >
            <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:mb-4 sm:text-xs sm:tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-spark-accent" aria-hidden="true" />
              Africa Market Intelligence &amp; Advisory
            </p>

            <h1 className="hero-headline text-white">
              Africa&apos;s Markets,
              <br />
              <span className="text-spark-accent">Decoded for You.</span>
            </h1>

            <p className="mt-4 max-w-prose text-sm leading-7 text-zinc-300 sm:mt-5 sm:text-base sm:leading-8 lg:max-w-md xl:text-lg">
              Sparkcraft Consulting provides business intelligence, market entry strategy,
              and regulatory navigation for companies entering or expanding across African
              markets — from Dar es Salaam to the continent.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
              <Button href="#contact" variant="primary" className="px-5 py-2.5 text-sm">
                Start Your Engagement →
              </Button>
              <Button
                href="#services"
                variant="secondary"
                className="border-white/40 px-5 py-2.5 text-sm text-white"
              >
                Our Services
              </Button>
            </div>

            <p className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-400 sm:mt-5 sm:text-sm">
              <MapPin size={14} className="shrink-0 text-spark-accent" aria-hidden="true" />
              Dar es Salaam, Tanzania · Operating Across Africa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.12 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <AfricaMap className="hero-map h-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm xl:max-w-md" />
          </motion.div>
        </div>

        <StatBand
          stats={HERO_STATS}
          dark
          compact
          animateOnMount
          className="mt-4 shrink-0 sm:mt-5 lg:mt-6"
        />
      </div>
    </section>
  );
}
