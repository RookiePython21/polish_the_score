import Image from "next/image"
import { Award, Medal, Trophy } from "lucide-react"

import { SectionHeading } from "@/components/SectionHeading"
import { about, credentials, philosophy } from "@/content/site"

const icons = [Medal, Trophy, Award]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-brand/20 bg-panel py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={about.eyebrow} lines={[about.heading]} align="left" />

          <ul className="mt-8 flex flex-wrap gap-3">
            {credentials.badges.map((b, i) => {
              const Icon = icons[i % icons.length]
              return (
                <li
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-brand-light"
                >
                  <Icon className="size-4" aria-hidden />
                  {b}
                </li>
              )
            })}
          </ul>

          <div className="mt-8 space-y-4 text-muted-foreground">
            {about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 border-l-2 border-brand pl-5">
            {about.close.map((l, i) => (
              <p key={l} className={i === 0 ? "font-display text-xl uppercase" : "font-display text-xl uppercase text-foil"}>
                {l}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-brand/30">
            <Image
              src="/images/medals.webp"
              alt="Gold competition medals and ribbons on black velvet with scattered rhinestones"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="scorecard p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light">{philosophy.eyebrow}</p>
            <h3 className="mt-3 text-2xl uppercase tracking-wide sm:text-3xl">{philosophy.heading}</h3>
            <ul className="mt-5 space-y-1.5 text-brand-light/90">
              {philosophy.maybes.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <div className="mt-5 space-y-1 text-muted-foreground">
              {philosophy.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
