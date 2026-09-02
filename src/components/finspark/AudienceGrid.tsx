import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import FinSparkSection, { FinSparkHeading } from "@/components/finspark/FinSparkSection";
import { audiences } from "@/lib/finspark-data";

export default function AudienceGrid() {
  return (
    <FinSparkSection id="audiences" tone="canvas">
      <FinSparkHeading
        eyebrow="Who FinSpark builds for"
        title="Four kinds of partner, one shared obstacle."
        lede="Each of these organisations is already trying to reach the same people. What none of them currently has is a reliable, shared way of seeing them."
      />

      <div className="mt-14 grid gap-px border border-fs-line bg-fs-line md:grid-cols-2">
        {audiences.map((audience, index) => {
          const Icon = audience.icon;
          return (
            <Reveal key={audience.name} delay={(index % 2) * 0.06} className="bg-white">
              <article className="h-full p-7 md:p-9">
                <Icon size={22} className="text-fs-teal" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-black tracking-tight text-fs-navy">
                  {audience.name}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-fs-slate">
                  {audience.proposition}
                </p>
                <ul className="mt-6 space-y-3 border-t border-fs-line pt-5">
                  {audience.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-fs-ink">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-fs-gold"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </FinSparkSection>
  );
}
