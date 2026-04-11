"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, FileCheck, Scale, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import EmailCapture from "@/components/EmailCapture";

const vp = { once: true as const, margin: "-60px" as const };

interface Jurisdiction {
  flag: string;
  country: string;
  regulator: string;
  filingTypes: string;
  cadence: string;
  submissionMethod: string;
  status: "Live" | "In Development" | "Roadmap" | "Early Access" | "Enterprise Roadmap";
  href: string;
  priority: number;
  detail: string;
}

const jurisdictions: Jurisdiction[] = [
  {
    flag: "\u{1F1EC}\u{1F1FE}",
    country: "Guyana",
    regulator: "Local Content Secretariat",
    filingTypes: "Half-yearly reports (H1/H2), annual plans, master plans, performance reports",
    cadence: "Semi-annual + annual",
    submissionMethod: "Email + Excel/PDF (transitioning to digital)",
    status: "Live",
    href: "/markets/guyana",
    priority: 1,
    detail: "Reference deployment. All 5 LCA submission types supported under Version 4.1 guidelines. Over 1,300 companies with filing obligations. Penalties range from GY$1M to GY$50M per offence.",
  },
  {
    flag: "\u{1F1F3}\u{1F1E6}",
    country: "Namibia",
    regulator: "Ministry of Mines and Energy",
    filingTypes: "Annual performance reporting, procurement consolidation, employment/training reports",
    cadence: "Annual + quarterly procurement",
    submissionMethod: "Process being formalized (draft policy stage)",
    status: "In Development",
    href: "/markets/namibia",
    priority: 2,
    detail: "Draft upstream petroleum local content policy defines annual performance reporting, employment/training reporting, and procurement achievement consolidation. Opportunity to become the default system as the policy operationalizes.",
  },
  {
    flag: "\u{1F1F2}\u{1F1FF}",
    country: "Mozambique",
    regulator: "INP (Instituto Nacional de Petroleo)",
    filingTypes: "REFC quarterly filing (employment, training, national contracting)",
    cadence: "Quarterly",
    submissionMethod: "Template-based email/portal upload (assumed)",
    status: "In Development",
    href: "/markets/mozambique",
    priority: 3,
    detail: "DM 55/2024 creates a regulator-facing quarterly REFC requirement. Clear recurring cadence with high administrative burden. Portuguese language, INP-specific schemas, and evidence requirements linked to contracting and workforce.",
  },
  {
    flag: "\u{1F1EC}\u{1F1ED}",
    country: "Ghana",
    regulator: "Petroleum Commission / Minerals Commission",
    filingTypes: "Annual plans, performance reports, procurement plans, quarterly employment/training",
    cadence: "Annual + quarterly",
    submissionMethod: "Document-based with partial portal (ePortal for procurement/tenders)",
    status: "Roadmap",
    href: "/markets/ghana",
    priority: 4,
    detail: "Dual-sector coverage. Petroleum Commission requires annual plans under LI 2204 and performance reports within 45 days. Minerals Commission requires procurement plans under LI 2431 with semi-annual implementation reports.",
  },
  {
    flag: "\u{1F1FF}\u{1F1F2}",
    country: "Zambia",
    regulator: "Ministry of Mines and Minerals Development",
    filingTypes: "Mining local participation reporting",
    cadence: "Per Statutory Instrument No. 68/2025",
    submissionMethod: "Mining Cadastre Portal (report submission available)",
    status: "Roadmap",
    href: "#",
    priority: 5,
    detail: "New mining local content rules adopted via SI No. 68 of 2025. Mining Cadastre Portal already supports report submission. Integration opportunity as the statutory instrument is implemented.",
  },
  {
    flag: "\u{1F1F8}\u{1F1F7}",
    country: "Suriname",
    regulator: "Local Content Board",
    filingTypes: "Policy-stage enablement (templates and registries being designed)",
    cadence: "To be defined",
    submissionMethod: "Pre-template stage",
    status: "Early Access",
    href: "/markets/suriname",
    priority: 6,
    detail: "Government created a Local Content Board to coordinate policy. Opportunity to provide turnkey filing workflow as the operational mechanism. Block 58 development drives urgency.",
  },
  {
    flag: "\u{1F1F3}\u{1F1EC}",
    country: "Nigeria",
    regulator: "NCDMB",
    filingTypes: "Statutory reports: procurement, employment, R&D, technology transfer, marine services",
    cadence: "Quarterly + annual",
    submissionMethod: "NOGIC JQS portal + email templates",
    status: "Enterprise Roadmap",
    href: "/markets/nigeria",
    priority: 7,
    detail: "Extensive reporting ecosystem with strong incumbent portal (NOGIC JQS). Better approached via partnership/integration once LCA Desk has multi-country credibility. Niche opportunities exist in regulator intake add-ons.",
  },
];

