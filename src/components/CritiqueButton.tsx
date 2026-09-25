import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { ServiceSlug } from "@/types"

interface CritiqueButtonProps {
  label?: string
  service?: ServiceSlug
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline"
  className?: string
}

// Every critique CTA on the site routes to the intake form.
export function CritiqueButton({
  label = "Get Your Critique",
  service,
  size = "lg",
  variant = "default",
  className,
}: CritiqueButtonProps) {
  const href = service ? `/get-started?service=${service}` : "/get-started"
  return (
    <Button asChild size={size} variant={variant} className={className}>
      <Link href={href}>
        {label}
        <ArrowRight aria-hidden />
      </Link>
    </Button>
  )
}
