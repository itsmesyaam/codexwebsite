import Link from "next/link";
import { ArrowRight, Check, Clock, Globe } from "lucide-react";
import { Icon } from "@/components/icon";
import { DemoBadge } from "@/components/badges";
import type { Service } from "@/content/services";
import type { Industry } from "@/content/industries";
import type { CaseStudy, CoverKey } from "@/content/case-studies";
import { regions as defaultRegions, type Region } from "@/content/company";
import type { LeadMagnet } from "@/content/leadMagnets";
import { cn } from "@/components/ui";

/** Typographic/geometric composed cover for projects without stock photos */
export function CoverVisual({
  title = "System Architecture",
  cover,
  coverKey = "erp",
  className,
}: {
  title?: string;
  cover?: CoverKey;
  coverKey?: CoverKey;
  className?: string;
}) {
  const activeKey = cover || coverKey;
  return (
    <div
      className={cn(
        "cover relative flex aspect-16/10 w-full flex-col justify-between overflow-hidden rounded-2xl border border-line p-6 sm:p-7 select-none",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-semibold tracking-wider uppercase text-accent">
          {activeKey.toUpperCase()} // ARCHITECTURE
        </span>
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-accent/40" />
          <span className="size-2 rounded-full bg-accent/20" />
          <span className="size-2 rounded-full bg-accent/10" />
        </div>
      </div>

      <div className="relative z-10 my-auto">
        <p className="font-mono text-xs text-muted mb-1">CODEX // RUNTIME</p>
        <p className="text-xl sm:text-2xl font-semibold tracking-tight text-fg line-clamp-2">
          {title}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-line/60 pt-3 text-xs text-muted font-mono">
        <span>CodXQ Systems</span>
        <span>PROD // LIVE</span>
      </div>
    </div>
  );
}

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-all duration-200 hover:border-fg/30 hover:shadow-sm focus-visible:outline-accent",
        className
      )}
    >
      <div>
        <div className="mb-5 inline-grid size-12 place-items-center rounded-xl bg-bg text-fg border border-line/80 group-hover:border-accent/40 group-hover:text-accent transition-colors">
          <Icon name={service.icon} className="size-6" />
        </div>

        <h3 className="text-xl font-semibold text-fg tracking-tight group-hover:text-accent transition-colors">
          {service.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.summary}
        </p>

        {service.modules && service.modules.items.length > 0 && (
          <ul className="mt-5 space-y-1.5 border-t border-line/60 pt-4 text-xs text-muted">
            {service.modules.items.slice(0, 3).map((item) => (
              <li key={item.name} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent shrink-0" aria-hidden />
                <span className="truncate">{item.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-accent pt-2">
        <span>Explore service</span>
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export function IndustryCard({
  industry,
  className,
}: {
  industry: Industry;
  className?: string;
}) {
  return (
    <Link
      href={`/industries/${industry.slug}/`}
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-all duration-200 hover:border-fg/30 hover:shadow-sm focus-visible:outline-accent",
        className
      )}
    >
      <div>
        <div className="mb-5 inline-grid size-12 place-items-center rounded-xl bg-bg text-fg border border-line/80 group-hover:border-accent/40 group-hover:text-accent transition-colors">
          <Icon name={industry.icon} className="size-6" />
        </div>

        <h3 className="text-xl font-semibold text-fg tracking-tight group-hover:text-accent transition-colors">
          {industry.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {industry.summary}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-accent">
        <span>View industry solutions</span>
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export function CaseStudyCard({
  study,
  className,
}: {
  study: CaseStudy;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-line bg-surface p-6 sm:p-7 transition-all duration-200 hover:border-fg/30 hover:shadow-sm",
        className
      )}
    >
      <div>
        <CoverVisual title={study.name} coverKey={study.cover} className="mb-6" />

        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          {study.demo && <DemoBadge />}
          <span className="text-xs font-mono uppercase text-muted tracking-wider">
            {study.clientType}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-fg tracking-tight">
          <Link
            href={`/case-studies/${study.slug}/`}
            className="hover:text-accent focus-visible:outline-accent"
          >
            {study.name}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
          {study.summary}
        </p>

        {study.technologies && study.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {study.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-line bg-bg px-2 py-0.5 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-line/60">
        <Link
          href={`/case-studies/${study.slug}/`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:underline focus-visible:outline-accent"
        >
          <span>Read case breakdown</span>
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function RegionCards({
  regions = defaultRegions,
  className,
}: {
  regions?: Region[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {regions.map((reg) => (
        <div
          key={reg.key}
          className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-7 shadow-2xs"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-accent">
              <Globe aria-hidden className="size-5" />
              <span className="eyebrow">{reg.key}</span>
            </div>

            <h3 className="text-xl font-semibold text-fg tracking-tight">
              {reg.title}
            </h3>

            <ul className="mt-5 space-y-2.5 text-sm text-muted">
              {reg.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5">
                  <Check aria-hidden className="size-4 shrink-0 text-accent mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-line/60 pt-5">
            <p className="text-xs font-mono uppercase text-muted mb-2">Dedicated locations:</p>
            <div className="flex flex-wrap gap-2">
              {reg.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium text-fg hover:border-accent/50 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LeadMagnetCard({
  magnet,
  item,
  className,
}: {
  magnet?: LeadMagnet;
  item?: LeadMagnet;
  className?: string;
}) {
  const activeMagnet = magnet || item;
  if (!activeMagnet) return null;

  return (
    <article
      className={cn(
        "flex flex-col justify-between rounded-2xl border border-line bg-surface p-7 shadow-2xs transition-all duration-200 hover:border-fg/30",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="eyebrow text-accent">{activeMagnet.eyebrow}</span>
          <span className="rounded-full border border-line bg-bg px-2.5 py-0.5 text-xs text-muted">
            {activeMagnet.format}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-fg tracking-tight">
          <Link
            href={`/resources/${activeMagnet.slug}/`}
            className="hover:text-accent focus-visible:outline-accent"
          >
            {activeMagnet.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {activeMagnet.summary}
        </p>

        <div className="mt-5 space-y-1.5 border-t border-line/60 pt-4 text-xs text-muted">
          <p className="font-medium text-fg mb-2">What is included:</p>
          {activeMagnet.whatInside.slice(0, 3).map((feat) => (
            <div key={feat} className="flex items-center gap-2">
              <Check aria-hidden className="size-3.5 text-accent shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-line/60">
        <Link
          href={`/resources/${activeMagnet.slug}/`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline focus-visible:outline-accent"
        >
          <span>{activeMagnet.downloadLabel}</span>
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>
    </article>
  );
}
