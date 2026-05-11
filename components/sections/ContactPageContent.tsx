"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Clock,
  CheckCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useId, cloneElement } from "react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { BRAND } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease, delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease, delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease, delay },
});

const SERVICE_OPTIONS = [
  "Talent Acquisition & HR Training",
  "Marketing & Branding (ATL · BTL · TTL)",
  "Market Research & Intelligence",
  "Product Launches & Dealer Meets",
  "Network Appointment & Expansion",
  "General Inquiry",
];

const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export default function ContactPageContent() {
  return (
    <div className="pt-20">
      <PageHero />
      <FormAndDetailsSection />
      <MapSection />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function PageHero() {
  return (
    <section className="bg-navy section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-max relative z-10">
        <motion.nav
          {...fadeUp(0)}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-white/40 font-inter text-xs uppercase tracking-[0.18em] mb-8"
        >
          <Link href="/" className="hover:text-gold transition-colors duration-150">
            Home
          </Link>
          <span aria-hidden>›</span>
          <span className="text-gold" aria-current="page">Contact</span>
        </motion.nav>
        <motion.span
          {...fadeUp(0.05)}
          className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em]"
        >
          Get in Touch
        </motion.span>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-montserrat font-bold text-white text-4xl md:text-5xl lg:text-6xl mt-3 mb-4 max-w-3xl leading-tight"
        >
          Let&apos;s Build Together
        </motion.h1>
        <motion.p
          {...fadeUp(0.16)}
          className="font-inter text-white/65 text-lg leading-relaxed max-w-xl"
        >
          Tell us about your business goals.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Form + Details ───────────────────────────────────────────────────────────
function FormAndDetailsSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message. Please try again.");
      setSubmitted(true);
      trackEvent("contact_form_submit", { service: data.service });
      reset();
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          {/* LEFT — Form */}
          <div>
            <motion.h2
              {...fadeLeft(0)}
              className="font-montserrat font-bold text-navy text-2xl mb-6"
            >
              Send Us a Message
            </motion.h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border border-slate/10 shadow-sm p-12 text-center"
              >
                <CheckCircle className="text-teal mx-auto mb-4" size={52} />
                <h3 className="font-montserrat font-bold text-navy text-2xl mb-2">
                  Message Received!
                </h3>
                <p className="font-inter text-slate">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                {...fadeLeft(0.06)}
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-2xl border border-slate/10 shadow-sm p-8 space-y-5"
              >
                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Full Name" required error={errors.name?.message}>
                    <input
                      {...register("name")}
                      placeholder="Your full name"
                      className={fc(!!errors.name)}
                    />
                  </FormField>
                  <FormField
                    label="Company Name"
                    required
                    error={errors.company?.message}
                  >
                    <input
                      {...register("company")}
                      placeholder="Your company"
                      className={fc(!!errors.company)}
                    />
                  </FormField>
                </div>

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Phone" required error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      placeholder="+91 XXXXX XXXXX"
                      className={fc(!!errors.phone)}
                    />
                  </FormField>
                  <FormField label="Email" required error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@company.com"
                      className={fc(!!errors.email)}
                    />
                  </FormField>
                </div>

                {/* Service */}
                <FormField
                  label="Service Interested In"
                  required
                  error={errors.service?.message}
                >
                  <select
                    {...register("service")}
                    className={fc(!!errors.service)}
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </FormField>

                {/* Message */}
                <FormField label="Message" required error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your business challenge or what you'd like to discuss…"
                    className={`${fc(!!errors.message)} resize-none`}
                  />
                </FormField>

                {serverError && (
                  <p className="font-inter text-sm text-red-500">{serverError}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gold text-navy font-inter font-bold text-sm rounded-lg hover:bg-gold/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 group shadow-md"
                >
                  {submitting ? "Sending…" : "Send Message"}
                  {!submitting && (
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  )}
                </button>
              </motion.form>
            )}
          </div>

          {/* RIGHT — Details */}
          <motion.div {...fadeRight(0.08)} className="space-y-5">
            <h2 className="font-montserrat font-bold text-navy text-2xl">
              Contact Details
            </h2>

            {/* Email */}
            <ContactDetail
              icon={Mail}
              label="Email"
              href={`mailto:${BRAND.company.email}`}
              text={BRAND.company.email}
            />

            {/* Phone */}
            {PHONE ? (
              <ContactDetail
                icon={Phone}
                label="Phone"
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                text={PHONE}
              />
            ) : (
              <ContactDetail
                icon={Phone}
                label="Phone"
                text="Coming soon"
                muted
              />
            )}

            {/* WhatsApp */}
            <WhatsAppDetail whatsapp={WHATSAPP} />

            {/* Location */}
            <ContactDetail
              icon={MapPin}
              label="Coverage"
              text="Kerala, India — All 14 Districts"
            />

            {/* LinkedIn */}
            <ContactDetail
              icon={Linkedin}
              label="LinkedIn"
              href={BRAND.company.social.linkedin}
              text="Follow us on LinkedIn"
              external
            />

            {/* Hours */}
            <div className="flex items-start gap-3 pt-1">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={16} className="text-teal" />
              </div>
              <div>
                <p className="font-inter font-medium text-navy text-sm">Hours</p>
                <p className="font-inter text-slate text-sm">
                  Available Mon–Sat, 9AM–6PM IST
                </p>
              </div>
            </div>

            {/* Response box */}
            <div className="mt-2 p-5 bg-navy rounded-xl">
              <p className="font-montserrat font-semibold text-gold text-sm mb-1.5">
                Response Time
              </p>
              <p className="font-inter text-white/65 text-sm leading-relaxed">
                We respond to all enquiries within 24 hours. For urgent matters,
                mention it in your message.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Map Section ──────────────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="bg-offwhite pb-16 md:pb-24">
      <div className="container-max">
        <motion.div {...fadeUp(0)} className="mb-6">
          <p className="font-inter text-slate/70 text-sm italic">
            Serving all 14 districts — no fixed office.
          </p>
        </motion.div>
        <motion.div
          {...fadeUp(0.06)}
          className="rounded-2xl overflow-hidden border border-slate/15 shadow-sm"
          style={{ height: 380 }}
        >
          <iframe
            title="Kerala, India map"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028000!2d76.27108!3d10.85051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812fda00df081%3A0x95a28a5cddbf3a3e!2sKerala%2C+India!5e0!3m2!1sen!2sin!4v1699900000000!5m2!1sen!2sin"
            style={{ border: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fc(hasError: boolean) {
  return `w-full font-inter text-sm text-navy rounded-lg border px-4 py-2.5 outline-none transition-colors focus:ring-2 focus:ring-teal/30 focus:border-teal bg-white placeholder:text-slate/40 ${
    hasError ? "border-red-400" : "border-slate/20"
  }`;
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const id = useId();
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="font-inter font-medium text-navy text-sm block">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {cloneElement(children as React.ReactElement, { id })}
      {error && <p className="font-inter text-xs text-red-500">{error}</p>}
    </div>
  );
}

function WhatsAppDetail({ whatsapp }: { whatsapp: string }) {
  const inner = (
    <div className="flex items-start gap-3 group">
      <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-teal transition-colors duration-150">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className="text-teal group-hover:text-white transition-colors duration-150"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>
      <div>
        <p className="font-inter font-medium text-navy text-sm">WhatsApp</p>
        <p className={`font-inter text-sm ${whatsapp ? "text-teal" : "text-slate/50"}`}>
          {whatsapp ? `+${whatsapp}` : "Coming soon"}
        </p>
      </div>
    </div>
  );
  return whatsapp ? (
    <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp: +${whatsapp}`}>
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  text,
  href,
  muted,
  external,
}: {
  icon: LucideIcon;
  label: string;
  text: string;
  href?: string;
  muted?: boolean;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-3 group">
      <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-teal transition-colors duration-150">
        <Icon
          size={16}
          className="text-teal group-hover:text-white transition-colors duration-150"
        />
      </div>
      <div>
        <p className="font-inter font-medium text-navy text-sm">{label}</p>
        <p
          className={`font-inter text-sm ${
            muted ? "text-slate/50" : href ? "text-teal" : "text-slate"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}
