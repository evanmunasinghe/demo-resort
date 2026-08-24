import Image from "next/image";
import { galleryItems } from "@/lib/data";

export default function Marquee() {
  const items = [...galleryItems, ...galleryItems];
  return (
    <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
      <div className="flex w-max animate-marquee gap-5 pr-5 group-hover/marquee:[animation-play-state:paused]">
        {items.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="relative h-52 w-72 shrink-0 overflow-hidden rounded-2xl md:h-64 md:w-96"
            aria-hidden={i >= galleryItems.length}
          >
            <Image
              src={item.src}
              alt={i < galleryItems.length ? item.alt : ""}
              fill
              sizes="(min-width: 768px) 384px, 288px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
