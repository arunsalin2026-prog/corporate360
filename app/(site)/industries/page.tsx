import type { Metadata } from "next";
import IndustriesPageContent from "@/components/sections/IndustriesPageContent";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Corporate 360 Hub serves FMCG, FMCD, IT & Technology, Automotive, and Banking & NBFC industries. Specialist recruitment, marketing, and network expansion across South India.",
  keywords: [
    "FMCG consulting South India",
    "automotive manpower South India",
    "NBFC recruitment South India",
    "IT staffing South India",
    "FMCD marketing South India",
  ],
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
