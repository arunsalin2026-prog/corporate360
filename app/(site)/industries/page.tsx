import type { Metadata } from "next";
import IndustriesPageContent from "@/components/sections/IndustriesPageContent";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Corporate 360 Hub serves FMCG, FMCD, IT & Technology, Automotive, and Banking & NBFC industries. Specialist recruitment, marketing, and network expansion across all 14 districts of Kerala.",
  keywords: [
    "FMCG consulting Kerala",
    "automotive manpower Kerala",
    "NBFC recruitment Kerala",
    "IT staffing Kerala",
    "FMCD marketing Kerala",
  ],
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
