import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";
import { getHomepage } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: {
    absolute: "Corporate 360 Hub | Kerala's 360° Business Architecture Partner",
  },
  description:
    "Kerala's only Single Point of Responsibility firm for HR, Marketing & Network Expansion. Serving all 14 districts. FMCG, FMCD, IT, Auto, Banking.",
  keywords: [
    "HR firm Kerala",
    "manpower recruitment Kerala",
    "BTL marketing agency Kerala",
    "business development Kerala",
    "360 business solutions India",
    "Single Point of Responsibility",
    "business architecture Kerala",
  ],
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const data = await getHomepage();

  return (
    <>
      <HeroSection
        headline={data?.heroHeadline}
        subheadline={data?.heroSubheadline}
        ctaText={data?.heroCtaText}
        badges={[data?.statBadge1, data?.statBadge2, data?.statBadge3].filter(Boolean) as string[]}
      />
      <IntroSection introParagraph={data?.introParagraph} />
      <ServicesOverviewSection />
      <IndustriesSection />
      <WhyUsSection
        headline={data?.whyUsHeadline}
        subtext={data?.whyUsSubtext}
      />
      <CTASection />
    </>
  );
}
