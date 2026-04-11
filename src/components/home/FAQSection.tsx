"use client";

import { motion } from "framer-motion";
import FAQAccordion from "@/components/FAQAccordion";

const vp = { once: true as const, margin: "-60px" as const };

const faqItems = [
  { q: "What is LCA Desk?", a: "LCA Desk is a regulatory-grade compliance operating system for local content programs. It digitizes mandated filing, validation, regulator review, and audit workflows for extractive industries. The platform is configurable per jurisdiction, starting with Guyana." },
  { q: "Who uses LCA Desk?", a: "Both sides of the compliance relationship. Industry users (operators, contractors, subcontractors, suppliers) prepare and submit filings. Regulators and secretariats receive, review, validate, and audit those submissions. Each role has purpose-built workflows." },
  { q: "How is this different from a filing portal?", a: "Filing portals handle document upload. LCA Desk manages the full compliance lifecycle: structured data collection, rules-based validation, AI-assisted narrative drafting, reviewer queues, resubmission handling, evidence linking, and immutable audit trails." },
  { q: "What penalties exist for non-compliance?", a: "Penalties vary by jurisdiction. In Guyana, penalties range from GY$1 million to GY$50 million per offence. False or misleading submissions carry criminal liability. The Secretariat actively audits and follows up on late or missing filings." },
  { q: "How do I get started?", a: "For industry users, request a demo or start a 30-day trial with full platform access. For regulators and government bodies, contact us to discuss a pilot deployment scoped to your jurisdiction and filing requirements." },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
          Frequently Asked Questions
        </motion.h2>
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
