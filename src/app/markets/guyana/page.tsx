"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const submissionTypes = [
  { type: "H1 Half-Yearly Report", due: "July 30" },
  { type: "H2 Half-Yearly Report", due: "January 30" },
  { type: "Annual Local Content Plan", due: "As required" },
  { type: "Local Content Master Plan", due: "As required" },
  { type: "Annual Performance Report", due: "As required" },
];

export default function GuyanaPage() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="\u{1F1EC}\u{1F1FE} Guyana"
        headline="Local Content Act Compliance — Guyana"
        sub="The world's fastest-growing economy. 1,300+ companies required to file. LCA Desk is the only dedicated software."
        geometricVariant="topology"
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />

      {/* Regulatory Overview */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="font-display text-3xl text-text-primary mb-8">
            Regulatory Overview
          </h2>

          <div className="space-y-6 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                  Regulatory Body
                </p>
                <p className="text-sm font-medium text-text-primary">
                  Local Content Secretariat
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  Under Ministry of Natural Resources
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                  Templates
                </p>
                <p className="text-sm font-medium text-text-primary">
                  Version 4.1, June 2025
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                  Penalties
                </p>
                <p className="text-sm font-medium text-text-primary">
                  GY$1M&ndash;GY$50M per offence
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                  Companies Filing
                </p>
                <p className="text-sm font-medium text-text-primary">1,300+</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Submission Types */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={1}
        >
          <h3 className="font-display text-2xl text-text-primary mb-4">
            Submission Types
          </h3>
          <div className="rounded-xl border border-border bg-card overflow-hidden mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">
                    Submission Type
                  </th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">
                    Due Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {submissionTypes.map((item, i) => (
                  <tr
                    key={item.type}
                    className={
                      i < submissionTypes.length - 1
                        ? "border-b border-border"
                        : ""
                    }
                  >
                    <td className="px-5 py-3 text-text-primary font-medium">
                      {item.type}
                    </td>
                    <td className="px-5 py-3 text-text-secondary">
                      {item.due}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Filing Calendar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={2}
        >
          <h3 className="font-display text-2xl text-text-primary mb-4">
            Filing Calendar
          </h3>
          <div className="rounded-xl border border-border bg-card p-6 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-3 text-xs uppercase tracking-wider text-text-muted font-medium">
                    Submission Type
                  </th>
                  <th className="text-left pb-3 text-xs uppercase tracking-wider text-text-muted font-medium">
                    Due Date
                  </th>
                  <th className="text-left pb-3 text-xs uppercase tracking-wider text-text-muted font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {submissionTypes.map((item, i) => (
                  <tr
                    key={`cal-${item.type}`}
                    className={
                      i < submissionTypes.length - 1
                        ? "border-b border-border"
                        : ""
                    }
                  >
                    <td className="py-3 text-text-primary font-medium">
                      {item.type}
                    </td>
                    <td className="py-3 text-text-secondary">{item.due}</td>
                    <td className="py-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Supported
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted italic">
            All dates based on LCA v4.1 guidelines. Confirm with the
            Secretariat for updates.
          </p>
        </motion.div>
      </section>

      <CTABanner
        headline="Ready to simplify your Guyana LCA filings?"
        body="Start your free 14-day trial with full Pro access."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
      />
    </main>
  );
}
