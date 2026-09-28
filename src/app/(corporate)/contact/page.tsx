import Link from "next/link";
import { ArrowUpRight, CreditCard, Mail, MapPin, Network, PackageCheck, Phone } from "lucide-react";
import CorporatePageIntro from "@/components/CorporatePageIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact SparkCraft Technologies | Start a Conversation",
  description: "Contact SparkCraft Technologies in Dar es Salaam for ICT, fintech integration, IT equipment, and procurement requirements.",
  path: "/contact",
});

const pathways = [
  {
    title: "ICT & Technology",
    copy: "Enterprise hardware, networking, software deployment, installation, maintenance, and support.",
    subject: "SparkCraft ICT & Technology inquiry",
    Icon: Network,
  },
  {
    title: "Fintech & Payments",
    copy: "Payment integration, aggregation, transaction connectivity, reporting, and reconciliation workflows.",
    subject: "SparkCraft Fintech & Payments inquiry",
    Icon: CreditCard,
  },
  {
    title: "IT & General Supplies",
    copy: "Technology equipment, office supplies, furniture, consumables, and institutional procurement.",
    subject: "SparkCraft Procurement inquiry",
    Icon: PackageCheck,
  },
] as const;

const briefing = [
  "Your organization name and contact person",
  "The service, product, or solution you need",
  "Specifications, quantities, or integration requirements",
  "Preferred delivery or implementation timeline",
  "Delivery location or operating environment, where relevant",
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <CorporatePageIntro
        eyebrow="Contact"
        title="Let’s discuss what your organization needs."
        description="Start with a direct conversation. Choose the most relevant solution area, call us, or email your requirements and our team will review the next steps with you."
      />

      <section className="corporate-section bg-[var(--sc-surface)]">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-12">
            <article className="corporate-card" data-reveal>
              <p className="corporate-kicker">Speak with SparkCraft</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Direct. Practical. Business focused.</h2>
              <p className="corporate-copy mt-5">
                Reach our team directly for technology requirements, payment integration discussions, procurement requests, or general business enquiries.
              </p>

              <dl className="mt-8 divide-y divide-[var(--sc-border)] border-y border-[var(--sc-border)]">
                <div className="flex gap-4 py-5">
                  <Mail className="mt-1 shrink-0 text-[var(--sc-accent-ink)]" />
                  <div className="min-w-0">
                    <dt className="text-xs font-bold uppercase tracking-[.14em] text-[var(--sc-accent-ink)]">Email</dt>
                    <dd className="mt-2">
                      <a className="break-all text-lg font-semibold text-[var(--sc-navy)] hover:underline" href="mailto:contact@sparkcraft.co.tz">
                        contact@sparkcraft.co.tz
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 py-5">
                  <Phone className="mt-1 shrink-0 text-[var(--sc-accent-ink)]" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[.14em] text-[var(--sc-accent-ink)]">Phone</dt>
                    <dd className="mt-2">
                      <a className="text-lg font-semibold text-[var(--sc-navy)] hover:underline" href="tel:+255756948267">
                        +255 756 948 267
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 py-5">
                  <MapPin className="mt-1 shrink-0 text-[var(--sc-accent-ink)]" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[.14em] text-[var(--sc-accent-ink)]">Location</dt>
                    <dd className="mt-2 text-lg font-semibold text-[var(--sc-navy)]">Dar es Salaam, Tanzania</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="tel:+255756948267" className="corporate-button w-full sm:w-auto">
                  Call SparkCraft <Phone size={17} />
                </a>
                <a href="mailto:contact@sparkcraft.co.tz?subject=SparkCraft%20business%20inquiry" className="corporate-button-outline w-full text-[var(--sc-navy)] sm:w-auto">
                  Email Our Team <ArrowUpRight size={17} />
                </a>
              </div>
            </article>

            <div data-reveal>
              <p className="corporate-kicker">Choose a starting point</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Connect directly with the right solution area.</h2>
              <p className="corporate-copy mt-5 max-w-3xl">
                Select the area closest to your requirement. Each option opens a ready-addressed email so you can send your brief, specifications, or procurement request directly.
              </p>

              <div className="mt-8 grid gap-4">
                {pathways.map(({ title, copy, subject, Icon }) => (
                  <a
                    key={title}
                    href={`mailto:contact@sparkcraft.co.tz?subject=${encodeURIComponent(subject)}`}
                    className="group grid gap-5 rounded-xl border border-[var(--sc-border)] bg-white p-5 shadow-[0_12px_38px_rgba(8,29,48,.035)] transition hover:-translate-y-1 hover:border-[var(--sc-gold)] hover:shadow-[0_20px_46px_rgba(8,29,48,.08)] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--sc-amber)] text-[var(--sc-navy)]">
                      <Icon size={24} strokeWidth={1.7} />
                    </span>
                    <span>
                      <strong className="block text-xl text-[var(--sc-navy)]">{title}</strong>
                      <span className="mt-2 block leading-7 text-[var(--sc-muted)]">{copy}</span>
                    </span>
                    <ArrowUpRight className="text-[var(--sc-link)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="corporate-section bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16" data-reveal>
          <div>
            <p className="corporate-kicker">Help us respond faster</p>
            <h2 className="corporate-title mt-4">Send a clear project brief.</h2>
            <p className="corporate-copy mt-5">
              You do not need a formal tender document to start a conversation. A concise email with the key requirements is enough for our team to review the scope and determine the appropriate next step.
            </p>
          </div>

          <div className="rounded-xl bg-[var(--sc-navy)] p-6 text-white sm:p-8">
            <h3 className="text-2xl font-bold">What to include in your message</h3>
            <ul className="mt-6 grid gap-4">
              {briefing.map((item, index) => (
                <li key={item} className="flex gap-4 border-b border-white/15 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-sm font-bold text-[var(--sc-gold-light)]">0{index + 1}</span>
                  <span className="leading-7 text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="mailto:contact@sparkcraft.co.tz?subject=SparkCraft%20project%20brief"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--sc-gold)] px-5 py-3.5 font-extrabold text-[var(--sc-navy)] transition hover:bg-[var(--sc-gold-light)] sm:w-auto"
            >
              Send Your Requirements <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
