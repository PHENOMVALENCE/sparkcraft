import Reveal from "@/components/ui/Reveal";
import FinSparkSection, { FinSparkHeading } from "@/components/finspark/FinSparkSection";
import { operatingModelStatement, operatingPrinciples } from "@/lib/finspark-data";

export default function OperatingModel() {
  return (
    <FinSparkSection id="model" tone="navy" grid>
      <FinSparkHeading
        eyebrow="The operating model"
        title="Infrastructure for regulated partners — not a lender, not an insurer."
        dark
      />

      <Reveal>
        <p className="mt-10 max-w-4xl border-l-2 border-fs-gold pl-6 text-lg font-semibold leading-9 text-white md:text-xl md:leading-10">
          {operatingModelStatement}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
        {operatingPrinciples.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <Reveal key={principle.title} delay={index * 0.06} className="bg-fs-navy">
              <div className="h-full px-7 py-8">
                <Icon size={22} className="text-fs-teal-light" aria-hidden="true" />
                <h3 className="mt-5 text-base font-bold leading-snug text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{principle.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </FinSparkSection>
  );
}
