import { Check, Target } from "lucide-react"

import { SectionHeading } from "@/components/SectionHeading"
import { whatWeDo } from "@/content/site"

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={whatWeDo.eyebrow} lines={[whatWeDo.heading]} />
        <div className="mx-auto mt-6 max-w-2xl space-y-1 text-center text-lg text-muted-foreground">
          {whatWeDo.intro.map((p, i) => (
            <p key={p} className={i === whatWeDo.intro.length - 1 ? "font-semibold text-gold-light" : undefined}>
              {p}
            </p>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Judges' score sheet */}
          <div className="scorecard p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-gold/30 pb-4">
              <h3 className="text-xl uppercase tracking-wider text-gold-light">Areas We May Evaluate</h3>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Score Sheet</span>
            </div>
            <ol className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {whatWeDo.areas.map((area, i) => (
                <li key={area} className="flex items-baseline gap-3 border-b border-dashed border-border pb-2">
                  <span className="font-display text-sm text-gold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span>{area}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* The goal */}
          <div className="flex flex-col justify-center rounded-lg border border-gold/40 bg-gradient-to-b from-gold/10 to-transparent p-6 sm:p-8">
            <Target className="mb-4 size-8 text-gold" aria-hidden />
            <h3 className="text-3xl uppercase text-foil">The Goal?</h3>
            <p className="mt-2 text-muted-foreground">To help you identify:</p>
            <ul className="mt-5 space-y-3">
              {whatWeDo.goal.map((g) => (
                <li key={g} className="flex items-start gap-3 text-lg">
                  <Check className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
