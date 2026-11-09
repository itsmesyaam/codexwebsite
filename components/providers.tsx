"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // next-themes injects a blocking script, so there is no theme flash on load.
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="codxq-theme">
      {/* "user" turns off transform animations for visitors who prefer reduced motion */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
