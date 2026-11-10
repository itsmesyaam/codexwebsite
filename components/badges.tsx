import { cn } from "@/components/ui";

export function DemoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-400",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-amber-500" aria-hidden />
      Demonstration project
    </span>
  );
}

export function LastUpdated({
  date,
  className,
}: {
  date: string;
  className?: string;
}) {
  return (
    <p className={cn("text-xs text-muted", className)}>
      Last updated:{" "}
      <time dateTime={date}>
        {new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        })}
      </time>
    </p>
  );
}
