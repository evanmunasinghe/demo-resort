import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import type { Img } from "@/lib/data";

type PageHeroProps = {
  title: string;
  eyebrow: string;
  sub: string;
  image: Img;
};

export default function PageHero({ title, eyebrow, sub, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[430px] items-end overflow-hidden pb-16 pt-40 md:min-h-[520px] md:items-center md:pb-24">
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="animate-kenburns object-cover will-change-transform" />
      <div className="absolute inset-0 bg-gradient-to-b from-pine-950/75 via-pine-950/45 to-pine-950/80" aria-hidden />
      <Reveal className="wrap relative text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-gold-300">{eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.08] text-sand-50 sm:text-6xl md:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-relaxed text-sand-100/80">{sub}</p>
        <nav aria-label="Breadcrumb" className="mt-8 flex items-center justify-center gap-2.5 text-[11px] uppercase tracking-[0.25em] text-sand-200/60">
          <Link href="/" className="transition-colors hover:text-gold-300">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-gold-300/90">{title}</span>
        </nav>
      </Reveal>
    </section>
  );
}
