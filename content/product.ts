import { site } from "@/content/site";
import type { RegulationId } from "@/content/regulations";
import type { FAQ } from "@/content/types";

/**
 * Every line here describes YOUR hospital product.
 * Playbook rule: edit each row to match what the app actually does today before publishing.
 * Compliance status stays null until you have a dated, verifiable claim.
 */
const name = site.product.name;

export type ProductRole = { name: string; role: string; does: string[]; replaces: string };
export type ComplianceRow = {
  heading: string; // H3
  market: string;
  regulation: RegulationId;
  required: string;
  status: string | null; // e.g. "ABDM M1–M2 certified, March 2026". Never guess.
};

export const product = {
  name,
  path: site.product.href,
  h1: `${name}: hospital management system that connects every department`,
  title: `Hospital Management System for Hospitals & Clinics | ${name}`,
  description:
    "One hospital management system for patients, doctors, nurses, pharmacy, lab, ambulance and admin. Built for India and the GCC. Book a demo.",
  whatIs: `${name} is a hospital management system that brings patients, doctors, nurses, pharmacy, laboratory, ambulance and administration into one connected platform. Each role gets its own app or screen, and information moves between them automatically, so nothing is re-typed, lost or delayed.`,
  audience: {
    text: "Multi-specialty hospitals, hospital groups with several branches, diagnostic centres and day-care facilities in India and the GCC.",
    note: "It's built for mid-size hospitals and groups rather than single-doctor clinics.",
  },
  roles: [
    { name: "Patient app", role: "Patients", does: ["Book appointments", "View reports and prescriptions", "Pay bills", "Request an ambulance", "Get reminders"], replaces: "Phone queues and paper files" },
    { name: "Doctor workspace", role: "Doctors", does: ["See the full patient timeline", "Write notes", "Send e-prescriptions", "Order lab tests", "Review results"], replaces: "Handwritten notes and chasing reports" },
    { name: "Nursing station", role: "Nurses", does: ["Ward and bed view", "Vitals charting", "Medication schedules", "Shift handovers"], replaces: "Ward registers" },
    { name: "Pharmacy management", role: "Pharmacy", does: ["Receive e-prescriptions instantly", "Dispense", "Manage stock and expiry", "Bill"], replaces: "Re-typed prescriptions" },
    { name: "Laboratory management", role: "Laboratory", does: ["Receive orders", "Track samples", "Publish results to doctor and patient"], replaces: "Paper requisitions" },
    { name: "Ambulance management", role: "Ambulance", does: ["Receive dispatch requests", "Share live location and ETA", "Send patient details ahead to emergency"], replaces: "Phone calls" },
    { name: "Hospital administration and billing", role: "Admin", does: ["Registration", "Billing and insurance claims", "Beds and staff", "Dashboards"], replaces: "Spreadsheets" },
  ] satisfies ProductRole[],
  flow: [
    "The patient books in the app, or is registered at the front desk.",
    "The doctor sees history, allergies and past results in one view.",
    "Lab orders go straight to the lab, and results return to the doctor and patient.",
    "The e-prescription reaches the pharmacy before the patient does.",
    "Billing and insurance are prepared automatically.",
    "Follow-up reminders go to the patient.",
  ],
  emergency:
    "In an emergency, the ambulance team's request and patient details reach the emergency department before the patient arrives.",
  compliance: [
    {
      heading: "India: ABDM integration",
      market: "India",
      regulation: "india-abdm",
      required:
        "ABDM integration: ABHA creation and linking, consent-based sharing and FHIR records. For custom-built systems, the hospital registers on the ABDM sandbox and completes the integration milestones.",
      status: null,
    },
    {
      heading: "Saudi Arabia: NPHIES integration",
      market: "Saudi Arabia",
      regulation: "ksa-nphies",
      required: "NPHIES integration is mandatory for licensed providers, and health data is sensitive personal data under PDPL.",
      status: null,
    },
    {
      heading: "UAE: NABIDH, Malaffi and Riayati",
      market: "UAE",
      regulation: "uae-health-data",
      required:
        "Connection to NABIDH, Malaffi or Riayati depending on your licence. In Dubai, connecting is a condition of holding a DHA licence. Health data must stay in the UAE unless a health authority approves otherwise.",
      status: null,
    },
  ] satisfies ComplianceRow[],
  statusFallback: "Ask for the current integration status for your country during the demo.",
  deployment: [
    "Cloud hosting in India, UAE or Saudi regions, or on your own servers", // confirm
    "Role-based access for every user and department", // confirm
    "Audit logs of who viewed and changed patient records", // confirm
    "Encryption of data in transit and at rest", // confirm
  ],
  arabic: "Arabic and English interfaces with full right-to-left support, so staff and patients can each use their preferred language.",
  why:
    "Most hospital systems make you adapt to them. Because CodXQ is a custom software company, we can tailor modules, reports and integrations to your hospital's workflow, your insurers and your existing lab or accounting systems, without a separate rebuild.",
  implementation: {
    timeline: null as string | null, // e.g. "Typical go-live: 8–12 weeks for a single hospital"
    pricingModel: null as string | null, // e.g. "Annual licence per bed, plus one-time setup"
    support: null as string | null, // e.g. "Training and 12 months of support included"
  },
  faqs: [
    {
      q: "What is a hospital management system?",
      a: "A hospital management system is software that runs a hospital's clinical and administrative work in one place: registration, appointments, clinical notes, prescriptions, lab, pharmacy, wards, billing and insurance. A good one connects departments, so information entered once reaches everyone who needs it.",
    },
    {
      q: "Can patients use it on their phones?",
      a: `Yes. ${name} includes a patient app for booking appointments, viewing reports and prescriptions, paying bills, requesting an ambulance and receiving reminders. Patients who prefer not to use the app can still be registered and served at the front desk.`,
    },
    {
      q: "Does it work for multi-branch hospital groups?",
      a: `Yes. ${name} is designed for hospital groups as well as single hospitals, so patients, staff and reports can be shared across branches with permissions that control who sees what. Group dashboards show activity across every location.`,
    },
    {
      q: "Does it support Arabic?",
      a: "Yes. The interface is available in Arabic and English with full right-to-left support, and each user can choose their language. Patient-facing screens, reports and invoices can be produced in either language.",
    },
    {
      q: "Where is our patient data stored?",
      a: "Wherever your regulations require: in-country cloud regions in India, the UAE or Saudi Arabia, or on your own servers. In the UAE, health data tied to UAE services must stay in the country unless a health authority approves otherwise, and we design hosting around those rules.",
    },
    {
      q: "Can it connect to our lab analysers, PACS or accounting software?",
      a: "Integrations with lab, imaging and accounting systems are scoped during implementation, because every hospital's equipment and software differ. Tell us which systems you use, and we'll confirm in the demo what connects out of the box and what needs integration work.",
    },
    {
      q: "How long does implementation take?",
      a: "It depends on the number of departments and branches, data migration and integrations. After the demo, we prepare a written implementation plan with a timeline, training schedule and go-live approach for your hospital.",
    },
    {
      q: "How is it priced?",
      a: "Pricing depends on the size of your hospital, the modules you need, branches, hosting and integrations. We share a written quote after the demo and a short review of your requirements, so you know the full cost before you decide.",
    },
  ] satisfies FAQ[],
  demo: {
    h1: `Book a ${name} demo`,
    title: `Book a Demo | ${name} Hospital Management System`,
    description: `See ${name} in 30 minutes: a patient visit across every role, admin and billing, and compliance status for your country.`,
    whatYouSee: [
      "A patient visit from booking to billing, across every role",
      "The doctor, nursing, pharmacy and lab screens your teams would use",
      "Admin dashboards, billing and insurance workflows",
      "Integration and compliance status for your country",
      "Deployment and data-hosting options",
    ],
    whoShouldJoin: [
      "Medical director or a senior clinician",
      "Hospital administrator or COO",
      "Finance and insurance lead",
      "IT manager",
    ],
  },
};
