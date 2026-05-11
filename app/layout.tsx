import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SITE_METADATA, BRAND } from "@/lib/constants";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://corporate360hub.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Corporate 360 Hub",
  description: "Kerala's 360° Business Architecture Partner",
  url: "https://corporate360hub.com",
  email: "contact@corporate360hub.com",
  areaServed: "Kerala, India",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: ["https://linkedin.com/company/corporate360hub"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: SITE_METADATA.titleTemplate,
    default: SITE_METADATA.defaultTitle,
  },
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  authors: [{ name: BRAND.company.name, url: `https://${BRAND.company.website}` }],
  creator: BRAND.company.name,
  publisher: BRAND.company.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Corporate 360 Hub | Kerala's 360° Business Architecture Partner",
    description:
      "Kerala's only Single Point of Responsibility firm for HR, Marketing & Network Expansion. Serving all 14 districts. FMCG, FMCD, IT, Auto, Banking.",
    url: siteUrl,
    siteName: BRAND.company.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: `${BRAND.company.name} — ${BRAND.company.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate 360 Hub | Kerala's 360° Business Architecture Partner",
    description:
      "Kerala's only Single Point of Responsibility firm for HR, Marketing & Network Expansion. Serving all 14 districts.",
    images: [SITE_METADATA.ogImage],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Font preconnect hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-offwhite text-slate antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
