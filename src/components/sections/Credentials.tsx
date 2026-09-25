import { Award, Medal, Trophy } from "lucide-react"

import { credentials } from "@/content/site"

const icons = [Medal, Trophy, Award]

export function Credentials() {
  return (
    <section className="relative border-y border-brand/25 bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <ul className="grid gap-6 sm:grid-cols-3">
          {credentials.badges.map((badge, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li key={badge} className="flex items-center justify-center gap-3 text-center sm:flex-col">
                <span className="flex size-12 items-center justify-center rounded-full border border-brand/50 bg-brand/10 shadow-[0_0_20px_-6px_var(--brand)]">
                  <Icon className="size-5 text-brand-light" aria-hidden />
                </span>
                <span className="font-display text-lg uppercase tracking-wider">{badge}</span>
              </li>
            )
          })}
        </ul>

        <div className="foil-divider my-10 opacity-50" />

        <blockquote className="mx-auto max-w-3xl text-center">
          {credentials.quote.map((line, i) => (
            <p
              key={line}
              className={
                i === credentials.quote.length - 1
                  ? "mt-2 font-display text-2xl uppercase tracking-wide text-foil sm:text-3xl"
                  : "font-display text-xl uppercase tracking-wide text-foreground/90 sm:text-2xl"
              }
            >
              {line}
            </p>
          ))}
        </blockquote>
      </div>
    </section>
  )
}
