# BCF Earthworks LLC – Landing Page Build Instructions

## Overview

Build a **mobile-first landing page** for **BCF Earthworks LLC**, a licensed and insured land clearing and excavation contractor based in Owensboro, KY.

The primary goal is **simple lead generation**:
- User selects the **service they need**
- Describes their **project / acreage**
- Enters their **location**
- Gets prompted to **call for a free estimate**

No pricing is displayed on the page. Every quote requires a phone call. The only pricing message on the page is:

**"Every job is different. Call for your free estimate."**

---

## Business Info

| Field | Value |
|---|---|
| Company | BCF Earthworks LLC |
| Phone | 270-316-4658 |
| Email | bcfearthworksllc@yahoo.com |
| Location | Owensboro, KY |
| Service Area | Daviess County and surrounding Western Kentucky counties |
| Hours | 7 days a week |
| Equipment | Skid steer, mini excavator, bush hog |
| Credentials | Licensed & insured |

---

## Core Service Offers

These four services are the focus of the landing page. They map directly to the keyword ad groups in `bcf_keyword_assignments.csv`.

1. **Land Clearing** — Tree clearing, brush removal, debris cleanup, site prep for construction
2. **Excavation & Grading** — Site grading, land leveling, drainage solutions, surface prep
3. **Water Line & Utilities** — Water line installation, utility trenching, run water to shed or outbuilding
4. **Underground Electrical** — Bury electrical wire, run power to detached garage, underground service installation

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Components:** Shadcn UI
- **Icons:** Lucide React

> This project already exists. Match the established `src/app/` and `src/components/` structure.

---

## Project Structure

```txt
src/
├── app/
│   └── page.tsx                  ← landing page root
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/                       ← Shadcn UI components
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Benefits.tsx
│       ├── Testimonials.tsx
│       ├── MoreBenefits.tsx
│       ├── QuoteSection.tsx
│       ├── ServiceArea.tsx
│       ├── FAQ.tsx
│       └── CTA.tsx
├── types/
│   └── index.ts
└── styles/
    └── globals.css
```

---

## Color Scheme & Design Direction

### Primary Colors

