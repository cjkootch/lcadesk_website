"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";

const steps = [
  {
    title: "Understand your obligations",
    description:
      "Determine which submission types apply to your entity based on your role as a contractor, sub-contractor, or licensee.",
  },
  {
    title: "Gather your data",
    description:
      "Collect employment, procurement, training, and capacity development data from all relevant departments and partners.",
  },
  {
    title: "Prepare your reports",
    description:
      "Use the v4.1 templates or LCA Desk's guided wizard to structure your data into compliant report formats.",
  },
  {
    title: "Review for compliance",
    description:
      "Check for gaps, inconsistencies, and missing fields. LCA Desk's Compliance Gap Detection can automate this step.",
  },
  {
    title: "Submit to the Secretariat",
    description:
      "File before the deadline. Keep acknowledgement receipts and confirmation of submission for your records.",
  },
  {
    title: "Maintain records",
    description:
      "Keep all supporting documentation for potential audits. The Secretariat may request additional evidence at any time.",
  },
];

export default function LCAComplianceGuidePage() {
  return (
    <>
      <HeroSection
        eyebrow="Guide"
        headline="LCA Compliance Guide"
        sub="Step-by-step guide to preparing and submitting your Local Content Act filings."
        geometricVariant="grid"
      />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center text-lg">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-surface rounded-xl border border-border p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-text-primary mb-1">Need help with the Half-Yearly Report?</p>
            <p className="text-sm text-text-secondary">Our detailed guide covers deadlines, the 3 required sub-reports, penalties, and common filing mistakes.</p>
          </div>
          <Link href="/lca-half-yearly-report-guide" className="inline-flex items-center gap-2 rounded-lg border-2 border-accent text-accent px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:text-white transition-all whitespace-nowrap">
            Half-Yearly Report Guide →
          </Link>
        </div>
      </section>

      <CTABanner
        headline="Let LCA Desk handle the complexity."
        body="Start your free 14-day trial — full Pro access, no credit card required."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
