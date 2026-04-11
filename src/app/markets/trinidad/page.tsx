"use client";

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
  { type: "Local Content Plan", due: "Before contract award", period: "Per contract", desc: "Plan detailing local content commitments across employment, procurement, and training." },
  { type: "Quarterly Performance Report", due: "Quarterly", period: "Quarterly", desc: "Progress on local content targets vs actuals for the quarter." },
  { type: "Annual Compliance Report", due: "Annually", period: "Annual", desc: "Comprehensive annual review of local content performance." },
  { type: "Training & Development Report", due: "Annually", period: "Annual", desc: "Details of training expenditure, programs delivered, and nationals trained." },
  { type: "Procurement Utilization Report", due: "Annually", period: "Annual", desc: "Breakdown of local vs foreign procurement spend by category." },
];

const keyProvisions = [
  { icon: Users, title: "National Employment Targets", desc: "Operators must maximize employment of Trinidad & Tobago nationals at all levels. Succession plans required for expatriate positions with defined timelines for localization." },
  { icon: DollarSign, title: "Local Procurement Requirements", desc: "First consideration to T&T-registered companies for goods and services. Procurement plans must demonstrate engagement with local suppliers before seeking international alternatives." },
  { icon: Globe, title: "Technology Transfer & Training", desc: "Mandatory technology transfer programs. Operators must fund training for local employees and contribute to the Energy Sector Skills Development Programme." },
  { icon: ShieldCheck, title: "Local Content Certification", desc: "Companies must obtain Local Content Certification from the MEEI demonstrating compliance with policy targets across employment, procurement, and training." },
  { icon: Building2, title: "Joint Venture Requirements", desc: "Foreign companies encouraged to form JVs with local firms. Local equity participation targets in service contracts and subcontracts." },
  { icon: BarChart3, title: "Reporting & Monitoring", desc: "Regular reporting to the PLCC on local content performance. The Committee monitors compliance and advises the Minister on policy adjustments." },
];

const penalties = [
  { offence: "Non-compliance with Local Content Plan", penalty: "Contract renegotiation / termination", severity: "critical" },
  { offence: "Failure to submit required reports", penalty: "Contract review + monitoring", severity: "high" },
  { offence: "False reporting or misrepresentation", penalty: "Debarment from future contracts", severity: "high" },
  { offence: "Failure to meet employment targets", penalty: "Mandatory remediation plan", severity: "medium" },
  { offence: "Non-compliance with procurement targets", penalty: "Increased monitoring + plan revision", severity: "medium" },
];

const majorOperators = [
  "bp Trinidad and Tobago",
  "Shell Trinidad and Tobago",
  "BHP (formerly BHP Billiton)",
  "EOG Resources",
  "DeNovo Energy",
  "Heritage Petroleum Company",
  "Paria Fuel Trading Company",
  "National Gas Company (NGC)",
];

export default function TrinidadPage() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Trinidad & Tobago"
        headline="Local Content Compliance — Trinidad & Tobago"
        sub="Caribbean's largest oil & gas producer. 100+ companies under MEEI oversight. Same timezone as Houston. LCA Desk T&T module coming 2027."
        geometricVariant="waves"
        heroImage={{ src: "/illustrations/market-trinidad.svg", alt: "Trinidad and Tobago energy sector" }}
      />

      {/* Key stats */}
      <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100+", label: "Companies in Petroleum Sector" },
              { value: "30+", label: "Local Content Categories" },
              { value: "Contract", label: "Penalties Apply" },
              { value: "2004", label: "Policy Framework Established" },
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
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">Trinidad &amp; Tobago Local Content Policy Framework (2004, updated 2018)</motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-text-secondary max-w-3xl mb-10 leading-relaxed">
              Trinidad &amp; Tobago&apos;s local content framework is one of the longest-standing in the Caribbean. The MEEI and Permanent Local Content Committee (PLCC) oversee compliance across the petroleum sector, with powers to review contracts, require remediation plans, and enforce procurement and employment targets.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { label: "Regulatory Body", value: "MEEI / PLCC", sub: "Ministry of Energy and Energy Industries & Permanent Local Content Committee" },
              { label: "Key Framework", value: "Local Content Policy Framework", sub: "Established 2004, updated 2018" },
              { label: "Headquarters", value: "Port of Spain, Trinidad", sub: "Ministry of Energy and Energy Industries" },
              { label: "Scope", value: "Petroleum Sector", sub: "Upstream, midstream, downstream, and energy services" },
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
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">What the Policy Framework Requires</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            The framework sets targets for local employment, procurement, and technology transfer across all petroleum operations.
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
            The MEEI and PLCC enforce compliance through contract-level mechanisms, including renegotiation, increased monitoring, and debarment from future contracts.
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
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Major Operators in Trinidad &amp; Tobago</h2>
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
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Trinidad &amp; Tobago vs. Guyana: How the Frameworks Compare</h2>
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-surface">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">Aspect</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1F9}\u{1F1F9}"} Trinidad &amp; Tobago</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1EC}\u{1F1FE}"} Guyana</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Law", tt: "MEEI Policy Framework (2004/2018)", gy: "Local Content Act 2021" },
                  { aspect: "Regulator", tt: "PLCC / MEEI", gy: "Local Content Secretariat" },
                  { aspect: "Categories", tt: "30+ categories", gy: "40+ categories" },
                  { aspect: "Max Penalty", tt: "Contract termination", gy: "GY$50 million" },
                  { aspect: "Key Filings", tt: "LC Plan + Quarterly Reports", gy: "Half-Yearly + Annual + Master Plan" },
                  { aspect: "Workforce Scope", tt: "Succession planning focus", gy: "11 employment categories" },
                  { aspect: "LCA Desk Support", tt: "Coming 2027", gy: "Live now" },
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-5 py-3 font-medium text-text-primary">{row.aspect}</td>
                    <td className="px-5 py-3 text-text-secondary">{row.tt}</td>
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
            headline="Get notified when Trinidad & Tobago launches"
            description="Be the first to know when the LCA Desk T&T module goes live. We'll also send you MEEI regulatory updates."
            list="newsletter"
            variant="card"
          />
        </div>
      </section>

      <CTABanner
        headline="Already filing in Guyana?"
        body="LCA Desk is live for Guyana's Local Content Act. Start your 30-day trial today."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "View Guyana Module", href: "/markets/guyana" }}
      />
    </main>
  );
}
