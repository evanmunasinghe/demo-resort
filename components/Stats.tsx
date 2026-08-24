"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}

function Stat({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const current = useCountUp(value, started);
  return (
    <div className="text-center">
      <p className="font-display text-5xl font-medium text-pine-900 tabular-nums md:text-6xl">
        {current}
        {suffix && <span className="text-gold-500">{suffix}</span>}
      </p>
      <p className="mt-3 text-[11px] font-normal uppercase tracking-[0.3em] text-mist">{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
      {stats.map((s) => (
        <Stat key={s.label} {...s} started={started} />
      ))}
    </div>
  );
}
