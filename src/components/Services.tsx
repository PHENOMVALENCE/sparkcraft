"use client";

import { useState } from "react";
import { BarChart3, FileCheck2, Landmark, Users2 } from "lucide-react";
import { services } from "@/lib/data";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const serviceIcons = [BarChart3, Landmark, Users2, FileCheck2];

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const Icon = serviceIcons[active];

  return (
    <Section id="services" tone="dark" spacing="default">
      <div className="container-wide">
        <SectionHeader
          label="Core Services"
          title="Four Pillars of African Advisory"
          description="Each service removes a specific barrier between your organisation and successful market outcomes in Africa."
          dark
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <Reveal>
            <nav aria-label="Advisory services" className="flex flex-col">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-current={active === index ? "true" : undefined}
                  className={cn(
                    "group flex items-start gap-4 border-b border-white/10 py-5 text-left transition-colors duration-200",
                    active === index ? "border-spark-accent" : "hover:border-white/25",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 text-sm font-black tabular-nums transition-colors",
                      active === index ? "text-spark-accent" : "text-white/30 group-hover:text-white/50",
                    )}
                  >
                    {service.id}
                  </span>
                  <span
                    className={cn(
                      "text-base font-semibold transition-colors md:text-lg",
                      active === index ? "text-white" : "text-zinc-400 group-hover:text-zinc-200",
                    )}
                  >
                    {service.name}
                  </span>
                </button>
              ))}
            </nav>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center text-spark-accent">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-display-sm text-spark-accent">{current.name}</h3>
              </div>

              <p className="mt-6 max-w-prose-wide text-body-lg text-zinc-300">
                {current.description}
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {current.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-sm font-medium text-zinc-400 before:mr-2 before:text-spark-accent before:content-['·'] first:before:content-none"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
