import { industries } from "@/content/industries";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { IndustryCard } from "@/components/cards";
import { ProductMention } from "@/components/product-mention";
import { CTASection } from "@/components/cta-section";

export const metadata = buildMetadata({
  title: "Software for Your Industry | CodXQ",
  description:
    "Custom software tailored to industry-specific bottlenecks in trading, manufacturing, logistics, healthcare, retail, construction, real estate and education.",
  path: "/industries/",
});

export default function IndustriesHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries/" },
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
        eyebrow="Sector Expertise"
        h1="Software built for how your industry actually works"
        lead="Generic software forces your operations into someone else's box. We engineer systems around your specific batch tracking, van sales, route dispatches, and compliance rules."
        primaryCta={{ label: "Book an industry process review", href: "/contact/" }}
        secondaryCta={{ label: "Browse all 8 industries", href: "#industry-grid" }}
      />

      {/* Product Mention One-Liner */}
      <Section pad="py-8" className="bg-surface/50 border-y border-line">
        <div className="max-w-2xl mx-auto text-center">
          <ProductMention />
        </div>
      </Section>

      {/* 8 Industries Grid */}
      <Section id="industry-grid" labelledBy="ind-grid-heading">
        <SectionHeader
          id="ind-grid-heading"
          eyebrow="Industry Focus"
          title="Eight industries we engineer custom systems for"
          intro="Deep operational understanding across India, the GCC and European regulatory landscapes."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <IndustryCard key={ind.slug} industry={ind} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Map your industry workflow with our engineering team"
        description="Book a free 45-minute process review. We'll examine your specific industry handoffs and show where custom software will save time and money."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
