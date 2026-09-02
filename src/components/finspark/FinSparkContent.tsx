import AudienceGrid from "@/components/finspark/AudienceGrid";
import EvidenceBand from "@/components/finspark/EvidenceBand";
import FinSparkCTA from "@/components/finspark/FinSparkCTA";
import FinSparkFooter from "@/components/finspark/FinSparkFooter";
import FinSparkHero from "@/components/finspark/FinSparkHero";
import LegibilityLoop from "@/components/finspark/LegibilityLoop";
import OperatingModel from "@/components/finspark/OperatingModel";
import ProblemSection from "@/components/finspark/ProblemSection";
import ProductGrid from "@/components/finspark/ProductGrid";
import WhySparkcraft from "@/components/finspark/WhySparkcraft";

export default function FinSparkContent() {
  return (
    <div className="finspark-theme">
      <main id="main-content" className="overflow-x-hidden bg-fs-canvas">
        <FinSparkHero />
        <EvidenceBand />
        <ProblemSection />
        <OperatingModel />
        <ProductGrid />
        <LegibilityLoop />
        <AudienceGrid />
        <WhySparkcraft />
        <FinSparkCTA />
      </main>
      <FinSparkFooter />
    </div>
  );
}
