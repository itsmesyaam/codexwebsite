export type PricingTier = {
  name: string; // H3 on /pricing/
  tagline: string;
  examples: string;
  range: string | null; // TODO: Add real verified pricing ranges (e.g., "₹X–Y / AED X–Y"). Hidden while null.
  timeline: string | null; // TODO: Add real verified delivery timelines (e.g., "6–10 weeks"). Hidden while null.
  features: string[];
};

export const costFactors: { name: string; description: string }[] = [
  {
    name: "User roles and permissions",
    description: "The complexity of role-based access, approval workflows, and audit requirements across departments.",
  },
  {
    name: "Number of workflows",
    description: "Each distinct business process (e.g. inventory transfers, quotation generation, dispatch management) requires dedicated design and test coverage.",
  },
  {
    name: "Integrations with existing systems",
    description: "Connecting to existing accounting tools (Tally, Zoho, QuickBooks), payment gateways, WhatsApp API, or government e-invoicing platforms.",
  },
  {
    name: "Platform scope (web, mobile, or both)",
    description: "Cross-platform Flutter apps versus native mobile builds versus desktop-first web portals.",
  },
  {
    name: "Languages and right-to-left layout",
    description: "Arabic and English bilingual support requires mirrored UI architecture, typographic adjustments, and dual-language testing.",
  },
  {
    name: "Data residency and cloud infrastructure",
    description: "In-country hosting (UAE, Saudi Arabia, India, or EU) to satisfy local regulatory mandates.",
  },
  {
    name: "Reporting depth and analytical dashboards",
    description: "Standard operational views versus custom multi-dimensional analytics and automated executive digests.",
  },
  {
    name: "Post-launch support coverage",
    description: "Response SLA tier, active uptime monitoring, and ongoing monthly feature evolution.",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Internal tools and single workflows",
    tagline: "Digitise a single core process",
    examples: "An approval workflow, a job tracker, a custom stock tool for one department.",
    range: null, // TODO: Set verified range
    timeline: null, // TODO: Set verified timeline
    features: [
      "Discovery workshop & written scope",
      "Interactive clickable prototype",
      "Role-based authentication & permissions",
      "Single-workflow automation",
      "Export to Excel & existing databases",
      "Source code handover & 30 days warranty",
    ],
  },
  {
    name: "Customer portals and mobile apps",
    tagline: "Connect customers and field teams directly",
    examples: "A B2B ordering portal, a field-service app, a customer app with payments.",
    range: null, // TODO: Set verified range
    timeline: null, // TODO: Set verified timeline
    features: [
      "Everything in single workflows",
      "Web portal & mobile apps (iOS & Android)",
      "Payment gateway & WhatsApp notifications",
      "Offline data capture & sync",
      "Customer account self-service",
      "Staged release in two-week sprints",
    ],
  },
  {
    name: "Multi-module ERP and CRM systems",
    tagline: "Complete operational spine for your business",
    examples: "Inventory, sales, purchasing, and finance across several locations and branches.",
    range: null, // TODO: Set verified range
    timeline: null, // TODO: Set verified timeline
    features: [
      "Everything in customer portals",
      "Multi-warehouse inventory & batch tracking",
      "Sales, quotations, purchase orders & credit limits",
      "GST or VAT e-invoicing integration",
      "Bilingual Arabic/English RTL design",
      "Data migration from legacy spreadsheets/ERP",
    ],
  },
];

export const includedInEveryProject: string[] = [
  "Discovery workshop and a written scope before the full build",
  "A clickable prototype to test with actual users before writing code",
  "Working software demonstrated every two weeks",
  "Complete source code, documentation, and deployment access transferred upon payment",
  "Data migration assistance, staff training, and go-live warranty support",
  "Non-disclosure agreement (NDA) signed prior to discovery discussions",
];

/**
 * Interactive Cost Estimator question config.
 * Hard rule: Calculation coefficients remain null until officially calibrated.
 */
export type EstimatorQuestion = {
  id: string;
  question: string;
  description?: string;
  options: { label: string; value: string; description?: string }[];
};

export const estimatorQuestions: EstimatorQuestion[] = [
  {
    id: "platform",
    question: "What platforms do your users need?",
    description: "Choose the primary touchpoints for your users.",
    options: [
      { label: "Web application only", value: "web", description: "Runs in any browser on desktop and tablet" },
      { label: "Mobile app only (iOS & Android)", value: "mobile", description: "Installable app for phones and field devices" },
      { label: "Web application + Mobile apps", value: "both", description: "Shared back-office web portal with companion mobile apps" },
    ],
  },
  {
    id: "users",
    question: "Who will use the software?",
    options: [
      { label: "Internal staff only", value: "internal", description: "Your own employees and management" },
      { label: "Customers or partners", value: "external", description: "Self-service accounts, ordering, or client portals" },
      { label: "Both internal staff and external clients", value: "both", description: "Multi-role system with distinct views" },
    ],
  },
  {
    id: "workflows",
    question: "How many core workflows are being digitised?",
    options: [
      { label: "1 workflow", value: "1", description: "e.g. Just order intake or approval tracking" },
      { label: "2 to 4 workflows", value: "2-4", description: "e.g. Inventory, purchasing, and sales" },
      { label: "5+ connected modules", value: "5+", description: "Full multi-department ERP/CRM operations" },
    ],
  },
  {
    id: "integrations",
    question: "Does it need to connect to existing software?",
    options: [
      { label: "Standalone system", value: "none", description: "New database, no connections needed" },
      { label: "1–2 standard tools", value: "simple", description: "e.g. Accounting (Tally/Zoho) or WhatsApp" },
      { label: "Multiple complex systems", value: "complex", description: "Payment gateways, government e-invoicing, legacy databases" },
    ],
  },
  {
    id: "languages",
    question: "Do you need bilingual Arabic and English?",
    options: [
      { label: "English only", value: "en", description: "Standard left-to-right interface" },
      { label: "Arabic & English (RTL)", value: "ar-en", description: "Full right-to-left mirrored interface & bilingual reports" },
    ],
  },
  {
    id: "residency",
    question: "Are there specific data hosting rules?",
    options: [
      { label: "Standard cloud hosting", value: "cloud", description: "AWS/GCP/Azure standard regional cloud" },
      { label: "In-country hosting (UAE / KSA / India / EU)", value: "in-country", description: "Data must legally reside inside a specific country" },
      { label: "On-premise servers", value: "on-premise", description: "Hosted within your own physical facilities" },
    ],
  },
  {
    id: "offline",
    question: "Do field workers require offline capability?",
    options: [
      { label: "No, always online", value: "no", description: "Standard reliable connection assumed" },
      { label: "Yes, offline data capture & sync", value: "yes", description: "Vans, warehouses, or job sites with patchy signal" },
    ],
  },
  {
    id: "timeline",
    question: "When do you need the first working release?",
    options: [
      { label: "Within 8–12 weeks", value: "standard", description: "Targeted MVP release for the highest priority workflow" },
      { label: "Flexible timeline", value: "flexible", description: "Thorough discovery with sequenced milestone delivery" },
    ],
  },
];
