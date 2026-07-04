import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import HeroVisual from "@/components/hero/HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroVisual />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-36 md:px-8 md:pb-36 md:pt-48">
        <p className="font-mono text-xs uppercase tracking-widest text-brass">
          Web design studio · Houston, TX
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
          We build sites that <em className="text-brass">convert</em>.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Custom websites, web apps, and automations for businesses serious
          about growth. Designed and coded from scratch around your customers —
          no templates, ever.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <BookCallButton size="lg" />
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-2 py-3 text-sm text-ink transition-colors hover:text-brass"
          >
            See our work <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="mt-8 font-mono text-xs tracking-wide text-muted">
          Free 20-minute intro call · Fixed-price proposals · Founder-led builds
        </p>
      </div>
    </section>
  );
}
