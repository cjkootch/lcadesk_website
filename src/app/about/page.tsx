"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About"
        headline="Built by Energy Traders Who Needed It Themselves"
        sub="LCA Desk was born from firsthand experience navigating Guyana's Local Content Act."
        geometricVariant="topology"
      />

      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-text-secondary leading-relaxed"
        >
          <p>
            LCA Desk is built by a team that has spent years working in
            Guyana&apos;s oil and gas sector. We saw the compliance burden
            firsthand — complex spreadsheets, overlapping deadlines, and the
            constant risk of penalties.
          </p>
          <p>
            We built the software we wished existed. A single platform that
            handles all five mandatory LCA submission types, uses AI to draft
            the hardest sections, and keeps you ahead of every deadline.
          </p>
          <p>
            Based in Houston, Texas, we serve contractors, subcontractors, and
            licensees across Guyana&apos;s petroleum sector — and we&apos;re
            expanding to Nigeria, Trinidad, Ghana, Mozambique, and Namibia.
          </p>
          <p>
            <Link
              href="https://stabroekadvisory.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Learn more about Stabroek Advisory &rarr;
            </Link>
          </p>
        </motion.div>
      </section>

      <CTABanner
        headline="Ready to simplify LCA compliance?"
        body="Start your free 14-day trial — full Pro access, no credit card required."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
