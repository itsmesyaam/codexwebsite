import type { RegulationId } from "@/content/regulations";
import type { FAQ, Feature } from "@/content/types";

/**
 * Location pages under /custom-software-development/{country}/{city}/.
 * Playbook quality gate: publish only if a page says at least five true, useful things.
 * Add Jeddah, Qatar, Oman, Kuwait or Bahrain once you have local clients or proof.
 * Overlap figures assume 9:00–18:00 IST office hours (site.hours). Recalculate if they change.
 */

const ONSITE_VISITS = false; // set true if you travel for discovery workshops

const officeAnswer = (place: string) =>
  ONSITE_VISITS
    ? `No. Our team is in Kochi, India. We work with ${place} clients over video calls and travel for discovery workshops on larger projects, so you meet the people building your software.`
    : `No. Our team is in Kochi, India. We work with ${place} clients over video calls and shared project tools, with a meeting rhythm agreed at the start and a demo of working software every two weeks.`;

export type Location = {
  country: string;
  city?: string;
  name: string; // display name: "UAE", "Dubai"
  market: "india" | "gcc" | "europe";
  h1: string;
  title: string;
  description: string;
  intro: string;
  facts: {
    timeDifference: string;
    overlap: string;
    workWeek: string;
    languages: string;
    hosting: string;
    currency: string | null; // confirm before publishing
  };
  builds: { title: string; items: string[] }; // replace with real project types as you complete them
  industries: { title: string; slugs: string[] };
  rules: { title: string; ids: RegulationId[]; notes: Feature[] };
  working: { title: string; items: Feature[] };
  why?: { title: string; items: Feature[] }; // Europe pages
  integrations: string[];
  faqs: FAQ[];
  cta: string;
  noindex?: boolean; // Quality gate: true if lacking 5 verified local proof points
};

/* ---------- Shared building blocks ---------- */
const uaeFacts = {
  timeDifference: "Kochi is 1.5 hours ahead of UAE time",
  overlap: "About 7.5 hours of shared working time a day",
  workWeek: "Monday to Friday, like most UAE businesses",
  languages: "Arabic and English, right-to-left",
  hosting: "UAE cloud regions",
  currency: "AED or USD",
};

const uaeWorking: Feature[] = [
  { name: "Time zone and working hours", text: "Kochi is 1.5 hours ahead of UAE time and we work Monday to Friday, so workshops and demos happen in your working day." },
  { name: "Arabic and English", text: "Bilingual interfaces with full right-to-left layouts, plus Arabic invoices and reports." },
  { name: "UAE-hosted data", text: "Hosting in UAE cloud regions, in a cloud account you own." },
  { name: "Contracts and payments", text: "Contracts in AED or USD, with milestones tied to working software." },
];

const uaeIntegrations = [
  "Accredited e-invoicing service providers",
  "Local payment gateways",
  "WhatsApp Business API",
  "Accounting and ERP systems",
  "Health information exchanges for healthcare providers",
];

const ksaFacts = {
  timeDifference: "Kochi is 2.5 hours ahead of Saudi time",
  overlap: "About 6.5 hours of shared working time a day",
  workWeek: "Your Sunday-to-Thursday week overlaps ours on Monday to Thursday",
  languages: "Arabic-first, with English",
  hosting: "Saudi cloud regions where your provider offers them",
  currency: "SAR or USD",
};

const ksaWorking: Feature[] = [
  { name: "Time zone and working week", text: "Kochi is 2.5 hours ahead of Saudi time. Our Monday-to-Friday week overlaps yours on four days, and we schedule workshops and demos on those days." },
  { name: "Arabic-first design", text: "Right-to-left interfaces designed in Arabic first, with English as a second language, plus Arabic invoices and reports." },
  { name: "In-country hosting", text: "Hosting in Saudi cloud regions where your chosen provider offers them, in a cloud account you own." },
  { name: "Contracts and payments", text: "Contracts in SAR or USD, with milestones tied to working software." },
];

const ksaIntegrations = [
  "ZATCA Fatoora",
  "Local payment gateways",
  "WhatsApp Business API",
  "Accounting and ERP systems",
  "NPHIES for healthcare providers",
];

const europeBuilds = (who: string) => ({
  title: "What we build",
  items: [
    `Custom business software and internal tools for ${who}`,
    "Web applications and customer portals",
    "Mobile apps for staff and customers",
    "Integrations between the systems you already use",
    "Dedicated development teams for your product",
  ],
});

const europeWhy = (who: string): { title: string; items: Feature[] } => ({
  title: `Why ${who} work with an Indian development partner`,
  items: [
    { name: "Engineering depth", text: "Kochi is one of India's established technology hubs, with a large pool of experienced engineers and stable teams." },
    { name: "Cost", text: "Lower engineering costs than most Western European markets, without dropping discovery, testing or documentation." },
    { name: "Discovery before commitment", text: "A written scope and clickable prototype before you commit to the full build, so you can judge the work first." },
    { name: "Ownership and continuity", text: "You own the code, documentation and deployment access, and we stay on to support and improve the software." },
  ],
});

