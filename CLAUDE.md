# CLAUDE.md — Corporate 360 Hub Website
# Project memory file. Read this at the START of every Claude Code session.
# Update the task board and session log at the END of every session.

---

## PROJECT IDENTITY

| Field | Value |
|---|---|
| Project | Corporate 360 Hub — The Business Architecture |
| Type | Marketing website + CMS + contact forms |
| Domain | corporate360hub.com |
| Repo | github.com/[USERNAME]/corporate360hub-website |
| Production | https://corporate360hub.com |
| Sanity Studio | https://corporate360hub.sanity.studio |
| Dev Server | localhost:3000 |
| Studio Dev | localhost:3333 (npx sanity dev) |

---

## TECH STACK

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14 App Router | TypeScript strict mode |
| Styling | Tailwind CSS | Brand tokens in tailwind.config.ts |
| Components | shadcn/ui | Installed components listed below |
| Animation | Framer Motion | Used for hero, scroll reveals, mobile nav |
| Forms | React Hook Form + Zod | Schemas in /lib/validations.ts |
| Email | Resend | Contact form delivery |
| CMS | Sanity v3 | Schemas in /sanity/schemas/ |
| Deployment | Vercel | Auto-deploy on git push to main |
| Analytics | Vercel Analytics + GA4 | Events tracked in /lib/analytics.ts |

---

## BRAND CONSTANTS

```ts
// All in /lib/constants.ts and tailwind.config.ts
navy:     '#0B1F3A'   // Primary background
teal:     '#0D7C7C'   // Secondary accent, icons, buttons
gold:     '#C9A84C'   // CTAs, dividers, badges — primary accent
offwhite: '#F7F5F1'   // Page background (light sections)
slate:    '#4A5568'   // Body text
```

Fonts: Montserrat (headlines) + Inter (body) — via next/font/google
Icons: lucide-react throughout

---

## PROJECT STRUCTURE

```
/app
  layout.tsx               ← Root layout: Navbar, Footer, WhatsAppButton, fonts, metadata
  page.tsx                 ← Home (fetches from Sanity: homepage document)
  /about/page.tsx          ← About (fetches: aboutPage document)
  /services/page.tsx       ← Services (fetches: servicesPage document)
  /industries/page.tsx     ← Static — no CMS
  /contact/page.tsx        ← Static form page
  /not-found.tsx           ← 404 page
  /api
    /contact/route.ts      ← POST: contact form → Resend email
    /revalidate/route.ts   ← POST: Sanity webhook → revalidatePath()

/components
  /layout
    Navbar.tsx             ← Sticky, transparent→navy on scroll, mobile menu
    Footer.tsx             ← 3-col, gold divider, compass watermark
    WhatsAppButton.tsx     ← Fixed bottom-right, pulse animation
  /sections
    HeroSection.tsx
    IntroSection.tsx
    ServicesOverviewSection.tsx
    IndustriesSection.tsx
    WhyUsSection.tsx
    CTASection.tsx
  /ui                      ← shadcn components

/sanity
  /schemas
    homepage.ts
    aboutPage.ts
    servicesPage.ts
    siteSettings.ts
    index.ts               ← exports all schemas
  /lib
    client.ts              ← Sanity client config
    queries.ts             ← GROQ queries (getHomepage, getAboutPage, etc.)
  sanity.config.ts

/lib
  constants.ts             ← brand colors, nav links, company data, fallback content
  validations.ts           ← Zod schemas for contact form
  analytics.ts             ← trackEvent() helper for GA4 custom events

/docs
  CLIENT-EDITOR-GUIDE.md  ← Non-technical guide for client (Sanity usage)

/public
  /images
  /og-image.jpg            ← 1200×630 OG image

.env.local                 ← NOT committed to git
.env.example               ← Committed — shows required keys with empty values
TASKS.md                   ← Task board (see below)
CLAUDE.md                  ← This file
```

---

## ENVIRONMENT VARIABLES

```bash
# .env.local — never commit this file
RESEND_API_KEY=                        # resend.com → API Keys
NEXT_PUBLIC_WHATSAPP_NUMBER=           # 91XXXXXXXXXX (no + prefix, for wa.me links)
NEXT_PUBLIC_PHONE_NUMBER=              # +91 XXXXX XXXXX (display format)
NEXT_PUBLIC_SITE_URL=                  # https://corporate360hub.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=         # G-XXXXXXXXXX from Google Analytics
NEXT_PUBLIC_SANITY_PROJECT_ID=         # from sanity.io dashboard
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=                 # Viewer token from Sanity → API → Tokens
SANITY_REVALIDATE_SECRET=             # Random string — shared with Sanity webhook
```

---

## KEY ARCHITECTURAL DECISIONS

