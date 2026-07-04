import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-5 pb-24 pt-44 md:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-brass">404</p>
      <h1 className="mt-5 max-w-2xl font-display text-5xl leading-tight text-ink md:text-6xl">
        This page doesn&apos;t <em className="text-brass">convert</em> — it
        doesn&apos;t exist.
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
        The link may be old or mistyped. Everything we build is one click from
        the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-brass hover:text-brass"
        >
          Back to homepage
        </Link>
        <BookCallButton />
      </div>
    </section>
  );
}
