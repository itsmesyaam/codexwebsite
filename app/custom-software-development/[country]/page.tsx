import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Globe, Server, Coins, ExternalLink, ShieldAlert } from "lucide-react";
import { countryPages, getCountry, citiesOf, locationPath } from "@/content/locations";
import { getIndustry } from "@/content/industries";
import { regulations } from "@/content/regulations";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";

export const dynamicParams = false;

export function generateStaticParams() {
  return countryPages.map((l) => ({ country: l.country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const loc = getCountry(country);
  if (!loc) return {};

  return buildMetadata({
    title: loc.title,
    description: loc.description,
    path: locationPath(loc),
    noindex: Boolean(loc.noindex),
  });
}

export default async function CountryLocationPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const loc = getCountry(country);

  if (!loc) {
    notFound();
  }

  const cities = citiesOf(loc.country);
  const industriesServed = loc.industries.slugs
    .map((slug) => getIndustry(slug))
    .filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/custom-software-development/" },
    { label: loc.name, href: locationPath(loc) },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(loc.faqs),
        ]}
      />

      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <PageHero
        eyebrow={`Custom Software Engineering • ${loc.name}`}
        h1={loc.h1}
        lead={loc.intro}
        primaryCta={{ label: loc.cta, href: "/contact/" }}
        secondaryCta={{ label: "Local operating facts", href: "#facts" }}
      />

      {/* Verified Local Operating Facts */}
      <Section id="facts" labelledBy="facts-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="facts-heading"
          eyebrow="Local Working Realities"
          title={`How we work with ${loc.name} businesses`}
          intro="Transparent operational overlap, language alignment and in-country data residency guarantees."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-line bg-surface p-6 space-y-2">
            <div className="flex items-center gap-2 text-accent font-medium text-xs">
              <Clock className="size-4" aria-hidden />
              <span>Time Difference & Overlap</span>
            </div>
            <p className="text-sm font-semibold text-fg">{loc.facts.timeDifference}</p>
            <p className="text-xs text-muted leading-relaxed">{loc.facts.overlap}</p>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 space-y-2">
            <div className="flex items-center gap-2 text-accent font-medium text-xs">
              <Calendar className="size-4" aria-hidden />
              <span>Work Week</span>
            </div>
            <p className="text-sm font-semibold text-fg">{loc.facts.workWeek}</p>
            <p className="text-xs text-muted leading-relaxed">Sprint reviews and meetings scheduled during your standard business hours.</p>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 space-y-2">
            <div className="flex items-center gap-2 text-accent font-medium text-xs">
              <Globe className="size-4" aria-hidden />
              <span>Language Alignment</span>
            </div>
            <p className="text-sm font-semibold text-fg">{loc.facts.languages}</p>
            <p className="text-xs text-muted leading-relaxed">Full typography, mirrored UI, and native translation review support.</p>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 space-y-2">
            <div className="flex items-center gap-2 text-accent font-medium text-xs">
              <Server className="size-4" aria-hidden />
              <span>Data Residency & Hosting</span>
            </div>
            <p className="text-sm font-semibold text-fg">{loc.facts.hosting}</p>
            <p className="text-xs text-muted leading-relaxed">Accounts provisioned in local sovereign cloud regions under your ownership.</p>
          </div>

          {loc.facts.currency && (
            <div className="rounded-2xl border border-line bg-surface p-6 space-y-2">
              <div className="flex items-center gap-2 text-accent font-medium text-xs">
                <Coins className="size-4" aria-hidden />
                <span>Commercial Currency</span>
              </div>
              <p className="text-sm font-semibold text-fg">{loc.facts.currency}</p>
              <p className="text-xs text-muted leading-relaxed">Transparent invoicing tied to demonstrated sprint milestone deliveries.</p>
            </div>
          )}
        </div>
      </Section>

      {/* Available City Hubs if present */}
      {cities.length > 0 && (
        <Section id="cities" labelledBy="cities-heading">
          <SectionHeader
            id="cities-heading"
            eyebrow="Key Metropolitan Hubs"
            title={`Cities we serve across ${loc.name}`}
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.city}
                href={locationPath(city)}
                className="group rounded-2xl border border-line bg-surface p-6 hover:border-fg/30 transition-all"
              >
                <p className="font-semibold text-fg group-hover:text-accent transition-colors flex items-center justify-between">
                  <span>{city.name}</span>
                  <ArrowRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden />
                </p>
                <p className="mt-2 text-xs text-muted line-clamp-2">{city.intro}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Systems We Build for this Market */}
      <Section id="builds" labelledBy="builds-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="builds-heading"
          eyebrow="Market Projects"
          title={loc.builds.title}
          intro="Typical business systems built for operational workflows in this region."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {loc.builds.items.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm text-fg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Regulatory Context */}
      {loc.rules.ids.length > 0 && (
        <Section id="regulations" labelledBy="reg-heading">
          <SectionHeader
            id="reg-heading"
            eyebrow="Local Mandates"
            title={loc.rules.title}
            intro="Regulatory frameworks we build for in this market."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl">
            {loc.rules.ids.map((regId) => {
              const reg = regulations[regId];
              if (!reg) return null;
              return (
                <div key={reg.id} className="rounded-2xl border border-line bg-surface p-6 space-y-3">
                  <span className="font-mono text-xs font-semibold text-accent uppercase">{reg.region}</span>
                  <h3 className="text-lg font-semibold text-fg">{reg.name}</h3>
                  <p className="text-xs text-muted leading-relaxed">{reg.summary}</p>
                  <p className="text-xs font-medium text-fg pt-2 border-t border-line">{reg.whatWeDo}</p>
                </div>
              );
            })}
          </div>

          {loc.rules.notes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
              {loc.rules.notes.map((note) => (
                <div key={note.name} className="rounded-xl border border-line bg-bg p-5">
                  <p className="text-xs font-semibold text-fg mb-1">{note.name}</p>
                  <p className="text-xs text-muted leading-relaxed">{note.text}</p>
                </div>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* Industries Served */}
      {industriesServed.length > 0 && (
        <Section id="industries" labelledBy="loc-ind-heading" className="bg-surface/50 border-t border-line">
          <SectionHeader
            id="loc-ind-heading"
            eyebrow="Sectors"
            title={loc.industries.title}
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industriesServed.map((ind) => {
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

      {/* FAQs */}
      <Section id="faqs" labelledBy="loc-faqs-heading" className="border-t border-line">
        <SectionHeader
          id="loc-faqs-heading"
          eyebrow="Local FAQs"
          title={`Frequently asked questions: ${loc.name}`}
          className="mb-12"
        />
        <div className="max-w-3xl">
          <FAQAccordion items={loc.faqs} />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title={`Discuss your software project in ${loc.name}`}
        description="Book a free 45-minute process review with our engineering team in Kochi. We work around your working hours and local compliance requirements."
        primaryAction={{ label: loc.cta, href: "/contact/" }}
      />
    </>
  );
}
