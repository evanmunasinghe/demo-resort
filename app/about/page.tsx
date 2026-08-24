import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { img } from "@/lib/data";
import { HeartIcon, LeafIcon, SunIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Solace Bay Resort & Spa — a family coconut grove above Suluban Beach, Uluwatu, grown into one of Bali’s most peaceful cliffside retreats.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: HeartIcon,
    title: "Gentle Hospitality",
    text: "Service that feels like family, not formality. We remember names, stories and how you take your morning coffee.",
  },
  {
    icon: LeafIcon,
    title: "Living With Nature",
    text: "Solar water heating, a zero-single-use-plastic policy and gardens that feed the kitchen — the island gives, we give back.",
  },
  {
    icon: SunIcon,
    title: "Community First",
    text: "Ninety percent of our team live within five kilometres. Every stay directly supports the Pecatu village school.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Rooted in Serenity"
        sub="From a family coconut grove to Bali’s gentlest cliffside retreat — this is how Solace Bay found its quiet."
        image={img.landscapes[2]}
      />

      <section className="py-24 md:py-32">
        <div className="wrap grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Since 2012" title="It Began with a Grove and a View" />
            <Reveal delay={120}>
              <div className="mt-6 space-y-5 text-[15px] font-light leading-relaxed text-mist">
                <p>
                  In 2012, the Putra family looked out over their coconut grove at Suluban Beach and decided the world
                  needed more places to breathe. The first pavilion was built by hand, with stone from the hillside and
                  teak rescued from old Balinese jukung boats.
                </p>
                <p>
                  Twelve years later there are forty-five villas — yet the grove still stands, the paths still curve
                  around every palm, and breakfast still arrives with fruit picked that same morning. Some things are
                  simply not for sale.
                </p>
                <p>
                  We believe true luxury is space: space to sleep deeply, swim slowly, read long and speak softly. That
                  belief shapes everything here, from our adults-quiet zones to the library of well-thumbed paperbacks
                  in the lobby.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative mx-auto w-full max-w-lg">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
              <Image src={img.portraits[1].src} alt={img.portraits[1].alt} fill sizes="(min-width: 1024px) 42vw, 90vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-6 hidden aspect-square w-44 overflow-hidden rounded-[1.25rem] shadow-2xl ring-8 ring-sand-50 sm:block">
              <Image src={img.square.src} alt={img.square.alt} fill sizes="176px" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-100 py-24 md:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="What We Hold Dear"
            title="Three Quiet Promises"
            sub="Small enough to mean them, consistent enough to keep them."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 130}>
                <div className="group h-full rounded-[1.75rem] bg-white p-8 text-center shadow-sm ring-1 ring-pine-900/6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-pine-950/10">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sand-100 text-pine-700 transition-all duration-500 group-hover:bg-gold-400 group-hover:text-pine-950">
                    <v.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-medium text-pine-900">{v.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="wrap">
          <Stats />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="wrap">
          <Reveal>
            <div className="relative h-[46vh] min-h-[340px] overflow-hidden rounded-[2.5rem] shadow-xl">
              <Image src={img.hero.src} alt={img.hero.alt} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-pine-950/20 to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center md:p-14">
                <p className="font-display text-2xl italic leading-snug text-sand-50 md:text-4xl">
                  “Come as guests, leave as family — salty, rested and already planning your return.”
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-300">The Putra Family</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
