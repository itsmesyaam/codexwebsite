import type { Comparison, FAQ, Feature } from "@/content/types";

/* ---------- Process: Discover → Define → Design → Develop → Deliver → Evolve ---------- */
export type Step = {
  key: string;
  name: string;
  title: string; // H3 text
  text: string;
  outputs: string[];
  duration: string | null; // e.g. "1–3 weeks". Confirm before adding.
};

export const approach: Step[] = [
  {
    key: "discover",
    name: "Discover",
    title: "Discover how your business works",
    text: "We interview your team, map one or more workflows and review your data to find where time and money leak.",
    outputs: ["Process map", "Problem list", "Success metrics"],
    duration: null,
  },
  {
    key: "define",
    name: "Define",
    title: "Define what to build first",
    text: "We agree goals, scope and priorities in writing, so everyone knows what success looks like before money is spent on code.",
    outputs: ["Written scope", "Prioritised roadmap", "Estimate you can plan around"],
    duration: null,
  },
  {
    key: "design",
    name: "Design",
    title: "Design the solution",
    text: "We design the user experience and architecture, then give you a clickable prototype to test with the people who'll use it.",
    outputs: ["Clickable prototype", "Architecture plan"],
    duration: null,
  },
  {
    key: "develop",
    name: "Develop",
    title: "Develop in two-week sprints",
    text: "We build in two-week sprints and demo working software at the end of each one. You see progress and can change priorities as you learn.",
    outputs: ["Working software every sprint", "Source code in a repository you can access"],
    duration: "Two-week sprints",
  },
  {
    key: "deliver",
    name: "Deliver",
    title: "Deliver and go live",
    text: "We migrate data, train your team and support go-live, releasing in stages so people start using the software early.",
    outputs: ["Live system", "Training", "Documentation"],
    duration: null,
  },
  {
    key: "evolve",
    name: "Evolve",
    title: "Evolve after launch",
    text: "We support, measure and improve the system, and plan the next phase with you.",
    outputs: ["Monthly report", "Next-phase roadmap"],
    duration: null,
  },
];

export const delivery = {
  sprintLength: "two weeks",
  firstRelease: "8–16 weeks", // from the playbook FAQ copy. Confirm against your real projects.
};

/* ---------- Engagement models ---------- */
export const engagementModels: (Feature & { bestFor: string })[] = [
  {
    name: "Fixed scope",
    text: "A fixed price for an agreed scope, set after discovery.",
    bestFor: "Requirements that are clear after discovery",
  },
  {
    name: "Dedicated team",
    text: "Your own CodXQ developers, QA and project manager, billed monthly.",
    bestFor: "Ongoing products and long roadmaps",
  },
  {
    name: "Time and materials",
    text: "Flexible scope, billed for the time used.",
    bestFor: "Products that evolve as you learn",
  },
  {
    name: "Discovery only",
    text: "A paid scope-and-prototype package you can take to any vendor.",
    bestFor: "Big decisions you want to de-risk first",
  },
];

/* ---------- Regions (homepage + service hub) ---------- */
export type Region = {
  key: "india" | "gcc" | "europe";
  title: string; // H3
  points: string[];
  links: { label: string; href: string }[];
};

export const regions: Region[] = [
  {
    key: "india",
    title: "India",
    points: [
      "GST invoicing and e-invoicing",
      "UPI and Razorpay payments",
      "Data handling designed for the DPDP Act",
    ],
    links: [{ label: "India", href: "/custom-software-development/india/" }],
  },
  {
    key: "gcc",
    title: "UAE, Saudi Arabia and the GCC",
    points: [
      "Arabic and right-to-left interfaces",
      "VAT, plus UAE and Saudi e-invoicing integrations",
      "Hosting in UAE or Saudi cloud regions",
      "Kochi is 1.5 hours ahead of UAE time, so our working days overlap almost completely",
    ],
    links: [
      { label: "UAE", href: "/custom-software-development/uae/" },
      { label: "Saudi Arabia", href: "/custom-software-development/saudi-arabia/" },
    ],
  },
  {
    key: "europe",
    title: "Europe",
    points: [
      "GDPR-aligned processes and Data Processing Agreements",
      "Data hosted in EU regions",
      "Kochi is 3.5 hours ahead of Central European time in summer and 4.5 in winter, so our afternoons cover your mornings",
    ],
    links: [
      { label: "United Kingdom", href: "/custom-software-development/united-kingdom/" },
      { label: "Germany", href: "/custom-software-development/germany/" },
    ],
  },
];

