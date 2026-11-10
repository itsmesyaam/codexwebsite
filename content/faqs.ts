import { homeFaqs, serviceHubFaqs } from "@/content/company";
import type { FAQ } from "@/content/types";

export { homeFaqs, serviceHubFaqs };

export const pricingFaqs: FAQ[] = [
  {
    q: "How does CodXQ price custom software projects?",
    a: "We offer fixed-scope pricing after discovery for well-defined specifications, dedicated monthly team retainers for continuous product development, and time-and-materials for rapidly evolving roadmaps. Every project starts with a clear, written scope so there are no surprises.",
  },
  {
    q: "Why are there no fixed pricing numbers displayed on the website?",
    a: "Custom software costs vary significantly based on whether you need web, mobile, multi-role approvals, legacy database migration, or local e-invoicing compliance. We provide realistic planning ranges during a free 45-minute process review and firm fixed quotes after discovery.",
  },
  {
    q: "What is included in every CodXQ project quote?",
    a: "Every engagement includes discovery workshops, clickable UI prototypes, demonstrated working software every two weeks, full source code and IP ownership upon final payment, data migration support, and go-live warranty assistance.",
  },
  {
    q: "Can we hire a dedicated engineering team?",
    a: "Yes. For products with ongoing roadmaps, we assemble a dedicated team of frontend, backend, QA, and project management engineers who work exclusively on your systems, integrated with your ceremonies and communication channels.",
  },
];

export const howWeWorkFaqs: FAQ[] = [
  {
    q: "How does the discovery phase work?",
    a: "Discovery is a 1-to-2 week collaborative deep dive where we map your operational workflows, identify bottleneck areas, define data models, and produce a clickable prototype alongside an agreed, written scope before code is written.",
  },
  {
    q: "What happens during our two-week sprints?",
    a: "Each sprint begins with agreed priorities and ends with a live demonstration of working software. You have access to our staging environment and source repository, allowing you to test progress and adjust priorities as business needs evolve.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You own 100% of the intellectual property, source code, documentation, and cloud deployment scripts upon completion and final invoice payment. We work directly in your own code repositories from day one.",
  },
  {
    q: "Do you sign non-disclosure agreements (NDAs)?",
    a: "Yes. We gladly sign your standard NDA or provide our mutual non-disclosure agreement before any confidential operational data, architecture plans, or business processes are shared.",
  },
];

export const aboutFaqs: FAQ[] = [
  {
    q: "Where is CodXQ based?",
    a: "CodXQ is headquartered in Kochi, Kerala, India. Kochi provides a deep ecosystem of senior engineering talent with advantageous time zone overlap with the GCC (1.5–2.5 hours) and Western Europe (3.5–5.5 hours).",
  },
  {
    q: "Do you maintain offices outside India?",
    a: "No. Our engineering and delivery teams are based in Kochi, India. We collaborate with clients in India, the UAE, Saudi Arabia, the UK, and Europe via video, shared project tools, and travel for on-site discovery workshops when required.",
  },
  {
    q: "What makes CodXQ different from offshore software agencies?",
    a: "We are discovery-first and business-led. Rather than merely taking a feature checklist, we map how your company actually makes money, design for local tax and data compliance, and stay after launch to support and evolve the system.",
  },
];
