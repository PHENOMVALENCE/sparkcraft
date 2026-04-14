"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const shell = scrolled
    ? "border-b border-[#d7d0be] bg-[#f8f6f1]/95 shadow-sm backdrop-blur"
    : "border-b border-transparent bg-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        className={`transition-colors duration-300 ${shell}`}
        initial={false}
        animate={{ y: 0 }}
      >
        <div className="container-wide">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="leading-none">
              <span className="block text-xl font-black tracking-tightest text-spark-primary md:text-2xl">
                SPARKCRAFT
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider2 text-spark-accent md:text-xs">
                CONSULTING
              </span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-spark-primary transition-colors hover:text-spark-accent"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-spark-accent px-5 py-3 text-sm font-semibold text-spark-dark transition-transform hover:-translate-y-0.5"
              >
                Start Your Engagement
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-full border border-spark-primary/20 p-2 text-spark-primary md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="border-t border-[#d7d0be] bg-[#f8f6f1] md:hidden"
            >
              <div className="container-wide py-4">
                <div className="flex flex-col gap-4">
                  {navLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-base font-medium text-spark-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="mt-2 inline-flex w-fit rounded-full bg-spark-accent px-5 py-3 text-sm font-semibold text-spark-dark"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Your Engagement
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}