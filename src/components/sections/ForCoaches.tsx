import Image from "next/image"

import { SectionHeading } from "@/components/SectionHeading"
import { forCoaches } from "@/content/site"

export function ForCoaches() {
  return (
    <section className="relative isolate overflow-hidden border-y border-brand/20 bg-panel py-20 md:py-28">
      <Image
        src="/images/medals.webp"
        alt=""
        width={1024}
        height={1024}
        className="absolute -right-32 top-1/2 -z-10 hidden w-[36rem] -translate-y-1/2 opacity-40 [mask-image:radial-gradient(closest-side,black,transparent)] lg:block"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <SectionHeading eyebrow={forCoaches.eyebrow} lines={forCoaches.heading} align="left" />

          <div className="mt-8 space-y-1 text-lg">
            {forCoaches.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
          <div className="mt-6 space-y-2 text-muted-foreground">
            {forCoaches.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 font-display text-3xl uppercase tracking-wide text-foil">{forCoaches.close}</p>
        </div>
      </div>
    </section>
  )
}
