"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const projectTypes = [
  "Landing page",
  "Business website",
  "Web app",
  "Automation",
  "Not sure yet",
];

const budgetRanges = ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000+"];

type FormStatus = "idle" | "sending" | "sent" | "error";

const inputStyles =
  "w-full border border-line bg-night px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-brass focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-brass/40 bg-surface p-8 text-center">
        <p className="font-display text-2xl text-ink">Brief received.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          We&apos;ll reply within one business day. Want to skip ahead? Grab a
          time on the calendar and we&apos;ll come prepared.
        </p>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block bg-brass px-6 py-3 text-sm font-medium text-night transition-colors hover:bg-ink"
        >
          Book a call →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <label htmlFor="business" className="mb-2 block text-sm text-ink">
          Business name
        </label>
        <input
          id="business"
          name="business"
          type="text"
          autoComplete="organization"
          className={inputStyles}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm text-ink">
            What do you need?
          </label>
          <select id="projectType" name="projectType" className={inputStyles}>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm text-ink">
            Budget range
          </label>
          <select id="budget" name="budget" className={inputStyles}>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What are you building, and what should it do for your business?"
          className={inputStyles}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-brass px-6 py-3.5 text-sm font-medium text-night transition-colors hover:bg-ink disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send project brief"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-brass">
          The form didn&apos;t go through. Email us directly at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>{" "}
          and we&apos;ll get right back to you.
        </p>
      )}
    </form>
  );
}
