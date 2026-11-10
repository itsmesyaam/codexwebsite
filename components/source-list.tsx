import { ExternalLink } from "lucide-react";
import { cn } from "@/components/ui";

export function SourceList({
  sources,
  className,
}: {
  sources?: { title: string; url: string }[];
  className?: string;
}) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className={cn("rounded-2xl border border-line bg-surface p-6", className)}>
      <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-3">
        Official sources & regulatory references
      </p>
      <ul className="space-y-2 text-xs">
        {sources.map((src, i) => (
          <li key={i}>
            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-accent hover:underline"
            >
              <span>{src.title}</span>
              <ExternalLink aria-hidden className="size-3 transition-transform group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
