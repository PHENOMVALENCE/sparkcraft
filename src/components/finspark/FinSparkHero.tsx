"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { fadeUp, transition } from "@/lib/motion";
import { FINSPARK_CONTACT } from "@/lib/finspark-data";
import SignalMark from "@/components/finspark/SignalMark";

export default function FinSparkHero() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        animate: "show" as const,
        variants: fadeUp,
        transition,
      };

  return (
    <section className="relative isolate overflow-hidden bg-fs-navy text-white">
      <div className="fs-grid absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-fs-teal-light/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 h-[22rem] w-[22rem] rounded-full bg-fs-gold/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 pb-16 pt-[calc(var(--nav-offset)+1.5rem)] md:pb-20 lg:pb-24 lg:pt-[calc(var(--nav-offset)+3rem)]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div className="min-w-0" {...motionProps}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="fs-eyebrow text-fs-gold">FinSpark</span>
              <span className="h-px w-8 bg-fs-gold/50" aria-hidden="true" />
              <Link
                href="/"
                className="text-xs font-medium text-white/70 underline-offset-4 transition-colors hover:text-fs-gold-bright hover:underline"
              >
                A Sparkcraft Technologies company
              </Link>
            </div>

            <h1 className="fs-display mt-6 text-white">
              The last mile isn&rsquo;t unbankable.
              <br />
              <span className="text-fs-gold">It&rsquo;s unreadable.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              FinSpark builds the credit, insurance and distribution infrastructure that
              turns farmers, traders and cooperatives from a data gap into a portfolio.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={FINSPARK_CONTACT.partnershipMailto}
                className="group inline-flex min-h-[2.75rem] items-center justify-center gap-2 bg-fs-gold px-6 py-3 text-sm font-semibold text-fs-navy transition-colors duration-200 hover:bg-fs-gold-bright"
              >
                Start a Partnership Conversation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#model"
                className="inline-flex min-h-[2.75rem] items-center justify-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-fs-gold hover:text-fs-gold-bright"
              >
                Explore the FinSpark Model
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={15} className="shrink-0 text-fs-teal-light" aria-hidden="true" />
              {FINSPARK_CONTACT.location.replace(", ", " · ")}
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ ...transition, delay: 0.15 }}
          >
            <SignalMark className="h-auto w-full max-w-[300px] sm:max-w-sm lg:max-w-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
