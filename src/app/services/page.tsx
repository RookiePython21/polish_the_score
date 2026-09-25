import type { Metadata } from "next"
import Image from "next/image"

import { CritiqueButton } from "@/components/CritiqueButton"
import { UploadNudge } from "@/components/UploadNudge"
import { About } from "@/components/sections/About"
import { CTA } from "@/components/sections/CTA"
import { DetailsWeLook } from "@/components/sections/DetailsWeLook"
import { FAQ } from "@/components/sections/FAQ"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { ServiceTiers } from "@/components/sections/ServiceTiers"
import { brand } from "@/content/site"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Quick Polish, Full Routine Polish and Coach Consultation: video critiques for competitive dance teams that cover technique, timing, synchronization, formations, transitions, musicality and performance.",
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/judges-table.webp"
          alt="Judges' table facing a dance team performing on a lit competition stage"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stage/60 via-stage/80 to-stage" />
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Services</p>
          <h1 className="mt-5 text-5xl font-bold uppercase leading-[0.95] sm:text-6xl md:text-7xl">
            Your routine.
            <br />
            Our perspective.
            <br />
            <span className="text-foil">Your next level.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {brand.name} provides detailed, constructive video critiques and consulting for competitive dance
            teams, so you can find the details that raise your score before you take the floor.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CritiqueButton />
            <UploadNudge />
          </div>
        </div>
      </section>

      <ServiceTiers />
      <DetailsWeLook />
      <About />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  )
}
