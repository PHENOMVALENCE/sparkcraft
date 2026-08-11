import type { Metadata } from "next";
import About from "@/components/About";
import BIReports from "@/components/BIReports";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import TickerStrip from "@/components/TickerStrip";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import WhoWeServe from "@/components/WhoWeServe";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sparkcraft Consulting | Africa Market Intelligence & Advisory",
  description:
    "Sparkcraft Consulting delivers business intelligence, market entry strategy, and regulatory navigation across 30+ African markets. Headquartered in Dar es Salaam, Tanzania.",
  path: "",
  ogTitle: "Sparkcraft Consulting | Africa's Markets, Decoded for You",
  ogDescription:
    "Market intelligence and advisory for companies entering or expanding across African markets — mining, oil & gas, technology, and more.",
});

export default function Home() {
  return (
    <main id="main-content" className="overflow-x-hidden">
      <Hero />
      <TickerStrip />
      <About />
      <Services />
      <WhatMakesDifferent />
      <WhoWeServe />
      <Industries />
      <BIReports />
      <CTA />
    </main>
  );
}
