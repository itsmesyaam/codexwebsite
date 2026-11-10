import Link from "next/link";
import { ArrowRight, Home, Compass, Boxes, FileText, Phone } from "lucide-react";
import { Container, Section } from "@/components/ui";

export default function NotFound() {
  const helpfulLinks = [
    { label: "Homepage", href: "/", icon: Home },
    { label: "Custom Software Services", href: "/custom-software-development/", icon: Boxes },
    { label: "Hospital Management System", href: "/products/hospital-management-system/", icon: Compass },
    { label: "Our Work & Demonstrations", href: "/case-studies/", icon: FileText },
    { label: "Resources & Cost Estimator", href: "/resources/", icon: FileText },
    { label: "Contact & Process Review", href: "/contact/", icon: Phone },
  ];

  return (
    <Section pad="py-24 sm:py-36">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-3">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-fg mb-4">
            Page not found
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-lg mx-auto">
            The link you followed may be broken or the page has moved. Explore our core services or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-start max-w-lg mx-auto">
          {helpfulLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-4 text-xs font-semibold text-fg hover:border-fg/30 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="size-4 text-muted group-hover:text-accent transition-colors" />
                  <span>{link.label}</span>
                </div>
                <ArrowRight className="size-3 text-muted group-hover:text-fg transition-transform group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
