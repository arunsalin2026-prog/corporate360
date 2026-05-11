# TASKS.md — Corporate 360 Hub Website
# Task board. Read and update at START and END of every Claude Code session.
# Status: ⬜ Todo | 🔄 In Progress | ✅ Done | ❌ Blocked

---

## 🚦 CURRENT STATUS

**Phase:** 🎉 LIVE — https://www.corporate360hub.com
**Last Session:** Session 14 — Full deployment complete, custom domain connected, SSL active
**Next Action:** Add env vars in Vercel → seed Sanity → Google Search Console → client handover

---

## ✅ DONE

### PHASE 1 — Foundation
- [x] P1: Scaffold Next.js 14 project (TypeScript, Tailwind, shadcn-style UI)
- [x] P1: Install all core dependencies (Framer Motion, React Hook Form, Zod, Resend, Vercel Analytics)
- [x] P1: Set up brand constants in /lib/constants.ts (colors, nav, services, industries, stats, social links)
- [x] P1: Configure Tailwind with brand color tokens (navy, teal, gold, offwhite, slate, lightTeal, lightGold)
- [x] P1: Create .env.local.example with all required keys
- [x] P1: Confirm dev server runs at localhost:3000 — HTTP 200 ✓
- [x] P1: Upgrade Next.js to 14.2.35 (security patch)

### PHASE 2 — Global Layout
- [x] P2: Navbar — sticky transparent→navy+blur on scroll, gold logo + teal tagline, gold hover underline animation, full-screen overlay mobile menu with Framer Motion, "Let's Talk" CTA
- [x] P2: Footer — 3-col (brand+social / nav links / contact+CTA card), gold gradient divider, compass SVG watermark at 5% opacity, bottom bar with © + "The Business Architecture" in gold
- [x] P2: WhatsApp floating button — pulse ring animation, custom WhatsApp SVG icon, animated tooltip, env-based phone number (NEXT_PUBLIC_WHATSAPP_NUMBER), pre-filled message
- [x] P2: Root layout.tsx — title template ("%s | Corporate 360 Hub"), canonical URL, full OG/Twitter metadata, font weight variants, suppressHydrationWarning

---

## 🔄 IN PROGRESS


---

## ⬜ TODO

### PHASE 1 — Foundation
- [ ] P1: Scaffold Next.js 14 project (TypeScript, Tailwind, shadcn)
- [ ] P1: Install all core dependencies (Framer Motion, React Hook Form, Zod, Resend)
- [ ] P1: Set up brand constants in /lib/constants.ts
- [ ] P1: Configure Tailwind with brand color tokens
- [ ] P1: Create .env.local and .env.example
- [ ] P1: Confirm dev server runs at localhost:3000

### PHASE 2 — Global Layout
- [x] P2: Navbar (sticky, transparent→navy, mobile hamburger, gold CTA)
- [x] P2: Footer (3-column, gold divider, compass watermark)
- [x] P2: WhatsApp floating button (pulse animation, pre-filled message)
- [x] P2: Root layout.tsx (fonts, metadata, global components)

