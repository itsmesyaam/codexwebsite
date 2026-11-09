import type { RegulationId } from "@/content/regulations";
import type { FAQ, Feature, IconKey } from "@/content/types";

export type Industry = {
  slug: string;
  name: string;
  icon: IconKey;
  h1: string;
  title: string;
  description: string;
  summary: string;
  intro: string;
  problems: { title: string; items: string[] }; // in buyers' words
  modules: { title: string; items: Feature[] };
  integrations: { title: string; items: string[] };
  regional: { title: string; ids: RegulationId[] };
  services: string[]; // related service slugs
  faqs: FAQ[];
  showsProduct?: boolean; // only Healthcare: one line + link to the product page
};

export const industries: Industry[] = [
  {
    slug: "trading-distribution",
    name: "Trading and distribution",
    icon: "package",
    h1: "Custom software for trading and distribution companies",
    title: "Custom Software for Trading and Distribution Companies | CodXQ",
    description:
      "Inventory, van sales, credit control and e-invoicing-ready billing for traders and distributors in India and the GCC, built around your flow.",
    summary: "Stock, van sales, credit control and e-invoicing for traders and distributors.",
    intro:
      "Trading companies lose money in the gaps between warehouse, sales team and accounts: stock that's counted twice, credit given to customers who are already overdue, and invoices that don't match deliveries. CodXQ builds trading and distribution software around your actual flow, from purchase to delivery to collection.",
    problems: {
      title: "Where trading companies lose money",
      items: [
        "Stock counted in two places and trusted in neither",
        "Credit given to customers who are already overdue",
        "Invoices that don't match what was delivered",
        "Orders taken on WhatsApp that never reach the system",
        "Owners waiting until month-end to see margins and receivables",
      ],
    },
    modules: {
      title: "Modules we build for traders and distributors",
      items: [
        { name: "Multi-warehouse inventory", text: "Batch and expiry tracking, transfers and reorder levels." },
        { name: "Van sales and route app", text: "Offline orders, van stock and collections on the road." },
        { name: "Credit control", text: "Credit limits and overdue holds enforced when the order is taken." },
        { name: "Purchase and supplier management", text: "Purchase orders, goods receipt and supplier pricing." },
        { name: "WhatsApp order intake", text: "Orders sent on WhatsApp captured straight into the system." },
        { name: "GST, VAT and e-invoicing", text: "Invoices that meet Indian, UAE and Saudi requirements." },
        { name: "Owner dashboards", text: "Margin, stock age and receivables, updated live." },
      ],
    },
    integrations: {
      title: "Integrations with Tally, Zoho and Odoo",
      items: ["Tally", "Zoho Books", "Odoo", "QuickBooks", "WhatsApp Business API", "Payment gateways", "E-invoicing providers"],
    },
    regional: {
      title: "E-invoicing for traders in the UAE, Saudi Arabia and India",
      ids: ["ksa-einvoicing", "uae-einvoicing", "india-gst-einvoicing"],
    },
    services: ["erp-crm-development", "mobile-app-development", "api-integration"],
    faqs: [
      {
        q: "Can you work with Tally, Zoho or Odoo instead of replacing it?",
        a: "Yes. Many traders keep their accounting system and add custom software for stock, sales and credit control, synced with accounts. Invoices, receipts and stock movements flow back automatically, so your accountant keeps working in the tool they know.",
      },
      {
        q: "Will the van sales app work offline?",
        a: "Yes. Salespeople can take orders, issue invoices and record collections without a signal, using the stock loaded on their van. Everything syncs when the connection returns, and credit limits are checked against the latest data available on the device.",
      },
      {
        q: "How long does a trading ERP take?",
        a: "It depends on modules and locations. We usually recommend a first release covering inventory and sales, then van sales, credit control and dashboards in later phases, so your team benefits early. You get a written timeline after discovery.",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "factory",
    h1: "Custom software for manufacturing companies",
    title: "Custom Software for Manufacturing Companies | CodXQ",
    description:
      "Production planning, inventory, quality and maintenance software built around your shop floor, connected to your ERP and accounting.",
    summary: "Production planning, quality checks and stock that matches the shop floor.",
    intro:
      "Manufacturers often run production on whiteboards and spreadsheets beside an ERP that only finance trusts. We build software that tracks orders, materials, production and quality as they actually move through your plant, and connects it to the systems you already use.",
    problems: {
      title: "Where manufacturers lose time and money",
      items: [
        "Production plans live on a whiteboard and change by phone",
        "Material shortages are discovered when the job starts",
        "Quality checks are on paper and hard to trace",
        "Breakdowns get fixed but never analysed",
        "Cost per order is known only after the fact",
      ],
    },
    modules: {
      title: "Modules we build for manufacturers",
      items: [
        { name: "Production planning", text: "Work orders, capacity and schedules that update as priorities change." },
        { name: "Bill of materials and inventory", text: "Material requirements, consumption and stock by location." },
        { name: "Shop-floor data capture", text: "Tablet screens for job start, stop, output and scrap." },
        { name: "Quality management", text: "Checklists, inspections, non-conformance and batch traceability." },
        { name: "Maintenance", text: "Preventive schedules, breakdown logs and spare parts." },
        { name: "Costing dashboards", text: "Actual cost per order, product and line." },
      ],
    },
    integrations: {
      title: "Integrations for manufacturers",
      items: ["Tally", "SAP Business One", "Odoo", "Barcode scanners and label printers", "Machine data where available"],
    },
    regional: {
      title: "Invoicing rules by region",
      ids: ["india-gst-einvoicing", "uae-einvoicing", "ksa-einvoicing"],
    },
    services: ["erp-crm-development", "legacy-modernization", "api-integration"],
    faqs: [
      {
        q: "Can you connect the software to our machines?",
        a: "Sometimes. If your machines export data through a controller, a network port or a file, we can capture it. For older machines, operators record output on a tablet in a few taps. We assess what's practical during discovery, plant by plant.",
      },
      {
        q: "Do we need to replace our ERP?",
        a: "Usually not. Many manufacturers keep their ERP or accounting system for finance and add custom software for planning, shop-floor tracking and quality, synced in both directions. We recommend replacement only when the existing system blocks the business.",
      },
      {
        q: "Can workers use it on the shop floor?",
        a: "Yes. We design large, simple screens for tablets and mounted displays, support local languages where needed, and keep each task to a few taps. If connectivity is patchy, entries are stored on the device and synced later.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics and freight",
    icon: "truck",
    h1: "Custom software for logistics and freight companies",
    title: "Custom Software for Logistics and Freight Companies | CodXQ",
    description:
      "Booking, dispatch, driver apps, proof of delivery, tracking and billing for logistics and freight companies in India, the GCC and Europe.",
    summary: "Dispatch, tracking, driver apps and billing that match how freight really moves.",
    intro:
      "Logistics runs on timing, and most delays start with information that arrives late: a booking by email, a delivery confirmed by phone, an invoice raised a week after the job. We build software that captures each event once, where it happens, and shares it with everyone who needs it.",
    problems: {
      title: "Where logistics companies lose time",
      items: [
        "Bookings arrive by email, phone and WhatsApp and are re-typed",
        "Customers call to ask where their shipment is",
        "Proof of delivery is paper that reaches the office days later",
        "Jobs are invoiced late, or missed entirely",
        "Vehicle and driver costs are hard to tie to individual jobs",
      ],
    },
    modules: {
      title: "Software we build for logistics companies",
      items: [
        { name: "Booking and order management", text: "Every booking in one queue, whatever channel it came from." },
        { name: "Dispatch and route planning", text: "Assign vehicles and drivers, and plan routes around priorities." },
        { name: "Driver app with proof of delivery", text: "Photos, signatures and GPS stamps, synced as soon as possible." },
        { name: "Customer tracking portal", text: "Status and estimated arrival from the same data your team uses." },
        { name: "Job costing and billing", text: "Charges captured per job and invoiced on completion." },
        { name: "Fleet and compliance", text: "Vehicle documents, maintenance and driver records with expiry alerts." },
      ],
    },
    integrations: {
      title: "Integrations for logistics companies",
      items: ["GPS and telematics providers", "Accounting and ERP", "WhatsApp Business API", "Carrier systems with APIs", "E-invoicing providers"],
    },
    regional: {
      title: "Invoicing rules by region",
      ids: ["uae-einvoicing", "ksa-einvoicing", "india-gst-einvoicing"],
    },
    services: ["mobile-app-development", "web-application-development", "api-integration"],
    faqs: [
      {
        q: "Can the driver app work without signal?",
        a: "Yes. Drivers can complete jobs and capture photos and signatures offline, and the app syncs when a connection returns. We define clear rules for jobs updated in the office and on the road at the same time, so conflicts are handled predictably.",
      },
      {
        q: "Can customers track their shipments?",
        a: "Yes. We build tracking portals and notifications by email, SMS or WhatsApp that show status and estimated arrival from the same data your team uses, so customers stop calling for updates.",
      },
      {
        q: "Can you integrate with our GPS or telematics provider?",
        a: "Usually. Most providers offer an API or data export, and we connect it to dispatch and job records. If your vehicles have no tracking, the driver app can share location during active jobs instead.",
      },
    ],
  },
  {
    slug: "real-estate-facilities",
    name: "Real estate and facilities",
    icon: "building",
    h1: "Custom software for real estate and facility management companies",
    title: "Custom Software for Real Estate and Facility Management | CodXQ",
    description:
      "Lease, tenant, maintenance and facility management software for property owners, developers and FM companies in India and the GCC.",
    summary: "Leases, tenants, maintenance requests and facility teams in one system.",
    intro:
      "Property and facility businesses juggle leases, tenants, contractors and assets across many sites. We build software that keeps contracts, payments, maintenance and teams in one place, with portals that let tenants and clients see what's happening without calling you.",
    problems: {
      title: "Where property and facility teams lose time",
      items: [
        "Lease renewals and rent escalations tracked in spreadsheets",
        "Maintenance requests arrive by phone and get lost",
        "Technicians' work is hard to verify or bill accurately",
        "Asset histories are scattered across files and emails",
        "Owners lack a live view of occupancy and collections",
      ],
    },
    modules: {
      title: "Software we build for real estate and facilities",
      items: [
        { name: "Lease and tenant management", text: "Contracts, renewals, escalations and reminders." },
        { name: "Rent and service-charge billing", text: "Scheduled invoices, receipts and arrears tracking." },
        { name: "Maintenance and work orders", text: "Tenant requests, technician dispatch and service-level tracking." },
        { name: "Technician mobile app", text: "Checklists, photos, parts used and customer sign-off." },
        { name: "Asset register", text: "Equipment histories, warranties and preventive schedules." },
        { name: "Owner and tenant portals", text: "Statements, requests and documents in a self-service account." },
      ],
    },
    integrations: {
      title: "Integrations for property and facility companies",
      items: ["Accounting and ERP", "Payment gateways", "WhatsApp Business API", "Access control and sensors where available", "E-invoicing providers"],
    },
    regional: {
      title: "Invoicing rules in the GCC",
      ids: ["uae-einvoicing", "ksa-einvoicing"],
    },
    services: ["web-application-development", "mobile-app-development", "erp-crm-development"],
    faqs: [
      {
        q: "Can tenants raise requests from their phones?",
        a: "Yes. Tenants can raise and track requests through a web portal, a mobile app or WhatsApp, attach photos and see when a technician is assigned. Every request is timestamped, so response and completion times can be measured against your service agreements.",
      },
      {
        q: "Can the system handle multiple properties and owners?",
        a: "Yes. We design for portfolios from the start, with properties, units, owners and contracts as separate records, and permissions that control who sees what, so each owner or client sees only their own buildings.",
      },
      {
        q: "Does it support Arabic and VAT invoicing?",
        a: "Yes. We build bilingual Arabic–English interfaces and VAT-compliant invoices, and connect billing to e-invoicing in Saudi Arabia and the UAE as those requirements apply to your business.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail and e-commerce",
    icon: "bag",
    h1: "Custom software for retail and e-commerce businesses",
    title: "Custom Software for Retail and E-commerce | CodXQ",
    description:
      "Online stores, order management, inventory sync and customer apps for retail and e-commerce brands, connected to your stores and accounting.",
    summary: "Online stores, order management and stock that stays in sync across channels.",
    intro:
      "Retailers sell across stores, websites, marketplaces and WhatsApp, and every channel keeps its own version of stock and orders. We build software that brings them into one flow, so customers see accurate stock and your team stops reconciling by hand.",
    problems: {
      title: "Where retailers lose sales and margin",
      items: [
        "Stock shown online doesn't match what's on the shelf",
        "Orders from different channels are processed in different places",
        "Returns and refunds are handled by hand",
        "Customer data is split between the store, the website and WhatsApp",
        "Promotions are hard to measure",
      ],
    },
    modules: {
      title: "Software we build for retailers",
      items: [
        { name: "Order management", text: "Orders from every channel in one queue." },
        { name: "Inventory sync", text: "Stock updated across stores, website and marketplaces." },
        { name: "Custom storefronts", text: "Fast, accessible online stores where templates fall short." },
        { name: "Customer apps and loyalty", text: "Ordering, rewards and personalised offers." },
        { name: "Returns and refunds", text: "Rules-based returns with stock and finance updated automatically." },
        { name: "Sales dashboards", text: "Sales, margin and stock by channel, store and product." },
      ],
    },
    integrations: {
      title: "Integrations for retailers",
      items: ["Shopify and WooCommerce", "Marketplace seller APIs", "POS systems", "Razorpay, UPI and regional gateways", "Delivery partners", "Accounting and ERP"],
    },
    regional: {
      title: "Customer data rules by region",
      ids: ["india-dpdp", "uae-pdpl", "ksa-pdpl"],
    },
    services: ["web-application-development", "mobile-app-development", "api-integration"],
    faqs: [
      {
        q: "Should we build a custom store or use Shopify?",
        a: "If a platform like Shopify fits your catalogue and checkout, use it, and we can extend it with custom apps and integrations. Custom storefronts make sense when you need complex pricing, B2B ordering, unusual product configuration or deep integration with your own systems.",
      },
      {
        q: "Can you sync stock across our stores and website?",
        a: "Yes. We connect your POS, website and marketplaces to a single stock record, so a sale anywhere updates availability everywhere. We also handle reservations for online orders and rules for low-stock items.",
      },
      {
        q: "How do you handle customer data and consent?",
        a: "We design consent capture, data minimisation and access controls into the system, aligned with India's DPDP Act, Saudi PDPL and UAE data-protection law where they apply. Marketing preferences and data requests are recorded and easy to act on.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education and training",
    icon: "graduation",
    h1: "Custom software for education and training institutes",
    title: "Custom Education Software for Schools and Institutes | CodXQ",
    description:
      "Admissions, fee collection, timetables, learning portals and parent apps for schools, colleges and training institutes in India and the GCC.",
    summary: "Admissions, fees, timetables, learning portals and parent communication.",
    intro:
      "Schools, colleges and training institutes run on admissions, fees, timetables and communication, often spread across forms, spreadsheets and messaging groups. We build software that brings students, staff and parents into one system that fits how your institution works.",
    problems: {
      title: "Where institutes lose time",
      items: [
        "Admissions handled through forms, calls and spreadsheets",
        "Fee reminders and receipts done by hand",
        "Timetables rebuilt every term",
        "Parents and students rely on scattered messaging groups for updates",
        "Course content and assessments live in separate tools",
      ],
    },
    modules: {
      title: "Software we build for institutes",
      items: [
        { name: "Admissions and enquiries", text: "Online applications, document upload and status tracking." },
        { name: "Fees and payments", text: "Instalments, reminders, online payment and receipts." },
        { name: "Timetables and attendance", text: "Scheduling, substitutions and attendance in one place." },
        { name: "Learning portal", text: "Course material, assignments and assessments." },
        { name: "Parent and student apps", text: "Notices, results, attendance and fee status." },
        { name: "Management reports", text: "Admissions, collections and academic performance at a glance." },
      ],
    },
    integrations: {
      title: "Integrations for institutes",
      items: ["Payment gateways and UPI", "Video conferencing", "Existing LMS platforms", "SMS, email and WhatsApp", "Accounting"],
    },
    regional: {
      title: "Student data protection",
      ids: ["india-dpdp", "uae-pdpl", "ksa-pdpl"],
    },
    services: ["web-application-development", "mobile-app-development", "ui-ux-design"],
    faqs: [
      {
        q: "Can you integrate with our existing LMS?",
        a: "Yes, where the LMS offers an API or standard formats. Many institutes keep a learning platform they like and add custom admissions, fees and parent communication around it, with single sign-on so students and staff use one login.",
      },
      {
        q: "How do you protect student data?",
        a: "We restrict access by role, log who views and changes records, and collect only the data you need. India's DPDP Act sets stricter rules for children's personal data, including parental consent, and we design consent and data-request workflows to support them.",
      },
      {
        q: "Can parents pay fees online?",
        a: "Yes. Parents can pay by UPI, card or regional payment gateways, with instalment plans, automatic reminders and receipts. Payments reconcile against each student's account, so your accounts team no longer matches them by hand.",
      },
    ],
  },
  {
    slug: "construction",
    name: "Construction and contracting",
    icon: "hardhat",
    h1: "Custom software for construction and contracting companies",
    title: "Custom Software for Construction Companies | CodXQ",
    description:
      "Project tracking, site reports, materials, subcontractor management and progress billing for contractors in India and the GCC.",
    summary: "Site reports, materials, subcontractors and progress billing in one place.",
    intro:
      "Construction margins disappear between the site and the office: materials ordered twice, progress reported late, variations never billed. We build software that connects site teams, procurement and accounts, so you know where each project stands every day, not at month-end.",
    problems: {
      title: "Where contractors lose margin",
      items: [
        "Site progress reported through calls, photos and spreadsheets",
        "Materials over-ordered, wasted or unaccounted for",
        "Variations agreed on site but never billed",
        "Subcontractor claims that are hard to verify",
        "Project cost compared with budget only after completion",
      ],
    },
    modules: {
      title: "Software we build for contractors",
      items: [
        { name: "Project and BOQ tracking", text: "Budget, bill of quantities and progress by package." },
        { name: "Daily site reports", text: "Labour, work done, photos and issues from a mobile app." },
        { name: "Materials and procurement", text: "Requests, purchase orders, deliveries and site stock." },
        { name: "Subcontractor management", text: "Work orders, measurements and claims." },
        { name: "Progress billing and variations", text: "Claims backed by site records and approvals." },
        { name: "Equipment and plant tracking", text: "Location, usage, maintenance and hire costs." },
      ],
    },
    integrations: {
      title: "Integrations for contractors",
      items: ["Accounting and ERP", "Document management", "WhatsApp Business API", "E-invoicing providers"],
    },
    regional: {
      title: "Invoicing rules by region",
      ids: ["uae-einvoicing", "ksa-einvoicing", "india-gst-einvoicing"],
    },
    services: ["erp-crm-development", "mobile-app-development", "web-application-development"],
    faqs: [
      {
        q: "Can site engineers use it without good connectivity?",
        a: "Yes. The site app works offline for daily reports, photos and material receipts, then syncs when a connection is available. Entries are timestamped and location-stamped, so the office can trust when and where work was recorded.",
      },
      {
        q: "Can it handle progress claims and retention?",
        a: "Yes. We build billing around your contracts, including measured progress, variations, retention and advance recovery, so each claim is backed by site records and approvals rather than assembled by hand.",
      },
      {
        q: "Will it replace our accounting system?",
        a: "Not unless you want it to. Most contractors keep their accounting software and use custom project software for site, procurement and billing workflows, with approved invoices and costs synced into accounts.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart",
    h1: "Custom healthcare software development",
    title: "Custom Healthcare Software Development | CodXQ",
    description:
      "Patient portals, integrations and custom healthcare software for hospitals and clinics, designed around ABDM in India and NPHIES, NABIDH and Malaffi in the GCC.",
    summary: "Patient portals, integrations and custom builds around clinical workflows.",
    intro:
      "Healthcare software has to work for patients, clinicians and regulators at once. We build custom healthcare software, patient portals and integrations around your clinical and administrative workflows, designed for the health-IT rules where you operate.",
    problems: {
      title: "Where hospitals and clinics lose time",
      items: [
        "Patient details re-entered at registration, consultation and billing",
        "Lab results and prescriptions chased by phone",
        "Insurance pre-authorisations and claims prepared by hand",
        "Systems that don't connect to national health exchanges",
        "Patients phoning for appointments, reports and bills",
      ],
    },
    modules: {
      title: "Healthcare software we build",
      items: [
        { name: "Patient portals and apps", text: "Appointments, reports, prescriptions, payments and reminders." },
        // Confirm your integration experience for each exchange before publishing.
        { name: "Health-exchange integrations", text: "Integration work for ABDM in India, NPHIES in Saudi Arabia and NABIDH, Malaffi or Riayati in the UAE." },
        { name: "Insurance and claims workflows", text: "Eligibility, pre-authorisation and claims prepared from clinical records." },
        { name: "Lab and diagnostic integrations", text: "Orders and results flowing between clinical systems." },
        { name: "Telehealth and remote care", text: "Video consultations, remote monitoring and follow-ups." },
        { name: "Custom clinical tools", text: "Specialty workflows, registries and dashboards." },
      ],
    },
    integrations: {
      title: "Systems we integrate with",
      items: ["National health exchanges", "Lab analysers and LIS", "PACS and imaging", "Insurance and TPA platforms", "Accounting and ERP", "SMS, email and WhatsApp"],
    },
    regional: {
      title: "Health-IT rules by region",
      ids: ["india-abdm", "ksa-nphies", "uae-health-data", "eu-ehds"],
    },
    services: ["web-application-development", "api-integration", "cloud-devops"],
    showsProduct: true,
    faqs: [
      {
        q: "Do you build hospital management systems?",
        a: "Yes. CodXQ makes its own hospital management system for multi-specialty hospitals and hospital groups, and builds custom healthcare software for organisations whose needs a product doesn't cover. This page is about custom builds; the product has its own page.",
      },
      {
        q: "Is CodXQ certified for ABDM, NPHIES or NABIDH?",
        a: "Certification and onboarding status for our hospital product is listed, with dates, on the product page. For custom builds, ABDM integration requires the hospital to register on the ABDM sandbox and complete the integration milestones, and we do that technical work with you.",
      },
      {
        q: "Where is patient data stored?",
        a: "Where your regulations require. In the UAE, health data tied to UAE services must stay in the country unless a health authority approves otherwise, and Saudi PDPL treats health data as sensitive. We host in in-country cloud regions or on your own servers, with access controls and audit logs.",
      },
    ],
  },
  {
    slug: "financial-services",
    name: "Financial services",
    icon: "landmark",
    h1: "Custom software for financial services and fintech",
    title: "Custom Fintech and Financial Services Software | CodXQ",
    description:
      "Onboarding, lending workflows, payments, reconciliation and reporting software for NBFCs, fintechs, brokers and finance teams.",
    summary: "Onboarding, lending workflows, payments and reconciliation with full audit trails.",
    intro:
      "Financial businesses need software that is fast for customers and strict behind the scenes: every action authorised, logged and traceable. We build onboarding, lending, payment and reconciliation systems that fit your products and the rules you operate under.",
    problems: {
      title: "Where finance teams lose time and take on risk",
      items: [
        "Customer onboarding stalls on document collection and checks",
        "Applications move between email and spreadsheets",
        "Payments are reconciled by hand at the end of the day",
        "Audit trails are incomplete or spread across systems",
        "Management and regulatory reports take days to prepare",
      ],
    },
    modules: {
      title: "Software we build for financial services",
      items: [
        { name: "Digital onboarding", text: "Applications, document upload and identity checks through approved providers." },
        { name: "Loan and application workflows", text: "Scoring inputs, approvals, sanctions and disbursal tracking." },
        { name: "Payments and collections", text: "Payment links, mandates, reminders and receipts." },
        { name: "Reconciliation", text: "Automatic matching of bank, gateway and ledger entries." },
        { name: "Customer portals and apps", text: "Statements, applications and service requests in one account." },
        { name: "Reporting and audit", text: "Role-based access, complete audit logs and scheduled reports." },
      ],
    },
    integrations: {
      title: "Integrations for financial services",
      items: ["Banking and payment APIs", "Identity and KYC verification providers", "Credit bureaus where permitted", "Core and accounting systems", "WhatsApp, SMS and email"],
    },
    regional: {
      title: "Data-protection rules by region",
      ids: ["india-dpdp", "ksa-pdpl", "uae-pdpl", "eu-gdpr"],
    },
    services: ["web-application-development", "api-integration", "ai-automation"],
    faqs: [
      {
        q: "Can you build software for regulated financial companies?",
        a: "Yes, as a software partner. We build the workflows, audit trails, access controls and reports your compliance team requires, and work to your policies and your regulator's technology guidelines. Regulatory interpretation stays with your compliance and legal teams.",
      },
      {
        q: "How do you secure financial data?",
        a: "Our standard design encrypts data in transit and at rest, restricts access by role, logs every sensitive action and separates environments. We also support security reviews and penetration tests by your chosen auditors before go-live.",
      },
      {
        q: "Can you integrate with our core system?",
        a: "Usually, yes, through its API, database views or file exchange, depending on what the system supports. We assess the options in discovery and choose the most reliable, auditable route rather than the quickest.",
      },
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    icon: "network",
    h1: "Custom software for enterprises and large organisations",
    title: "Enterprise Software Development and Integration | CodXQ",
    description:
      "Internal platforms, integrations, modernization and dedicated teams for large organisations, with security reviews, documentation and clear governance.",
    summary: "Internal platforms, integrations and modernization with enterprise governance.",
    intro:
      "Large organisations rarely need another big system. They need the gaps between existing systems closed: approvals that cross departments, data that should flow automatically, and old applications that slow every change. We build focused software and integrations that fit your architecture and governance.",
    problems: {
      title: "Where large organisations lose time",
      items: [
        "Cross-department processes run on email and spreadsheets",
        "Data is duplicated across systems that don't connect",
        "Legacy applications slow down every change",
        "IT backlogs leave business teams waiting",
        "Unofficial tools appear because official ones don't fit",
      ],
    },
    modules: {
      title: "What we build for enterprises",
      items: [
        { name: "Workflow and approval platforms", text: "Cross-department processes with rules, audit trails and reporting." },
        { name: "Integration layer", text: "APIs and event flows between ERP, CRM, HR and finance systems." },
        { name: "Internal portals and self-service", text: "One place for staff requests, documents and status." },
        { name: "Legacy modernization", text: "Staged replacement of applications that block change." },
        { name: "Data and reporting", text: "Consolidated dashboards drawn from several systems." },
        { name: "Dedicated engineering teams", text: "A CodXQ team working inside your processes and tools." },
      ],
    },
    integrations: {
      title: "Integrations for enterprises",
      items: ["ERP platforms", "Single sign-on (SAML, OpenID Connect)", "CRM platforms", "HR and payroll systems", "Data warehouses and BI tools"],
    },
    regional: {
      title: "Data-protection rules by region",
      ids: ["eu-gdpr", "india-dpdp", "ksa-pdpl", "uae-pdpl"],
    },
    services: ["api-integration", "legacy-modernization", "it-consulting"],
    faqs: [
      {
        q: "Can you work within our security and procurement requirements?",
        a: "Yes. We complete vendor security questionnaires, sign NDAs and data processing agreements, follow your access and change-management policies, and work in your repositories and cloud accounts. Any requirement we can't meet is flagged early, not discovered during an audit.",
      },
      {
        q: "Can a CodXQ team work alongside our in-house developers?",
        a: "Yes. Under the dedicated-team model, CodXQ developers, QA and a project manager join your ceremonies, use your tools and follow your coding standards, while we handle hiring, retention and day-to-day management.",
      },
      {
        q: "How do you document what you build?",
        a: "Every project includes architecture notes, API documentation, deployment instructions and runbooks, kept in your repository and updated as the system changes. The aim is that your team, or another vendor, can maintain the software without us.",
      },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
