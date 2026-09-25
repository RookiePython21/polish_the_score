import type { Metadata } from "next"
import { ShieldCheck, Star } from "lucide-react"

import { IntakeForm } from "@/components/sections/IntakeForm"
import { credentials, disclaimer, services } from "@/content/site"
import type { ServiceSlug } from "@/types"

export const metadata: Metadata = {
  title: "Get Your Critique",
  description: "Submit your competitive dance routine for a detailed, constructive critique. Upload your video or share a link.",
}

export default async function GetStartedPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>
}) {
  const { service } = await searchParams
  const initialService = services.find((s) => s.slug === service)?.slug as ServiceSlug | undefined

  return (
    <section className="spotlight py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Get Your Critique</p>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Submit your routine.
            <br />
            <span className="text-foil">Take the floor ready.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us about your team and send your routine video. We&apos;ll watch it from beginning to end and send back
            detailed feedback on strengths, opportunities for improvement and specific areas to work on.
          </p>

          <ul className="mt-8 space-y-3">
            {credentials.badges.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <Star className="size-4 fill-gold text-gold" aria-hidden />
                <span className="font-display uppercase tracking-wider">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-3 rounded-lg border border-border bg-panel p-4 text-sm text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
            <p>
              Your submitted video and critique will be treated as private and will not be shared publicly without your
              permission. {disclaimer}
            </p>
          </div>
        </div>

        <IntakeForm initialService={initialService} />
      </div>
    </section>
  )
}
