"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";

const filings = [
  {
    type: "H1 Half-Yearly Report",
    dueDate: "July 30",
    period: "Jan 1 – Jun 30",
    status: "Active",
  },
  {
    type: "H2 Half-Yearly Report",
    dueDate: "January 30",
    period: "Jul 1 – Dec 31",
    status: "Active",
  },
  {
    type: "Annual Local Content Plan",
    dueDate: "As required",
    period: "Annual",
    status: "Active",
  },
  {
    type: "Local Content Master Plan",
    dueDate: "As required",
    period: "Multi-year",
    status: "Active",
  },
  {
    type: "Annual Performance Report",
    dueDate: "As required",
    period: "Annual",
    status: "Active",
  },
];

export default function LCAFilingCalendarPage() {
  return (
    <>
      <HeroSection
        eyebrow="Filing Calendar"
        headline="LCA Filing Calendar — Guyana"
        sub="Key dates and deadlines for all mandatory Local Content Act submissions."
        geometricVariant="grid"
      />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl border overflow-hidden"
        >
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-6 py-4 font-semibold">Submission Type</th>
                <th className="px-6 py-4 font-semibold">Due Date</th>
                <th className="px-6 py-4 font-semibold">Period</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filings.map((filing, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="px-6 py-4 font-medium">{filing.type}</td>
                  <td className="px-6 py-4 text-text-secondary">
                    {filing.dueDate}
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {filing.period}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block text-xs font-medium bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full">
                      {filing.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="text-text-secondary text-xs mt-6 text-center">
          Based on LCA v4.1 guidelines (June 2025). Always confirm deadlines
          with the Local Content Secretariat.
        </p>
      </section>

      <CTABanner
        headline="Never miss an LCA filing deadline."
        body="LCA Desk sends automated reminders and manages your filing calendar. Start free."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
