"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2, Scale, FileText, Users, AlertTriangle, DollarSign,
  ShieldCheck, Calendar, ArrowRight, BarChart3, Globe, Clock,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import EmailCapture from "@/components/EmailCapture";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const submissionTypes = [
  { type: "Nigerian Content Plan", due: "Prior to project commencement", period: "Per project", desc: "Detailed plan showing local content commitments across all project phases." },
  { type: "Nigerian Content Performance Report", due: "Quarterly / Annually", period: "Ongoing", desc: "Progress report on local content targets vs. actual performance." },
  { type: "Nigerian Content Compliance Certificate", due: "As required", period: "Per project", desc: "Certificate confirming compliance with minimum Nigerian content levels." },
  { type: "R&D Contribution Report", due: "Annually", period: "Annual", desc: "Report on 1% of contract value contributed to R&D fund." },
  { type: "Workforce Development Plan", due: "Prior to project", period: "Per project", desc: "Plan for Nigerian workforce training, succession, and technology transfer." },
];

const keyProvisions = [
  { icon: Users, title: "Nigerian Employment Targets", desc: "Operators must employ Nigerians in management positions within 5 years and achieve 80%+ Nigerian workforce across all categories. The NCDMB tracks compliance across 106 workforce categories." },
  { icon: DollarSign, title: "Procurement Minimums", desc: "Minimum Nigerian content levels set for each service category — ranging from 45% to 100%. Operators must give first consideration to Nigerian companies for all contracts." },
  { icon: Building2, title: "First Consideration for Nigerians", desc: "Section 3(1): All operators must give first consideration to Nigerian companies in procurement and services. Foreign companies may only be engaged when no qualified Nigerian alternative exists." },
  { icon: BarChart3, title: "106 Service Categories", desc: "The Act prescribes minimum Nigerian content percentages across 106 categories including fabrication, welding, engineering, marine transport, insurance, and legal services." },
  { icon: ShieldCheck, title: "R&D Fund Contribution", desc: "1% of every contract value above US$100 million must be contributed to the Nigerian Content Development Fund for research and capacity building." },
  { icon: Globe, title: "Technology Transfer", desc: "Operators must implement technology transfer programs and provide skills development for Nigerian nationals. International staff must have Nigerian understudies." },
];

const penalties = [
  { offence: "Non-compliance with Nigerian Content Plan", penalty: "5% of project value", severity: "critical" },
  { offence: "Failure to submit required reports", penalty: "Project cancellation risk", severity: "critical" },
  { offence: "Engaging foreign company without NCDMB approval", penalty: "Contract nullification", severity: "high" },
  { offence: "False information in Nigerian Content Plan", penalty: "Debarment from future projects", severity: "high" },
  { offence: "Failure to meet minimum Nigerian content levels", penalty: "Plan rejection / project halt", severity: "medium" },
];

const majorOperators = [
  "Shell Petroleum Development Company",
  "TotalEnergies Nigeria",
  "ExxonMobil Nigeria",
  "Chevron Nigeria",
  "Seplat Energy",
  "Dangote Refinery",
  "NNPC (Nigerian National Petroleum Company)",
  "Eni / NAOC",
];

