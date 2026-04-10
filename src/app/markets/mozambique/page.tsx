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
  { type: "Local Content Plan", due: "Before project approval", period: "Per project", desc: "Comprehensive plan detailing employment, procurement, and training commitments." },
  { type: "Annual Local Content Report", due: "Annually", period: "Annual", desc: "Progress on commitments including workforce breakdown and procurement data." },
  { type: "Training Investment Report", due: "Annually", period: "Annual", desc: "Details of training expenditure and programs delivered for Mozambican nationals." },
  { type: "Procurement Compliance Report", due: "Annually", period: "Annual", desc: "Breakdown of local vs international procurement by category and value." },
  { type: "Community Development Report", due: "Annually", period: "Annual", desc: "Report on community investments and social impact initiatives." },
];

const keyProvisions = [
  { icon: Users, title: "Mozambican Employment Priority", desc: "Operators must prioritize Mozambican nationals for employment. Detailed workforce plans required with progressive localization targets across all skill levels, from entry-level to management." },
  { icon: DollarSign, title: "Local Procurement Obligations", desc: "Operators must give preference to Mozambican goods and services. Annual procurement plans must demonstrate efforts to source locally before engaging foreign suppliers." },
  { icon: Building2, title: "Training & Capacity Building", desc: "Mandatory investment in training Mozambican nationals. Operators must allocate a percentage of contract value to skills development and contribute to the national training fund." },
  { icon: FileText, title: "Local Content Plans", desc: "Comprehensive plans required before project commencement, covering employment, procurement, training, and technology transfer commitments aligned with INP guidelines." },
  { icon: Globe, title: "Technology Transfer Programs", desc: "Operators must implement structured knowledge transfer programs. Expatriate staff must mentor and train Mozambican counterparts with defined handover timelines." },
  { icon: ShieldCheck, title: "Community Development Obligations", desc: "Investment in local community development projects, particularly in areas affected by petroleum operations. Social impact assessments required." },
];

const penalties = [
  { offence: "Failure to submit Local Content Plan", penalty: "License suspension", severity: "critical" },
  { offence: "Non-compliance with approved plan", penalty: "License revocation risk", severity: "critical" },
  { offence: "Failure to meet employment targets", penalty: "Mandatory corrective action", severity: "high" },
  { offence: "Providing false compliance data", penalty: "Criminal prosecution risk", severity: "high" },
  { offence: "Failure to submit annual reports", penalty: "Monetary penalties + increased oversight", severity: "medium" },
];

const majorOperators = [
  "TotalEnergies Mozambique",
  "ExxonMobil Mozambique",
  "ENI (Mozambique Rovuma Basin)",
  "CNOOC",
  "ENH (Empresa Nacional de Hidrocarbonetos)",
  "Sasol Petroleum Mozambique",
  "Galp Energia",
  "PTTEP (PTT Exploration & Production)",
];

export default function MozambiquePage() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Mozambique"
        headline="Local Content Compliance — Mozambique"
        sub="East Africa's emerging LNG giant. 30+ companies under INP oversight. $50B+ in LNG investment. LCA Desk Mozambique module coming 2027."
        geometricVariant="waves"
        heroImage={{ src: "/illustrations/market-mozambique.svg", alt: "Mozambique LNG compliance" }}
      />

      {/* Key stats */}
      <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "30+", label: "Companies in LNG & Petroleum" },
              { value: "15+", label: "Local Content Categories" },
              { value: "License", label: "Revocation Risk" },
              { value: "2014", label: "LC Regulations Enacted" },
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
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">Mozambique&apos;s Local Content Framework</motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-text-secondary max-w-3xl mb-10 leading-relaxed">
              Mozambique&apos;s local content requirements are governed by Law 15/2017 (Petroleum Law) and Decree 2/2014 (Local Content Regulations). The INP (Instituto Nacional de Petróleo) oversees compliance across the petroleum and LNG value chain, with powers to suspend licenses and mandate corrective action.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { label: "Regulatory Body", value: "INP", sub: "Instituto Nacional de Petróleo / National Petroleum Institute" },
              { label: "Key Law", value: "Law 15/2017 + Decree 2/2014", sub: "Petroleum Law and Local Content Regulations" },
              { label: "Headquarters", value: "Maputo, Mozambique", sub: "National coordination of petroleum operations" },
              { label: "Scope", value: "LNG & Petroleum Operations", sub: "Upstream, midstream, and associated services" },
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
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">What the Law Requires</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            Mozambique&apos;s local content framework mandates employment priority, procurement obligations, and community development across all petroleum operations.
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
            The INP has enforcement powers including license suspension, revocation, and referral for criminal prosecution for serious violations.
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
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Major Operators in Mozambique</h2>
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
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Mozambique vs. Guyana: How the Laws Compare</h2>
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-surface">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">Aspect</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1F2}\u{1F1FF}"} Mozambique</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1EC}\u{1F1FE}"} Guyana</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Law", mz: "Law 15/2017 + Decree 2/2014", gy: "Local Content Act 2021" },
                  { aspect: "Regulator", mz: "INP", gy: "Local Content Secretariat" },
                  { aspect: "Categories", mz: "15+ categories", gy: "40+ categories" },
                  { aspect: "Max Penalty", mz: "License revocation", gy: "GY$50 million" },
                  { aspect: "Key Filings", mz: "LC Plan + Annual Reports", gy: "Half-Yearly + Annual + Master Plan" },
                  { aspect: "Workforce", mz: "Progressive localization targets", gy: "11 employment categories" },
                  { aspect: "LCA Desk Support", mz: "Coming 2027", gy: "Live now" },
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-5 py-3 font-medium text-text-primary">{row.aspect}</td>
                    <td className="px-5 py-3 text-text-secondary">{row.mz}</td>
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
            headline="Get notified when Mozambique launches"
            description="Be the first to know when the LCA Desk Mozambique module goes live. We'll also send you INP regulatory updates."
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
