import { ArrowRight, MessageSquare } from "lucide-react";
import { site, whatsappLink } from "@/content/site";
import { ButtonLink, Container, Section, cn } from "@/components/ui";

export function WhatsAppButton({
  text = "Hi CodXQ, I'd like to discuss a custom software project.",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-line bg-surface px-6 text-[15px] font-medium text-fg shadow-2xs transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:text-emerald-600 dark:hover:text-emerald-400 active:scale-[0.98] focus-visible:outline-emerald-500",
        className
      )}
    >
      <MessageSquare className="size-4.5 text-emerald-600 dark:text-emerald-400" aria-hidden />
      <span>WhatsApp {site.whatsapp.display}</span>
    </a>
  );
}

export function CTASection({
  title = "Start with a free 45-minute process review",
  intro,
  description,
  primaryAction = { label: "Book a process review", href: "/contact/" },
  className,
}: {
  title?: string;
  intro?: string;
  description?: string;
  primaryAction?: { label: string; href: string };
  className?: string;
}) {
  const bodyText =
    intro ??
    description ??
    "We map one workflow with you and identify where time and money leak, whether or not you decide to build software with us. No obligations, no pitch deck.";
  return (
    <Section pad="py-16 sm:py-24" className={className}>
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-14 lg:p-16 shadow-xs">
        <div className="cta-glow" aria-hidden />

        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow text-accent mb-4">Discovery First</p>
          <h2 className="text-h2 font-semibold text-fg tracking-tight">
            {title}
          </h2>
          <p className="mt-5 text-lead text-muted leading-relaxed">
            {bodyText}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={primaryAction.href} variant="primary">
              {primaryAction.label}
            </ButtonLink>
            <WhatsAppButton />
          </div>

          <p className="mt-6 text-xs text-muted">
            NDA signed on request before discovery discussions. Kochi team, overlapping with India, GCC, and Europe.
          </p>
        </div>
      </div>
    </Section>
  );
}