export default function NigeriaPage() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Nigeria"
        headline="NCDMB Compliance — Nigeria"
        sub="Africa's largest oil producer. 1,500+ companies regulated by the Nigerian Content Development & Monitoring Board. LCA Desk Nigeria module coming Q3 2026."
        geometricVariant="waves"
        heroImage={{ src: "/illustrations/market-nigeria.svg", alt: "Nigeria NCDMB compliance" }}
      />

      {/* Key stats */}
      <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "1,500+", label: "Companies Filing" },
              { value: "106", label: "Service Categories" },
              { value: "5%", label: "Max Penalty (of project value)" },
              { value: "2010", label: "Act Enacted" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                <p className="text-emerald-200 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory overview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <motion.p custom={0} variants={fadeUp} className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Regulatory Framework</motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">Nigerian Oil and Gas Industry Content Development Act (2010)</motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-text-secondary max-w-3xl mb-10 leading-relaxed">
              Nigeria&apos;s local content law is one of the most comprehensive in Africa. The NCDMB oversees compliance across the entire petroleum value chain, with powers to approve or reject contracts, halt projects, and impose penalties.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { label: "Regulatory Body", value: "NCDMB", sub: "Nigerian Content Development & Monitoring Board" },
              { label: "Key Law", value: "NOGICD Act 2010", sub: "Nigerian Oil & Gas Industry Content Development Act" },
              { label: "Headquarters", value: "Yenagoa, Bayelsa State", sub: "With liaison offices in Lagos and Abuja" },
              { label: "Scope", value: "Entire Petroleum Value Chain", sub: "Upstream, midstream, downstream, and services" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1">{item.label}</p>
                <p className="text-sm font-medium text-text-primary">{item.value}</p>
                <p className="text-xs text-text-secondary mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key provisions */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Key Provisions</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">What the NOGICD Act Requires</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            The Act sets minimum Nigerian content levels across every category of oil and gas operations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyProvisions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-border p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission types */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Filing Requirements</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-10">Required Submissions</h2>

          <div className="space-y-4">
            {submissionTypes.map((item, i) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-surface rounded-xl border border-border p-5 flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary mb-1">{item.type}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex gap-4 sm:flex-col sm:text-right sm:min-w-[140px] flex-shrink-0">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-text-muted">Due</p>
                    <p className="text-xs font-medium text-text-primary">{item.due}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-text-muted">Frequency</p>
                    <p className="text-xs font-medium text-text-primary">{item.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-3 text-center">Enforcement</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">Non-Compliance Penalties</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-10 text-center">
            The NCDMB has broad enforcement powers, including the authority to cancel contracts, halt projects, and debar companies from future bidding.
          </p>

          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b bg-red-50/50">
                  <th className="px-6 py-4 font-semibold text-text-primary">Offence</th>
                  <th className="px-6 py-4 font-semibold text-text-primary text-right">Consequence</th>
                </tr>
              </thead>
              <tbody>
                {penalties.map((p, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-6 py-4 text-text-secondary">{p.offence}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                        p.severity === "critical" ? "bg-red-100 text-red-700" :
                        p.severity === "high" ? "bg-orange-100 text-orange-700" :
                        "bg-amber-100 text-amber-700"
                      }`}>
                        {p.penalty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Major operators */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Key Players</p>
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Major Operators in Nigeria</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {majorOperators.map((name) => (
              <div key={name} className="bg-surface rounded-xl border border-border p-4 text-center">
                <p className="text-sm font-medium text-text-primary">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison with Guyana */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Nigeria vs. Guyana: How the Laws Compare</h2>
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-surface">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">Aspect</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1F3}\u{1F1EC}"} Nigeria</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1EC}\u{1F1FE}"} Guyana</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Law", ng: "NOGICD Act 2010", gy: "Local Content Act 2021" },
                  { aspect: "Regulator", ng: "NCDMB", gy: "Local Content Secretariat" },
                  { aspect: "Service Categories", ng: "106 categories", gy: "40+ categories" },
                  { aspect: "Max Penalty", ng: "5% of project value", gy: "GY$50 million" },
                  { aspect: "Key Filings", ng: "Content Plan + Performance Reports", gy: "Half-Yearly + Annual + Master Plan" },
                  { aspect: "Workforce Scope", ng: "106 job categories", gy: "11 employment categories" },
                  { aspect: "LCA Desk Support", ng: "Coming Q3 2026", gy: "Live now" },
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-5 py-3 font-medium text-text-primary">{row.aspect}</td>
                    <td className="px-5 py-3 text-text-secondary">{row.ng}</td>
                    <td className="px-5 py-3 text-text-secondary">{row.gy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <EmailCapture
            headline="Get notified when Nigeria launches"
            description="Be the first to know when the LCA Desk Nigeria module goes live. We'll also send you NCDMB regulatory updates."
            list="newsletter"
            variant="card"
          />
        </div>
      </section>

      <CTABanner
        headline="Already filing in Guyana?"
        body="LCA Desk is live for Guyana's Local Content Act. Start your 30-day trial today."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "View Guyana Module", href: "/markets/guyana" }}
      />
    </main>
  );
}
