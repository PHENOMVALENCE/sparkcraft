import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { FINSPARK_CONTACT, ctaBody, ctaHeadline } from "@/lib/finspark-data";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: FINSPARK_CONTACT.email,
    href: `mailto:${FINSPARK_CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: FINSPARK_CONTACT.phone,
    href: FINSPARK_CONTACT.phoneHref,
  },
  {
    icon: Globe,
    label: "Web",
    value: FINSPARK_CONTACT.domain,
    href: `https://${FINSPARK_CONTACT.domain}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: FINSPARK_CONTACT.location,
    href: undefined,
  },
] as const;

export default function FinSparkCTA() {
  return (
    <section
      id="partner"
      aria-labelledby="partner-heading"
      className="relative isolate overflow-hidden bg-fs-navy py-20 text-white md:py-28"
    >
      <div className="fs-grid absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-fs-teal-light/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <Reveal className="max-w-3xl">
          <p className="fs-eyebrow text-fs-gold">Partnership</p>
          <div className="mt-4 h-px w-full max-w-xs fs-rule-dark" aria-hidden="true" />
          <h2 id="partner-heading" className="fs-heading mt-6 text-white">
            {ctaHeadline}
          </h2>
          <p className="mt-6 max-w-prose-wide text-base leading-8 text-slate-300 md:text-lg">
            {ctaBody}
          </p>

          <a
            href={FINSPARK_CONTACT.partnershipMailto}
            className="group mt-9 inline-flex min-h-[2.75rem] items-center gap-2 bg-fs-gold px-6 py-3 text-sm font-semibold text-fs-navy transition-colors duration-200 hover:bg-fs-gold-bright"
          >
            Start a Partnership Conversation
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-16 grid gap-px border border-white/[0.12] bg-white/[0.12] sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const body = (
                <>
                  <Icon size={17} className="text-fs-teal-light" aria-hidden="true" />
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {channel.label}
                  </p>
                  <p className="mt-1.5 select-all break-words text-sm font-bold text-white">
                    {channel.value}
                  </p>
                </>
              );

              return (
                <li key={channel.label} className="bg-fs-navy">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="block h-full px-6 py-7 transition-colors hover:bg-fs-navy-2"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="h-full px-6 py-7">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
