import type { Metadata } from "next";
import { Inter } from "next/font/google";
import VentureChrome from "@/components/VentureChrome";

import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Technology. Payments. Business Infrastructure.`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "SparkCraft Technologies delivers ICT solutions, fintech integration, and enterprise procurement services in Tanzania.",
  keywords: [
    "ICT solutions Tanzania",
    "Tanzania technology company",
    "fintech integration Tanzania",
    "last-mile financial infrastructure",
    "FinSpark",
    "Sparkgreen",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-spark-bg font-sans text-spark-text antialiased`}>
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <VentureChrome />
        {children}

      </body>
    </html>
  );
}
