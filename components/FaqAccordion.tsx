"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { ChevronDownIcon } from "./icons";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-pine-900/10 rounded-[1.75rem] bg-white px-6 shadow-sm ring-1 ring-pine-900/8 sm:px-9">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className="py-2">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-4 text-left"
            >
              <span className={`font-display text-xl font-medium transition-colors duration-300 ${isOpen ? "text-gold-600" : "text-pine-900"}`}>
                {faq.q}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                  isOpen ? "rotate-180 border-gold-400 bg-gold-400/10 text-gold-600" : "border-pine-900/15 text-pine-700"
                }`}
              >
                <ChevronDownIcon className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-10 text-sm font-light leading-relaxed text-mist">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
