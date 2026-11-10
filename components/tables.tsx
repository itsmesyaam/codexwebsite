import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { pricingTiers, type PricingTier } from "@/content/pricing";
import { cn } from "@/components/ui";

export function ComparisonTable({
  columns,
  rows,
  caption,
  className,
}: {
  columns: [string, string, string];
  rows: [string, string, string][];
  caption?: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      {caption && <p className="mb-4 text-sm text-muted">{caption}</p>}

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto rounded-2xl border border-line bg-surface">
        <table className="w-full text-start border-collapse text-sm">
          <thead>
            <tr className="border-b border-line bg-bg/50">
              <th scope="col" className="p-4 sm:p-5 text-start font-semibold text-fg w-1/4">
                {columns[0]}
              </th>
              <th scope="col" className="p-4 sm:p-5 text-start font-semibold text-muted w-3/8">
                {columns[1]}
              </th>
              <th scope="col" className="p-4 sm:p-5 text-start font-semibold text-fg w-3/8 bg-accent/5">
                {columns[2]}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-bg/30 transition-colors">
                <td className="p-4 sm:p-5 font-medium text-fg align-top">
                  {row[0]}
                </td>
                <td className="p-4 sm:p-5 text-muted align-top">
                  {row[1]}
                </td>
                <td className="p-4 sm:p-5 text-fg align-top bg-accent/[0.02]">
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards */}
      <div className="sm:hidden flex flex-col gap-4">
        {rows.map((row, idx) => (
          <div key={idx} className="rounded-xl border border-line bg-surface p-5 space-y-3">
            <p className="font-semibold text-fg text-base">{row[0]}</p>
            <div className="space-y-1.5 pt-1 text-sm border-t border-line">
              <p className="text-xs uppercase tracking-wider text-muted font-medium">{columns[1]}</p>
              <p className="text-muted">{row[1]}</p>
            </div>
            <div className="space-y-1.5 pt-2 text-sm border-t border-line">
              <p className="text-xs uppercase tracking-wider text-accent font-medium">{columns[2]}</p>
              <p className="text-fg font-medium">{row[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingTable({
  tiers = pricingTiers,
  className,
}: {
  tiers?: PricingTier[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8", className)}>
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className="flex flex-col rounded-3xl border border-line bg-surface p-7 sm:p-8 transition-[border-color,box-shadow] hover:border-fg/20"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold tracking-tight text-fg">{tier.name}</h3>
            {tier.tagline && (
              <p className="mt-2 text-sm text-muted">{tier.tagline}</p>
            )}
          </div>

          {tier.range ? (
            <div className="mb-6 pb-6 border-b border-line">
              <p className="text-2xl font-bold tracking-tight text-fg">{tier.range}</p>
              {tier.timeline && (
                <p className="mt-1 text-xs text-muted">Typical delivery: {tier.timeline}</p>
              )}
            </div>
          ) : (
            <div className="mb-6 pb-6 border-b border-line">
              <p className="text-sm font-medium text-muted">Scope-based fixed quote after discovery</p>
              {tier.timeline && (
                <p className="mt-1 text-xs text-muted">Typical delivery: {tier.timeline}</p>
              )}
            </div>
          )}

          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-2">Example projects</p>
            <p className="text-sm text-muted leading-relaxed">{tier.examples}</p>
          </div>

          <div className="flex-1 mb-8">
            <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-3">What is included</p>
            <ul className="space-y-2.5 text-sm text-fg">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check aria-hidden className="size-4 shrink-0 mt-0.5 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact/"
            className="group mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface py-3 px-5 text-sm font-medium text-fg hover:border-fg/40 hover:bg-fg/5 transition-all"
          >
            <span>Book a process review</span>
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      ))}
    </div>
  );
}
