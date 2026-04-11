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
  { type: "Local Content Plan", due: "Before exploration license", period: "Per license", desc: "Plan detailing employment, procurement, and training commitments." },
  { type: "Annual Workforce Report", due: "Annually (expected)", period: "Annual", desc: "Breakdown of Namibian vs foreign workforce by category." },
  { type: "Procurement Compliance Report", due: "Annually (expected)", period: "Annual", desc: "Local vs foreign procurement spend breakdown." },
  { type: "Training & Development Report", due: "Annually (expected)", period: "Annual", desc: "Details of training expenditure and programs for Namibian nationals." },
  { type: "Community Development Report", due: "Annually (expected)", period: "Annual", desc: "Social investment and community benefit sharing activities." },
];

const keyProvisions = [
  { icon: Users, title: "Namibian Employment Priority", desc: "Operators must prioritize Namibian nationals for employment at all levels. Workforce plans must include progressive localization targets and succession planning for expatriate positions." },
  { icon: DollarSign, title: "Local Procurement & Services", desc: "Preference for Namibian-registered companies in procurement. Operators must demonstrate engagement with local suppliers and contribute to supplier development programs." },
  { icon: ShieldCheck, title: "Training & Skills Development", desc: "Mandatory investment in training Namibian employees. Operators expected to fund scholarship programs and partner with local educational institutions." },
  { icon: Building2, title: "NUST & Research Partnerships", desc: "Operators encouraged to partner with the Namibia University of Science & Technology (NUST) and other institutions for research, technology development, and graduate programs." },
  { icon: FileText, title: "Local Content Reporting", desc: "Regular reporting to the MME on local content performance expected once the Petroleum Activities Bill is enacted. Current requirements are contract-specific." },
  { icon: Globe, title: "Community Benefit Sharing", desc: "Operators must contribute to community development in areas affected by petroleum activities. Social license to operate requirements being formalized." },
];

const penalties = [
  { offence: "Non-compliance with license conditions", penalty: "License revocation", severity: "critical" },
  { offence: "Failure to meet employment commitments", penalty: "Contract review + remediation", severity: "high" },
  { offence: "Inadequate local procurement efforts", penalty: "Increased regulatory oversight", severity: "medium" },
  { offence: "Failure to submit required reports", penalty: "License conditions review", severity: "high" },
  { offence: "Misrepresentation of local content data", penalty: "Potential criminal liability", severity: "critical" },
];

const majorOperators = [
  "TotalEnergies (Blocks 2913B, 2912)",
  "Shell Namibia (PEL 39)",
  "Galp Energia (PEL 83)",
  "QatarEnergy",
  "NAMCOR (National Petroleum Corp)",
  "Chevron (exploration interest)",
  "Woodside Energy",
  "BW Energy",
];

export default function NamibiaPage() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Namibia"
        headline="Local Content Policy — Namibia"
        sub="Africa's newest frontier. 11B+ barrels discovered. TotalEnergies, Shell, and Galp leading exploration. LCA Desk Namibia module coming 2027."
        geometricVariant="waves"
        heroImage={{ src: "/illustrations/market-namibia.svg", alt: "Namibia oil exploration" }}
      />

      {/* Key stats */}
      <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "20+", label: "Companies in Exploration" },
              { value: "11B+", label: "Barrels Oil Equivalent Discovered" },
              { value: "Developing", label: "Framework Status" },
              { value: "2022", label: "Local Content Policy Approved" },
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
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">Namibia&apos;s Emerging Local Content Framework</motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-text-secondary max-w-3xl mb-10 leading-relaxed">
              Namibia&apos;s petroleum local content framework is built on a Cabinet-approved Local Content Policy (2022) and the pending Petroleum Activities Bill. The Ministry of Mines and Energy (MME) and NAMCOR jointly oversee compliance as the country rapidly develops its offshore petroleum resources.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { label: "Regulatory Body", value: "MME & NAMCOR", sub: "Ministry of Mines and Energy & National Petroleum Corporation of Namibia" },
              { label: "Key Framework", value: "Cabinet-approved Local Content Policy (2022)", sub: "Petroleum Activities Bill (pending)" },
              { label: "Headquarters", value: "Windhoek, Namibia", sub: "Ministry of Mines and Energy" },
              { label: "Scope", value: "Upstream Petroleum Operations", sub: "Exploration, appraisal, and future development" },
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
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">What Namibia&apos;s Framework Requires</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            The policy sets expectations for local participation across employment, procurement, training, and community development.
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

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-12">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-amber-900 text-sm mb-1">Regulatory Framework in Development</p>
                <p className="text-sm text-amber-800">Namibia&apos;s petroleum local content framework is still being formalized. The Petroleum Activities Bill is pending parliamentary approval. Current requirements are primarily contract-specific. LCA Desk will track all regulatory developments and update the module accordingly.</p>
              </div>
            </div>
          </div>

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
            The MME and NAMCOR have enforcement powers tied to license conditions, with penalties ranging from increased oversight to license revocation.
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
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Major Operators in Namibia</h2>
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
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Namibia vs. Guyana: How the Frameworks Compare</h2>
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-surface">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">Aspect</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1F3}\u{1F1E6}"} Namibia</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1EC}\u{1F1FE}"} Guyana</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Law", na: "Cabinet Policy (2022) + Pending Bill", gy: "LCA 2021" },
                  { aspect: "Regulator", na: "MME / NAMCOR", gy: "Local Content Secretariat" },
                  { aspect: "Categories", na: "Framework developing", gy: "40+ categories" },
                  { aspect: "Max Penalty", na: "License revocation", gy: "GY$50 million" },
                  { aspect: "Key Filings", na: "LC Plan + Annual Reports (expected)", gy: "Half-Yearly + Annual + Master Plan" },
                  { aspect: "Workforce", na: "Progressive targets", gy: "11 employment categories" },
                  { aspect: "LCA Desk Support", na: "Coming 2027", gy: "Live now" },
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-5 py-3 font-medium text-text-primary">{row.aspect}</td>
                    <td className="px-5 py-3 text-text-secondary">{row.na}</td>
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
            headline="Get notified when Namibia launches"
            description="Be the first to know when the LCA Desk Namibia module goes live. We'll also send you Namibia regulatory updates."
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
