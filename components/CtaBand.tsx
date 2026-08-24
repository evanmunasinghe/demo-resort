import Link from "next/link";
import Reveal from "./Reveal";
import { waLink } from "@/lib/data";
import { WhatsappIcon } from "./icons";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-pine-950 py-24 md:py-28">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pine-600/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl" aria-hidden />
      <Reveal className="wrap relative text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-gold-300">Reservations</p>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-tight text-sand-50 sm:text-5xl md:text-6xl">
          Your Quiet Escape Awaits
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-relaxed text-sand-200/75">
          Tell us when the world becomes too loud, and we will keep a villa warm, a pool still and the kettle on.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-gold-400 px-9 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-pine-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-500/20 sm:w-auto"
          >
            Plan Your Stay
          </Link>
          <a
            href={waLink("Hello Solace Bay! I would like to plan my stay.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-sand-100/25 px-9 py-4 text-xs font-medium uppercase tracking-[0.28em] text-sand-100 transition-all duration-300 hover:border-gold-300 hover:text-gold-300 sm:w-auto"
          >
            <WhatsappIcon className="h-4.5 w-4.5" />
            WhatsApp Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
