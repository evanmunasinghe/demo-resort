import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBand from "@/components/CtaBand";
import SectionHeading from "@/components/SectionHeading";
import { img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through Solace Bay Resort & Spa — ocean villas, the cliffside infinity pool, spa rituals and golden hours in Uluwatu, Bali.",
  alternates: { canonical: "/gallery" },
  openGraph: { type: "website", siteName: "Solace Bay Resort & Spa", title: "Gallery — Solace Bay Resort & Spa", description: "A visual journey through Solace Bay Resort & Spa — ocean villas, the cliffside infinity pool, spa rituals and golden hours in Uluwatu, Bali.", url: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Photo Journal"
        title="A Visual Journey"
        sub="Golden hours, quiet corners and the endless blue — wander through Solace Bay before you arrive."
        image={img.portraits[5]}
      />

      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Eleven Frames"
            title="Moments, Not Poses"
            sub="Tap any photo to view it full-screen — use arrow keys or swipe to move through the collection."
          />
          <div className="mt-14">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
