import { SITE_NAME, SITE_URL } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Africa market intelligence and advisory firm providing business intelligence, market entry strategy, and regulatory navigation across African markets.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  areaServed: {
    "@type": "Place",
    name: "Africa",
  },
  email: "contact@sparkcraft.co.tz",
  telephone: "+255756948267",
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
