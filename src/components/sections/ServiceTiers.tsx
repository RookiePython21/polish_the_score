import Link from "next/link"
import { Check, Crown } from "lucide-react"

import { CritiqueButton } from "@/components/CritiqueButton"
import { SectionHeading } from "@/components/SectionHeading"
import { services } from "@/content/site"
import { cn } from "@/lib/utils"

interface ServiceTiersProps {
  // "preview" trims long include lists and links to /services; "full" shows everything.
  variant?: "preview" | "full"
}

const PREVIEW_INCLUDES = 5

export function ServiceTiers({ variant = "full" }: ServiceTiersProps) {
  const preview = variant === "preview"

  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Services" lines={["Choose your", "level of polish."]} />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {services.map((tier) => {
            const includes = preview ? tier.includes.slice(0, PREVIEW_INCLUDES) : tier.includes
            const hidden = tier.includes.length - includes.length
            return (
              <article
                key={tier.slug}
                id={tier.slug}
                className={cn(
                  "relative flex scroll-mt-24 flex-col rounded-xl border bg-panel p-7",
                  tier.featured
                    ? "border-brand shadow-[0_0_60px_-18px_var(--brand)] lg:-mt-4"
                    : "border-border"
                )}
              >
                {tier.featured && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    <Crown className="size-3.5" aria-hidden />
                    Most Detailed
                  </span>
                )}

                <h3 className="text-3xl uppercase tracking-wide text-foil">{tier.name}</h3>
                <p className="mt-2 font-display text-lg uppercase tracking-wide text-foreground/90">{tier.tagline}</p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  {tier.description.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <div className="foil-divider my-6 opacity-40" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-light">Includes</p>
                <ul className={cn("mt-4 grid gap-2.5", !preview && tier.includes.length > 8 && "sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2")}>
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {hidden > 0 && (
                  <Link
                    href={`/services#${tier.slug}`}
                    className="mt-3 text-sm text-brand-light underline-offset-4 hover:underline"
                  >
                    + {hidden} more areas reviewed
                  </Link>
                )}

                <p className="mt-6 rounded-md border border-border bg-stage/60 p-4 text-sm text-muted-foreground">
                  <span className="font-semibold uppercase tracking-wider text-brand-light">Ideal for: </span>
                  {tier.idealFor}
                </p>

                <CritiqueButton
                  label={tier.cta}
                  service={tier.slug}
                  size="default"
                  variant={tier.featured ? "default" : "outline"}
                  className="mt-6 w-full"
                />
              </article>
            )
          })}
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          Not sure which service you need?{" "}
          <Link href="/get-started" className="text-brand-light underline-offset-4 hover:underline">
            Tell us about your team
          </Link>{" "}
          and we&apos;ll help you choose.
        </p>
      </div>
    </section>
  )
}
