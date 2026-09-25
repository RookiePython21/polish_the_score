import Image from "next/image"

import { SectionHeading } from "@/components/SectionHeading"
import { UploadNudge } from "@/components/UploadNudge"
import { howItWorks } from "@/content/site"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative isolate scroll-mt-20 overflow-hidden py-20 md:py-28">
      <Image
        src="/images/stage-floor.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stage via-stage/80 to-stage" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="How It Works" lines={["From the floor.", "Back to the floor."]} />

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {howItWorks.map((step, i) => (
            <li key={step.title} className="scorecard flex gap-5 p-6">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-stage font-display text-2xl text-gold-light shadow-[0_0_20px_-6px_var(--gold)]">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl uppercase tracking-wide">{step.title}</h3>
                <div className="mt-2 space-y-1 text-muted-foreground">
                  {step.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {i === 1 && <UploadNudge className="mt-3" />}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
