import type { Metadata } from "next";
import AboutPageContent from "@/components/sections/AboutPageContent";
import { getAboutPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us — South India's Business Architecture Firm",
  description:
    "Meet the team behind Corporate 360 Hub. Our founding story, vision, mission, and why we built South India's 360° Business Architecture firm.",
  keywords: [
    "about Corporate 360 Hub",
    "business architecture firm South India",
    "business consulting team South India",
    "SPR firm India",
  ],
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const data = await getAboutPage();

  return (
    <AboutPageContent
      vision={data?.vision}
      mission={data?.mission}
      ourStory={data?.ourStory}
      founderName={data?.founderName}
      founderDesignation={data?.founderDesignation}
      founderPhoto={data?.founderPhoto}
      coreValues={data?.coreValues}
    />
  );
}
