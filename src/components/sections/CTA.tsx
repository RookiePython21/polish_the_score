import { Sparkles } from "lucide-react"

import { CritiqueButton } from "@/components/CritiqueButton"
import { UploadNudge } from "@/components/UploadNudge"
import { brand, finalCta } from "@/content/site"

export function CTA() {
  return (
    <section className="spotlight relative overflow-hidden border-t border-gold/25 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Sparkles className="mx-auto size-8 animate-sparkle text-gold-light" aria-hidden />
        <h2 className="mt-6 text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl">{finalCta.heading}</h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-1 text-lg text-muted-foreground">
          {finalCta.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <ol className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-4">
          {finalCta.steps.map((s, i) => (
            <li
              key={s}
              className={
                i === finalCta.steps.length - 1
                  ? "rounded-md border border-gold bg-gold/10 px-3 py-3 font-display text-lg uppercase text-gold-light"
                  : "rounded-md border border-border bg-panel px-3 py-3 font-display text-lg uppercase"
              }
            >
              {s}
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center gap-5">
          <CritiqueButton label="Submit Your Video" />
          <UploadNudge />
        </div>

        <p className="mt-12 text-sm uppercase tracking-[0.3em] text-gold/80">
          Refine the details. Elevate the performance.
        </p>
        <p className="sr-only">{brand.name}</p>
      </div>
    </section>
  )
}
