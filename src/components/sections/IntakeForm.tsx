"use client"

import { useRef, useState } from "react"
import { upload } from "@vercel/blob/client"
import { CheckCircle2, ChevronDown, Film, Loader2, Mail, Trophy, UploadCloud, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input, Label, NativeSelect, Textarea } from "@/components/ui/input"
import { contact, services } from "@/content/site"
import { MAX_VIDEO_BYTES, MAX_VIDEO_MB } from "@/lib/upload"
import type { IntakeFormValues, ServiceSlug } from "@/types"

type Status = "idle" | "uploading" | "sending" | "done" | "error"

interface IntakeFormProps {
  initialService?: ServiceSlug
}

function formatMB(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function IntakeForm({ initialService }: IntakeFormProps) {
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState("")
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")
  const fileInput = useRef<HTMLInputElement>(null)

  const busy = status === "uploading" || status === "sending"

  function pickFile(f: File | undefined) {
    setFileError("")
    if (!f) return
    if (!f.type.startsWith("video/")) {
      setFileError("Please choose a video file.")
      return
    }
    if (f.size > MAX_VIDEO_BYTES) {
      setFileError(`That file is ${formatMB(f.size)}. The limit is ${MAX_VIDEO_MB} MB — try a video link instead.`)
      return
    }
    setFile(f)
  }

  function clearFile() {
    setFile(null)
    setProgress(0)
    if (fileInput.current) fileInput.current.value = ""
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    const data = new FormData(e.currentTarget)
    const values: IntakeFormValues = {
      service: data.get("service") as IntakeFormValues["service"],
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      team: String(data.get("team") ?? ""),
      phone: String(data.get("phone") ?? ""),
      division: String(data.get("division") ?? ""),
      competitionDate: String(data.get("competitionDate") ?? ""),
      videoUrl: String(data.get("videoUrl") ?? ""),
      notes: String(data.get("notes") ?? ""),
    }

    let stage: "uploading" | "sending" = "uploading"
    try {
      if (file) {
        setStatus("uploading")
        const safeTeam = values.team.replace(/[^a-z0-9]+/gi, "-").toLowerCase().slice(0, 40) || "team"
        const blob = await upload(`routines/${safeTeam}/${file.name}`, file, {
          access: "public",
          handleUploadUrl: "/api/upload",
          multipart: file.size > 50 * 1024 * 1024,
          onUploadProgress: ({ percentage }) => setProgress(Math.round(percentage)),
        })
        values.uploadedVideoUrl = blob.url
      }

      stage = "sending"
      setStatus("sending")
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(
          body.error === "not_configured" || body.error === "send_failed" || !body.error
            ? `We couldn't send your request right now. Please email us at ${contact.email}.`
            : body.error
        )
      }
      setStatus("done")
    } catch (err) {
      setStatus("error")
      setError(
        stage === "uploading"
          ? `Your video didn't upload. You can paste a video link instead, or email us at ${contact.email}.`
          : (err as Error).message
      )
    }
  }

  if (status === "done") {
    return (
      <div className="scorecard flex flex-col items-center p-10 text-center">
        <Trophy className="size-12 text-gold-light" aria-hidden />
        <h2 className="mt-5 text-3xl uppercase text-foil">Your routine is in the judges&apos; hands.</h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          We&apos;ve got your request. We&apos;ll reply by email to confirm your service and next steps.
        </p>
        <p className="mt-6 font-display text-lg uppercase tracking-wide text-gold-light">
          Refine the details. Elevate the performance.
        </p>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="scorecard grid gap-6 p-6 sm:p-8" noValidate={false}>
        <div className="grid gap-2">
          <Label htmlFor="service">Service *</Label>
          <div className="relative">
            <NativeSelect id="service" name="service" required defaultValue={initialService ?? ""}>
              <option value="" disabled>
                Choose a service
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
              <option value="not-sure">Not sure yet — help me choose</option>
            </NativeSelect>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-gold" aria-hidden />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Your Name *</Label>
            <Input id="name" name="name" required autoComplete="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="team">Studio / Team *</Label>
            <Input id="team" name="team" required autoComplete="organization" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="division">Division / Style</Label>
            <Input id="division" name="division" placeholder="e.g. Varsity Jazz, Pom, Hip Hop" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="competitionDate">Next Competition</Label>
            <Input id="competitionDate" name="competitionDate" type="date" />
          </div>
        </div>

        {/* Video */}
        <fieldset id="video" className="grid scroll-mt-28 gap-4 rounded-lg border border-dashed border-gold/40 bg-stage/50 p-5">
          <legend className="px-2 text-sm font-medium uppercase tracking-wider text-gold-light/90">
            Your Routine Video
          </legend>
          <p className="text-sm text-muted-foreground">
            A clear video showing the entire performance is preferred. The better we can see the dancers and formations,
            the more specific our feedback can be. Your video stays private.
          </p>

          {file ? (
            <div className="flex items-center gap-3 rounded-md border border-border bg-panel p-3">
              <Film className="size-5 shrink-0 text-gold" aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm">{file.name}</p>
                <p className="text-xs text-muted-foreground">{formatMB(file.size)}</p>
                {status === "uploading" && (
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                    <div className="h-full bg-gold transition-[width]" style={{ width: `${progress}%` }} />
                  </div>
                )}
              </div>
              {!busy && (
                <button type="button" onClick={clearFile} className="rounded p-2 text-muted-foreground hover:text-foreground" aria-label="Remove video">
                  <X className="size-4" />
                </button>
              )}
            </div>
          ) : (
            <label
              htmlFor="videoFile"
              className="flex cursor-pointer flex-col items-center gap-2 rounded-md border border-border bg-panel px-4 py-8 text-center transition-colors hover:border-gold/60"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                pickFile(e.dataTransfer.files?.[0])
              }}
            >
              <UploadCloud className="size-8 text-gold" aria-hidden />
              <span className="font-display uppercase tracking-wider">Upload your video</span>
              <span className="text-xs text-muted-foreground">Tap to choose or drag it here · up to {MAX_VIDEO_MB} MB</span>
            </label>
          )}
          <input
            ref={fileInput}
            id="videoFile"
            type="file"
            accept="video/*"
            className="sr-only"
            onChange={(e) => pickFile(e.target.files?.[0])}
          />
          {fileError && <p className="text-sm text-rose">{fileError}</p>}

          <div className="grid gap-2">
            <Label htmlFor="videoUrl" className="normal-case tracking-normal text-muted-foreground">
              Or paste a link (YouTube, Google Drive, Dropbox)
            </Label>
            <Input id="videoUrl" name="videoUrl" type="url" placeholder="https://" />
          </div>
        </fieldset>

        <div className="grid gap-2">
          <Label htmlFor="notes">Anything we should know?</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Sections you're worried about, questions for us, what the judges said last time…"
          />
        </div>

        {error && (
          <p role="alert" className="rounded-md border border-rose/50 bg-rose/10 p-3 text-sm">
            {error}
          </p>
        )}

        <Button type="submit" size="lg" disabled={busy} className="w-full">
          {status === "uploading" ? (
            <>
              <Loader2 className="animate-spin" /> Uploading video… {progress}%
            </>
          ) : status === "sending" ? (
            <>
              <Loader2 className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              <CheckCircle2 /> Submit for Critique
            </>
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          We&apos;ll reply by email to confirm your service and next steps. * Required
        </p>
      </form>

      <p className="mt-6 flex items-center justify-center gap-2 text-center text-muted-foreground">
        <Mail className="size-4 text-gold" aria-hidden />
        Prefer email?{" "}
        <a href={`mailto:${contact.email}`} className="text-gold-light underline-offset-4 hover:underline">
          {contact.email}
        </a>
      </p>
    </div>
  )
}
