/**
 * Script to verify missing real-world data and TODO items across content files.
 * Run via: npm run content:check
 */

import { site } from "../content/site.ts";
import { team } from "../content/team.ts";
import { pricingTiers } from "../content/pricing.ts";
import { product } from "../content/product.ts";
import { caseStudies, realCaseStudies } from "../content/case-studies.ts";
import { locations } from "../content/locations.ts";
import { articles } from "../content/articles.ts";

console.log("=================================================");
console.log("       CodXQ Content Readiness Audit Report       ");
console.log("=================================================\n");

const missing = [];

// 1. Site-wide company data
console.log("1. Site-Wide Facts (content/site.ts):");
if (!site.productName) {
  missing.push({ page: "Site-wide", field: "site.productName", note: "Using fallback 'CodXQ hospital management system'" });
  console.log("   [!] site.productName is null (fallback active)");
}
if (!site.email) {
  missing.push({ page: "Contact/Footer", field: "site.email", note: "Honest 'not connected' fallback on contact forms" });
  console.log("   [!] site.email is null");
}
if (!site.phone) {
  missing.push({ page: "Contact/Header", field: "site.phone", note: "Using WhatsApp +91 83018 46170 only" });
  console.log("   [!] site.phone is null");
}
if (!site.address) {
  missing.push({ page: "About/Contact", field: "site.address", note: "Physical street address hidden until verified" });
  console.log("   [!] site.address is null (hidden on site)");
}
if (!site.foundingYear) {
  missing.push({ page: "Schema/About", field: "site.foundingYear", note: "Founding date hidden from Schema until set" });
  console.log("   [!] site.foundingYear is null");
}
if (site.social.length === 0) {
  missing.push({ page: "Footer/About", field: "site.social", note: "Social profile links hidden until verified" });
  console.log("   [!] site.social is empty (hidden in footer)");
}
if (!site.author.name) {
  missing.push({ page: "Blog/Articles", field: "site.author", note: "Using Organization schema publisher fallback" });
  console.log("   [!] site.author is null");
}

// 2. Team data
console.log("\n2. Team Members (content/team.ts):");
if (team.length === 0) {
  missing.push({ page: "About (/about/)", field: "team", note: "Team grid completely hidden per hard rules" });
  console.log("   [!] team array is empty (Team section gracefully hidden on /about/)");
} else {
  console.log(`   [✓] ${team.length} team members defined`);
}

// 3. Pricing tiers & ranges
console.log("\n3. Pricing Tiers (content/pricing.ts):");
pricingTiers.forEach((tier) => {
  if (tier.range === null) {
    missing.push({ page: "Pricing (/pricing/)", field: `pricingTier[${tier.name}].range`, note: "Range badge hidden until verified" });
    console.log(`   [!] Tier '${tier.name}': range is null`);
  }
  if (tier.timeline === null) {
    missing.push({ page: "Pricing (/pricing/)", field: `pricingTier[${tier.name}].timeline`, note: "Timeline badge hidden until verified" });
    console.log(`   [!] Tier '${tier.name}': timeline is null`);
  }
});

// 4. Hospital Product Compliance
console.log("\n4. Product Compliance (content/product.ts):");
product.compliance.forEach((comp) => {
  if (comp.status === null) {
    missing.push({ page: "Product (/products/hospital-management-system/)", field: `compliance[${comp.market}]`, note: "Showing 'Ask us during demo' fallback" });
    console.log(`   [!] Compliance status for ${comp.market} is null (honest fallback displayed)`);
  }
});
if (product.implementation.timeline === null) {
  missing.push({ page: "Product", field: "product.implementation.timeline", note: "Hidden on page" });
  console.log("   [!] product.implementation.timeline is null");
}
if (product.implementation.pricingModel === null) {
  missing.push({ page: "Product", field: "product.implementation.pricingModel", note: "Hidden on page" });
  console.log("   [!] product.implementation.pricingModel is null");
}

// 5. Case studies
console.log("\n5. Case Studies (content/case-studies.ts):");
const demoCount = caseStudies.filter((c) => c.demo).length;
console.log(`   [i] ${demoCount} demonstration case studies configured (all set to noindex)`);
if (realCaseStudies.length === 0) {
  missing.push({ page: "Our Work & Locations", field: "realCaseStudies", note: "Only demo case studies active; locations show zero fake proof" });
  console.log("   [!] realCaseStudies count is 0 (location local proof safely hidden)");
}

// 6. Locations
console.log("\n6. Locations (content/locations.ts):");
const noindexedLocations = locations.filter((l) => l.noindex);
console.log(`   [i] Total locations configured: ${locations.length}`);
console.log(`   [i] Quality gate noindex locations: ${noindexedLocations.map((l) => l.name).join(", ")}`);

// 7. Articles
console.log("\n7. Articles (content/articles.ts):");
const drafts = articles.filter((a) => a.draft);
console.log(`   [i] Total articles: ${articles.length}`);
console.log(`   [i] Draft articles (dev-only): ${drafts.map((a) => a.slug).join(", ")}`);

console.log("\n=================================================");
console.log(`Total missing/TODO real-data fields flagged: ${missing.length}`);
console.log("All components are programmed to gracefully hide or display honest fallbacks.");
console.log("=================================================\n");
