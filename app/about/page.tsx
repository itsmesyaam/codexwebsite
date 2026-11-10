import Link from "next/link";
import { ArrowRight, MapPin, Clock, Compass, Shield, HeartHandshake, Sparkles, Award } from "lucide-react";
import { site } from "@/content/site";
import { mission, vision, values, engineeringPrinciples, differentiators } from "@/content/company";
import { aboutFaqs } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TeamGrid } from "@/components/team-grid";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";

export const metadata = buildMetadata({
  title: "About CodXQ: Custom Software Company in Kochi, Kerala",
  description:
    "Learn about CodXQ, our engineering team in Kochi, Kerala, our mission, values, and how we build software for businesses in India, the GCC and Europe.",
  path: "/about/",
});

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(aboutFaqs),
        ]}
      />

      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <PageHero
        eyebrow="Our Company"
        h1="About CodXQ: custom software company in Kochi, Kerala"
        lead={site.entitySentence}
        primaryCta={{ label: "Book a free process review", href: "/contact/" }}
        secondaryCta={{ label: "Our engineering values", href: "#values" }}
      />

      {/* Brand Positioning Line */}
      <Section pad="py-10" className="bg-surface/50 border-y border-line">
        <div className="max-w-3xl">
          <p className="text-xl sm:text-2xl font-semibold text-fg tracking-tight mb-2">
            {site.tagline}
          </p>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            {mission}
          </p>
        </div>
      </Section>

      {/* Differentiators */}
      <Section id="differentiators" labelledBy="diff-heading">
        <SectionHeader
          id="diff-heading"
          eyebrow="Positioning"
          title="What sets CodXQ apart"
          intro="We replace speculative feature checklists with direct workflow immersion and rigorous delivery discipline."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff) => (
            <div key={diff.name} className="rounded-2xl border border-line bg-surface p-7 space-y-3">
              <h3 className="text-lg font-semibold text-fg">{diff.name}</h3>
              <p className="text-xs text-muted leading-relaxed">{diff.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section id="mission" labelledBy="mission-heading" className="bg-surface/50 border-y border-line">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
          <div className="rounded-3xl border border-line bg-surface p-8 sm:p-10 space-y-4">
            <p className="eyebrow text-accent">Our Mission</p>
            <h2 id="mission-heading" className="text-xl sm:text-2xl font-semibold text-fg">
              Systems clients truly own and understand
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              {mission}
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-8 sm:p-10 space-y-4">
            <p className="eyebrow text-accent">Our Vision</p>
            <h2 className="text-xl sm:text-2xl font-semibold text-fg">
              The trusted operational software partner
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              {vision}
            </p>
          </div>
        </div>
      </Section>

      {/* Company Values */}
      <Section id="values" labelledBy="values-heading">
        <SectionHeader
          id="values-heading"
          eyebrow="Core Values"
          title="Principles that guide our engineering decisions"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val) => (
            <div key={val.name} className="rounded-2xl border border-line bg-surface p-7 space-y-3">
              <h3 className="text-lg font-semibold text-fg">{val.name}</h3>
              <p className="text-xs text-muted leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Engineering Principles */}
      <Section id="principles" labelledBy="principles-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="principles-heading"
          eyebrow="Craft"
          title="Our engineering standards"
          intro="How our developers write, review, and ship production software."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((ep) => (
            <div key={ep.name} className="rounded-2xl border border-line bg-surface p-6 space-y-2.5">
              <h3 className="text-base font-semibold text-fg">{ep.name}</h3>
              <p className="text-xs text-muted leading-relaxed">{ep.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Kochi, Kerala */}
      <Section id="why-kochi" labelledBy="kochi-heading">
        <div className="max-w-4xl space-y-8">
          <SectionHeader
            id="kochi-heading"
            eyebrow="Engineering Hub"
            title="Why Kochi, Kerala for custom software engineering"
            intro="Kochi is a premier software engineering centre in southern India, offering senior technical talent, strong digital infrastructure, and advantageous time zone alignment."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-line bg-surface p-6 space-y-2">
              <p className="font-semibold text-fg text-sm">GCC Alignment</p>
              <p className="text-xs text-muted leading-relaxed">
                Kochi is just 1.5 hours ahead of Dubai and 2.5 hours ahead of Riyadh. Working days overlap almost completely for agile standups and rapid support.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 space-y-2">
              <p className="font-semibold text-fg text-sm">European Overlap</p>
              <p className="text-xs text-muted leading-relaxed">
                Our afternoons cover European mornings (3.5–4.5 hours ahead), giving 4 to 5 hours of synchronized working time daily.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 space-y-2">
              <p className="font-semibold text-fg text-sm">Stable Engineering Teams</p>
              <p className="text-xs text-muted leading-relaxed">
                Kerala has India&apos;s highest literacy rate and a thriving tech ecosystem (Infopark, SmartCity). Engineers stay with projects long term.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Grid (Gracefully hidden when empty per hard rule) */}
      <Section id="team" labelledBy="team-heading" className="bg-surface/50 border-t border-line empty:hidden">
        <TeamGrid />
      </Section>

      {/* Office & Operational Details */}
      <Section id="office" pad="py-12" className="border-t border-line">
        <div className="max-w-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-6">
          <div className="flex items-center gap-3">
            <MapPin className="size-5 text-accent shrink-0" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-fg">Engineering Headquarters</p>
              <p className="text-xs text-muted">Kochi, Kerala, India &bull; Operating hours {site.hours.display}</p>
            </div>
          </div>
          <Link
            href="/contact/"
            className="text-xs font-semibold text-accent hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Contact information</span>
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faqs" labelledBy="about-faqs-heading" className="bg-surface/50 border-t border-line">
        <SectionHeader
          id="about-faqs-heading"
          eyebrow="FAQs"
          title="Frequently asked questions about CodXQ"
          className="mb-12"
        />
        <div className="max-w-3xl">
          <FAQAccordion items={aboutFaqs} />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to discuss your software project?"
        description="Book a free 45-minute process review with our engineering leads in Kochi. We'll map one workflow and provide actionable architecture insights."
        primaryAction={{ label: "Book a process review", href: "/contact/" }}
      />
    </>
  );
}
