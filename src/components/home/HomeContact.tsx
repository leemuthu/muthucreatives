import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Magnetic from "@/components/Magnetic";
import BookCallButton from "@/components/BookCallButton";
import { site } from "@/lib/site";

export default function HomeContact() {
  return (
    <section
      aria-labelledby="contact-heading"
      id="contact"
      className="relative overflow-hidden bg-night"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 100%, rgba(241, 78, 20, 0.09), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-flare">
            Start here
          </p>
          <h2
            id="contact-heading"
            className="type-wide mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-ink md:text-8xl"
          >
            Let’s build yours.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[2fr_3fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-10 border border-hairline bg-coal p-7 md:p-9">
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/about/lee-muthu.jpg"
                    alt="Lee Muthu, founder of Muthu Creatives"
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-flare object-cover"
                  />
                  <div>
                    <p className="type-wide text-lg font-black uppercase text-ink">
                      Talk to Lee
                    </p>
                    <p className="font-mono text-xs tracking-wide text-mist">
                      Founder. Your point of contact, start to finish.
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-mist">
                  The fastest way to find out what your project takes is a free
                  20-minute call. No sales rep, no pitch deck. If you don’t
                  need us, we’ll tell you that too.
                </p>
              </div>
              <div>
                <Magnetic className="w-full">
                  <BookCallButton size="lg" className="w-full" />
                </Magnetic>
                <dl className="mt-7 space-y-2.5 border-t border-hairline pt-6 text-sm">
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
                    <dt className="text-mist">Based in</dt>
                    <dd className="text-ink">Houston, TX</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-mist">Replies within</dt>
                    <dd className="text-ink">One business day</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="type-wide text-xl font-black uppercase text-ink">
              Or send the details now
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">
              A few answers here and the first call skips straight to the
              useful part.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
