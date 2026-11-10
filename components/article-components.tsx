"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, BookOpen, Clock, Calendar, Check, ExternalLink } from "lucide-react";
import { type Article, type Block, categories, getCategory } from "@/content/articles";
import { formatDate, cn } from "@/components/ui";
import { LastUpdated } from "@/components/badges";
import { SourceList } from "@/components/source-list";
import { FAQAccordion } from "@/components/faq-accordion";

export function ArticleCard({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  const cat = getCategory(article.category);

  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-3xl border border-line bg-surface p-7 sm:p-8 transition-[border-color,box-shadow] hover:border-fg/20",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          {cat && (
            <Link
              href={`/blog/category/${cat.slug}/`}
              className="inline-flex items-center rounded-full border border-line bg-bg px-3 py-0.5 text-xs font-medium text-muted hover:text-fg hover:border-fg/30 transition-colors"
            >
              {cat.name}
            </Link>
          )}
          <time dateTime={article.date} className="text-xs text-muted">
            {formatDate(article.date)}
          </time>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-fg mb-3 group-hover:text-accent transition-colors">
          <Link href={`/blog/${article.slug}/`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-6">
          {article.description}
        </p>
      </div>

      <div className="pt-4 border-t border-line flex items-center justify-between">
        <Link
          href={`/blog/${article.slug}/`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:underline"
        >
          <span>Read article</span>
          <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export function AuthorBox({
  author,
  className,
}: {
  author?: { name: string | null; role: string | null };
  className?: string;
}) {
  // Hard rule: Renders nothing when author name is null. Never invent people.
  if (!author || !author.name) return null;

  return (
    <div className={cn("rounded-2xl border border-line bg-surface p-6 flex items-center gap-4", className)}>
      <div className="size-12 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center text-sm">
        {author.name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div>
        <p className="font-semibold text-fg text-sm">{author.name}</p>
        {author.role && <p className="text-xs text-muted">{author.role}</p>}
      </div>
    </div>
  );
}

export function CategoryFilter({
  activeCategory,
  onSelect,
  className,
}: {
  activeCategory?: string;
  onSelect?: (slug: string | null) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2 items-center", className)}>
      <button
        type="button"
        onClick={() => onSelect?.(null)}
        className={cn(
          "rounded-full px-4 py-2 text-xs font-medium transition-colors cursor-pointer",
          !activeCategory
            ? "bg-fg text-bg"
            : "border border-line bg-surface text-muted hover:text-fg hover:border-fg/30"
        )}
      >
        All topics
      </button>
      {categories.map((cat) => {
        const isActive = activeCategory === cat.slug;
        return (
          <button
            key={cat.slug}
            type="button"
            onClick={() => onSelect?.(cat.slug)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-medium transition-colors cursor-pointer",
              isActive
                ? "bg-fg text-bg"
                : "border border-line bg-surface text-muted hover:text-fg hover:border-fg/30"
            )}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search articles by title, topic, or keyword...",
  className,
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <Search className="absolute inset-y-0 start-3.5 my-auto size-4 text-muted pointer-events-none" aria-hidden />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-line bg-surface ps-10 pe-4 py-2.5 text-xs text-fg placeholder:text-muted/60 transition-[border-color,box-shadow] focus:outline-none focus:border-accent"
      />
    </div>
  );
}

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p className="text-base text-fg/90 leading-relaxed mb-6">{block.text}</p>;
    case "h2":
      return (
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg mt-12 mb-4">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-xl font-semibold tracking-tight text-fg mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "note":
      return (
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 my-8 text-sm text-fg leading-relaxed">
          <p className="font-semibold text-accent mb-1 text-xs uppercase tracking-wider">Note</p>
          <p>{block.text}</p>
        </div>
      );
    case "ul":
      return (
        <ul className="space-y-2.5 my-6 text-sm text-fg/90">
          {block.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2.5 my-6 text-sm text-fg/90 list-decimal list-inside">
          {block.items.map((item, idx) => (
            <li key={idx} className="ps-1">
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-line bg-surface">
          <table className="w-full text-start border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-line bg-bg/50">
                {block.columns.map((col, idx) => (
                  <th key={idx} className="p-3.5 text-start font-semibold text-fg">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-bg/20">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3.5 align-top text-muted">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export function ArticleLayout({
  article,
  relatedArticles = [],
}: {
  article: Article;
  relatedArticles?: Article[];
}) {
  const cat = getCategory(article.category);
  // Extract H2s for TOC
  const toc = article.body.filter((b) => b.type === "h2") as { type: "h2"; text: string }[];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        {/* Article Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {cat && (
              <Link
                href={`/blog/category/${cat.slug}/`}
                className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted hover:text-fg hover:border-fg/30 transition-colors"
              >
                {cat.name}
              </Link>
            )}
            <span className="text-xs text-muted">&bull;</span>
            <time dateTime={article.date} className="text-xs text-muted">
              {formatDate(article.date)}
            </time>
            {article.updated && (
              <>
                <span className="text-xs text-muted">&bull;</span>
                <LastUpdated date={article.updated} />
              </>
            )}
          </div>

          <h1 className="text-h2 mb-6">
            {article.title}
          </h1>

          <p className="text-lg text-muted leading-relaxed">
            {article.description}
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-2">
            {/* Table of Contents for Mobile / Inline */}
            {toc.length > 0 && (
              <div className="lg:hidden rounded-2xl border border-line bg-surface p-6 mb-8">
                <p className="font-semibold text-xs uppercase tracking-wider text-muted mb-3">Contents</p>
                <ul className="space-y-2 text-sm">
                  {toc.map((item, idx) => (
                    <li key={idx}>
                      <span className="text-muted hover:text-fg cursor-pointer">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Blocks */}
            <div className="prose-content">
              {article.body.map((block, idx) => (
                <BlockRenderer key={idx} block={block} />
              ))}
            </div>

            {/* FAQs if present */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-16 pt-10 border-t border-line">
                <h2 className="text-2xl font-semibold tracking-tight text-fg mb-6">
                  Frequently asked questions
                </h2>
                <FAQAccordion items={article.faqs} />
              </div>
            )}

            {/* Sources list */}
            {article.sources && article.sources.length > 0 && (
              <div className="mt-12">
                <SourceList sources={article.sources} />
              </div>
            )}

            {/* Author Attribution */}
            <div className="mt-12">
              <AuthorBox author={article.author} />
            </div>

            {/* Lead Magnet CTA Card */}
            {article.leadMagnet && (
              <div className="mt-12 rounded-3xl border border-line bg-surface p-8">
                <p className="eyebrow text-accent mb-2">Free Resource</p>
                <h3 className="text-xl font-semibold text-fg mb-3">{article.leadMagnet.label}</h3>
                <p className="text-sm text-muted mb-6">
                  Get instant access to this practical checklist and operational guide.
                </p>
                <Link
                  href={article.leadMagnet.href}
                  className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 text-sm font-medium hover:bg-fg/85 transition-colors"
                >
                  <span>Download now</span>
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </div>
            )}

            {/* Service Link CTA */}
            <div className="mt-8 rounded-3xl border border-line bg-bg p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-1">Related Service</p>
                <p className="text-base font-semibold text-fg">{article.service.label}</p>
              </div>
              <Link
                href={article.service.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                <span>Learn more</span>
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
          </div>

          {/* Sticky Sidebar on Desktop */}
          <div className="hidden lg:block lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">
              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <p className="font-semibold text-xs uppercase tracking-wider text-muted mb-4">Contents</p>
                  <ul className="space-y-2.5 text-xs">
                    {toc.map((item, idx) => (
                      <li key={idx} className="text-muted hover:text-fg transition-colors">
                        <span className="line-clamp-2">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sidebar CTA */}
              <div className="rounded-2xl border border-line bg-surface p-6">
                <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-2">Process Review</p>
                <h3 className="text-base font-semibold text-fg mb-2">Talk with our engineering team</h3>
                <p className="text-xs text-muted mb-5 leading-relaxed">
                  Map one workflow with our engineers in Kochi. Free 45-minute discovery call.
                </p>
                <Link
                  href={article.cta.href}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-fg text-bg py-2.5 px-4 text-xs font-medium hover:bg-fg/85 transition-colors"
                >
                  <span>{article.cta.label}</span>
                  <ArrowRight aria-hidden className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-24 pt-16 border-t border-line">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-8">
              Related insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((rel) => (
                <ArticleCard key={rel.slug} article={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
