"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, transition, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export default function Reveal({ children, className, delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeUp}
      transition={{ ...transition, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
