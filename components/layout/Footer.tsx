import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Globe, Linkedin, Instagram, Facebook } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import type { SiteSettings } from "@/sanity/lib/queries";

function CompassWatermark() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="absolute right-0 bottom-0 w-[420px] h-[420px] pointer-events-none select-none opacity-[0.05]"
    >
      {/* Outer ring */}
      <circle cx="150" cy="150" r="140" stroke="white" strokeWidth="1.5" />
      {/* Middle ring */}
      <circle cx="150" cy="150" r="100" stroke="white" strokeWidth="1" />
      {/* Inner ring */}
      <circle cx="150" cy="150" r="20" stroke="white" strokeWidth="1.5" />
      {/* Center dot */}
      <circle cx="150" cy="150" r="4" fill="white" />
      {/* Cardinal lines */}
      <line x1="150" y1="10" x2="150" y2="290" stroke="white" strokeWidth="1" />
      <line x1="10" y1="150" x2="290" y2="150" stroke="white" strokeWidth="1" />
      {/* Diagonal lines (intercardinal) */}
      <line x1="51" y1="51" x2="249" y2="249" stroke="white" strokeWidth="0.5" />
      <line x1="249" y1="51" x2="51" y2="249" stroke="white" strokeWidth="0.5" />
      {/* North arrow (filled) */}
      <polygon points="150,10 143,60 150,50 157,60" fill="white" />
      {/* South arrow (outline) */}
      <polygon points="150,290 143,240 150,250 157,240" stroke="white" strokeWidth="1" fill="none" />
      {/* East arrow */}
      <polygon points="290,150 240,143 250,150 240,157" stroke="white" strokeWidth="1" fill="none" />
      {/* West arrow */}
      <polygon points="10,150 60,143 50,150 60,157" stroke="white" strokeWidth="1" fill="none" />
      {/* Tick marks */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        const isMajor = i % 9 === 0;
        const r1 = isMajor ? 132 : 136;
        const r2 = 140;
        const x1 = 150 + r1 * Math.sin(angle);
        const y1 = 150 - r1 * Math.cos(angle);
        const x2 = 150 + r2 * Math.sin(angle);
        const y2 = 150 - r2 * Math.cos(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="white"
            strokeWidth={isMajor ? 1.5 : 0.75}
          />
        );
      })}
    </svg>
  );
}

export default function Footer({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: siteSettings?.linkedinUrl ?? BRAND.company.social.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: siteSettings?.instagramUrl ?? BRAND.company.social.instagram, label: "Instagram" },
    { icon: Facebook, href: siteSettings?.facebookUrl ?? BRAND.company.social.facebook, label: "Facebook" },
  ];

  return (
    <footer className="relative bg-navy overflow-hidden">
      {/* Compass watermark */}
      <CompassWatermark />

      {/* Gold divider at top */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative container-max py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Column 1 — Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex -mb-4">
              <Image
                src="/images/logo-transparent.png"
                alt="Corporate 360 Hub — Business Architecture"
                width={200}
                height={120}
                className="h-36 w-auto object-contain"
              />
            </Link>

            <p className="text-white/50 font-inter text-sm leading-relaxed max-w-xs mt-4 mb-6">
              {BRAND.company.tagline}
            </p>

            <p className="text-white/35 font-inter text-sm leading-relaxed max-w-xs mb-8">
              Helping businesses across South India diagnose, design, deploy, and drive
              sustainable success — from idea to institution.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-11 h-11 rounded border border-white/15 flex items-center justify-center text-white/50 hover:border-gold/60 hover:text-gold transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-montserrat font-semibold text-white text-xs uppercase tracking-[0.15em] mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold font-inter text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="md:col-span-4">
            <h3 className="font-montserrat font-semibold text-white text-xs uppercase tracking-[0.15em] mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${BRAND.company.email}`}
                  className="flex items-start gap-3 group"
                >
                  <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/50 group-hover:text-white font-inter text-sm transition-colors duration-200 break-all">
                    {BRAND.company.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://${BRAND.company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Globe size={15} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/50 group-hover:text-white font-inter text-sm transition-colors duration-200">
                    {BRAND.company.website}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/50 font-inter text-sm">
                  {BRAND.company.location}
                </span>
              </li>
            </ul>

            <div className="mt-8 p-4 border border-gold/20 rounded-sm bg-gold/5">
              <p className="text-gold font-montserrat font-semibold text-xs uppercase tracking-wider mb-1">
                Free Discovery Call
              </p>
              <p className="text-white/50 font-inter text-xs leading-relaxed">
                30 minutes. No obligation. Let&apos;s talk about your business.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-3 text-gold font-inter font-semibold text-xs hover:underline underline-offset-2"
              >
                Book Now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 font-inter text-xs">
            &copy; {currentYear} Corporate 360 Hub. All Rights Reserved.
          </p>
          <p className="text-gold/70 font-montserrat font-semibold text-xs tracking-wider uppercase">
            The Business Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
