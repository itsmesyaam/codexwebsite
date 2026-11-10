import type { ReactNode } from "react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs";
import { ButtonLink, Container, Eyebrow, cn } from "@/components/ui";

export function PageHero({
  eyebrow,
  h1,
  intro,
  lead,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  badge,
  className,
}: {
  eyebrow?: string;
  h1: ReactNode;
  intro?: ReactNode;
  lead?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: ReactNode;
  className?: string;
}) {
  const bodyText = intro ?? lead;
  return (
    <section
      aria-label="Page header"
      className={cn(
        "relative border-b border-line/60 bg-gradient-to-b from-surface/40 to-bg pt-28 pb-16 sm:pt-36 sm:pb-20",
        className
      )}
    >
      <Container>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {badge}
          </div>

          <h1 className="text-h1 tracking-tight text-fg font-semibold">
            {h1}
          </h1>

          {bodyText && (
            <p className="mt-6 text-lead text-muted max-w-3xl leading-relaxed">
              {bodyText}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <ButtonLink href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </ButtonLink>
              )}
              {secondaryCta && (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ButtonLink>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
