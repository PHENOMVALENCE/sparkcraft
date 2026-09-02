"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks, ventures } from "@/lib/data";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const menuEase = [0.2, 0.8, 0.2, 1] as const;
const menuTransition = { duration: 0.22, ease: menuEase };

const sectionIds = navLinks
  .map((link) => link.href.replace("/#", "").replace("#", ""))
  .filter(Boolean);

const venturePaths = ventures.map((venture) => venture.href);

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [venturesOpen, setVenturesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const venturesRef = useRef<HTMLDivElement>(null);

  const isFinSpark = pathname === "/finspark";
  const onVenturePage = venturePaths.includes(pathname as (typeof venturePaths)[number]);
  const overDarkHero = (pathname === "/" || onVenturePage) && !scrolled;
  // When the mobile menu is open, always use the light shell for readable contrast.
  const useLightNav = isOpen || !overDarkHero;

  // FinSpark uses its own gold accent so the nav belongs to the route it sits on,
  // while the wordmark keeps the Sparkcraft Technologies relationship visible.
  const accentText = isFinSpark ? "text-fs-gold" : "text-spark-accent";
  const accentHoverText = isFinSpark
    ? "hover:text-fs-gold-bright"
    : "hover:text-spark-accent";
  const accentBg = isFinSpark ? "bg-fs-gold" : "bg-spark-accent";
  const accentBorderHover = isFinSpark
    ? "hover:border-fs-gold"
    : "hover:border-spark-accent";

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
    setVenturesOpen(false);
  }, [pathname]);

  // Dismiss the ventures menu on Escape or an outside click.
  useEffect(() => {
    if (!venturesOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVenturesOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      if (!venturesRef.current?.contains(event.target as Node)) {
        setVenturesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [venturesOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        className={cn(
          "pointer-events-auto mx-auto max-w-6xl rounded-2xl border shadow-lg",
          "transition-[border-color,box-shadow] duration-200 ease-out",
          isOpen ? "overflow-hidden" : "overflow-visible",
          useLightNav
            ? "border-spark-border bg-spark-bg"
            : isFinSpark
              ? "border-white/10 bg-fs-navy/95 shadow-black/25 lg:bg-fs-navy/85 lg:backdrop-blur-md"
              : "border-white/10 bg-spark-dark/95 shadow-black/25 max-lg:bg-spark-dark/95 lg:bg-spark-dark/85 lg:backdrop-blur-md",
          scrolled && !isOpen && "shadow-lg",
        )}
        initial={false}
      >
        <div className="flex h-[3.625rem] items-center justify-between px-4 sm:px-5 lg:h-[3.875rem] lg:px-6">
          <Link
            href="/"
            className="leading-none"
            aria-label="Sparkcraft Technologies home"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            <span
              className={cn(
                "block text-lg font-black tracking-tightest transition-colors duration-150 sm:text-xl",
                useLightNav ? "text-spark-primary" : "text-white",
              )}
            >
              SPARKCRAFT
            </span>
            <span
              className={cn(
                "block text-[9px] font-semibold uppercase tracking-wider2 sm:text-[10px]",
                accentText,
              )}
            >
              TECHNOLOGIES
            </span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navLinks.map((item) => {
              const sectionId = item.href.replace("/#", "").replace("#", "");
              const isActive = pathname === "/" && activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group relative text-[13px] font-medium transition-colors duration-200",
                    useLightNav
                      ? cn("text-spark-primary", accentHoverText)
                      : cn("text-white/85", accentHoverText),
                    isActive && accentText,
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px transition-all duration-200",
                      accentBg,
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </a>
              );
            })}

            <div className="relative" ref={venturesRef}>
              <button
                type="button"
                onClick={() => setVenturesOpen((prev) => !prev)}
                aria-expanded={venturesOpen}
                aria-haspopup="true"
                aria-controls="ventures-menu"
                className={cn(
                  "group relative inline-flex items-center gap-1 text-[13px] font-medium transition-colors duration-200",
                  useLightNav
                    ? cn("text-spark-primary", accentHoverText)
                    : cn("text-white/85", accentHoverText),
                  onVenturePage && accentText,
                )}
              >
                Ventures
                <ChevronDown
                  size={13}
                  className={cn(
                    "transition-transform duration-200",
                    venturesOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px transition-all duration-200",
                    accentBg,
                    onVenturePage ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </button>

              <AnimatePresence>
                {venturesOpen && (
                  <motion.div
                    id="ventures-menu"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={menuTransition}
                    className="absolute right-0 top-[calc(100%+1rem)] w-72 overflow-hidden rounded-xl border border-spark-border bg-spark-bg shadow-xl"
                  >
                    <ul>
                      {ventures.map((venture) => (
                        <li key={venture.href}>
                          <Link
                            href={venture.href}
                            aria-current={pathname === venture.href ? "page" : undefined}
                            onClick={() => setVenturesOpen(false)}
                            className="flex gap-3 border-b border-spark-border px-4 py-3.5 transition-colors last:border-b-0 hover:bg-spark-primary/5"
                          >
                            <span
                              className="mt-1.5 h-8 w-1 shrink-0"
                              style={{ backgroundColor: venture.accent }}
                              aria-hidden="true"
                            />
                            <span>
                              <span className="block text-sm font-bold text-spark-primary">
                                {venture.name}
                              </span>
                              <span className="mt-0.5 block text-xs leading-5 text-spark-muted">
                                {venture.tagline}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button
              href="/#contact"
              variant="primary"
              className={cn(
                "group px-4 py-2 text-[13px]",
                isFinSpark && "bg-fs-gold text-fs-navy hover:bg-fs-gold-bright",
              )}
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
              "grid h-11 w-11 place-items-center rounded-full border transition-[color,border-color,background-color] duration-150 lg:hidden",
              useLightNav
                ? cn(
                    "border-spark-primary/20 text-spark-primary",
                    accentBorderHover,
                    accentHoverText,
                  )
                : cn("border-white/25 text-white", accentBorderHover, accentHoverText),
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
              className="max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-spark-border bg-spark-bg will-change-[transform,opacity] lg:hidden"
            >
              <nav className="flex flex-col px-4 py-3 sm:px-5" aria-label="Mobile navigation">
                {navLinks.map((item) => {
                  const sectionId = item.href.replace("/#", "").replace("#", "");
                  const isActive = pathname === "/" && activeSection === sectionId;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "border-b border-spark-border py-3.5 text-base font-medium transition-colors",
                        isActive
                          ? accentText
                          : cn("text-spark-primary", accentHoverText),
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                })}

                <p className={cn("pb-2 pt-5 text-[11px] font-semibold uppercase tracking-wider2", accentText)}>
                  Ventures
                </p>
                {ventures.map((venture) => (
                  <Link
                    key={venture.href}
                    href={venture.href}
                    aria-current={pathname === venture.href ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 border-b border-spark-border py-3.5 text-base font-medium transition-colors",
                      pathname === venture.href
                        ? accentText
                        : cn("text-spark-primary", accentHoverText),
                    )}
                  >
                    <span
                      className="h-6 w-1 shrink-0"
                      style={{ backgroundColor: venture.accent }}
                      aria-hidden="true"
                    />
                    <span>
                      {venture.name}
                      <span className="block text-xs font-normal text-spark-muted">
                        {venture.tagline}
                      </span>
                    </span>
                  </Link>
                ))}

                <Button
                  href="/#contact"
                  variant="primary"
                  className="mb-2 mt-5 w-full justify-center py-3"
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
