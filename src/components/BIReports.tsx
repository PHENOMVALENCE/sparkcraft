"use client";

import { Check } from "lucide-react";
import { reportItems } from "@/lib/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function BIReports() {
  return (
    <Section tone="light" spacing="compact" divider="top">
      <div className="container-wide">
        <div className="grid gap-0 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="section-label">Business Intelligence</p>
            <h2 className="mt-3 text-display-md text-spark-primary">
              Know Your Market Before You Enter It
            </h2>
            <p className="mt-6 max-w-prose text-body-lg text-spark-muted">
              Our business intelligence reports are the foundation of every market entry
              engagement. Built from primary research, stakeholder interviews, regulatory
              analysis, and commercial data, each report gives your team an unfair advantage.
            </p>
            <Button href="#contact" variant="primary" className="mt-8">
              Request a Report →
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 border-t border-spark-border pt-10 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-spark-muted">
                Report Preview
              </p>
              <h3 className="mt-2 text-display-sm text-spark-primary">
                Market Entry Intelligence Dossier
              </h3>
              <ul className="mt-8 space-y-4">
                {reportItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-spark-text">
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-spark-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-6 md:text-base">{item}</span>
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
