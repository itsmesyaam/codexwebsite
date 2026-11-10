import { AlertCircle } from "lucide-react";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata = buildMetadata({
  title: "Terms and Conditions | CodXQ",
  description: "Standard commercial and engineering terms of service for CodXQ.",
  path: "/terms/",
  noindex: true,
});

export default function TermsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Terms and Conditions", href: "/terms/" },
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
              <p className="font-semibold">Draft Agreement — Pending Final Legal Review</p>
              <p className="mt-0.5 text-amber-800/80 dark:text-amber-300/80 leading-relaxed">
                These terms outline our standard commercial and intellectual property framework. Commercial contracts are executed under custom Statements of Work (SOWs) and Master Services Agreements (MSAs).
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xs text-muted">
              Last updated: 10 November 2026 &bull; CodXQ Digital Architecture, Kochi, Kerala, India
            </p>
          </div>

          <div className="space-y-6 text-sm text-fg/90 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">1. Nature of Services</h2>
              <p>
                CodXQ provides custom software engineering services, including business process discovery, UI/UX prototyping, full-stack software development, systems integration, and ongoing post-launch maintenance. All work is performed on a staged, milestone-driven basis agreed in writing prior to sprint execution.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">2. Intellectual Property & Code Ownership</h2>
              <p>
                Our core principle is client code ownership. Upon full and final settlement of agreed milestone invoices:
              </p>
              <ul className="list-disc list-inside space-y-1.5 ps-2 text-xs sm:text-sm">
                <li>All bespoke source code, database structures, documentation, and graphical assets created for the client are transferred exclusively to the client.</li>
                <li>CodXQ retains no proprietary lock-in, recurring per-seat licensing rights, or claims over client workflow logic.</li>
                <li>Third-party open-source libraries incorporated into deliverables remain governed by their respective standard open-source licenses (MIT, Apache 2.0, BSD).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">3. Development Rhythm & Demonstrations</h2>
              <p>
                Software is delivered in two-week agile sprints. At the conclusion of each sprint, CodXQ demonstrates working software in a staging environment. The client reviews deliverables and provides feedback to shape upcoming sprint priorities.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">4. Confidentiality & Non-Disclosure</h2>
              <p>
                Both parties agree to treat all business data, technical specifications, customer lists, and financial information disclosed during the engagement as strictly confidential. Mutual NDAs are executed prior to deep discovery workshops.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">5. Warranty & Post-Launch Support</h2>
              <p>
                Deliverables include a standard 30-day warranty following production go-live covering any deviation from agreed written specifications. Ongoing maintenance, security patching, and evolutionary feature roadmaps are provided under separate monthly service-level agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-fg">6. Governing Law</h2>
              <p>
                Unless explicitly agreed otherwise in a Master Services Agreement, these terms and any disputes arising from website use or engineering engagements are governed by the laws of India, under the jurisdiction of the competent courts of Kochi, Kerala.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
