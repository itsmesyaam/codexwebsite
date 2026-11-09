import Link from "next/link";
import { site, whatsappLink } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { Container, Logo } from "@/components/ui";

type L = [label: string, href: string];

const company: L[] = [
  ["About", "/about/"],
  ["How we work", "/how-we-work/"],
  ["Our work", "/case-studies/"],
  ["Pricing", "/pricing/"],
  ["Insights", "/blog/"],
  ["Contact", "/contact/"],
];

const markets: L[] = [
  ["India", "/custom-software-development/india/"],
  ["UAE", "/custom-software-development/uae/"],
  ["Dubai", "/custom-software-development/uae/dubai/"],
  ["Abu Dhabi", "/custom-software-development/uae/abu-dhabi/"],
  ["Saudi Arabia", "/custom-software-development/saudi-arabia/"],
  ["Riyadh", "/custom-software-development/saudi-arabia/riyadh/"],
  ["Germany", "/custom-software-development/germany/"],
];

function Col({ title, links }: { title: string; links: L[] }) {
  return (
    <div>
      {/* Footer column titles are labels, not headings (heading-structure rule) */}
      <p className="text-sm font-medium">{title}</p>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="text-muted transition-colors hover:text-fg">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const serviceLinks: L[] = [
    ["Custom software development", "/custom-software-development/"],
    ...services.slice(0, 7).map((s): L => [s.name, `/services/${s.slug}/`]),
  ];
  const industryLinks = industries.map((i): L => [i.name, `/industries/${i.slug}/`]);

  return (
    <footer id="site-footer" className="border-t border-line bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-sm md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">{site.description}</p>
            <p className="mt-5 text-sm">
              CodXQ also builds {site.product.name}, a hospital management system.{" "}
              <Link href={site.product.href} className="text-accent hover:underline">
                See the product →
              </Link>
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-accent">
                    {site.email}
                  </a>
                </li>
              )}
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  WhatsApp {site.whatsapp.display}
                </a>
              </li>
              <li className="text-muted">Kochi, Kerala, India</li>
            </ul>
            {site.social.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-4 text-sm">
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fg">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Col title="Company" links={company} />
          <Col title="Services" links={serviceLinks} />
          <Col title="Industries" links={industryLinks} />
          <Col title="Markets" links={markets} />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} CodXQ. All rights reserved.</p>
          <p className="font-medium text-fg">{site.tagline}</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy/" className="hover:text-fg">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms/" className="hover:text-fg">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
