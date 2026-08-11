"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

const menuEase = [0.2, 0.8, 0.2, 1] as const;
const menuTransition = { duration: 0.22, ease: menuEase };
import { ArrowRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const sectionIds = navLinks
  .map((link) => link.href.replace("/#", "").replace("#", ""))
  .filter(Boolean);

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  const onHomeOrSparkgreen = pathname === "/" || pathname === "/sparkgreen";
  const isOverDarkHero = onHomeOrSparkgreen && !scrolled;
  // When the mobile menu is open, always use the light shell for readable contrast.
  const useLightNav = isOpen || !isOverDarkHero;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  const updateActiveSection = useCallback(() => {
    if (pathname !== "/") return;

    const offset = 140;
    let current = "";

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        current = id;
      }
    }

    setActiveSection(current);
  }, [pathname]);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        className={cn(
          "pointer-events-auto mx-auto max-w-6xl overflow-hidden rounded-2xl border shadow-lg",
          "transition-[border-color,box-shadow] duration-200 ease-out",
          useLightNav
            ? "border-spark-border bg-spark-bg"
            : "border-white/10 bg-spark-dark/95 shadow-black/25 max-lg:bg-spark-dark/95 lg:bg-spark-dark/85 lg:backdrop-blur-md",
          scrolled && !isOpen && "shadow-lg",
        )}
        initial={false}
      >
        <div className="flex h-[3.625rem] items-center justify-between px-4 sm:px-5 lg:h-[3.875rem] lg:px-6">
          <Link href="/" className="leading-none" aria-label="Sparkcraft Consulting home">
            <span
              className={cn(
                "block text-lg font-black tracking-tightest transition-colors duration-150 sm:text-xl",
                useLightNav ? "text-spark-primary" : "text-white",
              )}
            >
              SPARKCRAFT
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-wider2 text-spark-accent sm:text-[10px]">
              CONSULTING
            </span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navLinks.map((item) => {
              const sectionId = item.href.replace("/#", "").replace("#", "");
              const isActive = pathname === "/" && activeSection === sectionId;
              const isSparkgreen = item.href === "/sparkgreen" && pathname === "/sparkgreen";

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive || isSparkgreen ? "page" : undefined}
                  className={cn(
                    "group relative text-[13px] font-medium transition-colors duration-200",
                    useLightNav
                      ? "text-spark-primary hover:text-spark-accent"
                      : "text-white/85 hover:text-spark-accent",
                    (isActive || isSparkgreen) && "text-spark-accent",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-spark-accent transition-all duration-200",
                      isActive || isSparkgreen ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </a>
              );
            })}
            <Button
              href="/#contact"
              variant="primary"
              className="group px-4 py-2 text-[13px]"
            >
              Start Your Engagement
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn(
              "rounded-full border p-2 transition-[color,border-color,background-color] duration-150 lg:hidden",
              useLightNav
                ? "border-spark-primary/20 text-spark-primary hover:border-spark-accent hover:text-spark-accent"
                : "border-white/25 text-white hover:border-spark-accent hover:text-spark-accent",
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={menuTransition}
              className="border-t border-spark-border bg-spark-bg will-change-[transform,opacity] lg:hidden"
            >
              <nav className="flex flex-col px-4 py-3 sm:px-5" aria-label="Mobile navigation">
                {navLinks.map((item) => {
                  const sectionId = item.href.replace("/#", "").replace("#", "");
                  const isActive = pathname === "/" && activeSection === sectionId;
                  const isSparkgreen =
                    item.href === "/sparkgreen" && pathname === "/sparkgreen";

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      aria-current={isActive || isSparkgreen ? "page" : undefined}
                      className={cn(
                        "border-b border-spark-border py-3.5 text-base font-medium transition-colors",
                        isActive || isSparkgreen
                          ? "text-spark-accent"
                          : "text-spark-primary hover:text-spark-accent",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <Button
                  href="/#contact"
                  variant="primary"
                  className="mt-4 w-full justify-center py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Start Your Engagement
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
