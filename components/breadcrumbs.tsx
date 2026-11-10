import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/components/ui";

export type BreadcrumbItem = {
  name?: string;
  label?: string;
  href: string;
};

export function Breadcrumbs({
  items,
  className,
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  if (!items || items.length === 0) return null;

  // Filter out Home if passed as the first item so it isn't rendered twice
  const displayItems = items[0]?.href === "/" ? items.slice(1) : items;

  return (
    <nav aria-label="Breadcrumbs" className={cn("mb-6 text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-muted">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-fg focus-visible:outline-accent"
          >
            Home
          </Link>
        </li>
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const text = item.name || item.label || "";
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronRight aria-hidden className="size-3.5 text-muted/60" />
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-fg"
                >
                  {text}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-fg focus-visible:outline-accent"
                >
                  {text}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
