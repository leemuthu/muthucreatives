import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import BookCallButton from "@/components/BookCallButton";
import Magnetic from "@/components/Magnetic";
import { site } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact | Book a Free Call | Web Design in Houston, TX",
  description:
    "Book a free 20-minute call with Muthu Creatives or send a project brief. Custom websites, web apps and automations from Houston, TX, serving clients nationwide.",
  ...pageSeo("/contact"),
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
            Start with a <span className="text-flare">conversation.</span>
          </>
        }
        lede="The fastest route is a free 20-minute call. You'll leave knowing what your project takes, what it costs and how long it runs. Prefer writing first? Send a brief and we'll reply within one business day."
      />

      <div className="mx-auto max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          <Reveal>
            <div className="border border-flare/50 bg-coal p-7 md:p-9">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-flare">
                Fastest option
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src="/about/lee-muthu.jpg"
                  alt="Lee Muthu, founder of Muthu Creatives"
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-flare object-cover"
                />
                <h2 className="type-wide text-2xl font-black uppercase text-ink">
                  Book a free call
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist">
                20 minutes with Lee, the founder, not a sales rep. We’ll talk
                through what you’re trying to make happen and tell you
                honestly what it takes. Even if the honest answer is that you
                don’t need us.
              </p>
              <Magnetic className="mt-6 w-full">
                <BookCallButton size="lg" className="w-full" />
              </Magnetic>
              <dl className="mt-8 space-y-3 border-t border-hairline pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-mist">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink underline decoration-hairline underline-offset-4 hover:text-flare"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-mist">Location</dt>
                  <dd className="text-ink">Houston, TX</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-mist">Working with</dt>
                  <dd className="text-ink">Clients nationwide</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-mist">Response time</dt>
                  <dd className="text-ink">Within one business day</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="type-wide text-2xl font-black uppercase text-ink">
              Or send a project brief
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist">
              A few details now and the first call goes straight to the useful
              part.
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
