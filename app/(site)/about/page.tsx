import type { Metadata } from "next";
import AboutPageContent from "@/components/sections/AboutPageContent";
import { getAboutPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us — Kerala's Business Architecture Firm",
  description:
    "Meet the team behind Corporate 360 Hub. Our founding story, vision, mission, and why we built Kerala's only Single Point of Responsibility firm for business growth.",
  keywords: [
    "about Corporate 360 Hub",
    "business architecture firm Kerala",
    "business consulting team Kerala",
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
