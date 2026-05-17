import { client } from './client'

export interface HomepageData {
  heroHeadline?: string
  heroSubheadline?: string
  heroCtaText?: string
  introParagraph?: string
  statBadge1?: string
  statBadge2?: string
  statBadge3?: string
  whyUsHeadline?: string
  whyUsSubtext?: string
}

export interface CoreValue {
  title?: string
  description?: string
}

export interface AboutPageData {
  vision?: string
  mission?: string
  ourStory?: unknown[]
  founderName?: string
  founderDesignation?: string
  founderPhoto?: unknown
  coreValues?: CoreValue[]
}

export interface ServicePillar {
  pillarNumber?: string
  serviceName?: string
  shortDescription?: string
  features?: string[]
}

export interface ServicesPageData {
  pageIntro?: string
  services?: ServicePillar[]
}

export interface SiteSettings {
  phoneNumber?: string
  whatsappNumber?: string
  email?: string
  linkedinUrl?: string
  instagramUrl?: string
  facebookUrl?: string
  youtubeUrl?: string
  footerTagline?: string
  announcementBanner?: string
}


const ISR = { next: { revalidate: 60 } }

async function safeFetch<T>(query: string): Promise<T | null> {
  try {
    return await client.fetch<T>(query, {}, ISR)
  } catch {
    return null
  }
}

export async function getHomepage(): Promise<HomepageData | null> {
  return safeFetch<HomepageData>(`*[_type == "homepage"][0]`)
}

export async function getAboutPage(): Promise<AboutPageData | null> {
  return safeFetch<AboutPageData>(`*[_type == "aboutPage"][0]`)
}

export async function getServicesPage(): Promise<ServicesPageData | null> {
  return safeFetch<ServicesPageData>(`*[_type == "servicesPage"][0]`)
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return safeFetch<SiteSettings>(`*[_type == "siteSettings"][0]`)
}

