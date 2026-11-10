import { Check } from "lucide-react";
import { product } from "@/content/product";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Container, Section } from "@/components/ui";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DemoBookingForm } from "@/components/demo-form";

export const metadata = buildMetadata({
  title: product.demo.title,
  description: product.demo.description,
  path: "/products/hospital-management-system/demo/",
});

export default function DemoPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products/hospital-management-system/" },
    { label: product.name, href: product.path },
    { label: "Demo", href: "/products/hospital-management-system/demo/" },
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
          {/* Left Column: What you see & who should join */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="eyebrow text-accent mb-3">Live Walkthrough</p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-4">
                {product.demo.h1}
              </h1>
              <p className="text-muted text-base leading-relaxed">
                See {product.name} in 30 minutes: a patient visit across every role, admin dashboards, billing, and regional compliance status.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 space-y-4">
              <p className="text-xs uppercase tracking-wider font-semibold text-fg">
                What we walk through in 30 minutes
              </p>
              <ul className="space-y-3 text-xs text-muted">
                {product.demo.whatYouSee.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="size-4 shrink-0 text-accent mt-0.5" aria-hidden />
                    <span className="text-fg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 space-y-3">
              <p className="text-xs uppercase tracking-wider font-semibold text-fg">
                Who should join the call
              </p>
              <ul className="space-y-2 text-xs text-muted">
                {product.demo.whoShouldJoin.map((person, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent shrink-0" />
                    <span>{person}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Demo Form */}
          <div className="lg:col-span-7">
            <DemoBookingForm />
          </div>
        </div>
      </Section>
    </>
  );
}
