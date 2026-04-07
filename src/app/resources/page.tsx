"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import EmailCapture from "@/components/EmailCapture";

const resources = [
  {
    href: "/lca-filing-calendar",
    icon: "\uD83D\uDCC5",
    title: "LCA Filing Calendar",
    description: "Key dates and deadlines for all 5 LCA submission types.",
  },
  {
    href: "/lca-act-overview",
    icon: "\uD83D\uDCCB",
    title: "LCA Act Overview",
    description:
      "Summary of Guyana's Local Content Act 2021 and key provisions.",
  },
  {
    href: "/lca-compliance-guide",
    icon: "\uD83D\uDCD8",
    title: "Compliance Guide",
    description: "Step-by-step guide to preparing your LCA filings.",
  },
  {
    href: "/blog",
    icon: "\uD83D\uDCF0",
    title: "Blog",
    description: "Expert analysis and compliance insights.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Resources"
        headline="LCA Compliance Resources"
        sub="Guides, calendars, and reference materials for local content compliance."
        geometricVariant="grid"
      />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={resource.href}
                className="block bg-card rounded-xl border p-6 hover:border-accent/30 transition"
              >
                <span className="text-2xl">{resource.icon}</span>
                <h3 className="font-semibold text-lg mt-3 mb-2">
                  {resource.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {resource.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-xl mx-auto px-6 pb-16">
        <EmailCapture
          headline="Get LCA filing deadline reminders"
          description="We'll email you before each filing deadline — 30, 14, and 7 days out. Free, no account required."
          list="filing_reminders"
          variant="card"
        />
      </section>

      <CTABanner
        headline="Ready to simplify LCA compliance?"
        body="Start your 30-day trial — full Professional access, card collected at signup."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
