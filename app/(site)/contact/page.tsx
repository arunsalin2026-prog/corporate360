import type { Metadata } from "next";
import ContactPageContent from "@/components/sections/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us — Let's Build Together",
  description:
    "Get in touch with Corporate 360 Hub. Tell us about your business goals — HR, marketing, or network expansion — and we'll respond within 24 hours.",
  keywords: [
    "contact Corporate 360 Hub",
    "business consulting Kerala contact",
    "hire HR firm Kerala",
    "marketing agency contact Kerala",
  ],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
