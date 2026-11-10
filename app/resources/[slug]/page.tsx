import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, Download, FileText, ArrowLeft, ArrowRight } from "lucide-react";
import { allLeadMagnetSlugs, getLeadMagnet } from "@/content/leadMagnets";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CostEstimator } from "@/components/cost-estimator";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { CTASection } from "@/components/cta-section";

export function generateStaticParams() {
  return allLeadMagnetSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getLeadMagnet(slug);
  if (!item) return {};

  return buildMetadata({
    title: `${item.title} | CodXQ Resources`,
    description: item.description,
    path: `/resources/${item.slug}/`,
  });
}

export default async function LeadMagnetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getLeadMagnet(slug);

  if (!item) {
    notFound();
  }

  const isEstimator = item.slug === "software-cost-estimator";

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources/" },
    { label: item.title, href: `/resources/${item.slug}/` },
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

      {isEstimator ? (
        /* Cost Estimator Flow */
        <Section pad="py-12 sm:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="eyebrow text-accent mb-3 block">{item.eyebrow}</span>
            <h1 className="text-h2 mb-4">{item.title}</h1>
            <p className="text-muted text-base leading-relaxed max-w-2xl mx-auto">
              {item.summary}
            </p>
          </div>

          <CostEstimator />
        </Section>
      ) : (
        /* PDF / Template Landing Page */
        <Section pad="py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Resource Details */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-accent mb-4">
                  {item.format}
                </span>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-4">
                  {item.title}
                </h1>
                <p className="text-base text-muted leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* What's Inside */}
              <div className="rounded-3xl border border-line bg-surface p-7 sm:p-8 space-y-4">
                <p className="text-xs uppercase tracking-wider font-semibold text-fg">
                  What is included in this {item.format.toLowerCase()}
                </p>
                <ul className="space-y-3">
                  {item.whatInside.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="size-4 shrink-0 text-accent mt-0.5" aria-hidden />
                      <span className="text-xs sm:text-sm text-fg leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who It's For */}
              <div className="rounded-2xl border border-line bg-surface/50 p-6">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-1.5">
                  Who should use this guide
                </p>
                <p className="text-xs sm:text-sm text-fg leading-relaxed">
                  {item.whoFor}
                </p>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5 sticky top-28">
              <LeadCaptureForm item={item} />
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <CTASection
        title="Ready to turn this checklist into working software?"
        description="Book a free 45-minute process review with our technical team in Kochi. We'll map your workflows and provide an honest architectural assessment."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
