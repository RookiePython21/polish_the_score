import { NextResponse } from "next/server"
import { Resend } from "resend"

import { services } from "@/content/site"
import type { IntakeFormValues } from "@/types"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

function isHttpUrl(s: string): boolean {
  try {
    const u = new URL(s)
    return u.protocol === "https:" || u.protocol === "http:"
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 })
  }

  let raw: Record<string, unknown>
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const values: IntakeFormValues = {
    service: clean(raw.service, 40) as IntakeFormValues["service"],
    name: clean(raw.name, 120),
    email: clean(raw.email, 200),
    team: clean(raw.team, 200),
    phone: clean(raw.phone, 40),
    division: clean(raw.division, 200),
    competitionDate: clean(raw.competitionDate, 40),
    videoUrl: clean(raw.videoUrl, 1000),
    uploadedVideoUrl: clean(raw.uploadedVideoUrl, 1000),
    notes: clean(raw.notes, 5000),
  }

  const serviceName =
    values.service === "not-sure"
      ? "Not sure yet — help me choose"
      : services.find((s) => s.slug === values.service)?.name

  const errors: string[] = []
  if (!serviceName) errors.push("Choose a service.")
  if (!values.name) errors.push("Enter your name.")
  if (!EMAIL_RE.test(values.email)) errors.push("Enter a valid email.")
  if (!values.team) errors.push("Enter your studio or team.")
  if (values.videoUrl && !isHttpUrl(values.videoUrl)) errors.push("Video link must be a full URL.")
  if (values.uploadedVideoUrl && !isHttpUrl(values.uploadedVideoUrl)) errors.push("Upload failed — please try again.")
  if (errors.length) return NextResponse.json({ error: errors.join(" ") }, { status: 400 })

  const rows: [string, string | undefined][] = [
    ["Service", serviceName],
    ["Coach", values.name],
    ["Email", values.email],
    ["Studio / Team", values.team],
    ["Phone", values.phone],
    ["Division / Style", values.division],
    ["Next competition", values.competitionDate],
    ["Uploaded video", values.uploadedVideoUrl],
    ["Video link", values.videoUrl],
    ["Notes", values.notes],
  ]
  const filled = rows.filter(([, v]) => v)

  const text = filled.map(([k, v]) => `${k}: ${v}`).join("\n")
  const html = `<h2 style="font-family:sans-serif">New critique request — ${escapeHtml(serviceName!)}</h2>
<table style="font-family:sans-serif;border-collapse:collapse">${filled
    .map(([k, v]) => {
      const val = escapeHtml(v!)
      const cell = isHttpUrl(v!) ? `<a href="${val}">${val}</a>` : val.replace(/\n/g, "<br>")
      return `<tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top">${k}</td><td style="padding:6px 12px">${cell}</td></tr>`
    })
    .join("")}</table>`

  const resend = new Resend(RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: values.email,
    subject: `Critique request: ${serviceName} — ${values.team}`,
    text,
    html,
  })

  if (error) {
    console.error("Resend error", error)
    return NextResponse.json({ error: "send_failed" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
