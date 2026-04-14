import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sparkcraft Consulting | Africa Market Intelligence & Advisory",
  description:
    "Leading advisory firm providing business intelligence, market entry strategy, and regulatory navigation across 30+ African markets. Headquartered in Dar es Salaam, Tanzania.",
  keywords: [
    "Africa market entry",
    "Tanzania advisory",
    "market intelligence Africa",
    "mining compliance Africa",
    "government relations Tanzania",
  ],
  openGraph: {
    title: "Sparkcraft Consulting",
    description: "Africa's Markets, Decoded for You.",
    url: "https://sparkcraftconsulting.com",
    siteName: "Sparkcraft Consulting",
    locale: "en_US",
    type: "website",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}