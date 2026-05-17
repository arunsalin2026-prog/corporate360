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
    tagline: "South India's 360° Business Architecture Partner",
    subtitle: "The Business Architecture",
    email: "info@corporate360hub.com",
    website: "corporate360hub.com",
    location: "Basement Floor, Pallath Square, Suite No. 370B, FACT Kalamassery Rd, Kalamassery, Kochi, Kerala 683104",
    social: {
      linkedin: "https://www.linkedin.com/company/corporate-360-hub/",
      instagram: "https://www.instagram.com/corporate360hub?utm_source=qr&igsh=MWJtaHVtMnBlNWxqYg==",
      facebook: "https://www.facebook.com/share/18NpNv2wNQ/",
    },
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;

// The 6 core service pillars — used on Services page and service-detail sections
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
      "End-to-end execution of product launches, trade events, and dealer engagement programs across South India.",
    icon: "Rocket",
  },
  {
    id: "network",
    number: "05",
    title: "Network Appointment & Expansion",
    description:
      "Build and activate distribution networks across South India — from dealer onboarding to channel activation.",
    icon: "Network",
  },
  {
    id: "finance",
    number: "06",
    title: "Financial Systems Management",
    description:
      "Accounting systems setup, MIS reporting, compliance frameworks, P&L monitoring, and working capital advisory.",
    icon: "PieChart",
  },
] as const;

// Home page — 6-card overview strip (same data, aliased for clarity)
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
  { value: "5", label: "States" },
  { value: "360°", label: "Solutions" },
  { value: "6", label: "Business Pillars" },
] as const;

export const SITE_METADATA = {
  titleTemplate: "%s | Corporate 360 Hub",
  defaultTitle: "Corporate 360 Hub | South India's 360° Business Architecture Partner",
  description:
    "South India's 360° Business Architecture Partner. We help organizations diagnose, design, deploy, and drive sustainable business success across South India.",
  keywords:
    "business architecture, management consulting, business strategy, South India, Kerala, Tamil Nadu, Karnataka, B2B consulting, digital transformation, Corporate 360 Hub, 360 business",
  ogImage: "/og-image.jpg",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://corporate360hub.com",
} as const;
