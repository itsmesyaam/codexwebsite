import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, GitBranch, KeyRound, FileCode2 } from "lucide-react";
import { approach } from "@/content/company";
import { howWeWorkFaqs } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProcessSteps } from "@/components/process-steps";
import { EngagementModels } from "@/components/engagement-models";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";

export const metadata = buildMetadata({
  title: "How We Build Custom Software: Our Development Process | CodXQ",
  description:
    "A 6-stage engineering delivery model: discovery workshops, clickable prototypes, two-week demonstrated sprints, and complete IP and code handover.",
  path: "/how-we-work/",
});

export default function HowWeWorkPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "How We Work", href: "/how-we-work/" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(howWeWorkFaqs),
        ]}
      />

      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <PageHero
        eyebrow="Delivery Methodology"
        h1="How we build custom software: our development process"
        lead="A disciplined six-stage model designed to eliminate surprises: we map your business before writing code, demonstrate working software every two weeks, and hand over complete source code ownership."
        primaryCta={{ label: "Book a free process review", href: "/contact/" }}
        secondaryCta={{ label: "Explore the 6 stages", href: "#stages" }}
      />

      {/* The 6-Stage Process Flow */}
      <Section id="stages" labelledBy="stages-heading">
        <SectionHeader
          id="stages-heading"
          eyebrow="Lifecycle"
          title="From initial discovery to post-launch evolution"
          intro="Every project moves through six clearly defined stages with documented outputs at each gate."
          className="mb-12"
        />
        <ProcessSteps />
      </Section>

      {/* Complete Code & IP Ownership Guarantee */}
      <Section id="ownership" labelledBy="ownership-heading" className="bg-surface/50 border-y border-line">
        <div className="max-w-4xl">
          <SectionHeader
            id="ownership-heading"
            eyebrow="Intellectual Property"
            title="You own the code, data and deployment access"
            intro="We build software to give your business an operational edge that you control completely, not to create vendor dependency."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-line bg-surface p-6 space-y-3">
              <FileCode2 className="size-6 text-accent" aria-hidden />
              <h3 className="text-base font-semibold text-fg">Full Repository Access</h3>
              <p className="text-xs text-muted leading-relaxed">
                We work directly in your GitHub, GitLab, or cloud repository from sprint one, so you see commits and progress in real time.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 space-y-3">
              <ShieldCheck className="size-6 text-accent" aria-hidden />
              <h3 className="text-base font-semibold text-fg">Complete IP Transfer</h3>
              <p className="text-xs text-muted leading-relaxed">
                All source code, design assets, database schemas, and documentation are legally transferred to you upon final invoice settlement.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 space-y-3">
              <KeyRound className="size-6 text-accent" aria-hidden />
              <h3 className="text-base font-semibold text-fg">Cloud Ownership</h3>
              <p className="text-xs text-muted leading-relaxed">
                All AWS, Azure, Google Cloud, or Supabase accounts are created in your organization&apos;s name with full administrative control.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Engagement Models */}
      <Section id="engagement-models" labelledBy="eng-heading">
        <SectionHeader
          id="eng-heading"
          eyebrow="Commercial Models"
          title="Engagement models that match your roadmap"
          intro="Fixed-scope quotes after discovery, dedicated engineering squads, or discovery-only packages."
          className="mb-12"
        />
        <EngagementModels />
      </Section>

      {/* FAQs */}
      <Section id="faqs" labelledBy="hww-faqs-heading" className="bg-surface/50 border-t border-line">
        <SectionHeader
          id="hww-faqs-heading"
          eyebrow="FAQs"
          title="Frequently asked questions about our process"
          className="mb-12"
        />
        <div className="max-w-3xl">
          <FAQAccordion items={howWeWorkFaqs} />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Start with a free 45-minute process review"
        description="We'll map one operational workflow with you over video and show where custom software would save time or money, whether or not you work with us."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
