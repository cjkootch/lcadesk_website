"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
            <Image src="/illustrations/hero-about.png" alt="LCA Desk team connecting Houston and Guyana energy sectors" width={600} height={400} quality={90} className="w-full rounded-2xl" />
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
              <Image
                src="/illustrations/founder-cole.png"
                alt="Cole Kutschinski, Founder of LCA Desk"
                width={160}
                height={160}
                quality={90}
                className="w-40 h-40 rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-display text-xl md:text-2xl text-text-primary mb-4 leading-snug">
                Founded by an Operator Who Understands Workflow Complexity
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                LCA Desk was built by Cole Kutschinski, a technology founder and executive with 17+ years of experience leading operational transformation across complex, highly regulated industries.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Having built and scaled systems across enterprise environments, Cole saw firsthand how manual reporting processes consume time, introduce risk, and slow supplier growth. LCA Desk was created to solve that problem by turning disconnected workflows into accurate, audit-ready local content reports.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                Today, the platform helps suppliers, contractors, and operators move from spreadsheets and manual filings to a modern compliance workflow built for speed and accuracy.
              </p>
              <a
                href="https://www.linkedin.com/in/cole-kutschinski"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                <Image src="/illustrations/linkedin-icon.webp" alt="LinkedIn" width={20} height={20} className="w-5 h-5" /> Cole Kutschinski on LinkedIn
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
