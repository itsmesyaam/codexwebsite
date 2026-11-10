import Link from "next/link";
import { ArrowRight, Check, Calculator, Sparkles } from "lucide-react";
import { costFactors, includedInEveryProject } from "@/content/pricing";
import { pricingFaqs } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PricingTable } from "@/components/tables";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";

export const metadata = buildMetadata({
  title: "Custom Software Development Cost: How We Price Projects | CodXQ",
  description:
    "Understand the factors that determine custom software development costs, our pricing models, and what is included in every CodXQ engagement.",
  path: "/pricing/",
});

export default function PricingPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing/" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(pricingFaqs),
        ]}
      />

      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <PageHero
        eyebrow="Transparent Commercials"
        h1="Custom software development cost: how we price projects"
        lead="We price custom software based on the real complexity of your workflows, user roles, and compliance requirements. Every engagement starts with a written scope and firm fixed quote."
        primaryCta={{ label: "Book a process review", href: "/contact/" }}
        secondaryCta={{ label: "Calculate project estimate", href: "/resources/custom-software-cost-estimator/" }}
      />

      {/* Cost Estimator Feature Banner */}
      <Section pad="py-10" className="bg-surface/50 border-y border-line">
        <div className="max-w-4xl mx-auto rounded-3xl border border-accent/20 bg-accent/5 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-wider">
              <Calculator className="size-4" aria-hidden />
              <span>Interactive Tool</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-fg">
              Estimate your custom software investment
            </h2>
            <p className="text-sm text-muted max-w-xl">
              Answer 8 questions about your platforms, user roles, offline sync, and integrations to generate a structured project summary.
            </p>
          </div>
          <Link
            href="/resources/custom-software-cost-estimator/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-fg text-bg px-6 py-3.5 text-sm font-semibold hover:bg-fg/85 transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <span>Launch Cost Estimator</span>
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Section>

      {/* Pricing Tiers Grid */}
      <Section id="tiers" labelledBy="tiers-heading">
        <SectionHeader
          id="tiers-heading"
          eyebrow="Project Tiers"
          title="Project pricing tiers"
          intro="Every tier delivers clean source code you own, demonstrated in two-week agile increments."
          className="mb-12"
        />
        <PricingTable />
      </Section>

      {/* Cost Factors */}
      <Section id="factors" labelledBy="factors-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="factors-heading"
          eyebrow="Key Drivers"
          title="Eight factors that determine custom software cost"
          intro="Why fixed price packages fail: custom software investments depend on technical and regulatory depth."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {costFactors.map((factor) => (
            <div key={factor.name} className="rounded-2xl border border-line bg-surface p-6 space-y-2.5">
              <h3 className="text-base font-semibold text-fg">{factor.name}</h3>
              <p className="text-xs text-muted leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Included in Every Project */}
      <Section id="inclusions" labelledBy="inclusions-heading">
        <div className="max-w-4xl rounded-3xl border border-line bg-surface p-8 sm:p-12">
          <SectionHeader
            id="inclusions-heading"
            eyebrow="Standard Inclusions"
            title="What is included in every CodXQ project quote"
            intro="We never bill separately for discovery, prototype validation, or warranty handover."
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {includedInEveryProject.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="size-5 shrink-0 text-accent mt-0.5" aria-hidden />
                <span className="text-sm text-fg leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faqs" labelledBy="pricing-faqs-heading" className="bg-surface/50 border-t border-line">
        <SectionHeader
          id="pricing-faqs-heading"
          eyebrow="FAQs"
          title="Frequently asked questions about pricing"
          className="mb-12"
        />
        <div className="max-w-3xl">
          <FAQAccordion items={pricingFaqs} />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Get a scope-based quote for your business"
        description="Book a free 45-minute process review. We'll examine your workflows, identify integration requirements, and provide a realistic planning estimate."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
