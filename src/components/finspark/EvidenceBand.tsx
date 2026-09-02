import Reveal from "@/components/ui/Reveal";
import { evidenceNote, evidenceStats } from "@/lib/finspark-data";

export default function EvidenceBand() {
  return (
    <section
      aria-labelledby="evidence-heading"
      className="relative isolate overflow-hidden border-y border-white/10 bg-fs-navy-3 py-14 text-white md:py-16"
    >
      <div className="fs-grid absolute inset-0" aria-hidden="true" />
      <div className="container-wide relative z-10">
        <h2 id="evidence-heading" className="fs-eyebrow text-fs-gold">
          The evidence
        </h2>

        <Reveal>
          <dl className="mt-8 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {evidenceStats.map((stat) => (
              <div key={stat.label} className="bg-fs-navy-3 px-6 py-7">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <p className="text-3xl font-black tracking-tight text-fs-gold md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
                  <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-fs-teal-light">
                    {stat.year}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-prose-wide text-sm leading-7 text-slate-400">
            {evidenceNote}
          </p>

          <h3 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Sources
          </h3>
          <ul className="mt-3 space-y-2 text-xs leading-6 text-slate-400">
            {Array.from(new Map(evidenceStats.map((s) => [s.source, s])).values()).map(
              (stat) => (
                <li key={stat.source}>
                  <a
                    href={stat.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-slate-600 underline-offset-4 transition-colors hover:text-fs-gold-bright hover:decoration-fs-gold"
                  >
                    {stat.source}
                  </a>
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