### PHASE 3 — Pages
- [x] P3: Home page — Hero section (animated compass watermark, stagger entrance, 3 stat badges, dual CTAs)
- [x] P3: Home page — Intro section (teal-bordered SPR paragraph, 3 pillar cards)
- [x] P3: Home page — Services overview (5 cards, 3+2 grid, teal accent bar, hover glow)
- [x] P3: Home page — Industries strip (horizontal scroll mobile, 5-col desktop)
- [x] P3: Home page — Why Choose Us / SPR section (4 cards + SPR highlight box)
- [x] P3: Home page — CTA banner (gold bg, diagonal texture, navy button)
- [x] P4: About page — Vision & Mission cards (navy + #0A5F5F dark teal, gold top bars)
- [x] P4: About page — Our Story section (teal-bordered narrative, founder photo placeholder)
- [x] P4: About page — Core Values (5 cards in 3+2 grid, navy cards, teal icons)
- [x] P4: About page — 14 Districts coverage (animated teal pills, stat strip)
- [x] P4: About page — Team section (founder placeholder card, CTA → /careers)
- [x] P5: Services page — All 5 pillars with full detail
- [x] P5: Services page — SPR summary CTA
- [x] P6: Business Model page — 3 Verticals
- [x] P6: Business Model page — 90-Day Timeline (animated)
- [x] P6: Business Model page — Revenue Streams
- [x] P6: Business Model page — SPR pitch section
- [x] P7: Industries page — All 5 industries
- [x] P7: Careers page — Roles listing
- [x] P7: Careers page — Application form (RHF + Zod)
- [x] P7: Careers page — WhatsApp Apply button
- [x] P7: Contact page — Contact form (RHF + Zod)
- [x] P7: Contact page — Contact details + map embed
- [x] P9: 404 not-found page

### PHASE 4 — Backend
- [x] P8: API route — /api/contact (Resend email)
- [x] P8: API route — /api/careers (Resend with CV attachment)
- [x] P8: Zod validation schemas in /lib/validations.ts
- [x] P8: Rate limiting on contact form

### PHASE 5 — Sanity CMS (Admin Panel)
- [x] P9A: Install next-sanity and @sanity/client (installed next-sanity@9, sanity@3.99, @sanity/image-url, @sanity/client@7, styled-components@6, @sanity/cli dev)
- [x] P9A: Run sanity init — project "Corporate 360 Hub" created (project ID: k33l6ras, dataset: production)
- [x] P9A: Schema: homepage.ts
- [x] P9A: Schema: aboutPage.ts
- [x] P9A: Schema: servicesPage.ts
- [x] P9A: Schema: careersPage.ts
- [x] P9A: Schema: siteSettings.ts (singleton)
- [x] P9A: /sanity/lib/client.ts — Sanity client + urlFor() image helper
- [x] P9A: /sanity/lib/queries.ts — all GROQ queries with TS types + safeFetch error handling
- [x] P9A: /sanity.config.ts — Studio config with structured sidebar (singleton layout)
- [x] P9A: /app/studio/[[...tool]]/page.tsx — embedded Studio at /studio
- [x] P9A: next.config.mjs — added cdn.sanity.io to remotePatterns
- [x] P9A: Sanity env vars already in .env.local and .env.example from Session 8
- [x] P9B: Connect homepage to Sanity data (ISR revalidate: 60)
- [x] P9B: Connect about page to Sanity data (PortableText + next/image for founder photo)
- [x] P9B: Connect services page to Sanity data (merges onto hardcoded PILLARS by index)
- [x] P9B: Connect careers page (dynamic roles from Sanity, empty-state, falls back to hardcoded)
- [x] P9B: Connect layout to siteSettings (announcement banner, Footer social links, WhatsApp number)
- [x] P9B: @portabletext/react installed and wired in AboutPageContent (ourStory field)
- [ ] P9B: Seed initial content in Sanity Studio ← NEXT: set real SANITY_API_READ_TOKEN first
- [x] P9B: Revalidation webhook — /api/revalidate route created
- [ ] P9B: Deploy Sanity Studio (npx sanity deploy) ← do after seeding content
- [ ] P9B: Add client as Editor in Sanity Members (sanity.io → project → members)
- [x] P9C: Create /docs/CLIENT-EDITOR-GUIDE.md ✓

### PHASE 6 — SEO & Performance
- [x] P9: generateMetadata() for every page — all 7 pages updated with title, description, keywords, canonical
- [x] P9: OpenGraph tags in root layout — og:title, og:description, og:type, og:url, og:image, og:locale
- [x] P9: JSON-LD LocalBusiness schema — injected via script tag in root layout body
- [x] P9: /sitemap.ts — XML sitemap (all 7 pages with priority + changeFrequency)
- [x] P9: /robots.ts — disallow /api/ and /studio/, sitemap pointer
- [x] P9: next/image for all images — confirmed: no raw img tags anywhere; all images already use next/image
- [x] P9: Security headers in next.config.mjs — X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy, HSTS; poweredByHeader: false
- [x] P9: Home page title uses { absolute: ... } to bypass template (avoids double brand suffix)
- [x] P9: 404 page — app/not-found.tsx (navy bg, gold 404, Go Home + Contact Us CTAs)
- [x] P9: Font preconnect hints added to root layout head

### PHASE 7 — QA
- [x] P10: Responsive check — 320px, 375px, 768px, 1024px, 1280px
- [x] P10: Accessibility audit — skip-to-content, breadcrumb aria-labels, form label/id association, hamburger aria-expanded+controls, tap targets ≥44px
- [ ] P10: Forms end-to-end test (submit → email received) ← needs RESEND_API_KEY
- [x] P10: All nav links verified
- [x] P10: npm run build — zero errors ✓ (15 static pages)
- [x] P10: 404 not-found.tsx ✓

### PHASE 8 — Deployment
- [x] P11: Git repo created and pushed (github.com/arunsalin2026-prog/corporate360)
- [x] P11: Vercel project created (coporate360 under arun-s-projects2)
- [ ] P11: All env vars added to Vercel ← do in Vercel dashboard → Environment Variables → Redeploy
- [x] P11: First production deploy — LIVE ✓ (35cdyHfL7 — Ready)
- [x] P11: Custom domain corporate360hub.com connected
- [x] P11: DNS records added at GoDaddy (A @ → 216.198.79.1, CNAME www → vercel-dns-017)
- [x] P11: SSL certificate provisioned (Let's Encrypt — auto)
- [x] P11: All 7 pages live on www.corporate360hub.com
- [x] P11: www redirect working (corporate360hub.com 307 → www)

### PHASE 9 — Post-Launch
- [x] P12: Google Analytics 4 connected (@next/third-parties GoogleAnalytics component)
- [x] P12: GA4 custom events — contact_form_submit, career_application_submit, whatsapp_click, cta_click, exit_intent_shown, exit_intent_submit
- [x] P12: Vercel Analytics + Speed Insights enabled
- [ ] P12: All env vars added to Vercel ← RESEND_API_KEY, NEXT_PUBLIC_WHATSAPP_NUMBER, NEXT_PUBLIC_PHONE_NUMBER, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_SANITY_PROJECT_ID (k33l6ras), NEXT_PUBLIC_SANITY_DATASET (production), NEXT_PUBLIC_SANITY_API_VERSION (2024-01-01), SANITY_API_READ_TOKEN, SANITY_REVALIDATE_SECRET → then Redeploy
- [ ] P12: Google Search Console verified ← get TXT/meta code from Search Console → add as NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel → Redeploy
- [ ] P12: Sitemap submitted to Search Console ← submit https://www.corporate360hub.com/sitemap.xml after verification
- [x] P12: Exit intent popup — navy/gold modal, desktop mouseleave + mobile scroll-up, /api/exit-intent email capture
- [ ] P12: Seed Sanity content ← npx sanity deploy → open www.corporate360hub.com/studio → fill all 5 documents
- [ ] P12: Enable auto-renew on GoDaddy for corporate360hub.com
- [ ] P12: Client handover ← share Sanity Studio URL + /docs/CLIENT-EDITOR-GUIDE.md + support contact (vishnuharidev1@gmail.com)

---

## ❌ BLOCKED

<!-- List anything that needs client input before it can proceed -->
- [ ] Phone number — needed for Navbar, Footer, WhatsApp button, Contact page
- [ ] WhatsApp number — needed for WhatsApp button
- [ ] Instagram handle — needed for Footer social links
- [ ] Facebook page URL — needed for Footer social links
- [ ] Founder photo — needed for About page (placeholder used for now)
- [ ] Google Analytics property ID — needed for P12

---

## 📋 SESSION LOG

### Session 14 — Analytics, Exit Intent Popup, Post-Launch Features
**Date:** 2026-05-12
**Completed:**
- lib/analytics.ts: trackEvent() GA4 helper with window.gtag type safety
- app/layout.tsx: GoogleAnalytics (@next/third-parties), SpeedInsights (@vercel/speed-insights), Google Search Console verification meta field (NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION)
- components/ui/ExitIntentPopup.tsx: navy/gold modal, desktop mouseleave + mobile scroll-up (≥80px), sessionStorage guard, /api/exit-intent email capture with confirmation email
- app/api/exit-intent/route.ts: standalone email-only lead capture endpoint
- Custom GA4 events wired: contact_form_submit (ContactPageContent), career_application_submit (CareersPageContent), whatsapp_click (WhatsAppButton), cta_click (CTASection)
- ExitIntentPopup added to app/(site)/layout.tsx
- npm run build: 0 errors ✓ | 16 routes (added /api/exit-intent)
**Next:** Add env vars in Vercel dashboard → add custom domain → Google Search Console verify + sitemap submit → client handover

### Session 13 — Domain Update + Git Init + Deploy Prep
**Date:** 2026-05-11
**Completed:**
- Domain corrected from `corporate360hub.in` → `corporate360hub.com` across all files:
  `lib/constants.ts`, `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `.env.local`, `CLAUDE.md`
- `npm run build`: 0 errors ✓ (15 static pages) — confirmed after domain update
- `git init` + staged all source files (`.env.local` excluded by `.gitignore`)
- Initial commit created: `e5af92d`
- Installed `vercel` CLI (v53.3.2) and `gh` CLI (v2.8.9) globally via npm
**Pending (requires interactive terminal):**
- `gh auth login` → `gh repo create corporate360hub-website --private --source=. --remote=origin --push`
- `vercel login` → `vercel` (initial deploy) → add all 10 env vars → `vercel --prod`
- `vercel domains add corporate360hub.com` + DNS records at registrar
**Next:** Run auth + deploy steps above; seed Sanity content; `npx sanity deploy`

### Session 12 — Pre-Deployment QA Pass
**Date:** 2026-05-11
**Completed:**
- Skip-to-content link added to `app/(site)/layout.tsx` — sr-only, visible on focus with gold bg
- `<main id="main-content">` added so skip link target exists
- Navbar hamburger: `w-10 h-10` → `w-11 h-11` (44px tap target), `aria-expanded={isOpen}`, `aria-controls="mobile-menu"`
- Mobile overlay: `id="mobile-menu"` added for aria-controls association
- Footer social icons: `w-9 h-9` → `w-11 h-11` (36px → 44px tap targets)
- FormField in ContactPageContent + CareersPageContent: now uses `useId()` + `cloneElement` to inject matching `id`/`htmlFor` — all inputs now properly associated with labels
- CV upload in CareersPageContent: `htmlFor="cv-upload"` on label, `id="cv-upload"` on file input; changed `className="hidden"` → `className="sr-only"` so it's keyboard-accessible
- WhatsApp `<a>` in ContactPageContent: added `aria-label` with phone number
- Breadcrumb `motion.nav`: added `aria-label="Breadcrumb"` + `aria-current="page"` + `aria-hidden` on separator (`›`) across all 5 pages (Contact, Careers, Industries, Services, BusinessModel)
- `npm run build`: 0 errors, 0 TS errors, 15 static pages ✓
**Next:** Set real SANITY_API_READ_TOKEN in .env.local → seed content in Studio → npx sanity deploy → Vercel deploy

### Session 11 — SEO & Performance
**Date:** 2026-05-11
**Completed:**
- Metadata updated on all 7 pages: precise titles (with `{ absolute }` on home to bypass template), descriptions, keywords arrays
- Root layout: OG title/description updated; JSON-LD LocalBusiness schema injected via dangerouslySetInnerHTML script tag; preconnect hints for Google Fonts added to `<head>`
- app/sitemap.ts: all 7 pages with lastModified, changeFrequency, priority → /sitemap.xml ✓
- app/robots.ts: allow /, disallow /api/ and /studio/, sitemap URL → /robots.txt ✓
- app/not-found.tsx: standalone navy 404 page — large gold number, "Page Not Found", Go Home + Contact Us buttons; no Navbar overlay (outside (site) group)
- next.config.mjs: poweredByHeader: false; security headers on all routes (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy, HSTS)
- Confirmed: zero raw img tags in codebase — all images already using next/image
- npm run build: 0 errors ✓ | 15 static pages generated ✓
**Next:** SANITY_API_READ_TOKEN → seed content → npx sanity deploy → Vercel

### Session 10 — Sanity Data Connection + Client Guide
**Date:** 2026-05-11
**Completed:**
- All 4 CMS pages connected to Sanity with ISR (revalidate: 60): home, about, services, careers
- HeroSection, IntroSection, WhyUsSection: accept Sanity props with hardcoded fallbacks
- AboutPageContent: PortableText for ourStory, next/image for founderPhoto, Sanity coreValues with icon fallback by index
- ServicesPageContent: merges Sanity serviceName/features onto hardcoded PILLARS (preserves rich paragraphs)
- CareersPageContent: Sanity roles with empty-state; falls back to hardcoded when Sanity returns null
- app/(site)/layout.tsx: async server layout — fetches getSiteSettings(), renders announcement banner
- Footer: siteSettings social links with BRAND constant fallbacks; siteSettings prop
- WhatsAppButton: optional whatsappNumber prop (Sanity overrides env var)
- /api/revalidate/route.ts: POST endpoint validates x-revalidate-secret, revalidates all CMS paths
- sanity/lib/queries.ts: all fetches wrapped in safeFetch — build never crashes on missing token
- /docs/CLIENT-EDITOR-GUIDE.md: full non-technical guide for client (5 sections, tips, support info)
- CLAUDE.md: updated CLIENT INFO with Sanity project ID, dev contact, editor guide path, session log
- npm run build: 0 errors ✓ | 0 TS errors ✓
**Next:** Set real SANITY_API_READ_TOKEN in .env.local → open localhost:3000/studio → seed all 5 documents → npx sanity deploy → Vercel deploy

### Session 9 — Sanity CMS Setup + Studio Live
**Date:** 2026-05-11
**Completed:**
- Ran `npx sanity@latest init` → project ID k33l6ras written to .env.local, dataset production, CORS localhost:3000 added
- Cleaned up JS files generated by sanity init (kept sanity.cli.js for CLI commands)
- Fixed embedded studio: split page.tsx into server page + Studio.tsx client component ('use client')
- Added `compiler: { styledComponents: true }` to next.config.mjs (fixes SSR hydration crash)
- Restructured to route group app/(site)/ — all site pages moved there with their own layout (Navbar/Footer/WhatsApp); root layout now clean (fonts + metadata only); studio at /studio has no Navbar overlay
- Studio confirmed working at localhost:3000/studio — all 5 sections visible (Home Page, About Page, Services Page, Careers Page, Site Settings)
**TypeScript:** 0 errors ✓

### Session 9 — Sanity CMS Setup
**Date:** 2026-05-10
**Completed:**
- Packages: installed next-sanity@9.12.3, sanity@3.99.0, @sanity/image-url, @sanity/client@7, styled-components@6, @sanity/cli (dev); pinned to next-sanity@9 because v10+ requires Next.js 15+
- sanity/schemas/homepage.ts: 9 fields — heroHeadline, heroSubheadline, heroCtaText, introParagraph, statBadge1-3, whyUsHeadline, whyUsSubtext
- sanity/schemas/aboutPage.ts: vision, mission, ourStory (portable text), founderName, founderDesignation, founderPhoto (image+hotspot), coreValues (array of objects, max 5)
- sanity/schemas/servicesPage.ts: pageIntro, services (array of pillar objects: pillarNumber/serviceName/shortDescription/features[], fixed 5)
- sanity/schemas/siteSettings.ts: phoneNumber, whatsappNumber, email, linkedinUrl, instagramUrl, facebookUrl, youtubeUrl, footerTagline, announcementBanner
- sanity/schemas/careersPage.ts: pageHeadline, pageSubheadline, openRoles (array: roleName/roleType/location/description/isActive, max 10)
- sanity/schemas/index.ts: exports all 5 schemas
- sanity/lib/client.ts: next-sanity createClient + urlFor() image helper
- sanity/lib/queries.ts: 5 typed fetch functions (ISR revalidate:60) + TS interfaces for all doc types
- sanity.config.ts: root-level Studio config, basePath=/studio, singleton sidebar structure for all 5 doc types
- app/studio/[[...tool]]/page.tsx: embedded Studio route (force-dynamic)
- next.config.mjs: cdn.sanity.io added to remotePatterns for next/image
**TypeScript:** 0 errors ✓
**User action required:** Run `npx sanity login` then `npx sanity@latest init --env --create-project "Corporate 360 Hub" --dataset production` to create the Sanity project and get the project ID. Update NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local.

### Session 8 — Backend API Routes
**Date:** 2026-05-10
**Completed:**
- app/api/contact/route.ts: added in-memory rate limiting (Map<email, timestamp>, 5-min window → 429); updated subject to "New Inquiry: [Service] from [Company Name]"; added console.log on receive and on send; all fields now in HTML table
- app/api/careers/route.ts: updated subject to "New Job Application: [Role] — [Name]"; added console.log on receive and on send; tidied HTML template
- .env.local: created with all 10 required keys (placeholder values)
- .env.example: created with all 10 keys, empty values (safe to commit)
- .gitignore: verified .env*.local already covered ✓
- Packages: all already installed (resend, zod, react-hook-form, @hookform/resolvers) ✓
**TypeScript:** 0 errors ✓

### Session 7 — Industries, Careers, Contact Pages
**Date:** 2026-05-10
**Completed:**
- lib/validations.ts: updated `contactFormSchema` (company, phone, service now required); simplified `careerFormSchema` (name, phone, email, role, message — CV validated manually)
- app/api/careers/route.ts: updated to new fields (role/message instead of position/experience/coverLetter)
- app/industries/page.tsx + IndustriesPageContent.tsx: 5 alternating navy/offwhite sections; each has large gold number watermark, LucideIcon in colored circle, H2, description, "Key Contacts" teal pills, "Services We Deliver" gold pills, CTA → /contact?service=[industry]
- app/careers/page.tsx + CareersPageContent.tsx: 4 sections — PageHero, OpenRoles (4 cards), WhyJoin (4 benefit cards on navy bg), ApplicationSection (RHF+Zod form: name/phone/email/role/CV/message; controlled file input with type+size validation; WhatsApp Apply gold button)
- app/contact/page.tsx + ContactPageContent.tsx: PageHero, 2-col FormAndDetails (gold "Send Message" button, success state), right-col contact cards (Email/Phone/WhatsApp/Location/LinkedIn/Hours + navy response-time box), Google Maps iframe embed for Kerala
- All pages use server wrapper → client content component pattern
**TypeScript:** 0 errors ✓ | /industries /careers /contact HTTP 200 ✓
**Note:** ContactDetail icon prop uses `LucideIcon` type; WhatsApp uses separate `WhatsAppDetail` component with inline SVG to avoid LucideProps type mismatch

### Session 6 — Business Model Page
**Date:** 2026-05-10
**Completed:**
- app/business-model/page.tsx: server component, exports `metadata`, renders `<BusinessModelContent />`
- components/sections/BusinessModelContent.tsx: "use client", 5 inline sections
  - PageHero: min-h-[50vh] navy, dot-grid, "360°" watermark at 3% opacity, breadcrumb, gold label, H1, subtitle
  - ThreeVerticalsSection: offwhite bg, 3 cards in `lg:grid-cols-[1fr_44px_1fr_44px_1fr]` with animated `ConnectorArrow` circles (gold ring, ArrowRight icon, spring bounce) between cards; each card has colored 1px top bar, icon circle, H3, description, sub-item pills (teal/gold/deep-navy accents)
  - TimelineSection: navy bg, animated progress line (`useInView` + `scaleX: 0→1`, white→teal→gold gradient, 1.4s ease), 3 phase nodes, 3 phase cards (Day 0-30 dark navy / Day 31-60 teal / Day 61-90 gold) with badge, icon, title, checklist
  - RevenueStreamsSection: offwhite bg, 3 model cards with Monthly Retainer (teal badge) / Performance-Linked (gold badge) labels
  - SPRPitchSection: navy bg, diagonal gold texture, pull quote with 4px gold left border, staggered line reveal, gold "This is the 360° difference.", gold CTA button → /contact
- Animation: `useInView` from framer-motion used for timeline progress bar (scroll-triggered)
**TypeScript:** 0 errors ✓ | Dev server: /business-model HTTP 200 ✓

### Session 5 — Services Page
**Date:** 2026-05-10
**Completed:**
- app/services/page.tsx: server component, exports `metadata`, renders `<ServicesPageContent />`
- components/sections/ServicesPageContent.tsx: "use client", 7 inline sections
  - PageHero: navy, dot-grid bg, breadcrumb, H1, 5 pill navigation anchors with hover arrow reveal
  - PillarSection × 5: alternating navy/offwhite, `id="pillar-[id]"` anchor target, `scroll-mt-24` offset, gold number watermark (absolute, 7%/6% opacity), teal icon circle, H2, 3 body paragraphs, feature card with `CheckCircle2` gold checkmarks, contextual CTA → `/contact?service=[encoded title]`
  - SPRSection: gold bg, diagonal navy texture, radial white highlight, dual CTAs (navy button + outline → /business-model)
- globals.css: `scroll-behavior: smooth` added to `html` (enables pill anchor scrolling)
- Pattern: server page.tsx → client content component (consistent with About page)
**TypeScript:** 0 errors ✓ | Dev server: /services HTTP 200 ✓

### Session 4 — About Us Page
**Date:** 2026-05-10
**Completed:**
- app/about/page.tsx: server component, exports `metadata`, renders `<AboutPageContent />`
- components/sections/AboutPageContent.tsx: "use client", 6 inline sections
  - PageHero: 52vh, navy, dot-grid bg, breadcrumb (Home › About), H1 + teal subtitle
  - VisionMission: offwhite section, navy Vision card + #0A5F5F dark teal Mission card, gold 3px top bars
  - OurStory: white bg, teal SectionLabel, gold divider, 2-col (narrative + founder photo placeholder with dashed border)
  - CoreValues: offwhite section, 5 navy cards in 3+2 grid, teal icon, gold top bar, hover shadow
  - CoverageMap: navy bg, 14 animated teal pills with MapPin icon, stat strip (14/2024/1)
  - Team: white bg, gray placeholder card, subtext, "Join Our Team" → /careers CTA
- Pattern: server page.tsx → client content component (correct Next.js 14 App Router pattern)
- Fixed: stale background process was masking HTTP 404 from port collision; project is HTTP 200 ✓
**TypeScript:** 0 errors ✓ | Dev server: / HTTP 200, /about HTTP 200 ✓

### Session 3 — Home Page
**Date:** 2026-05-10
**Completed:**
- HeroSection: animated compass (90s rotation), dot-grid bg, stagger reveal, 3 gold stat badges, dual CTAs with glow effect
- IntroSection: SPR paragraph with teal left border, 3 pillar cards (Users/Megaphone/Network icons)
- ServicesOverviewSection: 5 cards in 3+2 grid (lg:grid-cols-6), dark card bg #0F2847, teal top bar, hover lift+gold glow
- IndustriesSection: horizontal scroll on mobile, 5-col grid on desktop, icon+label cards, hover animation
- WhyUsSection: 4 ownership cards, CheckCircle2 icons, SPR highlight box with diagonal gold texture
- CTASection: gold bg, diagonal navy texture, radial highlight, navy CTA button
- constants.ts: replaced SERVICES with 5 real pillars, replaced INDUSTRIES with 5 sectors, added HOME_SERVICES, HOME_INDUSTRIES, HERO_BADGES
- Fixed: app/industries/page.tsx updated for new INDUSTRIES shape (was string[], now {label, icon}[])
**TypeScript:** 0 errors ✓ | Dev server: HTTP 200 ✓
**New files:** IntroSection.tsx, ServicesOverviewSection.tsx, IndustriesSection.tsx, WhyUsSection.tsx

### Session 2 — Global Layout Components
**Date:** 2026-05-10
**Completed:**
- Navbar: full-screen overlay mobile menu, gold logo + teal subtitle, sliding underline animation, scroll-triggered bg
- Footer: 3-col layout, compass SVG watermark, social icons (LinkedIn/Instagram/Facebook/YouTube), gold gradient divider, discovery call CTA card
- WhatsApp: custom SVG icon, animated pulse rings, tooltip, NEXT_PUBLIC_WHATSAPP_NUMBER env
- layout.tsx: title template, canonical, full OG/Twitter metadata, font weights
- lib/constants.ts: added social links, updated tagline/subtitle, fixed SITE_METADATA
- Fixed: `replyTo` → `reply_to` in both Resend API routes (Resend v3 snake_case)
**TypeScript:** 0 errors ✓ | Dev server: HTTP 200 ✓
**Blockers encountered:** Instagram/Facebook URLs still pending from client

### Session 0 — Project Setup
**Date:** [DATE]
**Prompts run:** None yet
**Completed:**
- Created CLAUDE.md with full architecture documentation
- Created TASKS.md with complete task board
**Decisions made:**
- Stack: Next.js 14 + TypeScript + Tailwind + Sanity + Resend + Vercel
- CMS: Sanity (client is non-technical, needs visual editor)
- Deployment: Vercel (auto-deploy from git push)
**Blockers encountered:** Phone/WhatsApp numbers needed from client
**Next session starts at:** Prompt 1 — Project Scaffold

---
<!-- Add new sessions above this line, below the header -->

---

*TASKS.md v1.0 — Update at the end of every session. Never delete completed items — move them to DONE.*
