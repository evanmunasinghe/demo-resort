import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { img, rooms } from "@/lib/data";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Villas & Pavilions",
  description:
    "Six quiet stays at Solace Bay Resort & Spa — garden pavilions, ocean-view rooms, private pool villas and cliffside suites in Uluwatu, Bali. Rates include breakfast, transfers and daily yoga.",
  alternates: { canonical: "/rooms" },
};

const included = [
  "Private airport transfers",
  "Slow-breakfast for two, daily",
  "Sunrise yoga on the clifftop",
  "Kids under 12 stay free",
];

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodation"
        title="Villas & Pavilions"
        sub="Six ways to stay — every one with its own terrace, its own light and the sea never far from your pillow."
        image={img.landscapes[1]}
      />

      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Choose Your Calm"
            title="Rooms That Ask Nothing of You"
            sub="All rates are per night and include breakfast, airport transfer and our daily rituals. Stay seven nights and the seventh is quietly on us."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {rooms.map((room, i) => (
              <RoomCard key={room.slug} room={room} delay={(i % 3) * 120} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="wrap">
          <Reveal>
            <div className="grid gap-8 rounded-[2rem] bg-pine-900 p-8 shadow-xl sm:grid-cols-2 md:p-12 lg:grid-cols-4">
              <div className="sm:col-span-2 lg:col-span-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-300">Always Included</p>
                <h2 className="mt-3 font-display text-3xl font-medium leading-snug text-sand-50">
                  The Extras That Aren’t Extra
                </h2>
              </div>
              <ul className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-3">
                {included.map((line) => (
                  <li key={line} className="flex items-center gap-3 rounded-2xl bg-white/5 px-5 py-4 text-sm font-light text-sand-100 ring-1 ring-white/10">
                    <CheckIcon className="h-5 w-5 shrink-0 text-gold-400" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
