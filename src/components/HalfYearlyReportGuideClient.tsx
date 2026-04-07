"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  AlertTriangle,
  FileText,
  Users,
  DollarSign,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Clock,
  Building2,
  Scale,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import EmailCapture from "@/components/EmailCapture";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const penalties = [
  { offence: "Operating without meeting minimum local content requirements", penalty: "GY$50,000,000", severity: "critical" },
  { offence: "Failure to submit required report", penalty: "GY$5,000,000", severity: "high" },
  { offence: "Aiding or abetting contravention of the Act", penalty: "GY$5,000,000", severity: "high" },
  { offence: "False or misleading information in submission", penalty: "GY$1,000,000", severity: "medium" },
  { offence: "Late submission of required report", penalty: "GY$1,000,000", severity: "medium" },
  { offence: "Failure to comply with request for information", penalty: "GY$1,000,000", severity: "medium" },
];

const faqItems = [
  { q: "When is the LCA Half-Yearly Report due?", a: "H1 reports (covering January–June) are due by July 30. H2 reports (covering July–December) are due by January 30 of the following year. These are hard deadlines — late submissions incur a GY$1 million penalty." },
  { q: "Who must file the LCA Half-Yearly Report?", a: "Contractors, sub-contractors, and licensees operating in Guyana's petroleum sector are required to file under Section 47 of the Local Content Act 2021. This includes all companies involved in petroleum operations, whether directly or through subcontracting arrangements." },
  { q: "What are the penalties for not filing?", a: "Failure to submit carries a GY$5 million penalty. Late submission is GY$1 million. False or misleading submissions are GY$1 million. Operating without meeting minimum local content requirements can result in fines up to GY$50 million." },
  { q: "What format is the report submitted in?", a: "Reports are submitted as a PDF narrative report accompanied by an Excel data template. Both must be emailed to the Local Content Secretariat. LCA Desk automates the generation of both documents from your data." },
  { q: "Can I use LCA Desk to prepare my filing?", a: "Yes. LCA Desk's guided wizard walks you through every required field, auto-generates the narrative PDF and Excel template, flags compliance gaps before submission, and tracks your deadlines. Start with a 30-day trial." },
  { q: "What version of the template is current?", a: "The current template is Version 4 (June 2025). Key changes from V3 include the addition of a Supplier Type field in the Expenditure Sub-Report and the requirement for remuneration data in the Employment Sub-Report. LCA Desk stays current with all template updates from the Secretariat." },
];

