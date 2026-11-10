import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { buildVsBuy, homeFaqs } from "@/content/company";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, ButtonLink } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { RegionCards, ServiceCard, IndustryCard } from "@/components/cards";
import { ProcessSteps } from "@/components/process-steps";
import { ComparisonTable } from "@/components/tables";
import { FAQAccordion } from "@/components/faq-accordion";
import { ProductMention } from "@/components/product-mention";
import { CTASection } from "@/components/cta-section";

export const metadata = buildMetadata({
  title: "Custom Software Development Company in Kochi | CodXQ",
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero Section */}
      <PageHero
        eyebrow="Software Engineering Partner • Kochi, India"
        h1="Custom software development in Kochi, built around your business"
        lead={site.entitySentence}
        primaryCta={{ label: "Book a free process review", href: "/contact/" }}
        secondaryCta={{ label: "Explore services", href: "/custom-software-development/" }}
      />

      {/* Target Regions */}
      <Section id="regions" labelledBy="regions-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="regions-heading"
          eyebrow="Regional Reach"
          title="Software built for how business is done across three regions"
          intro="India, the GCC and Europe operate under different tax, language and data residency rules. We engineer for those realities from the first sprint."
          className="mb-12"
        />
        <RegionCards />
      </Section>

      {/* Core Services */}
      <Section id="services" labelledBy="services-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeader
            id="services-heading"
            eyebrow="Services"
            title="Software services built around your workflows"
            intro="From multi-location ERPs to customer web portals and field-service mobile apps, every system is built to fit your operational reality."
          />
          <Link
            href="/custom-software-development/"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline whitespace-nowrap self-start sm:self-end"
          >
            <span>All software services</span>
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section id="industries" labelledBy="industries-heading" className="bg-surface/50 border-y border-line">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeader
            id="industries-heading"
            eyebrow="Industries"
            title="Software built for how your industry actually works"
            intro="We design for industry-specific bottlenecks: batch tracking in manufacturing, multi-currency trading, or dispatch routes in logistics."
          />
          <Link
            href="/industries/"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline whitespace-nowrap self-start sm:self-end"
          >
            <span>All 8 industries</span>
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <IndustryCard key={ind.slug} industry={ind} />
          ))}
        </div>
      </Section>

      {/* Engineering Process */}
      <Section id="process" labelledBy="process-heading">
        <SectionHeader
          id="process-heading"
          eyebrow="Our Process"
          title="How we build custom software"
          intro="A six-stage delivery model where working software is demonstrated every two weeks and you retain complete source code ownership."
          className="mb-12"
        />
        <ProcessSteps />
        <div className="mt-12 text-center">
          <ButtonLink href="/how-we-work/" variant="secondary">
            Learn more about our development methodology
          </ButtonLink>
        </div>
      </Section>

      {/* Product Mention One-Liner */}
      <Section pad="py-12" className="bg-surface/30 border-y border-line">
        <div className="max-w-2xl mx-auto text-center">
          <ProductMention />
        </div>
      </Section>

      {/* Build vs Buy Framework */}
      <Section id="build-vs-buy" labelledBy="comparison-heading">
        <SectionHeader
          id="comparison-heading"
          eyebrow="Strategic Framework"
          title="When to build custom software, and when to buy"
          intro={buildVsBuy.rule}
          className="mb-12"
        />
        <ComparisonTable columns={buildVsBuy.columns} rows={buildVsBuy.rows} />
      </Section>

      {/* Home FAQs */}
      <Section id="faq" labelledBy="faq-heading" className="bg-surface/50 border-t border-line">
        <SectionHeader
          id="faq-heading"
          eyebrow="FAQs"
          title="Frequently asked questions"
          intro="Clear, direct answers about working with CodXQ on custom software development."
          className="mb-12"
        />
        <div className="max-w-3xl">
          <FAQAccordion items={homeFaqs} />
        </div>
      </Section>

      {/* Final Call to Action */}
      <CTASection
        title="Ready to map your workflows?"
        description="Book a free 45-minute process review with our engineering team in Kochi. We'll map one operational workflow and show where software saves time or money."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
