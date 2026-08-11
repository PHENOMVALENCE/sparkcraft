"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { stagger, fadeUp, transition } from "@/lib/motion";

type Stat = { value: string; label: string };

type StatBandProps = {
  stats: readonly Stat[] | Stat[];
  dark?: boolean;
  compact?: boolean;
  animateOnMount?: boolean;
  className?: string;
};

export default function StatBand({
  stats,
  dark = false,
  compact = false,
  animateOnMount = false,
  className,
}: StatBandProps) {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = animateOnMount
    ? { initial: "hidden" as const, animate: "show" as const }
    : { initial: "hidden" as const, whileInView: "show" as const, viewport: { once: true, amount: 0.3 } };

  return (
    <motion.div
      className={cn(
        "grid grid-cols-3 divide-x",
        dark ? "divide-white/15 border-white/15 text-white" : "divide-spark-primary/10 border-spark-primary/10",
        "border-y",
        className,
      )}
      {...motionProps}
      variants={prefersReducedMotion ? undefined : stagger(0.08)}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={prefersReducedMotion ? undefined : fadeUp}
          transition={{ ...transition, duration: prefersReducedMotion ? 0 : 0.45 }}
          className={cn(
            "group text-center transition-colors duration-200 hover:bg-white/[0.03]",
            compact ? "px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5" : "px-4 py-6 sm:px-8 sm:py-8",
          )}
        >
          <p
            className={cn(
              "font-black tracking-tight",
              compact ? "text-2xl sm:text-3xl lg:text-[2rem]" : "text-3xl md:text-4xl",
              dark ? "text-spark-accent" : "text-spark-primary",
            )}
          >
            {stat.value}
          </p>
          <p
            className={cn(
              "mt-1 font-medium leading-snug",
              compact ? "text-[10px] sm:text-xs lg:text-sm" : "mt-2 text-sm",
              dark ? "text-zinc-400" : "text-spark-muted",
            )}
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
