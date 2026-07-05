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

const budgetRanges = ["Under $500", "$500 to $1,500", "$1,500 to $5,000", "$5,000+"];

type FormStatus = "idle" | "sending" | "sent" | "error";

const inputStyles =
  "w-full border border-hairline bg-night px-4 py-3.5 text-sm text-ink placeholder:text-mist/60 focus:border-flare focus:outline-none";

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
      <div className="border border-flare/50 bg-coal p-8 text-center">
        <p className="type-wide text-2xl font-black uppercase text-ink">
          Got it.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          We’ll reply within one business day. Want to skip the wait? Grab a
          time on the calendar and we’ll show up prepared.
        </p>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-flare px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-widest text-night transition-colors hover:bg-ink"
        >
          Book a call ↗
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-mist">
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
          <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-mist">
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
        <label htmlFor="business" className="mb-2 block font-mono text-xs uppercase tracking-widest text-mist">
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
          <label htmlFor="projectType" className="mb-2 block font-mono text-xs uppercase tracking-widest text-mist">
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
          <label htmlFor="budget" className="mb-2 block font-mono text-xs uppercase tracking-widest text-mist">
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
        <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-mist">
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
        className="w-full rounded-full bg-flare px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-night transition-colors hover:bg-ink disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send it over"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-flare">
          The form didn’t go through. Email us at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>{" "}
          and we’ll get right back to you.
        </p>
      )}
    </form>
  );
}
