"use client";

import { motion } from "framer-motion";
import { Globe2, Sparkles } from "lucide-react";
import { aboutParagraphs } from "@/lib/data";

const highlights = [
  { value: "Dar es Salaam", label: "Headquarters" },
  { value: "Continent-wide", label: "Operating Reach" },
  { value: "Evidence-led", label: "Every Engagement" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-wide grid items-start gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">WHO WE ARE</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-spark-primary md:text-5xl">
            Where African Insight Meets Global Ambition
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="relative mt-10 overflow-hidden rounded-2xl border-l-4 border-spark-accent bg-spark-dark p-7 text-lg italic text-white shadow-lg">
            <span
              className="pointer-events-none absolute -right-4 -top-8 font-serif text-[10rem] leading-none text-spark-accent/10"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            We don&apos;t give you a template. We give you the truth about your market.
          </blockquote>

          <div className="mt-8 space-y-3 text-sm font-medium text-spark-primary md:text-base">
            <p className="flex items-center gap-2.5">
              <Globe2 size={18} className="shrink-0 text-spark-accent" aria-hidden="true" />
              Headquartered In: Dar es Salaam, Tanzania — Operating continent-wide
            </p>
            <p className="flex items-center gap-2.5">
              <Sparkles size={18} className="shrink-0 text-spark-accent" aria-hidden="true" />
              Our Approach: Bespoke. Evidence-led. Ready to engage.
            </p>
          </div>
        </motion.div>

        <div className="lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-3xl border border-spark-primary/10 bg-[#ebe7dc] p-8 shadow-sm">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-spark-accent/20" />
            <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-spark-primary/20" />

            <svg
              viewBox="0 0 420 500"
              className="relative mx-auto h-[360px] w-full max-w-sm md:h-[420px]"
              role="img"
              aria-label="Abstract Africa map"
            >
              <path
                d="M206 32L248 56L274 94L312 108L326 160L302 198L298 246L332 286L314 334L278 364L236 370L214 406L182 444L146 420L126 374L98 342L70 302L78 252L110 212L128 170L160 138L176 96L206 32Z"
                fill="#1A3C2E"
                opacity="0.9"
              />
              <path
                d="M182 444L214 406L236 370L278 364"
                stroke="#C9982A"
                strokeWidth="5"
                fill="none"
              />
              <circle cx="278" cy="364" r="9" fill="#C9982A" />
              <circle cx="278" cy="364" r="16" fill="none" stroke="#C9982A" strokeWidth="2" opacity="0.5" />
            </svg>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-spark-primary/10 bg-white p-4 text-center shadow-sm"
              >
                <p className="text-sm font-black leading-tight text-spark-primary md:text-base">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
