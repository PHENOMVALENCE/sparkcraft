"use client";

import {
  Banknote,
  Building2,
  ClipboardCheck,
  Globe2,
  HardHat,
  TrendingUp,
} from "lucide-react";
import { whoWeServeItems } from "@/lib/data";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const serveIcons = [Globe2, Banknote, TrendingUp, Building2, ClipboardCheck, HardHat];

export default function WhoWeServe() {
  return (
    <Section id="who-we-serve" tone="dark">
      <div className="container-wide">
        <SectionHeader
          label="Who We Serve"
          title="Built for Companies Serious About Africa"
          dark
        />

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {whoWeServeItems.map((item, index) => {
            const Icon = serveIcons[index % serveIcons.length];
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="editorial-row-dark group">
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
                    <Icon
                      size={22}
                      className="shrink-0 text-spark-accent transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white md:text-xl">{item.title}</h3>
                    <p className="mt-2 max-w-prose-wide text-sm leading-7 text-zinc-300 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
