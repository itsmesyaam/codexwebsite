import type { Feature } from "@/content/types";

/**
 * DEMONSTRATION projects only. They are labelled on the page, set to noindex,
 * and never shown as local proof on location pages.
 * When you add real work: set demo: false, fill country, results (verified numbers only)
 * and quote (with the client's written permission).
 */
export type CoverKey = "erp" | "portal" | "field" | "ai";

export type CaseStudy = {
  slug: string;
  demo: boolean;
  name: string;
  h1: string; // real projects: "How [client type] in [country] [achieved result]"
  title: string;
  description: string;
  clientType: string;
  industry: string; // industry slug
  country: string | null; // location country segment, real projects only
  services: string[]; // service slugs
  cover: CoverKey;
  summary: string;
  client: string;
  challenge: string;
  discovery: string[];
  solution: { intro: string; modules: Feature[] };
  features: string[];
  technologies: string[];
  results: { metric: string; text: string }[]; // verified only
  quote: { text: string; name: string; role: string } | null;
  liveUrl: string | null;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "demo-distribution-erp",
    demo: true,
    name: "Distribution ERP with van sales",
    h1: "Demo project: a distribution ERP with van sales and e-invoicing",
    title: "Demo: Distribution ERP with Van Sales | CodXQ",
    description:
      "A demonstration project showing how CodXQ approaches a multi-warehouse ERP with van sales, credit control and e-invoicing-ready billing.",
    clientType: "Multi-branch distributor",
    industry: "trading-distribution",
    country: null,
    services: ["erp-crm-development", "mobile-app-development", "api-integration"],
    cover: "erp",
    summary: "Multi-warehouse stock, an offline van sales app and credit control, with invoices ready for e-invoicing.",
    client:
      "An illustrative distributor of fast-moving goods with several warehouses, a team of van salespeople and customers in more than one GCC country.",
    challenge:
      "Stock was tracked in a spreadsheet per warehouse. Van salespeople took orders on paper and WhatsApp, and invoices were typed into accounting software at the end of each day. Credit limits existed, but nobody checked them when an order was taken.",
    discovery: [
      "Most invoice errors came from re-typing van orders at the end of the day",
      "Credit checks happened after delivery, not before the order",
      "Each warehouse counted and labelled stock differently",
      "Customer tax data wasn't clean enough for e-invoicing",
    ],
    solution: {
      intro: "A web ERP for the office and an offline-first app for the vans, sharing one database and one set of rules.",
      modules: [
        { name: "Multi-warehouse inventory", text: "Batch and expiry tracking, transfers and reorder levels across every warehouse." },
        { name: "Van sales app", text: "Orders, invoices and collections offline, synced when the van is back in signal." },
        { name: "Credit control", text: "Limits and overdue holds checked on the device before an order is confirmed." },
        { name: "E-invoicing-ready billing", text: "Structured invoice data and clean customer records, ready to connect to an e-invoicing provider." },
        { name: "Owner dashboard", text: "Live margin, stock age and receivables by branch and salesperson." },
      ],
    },
    features: ["Offline-first mobile app", "Arabic and English interfaces", "Role-based access by branch", "Sync with existing accounting software"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Flutter", "AWS"],
    results: [],
    quote: null,
    liveUrl: null,
  },
  {
    slug: "demo-hospital-patient-portal",
    demo: true,
    name: "Patient portal and appointment app",
    h1: "Demo project: a patient portal and appointment app for a multi-specialty hospital",
    title: "Demo: Hospital Patient Portal and App | CodXQ",
    description:
      "A demonstration project showing a patient portal and mobile app with appointments, reports, payments and reminders, connected to existing hospital systems.",
    clientType: "Multi-specialty hospital",
    industry: "healthcare",
    country: null,
    services: ["web-application-development", "mobile-app-development", "api-integration"],
    cover: "portal",
    summary: "Appointments, reports, prescriptions and payments for patients, connected to the hospital's existing systems.",
    client:
      "An illustrative multi-specialty hospital with several departments, an existing hospital information system and a busy front-desk phone line.",
    challenge:
      "Patients phoned to book appointments, collected reports in person and queued to pay bills. The front desk spent most of the day on calls, and follow-up visits were often missed.",
    discovery: [
      "Most calls were about appointment slots and whether reports were ready",
      "Reports were finished in the system but had no way to reach patients",
      "Payment links were sent by hand over WhatsApp",
      "Patient data had to stay in-country under local rules",
    ],
    solution: {
      intro:
        "A web portal and mobile app for patients, connected to the hospital's existing system through an integration layer, so no clinical data is re-entered.",
      modules: [
        { name: "Appointment booking", text: "Live slots by doctor and department, with rescheduling and cancellations." },
        { name: "Reports and prescriptions", text: "Published securely to the patient as soon as they're signed off." },
        { name: "Payments", text: "Online bills, deposits and receipts." },
        { name: "Reminders", text: "Appointment, follow-up and medication reminders by notification, SMS or WhatsApp." },
        { name: "Integration layer", text: "Sync with the hospital system for patients, slots and results, with audit logs." },
      ],
    },
    features: ["Bilingual interface", "Consent and access logging", "In-country hosting", "Family accounts for dependants"],
    technologies: ["Next.js", "Flutter", "Node.js", "PostgreSQL", "FHIR"],
    results: [],
    quote: null,
    liveUrl: null,
  },
  {
    slug: "demo-facility-field-service",
    demo: true,
    name: "Field service app for facility management",
    h1: "Demo project: a field service app for a facility management company",
    title: "Demo: Facility Management Field Service App | CodXQ",
    description:
      "A demonstration project showing work orders, a technician app, service-level tracking and a client portal for a facility management company.",
    clientType: "Facility management company",
    industry: "real-estate-facilities",
    country: null,
    services: ["mobile-app-development", "web-application-development"],
    cover: "field",
    summary: "Tenant requests, technician dispatch and service-level tracking, with photo proof and client sign-off.",
    client:
      "An illustrative facility management company maintaining residential and commercial buildings for several property owners.",
    challenge:
      "Requests arrived by phone, email and WhatsApp. Supervisors dispatched technicians by phone, and proof of finished work was a paper job card. Clients questioned invoices because they couldn't see what had been done.",
    discovery: [
      "Requests were logged in three places, and some were never closed",
      "Response times promised in client contracts weren't being measured",
      "Technicians travelled between sites in an unplanned order",
      "Invoices took weeks because job cards reached the office late",
    ],
    solution: {
      intro: "A dispatch console for supervisors, a mobile app for technicians and a portal for clients, all working from the same work orders.",
      modules: [
        { name: "Request intake", text: "Requests from the portal, email and WhatsApp in one queue." },
        { name: "Dispatch console", text: "Assign jobs by skill, location and priority." },
        { name: "Technician app", text: "Checklists, photos, parts used and customer signature, offline if needed." },
        { name: "Service-level tracking", text: "Response and completion times measured against each contract." },
        { name: "Client portal", text: "Open jobs, history, photos and invoices for each property owner." },
      ],
    },
    features: ["Offline technician app", "Photo and signature proof", "Preventive maintenance schedules", "Arabic and English"],
    technologies: ["React", "Next.js", "Flutter", "Node.js", "PostgreSQL"],
    results: [],
    quote: null,
    liveUrl: null,
  },
  {
    slug: "demo-freight-invoice-automation",
    demo: true,
    name: "AI invoice processing for freight",
    h1: "Demo project: AI invoice processing for a freight forwarder",
    title: "Demo: AI Invoice Processing for Freight | CodXQ",
    description:
      "A demonstration project showing AI document processing for carrier invoices, matched against jobs, with human review for uncertain results.",
    clientType: "Freight forwarder",
    industry: "logistics",
    country: null,
    services: ["ai-automation", "api-integration"],
    cover: "ai",
    summary: "Carrier invoices read by AI, matched to jobs and rates, with uncertain results sent to a person.",
    client:
      "An illustrative freight forwarder receiving carrier and supplier invoices every day in many different formats.",
    challenge:
      "The accounts team typed each invoice into the system and checked it against the job by hand. Discrepancies such as unexpected surcharges were often found only after payment.",
    discovery: [
      "Invoices came from dozens of carriers, each with its own layout",
      "Most fields could be checked against job records already in the system",
      "Unexpected surcharges were the main cause of overpayment",
      "The team wanted to approve exceptions, not every invoice",
    ],
    solution: {
      intro: "An extraction and matching workflow that reads invoices, checks them against jobs and sends only the exceptions to people.",
      modules: [
        { name: "Document intake", text: "Invoices collected from a shared inbox and manual upload." },
        { name: "Field extraction", text: "Supplier, amounts, charges and references, each with a confidence score." },
        { name: "Job matching", text: "Each invoice checked against the job, agreed rates and purchase order." },
        { name: "Exception review", text: "A queue for mismatches and low-confidence results." },
        { name: "Accounting sync", text: "Approved invoices posted to the accounting system with an audit trail." },
      ],
    },
    features: [
      "Confidence thresholds set by the client",
      "Audit trail of every change",
      "Processing in the client's chosen cloud region",
      "Accuracy measured on a real document sample before rollout",
    ],
    technologies: ["Python", "Large language model APIs", "OCR", "PostgreSQL", "Node.js"],
    results: [],
    quote: null,
    liveUrl: null,
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const realCaseStudies = caseStudies.filter((c) => !c.demo);
