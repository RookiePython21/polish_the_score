export type ServiceSlug = "quick-polish" | "full-routine-polish" | "coach-consultation"

export interface ServiceTier {
  slug: ServiceSlug
  name: string
  tagline: string
  description: string[]
  includes: string[]
  idealFor: string
  cta: string
  featured?: boolean
}

export interface FAQItem {
  question: string
  answer: string
}

export interface TitledItem {
  title: string
  body: string
}

export interface Step {
  title: string
  body: string[]
}

export interface IntakeFormValues {
  service: ServiceSlug | "not-sure"
  name: string
  email: string
  team: string
  phone?: string
  division?: string
  competitionDate?: string
  videoUrl?: string
  uploadedVideoUrl?: string
  notes?: string
}
