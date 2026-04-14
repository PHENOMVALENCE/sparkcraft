import About from "@/components/About";
import BIReports from "@/components/BIReports";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import TickerStrip from "@/components/TickerStrip";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import WhoWeServe from "@/components/WhoWeServe";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
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