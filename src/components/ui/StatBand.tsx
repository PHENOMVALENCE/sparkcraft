"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { stagger, fadeUp, transition } from "@/lib/motion";

type Stat = { value: string; label: string };

type StatBandProps = {
  stats: Stat[];
  dark?: boolean;
  className?: string;
};

export default function StatBand({ stats, dark = false, className }: StatBandProps) {
  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0",
        dark ? "divide-white/15 border-white/15" : "divide-spark-primary/10 border-spark-primary/10",
        "border-t border-b",
        className,
      )}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger(0.12)}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={fadeUp}
          transition={transition}
          className="px-4 py-6 text-center sm:px-8 sm:py-8"
        >
          <p
            className={cn(
              "text-3xl font-black tracking-tight md:text-4xl",
              dark ? "text-spark-accent" : "text-spark-primary",
            )}
          >
            {stat.value}
          </p>
          <p
            className={cn(
              "mt-2 text-sm font-medium leading-snug",
              dark ? "text-zinc-300" : "text-spark-muted",
            )}
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
