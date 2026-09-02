import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import FinSparkSection, { FinSparkHeading } from "@/components/finspark/FinSparkSection";
import { whySparkcraft } from "@/lib/finspark-data";

export default function WhySparkcraft() {
  return (
    <FinSparkSection id="why-sparkcraft" tone="white">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <FinSparkHeading
            eyebrow="Why Sparkcraft Technologies"
            title="This is not a pivot. It is the same work, one layer down."
          />
          <Reveal>
            <p className="mt-6 max-w-prose text-base leading-8 text-fs-slate">
              Sparkcraft Technologies exists to make African markets legible to the people
              deploying capital into them. FinSpark applies that to the last mile.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex min-h-[2.75rem] items-center gap-2 border border-fs-navy/20 px-5 py-3 text-sm font-semibold text-fs-navy transition-colors hover:border-fs-teal hover:text-fs-teal"
            >
              About Sparkcraft Technologies
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ul className="divide-y divide-fs-line border-y border-fs-line">
          {whySparkcraft.map((item, index) => (
            <li key={item.title}>
              <Reveal
                delay={index * 0.05}
                className="grid gap-3 py-7 sm:grid-cols-[auto_1fr] sm:gap-8"
              >
                <span
                  className="text-sm font-black tabular-nums text-fs-gold"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold leading-snug text-fs-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-[15px] leading-7 text-fs-slate">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </FinSparkSection>
  );
}
