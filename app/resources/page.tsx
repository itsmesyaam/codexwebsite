import { leadMagnets } from "@/content/leadMagnets";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LeadMagnetCard } from "@/components/cards";
import { CTASection } from "@/components/cta-section";

export const metadata = buildMetadata({
  title: "Resources & Guides for Software Decisions | CodXQ",
  description:
    "Free practical checklists, evaluation scorecards, RFP templates, and interactive cost estimators for growing businesses.",
  path: "/resources/",
});

export default function ResourcesHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources/" },
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
        eyebrow="Practical Tools & Templates"
        h1="Resources and guides for business software decisions"
        lead="Free technical checklists, vendor brief templates, build-vs-buy frameworks, and interactive cost estimators to de-risk your technology investments."
        primaryCta={{ label: "Calculate project estimate", href: "/resources/custom-software-cost-estimator/" }}
        secondaryCta={{ label: "Browse all resources", href: "#catalog" }}
      />

      {/* Resources Catalog */}
      <Section id="catalog" labelledBy="catalog-heading">
        <SectionHeader
          id="catalog-heading"
          eyebrow="Downloadable Resources"
          title="Field-tested frameworks and checklists"
          intro="Used by business owners, operations leaders, and CIOs across India, the GCC, and Europe."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {leadMagnets.map((lm) => (
            <LeadMagnetCard key={lm.slug} item={lm} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Need an expert review of your software brief?"
        description="Book a free 45-minute process review with our technical leads in Kochi. We'll examine your requirements and give you independent advice."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
