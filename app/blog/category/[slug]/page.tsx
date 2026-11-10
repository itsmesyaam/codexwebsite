import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categories, getCategory, articles } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArticleCard } from "@/components/article-components";
import { CTASection } from "@/components/cta-section";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};

  return buildMetadata({
    title: `${cat.name} Insights | CodXQ`,
    description: cat.description,
    path: `/blog/category/${cat.slug}/`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getCategory(slug);

  if (!cat) {
    notFound();
  }

  const categoryArticles = articles.filter((a) => a.category === cat.slug);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/blog/" },
    { label: cat.name, href: `/blog/category/${cat.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.href })))}
      />

      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <PageHero
        eyebrow="Category Topic"
        h1={cat.name}
        lead={cat.description}
        primaryCta={{ label: "Browse all topics", href: "/blog/" }}
        secondaryCta={{ label: "Book a process review", href: "/contact/" }}
      />

      <Section pad="py-12 sm:py-20">
        <div className="mb-8">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-fg transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>All topics</span>
          </Link>
        </div>

        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-line bg-surface p-12 text-center max-w-md mx-auto space-y-3">
            <p className="text-sm font-semibold text-fg">Articles coming soon in this category</p>
            <p className="text-xs text-muted">
              We publish regular engineering deep-dives. Check back shortly or explore our other topic hubs.
            </p>
          </div>
        )}
      </Section>

      <CTASection
        title="Map your architecture with our engineers"
        description="Book a free 45-minute process review with our technical leads in Kochi. We'll map one operational workflow and advise on modern software best practices."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
