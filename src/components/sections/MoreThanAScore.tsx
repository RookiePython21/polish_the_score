import Image from "next/image"
import { HelpCircle } from "lucide-react"

import { SectionHeading } from "@/components/SectionHeading"
import { moreThanAScore } from "@/content/site"

export function MoreThanAScore() {
  return (
    <section className="relative isolate overflow-hidden bg-panel py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-brand/30 shadow-[0_0_60px_-20px_var(--brand)]">
          <Image
            src="/images/judges-table.webp"
            alt="View from behind the judges' table, with scorecards and lamps, as a dance team performs on a lit stage"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stage/70 via-transparent to-transparent" />
        </div>

        <div>
          <SectionHeading eyebrow={moreThanAScore.eyebrow} lines={moreThanAScore.heading} align="left" />
          <p className="mt-6 text-lg text-muted-foreground">{moreThanAScore.intro}</p>
          <ul className="mt-6 space-y-3">
            {moreThanAScore.questions.map((q) => (
              <li key={q} className="flex items-start gap-3 text-lg">
                <HelpCircle className="mt-1 size-5 shrink-0 text-maroon" aria-hidden />
                <span className="italic">{q}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3 border-l-2 border-brand pl-5">
            {moreThanAScore.outro.map((p, i) => (
              <p key={p} className={i === 0 ? "font-display text-xl uppercase text-brand-light" : "text-muted-foreground"}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
