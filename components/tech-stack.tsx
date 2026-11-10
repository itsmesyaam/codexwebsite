import { techStack } from "@/content/company";
import { cn } from "@/components/ui";

export function TechStack({
  stack = techStack,
  className,
}: {
  stack?: { group: string; items: string[] }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", className)}>
      {stack.map((group) => (
        <div
          key={group.group}
          className="rounded-3xl border border-line bg-surface p-7 sm:p-8 transition-[border-color,box-shadow] hover:border-fg/20"
        >
          <h3 className="text-lg font-semibold tracking-tight text-fg mb-4">
            {group.group}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-line bg-bg px-3.5 py-1 text-xs font-medium text-fg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
