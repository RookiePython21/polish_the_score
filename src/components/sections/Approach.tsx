import { Crosshair, Eye, HeartHandshake, ListChecks } from "lucide-react"

import { SectionHeading } from "@/components/SectionHeading"
import { approach } from "@/content/site"

const icons = [Eye, HeartHandshake, Crosshair, ListChecks]

export function Approach() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="The Polish the Score Approach" lines={["Honest. Constructive.", "Specific. Actionable."]} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((item, i) => {
            const Icon = icons[i]
            return (
              <article
                key={item.title}
                className="group relative rounded-lg border border-border bg-panel p-6 transition-colors hover:border-brand/60"
              >
                <span className="absolute right-5 top-5 font-display text-5xl text-brand/15 transition-colors group-hover:text-brand/30">
                  {i + 1}
                </span>
                <Icon className="size-7 text-brand" aria-hidden />
                <h3 className="mt-5 text-2xl uppercase tracking-wide">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
