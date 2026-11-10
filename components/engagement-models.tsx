import { engagementModels } from "@/content/company";
import { cn } from "@/components/ui";

export function EngagementModels({
  models = engagementModels,
  className,
}: {
  models?: typeof engagementModels;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {models.map((model) => (
        <div
          key={model.name}
          className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-7 transition-[border-color,box-shadow] hover:border-fg/20"
        >
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-fg mb-3">
              {model.name}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              {model.text}
            </p>
          </div>

          <div className="pt-5 border-t border-line">
            <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-1.5">
              Best for
            </p>
            <p className="text-xs text-fg font-medium">
              {model.bestFor}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
