import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { waLink, type Room } from "@/lib/data";
import { WhatsappIcon } from "./icons";

export default function RoomCard({ room, delay = 0 }: { room: Room; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-pine-900/8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-pine-950/15">
        <div className="relative h-64 shrink-0 overflow-hidden sm:h-72">
          <Image
            src={room.image.src}
            alt={room.image.alt}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-950/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" aria-hidden />
          <span className="absolute left-4 top-4 rounded-full bg-pine-950/75 px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-sand-100 backdrop-blur-sm">
            ${room.price} <span className="font-normal text-sand-200/70">/ night</span>
          </span>
          <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-sand-100/95">
            <span>{room.view}</span>
            <span className="rounded-full border border-white/30 px-2.5 py-0.5 backdrop-blur-sm">{room.size} m²</span>
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold-600">{room.tagline}</p>
          <h3 className="mt-2 font-display text-[1.7rem] font-medium leading-snug text-pine-900">{room.name}</h3>
          <p className="mt-3 line-clamp-2 text-sm font-light leading-relaxed text-mist">{room.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {room.amenities.slice(0, 4).map((a) => (
              <li key={a} className="rounded-full bg-sand-100 px-3 py-1.5 text-[11px] tracking-wide text-pine-800 ring-1 ring-pine-900/5">
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center gap-3 pt-7">
            <Link
              href={`/contact?room=${room.slug}`}
              className="flex-1 rounded-full bg-pine-800 px-5 py-3 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-sand-50 transition-colors duration-300 hover:bg-pine-900"
            >
              Enquire
            </Link>
            <a
              href={waLink(`Hello Solace Bay! I would like to reserve the ${room.name} ($${room.price}/night). Could you share availability?`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Reserve ${room.name} on WhatsApp`}
              className="inline-flex items-center gap-2 rounded-full border border-pine-800/25 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-pine-800 transition-all duration-300 hover:border-[#25d366] hover:bg-[#25d366]/8 hover:text-pine-950"
            >
              <WhatsappIcon className="h-4 w-4 text-[#1fa84f]" />
              Reserve
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
