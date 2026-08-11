"use client";

import { Globe2, Sparkles } from "lucide-react";
import { aboutParagraphs } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const principles = [
  { label: "Headquarters", value: "Dar es Salaam, Tanzania" },
  { label: "Operating Reach", value: "Continent-wide" },
  { label: "Approach", value: "Bespoke · Evidence-led · Ready to engage" },
];

export default function About() {
  return (
    <Section id="about" tone="cream" divider="bottom">
      <div className="container-wide">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="section-label">Who We Are</p>
            <h2 className="mt-3 text-display-md text-spark-primary">
              Where African Insight Meets Global Ambition
            </h2>

            <div className="mt-8 space-y-5 text-body-lg text-spark-muted">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-10 border-l-4 border-spark-accent pl-6 text-xl font-medium italic leading-relaxed text-spark-primary md:text-2xl">
              We don&apos;t give you a template. We give you the truth about your market.
            </blockquote>

            <ul className="mt-10 divide-y divide-spark-border border-y border-spark-border">
              {principles.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-spark-accent">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-spark-primary md:text-base">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-spark-muted">
              <span className="inline-flex items-center gap-2">
                <Globe2 size={16} className="text-spark-accent" aria-hidden="true" />
                Operating continent-wide
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles size={16} className="text-spark-accent" aria-hidden="true" />
                Evidence-led engagements
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-spark-primary/5" aria-hidden="true" />
              <svg
                viewBox="0 0 420 500"
                className="relative mx-auto h-[320px] w-full max-w-md md:h-[400px]"
                role="img"
                aria-label="Abstract map of Africa highlighting East African operations"
              >
                <path
                  d="M206 32L248 56L274 94L312 108L326 160L302 198L298 246L332 286L314 334L278 364L236 370L214 406L182 444L146 420L126 374L98 342L70 302L78 252L110 212L128 170L160 138L176 96L206 32Z"
                  fill="#1A3C2E"
                  opacity="0.92"
                />
                <path
                  d="M182 444L214 406L236 370L278 364"
                  stroke="#C9982A"
                  strokeWidth="4"
                  fill="none"
                />
                <circle cx="278" cy="364" r="8" fill="#C9982A" />
                <circle cx="278" cy="364" r="18" fill="none" stroke="#C9982A" strokeWidth="1.5" opacity="0.5" />
              </svg>
              <p className="mt-4 text-center text-xs font-medium uppercase tracking-wider text-spark-muted">
                Dar es Salaam · East Africa · Continent-wide reach
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
