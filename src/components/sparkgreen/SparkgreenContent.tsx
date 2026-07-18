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

const segmentIcons = [Building2, HeartHandshake, HeartHandshake, Landmark];

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
    <div className="overflow-hidden rounded-2xl border border-sg/10 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
      >
        <span className="text-base font-bold text-sg-dark md:text-lg">{question}</span>
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sg-lime/15 text-sg transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={18} aria-hidden="true" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 leading-7 text-zinc-600 md:px-6 md:pb-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SparkgreenContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-x-hidden bg-sg-soft">
      {/* SECTION 1 — Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-sg-dark pt-24 text-white">
        <div className="grain-overlay absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-sg-lime/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-48 -left-24 h-[28rem] w-[28rem] rounded-full bg-sg/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-wide relative z-10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="leading-none">
              <span className="text-2xl font-black tracking-tightest text-white md:text-3xl">
                SPARKGREEN
              </span>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wider2 text-sg-lime md:text-xs">
                A Sustainability Arm of Sparkcraft
              </span>
            </p>

            <p className="mb-6 mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sg-lime" aria-hidden="true" />
              Sustainability, Reimagined for Tanzania — by Sparkcraft
            </p>

            <h1 className="text-4xl font-black leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl lg:text-7xl">
              Your carbon footprint, measured, reduced and reported —{" "}
              <span className="relative inline-block">
                <span className="relative z-10">creatively.</span>
                <span
                  className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-sg-lime/30 md:h-4"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-200 md:text-lg">
              Sparkgreen, the sustainability arm of Sparkcraft, partners with companies,
              organizations and governments to turn climate commitments into verified impact.
              We go beyond tree planting — deploying creative, scalable solutions that cut
              emissions today and prove it with digital reporting.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#consultation"
                className="rounded-full bg-sg-lime px-7 py-3.5 text-sm font-semibold text-sg-dark shadow-lg shadow-sg-lime/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sg-lime/30"
              >
                Start Your Climate Journey →
              </a>
              <a
                href="#solutions"
                className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-sg-dark"
              >
                Explore Our Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — The Gap We Close */}
      <section id="gap" className="py-24 md:py-32">
        <div className="container-wide grid items-start gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg">
              The Gap We Close
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-sg-dark md:text-5xl">
              Tree planting alone is not a climate strategy.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-sg/15 bg-white p-8 shadow-md lg:sticky lg:top-28 md:p-10"
          >
            <h3 className="text-xl font-bold text-sg-dark">
              What credible climate action looks like
            </h3>
            <ul className="mt-6 space-y-5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sg-lime/20">
                    <Check size={14} className="text-sg" aria-hidden="true" />
                  </span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — Our Approach */}
      <section id="approach" className="relative overflow-hidden bg-sg-dark py-24 text-white md:py-32">
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-sg-lime/5 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg-lime">
              Our Approach
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Measure. Reduce. Offset. Report.
            </h2>
            <p className="mt-5 max-w-3xl text-zinc-300 md:text-lg">
              One partner for the full journey — from your first carbon baseline to your
              annual sustainability disclosure.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, index) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sg-lime/70 hover:bg-white/[0.05]"
              >
                <p
                  className="pointer-events-none absolute right-4 top-1 text-6xl font-black text-sg-lime/15 transition-colors duration-300 group-hover:text-sg-lime/25"
                  aria-hidden="true"
                >
                  {step.id}
                </p>
                <h3 className="relative text-xl font-bold">{step.name}</h3>
                <p className="relative mt-4 text-sm leading-7 text-zinc-300">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Solutions Portfolio */}
      <section id="solutions" className="py-24 md:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg">
              Solutions Portfolio
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-sg-dark md:text-5xl">
              A portfolio of impact — not a single product.
            </h2>
            <p className="mt-5 max-w-4xl text-zinc-700 md:text-lg">
              The world&apos;s most effective climate programs bundle simple, portable, scalable
              technologies. Each device delivers measurable emission reductions from day one,
              plus co-benefits your stakeholders can see: health, time savings, income and
              dignity.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.article
                  key={solution.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="group flex flex-col rounded-3xl border border-sg/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sg-lime/60 hover:shadow-md"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sg-lime/40 bg-sg-lime/10 text-sg">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sg-lime">
                    {solution.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-sg-dark">
                    {solution.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">
                    {solution.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            className="mt-12 grid gap-6 rounded-3xl bg-sg p-8 text-white sm:grid-cols-3 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat) => (
              <div key={stat.value} className="border-l-2 border-sg-lime/70 pl-4">
                <p className="text-3xl font-black text-sg-lime md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-100">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — Why Sparkgreen */}
      <section id="why-sparkgreen" className="relative overflow-hidden bg-sg py-24 text-white md:py-32">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-sg-lime/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg-lime">
              Why Sparkgreen
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Built for how climate impact actually works.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sg-lime/60 hover:bg-white/10"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sg-lime/15 text-sg-lime">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-200">{item.description}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.blockquote
            className="relative mt-12 overflow-hidden rounded-2xl border-l-4 border-sg-lime bg-sg-dark p-7 text-lg italic text-white shadow-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="pointer-events-none absolute -right-4 -top-8 font-serif text-[10rem] leading-none text-sg-lime/10"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            [Testimonial placeholder — quote from an early corporate partner or pilot
            organization describing measurable results and reporting quality.]
            <footer className="mt-4 text-sm font-semibold not-italic text-sg-lime">
              — Name, Title, Organization
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* SECTION 6 — Who We Work With */}
      <section id="who-we-work-with" className="py-24 md:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg">
              Who We Work With
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-sg-dark md:text-5xl">
              For every organization ready to lead.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((segment, index) => {
              const Icon = segmentIcons[index];
              return (
                <motion.article
                  key={segment.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-sg/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sg-lime/50 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sg-lime/15 text-sg">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-sg-dark">
                    {segment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{segment.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA Band */}
      <section
        id="consultation"
        className="relative overflow-hidden bg-gradient-to-r from-sg to-sg-dark py-24 text-white md:py-28"
      >
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sg-lime/10 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-wide relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Ready to move beyond tree planting?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-100 md:text-lg">
              Book a free carbon consultation. We&apos;ll assess your footprint, show you what a
              creative reduction portfolio could look like, and demonstrate the digital
              reporting your stakeholders are waiting for.
            </p>
            <a
              href="mailto:hello@sparkgreen.co.tz"
              className="mt-10 inline-flex rounded-full bg-sg-lime px-8 py-4 text-sm font-semibold text-sg-dark shadow-lg shadow-sg-lime/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sg-lime/30"
            >
              Book a Free Consultation →
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section id="faq" className="py-24 md:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sg">FAQ</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-sg-dark md:text-5xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4">
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

      {/* SECTION 9 — Sparkgreen footer band (global Sparkcraft footer follows) */}
      <section className="bg-sg-dark py-16 text-white">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="leading-none">
                <span className="block text-xl font-black tracking-tightest text-white md:text-2xl">
                  SPARKGREEN
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-wider2 text-sg-lime md:text-xs">
                  A Sparkcraft Company
                </span>
              </p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
                Sparkgreen is the sustainability arm of Sparkcraft — creative solutions that
                drive environmental change and climate impact at scale. We help organizations
                measure, reduce, offset and digitally report their carbon footprint, with a
                partner built for Tanzania.
              </p>
            </div>
            <div className="lg:text-right">
              <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium lg:justify-end" aria-label="Sparkgreen links">
                <a href="#approach" className="transition-colors hover:text-sg-lime">Our Approach</a>
                <a href="#solutions" className="transition-colors hover:text-sg-lime">Solutions</a>
                <a href="#why-sparkgreen" className="transition-colors hover:text-sg-lime">Why Sparkgreen</a>
                <a href="#faq" className="transition-colors hover:text-sg-lime">FAQ</a>
                <a href="/" className="transition-colors hover:text-sg-lime">Back to Sparkcraft main site</a>
              </nav>
              <p className="mt-5 text-sm text-zinc-300">
                <a href="mailto:hello@sparkgreen.co.tz" className="transition-colors hover:text-sg-lime">
                  hello@sparkgreen.co.tz
                </a>{" "}
                · Dar es Salaam, Tanzania
              </p>
              <p className="mt-3 text-xs text-zinc-400">
                © 2026 Sparkgreen, a Sparkcraft company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
