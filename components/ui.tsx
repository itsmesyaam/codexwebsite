import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  id,
  labelledBy,
  className,
  pad = "py-20 sm:py-28",
  children,
}: {
  id?: string;
  labelledBy?: string;
  className?: string;
  pad?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(pad, className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ className, children }: { className?: string; children: ReactNode }) {
  return <p className={cn("eyebrow text-accent", className)}>{children}</p>;
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <h2 id={id} className="text-h2">
        {title}
      </h2>
      {intro && <p className="mt-6 text-lead text-muted">{intro}</p>}
    </div>
  );
}

const variants = {
  primary: "h-12 rounded-full px-6 text-[15px] bg-fg text-bg hover:bg-fg/85",
  secondary: "h-12 rounded-full px-6 text-[15px] border border-line bg-surface text-fg hover:border-fg/30",
  inverse: "h-12 rounded-full px-6 text-[15px] bg-bg text-fg hover:bg-bg/85",
  inverseGhost: "h-12 rounded-full px-6 text-[15px] border border-bg/25 text-bg hover:border-bg/60",
  small: "h-9 rounded-full px-4 text-sm bg-fg text-bg hover:bg-fg/85",
  link: "text-[15px] text-accent underline-offset-4 hover:underline",
};

export function ButtonLink({
  href,
  variant = "primary",
  arrow = true,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 font-medium transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98]",
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );
  return /^https?:\/\//.test(href) ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-muted">
      {children}
    </span>
  );
}

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Placeholder mark — replace with the final CodXQ logo. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden className={className}>
      <rect width="28" height="28" rx="8" fill="currentColor" />
      <path d="M9.5 9.5l9 9M18.5 9.5l-9 9" stroke="var(--bg)" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" aria-label="CodXQ home" className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight">
      <LogoMark className="size-7" />
      <span>
        Cod<span className="text-accent">X</span>Q
      </span>
    </Link>
  );
}
