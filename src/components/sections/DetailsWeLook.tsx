import { SectionHeading } from "@/components/SectionHeading"
import { danceCritique } from "@/content/site"

export function DetailsWeLook() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow={danceCritique.eyebrow} lines={[danceCritique.heading]} align="left" />
            <p className="mt-6 text-lg">{danceCritique.intro}</p>
            <div className="mt-4 space-y-1 text-lg text-brand-light/90">
              {danceCritique.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
            <div className="mt-6 space-y-3 text-muted-foreground">
              {danceCritique.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl uppercase tracking-wide text-foil">{danceCritique.detailsHeading}</h3>
            <dl className="grid gap-4 sm:grid-cols-2">
              {danceCritique.details.map((d, i) => (
                <div key={d.title} className="scorecard p-5">
                  <dt className="flex items-baseline gap-3">
                    <span className="font-display text-sm text-brand-light tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-lg uppercase tracking-wider">{d.title}</span>
                  </dt>
                  <dd className="mt-2 text-muted-foreground">{d.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
