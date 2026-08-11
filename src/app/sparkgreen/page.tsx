import type { Metadata } from "next";
import SparkgreenContent from "@/components/sparkgreen/SparkgreenContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sparkgreen by Sparkcraft | Creative Carbon Solutions for Tanzania",
  description:
    "Sparkgreen helps companies and organizations in Tanzania measure, reduce, offset and digitally report their carbon footprint — beyond tree planting, with verified impact.",
  path: "/sparkgreen",
  ogTitle: "Sparkgreen by Sparkcraft | Sustainability Reimagined for Tanzania",
  ogDescription:
    "Creative carbon solutions — measure, reduce, offset and report your footprint with digital verification built for Tanzania.",
});

export default function SparkgreenPage() {
  return <SparkgreenContent />;
}
