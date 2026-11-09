export type NavItem = { label: string; href: string; match?: string[] };
export type TeamMember = { name: string; role: string; linkedin?: string };

/**
 * Single source of truth for company facts.
 * Anything left as null or [] stays hidden on the site until you add real data.
 */
export const site = {
  name: "CodXQ",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.codxq.com").replace(/\/$/, ""),
  // Canonical entity sentence: use it word for word on LinkedIn, Clutch and Google Business Profile.
  entity:
    "CodXQ is a custom software development company based in Kochi, Kerala, India, that builds software around how each client's business actually works, for companies in India, the GCC and Europe. CodXQ also makes a hospital management system.",
  description:
    "Custom software built around how your business really works. Discovery-first development from Kochi for India, the GCC and Europe.",
  tagline: "Engineering tomorrow. Simplifying today.",
  positioning: "We transform complex business challenges into intelligent digital solutions.",
  foundingYear: null as string | null,
  email: null as string | null,
  phone: null as string | null,
  whatsapp: { number: "918301846170", display: "+91 83018 46170" },
  address: {
    street: null as string | null,
    locality: "Kochi",
    region: "Kerala",
    postalCode: null as string | null,
    country: "India",
    countryCode: "IN",
  },
  hours: { label: "Monday to Friday, 9:00–18:00 IST", schema: "Mo-Fr 09:00-18:00" }, // confirm
  social: [] as { label: string; href: string }[], // e.g. { label: "LinkedIn", href: "https://www.linkedin.com/company/…" }
  team: [] as TeamMember[],
  author: { name: null as string | null, role: null as string | null }, // named blog author (playbook rule)
  areaServed: ["IN", "AE", "SA", "QA", "OM", "KW", "BH", "GB", "IE", "DE", "NL"],
  product: { name: "CodXQ HMS", href: "/products/hospital-management-system/" }, // working name: replace
  lastUpdated: "2026-11-10",
};

export const whatsappLink = (text = "Hi CodXQ, I'd like to talk about a project.") =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/custom-software-development/",
    match: ["/custom-software-development/", "/services/", "/products/", "/pricing/", "/how-we-work/"],
  },
  { label: "Industries", href: "/industries/" },
  { label: "Our Work", href: "/case-studies/" },
  { label: "About", href: "/about/" },
  { label: "Insights", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];
