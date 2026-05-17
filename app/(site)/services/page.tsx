import type { Metadata } from "next";
import ServicesPageContent from "@/components/sections/ServicesPageContent";
import { getServicesPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Our Services — 5 Business Pillars",
  description:
    "Corporate 360 Hub's 5 integrated service pillars: Talent Acquisition & HR Training, Marketing & Branding (ATL·BTL·TTL), Market Research, Product Launches & Dealer Meets, and Network Expansion — across South India.",
  keywords: [
    "HR training South India",
    "BTL activation South India",
    "market research South India",
    "dealer network expansion South India",
    "product launch management South India",
    "manpower outsourcing South India",
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
