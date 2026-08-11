"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, transition, viewport } from "@/lib/motion";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.header
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeUp}
      transition={transition}
    >
      <p className={cn("section-label", dark && "text-spark-accent")}>{label}</p>
      <h2
        className={cn(
          "mt-3 text-display-md",
          dark ? "text-white" : "text-spark-primary",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-body-lg max-w-prose",
            align === "center" && "mx-auto",
            dark ? "text-zinc-300" : "text-spark-muted",
          )}
        >
          {description}
        </p>
      )}
    </motion.header>
  );
}