/* ---------- Technology ecosystem: edit to match what your team actually ships ---------- */
export const techStack: { group: string; items: string[] }[] = [
  { group: "Frontend and mobile", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "React Native"] },
  { group: "Backend", items: ["Node.js", "Python", "Django", ".NET"] },
  { group: "Data", items: ["PostgreSQL", "Supabase"] },
  { group: "Cloud and edge", items: ["AWS", "Azure", "Google Cloud", "Cloudflare"] },
  { group: "AI", items: ["Large language models", "Document AI and OCR", "Vector search"] },
];

/* ---------- Positioning ---------- */
export const differentiators: Feature[] = [
  { name: "Discovery first", text: "We map your processes, people and numbers before writing code." },
  { name: "You own the code", text: "Source code, documentation and deployment access are yours." },
  { name: "Region-ready", text: "Arabic and RTL, GST and VAT, e-invoicing and in-country hosting." },
  { name: "We stay after launch", text: "Support, measurement and a roadmap for the next phase." },
];

export const processReview = {
  title: "Free 45-minute process review",
  text: "In 45 minutes, we map one workflow with you and show where software would save time or money, whether or not you work with us.",
  cta: "Book a free process review",
};

/* ---------- About ---------- */
export const mission =
  "To build software that fits how each business actually works, and to leave clients with systems they own, understand and can keep improving.";

export const vision =
  "To be the partner growing businesses in India, the Gulf and Europe trust with the software their operations depend on.";

export const values: Feature[] = [
  { name: "Curiosity first", text: "We ask why before we ask what. Understanding the business is the job, not a preliminary." },
  { name: "Plain honesty", text: "We say what we don't know, what something will really cost, and when you shouldn't build at all." },
  { name: "Ownership", text: "Clients own their code and data. We own the quality of our work." },
  { name: "Craft", text: "Simple, tested, documented software, because someone has to maintain it." },
  { name: "Long-term thinking", text: "We design for the second year of use, not just launch day." },
];

export const engineeringPrinciples: Feature[] = [
  { name: "Understand before building", text: "Every project starts with discovery, and every feature traces back to a business goal." },
  { name: "Small, frequent releases", text: "Working software every two weeks beats a big reveal at the end." },
  { name: "Privacy and security by design", text: "Access control, audit logs and data minimisation are planned from day one." },
  { name: "Proven tools over fashionable ones", text: "We choose technology your team can hire for and maintain." },
  { name: "Documented and handed over", text: "Architecture notes, runbooks and code live in your repository." },
];

/* ---------- Build vs buy ---------- */
export const buildVsBuy: Comparison & { rule: string } = {
  columns: ["", "Off-the-shelf software", "Custom software"],
  rows: [
    ["Fit", "You adapt your process to the product", "The product is built to your process"],
    ["Cost profile", "Lower upfront, recurring per-user fees", "Higher upfront, no per-seat licences"],
    ["Ownership", "Vendor owns the code and roadmap", "You own the code"],
    ["Integrations", "Limited to what the vendor supports", "Built for your existing systems"],
    ["Best for", "Standard needs such as email and basic accounting", "Processes that give you an edge or don't fit any product"],
  ],
  rule: "Buy software for what every company does the same way. Build software for what makes your company different.",
};

/* ---------- Pricing ---------- */
export const costFactors: string[] = [
  "User roles and permissions",
  "Number of workflows",
  "Integrations with other systems",
  "Web, mobile or both",
  "Languages: Arabic and right-to-left layouts add design and QA effort",
  "Hosting and data-residency requirements",
  "Reporting depth",
  "Support level after launch",
];

