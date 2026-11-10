import { notFound } from "next/navigation";
import { articles } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArticleLayout } from "@/components/article-components";
import { CTASection } from "@/components/cta-section";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return buildMetadata({
    title: article.metaTitle,
    description: article.description,
    path: `/blog/${article.slug}/`,
    noindex: Boolean(article.draft),
    type: "article",
  });
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  );

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/blog/" },
    { label: article.title, href: `/blog/${article.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: article.description,
            path: `/blog/${article.slug}/`,
            date: article.date,
            updated: article.updated,
          }),
          breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
        ]}
      />

      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <ArticleLayout
        article={article}
        relatedArticles={relatedArticles.length > 0 ? relatedArticles : articles.filter((a) => a.slug !== article.slug)}
      />

      <CTASection
        title="Ready to discuss your software architecture?"
        description="Book a free 45-minute process review with our technical leads in Kochi. We'll map one operational workflow and provide clear recommendations."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
