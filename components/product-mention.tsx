import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/components/ui";

export function ProductMention({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface p-6 sm:p-7 shadow-xs",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="eyebrow text-accent mb-2">Hospital Software</p>
          <p className="text-sm sm:text-base text-muted">
            Looking for clinical operations software? CodXQ also builds{" "}
            <strong className="font-semibold text-fg">
              {site.displayProductName}
            </strong>
            , a complete platform for multi-specialty hospitals and healthcare groups.
          </p>
        </div>
        <Link
          href="/products/hospital-management-system/"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent hover:underline focus-visible:outline-accent"
        >
          <span>See the hospital system</span>
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>
    </div>
  );
}
