import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import TestimonialCard from "@/components/TestimonialCard";
import JsonLd from "@/components/JsonLd";
import { site, processSteps } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "About Lee Muthu | Founder of Muthu Creatives, Houston, TX",
  description:
    "Muthu Creatives is a founder-led web design studio in Houston. Lee Muthu studied Computer Science at the University of Houston and personally builds every project.",
  alternates: {
    canonical: "/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Muthu Creatives",
  url: `${site.url}/about`,
  mainEntity: {
    "@type": "Person",
    name: site.founder,
    jobTitle: "Founder",
    worksFor: { "@id": `${site.url}/#business` },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Houston",
    },
    knowsAbout: [
      "Web design",
      "Web development",
      "React",
      "TypeScript",
      "Workflow automation",
      "Conversion optimization",
    ],
  },
};

const stack = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "REST APIs",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />

      <PageHero
        eyebrow="About"
        title={
          <>
            Built on CS. <span className="text-flare">Scaled for business.</span>
          </>
        }
        lede="Muthu Creatives is a one-founder studio in Houston. Lee designs and builds every project himself, which is exactly why clients never get handed off, watered down or surprised."
      />

      <section className="bg-paper text-night">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
            <Reveal className="max-w-2xl space-y-5">
              <p className="text-base leading-relaxed">
                Lee studied Computer Science at the University of Houston. That
                background means your site gets engineered, not assembled from
                a theme. Clean code, fast loads and structure search engines
                can actually read aren’t upsells here. They’re just how the
                work gets done.
              </p>
              <p className="text-base leading-relaxed">
                But here’s the thing: most projects don’t fail on code. They
                fail because nobody asked the right questions first. What
                should this site make happen? Calls, bookings, orders? Who’s
                it for? What’s the one thing a visitor should do? We ask all
                of that up front, in plain English, so the thing that gets
                built is the thing your business needed.
              </p>
              <p className="text-base leading-relaxed">
                And we don’t hand off code and vanish. You own everything:
                domain, source, content. We stick around after launch for
                whatever comes next. The goal was never to ship a website.
                It’s to ship work that moves the needle.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-8 border-2 border-night bg-sand p-7">
                <figure>
                  <div className="relative aspect-square overflow-hidden border-2 border-night">
                    <Image
                      src="/about/lee-muthu.jpg"
                      alt="Lee Muthu, founder of Muthu Creatives, in Houston, TX"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-stone">
                    Lee Muthu. Founder, designer, developer.
                  </figcaption>
                </figure>
                <div>
                  <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-stone">
                    Studio facts
                  </h2>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-stone">Founder</dt>
                      <dd className="font-bold">{site.founder}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-stone">Based in</dt>
                      <dd className="font-bold">Houston, TX</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-stone">Serving</dt>
                      <dd className="font-bold">Clients nationwide</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-stone">Education</dt>
                      <dd className="text-right font-bold">
                        Computer Science, University of Houston
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-stone">
                    Tools of the trade
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-night/30 px-3 py-1 font-mono text-xs"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-process-heading" className="bg-night">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2
              id="about-process-heading"
              className="type-wide text-4xl font-black uppercase leading-none text-ink md:text-5xl"
            >
              How we work
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-mist">
              The same four steps on every project, whether it’s a one-page
              launch or a full web app.{" "}
              <Link
                href="/services"
                className="text-flare underline decoration-hairline underline-offset-4 hover:text-ink"
              >
                See what we build →
              </Link>
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.name}>
                <Reveal delay={index * 0.06} className="flex h-full flex-col">
                  <span
                    aria-hidden="true"
                    className="type-narrow text-7xl font-black leading-none text-ink/15"
                  >
                    {index + 1}
                  </span>
                  <h3 className="type-wide mt-3 border-t-2 border-flare pt-3 text-lg font-black uppercase text-ink">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="mt-20">
            <Reveal>
              <h2 className="type-wide text-4xl font-black uppercase leading-none text-ink md:text-5xl">
                From people who’ve hired us
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.author} delay={index * 0.08} className="h-full">
                  <TestimonialCard testimonial={testimonial} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Talk to the person who'll actually build it."
        subtitle="No account managers, no handoffs. Book a free 20-minute call with Lee and get straight answers about your project."
      />
    </>
  );
}
