import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 text-center">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* 404 number */}
        <p
          className="font-montserrat font-bold text-gold leading-none select-none"
          style={{ fontSize: "clamp(7rem, 20vw, 14rem)" }}
          aria-hidden
        >
          404
        </p>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent my-6" />

        {/* Heading */}
        <h1 className="font-montserrat font-bold text-white text-2xl md:text-3xl mb-3">
          Page Not Found
        </h1>

        {/* Subtext */}
        <p className="font-inter text-white/50 text-base max-w-sm leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-navy font-montserrat font-bold text-sm rounded hover:bg-gold/90 hover:shadow-[0_0_24px_rgba(201,168,76,0.35)] transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-gold/50 text-gold font-montserrat font-bold text-sm rounded hover:bg-gold/[0.08] hover:border-gold/80 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Brand tag */}
        <p className="font-inter text-white/20 text-xs mt-14 tracking-widest uppercase">
          Corporate 360 Hub — The Business Architecture
        </p>
      </div>
    </div>
  );
}