export default function HalfYearlyReportGuideClient() {
  return (
    <main>
      <HeroSection
        eyebrow="Compliance Guide"
        headline="LCA Half-Yearly Report Guide"
        sub="Everything you need to know about Guyana's mandatory half-yearly filing — deadlines, who must file, what's required, and the penalties for non-compliance."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "View Filing Calendar", href: "/lca-filing-calendar" }}
        geometricVariant="grid"
      />

      {/* Deadline urgency banner */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Calendar size={22} className="text-white" />
              </div>
              <div>
                <p className="text-emerald-200 text-xs font-semibold tracking-wider uppercase">H1 Report Deadline</p>
                <p className="text-white text-2xl font-bold tracking-tight">July 30</p>
                <p className="text-emerald-300 text-xs">Covers January 1 – June 30</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Calendar size={22} className="text-white" />
              </div>
              <div>
                <p className="text-emerald-200 text-xs font-semibold tracking-wider uppercase">H2 Report Deadline</p>
                <p className="text-white text-2xl font-bold tracking-tight">January 30</p>
                <p className="text-emerald-300 text-xs">Covers July 1 – December 31</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who must file */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <motion.p custom={0} variants={fadeUp} className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Legal Obligation</motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">Who Must File?</motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-text-secondary max-w-2xl mb-10 leading-relaxed">
              Under Section 47 of the Local Content Act 2021, the following entities must submit half-yearly reports to the Local Content Secretariat:
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Contractors", desc: "Companies holding petroleum agreements or licences with the Government of Guyana. Includes all major operators and their prime contractors." },
              { icon: Users, title: "Sub-Contractors", desc: "Companies providing services or goods to a contractor as part of petroleum operations. Applies at every tier of the supply chain." },
              { icon: Scale, title: "Licensees", desc: "Holders of petroleum licences under the Petroleum (Exploration and Production) Act. Includes exploration and production licence holders." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-2xl border border-border p-7"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 3 Sub-Reports — high level only */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-14">
            <motion.p custom={0} variants={fadeUp} className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Report Structure</motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">3 Required Sub-Reports</motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Each half-yearly submission contains three distinct sections. The Secretariat evaluates compliance across all three.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Employment Report",
                what: "Workforce data broken down by nationality, position level, department, and remuneration (required as of V4).",
                why: "The LCA sets minimum Guyanese employment targets across job categories. The Secretariat tracks whether you're meeting these thresholds.",
                risk: "Falling below minimum employment ratios can trigger enforcement action.",
              },
              {
                icon: DollarSign,
                title: "Expenditure Report",
                what: "Procurement spending categorized by Guyanese vs. foreign suppliers across all 14 service categories, including Supplier Type classification (V4).",
                why: "Section 22 requires first consideration for Guyanese suppliers. The Secretariat measures your local procurement percentage against minimum targets.",
                risk: "Insufficient local procurement spend is the most common compliance gap.",
              },
              {
                icon: GraduationCap,
                title: "Capacity Development Report",
                what: "Training programs, skills transfer initiatives, and technology transfer activities for Guyanese nationals.",
                why: "The LCA mandates investment in building Guyanese capacity. This report demonstrates your contribution to workforce development.",
                risk: "Lack of documented training programs raises red flags during review.",
              },
            ].map((report, i) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-7 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <report.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary text-lg mb-3">{report.title}</h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">What it covers</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{report.what}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Why it matters</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{report.why}</p>
                  </div>
                  <div className="flex items-start gap-2 bg-amber-50 rounded-lg p-3 mt-2">
                    <AlertTriangle size={14} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-amber-800 leading-relaxed">{report.risk}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gated CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-accent/5 to-teal/5 border border-accent/20 rounded-2xl p-8 text-center"
          >
            <FileText size={28} className="text-accent mx-auto mb-3" />
            <h3 className="font-display text-xl text-text-primary mb-2">Need to fill out these reports?</h3>
            <p className="text-sm text-text-secondary max-w-lg mx-auto mb-5">
              LCA Desk walks you through every required field with a guided wizard. No more guessing what goes where — we auto-generate the compliant PDF narrative and Excel template.
            </p>
            <Link
              href="https://app.lcadesk.com/auth/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Start 30-Day Trial <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Penalty table */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-12">
            <motion.p custom={0} variants={fadeUp} className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-3">Enforcement</motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">Non-Compliance Penalties</motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              The Local Content Act carries significant financial penalties. The Secretariat has enforcement powers under Sections 53–57.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-border overflow-hidden"
          >
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b bg-red-50/50">
                  <th className="px-6 py-4 font-semibold text-text-primary">Offence</th>
                  <th className="px-6 py-4 font-semibold text-text-primary text-right">Maximum Penalty</th>
                </tr>
              </thead>
              <tbody>
                {penalties.map((p, i) => (
                  <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-text-secondary">{p.offence}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                        p.severity === "critical"
                          ? "bg-red-100 text-red-700"
                          : p.severity === "high"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {p.penalty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="text-xs text-text-muted text-center mt-4">
            Source: Local Content Act 2021, Sections 53–57. Penalties are per offence and may be compounded.
          </p>
        </div>
      </section>

      {/* Email capture */}
      <section className="py-12 bg-surface">
        <div className="max-w-xl mx-auto px-6">
          <EmailCapture
            headline="Get LCA filing deadline reminders"
            description="We'll email you 30, 14, and 7 days before each half-yearly report deadline. Never miss a filing date again."
            list="filing_reminders"
            variant="card"
          />
        </div>
      </section>

      {/* Common mistakes — creates urgency without giving away how-to */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-12">
            <motion.p custom={0} variants={fadeUp} className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Compliance Risks</motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">Common Filing Mistakes</motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-text-secondary max-w-2xl mx-auto">
              The Secretariat reviews every submission. These are the issues that most commonly trigger follow-up requests or penalties.
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {[
              { mistake: "Missing or incorrect LCS certificate numbers for suppliers", impact: "Suppliers without valid LCS registration cannot count toward your local content percentage." },
              { mistake: "Inconsistent employment figures between narrative and data template", impact: "The Secretariat cross-checks your PDF narrative against the Excel data. Mismatches trigger information requests." },
              { mistake: "Not breaking expenditure down by the 14 LCA service categories", impact: "Lump-sum reporting doesn't demonstrate compliance with category-specific minimum targets." },
              { mistake: "Submitting after the deadline without prior extension approval", impact: "Automatic GY$1 million penalty per late submission — even if the report is otherwise correct." },
              { mistake: "Omitting capacity development activities entirely", impact: "An empty training report suggests non-compliance with skills transfer obligations, inviting scrutiny." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 bg-white rounded-xl border border-border p-5"
              >
                <XCircle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-text-primary text-sm mb-1">{item.mistake}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{item.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gated CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 bg-white border border-accent/20 rounded-2xl p-6"
          >
            <ShieldCheck size={32} className="text-accent flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-text-primary mb-1">Avoid these mistakes automatically</h3>
              <p className="text-sm text-text-secondary">LCA Desk validates your data in real-time, flags compliance gaps before submission, and ensures your narrative matches your numbers.</p>
            </div>
            <Link
              href="https://app.lcadesk.com/auth/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white whitespace-nowrap hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Start 30-Day Trial <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Filing process overview — high level, no template details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-12">
            <motion.p custom={0} variants={fadeUp} className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Filing Process</motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">How Filing Works</motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <h3 className="font-semibold text-text-primary flex items-center gap-2">
                <Clock size={16} className="text-accent" /> Manual Process
              </h3>
              {[
                "Collect employment data from HR across all entities",
                "Compile procurement spend across 14 service categories",
                "Document training and capacity development activities",
                "Write narrative report explaining your compliance position",
                "Fill out the official Excel data template",
                "Cross-check narrative against data for consistency",
                "Email PDF + Excel to the Secretariat before deadline",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-text-secondary">{step}</p>
                </div>
              ))}
              <p className="text-xs text-text-muted italic pl-8">Typically takes 2–4 weeks per filing period.</p>
            </div>

            <div className="space-y-5">
              <h3 className="font-semibold text-text-primary flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" /> With LCA Desk
              </h3>
              {[
                "Enter data through guided wizard — one field at a time",
                "AI flags compliance gaps and missing information in real-time",
                "Narrative report auto-generated from your data",
                "Excel template auto-populated in the correct format",
                "Built-in consistency checks between narrative and data",
                "Deadline reminders and filing status tracking",
                "Download submission-ready PDF, Excel, and Notice of Submission letter — email to Secretariat",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-text-secondary">{step}</p>
                </div>
              ))}
              <p className="text-xs text-accent font-medium pl-7">Typically takes 2–3 days per filing period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secretariat contact */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="text-xs text-accent font-semibold tracking-widest uppercase mb-2">Official Contact</p>
              <h3 className="font-display text-lg text-text-primary mb-2">Local Content Secretariat</h3>
              <div className="space-y-1 text-sm text-text-secondary">
                <p>116-117 Cowan Street, Kingston, Georgetown, Guyana</p>
                <p>Tel: +592-225-8315 / 8</p>
                <p>Email: localcontent@nre.gov.gy</p>
              </div>
              <p className="text-xs text-text-muted mt-3">
                Reports must be emailed directly to the Secretariat. LCA Desk generates the submission-ready files — you email them.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/lca-filing-calendar" className="text-sm text-accent hover:underline font-medium flex items-center gap-1">
                <Calendar size={14} /> View Filing Calendar
              </Link>
              <Link href="/lca-compliance-guide" className="text-sm text-accent hover:underline font-medium flex items-center gap-1">
                <FileText size={14} /> Compliance Guide
              </Link>
              <Link href="/lca-act-overview" className="text-sm text-accent hover:underline font-medium flex items-center gap-1">
                <Scale size={14} /> Full LCA Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner
        headline="Stop guessing. Start filing with confidence."
        body="LCA Desk walks you through every required field, auto-generates compliant reports, and flags gaps before you submit. 30-day trial — card collected at signup."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </main>
  );
}
