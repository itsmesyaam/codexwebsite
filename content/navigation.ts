export type NavItem = {
  label: string;
  href: string;
  match?: string[];
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/custom-software-development/",
    match: [
      "/custom-software-development/",
      "/services/",
      "/how-we-work/",
      "/pricing/",
    ],
    children: [
      {
        label: "Custom Software Hub",
        href: "/custom-software-development/",
        description: "Our core engineering methodology and cross-platform capabilities",
      },
      {
        label: "ERP & CRM Development",
        href: "/services/erp-crm-development/",
        description: "Multi-location inventory, sales, and supply chain systems",
      },
      {
        label: "Web Application Development",
        href: "/services/web-application-development/",
        description: "Customer portals, internal tools, and high-performance web apps",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development/",
        description: "Offline-first Android and iOS apps for field teams and customers",
      },
      {
        label: "API Integration",
        href: "/services/api-integration/",
        description: "Connecting accounting, payments, e-invoicing, and WhatsApp",
      },
      {
        label: "AI & Business Automation",
        href: "/services/ai-automation/",
        description: "Intelligent document processing and workflow automation",
      },
      {
        label: "Legacy Modernization",
        href: "/services/legacy-modernization/",
        description: "Safe staged transition from spreadsheets and legacy databases",
      },
      {
        label: "Maintenance & Support",
        href: "/services/maintenance-support/",
        description: "Proactive uptime monitoring, security patching, and evolution",
      },
      {
        label: "How We Work",
        href: "/how-we-work/",
        description: "Discover → Define → Design → Develop → Deliver → Evolve",
      },
      {
        label: "Pricing & Inclusions",
        href: "/pricing/",
        description: "Cost factors, pricing tiers, and what is included in every project",
      },
    ],
  },
  {
    label: "Product",
    href: "/products/hospital-management-system/",
    match: ["/products/"],
  },
  {
    label: "Industries",
    href: "/industries/",
    match: ["/industries/"],
  },
  {
    label: "Our Work",
    href: "/case-studies/",
    match: ["/case-studies/"],
  },
  {
    label: "About",
    href: "/about/",
    match: ["/about/"],
  },
  {
    label: "Insights",
    href: "/blog/",
    match: ["/blog/"],
  },
  {
    label: "Contact",
    href: "/contact/",
    match: ["/contact/"],
  },
];
