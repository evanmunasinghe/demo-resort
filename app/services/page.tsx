import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { img, services, waLink, type Service } from "@/lib/data";
import { CheckIcon, CompassIcon, LeafIcon, LotusIcon, SparklesIcon, UtensilsIcon, WavesIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Experiences & Amenities",
  description:
    "Spa rituals above the surf, a 28-metre infinity pool, fire-cooked dining at Tide & Ember, sunrise yoga and island excursions — the amenities of Solace Bay Resort & Spa, Uluwatu.",
  alternates: { canonical: "/services" },
};

const serviceIcons = {
  lotus: LotusIcon,
  waves: WavesIcon,
  utensils: UtensilsIcon,
  leaf: LeafIcon,
  compass: CompassIcon,
  sparkles: SparklesIcon,
};

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = serviceIcons[service.icon];
  const flip = index % 2 === 1;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={`relative ${flip ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover transition-transform duration-[1600ms] hover:scale-105"
          />
        </div>
        <span
          className={`absolute -bottom-4 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-pine-800 shadow-lg ring-1 ring-pine-900/8 ${
            flip ? "left-6" : "right-6"
          }`}
        >
          {service.meta}
        </span>
      </Reveal>

      <Reveal delay={130} className={flip ? "lg:order-1" : ""}>
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-600">
            <Icon className="h-7 w-7" />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-mist">0{index + 1} — Solace Signature</span>
        </div>
        <h2 className="mt-5 font-display text-3xl font-medium text-pine-900 sm:text-4xl">{service.title}</h2>
        <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-mist">{service.blurb}</p>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm font-light text-ink">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
              {f}
            </li>
          ))}
        </ul>
        <Link
          href={`/contact?interest=${service.slug}`}
          className="group mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-pine-800 underline-offset-8 transition-colors hover:text-gold-600 hover:underline"
        >
          Enquire About This Experience
          <span aria-hidden>→</span>
        </Link>
      </Reveal>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="The Art of Doing Beautifully Little"
        sub="Spa pavilions over the surf, a horizon pool that melts into the sky, dinners cooked on fire — days here are designed to be felt, not filled."
        image={img.portraits[3]}
      />

      <section className="py-24 md:py-32">
        <div className="wrap space-y-24 md:space-y-32">
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-sand-100 py-20">
        <div className="wrap text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl font-display text-2xl italic leading-relaxed text-pine-900 md:text-3xl">
              “Whatever pace you choose — or refuse to choose — the concierge desk is a whisper away.”
            </p>
            <a
              href={waLink("Hello Solace Bay! I would like to know more about your experiences.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-pine-800/25 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.24em] text-pine-800 transition-all duration-300 hover:border-gold-500 hover:bg-gold-400/10 hover:text-gold-600"
            >
              Ask the Concierge on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
