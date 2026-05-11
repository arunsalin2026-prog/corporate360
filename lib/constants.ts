export const BRAND = {
  colors: {
    navy: "#0B1F3A",
    teal: "#0D7C7C",
    gold: "#C9A84C",
    offwhite: "#F7F5F1",
    slate: "#4A5568",
    lightTeal: "#e1f4f4",
    lightGold: "#fdf8ec",
  },
  company: {
    name: "Corporate 360 Hub",
    tagline: "Kerala's Only 360° Business Architecture Partner",
    subtitle: "The Business Architecture",
    email: "contact@corporate360hub.com",
    website: "corporate360hub.com",
    location: "Kerala, India — All 14 Districts",
    social: {
      linkedin: "https://linkedin.com/company/corporate360hub",
      instagram: "#", // Pending from client
      facebook: "#",  // Pending from client
      youtube: "#",   // Pending from client
    },
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Business Model", href: "/business-model" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

// The 5 core service pillars — used on Services page and service-detail sections
export const SERVICES = [
  {
    id: "talent",
    number: "01",
    title: "Talent Acquisition & HR Training",
    description:
      "Source, place, and develop the right people for every level of your organisation — from frontline sales to senior leadership.",
    icon: "Users",
  },
  {
    id: "marketing",
    number: "02",
    title: "Marketing & Branding (ATL·BTL·TTL)",
    description:
      "Full-spectrum brand building — mass media awareness, ground-level activation, and digital campaigns that convert.",
    icon: "Megaphone",
  },
  {
    id: "research",
    number: "03",
    title: "Market Research & Intelligence",
    description:
      "Data-driven insights mapping markets, competitors, and consumer behaviour so your strategy is built on facts.",
    icon: "BarChart2",
  },
  {
    id: "launches",
    number: "04",
    title: "Product Launches & Dealer Meets",
    description:
      "End-to-end execution of product launches, trade events, and dealer engagement programs across Kerala.",
    icon: "Rocket",
  },
  {
    id: "network",
    number: "05",
    title: "Network Appointment & Expansion",
    description:
      "Build and activate distribution networks across all 14 districts — from dealer onboarding to channel activation.",
    icon: "Network",
  },
] as const;

// Home page — 5-card overview strip (same data, aliased for clarity)
export const HOME_SERVICES = SERVICES;

// Full industries for /industries page and home strip
export const INDUSTRIES = [
  { label: "FMCG", icon: "ShoppingBag" },
  { label: "FMCD", icon: "Tv" },
  { label: "IT & Technology", icon: "Laptop" },
  { label: "Automotive", icon: "Car" },
  { label: "Banking & NBFC", icon: "Landmark" },
] as const;

// Alias used on home page strip
export const HOME_INDUSTRIES = INDUSTRIES;

export const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "95%", label: "Client Satisfaction" },
] as const;

// Hero section stat badges
export const HERO_BADGES = [
  { value: "14", label: "Districts" },
  { value: "360°", label: "Solutions" },
  { value: "5", label: "Business Pillars" },
] as const;

export const BUSINESS_MODEL_PILLARS = [
  {
    title: "Diagnose",
    description:
      "Deep-dive assessment of your current business state, identifying gaps, risks, and opportunities.",
    step: "01",
  },
  {
    title: "Design",
    description:
      "Co-create a tailored architecture blueprint aligned to your vision, resources, and market context.",
    step: "02",
  },
  {
    title: "Deploy",
    description:
      "Structured implementation with milestone tracking, stakeholder alignment, and risk management.",
    step: "03",
  },
  {
    title: "Drive",
    description:
      "Ongoing performance monitoring, iteration, and optimization to sustain competitive advantage.",
    step: "04",
  },
] as const;

export const SITE_METADATA = {
  titleTemplate: "%s | Corporate 360 Hub",
  defaultTitle: "Corporate 360 Hub | Kerala's Business Architecture Partner",
  description:
    "Kerala's Only 360° Business Architecture Partner. We help organizations diagnose, design, deploy, and drive sustainable business success across all 14 districts.",
  keywords:
    "business architecture, management consulting, business strategy, Kerala, B2B consulting, digital transformation, Corporate 360 Hub, 360 business",
  ogImage: "/og-image.jpg",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://corporate360hub.com",
} as const;
