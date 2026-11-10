import { AlertCircle } from "lucide-react";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata = buildMetadata({
  title: "Privacy Policy | CodXQ",
  description: "Privacy policy and data protection commitments of CodXQ.",
  path: "/privacy/",
  noindex: true,
});

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy/" },
  ];

  return (
    <>
      <div className="pt-20 pb-4 border-b border-line bg-surface/30">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <Section pad="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Draft Notice Banner */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 flex items-start gap-3">
            <AlertCircle className="size-5 shrink-0 text-amber-500 mt-0.5" aria-hidden />
            <div className="text-xs text-amber-900 dark:text-amber-200">
              <p className="font-semibold">Draft Policy — Pending Final Legal Review</p>
              <p className="mt-0.5 text-amber-800/80 dark:text-amber-300/80 leading-relaxed">
                This document is a technical and operational draft reflecting our current data practices. It will be finalized by legal counsel prior to full commercial release.
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-4">
              Privacy Policy
            </h1>
            <p className="text-xs text-muted">
              Last updated: 10 November 2026 &bull; CodXQ Digital Architecture, Kochi, Kerala, India
            </p>
          </div>

          <div className="space-y-6 text-sm text-fg/90 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">1. Who We Are</h2>
              <p>
                {site.entitySentence} When you interact with our website, communicate with our team, or enter a discovery workshop, CodXQ acts as the data controller for your business contact details.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">2. Information We Collect</h2>
              <p>We collect only information necessary to evaluate and deliver custom software engineering services:</p>
              <ul className="list-disc list-inside space-y-1.5 ps-2 text-xs sm:text-sm">
                <li><strong className="text-fg">Inquiry Information:</strong> Name, work email address, company name, phone number, and project descriptions submitted via our contact and demo forms.</li>
                <li><strong className="text-fg">Communication Records:</strong> Notes, technical briefs, and workflow diagrams created during discovery calls.</li>
                <li><strong className="text-fg">Technical Telemetry:</strong> Anonymized server logs, browser type, and page access timestamps for operational security and website performance.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">3. How We Use Information</h2>
              <p>
                We do not sell, rent, or monetize your contact or business data. We use submitted information exclusively to respond to inquiries, prepare scope estimates, schedule process reviews, and fulfill contractual software engineering obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">4. Client Data as a Data Processor</h2>
              <p>
                When engineering client software systems (ERPs, mobile apps, customer portals, or healthcare products), CodXQ acts as a <em>Data Processor</em>. Client data remains hosted in sovereign cloud regions owned directly by the client. We access client data only under explicit written instruction and signed Data Processing Agreements (DPAs).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">5. Multi-Jurisdictional Compliance</h2>
              <p>
                Our data protection procedures are designed to adhere to applicable privacy legislation across our primary operating markets:
              </p>
              <ul className="list-disc list-inside space-y-1.5 ps-2 text-xs sm:text-sm">
                <li><strong className="text-fg">India:</strong> Digital Personal Data Protection (DPDP) Act.</li>
                <li><strong className="text-fg">UAE & Saudi Arabia:</strong> UAE Federal Decree-Law No. 45/2021 (PDPL) and Saudi Personal Data Protection Law (PDPL).</li>
                <li><strong className="text-fg">European Union:</strong> General Data Protection Regulation (GDPR) and Standard Contractual Clauses (SCCs).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">6. Your Rights & Inquiries</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal contact data held by CodXQ. For inquiries, reach out to us via our contact form or directly through our engineering offices in Kochi, Kerala.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
