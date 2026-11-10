import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, AlertTriangle, ExternalLink } from "lucide-react";
import { industries, getIndustry } from "@/content/industries";
import { getService } from "@/content/services";
import { regulations } from "@/content/regulations";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ModuleGrid } from "@/components/module-grid";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { ProductMention } from "@/components/product-mention";

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return buildMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${industry.slug}/`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  const relatedServices = industry.services
    .map((sSlug) => getService(sSlug))
    .filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries/" },
    { label: industry.name, href: `/industries/${industry.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(industry.faqs),
        ]}
      />

      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <PageHero
        eyebrow="Industry Solution"
        h1={industry.h1}
        lead={industry.intro}
        primaryCta={{ label: "Book an industry process review", href: "/contact/" }}
        secondaryCta={{ label: "Explore modules", href: "#modules" }}
      />

      {/* Product Mention Rule: If Healthcare, show product one-liner */}
      {industry.showsProduct && (
        <Section pad="py-8" className="bg-surface/50 border-y border-line">
          <div className="max-w-3xl mx-auto">
            <ProductMention />
          </div>
        </Section>
      )}

      {/* Where Companies Face Friction / Problems */}
      <Section id="problems" labelledBy="prob-heading">
        <SectionHeader
          id="prob-heading"
          eyebrow="Operational Bottlenecks"
          title={industry.problems.title}
          intro="Common failure modes we observe when examining industry operations that rely on fragmented spreadsheets or generic software."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {industry.problems.items.map((prob, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 rounded-2xl border border-line bg-surface p-6"
            >
              <AlertTriangle className="size-4 shrink-0 text-accent mt-0.5" aria-hidden />
              <p className="text-sm text-fg leading-relaxed">{prob}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Modules We Build */}
      <Section id="modules" labelledBy="ind-modules-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="ind-modules-heading"
          eyebrow="Custom Modules"
          title={industry.modules.title}
          intro="Configured around your specific operational stages, from initial order intake to final reconciliation."
          className="mb-12"
        />
        <ModuleGrid modules={industry.modules.items} columns={3} />
      </Section>

      {/* Integrations */}
      <Section id="integrations" labelledBy="ind-integ-heading">
        <SectionHeader
          id="ind-integ-heading"
          eyebrow="System Connections"
          title={industry.integrations.title}
          intro="Connect with existing accounting, messaging, payment and government e-invoicing platforms."
          className="mb-8"
        />
        <div className="flex flex-wrap gap-2.5 max-w-3xl">
          {industry.integrations.items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-fg"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      {/* Regional Compliance & Regulations */}
      {industry.regional.ids.length > 0 && (
        <Section id="compliance" labelledBy="ind-reg-heading" className="bg-surface/50 border-y border-line">
          <SectionHeader
            id="ind-reg-heading"
            eyebrow="Regulatory Standards"
            title={industry.regional.title}
            intro="Built for compliance mandates across India, the GCC and European jurisdictions."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.regional.ids.map((regId) => {
              const reg = regulations[regId];
              if (!reg) return null;
              return (
                <div
                  key={reg.id}
                  className="rounded-3xl border border-line bg-surface p-7 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold text-accent block mb-2">
                      {reg.region}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-fg mb-3">
                      {reg.name}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-4">
                      {reg.summary}
                    </p>
                    <div className="pt-3 border-t border-line">
                      <p className="text-xs font-medium text-fg">{reg.whatWeDo}</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-line">
                    <a
                      href={reg.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline"
                    >
                      <span>{reg.authority}</span>
                      <ExternalLink className="size-3" aria-hidden />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section id="services" labelledBy="rel-svc-heading">
          <SectionHeader
            id="rel-svc-heading"
            eyebrow="Related Engineering"
            title={`Software services used in ${industry.name.toLowerCase()}`}
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedServices.map((svc) => {
              if (!svc) return null;
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}/`}
                  className="group rounded-2xl border border-line bg-surface p-6 hover:border-fg/30 transition-all"
                >
                  <p className="font-semibold text-fg group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{svc.name}</span>
                    <ArrowRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden />
                  </p>
                  <p className="mt-2 text-xs text-muted line-clamp-2">{svc.summary}</p>
                </Link>
              );
            })}
          </div>
        </Section>
      )}

      {/* FAQs */}
      <Section id="faqs" labelledBy="ind-faqs-heading" className="bg-surface/50 border-t border-line">
        <SectionHeader
          id="ind-faqs-heading"
          eyebrow="FAQs"
          title={`Frequently asked questions: ${industry.name}`}
          className="mb-12"
        />
        <div className="max-w-3xl">
          <FAQAccordion items={industry.faqs} />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title={`Discuss software for your ${industry.name.toLowerCase()} business`}
        description="Book a free 45-minute process review. We'll map one operational workflow and outline how custom software can eliminate spreadsheet reconciliations."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
