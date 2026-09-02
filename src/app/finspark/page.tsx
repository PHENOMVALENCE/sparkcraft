import type { Metadata } from "next";
import FinSparkContent from "@/components/finspark/FinSparkContent";
import { SITE_URL, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "FinSpark | Last-Mile Financial Infrastructure",
  description:
    "FinSpark builds credit, insurance, transaction and distribution infrastructure that helps regulated partners serve farmers, traders and cooperatives across the last mile.",
  path: "/finspark",
  ogTitle: "FinSpark | The last mile isn't unbankable. It's unreadable.",
  ogDescription:
    "A Sparkcraft Technologies company building the credit, insurance and distribution infrastructure that turns farmers, traders and cooperatives from a data gap into a portfolio.",
});

/**
 * Only facts evidenced on the page itself are expressed in structured data —
 * no ratings, customer counts, launch dates, licences or coverage claims.
 */
const finsparkSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/finspark`,
  url: `${SITE_URL}/finspark`,
  name: "FinSpark | Last-Mile Financial Infrastructure",
  description:
    "FinSpark builds credit, insurance, transaction and distribution infrastructure that helps regulated partners serve farmers, traders and cooperatives across the last mile.",
  isPartOf: { "@id": `${SITE_URL}/#organization` },
  about: {
    "@type": "Brand",
    name: "FinSpark",
    url: `${SITE_URL}/finspark`,
    slogan: "Deliver the service. Strengthen the signal.",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  },
};

export default function FinSparkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finsparkSchema) }}
      />
      <FinSparkContent />
    </>
  );
}
