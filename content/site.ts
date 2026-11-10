export type NavItem = {
  label: string;
  href: string;
  match?: string[];
  children?: { label: string; href: string; description?: string }[];
};

export type WorkingHours = {
  region: string;
  label: string;
  overlap: string;
};

/**
 * Single source of truth for company facts.
 * Anything left as null stays hidden on the site until real data is filled in.
 * Never invent certifications, prices, addresses, or founding dates.
 */
export const site = {
  name: "CodXQ",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.codxq.com").replace(/\/$/, ""),
  // Canonical entity sentence: use word-for-word on homepage and About page.
  entitySentence:
    "CodXQ is a custom software development company based in Kochi, Kerala, India, that builds software around how each client's business actually works, for companies in India, the GCC and Europe. CodXQ also makes a hospital management system.",
  // Legacy alias for compatibility
  entity:
    "CodXQ is a custom software development company based in Kochi, Kerala, India, that builds software around how each client's business actually works, for companies in India, the GCC and Europe. CodXQ also makes a hospital management system.",
  description:
    "Custom software built around how your business really works. Discovery-first development from Kochi for India, the GCC and Europe.",
  tagline: "Engineering tomorrow. Simplifying today.",
  brandLine: "Built on curiosity. Driven by engineering.",
  positioning: "We transform complex business challenges into intelligent digital solutions.",
  productName: null as string | null, // TODO: Set official product brand name if different from default
  get displayProductName() {
    return this.productName ?? "CodXQ hospital management system";
  },
  foundingYear: null as string | null, // TODO: Add verified founding year
  email: null as string | null, // TODO: Set official contact email (e.g., hello@codxq.com)
  phone: null as string | null, // TODO: Set official direct phone number
  whatsapp: { number: "918301846170", display: "+91 83018 46170" },
  address: null as {
    street: string | null;
    locality: string;
    region: string;
    postalCode: string | null;
    country: string;
    countryCode: string;
  } | null, // TODO: Set official physical office address in Kochi
  hours: {
    india: "Monday to Friday, 9:00–18:00 IST",
    gcc: "Monday to Thursday overlap 9:00–16:30 GST (Kochi is 1.5h ahead of UAE, 2.5h ahead of KSA)",
    europe: "Monday to Friday overlap 9:00–13:30 CET / 8:00–12:30 GMT (afternoons IST cover European mornings)",
    schema: "Mo-Fr 09:00-18:00",
    get display() {
      return this.india;
    },
  },
  social: [] as { label: string; href: string }[], // TODO: Add verified social profiles
  author: { name: null as string | null, role: null as string | null }, // TODO: Set named blog author
  areaServed: ["IN", "AE", "SA", "QA", "OM", "KW", "BH", "GB", "IE", "DE", "NL"],
  product: {
    name: "CodXQ HMS",
    href: "/products/hospital-management-system/",
  },
  lastUpdated: "2026-11-10",
  seo: {
    title: "CodXQ | Custom Software Development Company in Kochi, India",
    description:
      "Custom software built around how your business really works. Discovery-first development from Kochi for India, the GCC and Europe.",
  },
};

export const whatsappLink = (text = "Hi CodXQ, I'd like to talk about a project.") =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
