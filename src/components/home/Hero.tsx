import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import Magnetic from "@/components/Magnetic";
import HeroVisual from "@/components/hero/HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroVisual />
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-10 md:pb-32 md:pt-44">
        <p className="hero-fade font-mono text-xs font-bold uppercase tracking-widest text-flare">
          Web design agency · Houston, TX
        </p>
        <h1 className="type-wide mt-6 font-black uppercase leading-[0.92] tracking-tight text-ink">
          <span className="hero-slide block text-[clamp(2.5rem,11vw,4.25rem)] md:text-[7.5rem]" style={{ animationDelay: "0.05s" }}>
            We build
          </span>
          <span className="hero-slide block text-[clamp(2.5rem,11vw,4.25rem)] md:text-[7.5rem]" style={{ animationDelay: "0.14s" }}>
            sites that
          </span>
          <span
            className="hero-slide block text-[clamp(2.5rem,11vw,4.25rem)] text-flare md:text-[7.5rem]"
            style={{ animationDelay: "0.23s" }}
          >
            convert.
          </span>
        </h1>
        <div className="mt-10 max-w-md md:ml-1">
          <p className="hero-slide text-lg leading-relaxed text-mist" style={{ animationDelay: "0.3s" }}>
            Custom websites, web apps and automations for businesses that want
            their site doing real work. Everything coded from scratch. Nothing
            from a template.
          </p>
          <div
            className="hero-fade mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.55s" }}
          >
            <Magnetic>
              <BookCallButton size="lg" />
            </Magnetic>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-1 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:text-flare"
            >
              See the work <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p
            className="hero-fade mt-7 font-mono text-xs tracking-wide text-mist"
            style={{ animationDelay: "0.7s" }}
          >
            Free 20-minute call. Fixed quote in writing. Hands-on from day one.
          </p>
        </div>
      </div>
    </section>
  );
}
