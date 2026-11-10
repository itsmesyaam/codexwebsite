import { articles } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogHubClient } from "@/components/blog-hub-client";
import { CTASection } from "@/components/cta-section";

export const metadata = buildMetadata({
  title: "Insights & Technical Guides | CodXQ",
  description:
    "Frameworks, trade-offs, and regulatory compliance guides for growing businesses building custom software across India, the GCC, and Europe.",
  path: "/blog/",
});

export default function BlogHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/blog/" },
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
        eyebrow="Insights & Analysis"
        h1="Insights on custom software, architecture and compliance"
        lead="Straightforward guides on build vs buy decisions, operational workflow automation, regional e-invoicing mandates, and technical partnerships."
        primaryCta={{ label: "Book a process review", href: "/contact/" }}
        secondaryCta={{ label: "Browse topics", href: "#insights" }}
      />

      <Section id="insights" pad="py-12 sm:py-20">
        <BlogHubClient initialArticles={articles} />
      </Section>

      <CTASection
        title="Have questions about your software architecture?"
        description="Book a free 45-minute process review with our technical leads in Kochi. We'll examine your workflows and give you independent advice."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
