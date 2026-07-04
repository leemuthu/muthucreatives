export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  teaser: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  included: { name: string; detail: string }[];
  forWho: string[];
  processNotes: { name: string; description: string }[];
  timeline: string;
  pricing: string;
  faqs: { question: string; answer: string }[];
  caseStudySlugs: string[];
};

export const services: Service[] = [
  {
    slug: "landing-pages",
    name: "Landing Pages",
    shortName: "Landing pages",
    tagline: "A single, focused page designed to do one job: turn a visitor into a lead or customer.",
    teaser:
      "Focused, high-converting pages built around a single goal. Fast to launch, built to perform.",
    metaTitle: "Landing Page Design & Development in Houston, TX",
    metaDescription:
      "Custom landing pages built to convert — one page, one goal, no templates. Designed and coded by Muthu Creatives in Houston, TX. Most launch within a week.",
    intro: [
      "A landing page has one job. Whether that's booking calls, capturing emails, or selling a single offer, every element on the page either moves a visitor toward that action or it gets cut.",
      "We design and hand-code each page around your specific offer and audience — no page builders, no themes. That's why they load fast, rank well, and convert better than the template sites your competitors are running.",
    ],
    included: [
      {
        name: "Custom design tailored to your brand",
        detail:
          "Designed from scratch around your offer and audience — never adapted from a template.",
      },
      {
        name: "One clear call to action",
        detail:
          "The page is structured around a single goal, with copy and layout that guide every visitor toward it.",
      },
      {
        name: "Fully responsive layout",
        detail:
          "Tested on real phones, tablets, and desktops — most of your traffic is mobile, so mobile comes first.",
      },
      {
        name: "Fast, SEO-friendly code",
        detail:
          "Hand-written, semantic HTML that loads in under a second and gives search engines real content to index.",
      },
      {
        name: "Analytics ready",
        detail:
          "Conversion tracking wired up at launch so you can see exactly what the page is producing.",
      },
      {
        name: "Clean source files",
        detail:
          "You own the code outright and can host it anywhere. No platform lock-in, no monthly builder fees.",
      },
    ],
    forWho: [
      "A business launching a new offer or promotion",
      "Ad campaigns that need a dedicated page instead of a generic homepage",
      "Creators and consultants who need one sharp page that sells",
      "Events, waitlists, and product launches",
    ],
    processNotes: [
      {
        name: "Discovery",
        description:
          "We learn your offer, your audience, and the exact action you want visitors to take.",
      },
      {
        name: "Proposal",
        description: "Scope, timeline, and price in writing — usually within a day of our call.",
      },
      {
        name: "Build",
        description:
          "Design and build with revisions included. You see the real page in the browser, not mockups.",
      },
      {
        name: "Launch",
        description:
          "We go live on your domain, hook up analytics, and stay available for post-launch tweaks.",
      },
    ],
    timeline: "Most landing pages launch within one week of kickoff.",
    pricing:
      "Most landing page projects fall between $500 and $1,500 depending on scope, copy needs, and integrations. You get a fixed price in writing before we start.",
    faqs: [
      {
        question: "Is copywriting included?",
        answer:
          "Working copy is included — we structure and write the page around your offer. Professional long-form copywriting is available as an add-on if you need it.",
      },
      {
        question: "Can I make changes after launch?",
        answer:
          "Yes. Every project includes a revision allowance, and we offer ongoing support if you want changes handled for you after launch.",
      },
      {
        question: "Can you work with my existing domain?",
        answer:
          "Yes. We launch on your existing domain, or help you register one if you're starting fresh.",
      },
      {
        question: "Where will the page be hosted?",
        answer:
          "Anywhere you like. We deliver clean source files and can advise on the best setup — most clients end up on fast, low-cost hosting we configure for them.",
      },
    ],
    caseStudySlugs: ["flowline", "maya-voss"],
  },
  {
    slug: "business-websites",
    name: "Business Websites",
    shortName: "Business sites",
    tagline: "Custom multi-page websites for local businesses, service providers, and brands ready to grow.",
    teaser:
      "Custom multi-page websites for local businesses, service providers, and brands ready to grow.",
    metaTitle: "Custom Business Website Design in Houston, TX",
    metaDescription:
      "Multi-page business websites custom-built for local businesses and service providers — local SEO, booking integration, no templates. Muthu Creatives, Houston, TX.",
    intro: [
      "Your website is the first employee most customers meet. If it looks dated, loads slowly, or buries the phone number, they call the next result on Google instead.",
      "We build multi-page sites for local businesses that do the practical things well: rank for local searches, load instantly on a phone in a parking lot, and make it effortless to book, call, or find you. Custom-coded, so it looks like your business — not a theme forty other businesses in Houston are also using.",
    ],
    included: [
      {
        name: "Custom multi-page design",
        detail:
          "Home, services, about, contact, and whatever your business needs — each page designed for its job.",
      },
      {
        name: "Local SEO foundations",
        detail:
          "Semantic structure, local business schema, and page-level metadata so you show up when Houston customers search for what you do.",
      },
      {
        name: "Booking and contact integration",
        detail:
          "Online booking, reservation links, tap-to-call, and contact forms wired to your inbox.",
      },
      {
        name: "Mobile-first build",
        detail:
          "Most local searches happen on phones. Your site is designed for that reality first, desktop second.",
      },
      {
        name: "Google Business Profile alignment",
        detail:
          "Hours, location, and services consistent across your site and Google listing — the details local rankings depend on.",
      },
      {
        name: "Full ownership",
        detail: "Your domain, your code, your content. No builder subscriptions holding your site hostage.",
      },
    ],
    forWho: [
      "Restaurants, salons, and studios that live on bookings and reservations",
      "Contractors, clinics, and professional services competing in local search",
      "Established businesses replacing a dated or slow website",
      "New businesses that want to look established from day one",
    ],
    processNotes: [
      {
        name: "Discovery",
        description:
          "We map how customers actually find and choose you, and what the site needs to do about it.",
      },
      {
        name: "Proposal",
        description:
          "A page-by-page plan with fixed scope, timeline, and price in writing.",
      },
      {
        name: "Build",
        description:
          "We design and build page by page with your feedback at each stage. Revisions included.",
      },
      {
        name: "Launch",
        description:
          "Domain connected, redirects handled, Google indexing submitted. Ongoing support available.",
      },
    ],
    timeline: "Most business websites take two to four weeks from kickoff to launch.",
    pricing:
      "Most business website projects fall between $1,500 and $5,000 depending on page count and integrations. Fixed price in writing before we start.",
    faqs: [
      {
        question: "Will I be able to update the site myself?",
        answer:
          "If you want to, yes — we can set up simple editing for things like menus, hours, and photos. Many clients prefer to send us changes instead; either works.",
      },
      {
        question: "Do you handle my existing content and photos?",
        answer:
          "Yes. We migrate what's worth keeping, rewrite what isn't, and tell you honestly which is which.",
      },
      {
        question: "What happens to my Google rankings when the new site launches?",
        answer:
          "We map every old URL to its new home with proper redirects so you keep the ranking equity you've built. Done right, a faster, better-structured site improves rankings rather than risking them.",
      },
      {
        question: "Do you only work with Houston businesses?",
        answer:
          "We're based in Houston, TX and know the local market well, but we build for clients nationwide. Everything happens over calls and screen-shares either way.",
      },
    ],
    caseStudySlugs: ["maison-lumiere", "ember-rye"],
  },
  {
    slug: "web-apps",
    name: "Web Apps",
    shortName: "Web apps",
    tagline: "An interactive tool built around your process — not a static page people just read.",
    teaser:
      "Dashboards, client portals, internal tools, and MVPs built to your exact workflow.",
    metaTitle: "Custom Web App Development in Houston, TX",
    metaDescription:
      "Dashboards, client portals, internal tools, and MVPs — custom web apps built around your workflow by Muthu Creatives in Houston, TX. Full source code included.",
    intro: [
      "Off-the-shelf software makes your team work its way. A custom web app works yours — the fields you actually use, the views your team actually needs, connected to the tools you already run.",
      "We build focused, practical web apps: dashboards that replace spreadsheet chaos, portals that stop the email back-and-forth with clients, and MVPs that let founders test an idea without hiring a dev team.",
    ],
    included: [
      {
        name: "Interface built around your workflow",
        detail:
          "We map how the work actually flows through your business before designing a single screen.",
      },
      {
        name: "Clean, modern UI",
        detail:
          "Easy enough that your team and customers use it without training or a manual.",
      },
      {
        name: "Integrations with your existing tools",
        detail:
          "Connected to your CRM, spreadsheets, payment processor, or whatever your data already lives in.",
      },
      {
        name: "Responsive across devices",
        detail: "Works on the office desktop and the phone in the field.",
      },
      {
        name: "Staged development with check-ins",
        detail:
          "You see working software early and often — no six-month black box.",
      },
      {
        name: "Full source code delivered",
        detail:
          "The code is yours. Any developer can pick it up later; you're never locked to us.",
      },
    ],
    forWho: [
      "Teams running their operations out of overgrown spreadsheets",
      "Businesses that need a client portal, booking system, or inventory tracker",
      "Founders who need an MVP built fast to validate an idea",
      "Companies whose off-the-shelf software almost fits, but not quite",
    ],
    processNotes: [
      {
        name: "Discovery",
        description:
          "We dig into the app's requirements and who will actually use it day to day.",
      },
      {
        name: "Proposal",
        description:
          "Features, scope, timeline, and plan in writing — including what we're deliberately leaving out of version one.",
      },
      {
        name: "Build",
        description:
          "Staged development with regular check-ins on working software, not slide decks.",
      },
      {
        name: "Launch",
        description: "Deployment, team onboarding, and full source code handoff.",
      },
    ],
    timeline:
      "A focused single-view tool can ship in about a week. A full dashboard with multiple views and integrations typically takes three to six weeks.",
    pricing:
      "Web app projects typically start around $1,500 and range to $5,000+ for multi-view dashboards with integrations. Every proposal is a fixed price for a defined scope.",
    faqs: [
      {
        question: "What technology do you build with?",
        answer:
          "React and TypeScript on the front end, with REST APIs to whatever your data lives in. We choose the stack for the project's complexity — a simple tool doesn't get a complicated architecture.",
      },
      {
        question: "Can it connect to the software we already use?",
        answer:
          "Usually, yes. If your existing tools have an API or export, we can integrate with them. We confirm feasibility during discovery, before you commit to anything.",
      },
      {
        question: "What if we need new features later?",
        answer:
          "The app is built to grow, and you own the source code. Add features with us or with any developer you choose.",
      },
      {
        question: "Do you build MVPs for startups?",
        answer:
          "Yes — it's some of our favorite work. We help you cut scope to what actually tests the idea, then build that version fast.",
      },
    ],
    caseStudySlugs: ["apex-analytics", "flowforge"],
  },
  {
    slug: "automations",
    name: "Automations",
    shortName: "Automations",
    tagline: "Connect your tools, eliminate manual tasks, and build workflows that run themselves.",
    teaser:
      "Connect your tools, eliminate manual tasks, and build workflows that run themselves.",
    metaTitle: "Business Workflow Automation Services in Houston, TX",
    metaDescription:
      "Workflow automation for small businesses — connect your tools, eliminate manual data entry, and reclaim hours every week. Muthu Creatives, Houston, TX.",
    intro: [
      "Somewhere in your business, a person is copying data from one system into another. Every day. That's not a job — that's a missing integration.",
      "We find the repetitive work in your operation and make it run itself: leads that route themselves, invoices that generate themselves, reports that build themselves. One client's team got three hours a day back from a single automation.",
    ],
    included: [
      {
        name: "Workflow audit",
        detail:
          "We map where time actually goes in your operation and identify the automations with real payback.",
      },
      {
        name: "Integration builds",
        detail:
          "Your tools connected directly — through their APIs, or platforms like Zapier and Make where they fit, or custom scripts where they don't.",
      },
      {
        name: "Error handling and alerts",
        detail:
          "Automations that fail loudly instead of silently — you know immediately if something needs attention.",
      },
      {
        name: "Documentation and handoff",
        detail:
          "Plain-English documentation of every workflow, so your team understands what runs and why.",
      },
      {
        name: "Monitoring and support",
        detail:
          "Optional ongoing support to keep workflows healthy as your tools and processes change.",
      },
    ],
    forWho: [
      "Operations teams drowning in copy-paste between systems",
      "Ecommerce businesses syncing orders, inventory, and shipping by hand",
      "Agencies and service businesses with manual client onboarding",
      "Any business where 'someone updates the spreadsheet' is a daily ritual",
    ],
    processNotes: [
      {
        name: "Discovery",
        description:
          "We walk through your current process step by step and find where the hours are leaking.",
      },
      {
        name: "Proposal",
        description:
          "Which workflows to automate, in what order, at what fixed price — with the time savings estimated up front.",
      },
      {
        name: "Build",
        description:
          "We build and test each workflow against real data before it touches your live operation.",
      },
      {
        name: "Launch",
        description:
          "Workflows go live one at a time with monitoring in place, plus documentation your team can actually read.",
      },
    ],
    timeline:
      "Single-workflow automations often ship within days. Larger multi-system projects typically take one to two weeks.",
    pricing:
      "Most automation projects fall between $500 and $2,500 depending on how many systems are involved. The proposal includes an estimate of hours saved, so the math is clear before you spend a dollar.",
    faqs: [
      {
        question: "Which tools can you connect?",
        answer:
          "Most modern business tools — CRMs, spreadsheets, email platforms, ecommerce systems, accounting software. If it has an API or lives in a browser, there's usually a way.",
      },
      {
        question: "What happens if an automation breaks?",
        answer:
          "Every workflow we build includes error alerts, so failures surface immediately instead of silently corrupting data. With ongoing support, we fix issues before they cost you anything.",
      },
      {
        question: "Is this Zapier, or custom code?",
        answer:
          "Whichever genuinely fits. Platforms like Zapier and Make are great for standard connections; custom scripts win when workflows are complex or volume makes per-task pricing expensive. We recommend based on your case, not our preference.",
      },
      {
        question: "How do I know it's worth the cost?",
        answer:
          "The proposal estimates the hours saved per week. If the automation doesn't pay for itself quickly, we'll tell you not to build it.",
      },
    ],
    caseStudySlugs: ["flowforge"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
