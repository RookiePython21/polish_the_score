import Link from "next/link"
import { Mail, Phone } from "lucide-react"

import { Wordmark } from "@/components/layout/Wordmark"
import { brand, contact, disclaimer } from "@/content/site"

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/get-started", label: "Submit Your Video" },
]

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-stage">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="space-y-4">
          <Wordmark />
          <p className="text-sm uppercase tracking-widest text-gold/80">{brand.descriptor}</p>
          <p className="text-muted-foreground">{brand.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">Explore</h3>
          <ul className="space-y-3 text-muted-foreground">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link className="hover:text-gold-light" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">Contact</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 break-all hover:text-gold-light">
                <Mail className="size-4 shrink-0 text-gold" aria-hidden />
                {contact.email}
              </a>
            </li>
            {contact.phone && (
              <li>
                <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 hover:text-gold-light">
                  <Phone className="size-4 text-gold" aria-hidden />
                  {contact.phone}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="foil-divider mx-auto max-w-7xl opacity-40" />
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:px-6 md:flex-row md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <p>{disclaimer}</p>
      </div>
    </footer>
  )
}