const europeWorking = (o: { title: string; diff: string; overlap: string; hosting: string; currency: string }) => ({
  title: o.title,
  items: [
    { name: "Shared working hours", text: `${o.diff}. ${o.overlap}, so workshops and sprint demos happen in your morning and early afternoon.` },
    { name: "Language", text: "English is our working language for meetings, documents and code." },
    { name: "Data hosting", text: o.hosting },
    { name: "Contracts and payments", text: `Contracts and pricing in ${o.currency}, with milestones tied to working software.` },
  ] satisfies Feature[],
});

const europeIntegrations = ["Accounting and ERP systems", "CRM platforms", "Payment providers", "Single sign-on", "Data warehouses and BI tools"];

/* ---------- Pages ---------- */
export const locations: Location[] = [
  {
    country: "india",
    name: "India",
    market: "india",
    h1: "Custom software development company in India, based in Kochi",
    title: "Custom Software Development Company in India | CodXQ",
    description:
      "Custom software, ERP and apps for Indian businesses, with GST e-invoicing, UPI payments and DPDP-ready data handling. Discovery-first team in Kochi.",
    intro:
      "CodXQ is a custom software development company in Kochi, Kerala, working with businesses across India. We start by learning how your business runs, then build the ERP, app, portal or integration that fits it, with GST, UPI and the DPDP Act designed in from the start.",
    facts: {
      timeDifference: "Same time zone (IST)",
      overlap: "Full working-day overlap",
      workWeek: "Monday to Friday, IST",
      languages: "English, with Indian-language interfaces where your users need them",
      hosting: "Indian cloud regions or your own servers",
      currency: "INR",
    },
    builds: {
      title: "Software we build for Indian businesses",
      items: [
        "ERP and inventory systems for traders, distributors and manufacturers",
        "Customer and dealer portals",
        "Field sales and service apps",
        "Integrations with Tally, Zoho and payment gateways",
        "Patient portals and integrations for hospitals",
      ],
    },
    industries: { title: "Industries we serve in India", slugs: ["trading-distribution", "manufacturing", "education", "healthcare"] },
    rules: {
      title: "GST, e-invoicing and DPDP-ready software",
      ids: ["india-gst-einvoicing", "india-dpdp"],
      notes: [
        { name: "ABDM for healthcare providers", text: "Hospitals and clinics may also need ABDM integration for health IDs and consent-based record sharing." },
      ],
    },
    working: {
      title: "How we work with Indian businesses",
      items: [
        { name: "Same time zone", text: "We work in IST, so your team and ours share the whole working day." },
        { name: "In person or remote", text: "Workshops at our Kochi office, or over video anywhere in India." },
        { name: "Indian payments and tax", text: "GST invoicing, UPI and Razorpay payments designed in from the start." },
        { name: "Contracts", text: "Contracts in INR, with milestones tied to working software." },
      ],
    },
    integrations: ["Tally", "Zoho Books", "Razorpay and UPI", "WhatsApp Business API", "GST e-invoicing", "ABDM for healthcare"],
    faqs: [
      {
        q: "Do you work with businesses outside Kerala?",
        a: "Yes. Our team is in Kochi, and we work with companies across India over video calls and shared project tools. Businesses near Kochi are welcome to run discovery workshops at our office.",
      },
      {
        q: "Is your software ready for GST e-invoicing?",
        a: "Yes. We build GST-compliant invoices and connect them to the e-invoicing system when your turnover requires it, with the IRN and QR code on the printed invoice. If you use Tally or Zoho for accounts, we can sync invoices with them instead of replacing them.",
      },
      {
        q: "How does the DPDP Act affect our software?",
        a: "The DPDP Act's core obligations apply from 13 May 2027. Software holding customer or employee data needs clear consent records, limits on what is collected and kept, security safeguards, and a way to handle breaches and data requests. We design these into new systems and can review existing ones.",
      },
    ],
    cta: "Book a free process review",
  },
  {
    country: "uae",
    name: "UAE",
    market: "gcc",
    h1: "Custom software development for UAE businesses",
    title: "Custom Software Development in the UAE | CodXQ",
    description:
      "Custom software, ERP and apps for UAE businesses, with Arabic UI, UAE e-invoicing integration and UAE-hosted data. Kochi team, 1.5 hours ahead.",
    intro:
      "CodXQ builds custom software for companies across the UAE from our development team in Kochi, India. We're 1.5 hours ahead of UAE time, so our working days overlap almost completely. Every project starts by learning how your business runs; then we build the ERP, app, portal or integration that fits.",
    facts: uaeFacts,
    builds: {
      title: "What UAE companies ask us to build",
      items: [
        "Trading and distribution ERPs with van sales and credit control",
        "Customer portals for service companies",
        "Field-team mobile apps",
        "Integrations between accounting, CRM and payment systems",
        "E-invoicing integrations ahead of the 2027 deadline",
      ],
    },
    industries: { title: "Industries we serve in the UAE", slugs: ["trading-distribution", "logistics", "real-estate-facilities", "healthcare"] },
    rules: {
      title: "UAE rules your software must handle",
      ids: ["uae-einvoicing", "uae-pdpl", "uae-health-data"],
      notes: [
        { name: "Free zones", text: "Some free zones, including DIFC and ADGM, have their own data-protection laws, so check which regime applies to your entity." },
      ],
    },
    working: { title: "How we work with UAE teams", items: uaeWorking },
    integrations: uaeIntegrations,
    faqs: [
      { q: "Do you have an office in the UAE?", a: officeAnswer("UAE") },
      {
        q: "Can you connect our existing ERP to UAE e-invoicing?",
        a: "Usually, yes. We connect your ERP or billing system to the accredited service provider you choose, map your invoice data to the required format and fix gaps in customer and tax data before go-live. CodXQ is not an accredited service provider itself.",
      },
      {
        q: "Where will our data be stored?",
        a: "Wherever your rules require. For most UAE clients we host in UAE cloud regions, and health data tied to UAE services stays in the country unless a health authority approves otherwise. The infrastructure sits in a cloud account you own.",
      },
    ],
    cta: "Book a process review in UAE time",
  },
  {
    country: "uae",
    city: "dubai",
    name: "Dubai",
    market: "gcc",
    h1: "Custom software development in Dubai",
    title: "Custom Software Development in Dubai | CodXQ",
    description:
      "Custom software, ERP and apps for Dubai businesses, with Arabic UI, UAE e-invoicing integration and UAE-hosted data. Kochi team, 1.5 hours ahead of Dubai.",
    intro:
      "CodXQ builds custom software for Dubai companies from our development team in Kochi, India. We're 1.5 hours ahead of UAE time, so our working days overlap almost completely. Like every CodXQ project, it starts by learning how your business runs. Then we build the ERP, app, portal or integration that fits it.",
    facts: uaeFacts,
    builds: {
      title: "Software we build for Dubai companies",
      items: [
        "Trading and distribution ERPs with van sales and credit control",
        "Customer portals for service companies",
        "Field-team mobile apps",
        "Integrations between accounting, CRM and payment systems",
      ],
    },
    industries: { title: "Industries we serve in Dubai", slugs: ["trading-distribution", "logistics", "real-estate-facilities", "retail-ecommerce"] },
    rules: {
      title: "UAE compliance your software needs in 2026–2027",
      ids: ["uae-einvoicing", "uae-pdpl", "uae-health-data"],
      notes: [
        { name: "DIFC companies", text: "Companies in the Dubai International Financial Centre follow the DIFC's own data-protection law rather than the federal law." },
        { name: "DHA-licensed healthcare", text: "Facilities licensed by the Dubai Health Authority must connect to NABIDH as a condition of their licence." },
      ],
    },
    working: { title: "Working with a Kochi team from Dubai", items: uaeWorking },
    integrations: uaeIntegrations,
    faqs: [
      { q: "Do you have an office in Dubai?", a: officeAnswer("Dubai") },
      {
        q: "Can you connect our ERP to UAE e-invoicing?",
        a: "Yes, in most cases. We connect your ERP or billing system to your chosen accredited service provider, check that every invoice field meets the required format, and clean customer tax data before go-live. If you're below the first threshold, the voluntary period is a good time to prepare.",
      },
      {
        q: "Can the software be in Arabic?",
        a: "Yes. We build bilingual Arabic–English interfaces with full right-to-left layouts, Arabic invoices and reports, and a language switch for each user. Both languages are designed and tested from the start, rather than translated at the end.",
      },
      {
        q: "Where will our data be stored?",
        a: "In UAE cloud regions for most Dubai clients, in a cloud account you own. If you run a clinic or hospital, patient data tied to UAE services must stay in the UAE unless a health authority approves otherwise, and we design the hosting around that.",
      },
    ],
    cta: "Book a process review in UAE time",
  },
  {
    country: "uae",
    city: "abu-dhabi",
    name: "Abu Dhabi",
    market: "gcc",
    h1: "Custom software development in Abu Dhabi",
    title: "Custom Software Development in Abu Dhabi | CodXQ",
    description:
      "Custom software for Abu Dhabi companies: bilingual Arabic interfaces, UAE e-invoicing integration, in-country hosting and health-data rules for DoH facilities.",
    intro:
      "CodXQ builds custom software for Abu Dhabi companies from our development team in Kochi, India, 1.5 hours ahead of UAE time. We learn how your business runs first, then build software that fits it, with bilingual interfaces and data hosted in the UAE where your rules require.",
    facts: uaeFacts,
    builds: {
      title: "Software we build for Abu Dhabi companies",
      items: [
        "Operations and approval systems for service and contracting companies",
        "Field service and facility management apps",
        "Patient portals and integrations for DoH-licensed facilities",
        "Integrations between ERP, accounting and e-invoicing providers",
      ],
    },
    industries: { title: "Industries we serve in Abu Dhabi", slugs: ["construction", "real-estate-facilities", "healthcare", "enterprise"] },
    rules: {
      title: "UAE compliance your software needs in 2026–2027",
      ids: ["uae-einvoicing", "uae-pdpl", "uae-health-data"],
      notes: [
        { name: "ADGM companies", text: "Companies registered in Abu Dhabi Global Market follow ADGM's own data-protection regulations rather than the federal law." },
        { name: "DoH-licensed healthcare", text: "Facilities licensed by the Department of Health – Abu Dhabi connect to Malaffi, the emirate's health information exchange." },
      ],
    },
    working: { title: "Working with a Kochi team from Abu Dhabi", items: uaeWorking },
    integrations: uaeIntegrations,
    faqs: [
      { q: "Do you have an office in Abu Dhabi?", a: officeAnswer("Abu Dhabi") },
      {
        q: "Do you build software for DoH-licensed healthcare facilities?",
        a: "Yes. Facilities licensed by DoH connect to Malaffi, so we plan that integration and UAE hosting from the start of any healthcare project. Onboarding with Malaffi is completed together with the facility. Our hospital management system page lists its current integration status.",
      },
      {
        q: "Can the software be bilingual?",
        a: "Yes. We build Arabic–English interfaces with full right-to-left layouts, Arabic invoices and reports, and a language switch per user. Layouts are designed and tested in both languages, because a screen that works in English often breaks when mirrored.",
      },
    ],
    cta: "Book a process review in UAE time",
  },
  {
    country: "saudi-arabia",
    name: "Saudi Arabia",
    market: "gcc",
    h1: "Custom software development for Saudi businesses",
    title: "Custom Software Development in Saudi Arabia | CodXQ",
    description:
      "Arabic-first custom software, ERP and apps for Saudi companies, with ZATCA Fatoora integration, PDPL-ready data handling and in-country hosting.",
    intro:
      "CodXQ builds custom software for companies in Saudi Arabia from our team in Kochi, India, 2.5 hours ahead of Saudi time. We design Arabic-first, right-to-left interfaces, integrate with ZATCA's Fatoora platform and design for the Personal Data Protection Law from the first sprint.",
    facts: ksaFacts,
    builds: {
      title: "What Saudi companies ask us to build",
      items: [
        "ERP and billing systems integrated with ZATCA Fatoora",
        "Arabic-first customer and employee portals",
        "Field service and sales apps",
        "NPHIES workflows for healthcare providers",
        "Integrations between ERP, accounting and payment systems",
      ],
    },
    industries: { title: "Industries we serve in Saudi Arabia", slugs: ["trading-distribution", "healthcare", "construction", "financial-services"] },
    rules: { title: "Saudi rules your software must handle", ids: ["ksa-einvoicing", "ksa-pdpl", "ksa-nphies"], notes: [] },
    working: { title: "How we work with Saudi teams", items: ksaWorking },
    integrations: ksaIntegrations,
    faqs: [
      { q: "Do you have an office in Saudi Arabia?", a: officeAnswer("Saudi") },
      {
        q: "Can you integrate our system with ZATCA before the deadline?",
        a: "Yes. Taxpayers whose VAT-taxable revenue exceeded SAR 187,500 in any year from 2022 to 2025 must integrate with Fatoora before 1 February 2027. We assess your billing system, build or fix the integration, and test it thoroughly before go-live.",
      },
      {
        q: "Should our software be Arabic-first?",
        a: "For most Saudi teams, yes. We design Arabic-first right-to-left layouts with English as a switchable second language, plus Arabic invoices and reports. Arabic text and mirrored layouts change spacing and navigation, so we design and test both languages from the start.",
      },
    ],
    cta: "Book a process review in Saudi time",
  },
  {
    country: "saudi-arabia",
    city: "riyadh",
    name: "Riyadh",
    market: "gcc",
    h1: "Custom software development in Riyadh",
    title: "Custom Software Development in Riyadh | CodXQ",
    description:
      "Arabic-first custom software, ERP and apps for Riyadh companies, with ZATCA Fatoora integration, PDPL-ready design and Saudi hosting.",
    intro:
      "CodXQ builds custom software for Riyadh companies from our team in Kochi, India, 2.5 hours ahead of Riyadh. Like every CodXQ project, it starts with how your business runs. Then we build Arabic-first software that fits it, integrated with ZATCA and hosted where your data rules require.",
    facts: ksaFacts,
    builds: {
      title: "Software we build for Riyadh companies",
      items: [
        "ERP and billing systems integrated with ZATCA Fatoora",
        "Arabic-first portals for customers, partners and staff",
        "Approval and workflow systems for large organisations",
        "Integrations between ERP, CRM and payment systems",
      ],
    },
    industries: { title: "Industries we serve in Riyadh", slugs: ["trading-distribution", "healthcare", "financial-services", "enterprise"] },
    rules: { title: "Saudi compliance your software needs in 2026–2027", ids: ["ksa-einvoicing", "ksa-pdpl", "ksa-nphies"], notes: [] },
    working: { title: "Working with a Kochi team from Riyadh", items: ksaWorking },
    integrations: ksaIntegrations,
    faqs: [
      { q: "Do you have an office in Riyadh?", a: officeAnswer("Riyadh") },
      {
        q: "Can you integrate our ERP with Fatoora?",
        a: "Yes. We review how your ERP or billing system produces invoices, build or fix the Fatoora integration, clean customer and tax data, and test real invoice scenarios, including credit notes, before go-live and well ahead of your deadline.",
      },
      {
        q: "How do you work with a Sunday-to-Thursday week?",
        a: "Our team works Monday to Friday, so we overlap with your week on four days. We schedule workshops and sprint demos Monday to Thursday, and your support plan sets out how urgent Sunday issues are handled.",
      },
      {
        q: "Where will our data be stored?",
        a: "In Saudi cloud regions where your chosen provider offers them, or on your own servers, inside accounts you own. Saudi PDPL treats health data as sensitive personal data, so healthcare projects get extra controls on access, retention and transfer.",
      },
    ],
    cta: "Book a process review in Saudi time",
  },
  {
    country: "saudi-arabia",
    city: "jeddah",
    name: "Jeddah",
    market: "gcc",
    h1: "Custom software development in Jeddah",
    title: "Custom Software Development in Jeddah | CodXQ",
    description:
      "Arabic-first custom software, ERP and apps for Jeddah commercial and logistics companies, with ZATCA integration and Saudi data hosting.",
    intro:
      "CodXQ builds custom software for commercial, trading and logistics businesses in Jeddah from our engineering team in Kochi, India, 2.5 hours ahead. We build Arabic-first systems integrated with ZATCA and compliant with Saudi PDPL.",
    facts: ksaFacts,
    builds: {
      title: "Software we build for Jeddah companies",
      items: [
        "Trading, port logistics and distribution ERP systems",
        "Arabic-first customer ordering and partner portals",
        "Field sales and delivery tracking apps",
        "Integrations with ZATCA Fatoora and regional payment gateways",
      ],
    },
    industries: { title: "Industries we serve in Jeddah", slugs: ["trading-distribution", "logistics", "retail-ecommerce", "healthcare"] },
    rules: { title: "Saudi compliance your software needs in 2026–2027", ids: ["ksa-einvoicing", "ksa-pdpl", "ksa-nphies"], notes: [] },
    working: { title: "Working with a Kochi team from Jeddah", items: ksaWorking },
    integrations: ksaIntegrations,
    faqs: [
      { q: "Do you have an office in Jeddah?", a: officeAnswer("Jeddah") },
      {
        q: "Can you connect our ERP to ZATCA Fatoora?",
        a: "Yes. We assess your existing billing logic, map fields to the required ZATCA standard, clean customer records, and validate test invoices well in advance of your deadline.",
      },
      {
        q: "How does the working week align?",
        a: "Our team operates Monday to Friday, which overlaps with Saudi Arabia's Sunday-to-Thursday week on Monday through Thursday for joint meetings, sprint planning, and live demos.",
      },
    ],
    cta: "Book a process review in Saudi time",
    noindex: true,
  },
  {
    country: "qatar",
    name: "Qatar",
    market: "gcc",
    h1: "Custom software development for Qatar businesses",
    title: "Custom Software Development in Qatar | CodXQ",
    description:
      "Custom software, portals and ERP for Qatar businesses: bilingual Arabic interfaces, in-country hosting options and seamless team overlap from Kochi.",
    intro:
      "CodXQ designs and develops custom software for companies in Qatar from our technology hub in Kochi, India. We are 2.5 hours ahead of Qatar, providing 6.5 hours of daily working overlap for collaborative engineering.",
    facts: {
      timeDifference: "Kochi is 2.5 hours ahead of Qatar (AST)",
      overlap: "About 6.5 hours of shared working time a day",
      workWeek: "Monday to Thursday overlap (Sunday-to-Thursday week in Qatar)",
      languages: "Arabic and English, right-to-left",
      hosting: "Qatar cloud regions or private infrastructure",
      currency: "QAR or USD",
    },
    builds: {
      title: "Software we build for Qatar businesses",
      items: [
        "Operations management and ERP for contracting and trading",
        "Bilingual Arabic-English customer and vendor portals",
        "Field inspection and facility service mobile apps",
        "Payment and accounting system integrations",
      ],
    },
    industries: { title: "Industries we serve in Qatar", slugs: ["construction", "trading-distribution", "real-estate-facilities", "enterprise"] },
    rules: {
      title: "Data protection and standards in Qatar",
      ids: [],
      notes: [
        { name: "Qatar Personal Data Privacy Law", text: "Law No. 13 of 2016 regulates processing of personal data in Qatar, requiring transparency, data minimization, and security controls." },
      ],
    },
    working: {
      title: "How we work with Qatar teams",
      items: [
        { name: "Shared working hours", text: "Kochi is 2.5 hours ahead of Qatar. We overlap Monday to Thursday for all ceremonies, workshops, and releases." },
        { name: "Bilingual design", text: "Arabic and English right-to-left native layouts and reporting." },
        { name: "Hosting options", text: "Hosting in local cloud regions inside accounts owned entirely by you." },
        { name: "Contracts and payments", text: "Commercial terms in QAR or USD tied to verified sprint milestones." },
      ],
    },
    integrations: ["Regional payment gateways", "ERP and accounting systems", "WhatsApp Business API", "SMS notifications"],
    faqs: [
      { q: "Do you have an office in Qatar?", a: officeAnswer("Qatar") },
      {
        q: "Can you build Arabic-first software?",
        a: "Yes. Every interface is architected for right-to-left layout from day one, with native typography and bilingual database storage.",
      },
    ],
    cta: "Book a process review in Qatar time",
    noindex: true,
  },
  {
    country: "oman",
    name: "Oman",
    market: "gcc",
    h1: "Custom software development for Oman businesses",
    title: "Custom Software Development in Oman | CodXQ",
    description:
      "Custom software and ERP for Omani businesses: Arabic-first design, VAT-ready billing, local hosting and 7.5 hours of daily working overlap from Kochi.",
    intro:
      "CodXQ builds custom business software for companies in Oman from Kochi, India. Being only 1.5 hours ahead of Oman, our working days overlap by 7.5 hours daily, enabling real-time collaboration with your operations team.",
    facts: {
      timeDifference: "Kochi is 1.5 hours ahead of Oman time (GST)",
      overlap: "About 7.5 hours of shared working time a day",
      workWeek: "Monday to Thursday overlap (Sunday-to-Thursday week in Oman)",
      languages: "Arabic and English, right-to-left",
      hosting: "Oman or GCC cloud regions",
      currency: "OMR or USD",
    },
    builds: {
      title: "Software we build for Omani businesses",
      items: [
        "Trading, distribution, and warehouse management software",
        "Field service and technician dispatch mobile applications",
        "Bilingual Arabic-English customer ordering portals",
        "VAT-compliant billing and accounting integrations",
      ],
    },
    industries: { title: "Industries we serve in Oman", slugs: ["trading-distribution", "logistics", "construction", "enterprise"] },
    rules: {
      title: "Data protection and tax rules in Oman",
      ids: [],
      notes: [
        { name: "Oman Personal Data Protection Law", text: "Royal Decree No. 6/2022 sets duties for data controllers including consent, access rights, and breach safeguards." },
        { name: "Oman VAT Compliance", text: "Invoicing and tax determination compliant with the Oman Tax Authority VAT regulations." },
      ],
    },
    working: {
      title: "How we work with Oman teams",
      items: [
        { name: "Exceptional time zone overlap", text: "With only 1.5 hours difference, our teams share 7.5 working hours each day from Monday to Thursday." },
        { name: "Bilingual interface", text: "Native right-to-left Arabic layouts with English dual support." },
        { name: "Data governance", text: "Hosted in your own cloud subscription with role-based security." },
        { name: "Billing & contracts", text: "Invoiced in OMR or USD against completed deliverables." },
      ],
    },
    integrations: ["Local payment gateways", "Tally & Odoo accounting sync", "WhatsApp Business API", "VAT invoice exports"],
    faqs: [
      { q: "Do you have an office in Oman?", a: officeAnswer("Oman") },
      {
        q: "Does your software support Oman VAT?",
        a: "Yes. Invoices, credit notes, and tax reports are generated according to Oman VAT requirements, and can sync directly back to your accounts.",
      },
    ],
    cta: "Book a process review in Oman time",
    noindex: true,
  },
  {
    country: "united-kingdom",
    name: "United Kingdom",
    market: "europe",
    h1: "Custom software development for UK companies, from India",
    title: "Custom Software Development for UK Companies | CodXQ",
    description:
      "Custom software, apps and integrations for UK businesses from a discovery-first team in Kochi, India. UK GDPR-aligned, UK or EU hosting, priced in GBP.",
    intro:
      "CodXQ builds custom software for UK companies from our development team in Kochi, India. We start with how your business runs, agree a written scope and prototype, then build in two-week sprints with UK GDPR-aligned processes and data hosted in the UK or EU.",
    facts: {
      timeDifference: "Kochi is 4.5 hours ahead in summer, 5.5 in winter",
      overlap: "About 3.5–4.5 hours of shared working time a day",
      workWeek: "Monday to Friday",
      languages: "English",
      hosting: "UK or EU cloud regions",
      currency: "GBP",
    },
    builds: europeBuilds("UK businesses"),
    industries: { title: "Industries we serve in the UK", slugs: ["logistics", "financial-services", "retail-ecommerce", "enterprise"] },
    rules: {
      title: "UK GDPR, data processing agreements and UK hosting",
      ids: [],
      notes: [
        {
          name: "UK GDPR and the Data Protection Act 2018",
          text: "UK personal data is governed by the UK GDPR and the Data Protection Act 2018. We sign a data processing agreement, and transfers to India use the UK International Data Transfer Agreement or the UK Addendum to the EU Standard Contractual Clauses.",
        },
      ],
    },
    working: europeWorking({
      title: "Working hours overlap with the UK",
      diff: "Kochi is 4.5 hours ahead of the UK in summer and 5.5 hours in winter",
      overlap: "That gives about 3.5 to 4.5 shared working hours a day",
      hosting: "Data hosted in UK or EU cloud regions, in an account you own.",
      currency: "GBP",
    }),
    why: europeWhy("UK companies"),
    integrations: europeIntegrations,
    faqs: [
      { q: "Do you have a UK office?", a: officeAnswer("UK") },
      {
        q: "How do you handle UK GDPR?",
        a: "We sign a data processing agreement before handling personal data, host it in UK or EU regions, and limit what our team can access. Transfers to India use the UK International Data Transfer Agreement or the UK Addendum to the EU Standard Contractual Clauses, agreed in the contract.",
      },
      {
        q: "How much of our working day overlaps with yours?",
        a: "About 3.5 hours in winter and 4.5 in summer, based on our 9:00–18:00 IST office hours. Your morning is our afternoon, so we hold workshops and demos then, and there's often new progress to review when your day starts.",
      },
    ],
    cta: "Book a free process review",
  },
  {
    country: "ireland",
    name: "Ireland",
    market: "europe",
    h1: "Custom software development for Irish companies, from India",
    title: "Custom Software Development for Irish Companies | CodXQ",
    description:
      "Custom software and integrations for Irish businesses from a discovery-first team in Kochi, India. GDPR-aligned, EU-hosted data, priced in EUR.",
    intro:
      "CodXQ builds custom software for Irish companies from our development team in Kochi, India. Every project starts with discovery, a written scope and a prototype, then moves into two-week sprints, with GDPR-aligned processes and data hosted in Ireland or elsewhere in the EU.",
    facts: {
      timeDifference: "Kochi is 4.5 hours ahead in summer, 5.5 in winter",
      overlap: "About 3.5–4.5 hours of shared working time a day",
      workWeek: "Monday to Friday",
      languages: "English",
      hosting: "EU cloud regions, including Ireland",
      currency: "EUR",
    },
    builds: europeBuilds("Irish businesses"),
    industries: { title: "Industries we serve in Ireland", slugs: ["financial-services", "healthcare", "logistics", "enterprise"] },
    rules: {
      title: "GDPR, data processing agreements and EU hosting",
      ids: ["eu-gdpr"],
      notes: [
        { name: "Data Protection Commission", text: "Ireland's Data Protection Commission supervises GDPR compliance for Irish companies, and is the lead EU regulator for many multinationals based in Ireland." },
      ],
    },
    working: europeWorking({
      title: "Working hours overlap with Ireland",
      diff: "Kochi is 4.5 hours ahead of Ireland in summer and 5.5 hours in winter",
      overlap: "That gives about 3.5 to 4.5 shared working hours a day",
      hosting: "Data hosted in EU cloud regions, including regions in Ireland, in an account you own.",
      currency: "EUR",
    }),
    why: europeWhy("Irish companies"),
    integrations: europeIntegrations,
    faqs: [
      { q: "Do you have an office in Ireland?", a: officeAnswer("Irish") },
      {
        q: "Do you sign GDPR data processing agreements?",
        a: "Yes. We sign a data processing agreement and Standard Contractual Clauses before handling any personal data, host it in EU regions, and give our team only the access it needs. Your data protection officer can review our security overview before the project starts.",
      },
      {
        q: "How much of our working day overlaps with yours?",
        a: "About 3.5 hours in winter and 4.5 in summer, based on our 9:00–18:00 IST office hours. We use your morning for workshops and demos, and build during the rest of our day.",
      },
    ],
    cta: "Book a free process review",
  },
  {
    country: "germany",
    name: "Germany",
    market: "europe",
    h1: "Custom software development for German companies, from India",
    title: "Custom Software Development for German Companies | CodXQ",
    description:
      "Custom software and integrations for German companies from a discovery-first team in Kochi, India. GDPR and BDSG-aligned, EU-hosted, priced in EUR.",
    intro:
      "CodXQ builds custom software for German companies from our development team in Kochi, India. We start with discovery and a written scope, build in two-week sprints with demos you can test, and handle personal data under a data processing agreement with hosting in Germany or elsewhere in the EU.",
    facts: {
      timeDifference: "Kochi is 3.5 hours ahead in summer, 4.5 in winter",
      overlap: "About 4.5–5.5 hours of shared working time a day",
      workWeek: "Monday to Friday",
      languages: "English working language; German interfaces for your users",
      hosting: "Germany or other EU cloud regions",
      currency: "EUR",
    },
    builds: europeBuilds("German businesses"),
    industries: { title: "Industries we serve in Germany", slugs: ["manufacturing", "logistics", "retail-ecommerce", "enterprise"] },
    rules: {
      title: "GDPR, data processing agreements and EU hosting",
      ids: ["eu-gdpr"],
      notes: [
        { name: "Federal Data Protection Act (BDSG)", text: "The BDSG supplements GDPR in Germany, including rules on employee data. We follow your data processing agreement and host data in German or other EU regions." },
      ],
    },
    working: europeWorking({
      title: "Working hours overlap with Germany",
      diff: "Kochi is 3.5 hours ahead of Germany in summer and 4.5 hours in winter",
      overlap: "That gives about 4.5 to 5.5 shared working hours a day",
      hosting: "Data hosted in Germany or other EU cloud regions, in an account you own.",
      currency: "EUR",
    }),
    why: europeWhy("German companies"),
    integrations: europeIntegrations,
    faqs: [
      { q: "Do you have an office in Germany?", a: officeAnswer("German") },
      {
        q: "Do you work in German?",
        a: "Our working language for meetings, documents and code is English. If your users need German, we build German-language interfaces and have the text reviewed by a professional translator or a native speaker you nominate before release.",
      },
      {
        q: "How do you handle GDPR and the BDSG?",
        a: "We sign a data processing agreement and Standard Contractual Clauses before handling personal data, host it in Germany or other EU regions, and restrict our team's access. Employee data gets extra care, because the BDSG adds rules for it on top of GDPR.",
      },
    ],
    cta: "Book a free process review",
  },
  {
    country: "netherlands",
    name: "Netherlands",
    market: "europe",
    h1: "Custom software development for Dutch companies, from India",
    title: "Custom Software Development for Dutch Companies | CodXQ",
    description:
      "Custom software and integrations for Dutch businesses from a discovery-first team in Kochi, India. GDPR-aligned, EU-hosted data, priced in EUR.",
    intro:
      "CodXQ builds custom software for Dutch companies from our development team in Kochi, India. Every project starts with discovery, a written scope and a prototype, then moves into two-week sprints, with GDPR-aligned processes and data hosted in the Netherlands or elsewhere in the EU.",
    facts: {
      timeDifference: "Kochi is 3.5 hours ahead in summer, 4.5 in winter",
      overlap: "About 4.5–5.5 hours of shared working time a day",
      workWeek: "Monday to Friday",
      languages: "English",
      hosting: "Netherlands or other EU cloud regions",
      currency: "EUR",
    },
    builds: europeBuilds("Dutch businesses"),
    industries: { title: "Industries we serve in the Netherlands", slugs: ["logistics", "retail-ecommerce", "financial-services", "enterprise"] },
    rules: {
      title: "GDPR, data processing agreements and EU hosting",
      ids: ["eu-gdpr"],
      notes: [
        { name: "Dutch implementation (UAVG)", text: "The Netherlands applies GDPR through the UAVG implementation act, supervised by the Autoriteit Persoonsgegevens." },
      ],
    },
    working: europeWorking({
      title: "Working hours overlap with the Netherlands",
      diff: "Kochi is 3.5 hours ahead of the Netherlands in summer and 4.5 hours in winter",
      overlap: "That gives about 4.5 to 5.5 shared working hours a day",
      hosting: "Data hosted in the Netherlands or other EU cloud regions, in an account you own.",
      currency: "EUR",
    }),
    why: europeWhy("Dutch companies"),
    integrations: europeIntegrations,
    faqs: [
      { q: "Do you have an office in the Netherlands?", a: officeAnswer("Dutch") },
      {
        q: "How do you handle GDPR?",
        a: "We sign a data processing agreement and Standard Contractual Clauses before handling personal data, host it in EU regions, and give our team only the access it needs. Your privacy officer can review our security overview before any personal data is shared.",
      },
      {
        q: "How much of our working day overlaps with yours?",
        a: "About 4.5 hours in winter and 5.5 in summer, based on our 9:00–18:00 IST office hours. That covers your whole morning and early afternoon for workshops, questions and sprint demos.",
      },
    ],
    cta: "Book a free process review",
  },
];

export const locationPath = (l: Pick<Location, "country" | "city">) =>
  `/custom-software-development/${l.country}/${l.city ? `${l.city}/` : ""}`;

export const countryPages = locations.filter((l) => !l.city);
export const cityPages = locations.filter((l) => l.city);
export const getCountry = (country: string) => countryPages.find((l) => l.country === country);
export const getCity = (country: string, city: string) => cityPages.find((l) => l.country === country && l.city === city);
export const citiesOf = (country: string) => cityPages.filter((l) => l.country === country);
