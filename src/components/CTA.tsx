"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@sparkcraft.co.tz",
    href: "mailto:contact@sparkcraft.co.tz",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+255 756 948 267",
    href: "tel:+255756948267",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Dar es Salaam, Tanzania",
    href: undefined,
  },
];

export default function CTA() {
  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-[#C9982A] to-[#A07820] py-24 text-spark-dark md:py-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-spark-dark/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Your African Market Strategy Starts Here
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-8 md:text-lg">
          Whether you&apos;re beginning a market assessment, managing a compliance challenge, or
          building a long-term stakeholder strategy — Sparkcraft is ready to engage. Bespoke
          advisory. Real intelligence. Tangible results.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:contact@sparkcraft.co.tz"
            className="rounded-full bg-spark-dark px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Contact Our Team →
          </a>
          <a
            href="#services"
            className="rounded-full border border-spark-dark px-7 py-3.5 text-sm font-semibold text-spark-dark transition-colors hover:bg-spark-dark hover:text-white"
          >
            Explore Our Services
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon;
            const content = (
              <>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-spark-dark/10">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="mt-3 block text-xs font-semibold uppercase tracking-wider opacity-70">
                  {channel.label}
                </span>
                <span className="mt-1 block text-sm font-bold md:text-base">{channel.value}</span>
              </>
            );

            return channel.href ? (
              <a
                key={channel.label}
                href={channel.href}
                className="rounded-2xl border border-spark-dark/15 bg-white/25 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/40"
              >
                {content}
              </a>
            ) : (
              <div
                key={channel.label}
                className="rounded-2xl border border-spark-dark/15 bg-white/25 p-6 backdrop-blur"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
