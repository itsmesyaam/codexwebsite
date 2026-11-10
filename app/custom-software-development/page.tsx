import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { serviceHubFaqs, buildVsBuy, processReview } from "@/content/company";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, ButtonLink } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServiceCard } from "@/components/cards";
import { ProcessSteps } from "@/components/process-steps";
import { EngagementModels } from "@/components/engagement-models";
import { TechStack } from "@/components/tech-stack";
import { ComparisonTable } from "@/components/tables";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { ProductMention } from "@/components/product-mention";

export const metadata = buildMetadata({
  title: "Custom Software Development Services in Kochi | CodXQ",
  description:
    "Custom software development in Kochi for growing businesses in India, the GCC and Europe. Web apps, mobile apps, ERP and CRM systems, and AI automation.",
  path: "/custom-software-development/",
});

export default function CustomSoftwareHubPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Custom Software Development",
            description: site.description,
            path: "/custom-software-development/",
          }),
          faqSchema(serviceHubFaqs),
        ]}
      />

      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/custom-software-development/" },
            ]}
          />
        </div>
      </div>

      <PageHero
        eyebrow="Core Software Engineering"
        h1="Custom software development services in Kochi"
        lead="We design, build and support software built around how your business actually works: web applications, mobile apps, ERP and CRM systems, and AI automation with full source code ownership."
        primaryCta={{ label: "Book a free process review", href: "/contact/" }}
        secondaryCta={{ label: "View engagement models", href: "#models" }}
      />

      {/* Services Grid */}
      <Section id="services-list" labelledBy="services-list-heading">
        <SectionHeader
          id="services-list-heading"
          eyebrow="Specialized Capabilities"
          title="Software services shaped around your workflows"
          intro="Every business has unique operational handoffs. We build dedicated modules that connect your sales, purchasing, inventory and finance."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Process Flow */}
      <Section id="methodology" labelledBy="methodology-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="methodology-heading"
          eyebrow="Delivery Model"
          title="How we build custom software"
          intro="From initial workflow mapping to live deployment and post-launch evolution, we demonstrate working software every two weeks."
          className="mb-12"
        />
        <ProcessSteps />
        <div className="mt-12 text-center">
          <ButtonLink href="/how-we-work/" variant="secondary">
            Read our complete 6-stage engineering process
          </ButtonLink>
        </div>
      </Section>

      {/* Engagement Models */}
      <Section id="models" labelledBy="models-heading">
        <SectionHeader
          id="models-heading"
          eyebrow="Collaboration"
          title="Flexible engagement models"
          intro="Choose the engagement model that matches your project risk profile and clarity of scope."
          className="mb-12"
        />
        <EngagementModels />
      </Section>

      {/* Technology Ecosystem */}
      <Section id="technologies" labelledBy="tech-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="tech-heading"
          eyebrow="Technology Ecosystem"
          title="Battle-tested tools and frameworks"
          intro="We choose proven technology your team can hire for and maintain over the long term, avoiding fragile fashion."
          className="mb-12"
        />
        <TechStack />
      </Section>

      {/* Build vs Buy Framework */}
      <Section id="comparison" labelledBy="build-vs-buy-heading">
        <SectionHeader
          id="build-vs-buy-heading"
          eyebrow="Strategic Evaluation"
          title="When to build custom software, and when to buy"
          intro={buildVsBuy.rule}
          className="mb-12"
        />
        <ComparisonTable columns={buildVsBuy.columns} rows={buildVsBuy.rows} />
      </Section>

      {/* Healthcare Product Mention */}
      <Section pad="py-12" className="bg-surface/30 border-y border-line">
        <div className="max-w-2xl mx-auto text-center">
          <ProductMention />
        </div>
      </Section>

      {/* Service Hub FAQs */}
      <Section id="faqs" labelledBy="hub-faqs-heading" className="bg-surface/50 border-t border-line">
        <SectionHeader
          id="hub-faqs-heading"
          eyebrow="FAQs"
          title="Frequently asked questions about our services"
          intro="Direct answers on intellectual property, existing system integrations, and project governance."
          className="mb-12"
        />
        <div className="max-w-3xl">
          <FAQAccordion items={serviceHubFaqs} />
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title={processReview.title}
        description={processReview.text}
        primaryAction={{ label: processReview.cta, href: "/contact/" }}
      />
    </>
  );
}
