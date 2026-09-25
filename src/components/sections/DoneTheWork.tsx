import { Sparkle } from "lucide-react"

import { SectionHeading } from "@/components/SectionHeading"
import { doneTheWork } from "@/content/site"

export function DoneTheWork() {
  return (
    <section className="spotlight py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Home" lines={doneTheWork.heading} />

        <div className="mx-auto mt-8 max-w-2xl space-y-1 text-center text-lg text-muted-foreground">
          {doneTheWork.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl gap-3">
          {doneTheWork.littleThings.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-lg border border-border bg-panel/70 px-5 py-4 text-lg"
            >
              <Sparkle className="mt-1 size-4 shrink-0 fill-rose text-rose" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center font-display text-3xl uppercase tracking-wide text-foil md:text-4xl">
          {doneTheWork.outro}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">{doneTheWork.body}</p>
      </div>
    </section>
  )
}
