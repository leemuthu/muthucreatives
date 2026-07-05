import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import Magnetic from "@/components/Magnetic";
import HeroVisual from "@/components/hero/HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroVisual />
      <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-36 md:px-8 md:pb-40 md:pt-52">
        <p className="hero-enter font-mono text-xs uppercase tracking-widest text-brass">
          Web design studio · Houston, TX
        </p>
        <h1
          className="hero-enter-slide mt-5 max-w-4xl font-display text-6xl leading-[1.02] text-ink md:text-8xl"
          style={{ animationDelay: "0.08s" }}
        >
          We build sites that{" "}
          <em className="hero-underline relative text-brass">convert</em>.
        </h1>
        <p
          className="hero-enter-slide mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          style={{ animationDelay: "0.16s" }}
        >
          Custom websites, web apps, and automations for businesses serious
          about growth. Designed and coded from scratch around your customers —
          no templates, ever.
        </p>
        <div
          className="hero-enter mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          style={{ animationDelay: "0.34s" }}
        >
          <Magnetic>
            <BookCallButton size="lg" />
          </Magnetic>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-2 py-3 text-sm text-ink transition-colors hover:text-brass"
          >
            See our work <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p
          className="hero-enter mt-9 font-mono text-xs tracking-wide text-muted"
          style={{ animationDelay: "0.46s" }}
        >
          Free 20-minute intro call · Fixed-price proposals · Founder-led builds
        </p>
      </div>
    </section>
  );
}
