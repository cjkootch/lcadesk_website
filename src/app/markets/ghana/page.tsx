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
  { type: "Local Content Plan", due: "Before project commencement", period: "Per project", desc: "Comprehensive plan detailing local content commitments across employment, procurement, and technology transfer." },
  { type: "Annual Local Content Report", due: "Annually", period: "Annual", desc: "Progress report on local content targets vs actuals." },
  { type: "Employment & Training Report", due: "Annually", period: "Annual", desc: "Breakdown of Ghanaian vs foreign workforce and training expenditure." },
  { type: "Procurement Report", due: "Annually", period: "Annual", desc: "Detailed report on procurement from Ghanaian vs foreign suppliers." },
  { type: "Technology Transfer Report", due: "Annually", period: "Annual", desc: "Progress on succession plans and knowledge transfer programs." },
];

const keyProvisions = [
  { icon: Users, title: "Ghanaian Employment Targets", desc: "Operators must submit and implement plans for employing Ghanaian citizens, with targets increasing over the life of the project. Management positions must be progressively localized." },
  { icon: DollarSign, title: "Procurement & Services", desc: "First consideration to Ghanaian companies for provision of goods and services. Operators must demonstrate efforts to engage local suppliers before seeking international alternatives." },
  { icon: Globe, title: "Technology Transfer", desc: "Operators must implement technology transfer programs and succession plans. International employees must have Ghanaian understudies within specified timeframes." },
  { icon: FileText, title: "Local Content Plans", desc: "All contractors and subcontractors must submit a Local Content Plan to the Petroleum Commission before commencing operations. Plans must detail commitments across employment, procurement, and technology transfer." },
  { icon: ShieldCheck, title: "Insurance & Financial Services", desc: "Minimum percentages of insurance coverage and financial services must be sourced from Ghanaian providers. The Commission monitors compliance annually." },
  { icon: BarChart3, title: "Training & Capacity Building", desc: "Operators must allocate budgets for training Ghanaian employees and contributing to sectoral capacity building programs as directed by the Commission." },
];

const penalties = [
  { offence: "Failure to submit Local Content Plan", penalty: "Up to $250,000 fine", severity: "critical" },
  { offence: "Non-compliance with approved plan", penalty: "Project suspension", severity: "critical" },
  { offence: "Providing false information", penalty: "Debarment from sector", severity: "high" },
  { offence: "Failure to meet employment targets", penalty: "Plan revision + monitoring", severity: "medium" },
  { offence: "Failure to submit annual reports", penalty: "Monetary penalties + license review", severity: "high" },
];

const majorOperators = [
  "Tullow Oil Ghana",
  "ENI Ghana (now Eni/Vitol)",
  "Kosmos Energy",
  "Springfield E&P",
  "GNPC (Ghana National Petroleum Corporation)",
  "Aker Energy (now GOGL)",
  "AGM Petroleum",
  "Hess Corporation",
];

export default function GhanaPage() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Ghana"
        headline="Petroleum Commission Compliance — Ghana"
        sub="West Africa's established producer. 50+ companies regulated under LI 2204. LCA Desk Ghana module coming 2027."
        geometricVariant="waves"
        heroImage={{ src: "/illustrations/market-ghana.svg", alt: "Ghana petroleum compliance" }}
      />

      {/* Key stats */}
      <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Companies Operating" },
              { value: "20+", label: "Local Content Categories" },
              { value: "$250K", label: "Max Penalty Per Offence" },
              { value: "2013", label: "Regulations Enacted" },
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
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">Petroleum (Local Content and Local Participation) Regulations, 2013 (LI 2204)</motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-text-secondary max-w-3xl mb-10 leading-relaxed">
              Ghana&apos;s local content regulations establish a comprehensive framework for maximizing Ghanaian participation in the petroleum sector. The Petroleum Commission oversees compliance, with authority to approve local content plans, monitor performance, and impose penalties for non-compliance.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { label: "Regulatory Body", value: "Petroleum Commission of Ghana", sub: "Established under the Petroleum Commission Act, 2011 (Act 821)" },
              { label: "Key Law", value: "LI 2204 (2013)", sub: "Petroleum (Local Content and Local Participation) Regulations" },
              { label: "Headquarters", value: "Accra, Ghana", sub: "National oversight of all petroleum operations" },
              { label: "Scope", value: "Petroleum Upstream & Services", sub: "Employment, procurement, technology transfer, and financial services" },
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
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">What LI 2204 Requires</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            The Regulations mandate local content commitments across employment, procurement, technology transfer, and financial services for all petroleum operations in Ghana.
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
            The Petroleum Commission has enforcement powers including the ability to suspend projects, impose fines up to $250,000, and debar companies from operating in the sector.
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
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Major Operators in Ghana</h2>
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
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Ghana vs. Guyana: How the Laws Compare</h2>
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-surface">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">Aspect</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1EC}\u{1F1ED}"} Ghana</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1EC}\u{1F1FE}"} Guyana</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Law", gh: "LI 2204 (2013)", gy: "Local Content Act 2021" },
                  { aspect: "Regulator", gh: "Petroleum Commission", gy: "Local Content Secretariat" },
                  { aspect: "Service Categories", gh: "20+ categories", gy: "40+ categories" },
                  { aspect: "Max Penalty", gh: "Up to $250,000", gy: "GY$50 million" },
                  { aspect: "Key Filings", gh: "Local Content Plan + Annual Reports", gy: "Half-Yearly + Annual + Master Plan" },
                  { aspect: "Workforce Scope", gh: "Progressive localization targets", gy: "11 employment categories" },
                  { aspect: "LCA Desk Support", gh: "Coming 2027", gy: "Live now" },
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-5 py-3 font-medium text-text-primary">{row.aspect}</td>
                    <td className="px-5 py-3 text-text-secondary">{row.gh}</td>
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
            headline="Get notified when Ghana launches"
            description="Be the first to know when the LCA Desk Ghana module goes live. We'll also send you Petroleum Commission regulatory updates."
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
