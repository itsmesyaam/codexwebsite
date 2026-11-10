import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services, getService } from "@/content/services";
import { industries, getIndustry } from "@/content/industries";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ModuleGrid } from "@/components/module-grid";
import { ComparisonTable } from "@/components/tables";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { ProductMention } from "@/components/product-mention";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedIndustries = service.industries
    .map((indSlug) => getIndustry(indSlug))
    .filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/custom-software-development/" },
    { label: service.name, href: `/services/${service.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.description,
            path: `/services/${service.slug}/`,
          }),
          breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(service.faqs),
        ]}
      />

      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <PageHero
        eyebrow="Specialized Software Service"
        h1={service.h1}
        lead={service.intro}
        primaryCta={{ label: "Book a free process review", href: "/contact/" }}
        secondaryCta={{ label: "Explore modules", href: "#modules" }}
      />

      {/* Explainer / Direct Definition (H2) */}
      <Section id="explainer" pad="py-16 sm:py-20" className="bg-surface/50 border-y border-line">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent mb-4">Definition</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg mb-4">
            {service.explainer.q}
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {service.explainer.a}
          </p>
        </div>
      </Section>

      {/* Key Signs */}
      <Section id="signs" labelledBy="signs-heading">
        <SectionHeader
          id="signs-heading"
          eyebrow="Operational Assessment"
          title={service.signs.title}
          intro="If your organisation faces these operational bottlenecks, custom software solves the underlying workflow friction."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {service.signs.items.map((sign, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-6"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-mono text-xs font-semibold">
                {idx + 1}
              </div>
              <p className="text-sm text-fg leading-relaxed">{sign}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Modules We Build */}
      <Section id="modules" labelledBy="modules-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="modules-heading"
          eyebrow="Architecture & Modules"
          title={service.modules.title}
          intro="Modular features designed for your roles, rules and permissions, deployed in two-week iterative cycles."
          className="mb-12"
        />
        <ModuleGrid modules={service.modules.items} columns={3} />
      </Section>

      {/* Benefits & Use Cases Grid */}
      <Section id="benefits" labelledBy="benefits-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          <div>
            <SectionHeader
              id="benefits-heading"
              eyebrow="Outcomes"
              title="Key business benefits"
              className="mb-8"
            />
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="size-5 shrink-0 text-accent mt-0.5" aria-hidden />
                  <span className="text-sm sm:text-base text-fg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              id="usecases-heading"
              eyebrow="Real-World Workflows"
              title="Common use cases"
              className="mb-8"
            />
            <div className="space-y-4">
              {service.useCases.map((uc, idx) => (
                <div key={idx} className="rounded-2xl border border-line bg-surface p-5">
                  <p className="text-sm text-muted leading-relaxed">{uc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Optional Comparison Table */}
      {service.comparison && (
        <Section id="comparison" labelledBy="svc-comp-heading" className="bg-surface/50 border-y border-line">
          <SectionHeader
            id="svc-comp-heading"
            eyebrow="Evaluation"
            title={service.comparison.title}
            intro={service.comparison.intro}
            className="mb-12"
          />
          <ComparisonTable
            columns={service.comparison.columns}
            rows={service.comparison.rows}
            caption={service.comparison.note}
          />
        </Section>
      )}

      {/* Integrations (if present) */}
      {service.integrations && (
        <Section id="integrations" labelledBy="integ-heading">
          <SectionHeader
            id="integ-heading"
            eyebrow="Ecosystem"
            title={service.integrations.title}
            intro={service.integrations.text}
            className="mb-8"
          />
          <div className="flex flex-wrap gap-2.5 max-w-3xl">
            {service.integrations.items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-fg"
              >
                {item}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* Technologies */}
      <Section id="tech" labelledBy="svc-tech-heading" className="bg-surface/30 border-y border-line">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 id="svc-tech-heading" className="text-xl font-semibold tracking-tight text-fg">
              Technologies used for {service.name.toLowerCase()}
            </h2>
            <p className="mt-1 text-xs text-muted">
              Modern, maintainable stacks with long-term ecosystem support.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-mono font-medium text-fg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Cost & Timeline Overview */}
      <Section id="cost-timeline" pad="py-16 sm:py-20">
        <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12 max-w-4xl">
          <p className="eyebrow text-accent mb-3">Investment & Delivery</p>
          <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
            {service.cost.title}
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed mb-8">
            {service.cost.text}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 text-sm font-medium hover:bg-fg/85 transition-colors"
            >
              <span>Get a scope-based estimate</span>
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/resources/custom-software-cost-estimator/"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-fg hover:border-fg/30 transition-colors"
            >
              <span>Use interactive cost estimator</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Industries */}
      {relatedIndustries.length > 0 && (
        <Section id="industries" labelledBy="rel-ind-heading" className="bg-surface/50 border-t border-line">
          <SectionHeader
            id="rel-ind-heading"
            eyebrow="Sector Application"
            title={`Industries that rely on ${service.name.toLowerCase()}`}
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedIndustries.map((ind) => {
              if (!ind) return null;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}/`}
                  className="group rounded-2xl border border-line bg-surface p-6 hover:border-fg/30 transition-all"
                >
                  <p className="font-semibold text-fg group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{ind.name}</span>
                    <ArrowRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden />
                  </p>
                  <p className="mt-2 text-xs text-muted line-clamp-2">{ind.summary}</p>
                </Link>
              );
            })}
          </div>
        </Section>
      )}

      {/* Healthcare Product Mention if applicable */}
      {service.slug === "web-application-development" && (
        <Section pad="py-12" className="border-t border-line">
          <div className="max-w-2xl mx-auto text-center">
            <ProductMention />
          </div>
        </Section>
      )}

      {/* FAQs */}
      <Section id="faqs" labelledBy="svc-faqs-heading" className="border-t border-line bg-surface/50">
        <SectionHeader
          id="svc-faqs-heading"
          eyebrow="FAQs"
          title={`Frequently asked questions about ${service.name.toLowerCase()}`}
          className="mb-12"
        />
        <div className="max-w-3xl">
          <FAQAccordion items={service.faqs} />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title={`Plan your ${service.name.toLowerCase()} with our engineers`}
        description="Book a free 45-minute process review. We'll map your existing workflow, identify integration risks, and outline a realistic sprint roadmap."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
