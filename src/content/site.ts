import type { FAQItem, ServiceTier, Step, TitledItem } from "@/types"

// TODO(client): confirm contact email / phone before launch.
export const contact = {
  email: "hello@polishthescore.com", // PLACEHOLDER — replace with the client's real address
  phone: "", // optional — leave empty to hide
}

export const brand = {
  name: "Polish The Score",
  descriptor: "Competitive Dance Critique & Consulting",
  tagline: "Refine the details. Elevate the performance. Polish the score.",
  promise: "Your routine. Our perspective. Your next level.",
}

export const credentials = {
  badges: ["Multi-State Champions", "National Champions", "25+ Years Competitive Coaching"],
  quote: [
    "We know what coaches see.",
    "We know what coaches look for.",
    "Let's polish the details that can raise your score.",
  ],
}

export const hero = {
  lead: "You've put in the hours.",
  lines: [
    "You've taught the choreography.",
    "You've rehearsed the routine.",
    "You've cleaned it.",
    "You've corrected it.",
    "You've watched it over and over.",
  ],
  turn: "But sometimes, you need another set of eyes.",
  body: "Polish the Score provides detailed, constructive video critiques and consulting for competitive dance teams—helping coaches identify the details that can elevate their performance before they take the floor.",
}

export const doneTheWork = {
  heading: ["You've done the work.", "Now let's polish it."],
  intro: [
    "Competition performance isn't always about changing everything.",
    "Sometimes it's about finding the little things.",
  ],
  littleThings: [
    "A formation that's slightly off.",
    "A transition that loses momentum.",
    "A movement that's just a little late.",
    "A team that's almost—but not completely—in sync.",
    "A dancer whose energy drops for just a moment.",
  ],
  outro: "Those details matter.",
  body: "Polish the Score gives coaches an experienced outside perspective to help identify opportunities, make corrections and prepare their teams for competition.",
}

export const whatWeDo = {
  eyebrow: "What We Do",
  heading: "Competitive Dance Critique",
  intro: [
    "Your routine is carefully reviewed from a competition-focused perspective.",
    "We look beyond simply saying whether we “like” a routine.",
    "We look at the details.",
  ],
  areas: [
    "Technique",
    "Timing",
    "Synchronization",
    "Execution",
    "Cleanliness",
    "Formations",
    "Spacing",
    "Transitions",
    "Musicality",
    "Performance quality",
    "Energy",
    "Choreography",
    "Difficulty",
    "Visual impact",
    "Overall presentation",
  ],
  goal: [
    "What's working.",
    "What needs attention.",
    "What should be fixed first.",
    "And what you can do to make the performance stronger.",
  ],
}

export const moreThanAScore = {
  eyebrow: "More Than a Score",
  heading: ["A score is a number.", "The details behind it are what we want to find."],
  intro: "Your team can receive a score sheet after competition. But what happens when you want to know:",
  questions: [
    "Why did we lose points?",
    "What should we clean?",
    "Where are we inconsistent?",
    "What could make this section stronger?",
    "What should we work on before the next competition?",
  ],
  outro: [
    "That's where an outside perspective can help.",
    "Polish the Score is designed to give coaches specific, constructive and actionable feedback they can take directly into practice.",
  ],
}

export const approach: TitledItem[] = [
  {
    title: "Honest",
    body: "You don't need someone to tell you everything looks great. You need someone who can honestly identify the areas that deserve attention.",
  },
  {
    title: "Constructive",
    body: "Our goal isn't to criticize your dancers or your choreography. It's to help you improve them.",
  },
  {
    title: "Specific",
    body: "“Clean it up” isn't enough. We want to help you identify what needs to be cleaned and where to focus.",
  },
  {
    title: "Actionable",
    body: "Your critique should give you something you can actually take into the studio.",
  },
]

export const howItWorks: Step[] = [
  { title: "Choose Your Service", body: ["Select the critique option that best fits your team's needs."] },
  { title: "Submit Your Video", body: ["Send us a video of your performance along with any information you'd like us to consider."] },
  {
    title: "We Watch & Analyze",
    body: [
      "Your routine is carefully reviewed from beginning to end.",
      "We'll look at the details that contribute to the overall performance.",
    ],
  },
  {
    title: "Receive Your Critique",
    body: ["You'll receive detailed feedback highlighting strengths, opportunities for improvement and specific areas to work on."],
  },
  {
    title: "Take It Back to Practice",
    body: ["Use the feedback. Make the corrections. Clean the details. Polish the performance."],
  },
  {
    title: "Get Back on the Floor",
    body: [
      "Because improvement doesn't happen in the critique.",
      "It happens when you take the feedback back to your team.",
    ],
  },
]

export const services: ServiceTier[] = [
  {
    slug: "quick-polish",
    name: "Quick Polish",
    tagline: "A focused look at the details that stand out most.",
    description: [
      "Perfect for coaches who want another set of eyes on their routine without a full detailed breakdown.",
    ],
    includes: [
      "Performance review",
      "Key strengths",
      "Primary areas for improvement",
      "Important corrections",
      "Practice priorities",
    ],
    idealFor: "Coaches looking for a focused outside perspective before competition.",
    cta: "Get Started",
  },
  {
    slug: "full-routine-polish",
    name: "Full Routine Polish",
    tagline: "A detailed look at your performance from beginning to end.",
    description: ["Our comprehensive critique is designed for coaches who want detailed feedback on their routine."],
    includes: [
      "Full routine review",
      "Technique",
      "Execution",
      "Timing",
      "Synchronization",
      "Formations",
      "Spacing",
      "Transitions",
      "Musicality",
      "Performance quality",
      "Energy",
      "Choreography",
      "Strengths",
      "Areas for improvement",
      "Specific corrections",
      "Practice priorities",
    ],
    idealFor: "Teams preparing for competition or coaches who want a comprehensive outside evaluation.",
    cta: "Get Your Full Critique",
    featured: true,
  },
  {
    slug: "coach-consultation",
    name: "Coach Consultation",
    tagline: "Sometimes you need to talk it through.",
    description: [
      "This option combines your video critique with a one-on-one consultation.",
      "We'll review your routine and discuss your questions, concerns and areas you'd like to improve.",
    ],
    includes: [
      "Video critique",
      "Personalized feedback",
      "One-on-one coach consultation",
      "Questions and discussion",
      "Practice recommendations",
      "Competition preparation discussion",
    ],
    idealFor:
      "Coaches who want detailed feedback and the opportunity to talk through their routine with another experienced coach.",
    cta: "Book a Consultation",
  },
]

