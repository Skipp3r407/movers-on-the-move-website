"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/site";
import { cn } from "@/lib/cn";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-mo-light rounded-2xl border border-mo-light bg-mo-white">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-heading text-base font-bold uppercase text-mo-charcoal sm:text-lg">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-mo-blue transition",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen && (
              <div className="border-t border-mo-light/80 bg-mo-light/20 px-5 pb-5 pt-0 sm:px-6">
                <p className="pt-4 text-mo-slate">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
