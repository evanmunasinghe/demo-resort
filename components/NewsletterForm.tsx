"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className="mt-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.includes("@")) setDone(true);
      }}
    >
      {done ? (
        <p className="animate-fade-slide rounded-2xl border border-gold-400/30 bg-gold-400/10 px-4 py-3.5 text-sm text-gold-300">
          Thank you — see you at sunrise.
        </p>
      ) : (
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 transition-colors focus-within:border-gold-400/60">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full bg-transparent px-4 text-sm text-sand-100 outline-none placeholder:text-sand-200/40"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-gold-400 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-pine-950 transition-colors duration-300 hover:bg-gold-300"
          >
            Join
          </button>
        </div>
      )}
    </form>
  );
}
