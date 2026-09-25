import Link from "next/link"
import { Trophy } from "lucide-react"

export function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Polish The Score home">
      <span className="flex size-9 items-center justify-center rounded-full border border-gold/60 bg-gold/10 shadow-[0_0_16px_-4px_var(--gold)]">
        <Trophy className="size-4 text-gold-light" aria-hidden />
      </span>
      <span className="font-display text-lg font-bold uppercase leading-none tracking-wider">
        Polish <span className="text-foil">The Score</span>
      </span>
    </Link>
  )
}
