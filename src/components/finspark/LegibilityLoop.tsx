import { CornerDownLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import FinSparkSection, { FinSparkHeading } from "@/components/finspark/FinSparkSection";
import {
  loopOutcome,
  loopStrapline,
  loopSteps,
  loopTextEquivalent,
} from "@/lib/finspark-data";

/**
 * Diagrammatic, non-interactive rendering of the Legibility Loop.
 *
 * All four stages and their explanations are always visible, so the section is
 * fully understandable with animation disabled and with a screen reader. The
 * only motion is a decorative pulse on the connectors, neutralised under
 * prefers-reduced-motion.
 */
export default function LegibilityLoop() {
  return (
    <FinSparkSection id="loop" tone="navy" grid>
      <FinSparkHeading
        eyebrow="The Legibility Loop"
        title="Every delivery leaves evidence behind."
        lede="Each product earns its keep by doing a standalone job. In doing that job it also contributes, with consent, to a shared record — so the next decision is made on better ground than the last."
        dark
      />

      <p className="sr-only">{loopTextEquivalent}</p>

      <ol className="mt-14 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
        {loopSteps.map((step, index) => (
          <li key={step.step} className="relative bg-fs-navy">
            <Reveal delay={index * 0.07} className="h-full px-6 py-8">
              <div className="flex items-baseline gap-3">
                <span
                  className="text-xs font-black tabular-nums text-fs-gold"
                  aria-hidden="true"
                >
                  {step.step}
                </span>
                <span className="fs-eyebrow text-fs-teal-light">{step.role}</span>
              </div>

              <h3 className="mt-4 text-lg font-black tracking-tight text-white">
                {step.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.body}</p>
            </Reveal>

            {/* Connector to the next stage. Decorative. */}
            {index < loopSteps.length - 1 && (
              <div
                className="fs-signal-track pointer-events-none absolute inset-x-6 bottom-0 h-px bg-white/15 lg:inset-x-auto lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:h-16 lg:w-px lg:translate-x-1/2 lg:bg-white/15"
                aria-hidden="true"
              >
                <span className="fs-signal-pulse block h-full w-1/4 bg-fs-gold lg:w-full" />
              </div>
            )}
          </li>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <div className="mt-px grid items-center gap-6 border border-white/10 border-t-0 bg-fs-navy-2/40 px-6 py-8 sm:grid-cols-[auto_1fr] sm:gap-8 md:px-9">
          <CornerDownLeft
            size={28}
            className="text-fs-gold"
            aria-hidden="true"
          />
          <div>
            <h3 className="text-lg font-black tracking-tight text-white">
              {loopOutcome.title}
            </h3>
            <p className="mt-2 max-w-prose-wide text-sm leading-7 text-slate-300">
              {loopOutcome.body} The signal returns to the start of the cycle, and the loop
              runs again.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-12 text-center text-xl font-black tracking-tight text-fs-gold md:text-2xl">
          {loopStrapline}
        </p>
      </Reveal>
    </FinSparkSection>
  );
}
