import { MapPin, Clock, MessageSquare, ShieldCheck, Mail } from "lucide-react";
import { site, whatsappLink } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Container, Section } from "@/components/ui";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/cta-section";

export const metadata = buildMetadata({
  title: "Book a Free 45-Minute Process Review | CodXQ",
  description:
    "Talk to our engineering team in Kochi. In 45 minutes we map one workflow and show where software would save time or money, whether or not you work with us.",
  path: "/contact/",
});

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact/" },
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

      <Section pad="py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="eyebrow text-accent mb-3">Free Engineering Consultation</p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-4">
                Book a free 45-minute process review
              </h1>
              <p className="text-muted text-base leading-relaxed">
                In 45 minutes over video, we map one operational workflow with you and show where software would save time or money, whether or not you work with us.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right Column: Context & Contact Details */}
          <div className="lg:col-span-5 space-y-8 lg:pt-14">
            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-8 space-y-6">
              <h2 className="text-xl font-semibold text-fg">
                What happens on the call
              </h2>
              <ul className="space-y-4 text-xs sm:text-sm text-muted">
                <li className="flex items-start gap-3">
                  <span className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>We map one specific bottleneck in your sales, stock, billing, or approval process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>We evaluate whether off-the-shelf software or custom code is the right investment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>We review technical feasibility, integration points, and local compliance requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>You receive an initial planning estimate and architectural roadmap to take away.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-8 space-y-6">
              <h2 className="text-xl font-semibold text-fg">
                Direct communication
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MessageSquare className="size-5 text-accent mt-0.5 shrink-0" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold text-fg">Fastest response via WhatsApp</p>
                    <p className="text-xs text-muted mt-0.5 mb-2">Speak directly with our technical team during business hours.</p>
                    <WhatsAppButton />
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-line">
                  <Clock className="size-5 text-accent mt-0.5 shrink-0" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold text-fg">Working Hours</p>
                    <p className="text-xs text-muted mt-0.5">{site.hours.display} (IST)</p>
                    <p className="text-[11px] text-muted">Kochi is UTC+5:30 (1.5 hrs ahead of Dubai, 3.5–4.5 hrs ahead of Europe).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-line">
                  <MapPin className="size-5 text-accent mt-0.5 shrink-0" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold text-fg">Engineering Headquarters</p>
                    <p className="text-xs text-muted mt-0.5">Kochi, Kerala, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-line">
                  <ShieldCheck className="size-5 text-accent mt-0.5 shrink-0" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold text-fg">Confidentiality Assured</p>
                    <p className="text-xs text-muted mt-0.5">We gladly sign mutual NDAs before reviewing proprietary data or workflows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
