import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import TestimonialCard from "@/components/TestimonialCard";
import JsonLd from "@/components/JsonLd";
import { site, processSteps } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "About Lee Muthu — Founder of Muthu Creatives, Houston, TX",
  description:
    "Muthu Creatives is a founder-led web design studio in Houston, TX. Lee Muthu studied Computer Science at the University of Houston and builds every project personally.",
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
            Built on CS. <em className="text-brass">Scaled</em> for business.
          </>
        }
        lede="Muthu Creatives is a founder-led studio in Houston, TX. Lee Muthu designs and builds every project personally — which is exactly why clients don't get handed off, watered down, or surprised."
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <Reveal className="max-w-2xl space-y-5">
            <p className="text-base leading-relaxed text-muted">
              Lee studied Computer Science at the University of Houston — the
              kind of background that means your site isn&apos;t assembled from
              a template, it&apos;s engineered. Clean code, fast load times,
              and structure that search engines actually understand aren&apos;t
              add-ons here; they&apos;re just how the work gets done.
            </p>
            <p className="text-base leading-relaxed text-muted">
              But most projects don&apos;t fail on code. They fail because
              nobody asked the right questions before building. What should
              this site make happen — calls, bookings, orders? Who is it for?
              What&apos;s the one action a visitor should take? We ask those
              questions up front, in plain English, so the thing we build is
              the thing your business needed.
            </p>
            <p className="text-base leading-relaxed text-muted">
              And we don&apos;t hand off code and disappear. You own everything
              we build — domain, source, content — and we&apos;re available
              after launch for whatever comes next. The goal has never been to
              ship a website. It&apos;s to deliver work that moves the needle.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8 border border-line bg-surface p-7">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                  Studio facts
                </h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Founder</dt>
                    <dd className="text-ink">{site.founder}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Based in</dt>
                    <dd className="text-ink">Houston, TX</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Serving</dt>
                    <dd className="text-ink">Clients nationwide</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Education</dt>
                    <dd className="text-right text-ink">
                      Computer Science, University of Houston
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                  Tools of the trade
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-line px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <section aria-labelledby="about-process-heading" className="mt-20">
          <Reveal>
            <h2
              id="about-process-heading"
              className="font-display text-3xl text-ink md:text-4xl"
            >
              How we work
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              The same four steps on every project, whether it&apos;s a
              one-page launch or a full web app.{" "}
              <Link
                href="/services"
                className="text-brass underline decoration-line underline-offset-4 hover:text-ink"
              >
                See what we build →
              </Link>
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.name}>
                <Reveal
                  delay={index * 0.06}
                  className="flex h-full flex-col gap-3 border-t border-brass/40 pt-5"
                >
                  <span className="font-mono text-xs tracking-widest text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-ink">{step.name}</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="about-testimonials-heading" className="mt-20">
          <Reveal>
            <h2
              id="about-testimonials-heading"
              className="font-display text-3xl text-ink md:text-4xl"
            >
              From the people who&apos;ve hired us
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 0.08} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <CtaBanner
        title="Talk to the person who'll actually build it."
        subtitle="No account managers, no handoffs. Book a free 20-minute call with Lee and get straight answers about your project."
      />
    </>
  );
}