**Why Next.js App Router over Pages Router:**
App Router enables server components, which means Sanity data is fetched at the server
level — no client-side loading states for content. ISR (revalidate: 60) means edits
from Sanity Studio appear on the live site within 60 seconds.

**Why Sanity over Supabase or JSON files:**
Client is non-technical. Sanity Studio gives him a Word-doc-like interface.
Free tier handles the content volume easily. No database to maintain.

**Why Resend over Nodemailer / SendGrid:**
Simplest API for Next.js, excellent deliverability, free tier (3000 emails/month)
is more than enough. Single SDK call per form submission.

**ISR Strategy:**
- Pages with CMS content: revalidate every 60 seconds (ISR)
- Pages without CMS (industries, contact): static (no revalidate)
- revalidate/route.ts handles on-demand revalidation from Sanity publish webhook

**Singleton Documents in Sanity:**
homepage, aboutPage, servicesPage, siteSettings are all singletons
(one document per type). No listing pages needed. Query by _type, take first result.

---

## SHADCN COMPONENTS INSTALLED

Track installed components here as they're added:
- [ ] button
- [ ] input
- [ ] textarea
- [ ] select
- [ ] form
- [ ] toast
- [ ] dialog (for exit intent popup)
- [ ] badge

---

## PAGES & CMS MAPPING

| Page | Route | CMS? | Sanity Document |
|---|---|---|---|
| Home | / | ✅ Yes | homepage |
| About | /about | ✅ Yes | aboutPage |
| Services | /services | ✅ Yes | servicesPage |
| Industries | /industries | ❌ Static | — |
| Contact | /contact | ❌ Static | — |

---

## COMMON COMMANDS

```bash
# Development
npm run dev          # Next.js at localhost:3000
npx sanity dev       # Sanity Studio at localhost:3333

# Before every deploy
npm run build        # Must pass with zero errors and zero TS errors

# Deploy
git add . && git commit -m "feat: [description]"
git push             # Auto-deploys to Vercel production

# Sanity Studio deploy (when schemas change)
npx sanity deploy

# Check logs
vercel logs --follow

# Revalidate a page manually (after content stuck)
curl -X POST https://corporate360hub.com/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-revalidate-secret: [SANITY_REVALIDATE_SECRET]" \
  -d '{"path": "/"}'
```

---

## CLIENT INFO

