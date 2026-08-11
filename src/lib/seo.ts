import type { Metadata } from "next";

export const SITE_URL = "https://sparkcraft.co.tz";
export const SITE_NAME = "Sparkcraft Consulting";

function normalizePath(path: string) {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function pageUrl(path: string) {
  const normalized = normalizePath(path);
  return normalized ? `${SITE_URL}${normalized}` : SITE_URL;
}

function ogImageUrl(path: string) {
  const normalized = normalizePath(path);
  return normalized ? `${SITE_URL}${normalized}/opengraph-image` : `${SITE_URL}/opengraph-image`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  ogTitle,
  ogDescription,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = pageUrl(path);
  const image = ogImageUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Africa market intelligence and advisory`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [image],
    },
  };
}
