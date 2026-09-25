import * as React from "react"

import { cn } from "@/lib/utils"

const fieldBase =
  "w-full min-w-0 rounded-md border border-border bg-stage px-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors outline-none focus-visible:border-brand focus-visible:ring-[3px] focus-visible:ring-brand/30 disabled:opacity-50 aria-invalid:border-maroon"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <input type={type} data-slot="input" className={cn(fieldBase, "h-12", className)} {...props} />
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" className={cn(fieldBase, "min-h-28 py-3", className)} {...props} />
}

function NativeSelect({ className, ...props }: React.ComponentProps<"select">) {
  return <select data-slot="select" className={cn(fieldBase, "h-12 appearance-none pr-10", className)} {...props} />
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn("text-sm font-medium uppercase tracking-wider text-brand-light/90", className)}
      {...props}
    />
  )
}

export { Input, Textarea, NativeSelect, Label, fieldBase }
