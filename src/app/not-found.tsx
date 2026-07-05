import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start px-5 pb-24 pt-40 md:px-10">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-flare">
        404
      </p>
      <h1 className="type-wide mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-ink md:text-7xl">
        This page doesn’t <span className="text-flare">convert.</span> It
        doesn’t exist.
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
        The link is old or mistyped. Everything we build is one click from the
        homepage.
      </p>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:border-flare hover:text-flare"
        >
          Back to homepage
        </Link>
        <BookCallButton />
      </div>
    </section>
  );
}
