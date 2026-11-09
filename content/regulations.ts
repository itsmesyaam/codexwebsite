/**
 * Regulatory facts used on service, industry, location and product pages.
 * Source: the CodXQ SEO playbook research. Before launch, and at every quarterly
 * refresh, re-check each entry on the authority's own site, then update site.lastUpdated.
 * Never add a certification or compliance status here that CodXQ does not hold.
 */
export type RegulationId =
  | "uae-einvoicing" | "ksa-einvoicing" | "india-gst-einvoicing"
  | "india-dpdp" | "ksa-pdpl" | "uae-pdpl" | "eu-gdpr"
  | "uae-health-data" | "ksa-nphies" | "india-abdm" | "eu-ehds";

export type Regulation = {
  id: RegulationId;
  region: "India" | "UAE" | "Saudi Arabia" | "Europe";
  name: string;
  summary: string;
  whatWeDo: string;
  authority: string;
  url: string;
};

export const regulations: Record<RegulationId, Regulation> = {
  "uae-einvoicing": {
    id: "uae-einvoicing",
    region: "UAE",
    name: "UAE e-invoicing",
    summary:
      "Voluntary since 1 July 2026 and mandatory from January 2027 for businesses with turnover above AED 50 million, with smaller businesses following in later phases. Invoices use the Peppol-based PINT AE standard and pass through a Ministry-accredited service provider (ASP). The first phases cover B2B and B2G transactions.",
    whatWeDo:
      "We connect your ERP or billing system to the accredited service provider you choose and fix invoice data before go-live. CodXQ is not an accredited service provider.",
    authority: "UAE Ministry of Finance",
    url: "https://mof.gov.ae",
  },
  "ksa-einvoicing": {
    id: "ksa-einvoicing",
    region: "Saudi Arabia",
    name: "Saudi e-invoicing (ZATCA Fatoora)",
    summary:
      "Taxpayers whose VAT-taxable revenue exceeded SAR 187,500 in any year from 2022 to 2025 must integrate with ZATCA's Fatoora platform before 1 February 2027.",
    whatWeDo: "We integrate your billing or ERP system with Fatoora and test it well before your deadline.",
    authority: "Zakat, Tax and Customs Authority (ZATCA)",
    url: "https://zatca.gov.sa",
  },
  "india-gst-einvoicing": {
    id: "india-gst-einvoicing",
    region: "India",
    // Verify the current turnover threshold before adding a number here.
    name: "GST e-invoicing",
    summary:
      "Businesses above the GST e-invoicing turnover threshold must register B2B invoices on the Invoice Registration Portal and print the returned IRN and QR code on each invoice.",
    whatWeDo: "We build GST-compliant invoicing and connect it to e-invoicing where your turnover requires it.",
    authority: "Goods and Services Tax Network",
    url: "https://www.gst.gov.in",
  },
  "india-dpdp": {
    id: "india-dpdp",
    region: "India",
    name: "Digital Personal Data Protection (DPDP) Act",
    summary:
      "India's DPDP Act and Rules set duties for anyone handling personal data, with core obligations applying from 13 May 2027. They cover consent, purpose limitation, security safeguards, breach notification and stricter rules for children's data.",
    whatWeDo: "We design consent capture, data minimisation, access logs and breach-logging features into the software.",
    authority: "Ministry of Electronics and Information Technology",
    url: "https://www.meity.gov.in",
  },
  "ksa-pdpl": {
    id: "ksa-pdpl",
    region: "Saudi Arabia",
    name: "Saudi Personal Data Protection Law (PDPL)",
    summary:
      "Enforced by SDAIA since September 2024. Health data is treated as sensitive personal data, with stricter conditions for processing and transfer.",
    whatWeDo:
      "We build consent, access control, retention and audit features, and host data in Saudi cloud regions where required.",
    authority: "Saudi Data and AI Authority (SDAIA)",
    url: "https://sdaia.gov.sa",
  },
  "uae-pdpl": {
    id: "uae-pdpl",
    region: "UAE",
    name: "UAE Personal Data Protection Law",
    summary:
      "Federal Decree-Law No. 45 of 2021 governs the processing of personal data and treats health data as sensitive.",
    whatWeDo: "We build consent, access controls, retention rules and audit logs into the software.",
    authority: "UAE Government",
    url: "https://u.ae",
  },
  "eu-gdpr": {
    id: "eu-gdpr",
    region: "Europe",
    name: "General Data Protection Regulation (GDPR)",
    summary:
      "GDPR applies when we process personal data for clients in the EU. Processing is covered by a Data Processing Agreement, and transfers to India rely on Standard Contractual Clauses.",
    whatWeDo: "We sign DPAs and SCCs, host data in EU regions and limit the personal data our team can access.",
    authority: "European Union",
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
  },
  "uae-health-data": {
    id: "uae-health-data",
    region: "UAE",
    name: "UAE health data and health exchanges",
    summary:
      "Health information tied to UAE health services can't be stored or processed outside the country without health authority approval. Facilities connect to the exchange their licensing authority requires: NABIDH for DHA, Malaffi for DoH and Riayati for MOHAP. In Dubai, connecting to NABIDH is a condition of holding a DHA licence.",
    whatWeDo: "We host health data in UAE cloud regions and build the exchange integration your licensing authority requires.",
    authority: "Dubai Health Authority",
    url: "https://www.dha.gov.ae",
  },
  "ksa-nphies": {
    id: "ksa-nphies",
    region: "Saudi Arabia",
    name: "NPHIES",
    summary:
      "Integration with NPHIES, Saudi Arabia's national health insurance exchange, is mandatory for all licensed healthcare providers and insurers. It covers eligibility checks, pre-authorisation and claims.",
    whatWeDo: "We build NPHIES eligibility, pre-authorisation and claims workflows into hospital and clinic systems.",
    authority: "Council of Health Insurance",
    url: "https://nphies.sa",
  },
  "india-abdm": {
    id: "india-abdm",
    region: "India",
    name: "Ayushman Bharat Digital Mission (ABDM)",
    summary:
      "ABDM-enabled systems create and link ABHA health IDs, share records with patient consent and use FHIR standards. For custom-built systems, the hospital registers on the ABDM sandbox and completes the integration milestones. The National Medical Commission has asked medical colleges to adopt ABDM-enabled hospital software.",
    whatWeDo: "We build ABHA, consent and health-record features and work through the sandbox milestones with you.",
    authority: "National Health Authority",
    url: "https://abdm.gov.in",
  },
  "eu-ehds": {
    id: "eu-ehds",
    region: "Europe",
    name: "European Health Data Space (EHDS)",
    summary:
      "The EHDS regulation applies from 26 March 2027, but the provisions that bind electronic health record systems are deferred to 2029 and 2031.",
    whatWeDo:
      "In Europe we offer custom healthcare software built to GDPR, and track EHDS requirements as they phase in.",
    authority: "European Commission",
    url: "https://health.ec.europa.eu",
  },
};

export const getRegulations = (ids: RegulationId[]) => ids.map((id) => regulations[id]);

/** Service hub: "Security, privacy and compliance by region" (H3 per region, per the heading plan). */
export const complianceByRegion: { title: string; ids: RegulationId[] }[] = [
  { title: "India: DPDP Act", ids: ["india-dpdp", "india-gst-einvoicing"] },
  { title: "Saudi Arabia: PDPL and ZATCA e-invoicing", ids: ["ksa-pdpl", "ksa-einvoicing"] },
  { title: "UAE: data protection and e-invoicing", ids: ["uae-pdpl", "uae-einvoicing"] },
  { title: "Europe: GDPR", ids: ["eu-gdpr"] },
];
