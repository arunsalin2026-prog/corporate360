"use client";

import { useRef, useState, useId, cloneElement } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  CheckCircle2,
  Upload,
  CheckCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careerFormSchema, type CareerFormValues } from "@/lib/validations";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease, delay },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const OPEN_ROLES = [
  {
    title: "Recruitment Executive",
    type: "Full Time",
    location: "All 14 Districts",
    description:
      "Source, screen, and place candidates for FMCG, automotive, and NBFC clients. Strong networking and communication skills required.",
  },
  {
    title: "BTL Activation Coordinator",
    type: "Full Time",
    location: "All 14 Districts",
    description:
      "Plan and execute below-the-line campaigns, in-store activations, and sampling drives for leading consumer brands.",
  },
  {
    title: "Business Development Manager",
    type: "Full Time",
    location: "Kerala",
    description:
      "Drive new client acquisition, manage key accounts, and represent Corporate 360 Hub across target industries.",
  },
  {
    title: "Field Promoters",
    type: "Contract",
    location: "All 14 Districts",
    description:
      "Represent brands at retail touchpoints, events, and activations. Flexible schedules, competitive daily rates.",
  },
];

const BENEFITS = [
  {
    title: "Competitive Pay & Incentives",
    desc: "Market-leading salaries with performance-linked incentives tied to client outcomes.",
  },
  {
    title: "Sales Bootcamp from Day One",
    desc: "Structured onboarding with product knowledge, sales skills, and field training before your first deployment.",
  },
  {
    title: "Fast-Track Growth",
    desc: "Direct client exposure from week one. Your growth is limited only by your performance.",
  },
  {
    title: "Cross-Industry Exposure",
    desc: "Work with FMCG, FMCD, IT, Automotive, and Banking clients — building a versatile career across sectors.",
  },
];

