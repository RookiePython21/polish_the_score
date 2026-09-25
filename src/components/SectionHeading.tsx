import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  lines: string[]
  align?: "center" | "left"
  className?: string
}

export function SectionHeading({ eyebrow, lines, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-3xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold",
            align === "center" && "justify-center"
          )}
        >
          <Star className="size-3 fill-gold" aria-hidden />
          {eyebrow}
          <Star className="size-3 fill-gold" aria-hidden />
        </p>
      )}
      <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
        {lines.map((line, i) => (
          <span key={line} className={cn("block", i === lines.length - 1 && lines.length > 1 && "text-foil")}>
            {line}
          </span>
        ))}
      </h2>
    </div>
  )
}