const statusColors: Record<string, string> = {
  "Live": "bg-accent text-white",
  "In Development": "bg-blue-100 text-blue-700",
  "Roadmap": "bg-gray-100 text-text-muted",
  "Early Access": "bg-amber-100 text-amber-700",
  "Enterprise Roadmap": "bg-purple-100 text-purple-700",
};

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Jurisdiction Coverage"
        headline="Configurable Compliance Infrastructure for Every Local Content Regime"
        sub="Each country runs on a jurisdiction pack that defines filing schemas, validation rules, deadlines, evidence requirements, and export formats. One platform. Jurisdiction-specific compliance."
        geometricVariant="waves"
        heroImage={{ src: "/illustrations/hero-markets.png", alt: "Global jurisdiction coverage" }}
      />

      {/* Strategic approach */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Globe, title: "Configuration, Not Custom Code", desc: "Adding a new jurisdiction means configuring a pack, not building bespoke software. Filing schemas, validation rules, and export formats are parameterized." },
              { icon: Scale, title: "Grounded in Official Requirements", desc: "Every jurisdiction pack is built against published regulatory templates, government-issued guidelines, and official filing rules. No generic forms." },
              { icon: Clock, title: "Prioritized by Readiness", desc: "Expansion follows a sequencing model based on filing clarity, digital gap, regulator mandate authority, and competitive landscape." },
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <card.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{card.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdiction detail cards */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            Jurisdiction Roadmap
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Sequenced by regulatory readiness and adoption feasibility, not market size.
          </motion.p>

          <div className="space-y-5">
            {jurisdictions.map((j, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl border border-border p-6 md:p-7 relative overflow-hidden">
                {j.status === "Live" && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-teal" />}
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Header */}
                  <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                    <span className="text-3xl">{j.flag}</span>
                    <div>
                      <h3 className="font-semibold text-text-primary text-lg">{j.country}</h3>
                      <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${statusColors[j.status]}`}>{j.status}</span>
                    </div>
                  </div>

                  {/* Detail */}
                  <div className="flex-1 space-y-3">
                    <p className="text-sm text-text-secondary leading-relaxed">{j.detail}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-text-muted">
                      <div><span className="font-semibold text-text-secondary">Regulator:</span> {j.regulator}</div>
                      <div><span className="font-semibold text-text-secondary">Cadence:</span> {j.cadence}</div>
                      <div className="sm:col-span-2"><span className="font-semibold text-text-secondary">Filing types:</span> {j.filingTypes}</div>
                      <div className="sm:col-span-2"><span className="font-semibold text-text-secondary">Current method:</span> {j.submissionMethod}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0 md:self-center">
                    {j.status === "Live" ? (
                      <Link href={j.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all">
                        Explore <ArrowRight size={14} />
                      </Link>
                    ) : j.href !== "#" ? (
                      <Link href={j.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted hover:text-accent hover:gap-2.5 transition-all">
                        Learn more <ArrowRight size={14} />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-text-muted text-sm mt-10">
            Additional jurisdictions added based on regulatory readiness and demand.{" "}
            <Link href="/contact" className="text-accent hover:underline">Contact us</Link> to discuss your jurisdiction.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Operating in a jurisdiction not listed?"
        body="LCA Desk jurisdiction packs are configurable. If your country has mandated local content reporting, we can scope a deployment."
        primaryCTA={{ label: "Request a Demo", href: "/demo" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
