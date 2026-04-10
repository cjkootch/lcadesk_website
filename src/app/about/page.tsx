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
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                href="/contact"
                className="text-accent hover:underline font-medium"
              >
                Get in touch &rarr;
              </Link>
            </p>
          </motion.div>
          <div className="hidden lg:block">
            <img src="/illustrations/hero-about.png" alt="LCA Desk team connecting Houston and Guyana energy sectors" className="w-full rounded-2xl" loading="eager" />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="shrink-0">
              <img
                src="/illustrations/founder-cole.png"
                alt="Cole Kutschinski, Founder of LCA Desk"
                className="w-40 h-40 rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">Founder</p>
              <h2 className="font-display text-2xl text-text-primary mb-1">Cole Kutschinski</h2>
              <p className="text-sm text-text-muted mb-4">Founder &amp; CEO, LCA Desk</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Cole built LCA Desk after years working in Guyana&apos;s oil and gas sector, where he saw firsthand how contractors struggled with local content compliance — fragmented spreadsheets, unclear filing rules, and the constant risk of penalties up to GY$50 million. He founded LCA Desk to replace that chaos with a single platform built specifically for the regulatory workflows that extractive industries face.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                Based in Houston, Texas, Cole leads product development and strategy, working closely with regulators and industry operators to build compliance infrastructure that scales across jurisdictions.
              </p>
              <a
                href="https://www.linkedin.com/in/cole-kutschinski"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        headline="Ready to simplify LCA compliance?"
        body="Start your 30-day trial — full Professional access, card collected at signup."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
