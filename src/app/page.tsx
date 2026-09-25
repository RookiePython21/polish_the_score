import { Approach } from "@/components/sections/Approach"
import { Credentials } from "@/components/sections/Credentials"
import { CTA } from "@/components/sections/CTA"
import { DoneTheWork } from "@/components/sections/DoneTheWork"
import { FAQ } from "@/components/sections/FAQ"
import { ForCoaches } from "@/components/sections/ForCoaches"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { MoreThanAScore } from "@/components/sections/MoreThanAScore"
import { ServiceTiers } from "@/components/sections/ServiceTiers"
import { WhatWeDo } from "@/components/sections/WhatWeDo"

export default function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <DoneTheWork />
      <WhatWeDo />
      <MoreThanAScore />
      <Approach />
      <HowItWorks />
      <ServiceTiers variant="preview" />
      <ForCoaches />
      <FAQ />
      <CTA />
    </>
  )
}
