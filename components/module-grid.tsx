import { Icon } from "@/components/icon";
import type { IconKey, Feature } from "@/content/types";
import { cn } from "@/components/ui";

export type ModuleItem = Feature & {
  icon?: IconKey;
  tag?: string;
};

export function ModuleGrid({
  modules,
  columns = 3,
  className,
}: {
  modules: ModuleItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const colClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={cn("grid gap-6 sm:gap-8", colClass, className)}>
      {modules.map((item) => (
        <div
          key={item.name}
          className="rounded-3xl border border-line bg-surface p-7 sm:p-8 flex flex-col justify-between transition-[border-color,box-shadow] hover:border-fg/20"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-5">
              {item.icon ? (
                <div className="flex size-11 items-center justify-center rounded-2xl bg-fg/5 text-accent">
                  <Icon name={item.icon} className="size-5" />
                </div>
              ) : (
                <div className="size-2 rounded-full bg-accent" />
              )}
              {item.tag && (
                <span className="inline-flex items-center rounded-full border border-line bg-bg px-2.5 py-0.5 text-xs text-muted">
                  {item.tag}
                </span>
              )}
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-fg mb-3">
              {item.name}
            </h3>

            <p className="text-sm text-muted leading-relaxed">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
