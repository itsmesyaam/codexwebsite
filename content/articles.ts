import type { RegulationId } from "@/content/regulations";
import type { FAQ } from "@/content/types";

export const categories = [
  { slug: "custom-software-decisions", name: "Custom software decisions", description: "Frameworks, trade-offs, and economics of building vs buying business software." },
  { slug: "business-process-growth", name: "Business process and growth", description: "Operational automation, inventory control, and replacing spreadsheet sprawl." },
  { slug: "gcc-tech-compliance", name: "GCC tech and compliance", description: "ZATCA Fatoora, UAE e-invoicing, and regional data protection regulations." },
  { slug: "healthcare-digital", name: "Healthcare digital", description: "Hospital workflows, ABDM, NPHIES, and health information exchanges." },
  { slug: "working-with-indian-partner", name: "Working with an Indian development partner", description: "Time zone alignment, IP ownership, NDAs, and remote engineering collaboration." },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "note"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; columns: string[]; rows: string[][] };

export type Article = {
  slug: string;
  title: string; // H1
  metaTitle: string;
  description: string;
  category: CategorySlug;
  date: string; // ISO
  updated?: string; // compliance posts show "Last updated"
  draft?: boolean; // drafts only show in dev mode
  author: { name: string | null; role: string | null }; // TODO: Named author once assigned
  sources?: { title: string; url: string }[];
  body: Block[];
  faqs?: FAQ[];
  regulationIds?: RegulationId[]; // rendered as official sources
  service: { label: string; href: string }; // every post links to one service or product page
  leadMagnet?: { label: string; href: string };
  cta: { label: string; href: string };
};

const defaultCta = { label: "Book a free process review", href: "/contact/" };

