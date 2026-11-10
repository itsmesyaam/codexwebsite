import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Download, Home, BookOpen } from "lucide-react";
import { allLeadMagnetSlugs, getLeadMagnet } from "@/content/leadMagnets";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return allLeadMagnetSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getLeadMagnet(slug);
  if (!item) return {};

  return buildMetadata({
    title: `Thank You | ${item.title}`,
    description: "Your requested resource is on its way.",
    path: `/resources/${item.slug}/thank-you/`,
    noindex: true,
  });
}

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getLeadMagnet(slug);

  if (!item) {
    notFound();
  }

  return (
    <Section pad="py-24 sm:py-32">
      <div className="max-w-xl mx-auto text-center rounded-3xl border border-line bg-surface p-8 sm:p-12 shadow-sm space-y-6">
        <div className="size-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto">
          <CheckCircle2 className="size-8" />
        </div>

        <div>
          <p className="eyebrow text-accent mb-2">Request Confirmed</p>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg mb-3">
            Your resource is on its way
          </h1>
          <p className="text-sm text-muted leading-relaxed">
            We have dispatched <span className="font-medium text-fg">{item.title}</span> to your email address. Please check your inbox within the next few minutes.
          </p>
        </div>

        <div className="pt-6 border-t border-line flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/resources/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-xs font-semibold text-fg hover:border-fg/30 transition-colors"
          >
            <BookOpen className="size-3.5" />
            <span>More resources</span>
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-fg text-bg px-5 py-2.5 text-xs font-semibold hover:bg-fg/85 transition-colors"
          >
            <span>Book a process review</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