| Field | Value |
|---|---|
| Client | [Friend's Name] |
| Business | Corporate 360 Hub |
| Email | info@corporate360hub.com |
| Sanity Studio URL | https://corporate360hub.sanity.studio |
| Sanity Project ID | k33l6ras |
| Sanity Dataset | production |
| Sanity Login Email | [Client's email — add when account is created] |
| Sanity Role | Editor |
| Client Editor Guide | /docs/CLIENT-EDITOR-GUIDE.md |
| Domain Registrar | [e.g. GoDaddy / BigRock / Hostinger] |
| Vercel Team | [personal / team name] |
| Dev Contact | vishnuharidev1@gmail.com |

---

## KNOWN ISSUES / WATCH LIST

<!-- Add any bugs, gotchas, or things to revisit here -->
- [ ] OG image at /public/og-image.jpg is placeholder — needs real image
- [ ] Add env vars to Vercel dashboard (RESEND_API_KEY, SANITY_API_READ_TOKEN, SANITY_REVALIDATE_SECRET)

---

## SESSION LOG

<!-- Each session appends one entry. Keep entries concise. -->

### Session 15 — Content & Brand Updates
Date: 2026-05-17
Done:
- Founder profile (Arun Salin) added to About page — full bio, 8-role career timeline, photo
- Founder photo: /public/images/founder-arun-salin.jpg (object-center positioning)
- Awards block removed from founder section; "#1 Kerala — Atomberg" stat removed
- Our Story rewritten as full-width section (no photo); new STORY_PILLARS + RED_FLAGS content
- Business Model tab removed entirely (page, components, nav link, sitemap, constants)
- Careers page removed entirely (page, API route, Sanity schema, validations, nav link)
- Services: 6th pillar added — Financial Systems Management (PieChart icon, page section, pill nav)
- Contact form service dropdown: Financial Systems Management option added
- Office address updated: Basement Floor, Pallath Square, Suite No. 370B, FACT Kalamassery Rd, Kalamassery, Kochi 683104
- Google Maps embed updated to exact coordinates (10.064625, 76.321830)
- Phone + WhatsApp updated: +91 70342 44404 / 917034244404
- Email updated: info@corporate360hub.com (was contact@)
- Brand scope: all Kerala/14-districts references → South India across every file
- Founded year updated to 2026 across all pages
- Navbar: transparent only on home page (always navy on inner pages); "Let's Talk" now opens WhatsApp directly
- Social links updated: LinkedIn, Instagram, Facebook (real URLs); YouTube icon removed
- JSON-LD sameAs: LinkedIn + Instagram; areaServed → South India
- Site is LIVE at corporate360hub.com — deployed via Vercel
Next: Add env vars to Vercel dashboard → RESEND_API_KEY, SANITY_API_READ_TOKEN, SANITY_REVALIDATE_SECRET

### Session 13 — Domain Update + Git Init
Date: 2026-05-11
Done:
- Domain corrected from .in → .com across all source files (constants.ts, layout.tsx, robots.ts, sitemap.ts, .env.local)
- npm run build: 0 errors ✓, 15 static pages ✓ (post-domain-update)
- git init + initial commit e5af92d (67 files staged; .env.local excluded by .gitignore)
- vercel CLI (v53.3.2) + gh CLI (v2.8.9) installed globally
Next: gh auth login → create GitHub repo → vercel login → vercel deploy → add env vars → custom domain

### Session 12 — Pre-Deployment QA Pass
Date: 2026-05-11
Done:
- Skip-to-content link added to app/(site)/layout.tsx; <main id="main-content"> target
- Navbar hamburger: 40→44px tap target (w-11 h-11), aria-expanded + aria-controls="mobile-menu"
- Mobile overlay: id="mobile-menu" added
- Footer social icons: 36→44px tap target (w-11 h-11)
- FormField (ContactPageContent + CareersPageContent): useId() + cloneElement inject id/htmlFor — all inputs properly associated with labels
- CV upload (CareersPageContent): htmlFor="cv-upload" + id="cv-upload"; className="sr-only" for keyboard access
- WhatsApp <a> in ContactPageContent: aria-label added
- Breadcrumb motion.nav: aria-label="Breadcrumb" + aria-current="page" + aria-hidden on › — fixed across all 5 pages (Contact, Careers, Industries, Services, BusinessModel)
- npm run build: 0 errors ✓, 15 static pages ✓
Next: Set SANITY_API_READ_TOKEN → seed Sanity content → npx sanity deploy → Vercel deploy

### Session 11 — SEO & Performance
Date: 2026-05-11
Done:
- generateMetadata() on all 7 pages — titles (absolute on home), descriptions, keywords, canonical
- Root layout: OG/Twitter meta updated; JSON-LD LocalBusiness schema; font preconnect hints
- app/sitemap.ts: all 7 routes with priority + changeFrequency → /sitemap.xml
- app/robots.ts: disallow /api/ + /studio/, sitemap pointer → /robots.txt
- app/not-found.tsx: standalone 404 — gold number, Go Home + Contact Us CTAs
- next.config.mjs: poweredByHeader: false; full security headers (X-Frame-Options, HSTS, etc.)
- npm run build: 0 errors ✓, 15 static pages ✓
Next: QA pass → Sanity seed → deploy

### Session 10 — Sanity Data Connection + Client Guide
Date: 2026-05-11
Done:
- Connected all 4 CMS pages to Sanity with ISR (revalidate: 60) — home, about, services, careers
- Updated all 6 section components to accept optional Sanity props with hardcoded fallbacks
- AboutPageContent: PortableText for ourStory, next/image for founderPhoto, Sanity coreValues with icon fallback
- ServicesPageContent: merges Sanity serviceName/features onto hardcoded PILLARS by index
- CareersPageContent: Sanity roles with empty-state message; falls back to hardcoded when Sanity returns null
- app/(site)/layout.tsx: async, fetches getSiteSettings(), announcement banner, passes to Footer + WhatsAppButton
- Footer: social links from Sanity siteSettings with BRAND constant fallbacks
- WhatsAppButton: accepts optional whatsappNumber prop (Sanity over env var)
- /api/revalidate/route.ts: webhook endpoint validates x-revalidate-secret, revalidates all CMS paths
- sanity/lib/queries.ts: all fetches wrapped in safeFetch (try/catch) — build never crashes on missing token
- sanity/lib/client.ts: switched to createImageUrlBuilder named export (deprecation fix)
- /docs/CLIENT-EDITOR-GUIDE.md: created full non-technical guide for client
- npm run build: 0 errors ✓, 0 TS errors ✓
Next: Set real SANITY_API_READ_TOKEN in .env.local → seed content in Studio → npx sanity deploy → deploy to Vercel

### Session 0 — Project Start
Date: [DATE]
Done: Created CLAUDE.md and TASKS.md. Established project plan.
Next: Run Prompt 1 to scaffold the project.

---

*CLAUDE.md v1.4 — Last updated: 2026-05-17 | Always update before ending a session.*
