import Image from "next/image"
import Link from "next/link"

import { CritiqueButton } from "@/components/CritiqueButton"
import { Button } from "@/components/ui/button"
import { UploadNudge } from "@/components/UploadNudge"
import { brand, hero } from "@/content/site"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-trophies.webp"
        alt="Gold dance competition trophies and first-place ribbons under a single stage spotlight"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] opacity-60 md:opacity-100"
      />
      {/* Fade to stage-black on the text side and at the bottom */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stage via-stage/85 to-stage/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-stage to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 md:pb-32 md:pt-28">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold">{brand.descriptor}</p>

          <h1 className="text-5xl font-bold uppercase leading-[0.95] sm:text-6xl md:text-7xl">
            Refine the details.
            <br />
            Elevate the performance.
            <br />
            <span className="text-foil">Polish the score.</span>
          </h1>

          <div className="mt-8 space-y-1 text-lg text-muted-foreground">
            <p className="font-semibold text-foreground">{hero.lead}</p>
            {hero.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className="mt-6 font-display text-2xl uppercase tracking-wide text-gold-light">{hero.turn}</p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">{hero.body}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CritiqueButton />
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
          <UploadNudge className="mt-5" />
          <p className="mt-8 text-sm italic text-muted-foreground">{brand.promise}</p>
        </div>
      </div>
    </section>
  )
}