export type PricingTier = {
  name: string; // H3 on /pricing/
  examples: string;
  range: string | null; // publish real ranges, e.g. "₹X–Y / AED X–Y". Hidden while null.
  timeline: string | null;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Internal tools and single workflows",
    examples: "An approval workflow, a job tracker, a stock tool for one team.",
    range: null,
    timeline: null,
  },
  {
    name: "Customer portals and mobile apps",
    examples: "A B2B ordering portal, a field-service app, a customer app with payments.",
    range: null,
    timeline: null,
  },
  {
    name: "Multi-module ERP and CRM systems",
    examples: "Inventory, sales, purchasing and finance across several locations.",
    range: null,
    timeline: null,
  },
];

export const includedInEveryProject: string[] = [
  "Discovery and a written scope before the full build",
  "A clickable prototype",
  "Working software demonstrated every two weeks",
  "Source code, documentation and deployment access, transferred on completion and final payment",
  "Data migration, training and go-live support",
  "An NDA before discovery, on request",
];

/* ---------- FAQs (each answer 40–60 words, direct answer first) ---------- */
export const homeFaqs: FAQ[] = [
  {
    q: "What does a custom software development company do?",
    a: "A custom software development company designs and builds software for one organisation's specific processes and users, instead of selling a ready-made product. CodXQ starts every project with a discovery phase to understand the business, then designs, builds, launches and supports the software.",
  },
  {
    q: "How much does custom software cost?",
    a: "Cost depends on the number of user roles, workflows, integrations and platforms (web, mobile or both). Small internal tools typically cost far less than multi-module ERP systems. After a free process review we can give you a planning range, and a firm quote follows discovery.",
  },
  {
    q: "How long does it take to build custom software?",
    a: "Most first releases take 8–16 weeks. We release working software in stages, starting with the workflow that matters most, so your team can start using it early while the rest is built in two-week sprints.",
  },
  {
    q: "Do you work with companies outside India?",
    a: "Yes. CodXQ works with clients in India, the GCC (UAE, Saudi Arabia, Qatar, Oman, Kuwait and Bahrain) and Europe. Kochi is 1.5 hours ahead of UAE time, so our working days overlap almost completely with the Gulf, and partly with Europe.",
  },
  {
    q: "Who owns the source code?",
    a: "You do. On completion and final payment, the source code, documentation and deployment access are transferred to you. We can also work in a repository you control from the first day, so you can see the code as it is written.",
  },
  {
    q: "Can you build software in Arabic?",
    a: "Yes. We build bilingual Arabic–English interfaces with full right-to-left layouts, Arabic numerals where needed, and Arabic invoices and reports. Layouts are tested in both languages, because a screen that works in English often breaks when mirrored.",
  },
];

export const serviceHubFaqs: FAQ[] = [
  {
    q: "How is CodXQ different from other software companies in Kochi?",
    a: "We start with your business, not a feature list. Every project begins with discovery: mapping workflows, data and goals, followed by a written scope and prototype before the full build. We design for Indian, GCC and European rules, and we stay after launch to support and improve the software.",
  },
  {
    q: "Do I need to know exactly what I want before contacting you?",
    a: "No. Most clients start with a problem, not a specification. In a free 45-minute process review we map one workflow with you and show where software would save time or money. Discovery then turns that into a written scope, a prototype and an estimate.",
  },
  {
    q: "Can you work with our existing software instead of replacing it?",
    a: "Yes. We often extend or integrate existing systems, such as Tally, Zoho, Odoo or an older in-house application, rather than replacing them. We recommend replacement only when the current system costs more to work around than to rebuild.",
  },
  {
    q: "Who owns the code and the data?",
    a: "You do. Your data stays in systems and accounts you control. On completion and final payment, the source code, documentation and deployment access are transferred to you, and we can work in your own repository from the first day.",
  },
  {
    q: "What happens after launch?",
    a: "We support go-live and then move to an agreed support plan: monitoring, updates, fixes, improvements and a monthly report. Every few months we review results against the goals set in discovery and plan the next phase with you.",
  },
  {
    q: "Can you sign an NDA before discovery?",
    a: "Yes. We're happy to sign your NDA, or provide ours, before any detailed conversation about your business, data or product idea. For European clients we also sign a Data Processing Agreement before handling any personal data.",
  },
];
