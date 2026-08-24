"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/data";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "./icons";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <div
      className="relative mx-auto max-w-3xl text-center"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
    >
      <div className="flex justify-center gap-1.5" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-gold-400" />
        ))}
      </div>

      <div key={index} className="animate-fade-slide">
        <blockquote className="mt-8 font-display text-2xl font-normal italic leading-relaxed text-sand-50 md:text-[2rem] md:leading-[1.45]">
          “{current.quote}”
        </blockquote>
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.32em] text-gold-300">{current.name}</p>
        <p className="mt-1.5 text-xs font-light tracking-wider text-sand-200/55">{current.origin}</p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sand-200 transition-all duration-300 hover:border-gold-300 hover:text-gold-300"
        >
          <ArrowLeftIcon className="h-4.5 w-4.5" />
        </button>
        <div className="flex items-center gap-2.5" role="tablist" aria-label="Testimonials">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-gold-400" : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sand-200 transition-all duration-300 hover:border-gold-300 hover:text-gold-300"
        >
          <ArrowRightIcon className="h-4.5 w-4.5" />
        </button>
      </div>
    </div>
  );
}
