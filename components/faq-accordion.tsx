"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { FAQ } from "@/content/types";
import { cn } from "@/components/ui";

export function FAQAccordion({
  items,
  className,
}: {
  items: FAQ[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const headingId = `${baseId}-h-${idx}`;
        const panelId = `${baseId}-p-${idx}`;

        return (
          <div key={idx} className="py-2">
            <h3 id={headingId} className="text-base sm:text-lg font-medium">
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-4 text-start font-medium text-fg transition-colors hover:text-accent focus-visible:outline-accent"
              >
                <span>{item.q}</span>
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-5 shrink-0 text-muted transition-transform duration-200",
                    isOpen && "rotate-180 text-accent"
                  )}
                />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm sm:text-base leading-relaxed text-muted max-w-3xl">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
