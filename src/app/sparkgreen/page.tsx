import type { Metadata } from "next";
import SparkgreenContent from "@/components/sparkgreen/SparkgreenContent";

export const metadata: Metadata = {
  title: "Sparkgreen by Sparkcraft | Creative Carbon Solutions for Organizations in Tanzania",
  description:
    "Sparkgreen, Sparkcraft's sustainability arm, helps companies, organizations and governments measure, reduce, offset and digitally report their carbon footprint — beyond tree planting.",
  openGraph: {
    title: "Sparkgreen by Sparkcraft",
    description: "Your carbon footprint, measured, reduced and reported — creatively.",
    url: "https://sparkcraftconsulting.com/sparkgreen",
    siteName: "Sparkcraft Consulting",
    locale: "en_US",
    type: "website",
  },
};

export default function SparkgreenPage() {
  return <SparkgreenContent />;
}
