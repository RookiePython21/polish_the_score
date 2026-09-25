# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

This folder currently holds **specification only — no application code**. Contents:

- `LANDING_PAGE_INSTRUCTIONS.md` — the full build spec for a BCF Earthworks LLC landing page (business facts, copy, section-by-section component breakdown, form rules).
- `clientsINSTRUCTIONS.md` — empty placeholder.

There is no `package.json`, no `src/`, no git repo, and no test setup here. Before writing code, confirm with the user whether this folder is meant to become a new Next.js app or whether the work belongs in the existing BCF site (see below) — the spec says "this project already exists," but that project is a **sibling folder**, not this one.

## The existing BCF Earthworks site

`../joey_fulkerson/` is the live BCF Earthworks site and the reference implementation for anything built here. It is the source of the `bcf_keyword_assignments.csv` the spec references. Read it before designing components — it already solves most of what the spec asks for, and its conventions differ from the spec in ways worth reconciling first:

| | Spec in this folder | `../joey_fulkerson` as built |
|---|---|---|
| Next.js | 15 | 16 (`next dev --turbopack`) |
| Components | `src/components/sections/*` + `layout/*` | flat `src/components/*` |
| Shadcn UI | Button, Card, Input, Label, Select, Textarea, Accordion | only `badge`, `button`, `card`, `separator` in `src/components/ui/` |
| Scope | single landing page | landing page + per-service routes (`src/app/land-clearing/`, `trenching-company/`, etc.) |

Patterns to carry over rather than reinvent:

- `src/components/PhoneLink.tsx` — every phone CTA goes through this client component; it fires `window.gtag_report_conversion("tel:270-316-4658")` on click. A raw `<a href="tel:...">` silently loses conversion tracking, so use `PhoneLink` for all call CTAs.
- `src/types/index.ts` — shared prop/content interfaces (`ServiceHeroProps`, `ServiceFAQItem`, …) rather than per-component inline types.
- Content-driven service pages: `ServiceHero` / `ServiceArticle` / `ServiceFAQs` take content as props, so a new service page is data plus routing, not new components.

## Commands

Nothing runs from this folder yet. In `../joey_fulkerson` (and for any app scaffolded here, match these):

```powershell
npm install
npm run dev     # next dev --turbopack
npm run build
npm run lint
```

No test framework is configured in either folder — there is no test command to run.

## Non-negotiable product rules (from the spec)

These are business constraints, not style preferences. Violating them breaks the client's sales model:

- **No pricing anywhere on the page**, ever — not a range, not a calculator, not a "starting at." The only pricing statement allowed is "Every job is different. Call for your free estimate."
- **Every CTA is a phone link** to 270-316-4658. No email capture, no form POST, no backend, no chat widget.
- The quote form is a **lead qualifier, not a calculator**: service type, project size, optional description, location. Submitting it only reveals the phone CTA block. Service type and location are required.
- Copy voice is a working contractor: direct, short sentences, plain words. Banned: *hassle-free, premium service, state-of-the-art, seamless, leverage, transform your property, don't wait, act now, unlock*.
- Green (`#16a34a` / `green-600`) on white, mobile-first, large tap targets.

Business facts (phone 270-316-4658, email, service area, the four services and their bullet lists, all FAQ answers, testimonials) live in `LANDING_PAGE_INSTRUCTIONS.md` — take them from there rather than paraphrasing, and treat the testimonials as placeholders pending client confirmation.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
