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

      <CTABanner
        headline="Let LCA Desk handle the complexity."
        body="Start your free 14-day trial — full Pro access, no credit card required."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
