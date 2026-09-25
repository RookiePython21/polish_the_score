import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import "./globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["400", "500", "600", "700"] })

// Empty env vars (e.g. a blank NEXT_PUBLIC_SITE_URL on Vercel) must fall through, so use || not ??.
function siteUrl(): URL {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
  ]
  for (const c of candidates) {
    if (!c?.trim()) continue
    try {
      return new URL(c.trim())
    } catch {
      // ignore malformed values and try the next candidate
    }
  }
  return new URL("http://localhost:3000")
}

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title: {
    default: "Polish The Score | Competitive Dance Critique & Consulting",
    template: "%s | Polish The Score",
  },
  description:
    "Detailed, constructive video critiques and consulting for competitive dance teams, from multi-state and national champion coaches with 25+ years of experience. Refine the details. Elevate the performance. Polish the score.",
  openGraph: {
    title: "Polish The Score | Competitive Dance Critique & Consulting",
    description: "We know what coaches see. We know what coaches look for. Let's polish the details that can raise your score.",
    images: [{ url: "/images/og.webp", width: 1200, height: 630 }],
    type: "website",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${oswald.variable} min-h-dvh font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
