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
    tagline: "One page. One job. Built to turn a visitor into a customer.",
    teaser:
      "A single focused page built around one goal. Usually live within a week.",
    metaTitle: "Landing Page Design & Development in Houston, TX",
    metaDescription:
      "Custom landing pages coded from scratch by Muthu Creatives in Houston. One page, one goal, no templates. Most projects launch within a week.",
    intro: [
      "A landing page has exactly one job. Maybe that's booking calls. Maybe it's selling one product or collecting emails for a launch. Whatever it is, every single element on the page either pushes toward that action or gets cut.",
      "We design and hand-code each page around your specific offer. No page builders, no themes, none of the bloat that comes with them. That's why our pages load in under a second and convert traffic your current site is wasting.",
    ],
    included: [
      {
        name: "Design built around your offer",
        detail:
          "Started from a blank file, shaped by what you sell and who's buying. Nobody else has this page.",
      },
      {
        name: "One clear call to action",
        detail:
          "The whole page funnels toward a single action. Visitors always know what to do next.",
      },
      {
        name: "Tested on real phones",
        detail:
          "Most of your traffic is mobile. We design for the phone first and check it on actual devices, not just a resized browser window.",
      },
      {
        name: "Code that loads instantly",
        detail:
          "Hand-written, lightweight and structured so search engines can actually read it.",
      },
      {
        name: "Tracking from day one",
        detail:
          "Analytics and conversion tracking wired up at launch, so you know exactly what the page is producing.",
      },
      {
        name: "Files that belong to you",
        detail:
          "You get the source code. Host it anywhere, change anything, owe nobody a monthly fee.",
      },
    ],
    forWho: [
      "A business launching a new offer or promotion",
      "Ad campaigns that deserve better than a generic homepage",
      "Consultants and creators who need one sharp page that sells",
      "Product launches, events and waitlists",
    ],
    processNotes: [
      {
        name: "Discovery",
        description:
          "We dig into your offer, your audience and the exact action you want visitors to take.",
      },
      {
        name: "Proposal",
        description:
          "Scope, timeline and price in writing, usually within a day of the call.",
      },
      {
        name: "Build",
        description:
          "You review the real page in your browser as it comes together. Revisions included.",
      },
      {
        name: "Launch",
        description:
          "Live on your domain with analytics hooked up. We stay available for tweaks after.",
      },
    ],
    timeline: "Most landing pages go live within a week of kickoff.",
    pricing:
      "Most landing pages land between $500 and $1,500, depending on scope and integrations. You'll have a fixed price in writing before anything starts.",
    faqs: [
      {
        question: "Is copywriting included?",
        answer:
          "Working copy is included. We write the page around your offer and tighten it with you. If you want long-form copy from a dedicated copywriter, we can add that on.",
      },
      {
        question: "Can I make changes after launch?",
        answer:
          "Yes. Every project includes a revision allowance, and if you'd rather have us handle changes long term, ongoing support is available.",
      },
      {
        question: "Can you use my existing domain?",
        answer:
          "Absolutely. We'll launch on the domain you have, or help you pick and register one if you're starting fresh.",
      },
      {
        question: "Where does the page get hosted?",
        answer:
          "Wherever you like. You own clean source files, and we'll set you up on fast, cheap hosting if you don't already have a preference.",
      },
    ],
    caseStudySlugs: ["flowline", "maya-voss"],
  },
  {
    slug: "business-websites",
    name: "Business Websites",
    shortName: "Business sites",
    tagline: "A proper website for a real business. Easy to find, easy to book.",
    teaser:
      "Multi-page custom sites for local businesses and brands that are tired of looking like a template.",
    metaTitle: "Custom Business Website Design in Houston, TX",
    metaDescription:
      "Multi-page business websites built from scratch by Muthu Creatives in Houston. Local SEO, booking integration, and code you own. No templates.",
    intro: [
      "Your website is the first employee most customers ever meet. If it loads slow, looks dated or hides the phone number, they hit back and call the next result on Google. You never even know you lost them.",
      "We build multi-page sites for local businesses that get the practical things right. Rank for the searches your customers actually type. Load instantly on a phone in a parking lot. Make booking or calling dead simple. And because it's custom-coded, it looks like your business, not like a theme forty other shops in Houston are also running.",
    ],
    included: [
      {
        name: "Every page designed for its job",
        detail:
          "Home, services, about, contact, plus whatever your business needs. No filler pages.",
      },
      {
        name: "Local search done properly",
        detail:
          "Structured data, clean markup and page titles that match what Houston customers actually search for.",
      },
      {
        name: "Booking and contact built in",
        detail:
          "Online booking, tap-to-call, reservation links and forms that land in your inbox.",
      },
      {
        name: "Phone-first design",
        detail:
          "Most local searches happen on a phone. Your site treats that as the main event, not an afterthought.",
      },
      {
        name: "Google Business Profile alignment",
        detail:
          "Hours, location and services kept consistent between your site and your listing. Local rankings depend on it.",
      },
      {
        name: "Full ownership",
        detail:
          "Your domain, your code, your content. No builder subscription holding your site hostage.",
      },
    ],
    forWho: [
      "Restaurants, salons and studios that live on bookings",
      "Contractors, clinics and firms competing in local search",
      "Established businesses stuck with a slow, dated site",
      "New businesses that want to look established from day one",
    ],
    processNotes: [
      {
        name: "Discovery",
        description:
          "We map out how customers find you, what they need to see, and what the site has to make happen.",
      },
      {
        name: "Proposal",
        description:
          "A page-by-page plan with a fixed scope, timeline and price.",
      },
      {
        name: "Build",
        description:
          "Built page by page with your feedback along the way. Revisions included.",
      },
      {
        name: "Launch",
        description:
          "Domain connected, old URLs redirected, Google notified. Support available after.",
      },
    ],
    timeline: "Most business sites take two to four weeks from kickoff to launch.",
    pricing:
      "Most business websites run between $1,500 and $5,000, depending on page count and integrations. Fixed price, in writing, before we start.",
    faqs: [
      {
        question: "Will I be able to update the site myself?",
        answer:
          "If you want to, yes. We can set up simple editing for menus, hours, photos and the like. Plenty of clients just text us the change instead. Both work.",
      },
      {
        question: "What about my existing content and photos?",
        answer:
          "We move over what's worth keeping and rewrite what isn't. And we'll tell you straight which is which.",
      },
      {
        question: "Will a new site hurt my Google rankings?",
        answer:
          "Not if it's done right. Every old URL gets redirected to its new home, so the ranking equity you've built carries over. A faster site with cleaner structure usually climbs, not falls.",
      },
      {
        question: "Do you only work with Houston businesses?",
        answer:
          "We're based in Houston and know the market, but we work with clients all over the country. Everything happens over calls and screen shares anyway.",
      },
    ],
    caseStudySlugs: ["maison-lumiere", "ember-rye"],
  },
  {
    slug: "web-apps",
    name: "Web Apps",
    shortName: "Web apps",
    tagline: "Software shaped around how your team actually works.",
    teaser:
      "Dashboards, portals, internal tools and MVPs. Built to fit your workflow, not the other way around.",
    metaTitle: "Custom Web App Development in Houston, TX",
    metaDescription:
      "Custom dashboards, client portals, internal tools and MVPs from Muthu Creatives in Houston. Built around your workflow, full source code included.",
    intro: [
      "Off-the-shelf software makes your team work its way. A custom web app works yours. The fields you actually use, the views your team actually needs, connected to the tools your data already lives in.",
      "We build focused, practical apps. Dashboards that replace the weekly spreadsheet ritual. Portals that end the email back-and-forth with clients. MVPs that let a founder test the idea without hiring a dev team.",
    ],
    included: [
      {
        name: "Built around your workflow",
        detail:
          "We map how work actually moves through your business before we design a single screen.",
      },
      {
        name: "An interface people just get",
        detail:
          "Clean enough that your team uses it without a training session or a manual.",
      },
      {
        name: "Plays nice with your tools",
        detail:
          "Connected to your CRM, spreadsheets, payment processor, wherever your data already lives.",
      },
      {
        name: "Works on every screen",
        detail: "The office desktop and the phone out in the field get the same care.",
      },
      {
        name: "Working software early",
        detail:
          "Staged builds with regular check-ins. You'll click through real screens, not slide decks.",
      },
      {
        name: "The code is yours",
        detail:
          "Full source delivered at handoff. Any developer can pick it up later. You're never stuck with us.",
      },
    ],
    forWho: [
      "Teams running the whole operation out of overgrown spreadsheets",
      "Businesses that need a portal, booking system or tracker",
      "Founders who need an MVP built fast to test an idea",
      "Anyone whose off-the-shelf software almost fits, but not quite",
    ],
    processNotes: [
      {
        name: "Discovery",
        description:
          "We get into the weeds on requirements and, more importantly, who uses this thing every day.",
      },
      {
        name: "Proposal",
        description:
          "Features, scope, timeline and price in writing. Including what we're deliberately leaving out of version one.",
      },
      {
        name: "Build",
        description:
          "Staged development with check-ins on working software as it grows.",
      },
      {
        name: "Launch",
        description: "Deployment, onboarding for your team, and full source code handoff.",
      },
    ],
    timeline:
      "A focused single-view tool can ship in about a week. A full dashboard with multiple views and integrations usually takes three to six weeks.",
    pricing:
      "Web apps typically start around $1,500 and range past $5,000 for bigger dashboards with integrations. Every proposal is a fixed price for a defined scope.",
    faqs: [
      {
        question: "What do you build with?",
        answer:
          "React and TypeScript on the front end, with REST APIs talking to wherever your data lives. Simple tools get simple architecture. We don't gold-plate.",
      },
      {
        question: "Can it connect to the software we already use?",
        answer:
          "Usually. If your tools have an API or an export, there's a path. We confirm what's possible during discovery, before you've committed a dollar.",
      },
      {
        question: "What if we need more features later?",
        answer:
          "Add them with us or with any developer you like. You own the source code, and it's written to be picked up.",
      },
      {
        question: "Do you build MVPs for startups?",
        answer:
          "All the time. It's some of our favorite work. We'll help you cut scope to the part that actually tests the idea, then build that fast.",
      },
    ],
    caseStudySlugs: ["apex-analytics", "flowforge"],
  },
  {
    slug: "automations",
    name: "Automations",
    shortName: "Automations",
    tagline: "The busywork your team does by hand? It can run itself.",
    teaser:
      "Connect your tools, kill the copy-paste, and get hours back every single week.",
    metaTitle: "Business Workflow Automation Services in Houston, TX",
    metaDescription:
      "Workflow automation for small businesses from Muthu Creatives in Houston. Connect your tools, end manual data entry, and win back hours every week.",
    intro: [
      "Somewhere in your business, right now, a person is copying data out of one system and pasting it into another. They did it yesterday. They'll do it tomorrow. That's not a job. That's a missing integration.",
      "We find the repetitive work hiding in your operation and make it run itself. Leads that route themselves, invoices that generate themselves, reports that build themselves overnight. One of our clients got three hours a day back from a single workflow.",
    ],
    included: [
      {
        name: "A workflow audit",
        detail:
          "We trace where the hours actually go and rank the automations by payback, not by novelty.",
      },
      {
        name: "The plumbing, built",
        detail:
          "Direct API connections where they exist, Zapier or Make where they fit, custom scripts where nothing else will do.",
      },
      {
        name: "Failures that speak up",
        detail:
          "Every workflow alerts you the moment something breaks. Silent failures corrupt data. Ours are loud.",
      },
      {
        name: "Documentation in plain English",
        detail:
          "Your team gets a readable rundown of every workflow: what runs, when, and why.",
      },
      {
        name: "Someone watching",
        detail:
          "Optional ongoing support to keep everything healthy as your tools and processes change.",
      },
    ],
    forWho: [
      "Ops teams drowning in copy-paste between systems",
      "Ecommerce stores syncing orders and inventory by hand",
      "Agencies with manual client onboarding checklists",
      "Any business where somebody updates the spreadsheet every morning",
    ],
    processNotes: [
      {
        name: "Discovery",
        description:
          "We walk through your process step by step and find where the hours are leaking.",
      },
      {
        name: "Proposal",
        description:
          "Which workflows to automate, in what order, at what fixed price. With the time savings estimated up front.",
      },
      {
        name: "Build",
        description:
          "Each workflow gets built and tested against real data before it touches your live operation.",
      },
      {
        name: "Launch",
        description:
          "Workflows go live one at a time, with monitoring on and documentation your team will actually read.",
      },
    ],
    timeline:
      "A single workflow often ships within days. Bigger multi-system projects usually take a week or two.",
    pricing:
      "Most automation projects fall between $500 and $2,500, depending on how many systems are involved. The proposal includes an estimate of hours saved, so you can do the math before spending anything.",
    faqs: [
      {
        question: "Which tools can you connect?",
        answer:
          "Most things a modern business runs on: CRMs, spreadsheets, email platforms, ecommerce systems, accounting software. If it has an API or lives in a browser, there's usually a way in.",
      },
      {
        question: "What happens when an automation breaks?",
        answer:
          "You hear about it immediately. Every workflow we ship includes error alerts, so a failure gets fixed the day it happens instead of discovered in a bad report a month later.",
      },
      {
        question: "Is this just Zapier?",
        answer:
          "Sometimes Zapier is the right tool and we'll say so. When workflows get complex or volume makes per-task pricing silly, custom scripts win. We recommend whatever fits your case, not whatever we feel like building.",
      },
      {
        question: "How do I know it's worth it?",
        answer:
          "The proposal estimates hours saved per week next to the price. If the automation won't pay for itself quickly, we'll tell you not to build it.",
      },
    ],
    caseStudySlugs: ["flowforge"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
