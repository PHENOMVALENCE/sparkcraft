"use client";

import { motion } from "framer-motion";
import { aboutParagraphs } from "@/lib/data";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container-wide grid items-start gap-16 lg:grid-cols-2">
        <div>
          <p className="section-label">WHO WE ARE</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Where African Insight Meets Global Ambition
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-10 border-l-4 border-spark-accent bg-spark-dark p-6 text-lg italic text-white">
            &quot;We don&apos;t give you a template. We give you the truth about your market.&quot;
          </blockquote>

          <div className="mt-8 space-y-3 text-sm font-medium text-spark-primary md:text-base">
            <p>🌍 Headquartered In: Dar es Salaam, Tanzania — Operating continent-wide</p>
            <p>✦ Our Approach: Bespoke. Evidence-led. Ready to engage.</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-spark-primary/10 bg-[#ebe7dc] p-8">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-spark-accent/20" />
          <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-spark-primary/20" />

          <svg
            viewBox="0 0 420 500"
            className="relative mx-auto h-[420px] w-full max-w-sm"
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
          </svg>
        </div>
      </div>
    </motion.section>
  );
}