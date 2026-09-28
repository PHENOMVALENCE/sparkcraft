"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    document.documentElement.classList.add("reveal-ready");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach(node => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    targets.forEach(node => observer.observe(node));
    return () => { observer.disconnect(); document.documentElement.classList.remove("reveal-ready"); };
  }, [pathname]);
  return null;
}
