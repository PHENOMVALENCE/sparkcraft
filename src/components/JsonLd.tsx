import { SITE_NAME, SITE_URL } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "SparkCraft Technologies delivers ICT solutions, fintech integration, and enterprise procurement services in Tanzania.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  areaServed: {
    "@type": "Place",
    name: "Tanzania",
  },
  email: "contact@sparkcraft.co.tz",
  telephone: "+255756948267",
  brand: [
    {
      "@type": "Brand",
      name: "FinSpark",
      url: `${SITE_URL}/finspark`,
      description:
        "Last-mile financial infrastructure — credit, insurance, transaction and distribution technology that helps regulated partners serve farmers, traders and cooperatives.",
    },
    {
      "@type": "Brand",
      name: "Sparkgreen",
      url: `${SITE_URL}/sparkgreen`,
      description:
        "Sustainability and climate solutions — measuring, reducing, offsetting and digitally reporting carbon footprints in Tanzania.",
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
