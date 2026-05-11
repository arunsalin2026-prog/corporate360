import type { Metadata } from "next";
import CareersPageContent from "@/components/sections/CareersPageContent";
import { getCareersPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Careers — Join the 360° Team",
  description:
    "Join the Corporate 360 Hub team. Open roles in recruitment, BTL activation, business development, and field operations across all 14 districts of Kerala. Apply now.",
  keywords: [
    "jobs in Kerala",
    "recruitment executive jobs Kerala",
    "BTL coordinator jobs Kerala",
    "business development jobs Kerala",
    "field sales jobs Kerala",
  ],
  alternates: { canonical: "/careers" },
};

export default async function CareersPage() {
  const data = await getCareersPage();

  const activeRoles = data?.openRoles?.filter((r) => r.isActive !== false) ?? null;

  return (
    <CareersPageContent
      pageHeadline={data?.pageHeadline}
      pageSubheadline={data?.pageSubheadline}
      openRoles={activeRoles}
    />
  );
}
