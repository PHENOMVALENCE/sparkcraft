import Reveal from "@/components/ui/Reveal";
import FinSparkSection, { FinSparkHeading } from "@/components/finspark/FinSparkSection";
import { problemPoints, problemPullQuote } from "@/lib/finspark-data";

export default function ProblemSection() {
  return (
    <FinSparkSection id="problem" tone="canvas">
      <FinSparkHeading
        eyebrow="The problem"
        title={
          <>
            Nothing here is a lending problem.
            <br className="hidden sm:block" /> It is a record-keeping problem.
          </>
        }
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <ol className="divide-y divide-fs-line border-y border-fs-line">
          {problemPoints.map((point, index) => (
            <li key={point.title}>
              <Reveal
                delay={index * 0.05}
                className="grid gap-3 py-7 sm:grid-cols-[auto_1fr] sm:gap-8"
              >
                <span
                  className="text-sm font-black tabular-nums text-fs-teal"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-snug text-fs-navy">
                    {point.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-[15px] leading-7 text-fs-slate">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
          <figure className="relative border-l-2 border-fs-gold bg-white px-7 py-10 shadow-sm">
            <blockquote className="text-2xl font-bold leading-tight tracking-tight text-fs-navy md:text-[1.75rem]">
              {problemPullQuote}
            </blockquote>
            <figcaption className="mt-6 border-t border-fs-line pt-5 text-sm leading-7 text-fs-slate">
              A smallholder farmer with nine seasons of delivery history and a market
              trader with six years of restocking typically hold the same formal credit
              file: none at all.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </FinSparkSection>
  );
}