- **White (#FFFFFF)** — Primary background
- **Green (#16a34a / green-600)** — Accents, buttons, highlights

### Usage Guidelines

- White backgrounds for a clean, professional look
- Green for CTAs, buttons, section dividers, and icons
- CTA buttons should be **green with white text**
- Design feel: **trustworthy, hardworking, no-nonsense**
- Avoid clutter — clear spacing, readable typography, large tap targets on mobile

---

## Brand Voice

Direct. Knowledgeable. No fluff. Short, confident sentences. Contractor tone.

- Plain words over fancy ones
- Action-forward — move the reader toward calling
- Never shame or pressure the customer
- Would a seasoned contractor who runs a skid steer for a living actually say this?

**Banned phrases:** hassle-free, premium service, state-of-the-art, seamless, leverage, transform your property, don't wait, act now, unlock

---

## Page Sections (in order)

Build each section as a separate component in `src/components/sections/`.

---

### 1. Navbar (`layout/Navbar.tsx`)

- Logo (left)
- Navigation links: Services, Service Area, FAQ
- CTA button on right: **"Call Now"**

```html
<a href="tel:2703164658">Call Now</a>
```

---

### 2. Hero (`sections/Hero.tsx`)

- Headline
- Subheadline
- Primary CTA: **"Call for a Free Estimate"**
- Trust badges: Licensed & Insured · Free Estimates · 7 Days a Week
- Background image or hero photo of equipment/cleared land

#### Suggested Copy

**Headline:**
Land Clearing & Excavation in Western Kentucky

**Subheadline:**
BCF Earthworks handles land clearing, grading, water lines, and underground electrical for homeowners, farmers, and contractors across Daviess County.

---

### 3. Services (`sections/Services.tsx`)

Four cards — one per core service. Each card includes:
- Service name
- 2–3 sentence description
- Bullet list of what's included
- Icon (Lucide React)
- CTA link: "Call About This Service"

#### Service Cards

**Land Clearing**
We clear trees, brush, and debris and haul everything off. Good for building sites, overgrown fields, and properties that need a clean start.
- Tree and stump removal
- Brush and vegetation clearing
- Debris removal and cleanup
- Site prep for construction

**Excavation & Grading**
We grade and level ground for driveways, building pads, and drainage. We use a skid steer and mini excavator for precise work on any size property.
- Land leveling and grading
- Drainage solutions
- Driveway and building pad prep
- Gravel and material spreading

**Water Line & Utilities**
We trench and install water lines to homes, sheds, barns, and outbuildings. Licensed and insured for utility work.
- Water line installation
- Underground utility trenching
- Run water to shed or outbuilding
- Well water line installation

**Underground Electrical**
We bury electrical lines and run power to detached garages, shops, and outbuildings. Safe, clean, code-compliant work.
- Bury electrical wire in yard
- Run power to detached garage
- Underground electrical service installation
- Trench and conduit installation

---

### 4. Benefits (`sections/Benefits.tsx`)

- **Licensed & Insured** — You're protected on every job.
- **Free Estimates** — No cost to get a quote.
- **7 Days a Week** — We work around your schedule.
- **No Hidden Fees** — The price we quote is the price you pay.

---

### 5. Testimonials (`sections/Testimonials.tsx`)

3 testimonials. Name and role or location.

Example placeholders:

- "They cleared the whole back half of my property in a day. Showed up on time, cleaned up after themselves, and the price was fair." — Sarah J., Property Owner
- "I use BCF for site prep on my builds. They're precise and they get it done on schedule." — Mike T., Construction Manager
- "They ran a water line out to my barn without any fuss. Would call them again." — Lisa R., Ranch Owner

---

### 6. More Benefits (`sections/MoreBenefits.tsx`)

- Handles jobs from single-lot residential to large commercial sites
- Professional equipment — skid steer and mini excavator
- Local crew with real experience in Western Kentucky terrain
- Work sites left clean — no debris, no mess left behind

---

### 7. Quote Section (`sections/QuoteSection.tsx`)

A simple lead-qualifier form. **Not a price calculator.** Collecting information to help the customer describe their project before they call.

#### Inputs

- Service type (dropdown: Land Clearing / Excavation & Grading / Water Line & Utilities / Underground Electrical)
- Approximate acreage or project size (text or select: Under 1 acre / 1–5 acres / 5+ acres / Not sure)
- Project description (short textarea — optional)
- Location / city

#### Output

After submission, display:

> **Ready for your free estimate?**
> Call BCF Earthworks at **270-316-4658** — we'll talk through your project and give you a straight answer.
>
> *We serve Daviess County and surrounding Western Kentucky counties.*

```html
<a href="tel:2703164658">Call for Your Free Estimate</a>
```

No email capture. No backend required. Form submission just reveals the phone CTA block.

#### Important Rules

- All fields except project description are required
- No pricing is shown at any point
- The only output is the phone CTA

---

### 8. Service Area (`sections/ServiceArea.tsx`)

- Owensboro, KY
- Henderson, KY
- Lewisport, KY
- Utica, KY
- Daviess County and surrounding Western Kentucky counties

Short paragraph:
> BCF Earthworks is based in Owensboro and serves Daviess County and the surrounding counties in Western Kentucky. Not sure if we cover your area? Call and ask.

---

### 9. FAQ (`sections/FAQ.tsx`)

Use Shadcn Accordion component.

**What services does BCF Earthworks offer?**
Land clearing, excavation and grading, water line and utility trenching, and underground electrical work.

**Do you give free estimates?**
Yes. Call 270-316-4658 and describe your project. We'll give you a straight answer.

**Are you licensed and insured?**
Yes. BCF Earthworks LLC is fully licensed and insured.

**What areas do you serve?**
Owensboro, Henderson, Lewisport, Utica, and the surrounding Western Kentucky counties.

**How long does a land clearing job take?**
It depends on the size and condition of the property. Small jobs can be done in a day. Larger sites take longer. Call with your details and we can give you a timeframe.

**Do you haul away debris?**
Yes. We clear and haul off everything — trees, brush, stumps, and debris.

**Can you run a water line to my shed or barn?**
Yes. We trench and install water lines to outbuildings, barns, and sheds.

**Can you bury electrical lines?**
Yes. We run underground electrical to detached garages, shops, and outbuildings.

**What equipment do you use?**
Skid steer, mini excavator, and bush hog.

**How do I get started?**
Call 270-316-4658. We're available 7 days a week.

---

### 10. Final CTA (`sections/CTA.tsx`)

**Headline:**
Ready to Get Started?

**Subheadline:**
Call BCF Earthworks and describe your project. We'll give you a free estimate and let you know when we can get out there.

**CTA Button:**
Call BCF Earthworks — 270-316-4658

```html
<a href="tel:2703164658">Call BCF Earthworks — 270-316-4658</a>
```

---

### 11. Footer (`layout/Footer.tsx`)

- Logo
- Phone: 270-316-4658 (clickable)
- Email: bcfearthworksllc@yahoo.com
- Service Area: Owensboro, KY and surrounding Western Kentucky
- Links: Services, FAQ, Service Area
- Privacy Policy / Terms

---

## Quote Form Requirements

Collect:
- Service type
- Project size / acreage
- Project description (optional)
- Location

Display after submission:
- Phone CTA block — no price, no estimate

Include:
**"Every job is different. Call for your free estimate."**

---

## CTA Requirements

All CTAs use phone links. No form submissions, no email captures, no chat widgets.

### CTA Examples

- Call Now
- Call for a Free Estimate
- Call About This Service
- Call BCF Earthworks — 270-316-4658

```html
<a href="tel:2703164658">Call for a Free Estimate</a>
```

---

## Component Guidelines

### Shadcn UI

Use:
- Button
- Card
- Input
- Label
- Select
- Textarea
- Accordion (FAQ)

### Styling

- Green + white color scheme
- Professional, contractor-focused design
- Mobile-first
- Large, easy-to-tap buttons
- Clear spacing and readable typography

### TypeScript

```ts
export type ServiceType =
  | 'land-clearing'
  | 'excavation-grading'
  | 'water-line-utilities'
  | 'underground-electrical'

export type ProjectSize =
  | 'under-1-acre'
  | '1-5-acres'
  | '5-plus-acres'
  | 'not-sure'

export interface QuoteFormValues {
  serviceType: ServiceType
  projectSize: ProjectSize
  projectDescription?: string
  location: string
}
```

---

## Build Steps

```powershell
npm install
npm run dev
```

---

## Content Required

- [x] Phone number — 270-316-4658
- [x] Email — bcfearthworksllc@yahoo.com
- [x] Service area — Owensboro, KY and surrounding Western Kentucky counties
- [x] Services — Land Clearing, Excavation & Grading, Water Line & Utilities, Underground Electrical
- [ ] Logo
- [ ] Project photos / before-after images
- [ ] Final testimonial names/details confirmed by client

---

## Key Build Notes

- No Stripe or payments
- No pricing shown anywhere on the page
- All quotes require a phone call
- Focus on phone conversions
- Require service type and location in quote form
- Optimize for mobile users
- Tone: direct, knowledgeable, no fluff
```
