import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Marquee from "@/components/Marquee";
import CtaBand from "@/components/CtaBand";
import { img, rooms, services, waLink } from "@/lib/data";
import {
  ArrowRightIcon,
  CheckIcon,
  CompassIcon,
  LeafIcon,
  LotusIcon,
  SparklesIcon,
  UtensilsIcon,
  WavesIcon,
  WhatsappIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "Solace Bay Resort & Spa — Cliffside Resort in Uluwatu, Bali" },
  description:
    "A cliffside hideaway in Uluwatu, Bali. Ocean-view villas, an infinity pool above the surf, seaside spa and sunrise yoga. Book your quiet escape at Solace Bay Resort & Spa.",
  alternates: { canonical: "/" },
};

const serviceIcons = {
  lotus: LotusIcon,
  waves: WavesIcon,
  utensils: UtensilsIcon,
  leaf: LeafIcon,
  compass: CompassIcon,
  sparkles: SparklesIcon,
};

export default function HomePage() {
  return (
    <>
      <section className="relative flex h-svh min-h-[620px] items-center overflow-hidden">
        <Image
          src={img.hero.src}
          alt={img.hero.alt}
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950/70 via-pine-950/30 to-pine-950/85" aria-hidden />

        <div className="wrap relative flex w-full flex-col items-center pt-20 text-center">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.5em] text-gold-300">
              <span className="h-px w-8 bg-gold-400/70" aria-hidden />
              Uluwatu · Bali · Est. 2012
              <span className="h-px w-8 bg-gold-400/70" aria-hidden />
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-6 max-w-4xl font-display text-[2.9rem] font-medium leading-[1.06] text-sand-50 sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Stillness Has <em className="italic text-gold-300">an Address</em>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mx-auto mt-7 max-w-xl text-base font-light leading-relaxed text-sand-100/85 md:text-lg">
              Perched above the surf breaks of Uluwatu, Solace Bay is a cliffside hideaway of quiet villas, warm-stone
              pools and days measured only by the tide.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/rooms"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-9 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-pine-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-500/25 sm:w-auto"
              >
                Explore the Villas
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href={waLink("Hello Solace Bay! I found you online and would love to plan a stay.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-sand-100/30 px-9 py-4 text-xs font-medium uppercase tracking-[0.26em] text-sand-100 backdrop-blur-sm transition-all duration-300 hover:border-gold-300 hover:text-gold-300 sm:w-auto"
              >
                <WhatsappIcon className="h-4.5 w-4.5" />
                Book on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3" aria-hidden>
          <span className="text-[10px] uppercase tracking-[0.35em] text-sand-100/60">Scroll</span>
          <span className="h-12 w-px animate-scroll-line bg-gradient-to-b from-gold-300 to-transparent" />
        </div>
      </section>

      <section className="overflow-hidden py-24 md:py-32">
        <div className="wrap grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square w-[82%] overflow-hidden rounded-[2rem] shadow-xl">
              <Image src={img.square.src} alt={img.square.alt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-10 right-0 aspect-[4/5] w-[52%] overflow-hidden rounded-[1.5rem] shadow-2xl ring-8 ring-sand-50">
              <Image src={img.portraits[0].src} alt={img.portraits[0].alt} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover" />
            </div>
            <div className="absolute -left-4 top-8 flex h-28 w-28 -rotate-6 flex-col items-center justify-center rounded-full bg-gold-400 text-center shadow-lg md:-left-8">
              <span className="font-display text-3xl font-semibold leading-none text-pine-950">12</span>
              <span className="mt-1 px-3 text-[9px] font-semibold uppercase leading-tight tracking-[0.18em] text-pine-900">
                Years of Calm
              </span>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Welcome to Solace Bay"
              title="A Sanctuary Woven from Light, Stone & Sea"
            />
            <Reveal delay={120}>
              <p className="mt-6 text-[15px] font-light leading-relaxed text-mist">
                Solace Bay began as a family’s coconut grove above Suluban Beach. Today its forty-five villas rest
                gently among the original palms — hand-cut limestone, reclaimed teak and open walls that let the ocean
                breeze write the schedule.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  "Adults-quiet zones and family wings, so everyone finds their calm",
                  "Farm-to-table dining from our own garden and the morning catch",
                  "Complimentary sunrise yoga on the clifftop shala, every single day",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm font-light text-ink">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-display text-xl italic text-pine-800">— The Putra Family, your hosts since 2012</p>
            </Reveal>
          </div>
        </div>

        <div className="wrap mt-24 md:mt-32">
          <Stats />
        </div>
      </section>

      <section className="bg-sand-100 py-24 md:py-32">
        <div className="wrap">
          <SectionHeading
            eyebrow="Stay With Us"
            title="Villas That Breathe"
            sub="Six ways to disappear pleasantly — each with its own terrace, its own light and its own view of forever."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {rooms.slice(0, 3).map((room, i) => (
              <RoomCard key={room.slug} room={room} delay={i * 130} />
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Link
              href="/rooms"
              className="group inline-flex items-center gap-3 rounded-full border border-pine-800/25 px-9 py-4 text-xs font-medium uppercase tracking-[0.26em] text-pine-800 transition-all duration-300 hover:border-gold-500 hover:bg-gold-400/10 hover:text-gold-600"
            >
              View All Six Stays
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="wrap">
          <SectionHeading
            eyebrow="Gentle Indulgences"
            title="Everything You Need to Do Absolutely Nothing"
            sub="Days here are unhurried by design. Let the tide set the pace and our concierge handle everything else."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Reveal key={service.slug} delay={(i % 3) * 110}>
                  <Link
                    href="/services"
                    className="group flex h-full items-start gap-5 rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-pine-900/6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-pine-950/10"
                  >
                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-sand-100 text-pine-700 transition-all duration-500 group-hover:bg-gold-400 group-hover:text-pine-950">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="flex items-center gap-2 font-display text-xl font-medium text-pine-900">
                        {service.title}
                        <ArrowRightIcon className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </span>
                      <span className="mt-2 block line-clamp-2 text-sm font-light leading-relaxed text-mist">{service.blurb}</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32 md:h-[65vh] md:min-h-[480px]">
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${img.landscapes[0].src})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <Image src={img.landscapes[0].src} alt="" fill sizes="100vw" className="object-cover md:hidden" aria-hidden />
        <div className="absolute inset-0 bg-pine-950/70" aria-hidden />
        <blockquote className="wrap relative text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-gold-300">From the Guest Journal</p>
            <p className="mx-auto mt-7 max-w-3xl font-display text-3xl italic leading-snug text-sand-50 md:text-[2.6rem] md:leading-[1.35]">
              “The sea, once it casts its spell, holds one in its net of wonder forever.”
            </p>
            <cite className="mt-7 block text-xs font-medium not-italic uppercase tracking-[0.35em] text-gold-300/90">
              Jacques Yves Cousteau
            </cite>
          </Reveal>
        </blockquote>
      </section>

      <section className="py-24 md:py-28">
        <div className="wrap">
          <SectionHeading eyebrow="Moments at Solace" title="Small Scenes, Slow Hours" />
        </div>
        <div className="mt-12">
          <Marquee />
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.26em] text-pine-800 underline-offset-8 transition-colors hover:text-gold-600 hover:underline"
          >
            Step Into the Full Gallery
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-pine-900 py-24 md:py-28">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-pine-600/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-gold-500/12 blur-3xl" aria-hidden />
        <div className="wrap relative">
          <SectionHeading
            tone="light"
            eyebrow="Kind Words"
            title="Letters From Our Guests"
            sub="We could tell you about the sunsets — but perhaps our guests say it better."
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
