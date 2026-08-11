"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const sectionIds = navLinks
  .map((link) => link.href.replace("/#", "").replace("#", ""))
  .filter(Boolean);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const updateActiveSection = useCallback(() => {
    const offset = 120;
    let current = "";

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        current = id;
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  const onDark = !scrolled && !isOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-spark-border bg-spark-bg/95 shadow-sm backdrop-blur-md"
            : isOpen
              ? "border-b border-spark-border bg-spark-bg"
              : "border-b border-transparent bg-transparent",
        )}
        initial={false}
      >
        <div className="container-wide">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-16" : "h-20",
            )}
          >
            <Link href="/" className="leading-none" aria-label="Sparkcraft Consulting home">
              <span
                className={cn(
                  "block text-xl font-black tracking-tightest transition-colors duration-300 md:text-2xl",
                  onDark ? "text-white" : "text-spark-primary",
                )}
              >
                SPARKCRAFT
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider2 text-spark-accent md:text-xs">
                CONSULTING
              </span>
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.map((item) => {
                const sectionId = item.href.replace("/#", "").replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group relative text-sm font-medium transition-colors duration-200",
                      onDark ? "text-white/90 hover:text-spark-accent" : "text-spark-primary hover:text-spark-accent",
                      isActive && "text-spark-accent",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-0.5 bg-spark-accent transition-all duration-200",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </a>
                );
              })}
              <Button href="/#contact" variant="primary" className="px-5 py-2.5">
                Start Your Engagement
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className={cn(
                "rounded-full border p-2 transition-colors duration-200 lg:hidden",
                onDark
                  ? "border-white/30 text-white"
                  : "border-spark-primary/20 text-spark-primary",
              )}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-spark-border bg-spark-bg lg:hidden"
            >
              <div className="container-wide py-4">
                <nav className="flex flex-col" aria-label="Mobile navigation">
                  {navLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="border-b border-spark-border py-4 text-base font-medium text-spark-primary transition-colors hover:text-spark-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button
                    href="/#contact"
                    variant="primary"
                    className="mt-4 w-fit"
                  >
                    Start Your Engagement
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
