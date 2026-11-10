import { site } from "@/content/site";
import type { FAQ } from "@/content/types";

const ctx = "https://schema.org";
const ORG = `${site.url}/#org`;

export const abs = (path = "/") => new URL(path, `${site.url}/`).toString();

/** Organization + Kochi ProfessionalService — rendered on every page from the root layout. */
export function organizationGraph() {
  const a = site.address;
  return {
    "@context": ctx,
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG,
        name: site.name,
        url: abs("/"),
        logo: abs("/icon.svg"),
        description: site.entity,
        areaServed: site.areaServed,
        ...(site.foundingYear ? { foundingDate: site.foundingYear } : {}),
        ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#kochi`,
        name: site.name,
        parentOrganization: { "@id": ORG },
        url: abs("/"),
        ...(a
          ? {
              address: {
                "@type": "PostalAddress",
                ...(a.street ? { streetAddress: a.street } : {}),
                addressLocality: a.locality,
                addressRegion: a.region,
                ...(a.postalCode ? { postalCode: a.postalCode } : {}),
                addressCountry: a.countryCode,
              },
            }
          : {}),
        openingHours: site.hours.schema,
        ...(site.phone ? { telephone: site.phone } : {}),
        ...(site.email ? { email: site.email } : {}),
      },
    ],
  };
}

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": ctx,
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});

export const faqSchema = (faqs: FAQ[]) => ({
  "@context": ctx,
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const serviceSchema = (s: { name: string; description: string; path: string; areaServed?: string[] }) => ({
  "@context": ctx,
  "@type": "Service",
  name: s.name,
  serviceType: s.name,
  description: s.description,
  url: abs(s.path),
  provider: { "@id": ORG },
  areaServed: s.areaServed ?? site.areaServed,
});

export const articleSchema = (a: { title: string; description: string; path: string; date: string; updated?: string }) => ({
  "@context": ctx,
  "@type": "Article",
  headline: a.title,
  description: a.description,
  datePublished: a.date,
  dateModified: a.updated ?? a.date,
  mainEntityOfPage: abs(a.path),
  author: site.author.name ? { "@type": "Person", name: site.author.name } : { "@id": ORG },
  publisher: { "@id": ORG },
});

export const softwareAppSchema = (p: { name: string; description: string; path: string }) => ({
  "@context": ctx,
  "@type": "SoftwareApplication",
  name: p.name,
  description: p.description,
  url: abs(p.path),
  applicationCategory: "HealthApplication",
  operatingSystem: "Web, Android, iOS",
  publisher: { "@id": ORG },
});
