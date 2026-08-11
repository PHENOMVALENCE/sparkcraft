"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@sparkcraft.co.tz",
    href: "mailto:contact@sparkcraft.co.tz",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+255 756 948 267",
    href: "tel:+255756948267",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Dar es Salaam, Tanzania",
    href: undefined,
  },
];

export default function CTA() {
  return (
    <Section id="contact" tone="accent" spacing="default">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-md text-spark-dark">
            Your African Market Strategy Starts Here
          </h2>
          <p className="mx-auto mt-6 max-w-prose-wide text-body-lg text-spark-dark/80">
            Whether you&apos;re beginning a market assessment, managing a compliance challenge,
            or building a long-term stakeholder strategy — Sparkcraft is ready to engage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="mailto:contact@sparkcraft.co.tz" variant="dark">
              Contact Our Team →
            </Button>
            <Button href="#services" variant="ghost" className="border-spark-dark/30">
              Explore Our Services
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 flex max-w-2xl flex-col divide-y divide-spark-dark/15 border-y border-spark-dark/15 sm:flex-row sm:divide-x sm:divide-y-0">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const inner = (
                <>
                  <Icon size={18} className="text-spark-dark/70" aria-hidden="true" />
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-spark-dark/60">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-spark-dark md:text-base">
                      {channel.value}
                    </p>
                  </div>
                </>
              );

              return channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="flex flex-1 flex-col items-center px-6 py-6 text-center transition-colors hover:bg-spark-dark/5"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={channel.label}
                  className="flex flex-1 flex-col items-center px-6 py-6 text-center"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
