import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, AlertCircle, Wrench, Layers, Lightbulb } from "lucide-react";
import { caseStudies } from "@/content/case-studies";
import { getIndustry } from "@/content/industries";
import { getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DemoBadge } from "@/components/badges";
import { CoverVisual } from "@/components/cards";
import { CTASection } from "@/components/cta-section";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};

  return buildMetadata({
    title: cs.title,
    description: cs.description,
    path: `/case-studies/${cs.slug}/`,
    noindex: Boolean(cs.demo),
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    notFound();
  }

  const industry = getIndustry(cs.industry);
  const relatedServices = cs.services
    .map((sSlug) => getService(sSlug))
    .filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "/case-studies/" },
    { label: cs.name, href: `/case-studies/${cs.slug}/` },
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

      {/* Case Study Header */}
      <Section pad="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {cs.demo && <DemoBadge />}
            {industry && (
              <Link
                href={`/industries/${industry.slug}/`}
                className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted hover:text-fg hover:border-fg/30 transition-colors"
              >
                {industry.name}
              </Link>
            )}
            <span className="text-xs text-muted">&bull;</span>
            <span className="text-xs text-muted">{cs.clientType}</span>
          </div>

          <h1 className="text-h1">
            {cs.h1}
          </h1>

          <p className="text-lead text-muted max-w-3xl leading-relaxed">
            {cs.summary}
          </p>
        </div>

        {/* Visual Cover Graphic */}
        <div className="mt-12 rounded-3xl border border-line bg-surface p-8 sm:p-12 overflow-hidden shadow-sm">
          <CoverVisual cover={cs.cover} className="w-full h-48 sm:h-64 object-contain mx-auto" />
        </div>
      </Section>

      {/* Client Context & Challenge */}
      <Section id="challenge" labelledBy="challenge-heading" className="bg-surface/50 border-y border-line">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-4xl">
          <div className="lg:col-span-5 space-y-4">
            <p className="eyebrow text-accent">Operating Context</p>
            <h2 id="challenge-heading" className="text-2xl font-semibold tracking-tight text-fg">
              The operational bottleneck
            </h2>
            <p className="text-xs text-muted leading-relaxed">
              {cs.client}
            </p>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-line bg-surface p-7 space-y-4">
            <div className="flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-wider">
              <AlertCircle className="size-4" aria-hidden />
              <span>Core Friction</span>
            </div>
            <p className="text-sm text-fg leading-relaxed">
              {cs.challenge}
            </p>
          </div>
        </div>
      </Section>

      {/* Discovery Findings */}
      <Section id="discovery" labelledBy="discovery-heading">
        <SectionHeader
          id="discovery-heading"
          eyebrow="Investigation"
          title="What discovery uncovered"
          intro="Before committing to code, our workflow mapping identified the root causes of delay and error."
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {cs.discovery.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-6">
              <span className="font-mono text-xs font-semibold text-accent shrink-0 mt-0.5">
                0{idx + 1}
              </span>
              <p className="text-sm text-fg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Solution Architecture & Modules */}
      <Section id="solution" labelledBy="solution-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="solution-heading"
          eyebrow="Engineering Solution"
          title="The architectural solution"
          intro={cs.solution.intro}
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mb-12">
          {cs.solution.modules.map((mod) => (
            <div key={mod.name} className="rounded-2xl border border-line bg-surface p-6 space-y-2">
              <h3 className="text-base font-semibold text-fg">{mod.name}</h3>
              <p className="text-xs text-muted leading-relaxed">{mod.text}</p>
            </div>
          ))}
        </div>

        {/* Features Checklist */}
        <div className="max-w-4xl rounded-2xl border border-line bg-surface p-8">
          <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-4">
            Key capabilities delivered
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cs.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <Check className="size-4 shrink-0 text-accent mt-0.5" aria-hidden />
                <span className="text-xs text-fg">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Verified Results (Rendered only if real metrics exist) */}
      {cs.results && cs.results.length > 0 && (
        <Section id="results" labelledBy="results-heading">
          <SectionHeader
            id="results-heading"
            eyebrow="Measurable Impact"
            title="Verified business outcomes"
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {cs.results.map((res, idx) => (
              <div key={idx} className="rounded-2xl border border-line bg-surface p-7 text-center">
                <p className="text-3xl font-bold tracking-tight text-accent mb-2">{res.metric}</p>
                <p className="text-xs text-muted leading-relaxed">{res.text}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Quote / Testimonial (Rendered only if present) */}
      {cs.quote && (
        <Section id="quote" pad="py-12" className="border-t border-line bg-surface/30">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <blockquote className="text-lg sm:text-xl font-medium text-fg italic leading-relaxed">
              &ldquo;{cs.quote.text}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-sm text-fg">{cs.quote.name}</p>
              <p className="text-xs text-muted">{cs.quote.role}</p>
            </div>
          </div>
        </Section>
      )}

      {/* Technology Stack Used */}
      <Section id="technologies" pad="py-12" className="border-t border-line">
        <div className="max-w-4xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-semibold text-fg">Technology stack</h2>
            <p className="text-xs text-muted">Frameworks and cloud services selected for this implementation.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {cs.technologies.map((tech) => (
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

      {/* CTA */}
      <CTASection
        title="Ready to engineer your custom system?"
        description="Book a free 45-minute process review with our technical leads in Kochi. We'll map your existing bottlenecks and outline a structured sprint plan."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
