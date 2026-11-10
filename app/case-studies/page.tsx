import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CaseStudyCard } from "@/components/cards";
import { CTASection } from "@/components/cta-section";

export const metadata = buildMetadata({
  title: "Our Work: Custom Software Demonstrations | CodXQ",
  description:
    "Explore how CodXQ architects custom ERPs, customer portals, field apps, and AI document workflows through interactive reference architectures.",
  path: "/case-studies/",
});

export default function CaseStudiesHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "/case-studies/" },
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
        eyebrow="Portfolio & Architectures"
        h1="Our work: custom software case studies and demonstrations"
        lead="We demonstrate how we solve operational challenges in multi-location distribution, customer self-service, mobile field inspections, and AI document extraction."
        primaryCta={{ label: "Book a process review", href: "/contact/" }}
        secondaryCta={{ label: "Explore projects", href: "#projects" }}
      />

      {/* Demonstration Projects Notice */}
      <Section pad="py-8" className="bg-surface/50 border-y border-line">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-1.5">
            Demonstration Reference Architectures
          </p>
          <p className="text-xs text-muted leading-relaxed">
            The projects below are illustrative demonstrations showcasing our technical architecture, workflow mapping, and integration methodology. Client references are shared privately under NDA.
          </p>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section id="projects" labelledBy="projects-heading">
        <SectionHeader
          id="projects-heading"
          eyebrow="Architectures"
          title="Featured systems and workflow solutions"
          intro="Click into each project to review the operational bottleneck, discovery findings, and modular solution."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} study={cs} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Have a similar workflow challenge?"
        description="Book a free 45-minute process review. We'll map your existing process and show how a custom system can be structured."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
