import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import { getSiteSettings } from "@/sanity/lib/queries";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-navy focus:font-montserrat focus:font-bold focus:text-sm focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>
      {settings?.announcementBanner && (
        <div className="bg-gold text-navy text-center font-inter font-semibold text-xs py-2 px-4 tracking-wide">
          {settings.announcementBanner}
        </div>
      )}
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer siteSettings={settings} />
      <WhatsAppButton whatsappNumber={settings?.whatsappNumber} />
      <ExitIntentPopup />
    </>
  );
}
