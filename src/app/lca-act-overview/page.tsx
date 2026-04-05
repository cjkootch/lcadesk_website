"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";

export default function LCAActOverviewPage() {
  return (
    <>
      <HeroSection
        eyebrow="LCA Act"
        headline="Local Content Act 2021 — Overview"
        sub="Key provisions, requirements, and compliance obligations under Guyana's Local Content Act."
        geometricVariant="grid"
      />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">
              What is the Local Content Act?
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The Local Content Act 2021 is Guyana&apos;s landmark legislation
              designed to ensure that the country&apos;s petroleum sector
              delivers meaningful economic benefits to Guyanese citizens and
              businesses. Passed into law in 2021, the Act establishes mandatory
              requirements for local participation in employment, procurement,
              training, and capacity development across all petroleum operations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">
              Who Must Comply?
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The Act applies to all contractors, sub-contractors, and licensees
              operating in Guyana&apos;s petroleum sector. This includes
              operators, service companies, and any entity that holds or
              benefits from a petroleum agreement or licence. Compliance is
              mandatory regardless of company size or origin.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">
              Key Provisions
            </h2>
            <ul className="space-y-3 text-text-secondary leading-relaxed">
              <li>
                <strong className="text-text-primary">Section 21 — Reporting:</strong>{" "}
                Requires regulated entities to submit half-yearly reports
                detailing local content performance across employment,
                procurement, training, and capacity development.
              </li>
              <li>
                <strong className="text-text-primary">Section 12 — Requirements:</strong>{" "}
                Sets out specific local content requirements including minimum
                thresholds for Guyanese employment and local procurement targets
                across defined categories.
              </li>
              <li>
                <strong className="text-text-primary">Section 44 — Penalties:</strong>{" "}
                Establishes a penalty framework for non-compliance, including
                financial penalties and potential suspension of operations.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">
              Filing Requirements
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Regulated entities must prepare and submit five types of
              documents to the Local Content Secretariat:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-text-secondary">
              <li>H1 Half-Yearly Report (January – June)</li>
              <li>H2 Half-Yearly Report (July – December)</li>
              <li>Annual Local Content Plan</li>
              <li>Local Content Master Plan</li>
              <li>Annual Performance Report</li>
            </ol>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">
              Penalties
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Non-compliance with the Local Content Act can result in financial
              penalties ranging from GY$1,000,000 to GY$50,000,000, depending
              on the nature and severity of the violation. Repeat offenders may
              face escalating penalties and potential suspension of petroleum
              operations.
            </p>
          </div>
        </motion.div>
      </section>

      <CTABanner
        headline="Stay compliant with the Local Content Act."
        body="LCA Desk manages all five mandatory submissions. Start your free trial today."
        primaryCTA={{ label: "Start Free Trial", href: "/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
