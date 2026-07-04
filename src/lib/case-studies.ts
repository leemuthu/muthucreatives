export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  serviceSlug: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  challenge: string[];
  approach: { name: string; detail: string }[];
  outcome: string[];
  stats: { value: string; label: string }[];
  quote?: { text: string; author: string; role: string };
  stack: string[];
  cover: { from: string; to: string; glyph: string };
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "flowline",
    name: "Flowline",
    industry: "SaaS · Workflow automation",
    serviceSlug: "landing-pages",
    summary:
      "A conversion-focused landing page for a workflow automation SaaS — technical product, plain-English pitch, one CTA.",
    metaTitle: "Flowline — SaaS Landing Page Case Study",
    metaDescription:
      "How Muthu Creatives built a high-converting SaaS landing page for Flowline in 48 hours — plain-English positioning, single CTA, sub-second load.",
    challenge: [
      "Flowline automates operational workflows — a genuinely useful product that's hard to explain in a sentence. Paid traffic was landing on a feature-list homepage, skimming, and bouncing before understanding what the product actually did for them.",
      "The brief: one page that makes a cold visitor understand the product in ten seconds and start a trial in under a minute — on a tight launch deadline ahead of a campaign.",
    ],
    approach: [
      {
        name: "Lead with the pain, not the platform",
        detail:
          "The hero names the problem — hours lost to manual busywork — before it names a single feature. Features appear later, each framed as the answer to a specific operational headache.",
      },
      {
        name: "One CTA, repeated",
        detail:
          "'Start free trial' is the only action on the page. It appears in the nav, after the hero, after social proof, and at the close — no competing links to leak clicks.",
      },
      {
        name: "Proof where doubt peaks",
        detail:
          "Customer logos and usage numbers sit directly before the pricing section, where hesitation is highest.",
      },
      {
        name: "Built for the ad campaign, not just the brand",
        detail:
          "Hand-coded and lightweight, so paid-traffic visitors on mid-tier phones see the page instantly instead of a spinner they paid for per click.",
      },
    ],
    outcome: [
      "The page was designed, built, and live in 48 hours — in time for the campaign. Every section maps to a step in the visitor's decision, and page weight stayed low enough for sub-second loads on 4G.",
    ],
    stats: [
      { value: "48 hrs", label: "from kickoff to live" },
      { value: "1 CTA", label: "single conversion goal" },
      { value: "<1s", label: "largest contentful paint" },
    ],
    quote: {
      text: "Turned it around in 48 hours and it looked better than sites we've paid ten times more for.",
      author: "Sarah R.",
      role: "Marketing Director, SaaS",
    },
    stack: ["HTML & CSS", "JavaScript", "Tailwind CSS"],
    cover: { from: "#1c2733", to: "#131313", glyph: "FL" },
    featured: true,
  },
  {
    slug: "maison-lumiere",
    name: "Maison Lumière",
    industry: "Salon · Local business",
    serviceSlug: "business-websites",
    summary:
      "An elegant multi-page site for a salon that needed its web presence to match its chairs — and take bookings while it sleeps.",
    metaTitle: "Maison Lumière — Salon Website Case Study",
    metaDescription:
      "How Muthu Creatives rebuilt a salon's web presence — booking-first structure, mobile-first design, and local SEO foundations that match how clients actually search.",
    challenge: [
      "Maison Lumière runs a premium salon experience, but its old website said otherwise: a dated template, services buried in a PDF price list, and no way to book without calling during business hours.",
      "Salon clients search on their phones, usually at night, usually ready to book right then. Every after-hours visitor who couldn't book was a client for whichever competitor let them.",
    ],
    approach: [
      {
        name: "Booking-first architecture",
        detail:
          "A 'Book now' action lives in the sticky header and closes every page. The path from any page to a confirmed appointment is never more than two taps.",
      },
      {
        name: "A services menu that sells",
        detail:
          "The PDF price list became structured, indexable pages — each service with its description, duration, and price, findable by search engines and skimmable on a phone.",
      },
      {
        name: "Design that matches the room",
        detail:
          "Warm palette, generous whitespace, and typography that carries the same calm the salon does. Premium clients judge the chair by the website.",
      },
      {
        name: "Local search foundations",
        detail:
          "Local business schema, location and hours consistent with the Google Business Profile, and page titles matched to how people actually search for salon services.",
      },
    ],
    outcome: [
      "The salon went from a phone-only booking flow to a site that takes appointments around the clock, with a services menu search engines can finally read. Mobile experience — where nearly all salon traffic lives — became the design's center of gravity instead of an afterthought.",
    ],
    stats: [
      { value: "24/7", label: "booking, up from phone-hours only" },
      { value: "2 taps", label: "from any page to booking" },
      { value: "100%", label: "of services indexable, up from a PDF" },
    ],
    stack: ["HTML & CSS", "JavaScript", "Tailwind CSS"],
    cover: { from: "#2e2420", to: "#131313", glyph: "ML" },
    featured: true,
  },
  {
    slug: "ember-rye",
    name: "Ember & Rye",
    industry: "Restaurant · Local business",
    serviceSlug: "business-websites",
    summary:
      "A restaurant site built around the two things diners actually do online: read the menu and book a table.",
    metaTitle: "Ember & Rye — Restaurant Website Case Study",
    metaDescription:
      "How Muthu Creatives built a restaurant website around menus and reservations — indexable HTML menu, one-tap booking, and structured data for local search.",
    challenge: [
      "Ember & Rye had the food and the room, but online it had a slow template site with the menu trapped in a PDF scan — invisible to Google, painful to pinch-zoom on a phone.",
      "Restaurant visitors want exactly two things: what's on the menu, and how to get a table. The old site made both harder than calling.",
    ],
    approach: [
      {
        name: "The menu as real HTML",
        detail:
          "Every dish, description, and price became structured, indexable text. When someone searches a dish or cuisine nearby, the menu itself can now rank.",
      },
      {
        name: "Reservations one tap away",
        detail:
          "A persistent 'Reserve a table' action in the header and after every section, linked straight into the booking platform — no phone tag.",
      },
      {
        name: "Photography does the selling",
        detail:
          "The design stays dark and quiet so the food photography carries the atmosphere. Images are compressed and lazy-loaded, so the mood doesn't cost the load time.",
      },
      {
        name: "Structured data for local search",
        detail:
          "Restaurant schema with hours, cuisine, price range, and location — the details that feed map results and AI answers when someone asks what's good nearby.",
      },
    ],
    outcome: [
      "Diners now get the menu as fast, readable text on any phone, and a table is one tap from every page. Search engines finally see the restaurant's actual offering instead of a PDF blob.",
    ],
    stats: [
      { value: "1 tap", label: "from any page to a reservation" },
      { value: "0 PDFs", label: "menu is fully indexable HTML" },
      { value: "<1s", label: "mobile load on 4G" },
    ],
    stack: ["HTML & CSS", "JavaScript", "Tailwind CSS"],
    cover: { from: "#33241c", to: "#131313", glyph: "E&R" },
    featured: true,
  },
  {
    slug: "apex-analytics",
    name: "Apex Analytics",
    industry: "SaaS · Analytics dashboard",
    serviceSlug: "web-apps",
    summary:
      "A React analytics dashboard that replaced a weekly ritual of spreadsheet exports with live, role-based views.",
    metaTitle: "Apex Analytics — Dashboard Web App Case Study",
    metaDescription:
      "How Muthu Creatives built a custom React analytics dashboard — live data views, role-based access, and REST API integration replacing manual spreadsheet reports.",
    challenge: [
      "The team behind Apex Analytics was assembling its weekly reporting by hand: exports from three systems, pasted into spreadsheets, screenshotted into slide decks. The data existed; seeing it was the job.",
      "They needed a live dashboard their whole team could check daily — without a data engineering hire or a six-figure BI platform.",
    ],
    approach: [
      {
        name: "Design from the questions backward",
        detail:
          "We started from the questions the team asked every week — not from the data schema — and designed one view per question.",
      },
      {
        name: "Live data over exports",
        detail:
          "REST API integrations pull from the source systems on load, so the dashboard shows now, not last Friday's export.",
      },
      {
        name: "Role-based views",
        detail:
          "Leadership sees trends and summaries; operators see queues and detail. Same data, each role gets its own front door.",
      },
      {
        name: "Ship the core, then extend",
        detail:
          "Version one shipped with the three views that mattered most. The architecture — and the delivered source code — made later additions straightforward.",
      },
    ],
    outcome: [
      "The weekly spreadsheet ritual is gone. Reporting that consumed hours of manual assembly became a URL the whole team checks in seconds, with numbers that are current instead of days old.",
    ],
    stats: [
      { value: "3 systems", label: "unified into one live dashboard" },
      { value: "0 exports", label: "manual weekly reports eliminated" },
      { value: "100%", label: "source code delivered to the client" },
    ],
    stack: ["React", "TypeScript", "REST APIs", "Tailwind CSS"],
    cover: { from: "#1e2a26", to: "#131313", glyph: "AA" },
    featured: false,
  },
  {
    slug: "flowforge",
    name: "FlowForge",
    industry: "Operations · Automation tooling",
    serviceSlug: "web-apps",
    summary:
      "A visual workflow builder that lets a non-technical operations team automate processes without writing code.",
    metaTitle: "FlowForge — Workflow Builder Web App Case Study",
    metaDescription:
      "How Muthu Creatives built FlowForge, a visual workflow automation builder — drag-and-drop canvas, run history, and error alerts for a non-technical ops team.",
    challenge: [
      "An operations team was automating processes the fragile way: scripts only one person understood, spreadsheets glued together with hope, and hours of daily copy-paste where the glue didn't hold.",
      "They didn't need another script. They needed a tool that let the team see, build, and fix its own workflows — without a developer in the loop for every change.",
    ],
    approach: [
      {
        name: "A canvas instead of code",
        detail:
          "Drag-and-drop workflow building with plain-language steps — triggers, conditions, actions — so the people who know the process can automate the process.",
      },
      {
        name: "Every run visible",
        detail:
          "A run history shows each workflow execution with its inputs and outcome, so 'did it work?' is a glance, not an investigation.",
      },
      {
        name: "Failures that announce themselves",
        detail:
          "When a step fails, the team gets alerted with the exact step and reason — no more silent breakage discovered a week later in bad data.",
      },
      {
        name: "Guardrails for non-developers",
        detail:
          "Test mode runs workflows against sample data before they touch live systems, making the tool safe to hand to the whole team.",
      },
    ],
    outcome: [
      "The team automated its own daily busywork — the repetitive data movement that used to eat the morning now runs itself, with failures surfacing immediately instead of silently.",
    ],
    stats: [
      { value: "3 hrs/day", label: "of manual work eliminated" },
      { value: "0 code", label: "needed to build a new workflow" },
      { value: "100%", label: "of runs logged and inspectable" },
    ],
    quote: {
      text: "The automation saves our team 3 hours every day.",
      author: "Tom L.",
      role: "Operations Manager, Ecommerce",
    },
    stack: ["React", "TypeScript", "REST APIs", "Tailwind CSS"],
    cover: { from: "#292331", to: "#131313", glyph: "FF" },
    featured: false,
  },
  {
    slug: "maya-voss",
    name: "Maya Voss",
    industry: "Creator · Personal brand",
    serviceSlug: "landing-pages",
    summary:
      "A branded link-in-bio page that turned a list of links into a home base — with an email list attached.",
    metaTitle: "Maya Voss — Creator Landing Page Case Study",
    metaDescription:
      "How Muthu Creatives built a custom link-in-bio landing page for a creator — branded design, email capture, and instant load replacing a generic link list.",
    challenge: [
      "Maya's audience lived on platforms she didn't control, and her link-in-bio was a generic list on someone else's domain — off-brand, untracked, and building an asset for the platform instead of for her.",
      "She needed one page that felt like her brand, routed followers to what mattered this month, and quietly converted passing traffic into an email list she owns.",
    ],
    approach: [
      {
        name: "A home base, not a link pile",
        detail:
          "One branded page on her own domain — her look, her voice — with the current priority (launch, video, collab) always at the top.",
      },
      {
        name: "Email capture built in",
        detail:
          "A low-friction email signup sits mid-page, converting borrowed platform traffic into an audience no algorithm can take away.",
      },
      {
        name: "Instant on mobile",
        detail:
          "Effectively all traffic comes from social apps on phones. The page is a few kilobytes of hand-written code — it loads before the in-app browser finishes its spinner.",
      },
      {
        name: "Editable priorities",
        detail:
          "Links and featured content are simple to reorder, so the page tracks whatever she's promoting this week.",
      },
    ],
    outcome: [
      "Maya's bio link now points to a page she owns, on her domain, in her brand — building her email list with every visit instead of advertising a link-tool startup.",
    ],
    stats: [
      { value: "<0.5s", label: "load inside in-app browsers" },
      { value: "1 page", label: "one goal: own the audience" },
      { value: "100%", label: "on her own domain and brand" },
    ],
    stack: ["HTML & CSS", "JavaScript", "Tailwind CSS"],
    cover: { from: "#2f2029", to: "#131313", glyph: "MV" },
    featured: false,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesForService(serviceSlug: string) {
  return caseStudies.filter((study) => study.serviceSlug === serviceSlug);
}
