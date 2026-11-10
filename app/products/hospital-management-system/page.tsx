import Link from "next/link";
import { ArrowRight, Check, Shield, Server, Globe2, AlertCircle } from "lucide-react";
import { product } from "@/content/product";
import { buildMetadata } from "@/lib/seo";
import { softwareAppSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeader, Container, ButtonLink } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";

export const metadata = buildMetadata({
  title: product.title,
  description: product.description,
  path: product.path,
});

export default function HospitalProductPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products/hospital-management-system/" },
    { label: product.name, href: product.path },
  ];

  return (
    <>
      <JsonLd
        data={[
          softwareAppSchema({
            name: product.name,
            description: product.description,
            path: product.path,
          }),
          breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(product.faqs),
        ]}
      />

      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <PageHero
        eyebrow="Healthcare Product Platform"
        h1={product.h1}
        lead={product.whatIs}
        primaryCta={{ label: "Book a 30-minute demo", href: "/products/hospital-management-system/demo/" }}
        secondaryCta={{ label: "Explore the 7 roles", href: "#roles" }}
      />

      {/* Target Audience Note */}
      <Section pad="py-8" className="bg-surface/50 border-y border-line">
        <div className="max-w-3xl flex items-start gap-4">
          <div className="size-2 rounded-full bg-accent mt-2.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-fg">{product.audience.text}</p>
            <p className="text-xs text-muted mt-1">{product.audience.note}</p>
          </div>
        </div>
      </Section>

      {/* 7 Connected Roles Grid */}
      <Section id="roles" labelledBy="roles-heading">
        <SectionHeader
          id="roles-heading"
          eyebrow="Role-Based Modules"
          title="Seven connected roles in one hospital platform"
          intro="Each clinical and administrative role gets a tailored interface, connected by a unified real-time data spine."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {product.roles.map((role) => (
            <div
              key={role.name}
              className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-7 sm:p-8 transition-[border-color,box-shadow] hover:border-fg/20"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center rounded-full border border-line bg-bg px-3 py-0.5 text-xs font-semibold text-accent">
                    {role.role}
                  </span>
                  <span className="text-xs text-muted">Replaces: {role.replaces}</span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-fg mb-4">
                  {role.name}
                </h3>

                <ul className="space-y-2.5 text-xs text-fg mb-6">
                  {role.does.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="size-3.5 text-accent shrink-0 mt-0.5" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-line">
                <Link
                  href="/products/hospital-management-system/demo/"
                  className="text-xs font-medium text-accent hover:underline flex items-center gap-1"
                >
                  <span>See in demo</span>
                  <ArrowRight className="size-3" aria-hidden />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Numbered Patient Journey Flow */}
      <Section id="flow" labelledBy="flow-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="flow-heading"
          eyebrow="Patient Care Continuum"
          title="Connected patient journey from booking to billing"
          intro="Information flows automatically between departments as the patient progresses through their hospital visit."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {product.flow.map((step, idx) => (
            <div key={idx} className="rounded-2xl border border-line bg-surface p-6">
              <span className="font-mono text-xs font-semibold text-accent block mb-2">
                Step 0{idx + 1}
              </span>
              <p className="text-sm text-fg leading-relaxed">{step}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 max-w-3xl">
          <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-1">
            Emergency Ambulance Protocol
          </p>
          <p className="text-sm text-fg leading-relaxed">
            {product.emergency}
          </p>
        </div>
      </Section>

      {/* Regional Healthcare Compliance */}
      <Section id="compliance" labelledBy="compliance-heading">
        <SectionHeader
          id="compliance-heading"
          eyebrow="Regulatory Alignment"
          title="Regional healthcare compliance"
          intro="Designed for digital health mandates across India, Saudi Arabia and the UAE."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {product.compliance.map((row) => (
            <div
              key={row.heading}
              className="rounded-3xl border border-line bg-surface p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-muted block mb-3">
                  {row.market}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-fg mb-4">
                  {row.heading}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-6">
                  {row.required}
                </p>
              </div>

              <div className="pt-4 border-t border-line">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-1.5">
                  Integration Status
                </p>
                {row.status ? (
                  <p className="text-xs text-fg font-medium">{row.status}</p>
                ) : (
                  <div className="flex items-start gap-2 text-xs text-muted">
                    <AlertCircle className="size-3.5 shrink-0 text-accent mt-0.5" aria-hidden />
                    <span>{product.statusFallback}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Security & Deployment */}
      <Section id="security" labelledBy="sec-heading" className="bg-surface/50 border-y border-line">
        <SectionHeader
          id="sec-heading"
          eyebrow="Infrastructure"
          title="Deployment, security and data residency"
          intro="Patient records are sensitive personal data. We host where your healthcare regulators require."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-12">
          {product.deployment.map((dep, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-6">
              <Server className="size-5 shrink-0 text-accent mt-0.5" aria-hidden />
              <p className="text-sm text-fg leading-relaxed">{dep}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6 max-w-4xl flex items-start gap-4">
          <Globe2 className="size-5 shrink-0 text-accent mt-0.5" aria-hidden />
          <div>
            <p className="text-sm font-semibold text-fg">Bilingual Arabic & English Support</p>
            <p className="text-xs text-muted mt-1 leading-relaxed">{product.arabic}</p>
          </div>
        </div>
      </Section>

      {/* Why CodXQ Adaptation */}
      <Section id="why" pad="py-16 sm:py-20">
        <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12 max-w-4xl">
          <p className="eyebrow text-accent mb-3">Custom Adaptation</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg mb-4">
            Why hospital groups choose custom adaptation
          </h2>
          <p className="text-base text-muted leading-relaxed mb-8">
            {product.why}
          </p>
          <ButtonLink href="/products/hospital-management-system/demo/">
            Book a 30-minute interactive demo
          </ButtonLink>
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faqs" labelledBy="prod-faqs-heading" className="bg-surface/50 border-t border-line">
        <SectionHeader
          id="prod-faqs-heading"
          eyebrow="FAQs"
          title="Frequently asked questions about our hospital system"
          className="mb-12"
        />
        <div className="max-w-3xl">
          <FAQAccordion items={product.faqs} />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title={`See ${product.name} in action`}
        description="Book a 30-minute demonstration. We will walk through a live patient journey across every department and address your hospital group's compliance requirements."
        primaryAction={{ label: "Book a demo", href: "/products/hospital-management-system/demo/" }}
      />
    </>
  );
}
