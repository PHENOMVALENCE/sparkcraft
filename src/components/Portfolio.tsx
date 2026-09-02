import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ventures } from "@/lib/data";

export default function Portfolio() {
  return (
    <Section id="ventures" tone="dark" spacing="default">
      <div className="container-wide">
        <Reveal className="max-w-3xl">
          <p className="section-label">Our Ventures</p>
          <h2 className="mt-3 text-display-md text-white">
            Where advice isn&apos;t enough, we build.
          </h2>
          <p className="mt-5 max-w-prose-wide text-body-lg text-zinc-300">
            Some gaps in African markets cannot be closed with a recommendation. When our
            work surfaces one that needs infrastructure rather than analysis, Sparkcraft
            Technologies builds it — and it becomes a venture in its own right.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
          {ventures.map((venture, index) => (
            <Reveal key={venture.name} delay={index * 0.08} className="bg-spark-dark">
              <article className="flex h-full flex-col p-8 md:p-10">
                <div
                  className="h-1 w-14"
                  style={{ backgroundColor: venture.accent }}
                  aria-hidden="true"
                />
                <h3 className="mt-6 text-2xl font-black tracking-tightest text-white md:text-3xl">
                  {venture.name}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider2 text-spark-accent">
                  {venture.tagline}
                </p>
                <p className="mt-6 text-base leading-8 text-zinc-300">{venture.problem}</p>

                <Link
                  href={venture.href}
                  className="group mt-auto inline-flex min-h-[2.75rem] items-center gap-2 pt-8 text-sm font-semibold text-spark-accent transition-colors hover:text-spark-accent-hover"
                >
                  Visit {venture.name}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
