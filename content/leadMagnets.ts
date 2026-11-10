export type LeadMagnet = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  format: "Interactive Tool" | "PDF Checklist" | "Template & Scorecard" | "Technical Guide";
  icon: "boxes" | "plug" | "heart" | "compass" | "pen" | "sparkles";
  summary: string;
  whatInside: string[];
  whoFor: string;
  downloadLabel: string;
};

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "software-cost-estimator",
    title: "Software Cost & Timeline Estimator",
    eyebrow: "Interactive Tool",
    description: "Plan your project budget in 8 structured questions based on platforms, roles, workflows, and integrations.",
    format: "Interactive Tool",
    icon: "sparkles",
    summary: "A practical 8-step planning tool that breaks down the variables that drive software cost and timeline, without guessing.",
    whatInside: [
      "Platform cost comparison (Web vs Mobile vs Hybrid)",
      "Role & permission complexity breakdown",
      "Integration impact factors (Accounting, Payments, E-Invoicing)",
      "Bilingual Arabic/RTL overhead considerations",
      "Staged milestone roadmap recommendation",
    ],
    whoFor: "Business owners, CTOs, and operations leaders planning digital initiatives.",
    downloadLabel: "Start the estimator",
  },
  {
    slug: "erp-readiness-checklist",
    title: "25-Point Custom ERP Readiness Checklist",
    eyebrow: "PDF Checklist",
    description: "Determine whether your business is ready for a custom ERP, or whether off-the-shelf software fits better.",
    format: "PDF Checklist",
    icon: "boxes",
    summary: "Evaluate your current data cleanliness, process maturity, and internal leadership readiness before investing in an ERP.",
    whatInside: [
      "Master data audit questions (inventory, suppliers, customers)",
      "Workflow mapping readiness scorecard",
      "Hidden customization cost calculation sheet",
      "Tax & regulatory readiness indicators (GST, VAT, E-Invoicing)",
      "Internal project champion evaluation checklist",
    ],
    whoFor: "Distributors, traders, and manufacturers experiencing spreadsheet sprawl.",
    downloadLabel: "Download the checklist",
  },
  {
    slug: "build-vs-buy-framework",
    title: "Build vs Buy Evaluation Framework & Scorecard",
    eyebrow: "Template & Scorecard",
    description: "A 10-question weighted scoring framework to determine when to build custom software versus buying a SaaS product.",
    format: "Template & Scorecard",
    icon: "compass",
    summary: "Make defensible technology investments by evaluating long-term licensing fees against strategic differentiation.",
    whatInside: [
      "10-question evaluation scorecard with weighting guidelines",
      "5-year Total Cost of Ownership (TCO) calculator model",
      "Competitive differentiation audit",
      "Integration lock-in risk assessment",
      "Executive decision summary template",
    ],
    whoFor: "Founders, CEOs, and CIOs facing platform replacement decisions.",
    downloadLabel: "Download the scorecard",
  },
  {
    slug: "uae-e-invoicing-checklist",
    title: "UAE E-Invoicing 2027 ERP Technical Checklist",
    eyebrow: "Technical Guide",
    description: "Detailed checklist of mandatory Peppol PINT AE fields, master data fixes, and accredited service provider integration steps.",
    format: "Technical Guide",
    icon: "plug",
    summary: "The definitive technical guide for IT directors preparing billing systems for mandatory UAE e-invoicing compliance.",
    whatInside: [
      "Complete Peppol PINT AE mandatory invoice schema fields",
      "Customer & vendor TRN validation checklist",
      "Accredited Service Provider (ASP) integration architecture options",
      "Credit note, debit note, and correction workflow guidelines",
      "Audit trail and retention compliance requirements",
    ],
    whoFor: "Finance leaders and IT directors operating in the United Arab Emirates.",
    downloadLabel: "Get the technical checklist",
  },
  {
    slug: "software-brief-template",
    title: "2-Page Software Brief Template & Vendor Scoring Sheet",
    eyebrow: "Template & Scorecard",
    description: "The exact brief template we recommend giving software vendors to eliminate ambiguous quotes and hidden scope.",
    format: "Template & Scorecard",
    icon: "pen",
    summary: "Stop receiving wildly varying quotes. Use this concise two-page structure to describe your problem, users, and constraints.",
    whatInside: [
      "Editable 2-page brief Word/PDF template",
      "User role and workflow specification format",
      "Must-have vs nice-to-have boundary rules",
      "Vendor quote comparison and scoring rubric",
      "Code ownership and IP protection clauses to insist on",
    ],
    whoFor: "Operations managers and business owners preparing an RFP.",
    downloadLabel: "Download the template",
  },
  {
    slug: "healthcare-compliance-guide",
    title: "Healthcare Software Compliance Guide",
    eyebrow: "Technical Guide",
    description: "Regional health IT compliance requirements across ABDM (India), NPHIES (Saudi Arabia), and NABIDH/Malaffi (UAE).",
    format: "Technical Guide",
    icon: "heart",
    summary: "Clear technical requirements for health information exchange integration and sensitive patient data hosting.",
    whatInside: [
      "Ayushman Bharat Digital Mission (ABDM) sandbox milestones",
      "NPHIES insurance claim & pre-authorization data models",
      "NABIDH (Dubai) vs Malaffi (Abu Dhabi) vs Riayati differences",
      "In-country patient health data residency mandates",
      "Role-based access & clinical audit trail standards",
    ],
    whoFor: "Hospital directors, clinic administrators, and health-tech founders.",
    downloadLabel: "Download the compliance guide",
  },
];

const slugAliases: Record<string, string> = {
  "custom-software-cost-estimator": "software-cost-estimator",
  "build-vs-buy-scorecard": "build-vs-buy-framework",
  "uae-e-invoicing-erp-readiness-checklist": "uae-e-invoicing-checklist",
  "zatca-phase-2-integration-checklist": "uae-e-invoicing-checklist",
  "software-procurement-rfp-template": "software-brief-template",
};

export const getLeadMagnet = (slug: string) => {
  const canonical = slugAliases[slug] || slug;
  return leadMagnets.find((l) => l.slug === canonical);
};

export const allLeadMagnetSlugs = [
  ...leadMagnets.map((l) => l.slug),
  ...Object.keys(slugAliases),
];

