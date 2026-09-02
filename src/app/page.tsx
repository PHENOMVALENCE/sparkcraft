import type { Metadata } from "next";
import About from "@/components/About";
import BIReports from "@/components/BIReports";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import TickerStrip from "@/components/TickerStrip";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import WhoWeServe from "@/components/WhoWeServe";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sparkcraft Technologies | Intelligence & Infrastructure for African Markets",
  description:
    "Sparkcraft Technologies builds intelligence and infrastructure for African markets — market entry advisory, regulatory navigation, and the ventures FinSpark and Sparkgreen. Dar es Salaam, Tanzania.",
  path: "",
  ogTitle: "Sparkcraft Technologies | Africa's Markets, Decoded for You",
  ogDescription:
    "Market intelligence, advisory and market infrastructure for African markets — and the home of FinSpark and Sparkgreen.",
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
      <Portfolio />
      <Industries />
      <BIReports />
      <CTA />
    </main>
  );
}
