import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import BookCallButton from "@/components/BookCallButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Book a Free Call | Web Design in Houston, TX",
  description:
    "Book a free 20-minute call with Muthu Creatives or send a project brief. Custom websites, web apps, and automations — Houston, TX, serving clients nationwide.",
  alternates: {
    canonical: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Muthu Creatives",
  url: `${site.url}/contact`,
  about: { "@id": `${site.url}/#business` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start with a <em className="text-brass">conversation</em>.
          </>
        }
        lede="The fastest route is a free 20-minute call — you'll leave with straight answers about scope, timeline, and price. Prefer writing first? Send a brief and we'll reply within one business day."
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          <Reveal>
            <div className="border border-brass/40 bg-surface p-7 md:p-9">
              <p className="font-mono text-xs uppercase tracking-widest text-brass">
                Fastest option
              </p>
              <div className="mt-3 flex items-center gap-4">
                <Image
                  src="/about/lee-muthu.jpg"
                  alt="Lee Muthu, founder of Muthu Creatives"
                  width={56}
                  height={56}
                  className="rounded-full border border-brass/40 object-cover"
                />
                <h2 className="font-display text-3xl text-ink">
                  Book a free call
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                20 minutes with Lee, the founder — not a sales rep. We&apos;ll
                talk through what you&apos;re trying to make happen and tell
                you honestly what it takes, even if the answer is
                &quot;you don&apos;t need us for this.&quot;
              </p>
              <BookCallButton size="lg" className="mt-6 w-full" />
              <dl className="mt-8 space-y-3 border-t border-line pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink underline decoration-line underline-offset-4 hover:text-brass"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Location</dt>
                  <dd className="text-ink">Houston, TX</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Working with</dt>
                  <dd className="text-ink">Clients nationwide</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Response time</dt>
                  <dd className="text-ink">Within one business day</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl text-ink">
              Or send a project brief
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              A few details now means the first call goes straight to the
              useful part.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
