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
  accent: string;
  image: string;
  imageAlt: string;
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "flowline",
    name: "Flowline",
    industry: "SaaS · Workflow automation",
    serviceSlug: "landing-pages",
    summary:
      "A landing page for a workflow automation SaaS. Technical product, plain-English pitch, one call to action.",
    metaTitle: "Flowline: SaaS Landing Page Case Study",
    metaDescription:
      "How Muthu Creatives built and shipped a converting SaaS landing page for Flowline in 48 hours, with one CTA and sub-second load times.",
    challenge: [
      "Flowline automates operational workflows. Genuinely useful product, hard to explain in one sentence. Paid traffic was landing on a homepage full of feature lists, skimming for a few seconds, and leaving before understanding what the product would do for them.",
      "The brief was blunt: one page that makes a cold visitor get it in ten seconds and start a trial in under a minute. And the ad campaign was already scheduled, so the deadline was measured in hours.",
    ],
    approach: [
      {
        name: "Lead with the pain",
        detail:
          "The hero names the problem first: hours lost to manual busywork. Features show up later, each one framed as the fix for a specific headache.",
      },
      {
        name: "One CTA, repeated",
        detail:
          "Start free trial. That's the only action on the page. It shows up in the nav, after the hero, after the social proof, and at the close. Nothing else competes for the click.",
      },
      {
        name: "Proof right where doubt peaks",
        detail:
          "Customer logos and usage numbers sit directly above pricing, because that's the moment visitors hesitate.",
      },
      {
        name: "Built for paid traffic",
        detail:
          "Hand-coded and tiny. Visitors clicking a paid ad on a mid-tier phone see the page instantly instead of a spinner someone paid for.",
      },
    ],
    outcome: [
      "Designed, built and live in 48 hours, in time for the campaign. Every section maps to a step in the visitor's decision, and the page stays light enough to load in under a second on 4G.",
    ],
    stats: [
      { value: "48 hrs", label: "from kickoff to live" },
      { value: "1 CTA", label: "single conversion goal" },
      { value: "<1s", label: "load time on 4G" },
    ],
    quote: {
      text: "Turned it around in 48 hours and it looked better than sites we've paid ten times more for.",
      author: "Sarah R.",
      role: "Marketing Director, SaaS",
    },
    stack: ["HTML & CSS", "JavaScript", "Tailwind CSS"],
    accent: "#5B8DB8",
    image: "/work/flowline.png",
    imageAlt:
      "Flowline SaaS landing page hero built by Muthu Creatives, with a bold serif headline, a single call to action and review proof",
    featured: true,
  },
  {
    slug: "maison-lumiere",
    name: "Maison Lumière",
    industry: "Salon · Local business",
    serviceSlug: "business-websites",
    summary:
      "A salon site elegant enough to match the chairs, and smart enough to take bookings at 2am.",
    metaTitle: "Maison Lumière: Salon Website Case Study",
    metaDescription:
      "How Muthu Creatives rebuilt a salon website around bookings: two taps from any page to an appointment, services Google can read, and a mobile-first design.",
    challenge: [
      "Maison Lumière runs a premium salon experience. Their old website disagreed. Dated template, services trapped in a PDF price list, and no way to book without calling during business hours.",
      "Salon clients search at night, on their phones, ready to book right then. Every after-hours visitor who couldn't book became a client of whichever competitor let them.",
    ],
    approach: [
      {
        name: "Booking first, everything else second",
        detail:
          "A book-now action lives in the sticky header and closes every page. From anywhere on the site, a confirmed appointment is two taps away.",
      },
      {
        name: "A services menu that sells",
        detail:
          "The PDF price list became real pages. Each service has its description, duration and price, readable by search engines and skimmable on a phone.",
      },
      {
        name: "Design that matches the room",
        detail:
          "Warm palette, generous space, calm typography. Premium clients judge the chair by the website before they ever sit in it.",
      },
      {
        name: "Local search foundations",
        detail:
          "Structured data, consistent hours and location, and page titles that match how people actually search for salon services.",
      },
    ],
    outcome: [
      "The salon went from phone-only booking to taking appointments around the clock, with a services menu Google can finally read. And since nearly all salon traffic is mobile, the phone experience became the main event instead of an afterthought.",
    ],
    stats: [
      { value: "24/7", label: "booking, up from phone hours" },
      { value: "2 taps", label: "from any page to booked" },
      { value: "100%", label: "of services indexable" },
    ],
    stack: ["HTML & CSS", "JavaScript", "Tailwind CSS"],
    accent: "#B8926A",
    image: "/work/maison-lumiere.png",
    imageAlt:
      "Maison Lumière salon website built by Muthu Creatives, with an elegant serif hero and booking call to action next to salon photography",
    featured: true,
  },
  {
    slug: "ember-rye",
    name: "Ember & Rye",
    industry: "Restaurant · Local business",
    serviceSlug: "business-websites",
    summary:
      "A restaurant site built around the only two things diners do online: read the menu, book a table.",
    metaTitle: "Ember & Rye: Restaurant Website Case Study",
    metaDescription:
      "How Muthu Creatives rebuilt a restaurant website around menus and reservations, with an indexable HTML menu and one-tap booking.",
    challenge: [
      "Ember & Rye had the food and the room. Online, they had a slow template site with the menu scanned into a PDF. Invisible to Google, miserable to pinch-zoom on a phone.",
      "People visiting a restaurant website want two things: what's on the menu and how to get a table. The old site made both harder than just calling.",
    ],
    approach: [
      {
        name: "The menu as real text",
        detail:
          "Every dish, description and price became actual HTML. When someone nearby searches for a dish or a cuisine, the menu itself can rank.",
      },
      {
        name: "A table, one tap away",
        detail:
          "Reserve a table sits in the header and after every section, linked straight into the booking platform. No phone tag.",
      },
      {
        name: "Let the photography sell",
        detail:
          "The design stays dark and quiet so the food does the talking. Images are compressed and lazy-loaded, so the mood costs nothing in load time.",
      },
      {
        name: "Structured data for local search",
        detail:
          "Hours, cuisine, price range and location marked up properly. That's what feeds map results and the answers AI tools give when someone asks what's good nearby.",
      },
    ],
    outcome: [
      "Diners get the menu as fast, readable text on any phone, and a table is one tap from every page. Google finally sees the restaurant's actual offering instead of a scanned PDF.",
    ],
    stats: [
      { value: "1 tap", label: "from any page to a reservation" },
      { value: "0 PDFs", label: "the menu is real HTML" },
      { value: "<1s", label: "mobile load on 4G" },
    ],
    stack: ["HTML & CSS", "JavaScript", "Tailwind CSS"],
    accent: "#C96F3B",
    image: "/work/ember-rye.png",
    imageAlt:
      "Ember & Rye restaurant website built by Muthu Creatives, with a dark photography-led hero and a reservation call to action",
    featured: true,
  },
  {
    slug: "apex-analytics",
    name: "Apex Analytics",
    industry: "SaaS · Analytics dashboard",
    serviceSlug: "web-apps",
    summary:
      "A React dashboard that killed the weekly spreadsheet ritual and replaced it with live, role-based views.",
    metaTitle: "Apex Analytics: Dashboard Web App Case Study",
    metaDescription:
      "How Muthu Creatives built a custom React analytics dashboard with live data and role-based views, replacing manual weekly spreadsheet reports.",
    challenge: [
      "The team behind Apex Analytics assembled their weekly reporting by hand. Exports from three systems, pasted into spreadsheets, screenshotted into slide decks. The data existed. Seeing it was somebody's part-time job.",
      "They needed one live dashboard the whole team could check daily, without hiring a data engineer or paying for a six-figure BI platform.",
    ],
    approach: [
      {
        name: "Start from the questions",
        detail:
          "We listed the questions the team asked every week and designed one view per question. The data schema came second.",
      },
      {
        name: "Live data, not exports",
        detail:
          "REST integrations pull straight from the source systems, so the dashboard shows right now, not last Friday.",
      },
      {
        name: "Each role gets its own front door",
        detail:
          "Leadership sees trends and summaries. Operators see queues and detail. Same data underneath.",
      },
      {
        name: "Ship the core, then grow",
        detail:
          "Version one launched with the three views that mattered most. The delivered source code makes adding the rest straightforward.",
      },
    ],
    outcome: [
      "The weekly spreadsheet ritual is gone. Reporting that used to eat hours of manual assembly is now a URL the whole team checks in seconds, with numbers that are current instead of five days old.",
    ],
    stats: [
      { value: "3 systems", label: "unified in one dashboard" },
      { value: "0 exports", label: "weekly manual reports left" },
      { value: "100%", label: "source code handed over" },
    ],
    stack: ["React", "TypeScript", "REST APIs", "Tailwind CSS"],
    accent: "#4FA98C",
    image: "/work/apex-analytics.png",
    imageAlt:
      "Apex Analytics dashboard built by Muthu Creatives, showing live revenue charts, traffic sources and a transaction feed in a dark interface",
    featured: false,
  },
  {
    slug: "flowforge",
    name: "FlowForge",
    industry: "Operations · Automation tooling",
    serviceSlug: "web-apps",
    summary:
      "A visual workflow builder that lets a non-technical ops team automate their own processes. No code, no waiting on developers.",
    metaTitle: "FlowForge: Workflow Builder Web App Case Study",
    metaDescription:
      "How Muthu Creatives built FlowForge, a drag-and-drop workflow automation builder with run history and loud error alerts for a non-technical ops team.",
    challenge: [
      "An operations team was automating things the fragile way. Scripts only one person understood, spreadsheets glued together with hope, and hours of daily copy-paste wherever the glue didn't hold.",
      "They didn't need another script. They needed a tool that let the people who know the process automate the process, without a developer in the loop for every change.",
    ],
    approach: [
      {
        name: "A canvas instead of code",
        detail:
          "Drag-and-drop workflow building with plain-language steps. Triggers, conditions, actions. If you can describe the process, you can build it.",
      },
      {
        name: "Every run on the record",
        detail:
          "A run history shows each execution with its inputs and outcome. Did it work becomes a glance, not an investigation.",
      },
      {
        name: "Failures that announce themselves",
        detail:
          "When a step fails, the team gets told which step and why, immediately. No more silent breakage surfacing weeks later in bad data.",
      },
      {
        name: "Safe for non-developers",
        detail:
          "Test mode runs any workflow against sample data before it touches live systems. The whole team can experiment without fear.",
      },
    ],
    outcome: [
      "The team automated its own morning busywork. The repetitive data-moving that used to eat the first hours of every day now runs itself, and when something breaks, they know before it matters.",
    ],
    stats: [
      { value: "3 hrs/day", label: "of manual work gone" },
      { value: "0 code", label: "needed for a new workflow" },
      { value: "100%", label: "of runs logged" },
    ],
    quote: {
      text: "The automation saves our team 3 hours every day.",
      author: "Tom L.",
      role: "Operations Manager, Ecommerce",
    },
    stack: ["React", "TypeScript", "REST APIs", "Tailwind CSS"],
    accent: "#8B7BB8",
    image: "/work/flowforge.png",
    imageAlt:
      "FlowForge visual workflow builder built by Muthu Creatives, showing a drag-and-drop automation canvas with run history",
    featured: false,
  },
  {
    slug: "maya-voss",
    name: "Maya Voss",
    industry: "Creator · Personal brand",
    serviceSlug: "landing-pages",
    summary:
      "A link-in-bio page that turned a rented list of links into a home base with an email list attached.",
    metaTitle: "Maya Voss: Creator Landing Page Case Study",
    metaDescription:
      "How Muthu Creatives built a custom link-in-bio page for a creator, with her own branding, email capture and instant loads inside social apps.",
    challenge: [
      "Maya's audience lives on platforms she doesn't control, and her bio link pointed at a generic link list on someone else's domain. Off-brand, untracked, and quietly building an asset for the link-tool company instead of for her.",
      "She wanted one page that felt like her, pointed followers at whatever mattered this month, and turned passing traffic into an email list she actually owns.",
    ],
    approach: [
      {
        name: "A home base, not a link pile",
        detail:
          "One page on her own domain, in her own look and voice, with this month's priority always pinned to the top.",
      },
      {
        name: "Email capture built in",
        detail:
          "A low-friction signup sits mid-page, quietly converting borrowed platform traffic into an audience no algorithm can take away.",
      },
      {
        name: "Instant inside social apps",
        detail:
          "Essentially all her traffic comes through in-app browsers on phones. The page is a few kilobytes of hand-written code, so it loads before the spinner finishes.",
      },
      {
        name: "Easy to reshuffle",
        detail:
          "Links and featured content reorder in minutes, so the page keeps up with whatever she's promoting this week.",
      },
    ],
    outcome: [
      "Maya's bio link now points at a page she owns, on her domain, in her brand. Every visit either routes a follower somewhere useful or adds a subscriber to a list nobody can take from her.",
    ],
    stats: [
      { value: "<0.5s", label: "load inside in-app browsers" },
      { value: "1 page", label: "with one goal: own the audience" },
      { value: "100%", label: "her domain, her brand" },
    ],
    stack: ["HTML & CSS", "JavaScript", "Tailwind CSS"],
    accent: "#C77B9E",
    image: "/work/maya-voss.png",
    imageAlt:
      "Maya Voss link-in-bio page built by Muthu Creatives, showing a branded profile with featured links and audience stats",
    featured: false,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesForService(serviceSlug: string) {
  return caseStudies.filter((study) => study.serviceSlug === serviceSlug);
}