const ROLE_OPTIONS = [
  "Recruitment Executive",
  "BTL Activation Coordinator",
  "Business Development Manager",
  "Field Promoters",
  "Other / General Application",
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

interface SanityOpenRole {
  roleName?: string;
  roleType?: string;
  location?: string;
  description?: string;
  isActive?: boolean;
}

interface CareersPageContentProps {
  pageHeadline?: string;
  pageSubheadline?: string;
  openRoles?: SanityOpenRole[] | null;
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function CareersPageContent({
  pageHeadline,
  pageSubheadline,
  openRoles,
}: CareersPageContentProps) {
  return (
    <div className="pt-20">
      <PageHero headline={pageHeadline} subheadline={pageSubheadline} />
      <OpenRolesSection openRoles={openRoles} />
      <WhyJoinSection />
      <ApplicationSection />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function PageHero({ headline, subheadline }: { headline?: string; subheadline?: string }) {
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
          <span className="text-gold" aria-current="page">Careers</span>
        </motion.nav>
        <motion.span
          {...fadeUp(0.05)}
          className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em]"
        >
          We&apos;re Hiring
        </motion.span>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-montserrat font-bold text-white text-4xl md:text-5xl lg:text-6xl mt-3 mb-6 max-w-3xl leading-tight"
        >
          {headline ?? "Join the 360° Team"}
        </motion.h1>
        <motion.p
          {...fadeUp(0.16)}
          className="font-inter text-white/65 text-lg leading-relaxed max-w-xl"
        >
          {subheadline ?? "Build businesses. Grow careers. Work across Kerala."}
        </motion.p>
      </div>
    </section>
  );
}

// ─── Open Roles ───────────────────────────────────────────────────────────────
function OpenRolesSection({ openRoles }: { openRoles?: SanityOpenRole[] | null }) {
  const displayRoles =
    openRoles != null
      ? openRoles.map((r) => ({
          title: r.roleName ?? "",
          type: r.roleType ?? "Full Time",
          location: r.location ?? "Kerala",
          description: r.description ?? "",
        }))
      : OPEN_ROLES.map((r) => ({
          title: r.title,
          type: r.type,
          location: r.location,
          description: r.description,
        }));

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <span className="font-inter font-semibold text-teal text-xs uppercase tracking-[0.22em]">
            Open Positions
          </span>
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mt-3">
            Current Openings
          </h2>
        </motion.div>

        {displayRoles.length === 0 ? (
          <motion.div {...fadeUp(0.08)} className="text-center py-16">
            <p className="font-montserrat font-semibold text-navy text-xl mb-2">
              No open positions right now
            </p>
            <p className="font-inter text-slate text-sm">
              We&apos;re always looking for great people. Send your CV via the form below.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {displayRoles.map((role, i) => (
              <motion.div
                key={role.title || i}
                {...fadeUp(0.08 + i * 0.07)}
                className="bg-white rounded-xl border border-slate/10 shadow-sm p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-montserrat font-bold text-navy text-lg">
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="inline-flex items-center gap-1 font-inter text-xs text-teal font-medium">
                        <Briefcase size={12} />
                        {role.type}
                      </span>
                      <span className="inline-flex items-center gap-1 font-inter text-xs text-slate/70">
                        <MapPin size={12} />
                        {role.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="font-inter text-slate text-sm leading-relaxed">
                  {role.description}
                </p>
                <a
                  href="#apply"
                  className="self-start inline-flex items-center gap-1.5 font-inter font-semibold text-sm text-teal hover:text-teal/80 transition-colors group"
                >
                  Apply Now
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Why Join ─────────────────────────────────────────────────────────────────
function WhyJoinSection() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-max">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <span className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em]">
            Why Us
          </span>
          <h2 className="font-montserrat font-bold text-white text-3xl md:text-4xl mt-3">
            Why Join Corporate 360 Hub
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              {...fadeUp(0.08 + i * 0.07)}
              className="flex items-start gap-4 bg-white/[0.05] border border-white/10 rounded-xl p-6"
            >
              <CheckCircle2
                size={20}
                className="text-teal mt-0.5 flex-shrink-0"
              />
              <div>
                <h3 className="font-montserrat font-semibold text-white text-base mb-1.5">
                  {benefit.title}
                </h3>
                <p className="font-inter text-white/65 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Application Section ──────────────────────────────────────────────────────
function ApplicationSection() {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareerFormValues>({
    resolver: zodResolver(careerFormSchema),
  });

  const ALLOWED = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setCvError(null);
    if (!file) return setCvFile(null);
    if (file.size > 5 * 1024 * 1024) {
      setCvError("CV must be under 5MB");
      return setCvFile(null);
    }
    if (!ALLOWED.includes(file.type)) {
      setCvError("CV must be a PDF or Word document");
      return setCvFile(null);
    }
    setCvFile(file);
  };

  const onSubmit = async (data: CareerFormValues) => {
    if (!cvFile) {
      setCvError("Please upload your CV");
      return;
    }
    setSubmitting(true);
    setServerError(null);
    try {
      const fd = new FormData();
      fd.append("name", data.name);
      fd.append("phone", data.phone);
      fd.append("email", data.email);
      fd.append("role", data.role);
      fd.append("message", data.message ?? "");
      fd.append("cv", cvFile);

      const res = await fetch("/api/careers", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Submission failed. Please try again.");
      setSubmitted(true);
      reset();
      setCvFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const waText = encodeURIComponent(
    `Hi, I'd like to apply for a role at Corporate 360 Hub. My name is [Your Name] and I'm interested in [Role].`
  );
  const waHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`
    : "#";

  return (
    <section id="apply" className="section-padding bg-offwhite scroll-mt-24">
      <div className="container-max max-w-2xl">
        <motion.div {...fadeUp(0)} className="text-center mb-10">
          <span className="font-inter font-semibold text-teal text-xs uppercase tracking-[0.22em]">
            Apply Now
          </span>
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mt-3 mb-3">
            Send Your Application
          </h2>
          <p className="font-inter text-slate">
            Every application is reviewed personally. We aim to respond within 2
            business days.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl border border-slate/10 shadow-sm p-12 text-center"
          >
            <CheckCircle className="text-teal mx-auto mb-4" size={52} />
            <h3 className="font-montserrat font-bold text-navy text-2xl mb-2">
              Application Received!
            </h3>
            <p className="font-inter text-slate">
              We&apos;ll contact you within 2 business days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            {...fadeUp(0.08)}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl border border-slate/10 shadow-sm p-8 space-y-5"
          >
            {/* Name */}
            <FormField label="Full Name" required error={errors.name?.message}>
              <input
                {...register("name")}
                placeholder="Your full name"
                className={fieldClass(!!errors.name)}
              />
            </FormField>

            {/* Phone + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField label="Phone" required error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  placeholder="10-digit number"
                  className={fieldClass(!!errors.phone)}
                />
              </FormField>
              <FormField label="Email" required error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  className={fieldClass(!!errors.email)}
                />
              </FormField>
            </div>

            {/* Role */}
            <FormField
              label="Role Interested In"
              required
              error={errors.role?.message}
            >
              <select
                {...register("role")}
                className={fieldClass(!!errors.role)}
              >
                <option value="">Select a role</option>
                {ROLE_OPTIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </FormField>

            {/* CV Upload */}
            <div className="space-y-1.5">
              <label htmlFor="cv-upload" className="font-inter font-medium text-navy text-sm block">
                Upload CV <span className="text-gold">*</span>
              </label>
              <div
                className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
                  cvError
                    ? "border-red-400 bg-red-50"
                    : cvFile
                    ? "border-teal/40 bg-teal/5"
                    : "border-slate/20 hover:border-teal/40"
                }`}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload
                  size={16}
                  className={cvFile ? "text-teal" : "text-slate/60"}
                />
                <span
                  className={`font-inter text-sm flex-1 truncate ${
                    cvFile ? "text-navy" : "text-slate/60"
                  }`}
                >
                  {cvFile ? cvFile.name : "Click to upload PDF or Word doc"}
                </span>
                <span className="font-inter text-xs text-slate/50 flex-shrink-0">
                  max 5MB
                </span>
                <input
                  id="cv-upload"
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </div>
              {cvError && (
                <p className="font-inter text-xs text-red-500">{cvError}</p>
              )}
            </div>

            {/* Message */}
            <FormField label="Message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="Anything you'd like us to know? (optional)"
                className={`${fieldClass(false)} resize-none`}
              />
            </FormField>

            {serverError && (
              <p className="font-inter text-sm text-red-500">{serverError}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white font-inter font-semibold text-sm rounded-lg hover:bg-navy/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
            >
              {submitting ? "Sending Application…" : "Submit Application"}
            </button>
          </motion.form>
        )}

        {/* WhatsApp Apply */}
        <motion.div {...fadeUp(0.2)} className="mt-6 text-center">
          <p className="font-inter text-slate/60 text-sm mb-3">
            Prefer a quicker route?
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-gold text-navy font-inter font-semibold text-sm rounded-lg hover:bg-gold/90 transition-all duration-200"
          >
            {/* WhatsApp icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Apply via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fieldClass(hasError: boolean) {
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
        {label}{" "}
        {required && <span className="text-gold">*</span>}
      </label>
      {cloneElement(children as React.ReactElement, { id })}
      {error && (
        <p className="font-inter text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
