import Link from "next/link"
import { Film } from "lucide-react"

import { cn } from "@/lib/utils"

interface UploadNudgeProps {
  className?: string
  href?: string
}

// The quiet "you can upload your routine" line under CTAs.
export function UploadNudge({ className, href = "/get-started#video" }: UploadNudgeProps) {
  return (
    <p className={cn("flex items-center gap-2 text-sm text-muted-foreground", className)}>
      <Film className="size-4 shrink-0 text-gold/80" aria-hidden />
      <span>
        Have a routine video?{" "}
        <Link href={href} className="text-gold-light underline-offset-4 hover:underline">
          Upload it with your request.
        </Link>
      </span>
    </p>
  )
}
