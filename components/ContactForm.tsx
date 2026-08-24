"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { rooms, siteConfig, waLink } from "@/lib/data";
import { CheckIcon, MailIcon, WhatsappIcon } from "./icons";

type Fields = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomInterest: string;
  message: string;
};

const initial: Fields = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  roomInterest: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-pine-900/15 bg-sand-50/60 px-4 py-3 text-sm text-ink outline-none transition-all duration-300 placeholder:text-mist/60 focus:border-pine-500 focus:bg-white focus:ring-4 focus:ring-pine-500/10";

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [today, setToday] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
    const roomSlug = searchParams.get("room");
    const interest = searchParams.get("interest");
    if (roomSlug) {
      const room = rooms.find((r) => r.slug === roomSlug);
      if (room) setFields((f) => ({ ...f, roomInterest: room.name }));
    } else if (interest) {
      setFields((f) => ({ ...f, roomInterest: `Experience — ${interest.charAt(0).toUpperCase()}${interest.slice(1)}` }));
    }
  }, [searchParams]);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const composeMessage = () => {
    const lines = [
      `Hello Solace Bay!`,
      ``,
      `My name is ${fields.name}.`,
      fields.roomInterest ? `Interested in: ${fields.roomInterest}` : null,
      fields.checkIn && fields.checkOut ? `Dates: ${fields.checkIn} → ${fields.checkOut}` : fields.checkIn ? `Arrival: ${fields.checkIn}` : null,
      `Guests: ${fields.guests}`,
      fields.phone ? `Phone: ${fields.phone}` : null,
      ``,
      fields.message,
    ].filter(Boolean) as string[];
    return lines.join("\n");
  };

  const mailtoHref = () => {
    const subject = `Booking inquiry — ${fields.name}`;
    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeMessage())}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) nextErrors.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) nextErrors.email = "Please enter a valid email address.";
    if (!fields.message.trim()) nextErrors.message = "A short message helps us prepare for you.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    window.open(waLink(composeMessage()), "_blank", "noopener,noreferrer");
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="animate-fade-slide flex h-full flex-col items-center justify-center rounded-[1.75rem] bg-pine-900 px-8 py-16 text-center shadow-xl">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
          <CheckIcon className="h-10 w-10" />
        </span>
        <h3 className="mt-8 font-display text-3xl font-medium text-sand-50">Thank you{fields.name ? `, ${fields.name.split(" ")[0]}` : ""}.</h3>
        <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-sand-200/75">
          Your inquiry has been opened in WhatsApp with everything pre-filled — just press send, and our team will reply
          within the hour (front desk is awake 24/7).
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink(composeMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <WhatsappIcon className="h-4.5 w-4.5" />
            Open WhatsApp Again
          </a>
          <button
            type="button"
            onClick={() => {
              setFields(initial);
              setStatus("idle");
            }}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-sand-100 transition-colors hover:border-gold-300 hover:text-gold-300"
          >
            New Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-pine-900/8 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-pine-800">
            Full Name *
          </label>
          <input id="cf-name" type="text" autoComplete="name" value={fields.name} onChange={set("name")} placeholder="Ayu &amp; Sam" className={inputClass} />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-pine-800">
            Email *
          </label>
          <input id="cf-email" type="email" autoComplete="email" value={fields.email} onChange={set("email")} placeholder="you@example.com" className={inputClass} />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-pine-800">
            Phone / WhatsApp
          </label>
          <input id="cf-phone" type="tel" autoComplete="tel" value={fields.phone} onChange={set("phone")} placeholder="+62 812 …" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-guests" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-pine-800">
            Guests
          </label>
          <select id="cf-guests" value={fields.guests} onChange={set("guests")} className={inputClass}>
            {["1", "2", "3", "4", "5", "6+"].map((n) => (
              <option key={n} value={n}>
                {n} {n === "1" ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-checkin" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-pine-800">
            Check-in
          </label>
          <input id="cf-checkin" type="date" min={today || undefined} value={fields.checkIn} onChange={set("checkIn")} className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-checkout" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-pine-800">
            Check-out
          </label>
          <input id="cf-checkout" type="date" min={fields.checkIn || today || undefined} value={fields.checkOut} onChange={set("checkOut")} className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-room" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-pine-800">
            Room of Interest
          </label>
          <select id="cf-room" value={fields.roomInterest} onChange={set("roomInterest")} className={inputClass}>
            <option value="">Not sure yet — advise me</option>
            {rooms.map((r) => (
              <option key={r.slug} value={r.name}>
                {r.name} · ${r.price}/night
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-pine-800">
            Message *
          </label>
          <textarea
            id="cf-message"
            rows={5}
            value={fields.message}
            onChange={set("message")}
            placeholder={"Tell us about your trip — an anniversary, a slow holiday, a need for absolute quiet…"}
            className={`${inputClass} resize-none`}
          />
          {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-pine-800 px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-sand-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-900 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "sending" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-sand-100/40 border-t-sand-100" aria-hidden />
              Preparing…
            </>
          ) : (
            <>
              <WhatsappIcon className="h-4.5 w-4.5" />
              Send via WhatsApp
            </>
          )}
        </button>
        <a
          href={mailtoHref()}
          onClick={(e) => {
            if (!fields.name || !fields.message) e.preventDefault();
          }}
          className="inline-flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-pine-700 underline-offset-4 transition-colors hover:text-gold-600 hover:underline"
        >
          <MailIcon className="h-4 w-4" />
          Prefer email?
        </a>
      </div>

      <p className="mt-5 border-t border-pine-900/8 pt-4 text-xs font-light leading-relaxed text-mist">
        Sending opens WhatsApp with your inquiry pre-filled — no account or payment needed. We reply within one hour,
        around the clock.
      </p>
    </form>
  );
}
