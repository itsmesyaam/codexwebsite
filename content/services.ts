import type { Comparison, FAQ, Feature, IconKey } from "@/content/types";

/**
 * The first 7 entries are the playbook's sub-services (the footer lists those).
 * Technology and integration lists must match what your team actually delivers.
 */
export type Service = {
  slug: string;
  name: string;
  icon: IconKey;
  h1: string;
  title: string;
  description: string;
  summary: string;
  intro: string;
  explainer: FAQ; // H2 question + direct 40–60 word answer
  signs: { title: string; items: string[] };
  modules: { title: string; items: Feature[] };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  integrations?: { title: string; text: string; items: string[] };
  comparison?: Comparison & { title: string; intro: string; note: string };
  cost: { title: string; text: string };
  industries: string[]; // related industry slugs
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "erp-crm-development",
    name: "ERP and CRM development",
    icon: "boxes",
    h1: "Custom ERP and CRM development",
    title: "Custom ERP and CRM Development | CodXQ, Kochi",
    description:
      "Custom ERP and CRM software built around your purchase, stock, sales and finance flow. GST, VAT and e-invoicing ready. India, GCC and Europe.",
    summary: "Inventory, sales, purchasing, finance and HR in one system shaped around your process.",
    intro:
      "A custom ERP brings your inventory, sales, purchasing, finance and people into one system that follows your process rather than a vendor's template. We map how work and money move through your business first, then build the modules you need and connect the tools you already use.",
    explainer: {
      q: "What is a custom ERP?",
      a: "A custom ERP (enterprise resource planning) system is software built for one company's operations: stock, purchasing, sales, invoicing, finance and HR in a single database. Unlike a packaged ERP, its screens, approvals and reports follow your workflow, you own the code, and there are no per-user licence fees.",
    },
    signs: {
      title: "Signs you need a custom ERP or CRM",
      items: [
        "Your team keeps the real numbers in spreadsheets next to the system you pay for",
        "Stock, sales and accounts disagree, and month-end means reconciling them by hand",
        "Your packaged ERP needs workarounds for approvals, pricing or credit rules specific to you",
        "Per-user licence costs grow faster than the value you get from the software",
        "You need Arabic invoices, VAT or e-invoicing support your current system handles poorly",
      ],
    },
    modules: {
      title: "ERP and CRM modules we build",
      items: [
        { name: "Inventory and warehouse", text: "Multi-location stock, batch and expiry tracking, transfers, cycle counts and reorder alerts." },
        { name: "Sales and CRM", text: "Leads, quotations, orders, price lists, credit limits and a full customer history in one place." },
        { name: "Purchasing", text: "Requisitions, approvals, purchase orders, goods receipt and supplier performance." },
        { name: "Finance and invoicing", text: "GST or VAT invoicing, receivables, payables and e-invoicing, with clean exports to your accounting system." },
        { name: "HR and payroll", text: "Employee records, attendance, leave and payroll inputs, with role-based access to sensitive data." },
      ],
    },
    benefits: [
      "One version of the stock, sales and finance numbers",
      "Approvals and pricing rules enforced by the system, not by memory",
      "No per-user licence fees as your team grows",
      "Reports built for the decisions you actually make",
    ],
    useCases: [
      "A distributor replacing spreadsheets and an entry-level accounting tool with a multi-warehouse ERP",
      "A service company tracking jobs, technicians and invoices in one system",
      "A manufacturer linking production orders to stock and purchasing",
      "A sales team moving from WhatsApp threads to a shared CRM with follow-up reminders",
    ],
    technologies: ["Next.js", "React", "Node.js", ".NET", "PostgreSQL", "Flutter", "AWS", "Azure"],
    integrations: {
      title: "Integrations with your existing tools",
      text: "Keep the tools that work. We connect your ERP to accounting, payments, messaging and tax systems instead of replacing everything at once.",
      // Confirm each before publishing (playbook: "SAP Business One [confirm]").
      items: ["Tally", "Zoho Books", "QuickBooks", "Odoo", "SAP Business One", "Payment gateways", "WhatsApp Business API", "E-invoicing providers"],
    },
    comparison: {
      title: "Custom ERP vs Odoo, Zoho and SAP Business One",
      intro:
        "Packaged ERPs are a good choice when your processes are standard. A custom ERP pays off when the way you price, approve, stock or deliver is part of your advantage.",
      columns: ["", "Custom ERP", "Packaged ERP"],
      rows: [
        ["Fit", "Built to your process", "You adapt to the product, or pay for customisation"],
        ["Cost profile", "Higher upfront, no per-user licences", "Lower upfront, recurring subscription or licence fees"],
        ["Getting started", "Staged releases after discovery", "Quick for standard modules"],
        ["Roadmap", "You decide what's built next", "The vendor decides what's built next"],
        ["Best for", "Workflows that set you apart", "Standard accounting, HR and inventory"],
      ],
      note: "If a packaged ERP fits, we'll say so, and we can build the integrations and custom modules around it instead.",
    },
    cost: {
      title: "Cost and timeline for a custom ERP",
      text: "Cost depends on the number of modules, user roles, locations, integrations and languages. We release in stages, so the first module is live before the full system is finished. You get a written estimate after discovery.",
    },
    industries: ["trading-distribution", "manufacturing", "construction"],
    faqs: [
      {
        q: "Can you work with Tally, Zoho or Odoo instead of replacing them?",
        a: "Yes. Many businesses keep their accounting system and add a custom layer for operations, such as stock, sales or approvals, that syncs invoices and payments back. We decide during discovery what to keep, what to connect and what to replace, based on cost and risk.",
      },
      {
        q: "Can a custom ERP handle Arabic, VAT and e-invoicing?",
        a: "Yes. We build bilingual Arabic–English interfaces with right-to-left layouts and VAT-compliant invoices, and integrate with ZATCA's Fatoora platform in Saudi Arabia or your chosen accredited service provider in the UAE. In India, invoices follow GST rules and connect to e-invoicing where your turnover requires it.",
      },
      {
        q: "How do you move our existing data?",
        a: "We map your current data during discovery, clean it with your team, and run trial migrations before go-live so you can check balances, stock and customer records. Old and new systems can run side by side for a short period while your team confirms the numbers match.",
      },
    ],
  },
  {
    slug: "web-application-development",
    name: "Web application development",
    icon: "globe",
    h1: "Web application development services",
    title: "Web Application Development Services | CodXQ",
    description:
      "Web apps, customer portals and internal tools built around your workflow, with role-based access, integrations and fast, accessible interfaces.",
    summary: "Customer portals, internal tools and SaaS products that run in any browser.",
    intro:
      "We design and build the web applications your customers, partners and staff use every day: portals, dashboards, booking and ordering systems, and internal tools. Each one starts with how the people using it actually work.",
    explainer: {
      q: "What is a web application?",
      a: "A web application is software that runs in a browser and does real work: users sign in, enter data, approve requests or pay. Unlike a marketing website, it has accounts, permissions and a database behind it, and it works on any device without installing anything.",
    },
    signs: {
      title: "When a web application is the right choice",
      items: [
        "Customers email or phone you for information they could look up themselves",
        "Several teams need the same data from different locations",
        "A process depends on forms, files and follow-up emails",
        "You want to offer a service online that today needs a person",
        "You're turning an internal tool into a product other companies pay for",
      ],
    },
    modules: {
      title: "Web applications we build",
      items: [
        { name: "Customer and partner portals", text: "Orders, invoices, documents, service requests and status updates in a self-service account." },
        { name: "Internal tools and dashboards", text: "Approvals, job tracking, quality checks and live reports for your team." },
        { name: "Booking and ordering systems", text: "Scheduling, availability, payments and reminders." },
        { name: "SaaS products", text: "Multi-tenant applications with subscriptions, roles and usage tracking." },
        { name: "Progressive web apps", text: "Installable, offline-capable web apps for teams in the field." },
      ],
    },
    benefits: [
      "Fewer calls and emails as customers serve themselves",
      "One system across offices, branches and devices",
      "Role-based access, so each user sees only what they should",
      "Updates reach everyone at once, with nothing to install",
    ],
    useCases: [
      "A B2B supplier portal for orders, statements and delivery tracking",
      "An approval workflow that replaces email chains and paper forms",
      "A booking system for a multi-branch service business",
      "A partner portal that shares leads and commissions",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Python", "Django", "PostgreSQL", "Supabase"],
    integrations: {
      title: "Connected to the systems you already use",
      text: "Web applications are most useful when they share data with the rest of your business.",
      items: ["Accounting and ERP", "Payment gateways", "Single sign-on", "Email and WhatsApp notifications", "Document storage"],
    },
    cost: {
      title: "Cost and timeline for a web application",
      text: "The main cost drivers are the number of user roles, workflows and integrations, and how polished the interface needs to be. We release a first version with the most valuable workflow, then add features in two-week sprints.",
    },
    industries: ["retail-ecommerce", "education", "real-estate-facilities"],
    faqs: [
      {
        q: "What's the difference between a website and a web application?",
        a: "A website mainly publishes information. A web application lets users do things: sign in, submit and approve requests, see their own data, pay or collaborate. Many businesses need both, and we can build the application so it sits behind your existing website.",
      },
      {
        q: "Will the web app work on phones?",
        a: "Yes. Every interface we build is responsive and tested on phones, tablets and desktops. If your users need offline access, camera, GPS or push notifications, we'll discuss whether a progressive web app or a native mobile app fits better.",
      },
      {
        q: "Can you take over an existing web application?",
        a: "Usually, yes. We start with a review of the code and infrastructure, document what we find, and fix the riskiest problems first. Then we agree whether to keep improving the current codebase or rebuild parts of it.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile app development",
    icon: "smartphone",
    h1: "Mobile app development services",
    title: "Mobile App Development Services, Android and iOS | CodXQ",
    description:
      "Android and iOS apps for your customers and field teams: offline use, GPS, camera and payments, connected to your business systems.",
    summary: "Android and iOS apps for customers and field teams, connected to your back office.",
    intro:
      "We build Android and iOS apps for two kinds of users: customers who order, book or pay, and staff who work away from a desk. Every app connects to the systems behind it, so what happens in the field shows up in the office straight away.",
    explainer: {
      q: "Native or cross-platform: which do you need?",
      a: "Most business apps work well as one cross-platform codebase, built with Flutter or React Native, that runs on Android and iOS and costs less to maintain. We recommend fully native apps only when you need heavy device features, complex animation or platform-specific performance.",
    },
    signs: {
      title: "Signs your business needs an app",
      items: [
        "Field staff report work through phone calls, WhatsApp photos or paper forms",
        "Customers reorder the same things and would do it faster in an app",
        "You need GPS, camera, barcode scanning or offline use",
        "Your web portal is used mostly on phones and feels clumsy there",
      ],
    },
    modules: {
      title: "Mobile apps we build",
      items: [
        { name: "Field service and inspection apps", text: "Job lists, checklists, photos, signatures and offline sync." },
        { name: "Sales and van sales apps", text: "Orders, stock, collections and route planning on the road." },
        { name: "Customer apps", text: "Ordering, booking, loyalty, payments and push notifications." },
        { name: "Delivery and tracking apps", text: "Proof of delivery, live location and status updates." },
        { name: "Companion apps", text: "Mobile access to your existing portal or SaaS product." },
      ],
    },
    benefits: [
      "Work is recorded once, where it happens",
      "Live visibility of field teams and deliveries",
      "Faster ordering and more repeat business from customers",
      "Apps that keep working offline and sync when the connection returns",
    ],
    useCases: [
      "A van sales app with offline orders and collections",
      "A maintenance app with checklists, photos and customer sign-off",
      "A customer ordering app linked to an existing ERP",
      "A delivery app with proof of delivery and live tracking",
    ],
    technologies: ["Flutter", "React Native", "Kotlin", "Swift", "Node.js", "PostgreSQL"],
    cost: {
      title: "Cost and timeline for a mobile app",
      text: "Cost depends on platforms, offline needs, device features, integrations and app store requirements. A cross-platform app usually costs less than two separate native apps. App store submission and a plan for operating-system updates are part of every project.",
    },
    industries: ["logistics", "trading-distribution", "retail-ecommerce"],
    faqs: [
      {
        q: "Do you publish the app to Google Play and the App Store?",
        a: "Yes. We prepare store listings, handle the review process and publish under your developer accounts, so the apps belong to you. We also plan for future Android and iOS updates, which can require app changes even when your features don't change.",
      },
      {
        q: "Can the app work without internet?",
        a: "Yes. For field teams we design offline-first apps that store work on the device and sync when a connection returns, with clear rules for when two people change the same record. Offline support adds effort, so we scope it to the screens that really need it.",
      },
      {
        q: "Can the app connect to our existing ERP or accounting system?",
        a: "Yes. Most mobile projects involve connecting to an existing back office through its API or a small integration service we build. Orders, stock, payments and job updates then flow both ways without anyone re-typing them.",
      },
    ],
  },
  {
    slug: "api-integration",
    name: "API integration",
    icon: "plug",
    h1: "API integration services",
    title: "API Integration and Backend Engineering Services | CodXQ",
    description:
      "Connect accounting, payments, e-invoicing, WhatsApp and legacy systems. Reliable APIs and backend services with monitoring, retries and audit logs.",
    summary: "Connect accounting, payments, e-invoicing, WhatsApp and legacy systems.",
    intro:
      "When systems don't talk to each other, people re-type data between them. We design APIs and build integrations that move orders, invoices, payments and records automatically, with the monitoring and error handling that keeps them reliable.",
    explainer: {
      q: "What is API integration?",
      a: "API integration connects two or more software systems so they exchange data automatically. An order placed in your web shop, for example, can create an invoice in your accounting software, update stock in your ERP and send the customer a WhatsApp confirmation, with no manual steps in between.",
    },
    signs: {
      title: "Signs you need an integration",
      items: [
        "Staff copy data from one system into another every day",
        "Invoices, stock or customer records differ between systems",
        "A new regulation requires your billing system to connect to a government platform",
        "You can't adopt a new tool because it won't connect to your old one",
      ],
    },
    modules: {
      title: "Integration and backend services",
      items: [
        { name: "Accounting and ERP integrations", text: "Tally, Zoho, QuickBooks, Odoo and SAP Business One, synced in both directions." },
        { name: "E-invoicing integrations", text: "ZATCA's Fatoora platform, UAE accredited service providers and India's GST e-invoicing system." },
        { name: "Payments", text: "Razorpay, UPI and regional payment gateways, with automatic reconciliation." },
        { name: "Messaging", text: "WhatsApp Business API, SMS and email notifications triggered by business events." },
        { name: "Custom APIs and backends", text: "REST and GraphQL APIs, webhooks and background jobs for your own products." },
      ],
    },
    benefits: [
      "No re-typing between systems",
      "Fewer errors in invoices, stock and payments",
      "Every transaction logged and traceable",
      "Freedom to adopt new tools without replacing old ones",
    ],
    useCases: [
      "Connecting a billing system to UAE e-invoicing through an accredited service provider",
      "Syncing a web shop with Tally for invoices and stock",
      "Sending order and payment updates over WhatsApp",
      "Opening an API so partners can place orders directly",
    ],
    technologies: ["Node.js", "Python", ".NET", "REST", "GraphQL", "Webhooks", "PostgreSQL", "Cloudflare Workers"],
    cost: {
      title: "Cost and timeline for an integration",
      text: "Each integration is priced by the number of systems, data volume, the quality of their APIs and how errors must be handled. Well-documented APIs are faster to connect. Older systems without APIs may need a database or file-based connection.",
    },
    industries: ["trading-distribution", "financial-services", "retail-ecommerce"],
    faqs: [
      {
        q: "Is CodXQ an accredited e-invoicing service provider?",
        a: "No. In the UAE, invoices must pass through a Ministry-accredited service provider, and CodXQ is not one. We connect your ERP or billing system to the provider you choose and make sure your invoice data meets the required format. In Saudi Arabia, we integrate your system with ZATCA's Fatoora platform.",
      },
      {
        q: "What happens when an integration fails?",
        a: "We design for it. Failed messages are retried automatically, logged with the reason, and flagged to a named person when they need attention. You get alerts or a dashboard, so a stuck invoice or payment is noticed the same day, not at month-end.",
      },
      {
        q: "Can you integrate with a legacy system that has no API?",
        a: "Often, yes. Depending on the system, we can read from its database, exchange files on a schedule or automate its interface. We explain the risks of each approach during discovery, and recommend modernization where an integration would be too fragile.",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI and automation",
    icon: "sparkles",
    h1: "AI and business automation services",
    title: "AI and Business Automation Services | CodXQ",
    description:
      "Practical AI and automation: document processing, smart routing, assistants and reporting, built into your workflow with human review where it matters.",
    summary: "Document processing, smart routing, assistants and reporting, with people kept in charge.",
    intro:
      "We use AI where it removes real work: reading documents, sorting requests, drafting replies and summarising data. Every automation is built into your existing workflow, measured against a clear goal, and keeps a person in charge of the decisions that matter.",
    explainer: {
      q: "What can AI automate in a business?",
      a: "AI is good at repetitive work with unstructured input: reading invoices and forms, classifying emails and tickets, extracting data from documents, answering routine questions from your own content and summarising reports. It works best alongside rule-based automation and human review, not as a replacement for either.",
    },
    signs: {
      title: "Good candidates for AI and automation",
      items: [
        "Staff type data from PDFs, scans or emails into a system",
        "Requests arrive in one inbox and are sorted by hand",
        "The same questions are answered again and again from internal documents",
        "Reports take days to compile from several sources",
      ],
    },
    modules: {
      title: "AI and automation we build",
      items: [
        { name: "Document processing", text: "Extract data from invoices, purchase orders and forms, with confidence scores and human review." },
        { name: "Smart routing", text: "Sort emails, tickets and requests to the right team with the right priority." },
        { name: "Assistants on your own content", text: "Answer staff or customer questions from your policies, manuals and product data, with sources shown." },
        { name: "Workflow automation", text: "Rule-based approvals, reminders, escalations and data syncs." },
        { name: "Reporting and summaries", text: "Scheduled reports and plain-language summaries of operational data." },
      ],
    },
    benefits: [
      "Less manual data entry in daily work",
      "Faster responses to customers and staff",
      "Consistent handling of routine requests",
      "People spend their time on exceptions and judgement calls",
    ],
    useCases: [
      "Reading supplier invoices into an ERP for approval",
      "Routing customer emails to sales, support or accounts",
      "An internal assistant that answers HR and process questions",
      "A weekly operations summary generated from live data",
    ],
    technologies: ["Python", "Large language model APIs", "OCR and document AI", "Vector search (pgvector)", "Node.js", "Workflow automation"],
    cost: {
      title: "Cost and timeline for AI projects",
      text: "Cost depends on document variety, accuracy targets, data privacy requirements and where the model runs. We usually start with a short proof of concept on your real data, measured against an agreed target, before building the full workflow.",
    },
    industries: ["financial-services", "logistics", "enterprise"],
    faqs: [
      {
        q: "Is our data safe when you use AI models?",
        a: "We choose models and hosting based on your data rules. Sensitive data can be processed by models hosted in your chosen cloud region or on your own servers, and we avoid services that train on customer data. Access is logged, and personal data is minimised before it reaches any model.",
      },
      {
        q: "How accurate is AI document processing?",
        a: "It depends on how consistent your documents are. We measure accuracy on a sample of your real documents during a proof of concept, then set confidence thresholds so uncertain results go to a person for review. You agree the target before we build.",
      },
      {
        q: "Do we need AI, or just automation?",
        a: "Often just automation. Many delays are solved with clear rules, approvals and integrations, which are cheaper and more predictable than AI. We use AI only for steps that rules can't handle, such as reading unstructured documents or understanding free-text requests.",
      },
    ],
  },
  {
    slug: "legacy-modernization",
    name: "Legacy modernization",
    icon: "refresh",
    h1: "Legacy software modernization",
    title: "Legacy Software Modernization and Data Migration | CodXQ",
    description:
      "Move desktop, spreadsheet and outdated systems to secure, cloud-based software in stages, without losing data or stopping the business.",
    summary: "Move old desktop and spreadsheet systems to the cloud in safe stages.",
    intro:
      "Old systems often hold years of business logic that nobody has written down. We document what your current software really does, then move it to modern, cloud-based software in stages, so the business keeps running throughout.",
    explainer: {
      q: "What is legacy software modernization?",
      a: "Legacy modernization means replacing or upgrading software that has become hard to maintain, insecure or limiting, such as old desktop applications, Access databases or critical spreadsheets. It can mean rehosting, refactoring or rebuilding, and it always includes moving the data safely.",
    },
    signs: {
      title: "Signs your software needs modernizing",
      items: [
        "Only one person understands how the system works",
        "It runs on one office computer or an unsupported operating system",
        "It can't be used remotely or on a phone",
        "Adding a simple feature takes months, or isn't possible",
        "Security updates are no longer available",
      ],
    },
    modules: {
      title: "How we modernize",
      items: [
        { name: "Assessment and documentation", text: "We map features, data, users and hidden rules in the current system." },
        { name: "Data migration", text: "Cleaning, mapping and trial migrations with reconciliation reports." },
        { name: "Staged replacement", text: "Module-by-module rollout, with old and new systems side by side where needed." },
        { name: "Cloud rehosting", text: "Moving workloads to managed cloud infrastructure with backups and monitoring." },
        { name: "Spreadsheet to application", text: "Turning critical spreadsheets into multi-user applications with validation and audit trails." },
      ],
    },
    benefits: [
      "Lower risk of data loss and downtime",
      "Access from anywhere, on any device",
      "Security updates and backups by default",
      "A codebase your team can keep improving",
    ],
    useCases: [
      "Moving a desktop billing system to a web application",
      "Replacing a shared spreadsheet with a multi-user stock system",
      "Migrating an Access database to PostgreSQL",
      "Rehosting an on-premise server application in the cloud",
    ],
    technologies: [".NET", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS", "Azure", "Docker"],
    cost: {
      title: "Cost and timeline for modernization",
      text: "Cost depends on the size of the existing system, data quality and how much logic is undocumented. We start with a fixed-price assessment that gives you a migration plan and estimate, whether or not we do the rebuild.",
    },
    industries: ["manufacturing", "enterprise", "financial-services"],
    faqs: [
      {
        q: "Can we keep using the old system during modernization?",
        a: "Yes, in most cases. We replace one module at a time and keep the old system running for the rest, syncing data between them where needed. Your team switches over in planned steps rather than on one risky date.",
      },
      {
        q: "What if nobody has documentation for the current system?",
        a: "That's the usual situation. We document it ourselves by reviewing the code or database, watching how your team uses it and testing edge cases. You keep the written record of features and rules, whatever you decide next.",
      },
      {
        q: "Will our historical data be moved?",
        a: "Yes. We migrate the history you need, clean duplicates and errors with your team, and run trial migrations with reconciliation reports, so you can confirm totals and records match before the final switch.",
      },
    ],
  },
  {
    slug: "maintenance-support",
    name: "Maintenance and support",
    icon: "lifebuoy",
    h1: "Software maintenance and support services",
    title: "Software Maintenance and Support Services | CodXQ",
    description:
      "Monitoring, security updates, bug fixes and planned improvements for your software, with agreed response times and a monthly report.",
    summary: "Monitoring, security updates, fixes and a roadmap for what's next.",
    intro:
      "Software needs looking after once it's live. We monitor, update and improve the systems we build and the ones we take over, with agreed response times, a monthly report and a roadmap for the next phase.",
    explainer: {
      q: "What does software maintenance include?",
      a: "Software maintenance is the work that keeps a live system secure, stable and useful: monitoring, backups, security and dependency updates, bug fixes, performance tuning and small improvements. Good maintenance also includes a plan for larger changes, so the software keeps up with the business.",
    },
    signs: {
      title: "Signs your software needs a support plan",
      items: [
        "Nobody notices errors or downtime until users complain",
        "Libraries and frameworks are years out of date",
        "The original developer has moved on",
        "Small change requests wait for months",
      ],
    },
    modules: {
      title: "What's included",
      items: [
        { name: "Monitoring and alerts", text: "Uptime, errors and performance tracked, with alerts to our team." },
        { name: "Security and updates", text: "Regular dependency, framework and server updates." },
        { name: "Bug fixes", text: "Prioritised by severity, within agreed response times." },
        { name: "Backups and recovery", text: "Automated backups and tested restore procedures." },
        { name: "Improvements and roadmap", text: "A monthly report and a planned backlog of improvements." },
      ],
    },
    benefits: [
      "Problems found before users report them",
      "A predictable monthly cost",
      "Software that stays secure and current",
      "A team that already knows your system",
    ],
    useCases: [
      "Ongoing support for software CodXQ built",
      "Taking over an application from another vendor",
      "Security updates for an ageing web platform",
      "A monthly improvement budget for a growing product",
    ],
    technologies: ["Sentry", "Grafana", "GitHub Actions", "Docker", "AWS", "Cloudflare"],
    cost: {
      title: "How support is priced",
      text: "Support is billed monthly, sized by the number of systems, the response times you need and the hours of improvement work included. Response times and coverage hours are written into the support agreement.",
    },
    industries: ["enterprise", "healthcare", "education"],
    faqs: [
      {
        q: "Can you support software another company built?",
        a: "Yes. We start with a handover review of the code, infrastructure and documentation, fix urgent risks, and then take over day-to-day support. If parts of the system are too fragile to maintain, we'll tell you and recommend options.",
      },
      {
        q: "What are your response times?",
        a: "They're agreed in your support plan and depend on severity, from critical outages to minor requests. Because our team is in Kochi, our working day overlaps almost completely with the Gulf and partly with Europe.",
      },
      {
        q: "Who owns the code while you support it?",
        a: "You do. The code stays in your repository, deployment access stays with you, and documentation is updated as we work. If you move to another provider or bring support in-house, we hand everything over.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud and DevOps",
    icon: "cloud",
    h1: "Cloud infrastructure and DevOps services",
    title: "Cloud Infrastructure and DevOps Services | CodXQ",
    description:
      "Cloud setup, CI/CD, monitoring and cost control on AWS, Azure and Google Cloud, including in-country regions for data residency.",
    summary: "Secure cloud setup, automated deployments and data hosted in the right country.",
    intro:
      "We set up and run the infrastructure your software depends on: cloud accounts, automated deployments, monitoring, backups and cost control. Where your data must stay in a country, we host it in that country's cloud region.",
    explainer: {
      q: "What is DevOps?",
      a: "DevOps is the practice of automating how software is built, tested, deployed and monitored. Every change goes through the same tested pipeline, releases are small and frequent, problems are detected quickly, and infrastructure is defined in code so it can be rebuilt reliably.",
    },
    signs: {
      title: "Signs you need cloud and DevOps help",
      items: [
        "Deployments are manual and stressful",
        "Your cloud bill grows without a clear reason",
        "Customers or regulators require data to stay in a specific country",
        "You don't know whether your backups can actually be restored",
      ],
    },
    modules: {
      title: "Cloud and DevOps services",
      items: [
        { name: "Cloud architecture and setup", text: "AWS, Azure, Google Cloud or Supabase, structured for security and growth." },
        { name: "CI/CD pipelines", text: "Automated testing and deployment for every change." },
        { name: "Data residency", text: "Hosting in India, UAE, Saudi or EU regions where your provider offers them." },
        { name: "Monitoring and incident response", text: "Logs, metrics, alerts and written runbooks." },
        { name: "Cost optimisation", text: "Right-sizing, committed pricing and clean-up of unused resources." },
      ],
    },
    benefits: [
      "Faster, safer releases",
      "Lower, more predictable cloud costs",
      "Data hosted where regulations require",
      "Infrastructure you can rebuild from code",
    ],
    useCases: [
      "Moving a single-server application to managed cloud services",
      "Setting up automated deployments with staging and production",
      "Hosting patient data in a UAE cloud region",
      "Reducing cloud costs after a period of fast growth",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Cloudflare", "Supabase", "Docker", "Terraform", "GitHub Actions"],
    cost: {
      title: "How cloud work is priced",
      text: "Setup projects are priced by scope, and ongoing operations are billed monthly. Cloud provider charges are billed to your own account, so you always see and control them.",
    },
    industries: ["healthcare", "financial-services", "enterprise"],
    faqs: [
      {
        q: "Can you host our data in the UAE or Saudi Arabia?",
        a: "Yes, where your chosen cloud provider has a region in that country. We check which providers and services are available locally, because not every cloud service is offered in every region, and design the architecture so regulated data stays in-country.",
      },
      {
        q: "Whose cloud account is the system hosted in?",
        a: "Yours. We set up infrastructure in accounts you own and give our team only the access it needs. That keeps billing transparent and means you can change providers or bring operations in-house without migrating accounts.",
      },
      {
        q: "Can you help reduce our cloud bill?",
        a: "Usually, yes. We review usage, remove idle resources, right-size servers and databases, and use committed pricing where it makes sense. We report what changed and its effect on your bill, so savings are measured rather than estimated.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX design",
    icon: "pen",
    h1: "UI and UX design for business software",
    title: "UI/UX Design for Business Software and Apps | CodXQ",
    description:
      "User research, workflows, prototypes and design systems for business software and apps, with Arabic RTL and accessibility built in.",
    summary: "Research, prototypes and design systems for software people want to use.",
    intro:
      "Business software fails when people avoid using it. We design interfaces around real tasks, test them with the people who'll use them, and deliver a clickable prototype before development starts, so you see the product before you pay to build it.",
    explainer: {
      q: "What is UX design for business software?",
      a: "UX design for business software makes complex work fast and error-free: clear navigation, fewer steps, sensible defaults and screens that match how people think about the task. It starts with research into real workflows and ends with tested designs that developers can build exactly.",
    },
    signs: {
      title: "Signs your software needs better design",
      items: [
        "Staff avoid the system and keep their own spreadsheets",
        "Training new users takes too long",
        "Customers drop off before finishing a sign-up or order",
        "You're about to build software and want to test the idea first",
      ],
    },
    modules: {
      title: "Design services",
      items: [
        { name: "User research and workflow mapping", text: "Interviews and observation with the people who do the work." },
        { name: "Clickable prototypes", text: "Realistic prototypes to test before development starts." },
        { name: "Interface design", text: "Responsive layouts for web and mobile, in light and dark themes." },
        { name: "Design systems", text: "Reusable components and tokens that keep products consistent." },
        { name: "Arabic and RTL design", text: "Mirrored layouts, Arabic typography and bilingual content." },
        { name: "Accessibility", text: "WCAG-aligned contrast, keyboard use and screen-reader support." },
      ],
    },
    benefits: [
      "Faster adoption by staff and customers",
      "Fewer mistakes and support requests",
      "Design decisions tested before development money is spent",
      "A consistent product as it grows",
    ],
    useCases: [
      "Redesigning a confusing internal tool",
      "Prototyping a new product to test with customers or investors",
      "Designing a bilingual Arabic–English customer portal",
      "Creating a design system for a product with several apps",
    ],
    technologies: ["Figma", "Design tokens", "React", "Tailwind CSS", "Storybook"],
    cost: {
      title: "How design work is priced",
      text: "Design is priced by the number of user journeys and screens, the depth of research and whether a design system is needed. A prototype of one core workflow is often the best first step.",
    },
    industries: ["healthcare", "education", "retail-ecommerce"],
    faqs: [
      {
        q: "Can you design for Arabic and English?",
        a: "Yes. We design bilingual interfaces with full right-to-left layouts, mirrored icons and navigation, Arabic typefaces and room for longer translated text. We test both languages, because a layout that works in English often breaks when mirrored.",
      },
      {
        q: "Do we get the design files?",
        a: "Yes. You receive the Figma files, the design system and any prototypes, along with the notes developers need to build them accurately. They're yours to use with CodXQ or any other team.",
      },
      {
        q: "Can you design without building?",
        a: "Yes. Some clients ask us only for research, prototypes and designs, then build with their own team. We hand over developer-ready files and can review the build to check it matches the design.",
      },
    ],
  },
  {
    slug: "it-consulting",
    name: "IT consulting",
    icon: "compass",
    h1: "IT consulting and digital transformation",
    title: "IT Consulting and Digital Transformation Services | CodXQ",
    description:
      "Independent advice on what to build, buy or fix: process reviews, technology roadmaps, vendor selection and compliance readiness.",
    summary: "Process reviews, technology roadmaps and vendor-neutral advice on what to build or buy.",
    intro:
      "Not every problem needs new software. We review how your business runs, find where time and money leak, and give you a practical plan: what to fix, what to buy, what to build and in what order, whether or not you work with us afterwards.",
    explainer: {
      q: "What does an IT consultant do for a growing business?",
      a: "An IT consultant helps you make technology decisions with less risk: mapping processes, choosing between packaged and custom software, planning integrations, preparing for regulations and sequencing projects within a budget. The result is a written plan you can act on with any vendor.",
    },
    signs: {
      title: "When consulting helps most",
      items: [
        "Departments use different tools that don't connect",
        "You're about to choose an ERP or another major platform",
        "A regulatory deadline affects your billing, data or health systems",
        "Technology spending is growing without a clear plan",
      ],
    },
    modules: {
      title: "Consulting services",
      items: [
        { name: "Process review", text: "Workflow mapping to find delays, duplication and error points." },
        { name: "Technology roadmap", text: "A prioritised, budgeted plan for the next 12–24 months." },
        { name: "Build vs buy and vendor selection", text: "Requirements, shortlists and scoring for packaged software." },
        { name: "Compliance readiness", text: "E-invoicing, data protection and health-IT readiness assessments." },
        { name: "Architecture review", text: "An independent review of an existing system's security, scalability and maintainability." },
      ],
    },
    benefits: [
      "Clear priorities instead of scattered projects",
      "Lower risk on large software decisions",
      "Early warning on regulatory deadlines",
      "A plan you own and can take to any vendor",
    ],
    useCases: [
      "Choosing between a custom ERP and a packaged product",
      "Preparing a billing system for UAE or Saudi e-invoicing",
      "Planning ABDM integration for a hospital's existing systems",
      "A digital roadmap for a family business moving off spreadsheets",
    ],
    technologies: ["Process mapping (BPMN)", "Solution architecture", "AWS, Azure and Google Cloud", "Security assessment"],
    cost: {
      title: "How consulting is priced",
      text: "Consulting is priced as a fixed-scope engagement, such as a process review or a roadmap, or as a monthly advisory retainer. The free 45-minute process review is a good way to see how we work before committing.",
    },
    industries: ["enterprise", "healthcare", "trading-distribution"],
    faqs: [
      {
        q: "Will you recommend your own services?",
        a: "Only when they fit. Sometimes the right answer is a packaged product, a configuration change or a better process, and we'll say so. That's why we offer a discovery-only engagement: you get a scope and plan you can take to any vendor.",
      },
      {
        q: "Do you help with e-invoicing and data-protection compliance?",
        a: "We help with the software side: assessing whether your systems can meet the requirements and building the changes. For legal interpretation, we work alongside your tax adviser or lawyer, because a compliance decision should never rest on a developer's reading of the rules.",
      },
      {
        q: "How long does a process review take?",
        a: "The free review takes 45 minutes and covers one workflow. A full paid discovery, covering several workflows and ending with a written scope and prototype, usually takes a few weeks, depending on how many teams are involved.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
