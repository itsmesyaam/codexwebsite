import { approach, type Step } from "@/content/company";
import { cn } from "@/components/ui";

export function ProcessSteps({
  steps = approach,
  className,
}: {
  steps?: Step[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", className)}>
      {steps.map((step, idx) => (
        <div
          key={step.key}
          className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-7 sm:p-8 transition-[border-color,box-shadow] hover:border-fg/20"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-5">
              <span className="font-mono text-xs tracking-wider uppercase text-accent font-semibold">
                Step 0{idx + 1}
              </span>
              {step.duration && (
                <span className="inline-flex items-center rounded-full border border-line bg-bg px-2.5 py-0.5 text-xs text-muted">
                  {step.duration}
                </span>
              )}
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-fg mb-3">
              {step.title}
            </h3>

            <p className="text-sm text-muted leading-relaxed mb-6">
              {step.text}
            </p>
          </div>

          <div className="pt-5 border-t border-line">
            <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-2.5">
              Key outputs
            </p>
            <ul className="space-y-1.5 text-xs text-fg">
              {step.outputs.map((out) => (
                <li key={out} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent shrink-0" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
