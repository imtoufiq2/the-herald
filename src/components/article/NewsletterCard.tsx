"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

/** Newsletter signup card. UI-only: it validates and confirms locally; wiring a
 *  real provider is a deliberate scope cut (see README). */
export function NewsletterCard() {
  const [done, setDone] = useState(false);

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="rounded-xl border border-border bg-surface-muted p-6"
    >
      <h2 id="newsletter-heading" className="text-xl font-semibold text-fg">
        Newsletter Signup
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
        Get the week&apos;s most important stories, curated by our editors, delivered to
        your inbox every Friday.
      </p>

      {done ? (
        <p role="status" className="mt-4 text-sm font-medium text-accent">
          Thanks — you&apos;re subscribed.
        </p>
      ) : (
        <form
          className="mt-4 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-9 rounded-sm border border-border bg-bg px-3 text-sm text-fg shadow-sm placeholder:text-fg-muted"
          />
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      )}
    </section>
  );
}
