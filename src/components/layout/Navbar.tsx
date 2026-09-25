"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { CritiqueButton } from "@/components/CritiqueButton"
import { Wordmark } from "@/components/layout/Wordmark"

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand/20 bg-stage/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-brand-light"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <CritiqueButton size="sm" className="hidden sm:inline-flex" />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-brand-light md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-brand/20 bg-stage md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium uppercase tracking-widest text-foreground hover:text-brand-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-5">
            <CritiqueButton size="default" className="w-full" />
          </div>
        </div>
      )}
    </header>
  )
}
