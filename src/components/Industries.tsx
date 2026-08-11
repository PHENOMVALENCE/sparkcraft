"use client";

import { industries } from "@/lib/data";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function Industries() {
  const midpoint = Math.ceil(industries.length / 2);
  const columns = [industries.slice(0, midpoint), industries.slice(midpoint)];

  return (
    <Section id="sectors" tone="cream">
      <div className="container-wide">
        <SectionHeader
          label="Sectors"
          title="Industries We Cover"
          description="From subsurface to supply chain, Sparkcraft operates across the sectors that define Africa's economic development trajectory."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          {columns.map((column, colIndex) => (
            <Reveal key={colIndex} delay={colIndex * 0.08}>
              <ul className="divide-y divide-spark-border border-y border-spark-border">
                {column.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 py-4 text-spark-primary transition-colors hover:text-spark-accent"
                  >
                    <span
                      className="text-xs font-black tabular-nums text-spark-accent/50"
                      aria-hidden="true"
                    >
                      {String(colIndex * midpoint + index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-semibold md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
