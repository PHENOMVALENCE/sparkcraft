"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bike,
  Building2,
  Check,
  ChevronDown,
  Droplets,
  Flame,
  HeartHandshake,
  Landmark,
  Link2,
  MonitorCheck,
  Recycle,
  ShieldCheck,
  Snowflake,
  Sun,
} from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { fadeUp, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

const approachSteps = [
  {
    id: "01",
    name: "Measure",
    description:
      "We calculate your organization's full carbon footprint — Scope 1, 2 and 3 — using internationally recognized methodologies, localized for Tanzanian operations, energy sources and supply chains.",
  },
  {
    id: "02",
    name: "Reduce",
    description:
      "We design a reduction portfolio from creative, proven technologies: clean cooking, safe water, solar energy, waste-to-value and clean mobility — deployed in your operations, supply chain or communities.",
  },
  {
    id: "03",
    name: "Offset",
    description:
      "For emissions you can't yet eliminate, we source and structure high-integrity offsets — certified to recognized standards and registered through Tanzania's national carbon framework.",
  },
  {
    id: "04",
    name: "Report",
    description:
      "Our digital platform tracks every tonne — with sensor-enabled monitoring (dMRV) where devices are deployed — giving you a live, audit-ready dashboard for boards, investors and regulators.",
  },
];

const solutions = [
  {
    icon: Flame,
    tag: "Clean Cooking",
    title: "Efficient & heat-retention cookstoves",
    description:
      "Fuel-efficient stoves and heat-retention cookers cut household fuel use by 50–70% — saving up to one tonne of CO2 per household, per year, while reducing deforestation and indoor smoke.",
  },
  {
    icon: Droplets,
    tag: "Safe Water",
    title: "Solar water purification",
    description:
      "Portable solar-powered purifiers replace firewood boiling with sunshine — delivering clean, safe water to homes and schools while eliminating fuel emissions entirely.",
  },
  {
    icon: Sun,
    tag: "Clean Energy",
    title: "Solar lighting & irrigation",
    description:
      "Solar home systems displace kerosene and diesel; solar water pumps replace fossil-fuel irrigation for farmers — cutting emissions and energy costs across your value chain.",
  },
  {
    icon: Recycle,
    tag: "Waste to Value",
    title: "Biogas & biochar",
    description:
      "Household biodigesters turn livestock waste into cooking gas and fertilizer while capturing methane. Biochar locks crop-residue carbon into the soil — true carbon removal.",
  },
  {
    icon: Snowflake,
    tag: "Cold Chain",
    title: "Solar cold storage",
    description:
      "Solar-powered cold rooms cut food spoilage by up to 80% — avoiding diesel generators and the huge embedded emissions of wasted food. A powerful story for agribusiness.",
  },
  {
    icon: Bike,
    tag: "Clean Mobility",
    title: "Electric two-wheelers",
    description:
      "Every electric motorcycle avoids 2–3 tonnes of CO2 per year versus petrol. Ideal for corporate fleets and last-mile delivery — with your brand visibly leading the transition.",
  },
];

const stats = [
  {
    value: "~1 t",
    label: "CO2 saved per household per year by a single clean cooking or water device",
  },
  {
    value: "Day 1",
    label: "When measurable reductions begin — no waiting decades for trees to mature",
  },
  {
    value: "100%",
    label: "Of deployed impact digitally tracked and reportable to your stakeholders",
  },
];

const differentiators = [
  {
    icon: Link2,
    title: "Impact inside your value chain",
    description:
      "We help agribusinesses and manufacturers cut emissions within their own supply chains — equipping the farmers, suppliers and communities you already work with. That's not offsetting; it's insetting, and it strengthens your business.",
  },
  {
    icon: MonitorCheck,
    title: "Digital-first verification",
    description:
      "Where global programs still rely on annual field surveys, Sparkgreen builds digital monitoring (dMRV) into every program — so your impact claims are continuous, transparent and audit-ready. No one else in Tanzania offers this end to end.",
  },
  {
    icon: ShieldCheck,
    title: "Aligned with national frameworks",
    description:
      "Our programs are designed around Tanzania's Carbon Trading Regulations and National Carbon Monitoring Centre — so your investment is compliant, registered and credible from day one.",
  },
];

const segments = [
  {
    icon: Building2,
    title: "Corporates",
    description:
      "Banks, telecoms, manufacturers and FMCG companies seeking credible ESG performance and richer sustainability stories than tree-planting photos.",
  },
  {
    icon: HeartHandshake,
    title: "Agribusiness",
    description:
      "Coffee, tea, cotton and cashew value chains reducing Scope 3 emissions while improving farmer livelihoods.",
  },
  {
    icon: HeartHandshake,
    title: "NGOs & Development Partners",
    description:
      "Organizations that want climate co-benefits, carbon co-financing and digital impact evidence built into their programs.",
  },
  {
    icon: Landmark,
    title: "Government & Institutions",
    description:
      "Public institutions building climate strategies, green procurement and reporting capacity aligned with national commitments.",
  },
];

const checklist = [
  "Emissions measured against international standards (GHG Protocol)",
  "Reductions delivered through verified technologies, not promises",
  "Offsets certified by recognized standards and aligned with Tanzania's National Carbon Monitoring Centre (NCMC)",
  "Impact reported digitally, in near real time, audit-ready",
];

const faqs = [
  {
    question: "What's wrong with tree planting?",
    answer:
      "Nothing — trees matter. But they take 20+ years to absorb meaningful carbon, survival rates are hard to verify, and they can't be your whole strategy. Sparkgreen delivers reductions that start immediately and are digitally measurable, with trees as one element of a broader portfolio where appropriate.",
  },
  {
    question: "How do you measure our carbon footprint?",
    answer:
      "We follow the GHG Protocol — the global standard — covering direct emissions (Scope 1), purchased energy (Scope 2) and value-chain emissions (Scope 3), using emission factors localized for Tanzania.",
  },
  {
    question: "What is digital MRV?",
    answer:
      "Digital Measurement, Reporting and Verification uses connected sensors on deployed devices (stoves, pumps, digesters) to automatically record usage. Instead of trusting an annual survey, you see your impact accumulate in near real time — and so can auditors.",
  },
  {
    question: "Are your programs compliant with Tanzanian regulations?",
    answer:
      "Yes. We design programs around the Environmental Management (Carbon Trading) Regulations and the 2024 National Carbon Trading Guidelines, and register projects through the National Carbon Monitoring Centre (NCMC).",
  },
  {
    question: "How is Sparkgreen related to Sparkcraft?",
    answer:
      "Sparkgreen is the sustainability arm of Sparkcraft. It combines Sparkcraft's delivery capability with a dedicated climate team — giving partners one trusted group for creative carbon solutions, from measurement to digital reporting.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "A baseline carbon assessment typically takes 4–6 weeks. Reduction programs can begin deploying within a quarter, with your digital dashboard live from the first device.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-sg/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-bold text-sg-dark md:text-lg">{question}</span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-sg transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="pb-5 leading-7 text-zinc-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SparkgreenContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main id="main-content" className="overflow-x-hidden bg-sg-soft">
      {/* Hero */}
      <section className="hero-viewport relative overflow-hidden bg-sg-dark text-white">
        <div className="grain-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-wide relative z-10 pb-8 pt-[var(--nav-offset)] md:pb-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={transition}
            className="max-w-4xl"
          >
            <p className="leading-none">
              <span className="text-2xl font-black tracking-tightest md:text-3xl">SPARKGREEN</span>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wider2 text-sg-lime md:text-xs">
                A Sustainability Arm of Sparkcraft
              </span>
            </p>

            <p className="mb-5 mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Sustainability, Reimagined for Tanzania
            </p>

            <h1 className="text-display-xl text-white">
              Your carbon footprint, measured, reduced and reported —{" "}
              <span className="text-sg-lime">creatively.</span>
            </h1>

            <p className="mt-6 max-w-prose-wide text-body-lg text-zinc-300">
              Sparkgreen partners with companies, organizations and governments to turn climate
              commitments into verified impact. We go beyond tree planting — deploying creative,
              scalable solutions that cut emissions today and prove it with digital reporting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#consultation"
                className="inline-flex rounded-full bg-sg-lime px-6 py-3 text-sm font-semibold text-sg-dark transition-colors hover:bg-[#9ccc5a]"
              >
                Start Your Climate Journey →
              </a>
              <a
                href="#solutions"
                className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-sg-dark"
              >
                Explore Our Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Gap */}
      <section id="gap" className="py-20 md:py-28">
        <div className="container-wide grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg">The Gap We Close</p>
            <h2 className="mt-3 text-display-md text-sg-dark">
              Tree planting alone is not a climate strategy.
            </h2>
            <div className="mt-8 space-y-5 text-body-lg text-zinc-600">
              <p>
                Trees take decades to mature, are hard to verify, and tell only part of your
                sustainability story. Meanwhile, your operations, supply chain and communities
                emit carbon every single day — and your stakeholders increasingly expect
                credible, data-backed climate disclosure.
              </p>
              <p>
                In Tanzania, most organizations still lack access to two things: creative
                emission-reduction options that deliver measurable impact now, and digital
                tools to track and report that impact transparently. Sparkgreen was built to
                close both gaps.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-sg/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <h3 className="text-lg font-bold text-sg-dark">
                What credible climate action looks like
              </h3>
              <ul className="mt-6 divide-y divide-sg/10 border-y border-sg/10">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-4 text-zinc-700">
                    <Check size={16} className="mt-1 shrink-0 text-sg" aria-hidden="true" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach — horizontal process */}
      <section id="approach" className="bg-sg-dark py-20 text-white md:py-28">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg-lime">Our Approach</p>
            <h2 className="mt-3 text-display-md">Measure. Reduce. Offset. Report.</h2>
            <p className="mt-5 max-w-prose-wide text-body-lg text-zinc-300">
              One partner for the full journey — from your first carbon baseline to your annual
              sustainability disclosure.
            </p>
          </Reveal>

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {approachSteps.map((step) => (
              <Reveal key={step.id}>
                <article className="grid gap-4 py-8 md:grid-cols-[80px_200px_1fr] md:gap-8 md:py-10">
                  <span className="text-sm font-black tabular-nums text-sg-lime/60">{step.id}</span>
                  <h3 className="text-xl font-bold text-white">{step.name}</h3>
                  <p className="text-sm leading-7 text-zinc-300 md:text-base">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions — editorial rows */}
      <section id="solutions" className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg">Solutions Portfolio</p>
            <h2 className="mt-3 text-display-md text-sg-dark">
              A portfolio of impact — not a single product.
            </h2>
            <p className="mt-5 max-w-prose-wide text-body-lg text-zinc-600">
              Each technology delivers measurable emission reductions from day one, plus
              co-benefits your stakeholders can see: health, time savings, income and dignity.
            </p>
          </Reveal>

          <div className="mt-12 divide-y divide-sg/10 border-y border-sg/10">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Reveal key={solution.title} delay={index * 0.04}>
                  <article className="grid gap-4 py-8 md:grid-cols-[auto_1fr] md:gap-8 md:py-10">
                    <Icon size={24} className="mt-1 text-sg" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-sg-lime">
                        {solution.tag}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-sg-dark md:text-xl">
                        {solution.title}
                      </h3>
                      <p className="mt-2 max-w-prose-wide text-sm leading-7 text-zinc-600 md:text-base">
                        {solution.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 grid divide-y border-y border-sg/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => (
                <div key={stat.value} className="px-4 py-8 text-center sm:px-6">
                  <p className="text-3xl font-black text-sg md:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Sparkgreen */}
      <section id="why-sparkgreen" className="bg-sg py-20 text-white md:py-28">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg-lime">Why Sparkgreen</p>
            <h2 className="mt-3 text-display-md">Built for how climate impact actually works.</h2>
          </Reveal>

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <article className="grid gap-4 py-8 md:grid-cols-[auto_1fr] md:gap-8 md:py-10">
                    <Icon size={22} className="mt-1 text-sg-lime" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-bold md:text-xl">{item.title}</h3>
                      <p className="mt-2 max-w-prose-wide text-sm leading-7 text-zinc-200 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <blockquote className="mt-12 border-l-4 border-sg-lime pl-6 text-lg italic leading-relaxed text-white/90 md:text-xl">
              Partner organizations report measurable reductions within the first quarter of
              deployment — with digital verification that stands up to board and auditor scrutiny.
              <footer className="mt-4 text-sm font-semibold not-italic text-sg-lime">
                — Sparkgreen pilot partner
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Who We Work With */}
      <section id="who-we-work-with" className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg">Who We Work With</p>
            <h2 className="mt-3 text-display-md text-sg-dark">For every organization ready to lead.</h2>
          </Reveal>

          <div className="mt-12 divide-y divide-sg/10 border-y border-sg/10">
            {segments.map((segment, index) => {
              const Icon = segment.icon;
              return (
                <Reveal key={segment.title} delay={index * 0.05}>
                  <article className="grid gap-4 py-8 md:grid-cols-[auto_1fr] md:gap-8 md:py-10">
                    <Icon size={22} className="mt-1 text-sg" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-bold text-sg-dark">{segment.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-600 md:text-base">
                        {segment.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="consultation" className="bg-sg-dark py-20 text-white md:py-28">
        <div className="container-wide mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-display-md">Ready to move beyond tree planting?</h2>
            <p className="mx-auto mt-6 text-body-lg text-zinc-300">
              Book a free carbon consultation. We&apos;ll assess your footprint, show you what a
              creative reduction portfolio could look like, and demonstrate the digital reporting
              your stakeholders are waiting for.
            </p>
            <a
              href="mailto:hello@sparkgreen.co.tz"
              className="mt-8 inline-flex rounded-full bg-sg-lime px-8 py-3.5 text-sm font-semibold text-sg-dark transition-colors hover:bg-[#9ccc5a]"
            >
              Book a Free Consultation →
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg">FAQ</p>
            <h2 className="mt-3 text-display-md text-sg-dark">Frequently Asked Questions</h2>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl border-t border-sg/15">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-sg-dark py-14 text-white">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div>
            <p className="leading-none">
              <span className="block text-xl font-black tracking-tightest md:text-2xl">SPARKGREEN</span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider2 text-sg-lime md:text-xs">
                A Sparkcraft Company
              </span>
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
              Sparkgreen is the sustainability arm of Sparkcraft — helping organizations measure,
              reduce, offset and digitally report their carbon footprint, with a partner built
              for Tanzania.
            </p>
          </div>
          <div className="lg:text-right">
            <nav
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium lg:justify-end"
              aria-label="Sparkgreen links"
            >
              <a href="#approach" className="link-underline text-zinc-400 hover:text-sg-lime">Our Approach</a>
              <a href="#solutions" className="link-underline text-zinc-400 hover:text-sg-lime">Solutions</a>
              <a href="#why-sparkgreen" className="link-underline text-zinc-400 hover:text-sg-lime">Why Sparkgreen</a>
              <a href="#faq" className="link-underline text-zinc-400 hover:text-sg-lime">FAQ</a>
              <a href="/" className="link-underline text-zinc-400 hover:text-sg-lime">Back to Sparkcraft</a>
            </nav>
            <p className="mt-5 text-sm text-zinc-400">
              <a href="mailto:hello@sparkgreen.co.tz" className="transition-colors hover:text-sg-lime">
                hello@sparkgreen.co.tz
              </a>{" "}
              · Dar es Salaam, Tanzania
            </p>
            <p className="mt-3 text-xs text-zinc-500">
              © {new Date().getFullYear()} Sparkgreen, a Sparkcraft company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