export const danceCritique = {
  eyebrow: "Dance Critique",
  heading: "Your routine. A fresh set of eyes.",
  intro: "As a coach, you see your routine differently than anyone else.",
  lines: ["You've taught it.", "You've rehearsed it.", "You've cleaned it.", "You've watched it hundreds of times."],
  body: [
    "That familiarity is invaluable—but sometimes it also makes it harder to see the small details.",
    "A fresh perspective can help identify things that may be difficult to catch when you're standing in the middle of it.",
  ],
  detailsHeading: "We look at the details.",
  details: [
    { title: "Technique", body: "Are movements being executed with precision?" },
    { title: "Synchronization", body: "Is the team truly moving together?" },
    { title: "Timing", body: "Are movements hitting the music and each other together?" },
    { title: "Cleanliness", body: "Are small inconsistencies affecting the overall look?" },
    { title: "Formations", body: "Are spacing and lines creating the strongest visual presentation?" },
    { title: "Transitions", body: "Does the team maintain energy and purpose between sections?" },
    { title: "Musicality", body: "Are dancers responding to the music and emphasizing the choreography?" },
    { title: "Performance", body: "Are the dancers selling the routine from beginning to end?" },
    { title: "Overall Impact", body: "What stands out—and what could stand out more?" },
  ] satisfies TitledItem[],
}

export const forCoaches = {
  eyebrow: "For Coaches",
  heading: ["You don't need another person to tell you to “clean it.”", "You need someone to help you see what to clean."],
  lines: [
    "You already know your dancers.",
    "You know your choreography.",
    "You know how hard your team has worked.",
  ],
  body: [
    "Polish the Score gives you another perspective.",
    "Sometimes that perspective confirms what you already suspected.",
    "Sometimes it reveals something you didn't see.",
    "And sometimes one small correction can change the way an entire section looks.",
  ],
  close: "Let's find those details.",
}

export const about = {
  eyebrow: "About Polish the Score",
  heading: "Created by a coach. Built for competitive dance.",
  body: [
    "Polish the Score was created from a simple idea: sometimes coaches need another set of eyes.",
    "Competitive dance requires an incredible amount of time, dedication and attention to detail.",
    "Coaches are responsible for choreography, technique, cleaning, formations, music, costumes, practices, competition preparation and so much more.",
    "It's easy to become so close to a routine that certain details become difficult to see. That's where an outside perspective can help.",
    "Polish the Score provides coaches with honest, constructive and competition-focused feedback designed to help teams continue improving.",
  ],
  close: ["This isn't about tearing a routine apart.", "It's about finding the details that can make it better."],
}

export const philosophy = {
  eyebrow: "Our Philosophy",
  heading: "Every routine has something to polish.",
  maybes: [
    "Maybe it's technique.",
    "Maybe it's synchronization.",
    "Maybe it's performance quality.",
    "Maybe it's a transition.",
    "Maybe it's one section that isn't quite hitting the way you envisioned.",
  ],
  body: [
    "Improvement doesn't always require a complete overhaul.",
    "Sometimes it requires attention to the details.",
    "Small corrections can create a bigger overall impact.",
  ],
}

export const faqs: FAQItem[] = [
  {
    question: "Who is Polish the Score for?",
    answer:
      "Polish the Score is designed for competitive dance teams, dance studios, coaches and programs looking for an additional perspective on their performances.",
  },
  {
    question: "What kind of video should I submit?",
    answer:
      "A clear video showing the entire performance is preferred. The better we can see the dancers and formations, the more specific our feedback can be.",
  },
  {
    question: "Can you review a routine before competition?",
    answer:
      "Yes. Pre-competition critiques can help coaches identify areas to focus on before stepping onto the competition floor.",
  },
  {
    question: "Can you review a routine after competition?",
    answer: "Absolutely. A post-competition critique can help coaches identify areas to work on before the next event.",
  },
  {
    question: "Can we submit the same routine more than once?",
    answer:
      "Yes. Coaches can submit an updated performance after making corrections and receive feedback on the progress and remaining areas of improvement.",
  },
  {
    question: "Will you give us an official competition score?",
    answer:
      "No. Polish the Score provides independent critique and feedback. Our evaluations are not official competition scores or replacements for a competition judging panel.",
  },
  {
    question: "Is our video private?",
    answer:
      "Your submitted video and critique will be treated as private and will not be shared publicly without your permission.",
  },
  {
    question: "What if I'm not sure which service I need?",
    answer: "That's okay. Contact us and we'll help you determine which option best fits your team's needs.",
  },
]

export const finalCta = {
  heading: "Ready to polish your routine?",
  body: [
    "You've already put in the work.",
    "You've already spent the hours.",
    "Now let's find the details that can make your performance stronger.",
  ],
  steps: ["Submit your video.", "Get your feedback.", "Take it back to practice.", "Polish the score."],
}

export const disclaimer =
  "Polish the Score provides independent critique and feedback. Evaluations are not official competition scores."
