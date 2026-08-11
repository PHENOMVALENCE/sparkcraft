"use client";

import { expertiseItems } from "@/lib/data";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function WhatMakesDifferent() {
  return (
    <Section id="expertise" tone="light" divider="both">
      <div className="container-wide">
        <SectionHeader
          label="Our Expertise"
          title="What Makes Us Different"
          description="Sparkcraft Consulting is not a generalist firm. We are specialists — in Africa, in extractives, and in the regulatory environments that define commercial success on this continent."
        />

        <div className="mt-14 columns-1 gap-x-12 md:columns-2">
          {expertiseItems.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 0.05}>
              <article className="mb-0 break-inside-avoid border-b border-spark-border py-7 first:pt-0">
                <div className="flex gap-5">
                  <span
                    className="shrink-0 text-sm font-black tabular-nums text-spark-accent/60"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold leading-snug text-spark-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-spark-muted">{item.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
