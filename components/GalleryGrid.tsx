"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryItems } from "@/lib/data";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon, ExpandIcon } from "./icons";

export default function GalleryGrid() {
  const [current, setCurrent] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const isOpen = current !== null;

  const close = useCallback(() => setCurrent(null), []);
  const prev = useCallback(
    () => setCurrent((c) => (c === null ? c : (c - 1 + galleryItems.length) % galleryItems.length)),
    []
  );
  const next = useCallback(() => setCurrent((c) => (c === null ? c : (c + 1) % galleryItems.length)), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, prev, next]);

  const item = isOpen ? galleryItems[current] : null;

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {galleryItems.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Open photo: ${item.alt}`}
            className={`group relative mb-5 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-2xl ${
              item.h > item.w ? "aspect-[4/5]" : item.w === item.h ? "aspect-square" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-108"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-pine-950/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            <span className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-left opacity-0 transition-all duration-500 group-hover:opacity-100">
              <span className="translate-y-2 font-display text-lg leading-snug text-sand-50 transition-transform duration-500 group-hover:translate-y-0">
                {item.alt}
              </span>
            </span>
            <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <ExpandIcon className="h-4.5 w-4.5" />
            </span>
          </button>
        ))}
      </div>

      {isOpen && item && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${current + 1} of ${galleryItems.length}: ${item.alt}`}
          className="fixed inset-0 z-[90] flex flex-col bg-pine-950/[0.97] backdrop-blur-sm"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 48) (dx > 0 ? prev : next)();
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs tracking-[0.3em] text-sand-200/60">
              {String(current + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sand-100 transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-14 pb-4 sm:px-20" onClick={(e) => e.stopPropagation()}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              priority
            />
          </div>

          <div className="flex items-center justify-between gap-4 p-4 pb-8 sm:p-6 sm:pb-10" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-sand-100 transition-all duration-300 hover:border-gold-300 hover:text-gold-300"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <p className="text-center font-display text-lg italic text-sand-100/90">{item.alt}</p>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-sand-100 transition-all duration-300 hover:border-gold-300 hover:text-gold-300"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
