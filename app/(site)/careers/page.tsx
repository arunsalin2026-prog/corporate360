import type { Metadata } from "next";
import CareersPageContent from "@/components/sections/CareersPageContent";
import { getCareersPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Careers — Join the 360° Team",
  description:
    "Join the Corporate 360 Hub team. Open roles in recruitment, BTL activation, business development, and field operations across South India. Apply now.",
  keywords: [
    "jobs in South India",
    "recruitment executive jobs South India",
    "BTL coordinator jobs South India",
    "business development jobs South India",
    "field sales jobs South India",
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
