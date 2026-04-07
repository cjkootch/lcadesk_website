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
        headline="The AI-Native Platform for Local Content Compliance"
        sub="LCA Desk is the world's only purpose-built software for Local Content Act compliance — from guided data entry to AI narrative drafting."
        geometricVariant="topology"
      />

      <div className="hidden lg:block mt-12 max-w-5xl mx-auto px-6">
        <img src="/illustrations/hero-about.png" alt="LCA Desk team connecting Houston and Guyana energy sectors" className="w-full max-w-2xl mx-auto rounded-2xl opacity-90" loading="eager" />
      </div>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-text-secondary leading-relaxed"
        >
          <p>
            LCA Desk is the world&apos;s only AI-native Local Content Act compliance platform.
            We handle all five mandatory submission types — half-yearly reports, annual plans,
            master plans, performance reports, and procurement filings — with AI narrative
            drafting, compliance gap detection, and one-click Secretariat-ready exports.
          </p>
          <p>
            Built by a team that has spent years working in Guyana&apos;s oil and gas sector,
            we saw the compliance burden firsthand — complex spreadsheets, overlapping deadlines,
            and the constant risk of penalties. We built the software we wished existed.
          </p>
          <p>
            Based in Houston, Texas, we serve contractors, subcontractors, and
            licensees across Guyana&apos;s petroleum sector — and we&apos;re
            expanding to Nigeria, Trinidad, Ghana, Mozambique, Namibia, and Suriname.
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
        body="Start your 30-day trial — full Professional access, card collected at signup."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