export const articles: Article[] = [
  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Custom software vs off-the-shelf: a decision guide",
    metaTitle: "Custom Software vs Off-the-Shelf: A Decision Guide | CodXQ",
    description:
      "When to buy software and when to build it, with a 10-question scorecard for growing businesses in India, the GCC and Europe.",
    category: "custom-software-decisions",
    date: "2026-11-10",
    draft: true, // Seeded draft per playbook #1
    author: { name: null, role: null },
    sources: [
      { title: "Gartner IT Key Metrics Research", url: "https://www.gartner.com" },
    ],
    body: [
      { type: "p", text: "Most businesses should buy most of their software. Email, payroll, basic accounting and video calls work the same way in almost every company, and mature products do them well and cheaply. Custom software earns its cost in a narrower place: the processes that make your business different, or the ones no product handles properly." },
      { type: "h2", text: "The simple rule" },
      { type: "p", text: "Buy software for what every company does the same way. Build software for what makes your company different. Most mid-size businesses end up with both: packaged tools for standard work, and custom software that connects them and handles the rest." },
      { type: "h2", text: "How the two compare" },
      {
        type: "table",
        columns: ["", "Off-the-shelf software", "Custom software"],
        rows: [
          ["Fit", "You adapt your process to the product", "The product is built to your process"],
          ["Cost profile", "Lower upfront, recurring per-user fees", "Higher upfront, no per-seat licences"],
          ["Ownership", "Vendor owns the code and roadmap", "You own the code"],
          ["Integrations", "Limited to what the vendor supports", "Built for your existing systems"],
        ],
      },
      { type: "h2", text: "Score your situation" },
      { type: "p", text: "Answer yes or no. The more yes answers to questions 1 to 9, the stronger the case for custom software." },
      {
        type: "ol",
        items: [
          "Do you keep critical data in spreadsheets next to a system you already pay for?",
          "Does your team use workarounds because the software doesn't match how you work?",
          "Are per-user licence fees growing faster than the value you get?",
          "Do you need integrations your current vendor doesn't support?",
          "Is the process part of how you win customers, through pricing, speed or service?",
          "Do you need Arabic, VAT, GST or e-invoicing support that products handle poorly?",
          "Must your data stay in a specific country?",
          "Have you already tried two or more products that didn't fit?",
          "Will this process still matter to your business in five years?",
          "Can someone in your business own the project and make decisions quickly?",
        ],
      },
      { type: "p", text: "Question 10 measures readiness rather than need. Custom software without an engaged owner on your side usually goes wrong, however good the developers are." },
      { type: "h2", text: "When not to build" },
      {
        type: "ul",
        items: [
          "The process is standard and a product already does it well",
          "You need it next month and can't wait for a staged release",
          "Nobody on your team has time to answer questions during discovery",
          "You haven't yet agreed internally how the process should work",
        ],
      },
      { type: "h2", text: "The middle path" },
      { type: "p", text: "You rarely have to choose all or nothing. A common pattern is to keep packaged accounting or CRM software and build a custom layer for operations, connected through APIs. You get the reliability of a mature product where it fits, and software built for you where it doesn't." },
    ],
    service: { label: "Custom software development", href: "/custom-software-development/" },
    leadMagnet: { label: "Download the Build vs Buy Scorecard", href: "/resources/build-vs-buy-framework/" },
    cta: defaultCta,
  },
  {
    slug: "uae-e-invoicing-2027-erp-checklist",
    title: "UAE e-invoicing 2027: what your ERP must do before go-live",
    metaTitle: "UAE E-Invoicing 2027: ERP Readiness Checklist | CodXQ",
    description:
      "What changes with UAE e-invoicing, who must comply first, and what your ERP or billing system must do before it connects to an accredited service provider.",
    category: "gcc-tech-compliance",
    date: "2026-11-10",
    updated: "2026-11-10",
    draft: true, // Seeded draft per playbook #10
    author: { name: null, role: null },
    regulationIds: ["uae-einvoicing"],
    sources: [
      { title: "UAE Ministry of Finance E-Invoicing Portal", url: "https://mof.gov.ae" },
      { title: "Federal Tax Authority E-Invoicing Technical Guidance", url: "https://tax.gov.ae" },
    ],
    body: [
      { type: "p", text: "The UAE is moving business invoices from PDFs and paper to structured electronic data. For finance teams it's a tax change. For whoever runs your ERP or billing system, it's a software project with a deadline. This guide covers the software side." },
      { type: "h2", text: "What is UAE e-invoicing?" },
      { type: "p", text: "Under the new system, invoices are exchanged as structured data in the Peppol-based PINT AE format instead of as PDFs. Each business works through a Ministry-accredited service provider, which validates and delivers invoices and passes the required tax data to the authorities." },
      { type: "h2", text: "UAE e-invoicing timeline" },
      {
        type: "ul",
        items: [
          "1 July 2026: voluntary e-invoicing opened.",
          "January 2027: mandatory for businesses with turnover above AED 50 million.",
          "Later phases: smaller businesses follow on dates set by the Ministry of Finance.",
        ],
      },
      { type: "note", text: "Dates reflect public guidance at the time of writing. Check the Ministry of Finance's latest announcements before planning around them." },
      { type: "h2", text: "Which businesses must comply first?" },
      { type: "p", text: "Businesses with annual turnover above AED 50 million come first. The initial phases cover business-to-business and business-to-government invoices. If you're below the threshold, the voluntary period is a low-pressure window to get your data and processes ready." },
      { type: "h2", text: "What your ERP or billing system must do" },
      { type: "h3", text: "Produce complete, structured invoice data" },
      { type: "p", text: "Invoices must be generated as structured data, not assembled in a PDF template. Fields that are optional or free text in your system today may become mandatory." },
      { type: "h3", text: "Hold clean customer master data" },
      { type: "p", text: "Buyer names, tax registration numbers and addresses need to be accurate and consistent. This is often the largest part of the preparation work." },
      { type: "h3", text: "Apply tax correctly on every line" },
      { type: "p", text: "VAT rates, exemptions and zero-rating must be applied per line with the right codes, so invoices pass validation without manual correction." },
      { type: "h3", text: "Handle credit notes and corrections properly" },
      { type: "p", text: "Returns, discounts and cancellations should follow a defined flow that issues credit notes, rather than editing or deleting invoices that were already sent." },
      { type: "h3", text: "Track status and errors" },
      { type: "p", text: "Your system needs to receive the provider's response for each invoice, show whether it was accepted or rejected, and route rejections to someone who can fix them." },
      { type: "h3", text: "Keep an audit trail" },
      { type: "p", text: "Invoices and their status history should be retrievable for your full retention period, with a record of who changed what and when." },
      { type: "h2", text: "How to connect your ERP to an accredited service provider" },
      {
        type: "ol",
        items: [
          "Choose an accredited service provider and confirm its integration options: API, file exchange or a connector for your ERP.",
          "Map your invoice fields to the PINT AE data model and list the gaps.",
          "Clean customer and product master data.",
          "Build or configure the integration, including status updates and error handling.",
          "Test real scenarios: standard, zero-rated and exempt invoices, credit notes and cancellations.",
          "If you can, go live during the voluntary period, before your mandatory date.",
        ],
      },
      { type: "h2", text: "Common mistakes to avoid" },
      {
        type: "ul",
        items: [
          "Treating it as a finance-only task and involving IT late",
          "Leaving master-data clean-up until testing",
          "Assuming your ERP vendor's connector covers your customisations",
          "Testing only simple invoices",
          "Not deciding who handles rejected invoices",
        ],
      },
    ],
    faqs: [
      {
        q: "Is CodXQ an accredited service provider?",
        a: "No. CodXQ connects your ERP or billing system to the accredited service provider you choose and prepares your data for it. Invoices are exchanged through that provider.",
      },
      {
        q: "We're below AED 50 million. Do we need to act now?",
        a: "Not urgently, but later phases will follow. Using the voluntary period to clean master data and test an integration spreads the work out and avoids a rush once your date is confirmed.",
      },
      {
        q: "Can we keep our current ERP?",
        a: "In most cases, yes. The work is usually an integration plus data and process changes, not a new ERP. Replacement only makes sense if your current system can't reliably produce the required data.",
      },
    ],
    service: { label: "API integration services", href: "/services/api-integration/" },
    leadMagnet: { label: "Get the UAE E-Invoicing Checklist", href: "/resources/uae-e-invoicing-checklist/" },
    cta: defaultCta,
  },
  {
    slug: "signs-your-business-has-outgrown-excel",
    title: "9 signs your business has outgrown Excel",
    metaTitle: "9 Signs Your Business Has Outgrown Excel | CodXQ",
    description:
      "Spreadsheets are a great start and a risky foundation. Nine signs it's time to move a critical process into proper software, and how to do it safely.",
    category: "business-process-growth",
    date: "2026-11-10",
    author: { name: null, role: null },
    body: [
      { type: "p", text: "Excel is where most good processes start. It's flexible, everyone knows it, and it costs nothing extra. The trouble begins when a spreadsheet quietly becomes the system the business runs on. These are the signs that's happened." },
      { type: "h2", text: "1. Several people edit the same file and overwrite each other" },
      { type: "p", text: "Shared files help, but they don't stop two people changing the same row, or someone sorting one column and scrambling the data." },
      { type: "h2", text: "2. Nobody is sure which version is current" },
      { type: "p", text: "Files named final, final-2 and final-use-this are a sign that the spreadsheet has become a coordination tool it was never designed to be." },
      { type: "h2", text: "3. Formulas break when someone adds a row" },
      { type: "p", text: "Critical calculations depend on ranges and references that silently fail. Errors are found late, if at all." },
      { type: "h2", text: "4. Month-end reconciliation takes days" },
      { type: "p", text: "If stock, sales and accounts live in different files, matching them becomes a recurring project." },
      { type: "h2", text: "5. You can't see who changed a number, or why" },
      { type: "p", text: "Without an audit trail, a wrong price or credit limit can't be traced back to a person or a decision." },
      { type: "h2", text: "6. Reports are rebuilt by hand every week" },
      { type: "p", text: "Managers and customers wait for someone to copy, filter and format data that software could produce automatically." },
      { type: "h2", text: "7. Data is re-typed into other systems" },
      { type: "p", text: "Every re-keyed invoice or order is a chance for an error and a cost in staff time." },
      { type: "h2", text: "8. It's too big or slow to use on a phone" },
      { type: "p", text: "Field staff and managers away from their desks can't work with a heavy file on a phone screen." },
      { type: "h2", text: "9. One person understands how it all works" },
      { type: "p", text: "If that person is on leave or leaves the company, the process stops." },
      { type: "h2", text: "What to do next" },
      { type: "p", text: "Not every spreadsheet should become software. Start with the one that causes the most errors or delays. Map the process it supports, then move that process into a simple multi-user application with validation, permissions and an audit trail. Keep an export so people can still analyse data in Excel. That part of Excel was never the problem." },
    ],
    service: { label: "Legacy software modernization", href: "/services/legacy-modernization/" },
    leadMagnet: { label: "Download ERP Readiness Checklist", href: "/resources/erp-readiness-checklist/" },
    cta: defaultCta,
  },
  {
    slug: "how-to-write-a-software-brief",
    title: "How to write a software brief vendors can quote accurately",
    metaTitle: "How to Write a Software Brief Vendors Can Quote | CodXQ",
    description:
      "What to put in a two-page software brief so vendors understand the same project, and how to compare the quotes you get back.",
    category: "working-with-indian-partner",
    date: "2026-11-10",
    author: { name: null, role: null },
    body: [
      { type: "p", text: "Vague briefs get vague quotes, and big price differences between vendors usually mean they understood different projects. A good brief fits on two pages and describes the problem, the people and the constraints. It doesn't need a long feature list." },
      { type: "h2", text: "What to include" },
      { type: "h3", text: "The problem in one paragraph" },
      { type: "p", text: "What isn't working today, and what it costs you in time, money, errors or missed opportunities." },
      { type: "h3", text: "Who will use it" },
      { type: "p", text: "List each type of user, roughly how many there are, and what each needs to do. Include customers or partners if they'll use it too." },
      { type: "h3", text: "How the process works today" },
      { type: "p", text: "Describe the steps from start to finish, including the spreadsheets, emails and phone calls in between. A rough diagram helps more than a polished one." },
      { type: "h3", text: "What success looks like" },
      { type: "p", text: "Two or three measurable outcomes, such as invoices sent the same day, or no re-typing between systems." },
      { type: "h3", text: "Must-haves and nice-to-haves" },
      { type: "p", text: "Separate the features you can't launch without from the ones that can wait. This is where most of the price difference between quotes comes from." },
      { type: "h3", text: "Systems it must connect to" },
      { type: "p", text: "Name your accounting, ERP, CRM, payment and messaging tools, and say whether they must stay." },
      { type: "h3", text: "Constraints" },
      { type: "p", text: "Languages, devices, offline use, data-residency rules, regulatory deadlines and security requirements." },
      { type: "h3", text: "Budget range and timing" },
      { type: "p", text: "A range lets vendors propose the right scope instead of guessing. Say when you need a first release, not just the finished system." },
      { type: "h2", text: "What to leave out" },
      {
        type: "ul",
        items: [
          "Technology choices, unless you have a real constraint",
          "Screen-by-screen designs, since discovery and prototyping are better at this",
          "Every feature you can imagine",
        ],
      },
      { type: "h2", text: "How to compare the quotes" },
      {
        type: "ul",
        items: [
          "Check that each vendor restated your problem correctly",
          "Ask what's excluded, not just what's included",
          "Compare how each vendor plans discovery, not only the totals",
          "Ask who owns the code and data at the end",
          "Ask what happens after launch, and what it costs",
        ],
      },
    ],
    service: { label: "Custom software development", href: "/custom-software-development/" },
    leadMagnet: { label: "Download 2-Page Brief Template", href: "/resources/software-brief-template/" },
    cta: defaultCta,
  },
  {
    slug: "nabidh-vs-malaffi-vs-riayati",
    title: "NABIDH vs Malaffi vs Riayati: which applies to your facility?",
    metaTitle: "NABIDH vs Malaffi vs Riayati: Which Applies to You? | CodXQ",
    description:
      "The UAE's three health information exchanges explained: which one your facility connects to, what that means for your software, and questions to ask vendors.",
    category: "healthcare-digital",
    date: "2026-11-10",
    updated: "2026-11-10",
    author: { name: null, role: null },
    regulationIds: ["uae-health-data"],
    sources: [
      { title: "NABIDH Official Portal (Dubai Health Authority)", url: "https://nabidh.ae" },
      { title: "Malaffi Official Portal (Department of Health Abu Dhabi)", url: "https://malaffi.ae" },
      { title: "Riayati Platform (MOHAP UAE)", url: "https://mohap.gov.ae" },
    ],
    body: [
      { type: "p", text: "The UAE has three health information exchanges. Which one your facility connects to depends on who issued your licence, not on where your patients live or which software you use." },
      { type: "h2", text: "The short answer" },
      {
        type: "table",
        columns: ["Licensing authority", "Health information exchange", "Note"],
        rows: [
          ["Dubai Health Authority (DHA)", "NABIDH", "Connecting is a condition of holding a DHA licence"],
          ["Department of Health – Abu Dhabi (DoH)", "Malaffi", "Abu Dhabi's health information exchange"],
          ["Ministry of Health and Prevention (MOHAP)", "Riayati", "For facilities licensed by MOHAP"],
        ],
      },
      { type: "note", text: "Check your licence, not your address. A facility's licensing authority decides its exchange." },
      { type: "h2", text: "What connecting means for your software" },
      { type: "p", text: "Your hospital or clinic system must send the required clinical data to the exchange in the agreed format, and may retrieve records for patients you treat. In practice that means reliable patient identity matching, structured clinical data rather than free text, consent and access controls, and an interface that has been tested and onboarded with the exchange." },
      { type: "h2", text: "Health data must stay in the UAE" },
      { type: "p", text: "Health information tied to UAE health services can't be stored or processed outside the country without health authority approval. That affects where your hospital system, its backups and any connected apps are hosted." },
      { type: "h2", text: "Groups with facilities under different authorities" },
      { type: "p", text: "A group with facilities licensed by different authorities may need to connect to more than one exchange. Design the integration layer so each facility's data goes to the right exchange from the start, rather than building separate integrations later." },
      { type: "h2", text: "Questions to ask your software vendor" },
      {
        type: "ul",
        items: [
          "Which exchanges is your system connected to today, and since when?",
          "Can you show the onboarding or conformance status in writing?",
          "Where is our data hosted, including backups?",
          "How are patient identity and consent handled?",
          "Who maintains the interface when the exchange changes its requirements?",
        ],
      },
    ],
    service: { label: "Custom healthcare software", href: "/industries/healthcare/" },
    leadMagnet: { label: "Healthcare Software Compliance Guide", href: "/resources/healthcare-compliance-guide/" },
    cta: { label: "Book a hospital system demo", href: "/products/hospital-management-system/demo/" },
  },
  {
    slug: "ai-document-processing-where-it-works",
    title: "AI document processing: where it works and where it doesn't",
    metaTitle: "AI Document Processing: Where It Works and Where It Doesn't | CodXQ",
    description:
      "AI can read invoices and forms well enough to save real time, and also make confident mistakes. How to design the process so it helps.",
    category: "custom-software-decisions",
    date: "2026-11-10",
    author: { name: null, role: null },
    sources: [
      { title: "ACM Transactions on Intelligent Systems", url: "https://dl.acm.org" },
    ],
    body: [
      { type: "p", text: "AI can read invoices, forms and purchase orders well enough to save real time. It can also produce confident mistakes. The difference lies in how the process around it is designed." },
      { type: "h2", text: "Where it works well" },
      {
        type: "ul",
        items: [
          "High volumes of similar documents, such as supplier invoices or delivery notes",
          "Documents with a predictable set of fields, even when layouts vary",
          "Processes where a person already checks the result",
          "Data that can be checked against another source, such as a purchase order",
        ],
      },
      { type: "h2", text: "Where it struggles" },
      {
        type: "ul",
        items: [
          "Handwriting and poor-quality scans",
          "Rare document types with few examples",
          "Decisions that need context the document doesn't contain",
          "Cases where a single error is costly and nobody reviews the output",
        ],
      },
      { type: "h2", text: "Design the process, not just the model" },
      { type: "p", text: "Reliable document automation has four parts. Extract the fields. Validate them against business rules and other systems. Send anything uncertain to a person. Use their corrections to improve the setup over time. Skip validation or review, and errors flow straight into your accounts." },
      { type: "h2", text: "Measure before you scale" },
      { type: "p", text: "Collect a sample of real documents, agree what counts as accurate for each field, and measure on that sample before building the full workflow. Set confidence thresholds so uncertain results always reach a person. Without a baseline, you can't tell whether the automation is helping." },
      { type: "h2", text: "Privacy and hosting" },
      { type: "p", text: "Documents often contain personal data. Before choosing a model, decide where processing happens, which providers may see the data, and whether they keep it or train on it. In regulated sectors such as healthcare and finance, data-residency rules may make that choice for you." },
    ],
    service: { label: "AI and business automation", href: "/services/ai-automation/" },
    leadMagnet: { label: "Download ERP Readiness Checklist", href: "/resources/erp-readiness-checklist/" },
    cta: defaultCta,
  },
];

export const getArticles = (includeDrafts = false) =>
  articles
    .filter((a) => includeDrafts || !a.draft)
    .sort((a, b) => b.date.localeCompare(a.date));

export const getArticle = (slug: string, includeDrafts = false) => {
  const art = articles.find((a) => a.slug === slug);
  if (!art) return undefined;
  if (art.draft && !includeDrafts) return undefined;
  return art;
};

export const getArticlesByCategory = (categorySlug: CategorySlug, includeDrafts = false) =>
  getArticles(includeDrafts).filter((a) => a.category === categorySlug);

export function readingTime(a: Article) {
  const words = a.body
    .map((b) => {
      switch (b.type) {
        case "ul":
        case "ol":
          return b.items.join(" ");
        case "table":
          return [...b.columns, ...b.rows.flat()].join(" ");
        default:
          return b.text;
      }
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function relatedArticles(a: Article, n = 3, includeDrafts = false) {
  const others = getArticles(includeDrafts).filter((x) => x.slug !== a.slug);
  return [
    ...others.filter((x) => x.category === a.category),
    ...others.filter((x) => x.category !== a.category),
  ].slice(0, n);
}
