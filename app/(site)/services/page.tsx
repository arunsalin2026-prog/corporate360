import type { Metadata } from "next";
import ServicesPageContent from "@/components/sections/ServicesPageContent";
import { getServicesPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Our Services — 5 Business Pillars",
  description:
    "Corporate 360 Hub's 5 integrated service pillars: Talent Acquisition & HR Training, Marketing & Branding (ATL·BTL·TTL), Market Research, Product Launches & Dealer Meets, and Network Expansion — all 14 districts of Kerala.",
  keywords: [
    "HR training Kerala",
    "BTL activation Kerala",
    "market research Kerala",
    "dealer network expansion Kerala",
    "product launch management Kerala",
    "manpower outsourcing Kerala",
  ],
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const data = await getServicesPage();

  return (
    <ServicesPageContent
      pageIntro={data?.pageIntro}
      services={data?.services}
    />
  );
}
