import type { Metadata } from "next";
import BusinessModelContent from "@/components/sections/BusinessModelContent";

export const metadata: Metadata = {
  title: "Business Model — 90-Day Growth Framework",
  description:
    "The Growth Catalyst Framework — Corporate 360 Hub's structured 90-day model. Three integrated verticals: People & HR, Marketing & Brand, and Network & Distribution. One partner, total accountability.",
  keywords: [
    "90 day business growth plan",
    "business growth framework Kerala",
    "B2B consulting model India",
    "business activation framework",
  ],
  alternates: { canonical: "/business-model" },
};

export default function BusinessModelPage() {
  return <BusinessModelContent />;
}
