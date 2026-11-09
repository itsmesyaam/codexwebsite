"use client";

import { useEffect, useId, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/components/ui";

const options = [
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "system", label: "System theme", Icon: Monitor },
  { value: "dark", label: "Dark theme", Icon: Moon },
] as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pillId = useId(); // unique per instance (header + mobile drawer)

  useEffect(() => setMounted(true), []);

  const choose = (value: string) => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    setTheme(value);
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);
  };

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={cn("flex h-9 items-center gap-0.5 rounded-full border border-line bg-surface/70 p-0.5", className)}
    >
      {options.map(({ value, label, Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={active}
            title={label}
            onClick={() => choose(value)}
            className={cn(
              "relative grid size-8 place-items-center rounded-full transition-colors",
              active ? "text-fg" : "text-muted hover:text-fg",
            )}
          >
            {active && (
              <motion.span
                layoutId={`theme-pill-${pillId}`}
                className="absolute inset-0 rounded-full bg-bg ring-1 ring-line"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <Icon aria-hidden className="relative size-4" />
          </button>
        );
      })}
    </div>
  );
}
