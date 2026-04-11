"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, FileText, Calendar, Users, DollarSign, Scale,
  AlertTriangle, CheckCircle, Shield, Clock, BookOpen, BarChart3,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const vp = { once: true as const, margin: "-60px" as const };

const submissionTypes = [
  {
    type: "H1 Half-Yearly Report",
    period: "January \u2013 June",
    due: "July 30",
    desc: "Covers the first half of the year. Three sub-reports: Employment, Expenditure (Procurement), and Capacity Development. Includes the Comparative Analysis narrative.",
    format: "Excel template (V4.1) + PDF narrative",
  },
  {
    type: "H2 Half-Yearly Report",
    period: "July \u2013 December",
    due: "January 30",
    desc: "Covers the second half of the year. Same structure as H1. Cumulative year-to-date data compared against the prior period.",
    format: "Excel template (V4.1) + PDF narrative",
  },
  {
    type: "Annual Local Content Plan",
    period: "Forward-looking for the year",
    due: "As required by the Secretariat",
    desc: "Outlines planned local content commitments for employment, procurement, and capacity development for the upcoming year.",
    format: "Document submission",
  },
  {
    type: "Local Content Master Plan",
    period: "Multi-year strategic plan",
    due: "As required by the Secretariat",
    desc: "Long-term strategy for local content development across the life of the project. Typically required from operators and major contractors.",
    format: "Document submission",
  },
  {
    type: "Annual Performance Report",
    period: "Full calendar year",
    due: "As required by the Secretariat",
    desc: "Year-end summary of actual local content performance vs. the Annual Plan targets.",
    format: "Document submission",
  },
];

const penalties = [
  { offence: "Failure to submit a half-yearly report", penalty: "GY$1,000,000 \u2013 GY$10,000,000", section: "Section 44" },
  { offence: "Filing a false or misleading report", penalty: "GY$5,000,000 \u2013 GY$50,000,000 + criminal liability", section: "Section 41" },
  { offence: "Failure to meet minimum local content requirements", penalty: "GY$1,000,000 \u2013 GY$50,000,000", section: "Section 44" },
  { offence: "Operating without a valid Local Content Plan", penalty: "GY$1,000,000 \u2013 GY$10,000,000", section: "Section 44" },
  { offence: "Repeat non-compliance", penalty: "Escalating penalties + potential suspension of operations", section: "Section 44" },
];

const lcCategories = [
  "Engineering & Design",
  "Fabrication & Construction",
  "Well Services & Drilling",
  "Marine & Logistics",
  "Environmental Services",
  "Catering & Accommodation",
  "Security Services",
  "Insurance & Financial Services",
  "Legal & Consulting Services",
  "IT & Telecommunications",
  "Training & Capacity Building",
  "Laboratory & Testing Services",
  "Waste Management",
  "Heavy Equipment & Transport",
];

const faqItems = [
  { q: "Who is required to file under the LCA 2021?", a: "Every contractor, sub-contractor, and licensee operating under a petroleum agreement in Guyana. This includes operators (like ExxonMobil/EMGL), major service companies, and sub-contractors at every tier. All companies on the Local Content Register must file, regardless of size or nationality." },
  { q: "What happens if I miss the July 30 or January 30 deadline?", a: "Late submissions trigger an automatic penalty starting at GY$1 million. The Secretariat does not grant informal extensions \u2014 if you need more time, you must request it in writing before the deadline. Late filings also increase the likelihood of a formal audit." },
  { q: "What is the V4.1 template?", a: "Version 4.1 of the Half-Yearly Report Submission Guideline was released by the Secretariat in June 2025. It introduces more granular workforce categorization, explicit 14-category procurement breakdowns, and expanded capacity development reporting. Submissions using the older V4.0 template will be returned for correction." },
  { q: "What does 'first consideration' mean for procurement?", a: "Section 22 requires that you actively seek Guyanese suppliers on the Local Content Register, evaluate their bids on fair and equitable terms, and provide a written explanation to the Secretariat if you choose a foreign supplier instead. Price alone may not be sufficient justification for bypassing a local supplier." },
  { q: "How is the local content rate calculated?", a: "The LC rate is calculated as: (Value of goods/services from Guyanese suppliers \u00f7 Total value of goods/services) \u00d7 100. This is calculated per service category. The Secretariat cross-checks your figures against the Local Content Register to verify that suppliers claimed as 'Guyanese' hold valid LCS registration." },
  { q: "What is the Sole Source approval process?", a: "When no qualified Guyanese supplier exists for a specific service, operators can apply for Sole Source approval to engage a foreign provider. The application must document the search for local suppliers, explain why no qualified local alternative exists, and include a plan for developing local capacity in that category." },
];

export default function LCAActOverviewPage() {
  return (
    <>
      <HeroSection
        eyebrow="LCA Act 2021"
        headline="Local Content Act 2021 \u2014 Complete Guide"
        sub="Everything you need to know about Guyana's Local Content Act: who must comply, what to file, how to calculate your LC rate, and how penalties work."
        geometricVariant="grid"
        heroImage={{ src: "/illustrations/hero-lca-overview.png", alt: "Guyana Local Content Act 2021" }}
      />

      {/* Quick facts bar */}
      <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "1,300+", label: "Companies on the LC Register" },
              { value: "5", label: "Mandatory Submission Types" },
              { value: "40+", label: "Reporting Categories" },
              { value: "GY$50M", label: "Maximum Penalty Per Offence" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                <p className="text-emerald-200 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is the LCA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={vp}>
            <motion.h2 custom={0} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-6">
              What is the Local Content Act?
            </motion.h2>
            <motion.div custom={1} variants={fadeUp} className="prose max-w-none text-text-secondary leading-relaxed space-y-4">
              <p>
                The Local Content Act 2021 is Guyana&apos;s landmark legislation designed to ensure that the country&apos;s petroleum sector delivers meaningful economic benefits to Guyanese citizens and businesses. Passed into law in 2021 and administered by the Local Content Secretariat under the Ministry of Natural Resources, the Act establishes mandatory requirements for local participation in employment, procurement, training, and capacity development across all petroleum operations.
              </p>
              <p>
                The Act applies to <strong>every contractor, sub-contractor, and licensee</strong> operating under a petroleum agreement in Guyana. This includes operators (such as ExxonMobil Guyana Limited), major service companies (Halliburton, Baker Hughes, SLB), and sub-contractors at every tier. All companies on the Local Content Register must comply, regardless of size, revenue, or nationality.
              </p>
              <p>
                The Secretariat reviews every submission and has enforcement powers under Sections 41&ndash;57 of the Act, including the authority to impose financial penalties from GY$1 million to GY$50 million per offence and to refer cases for criminal prosecution where false or misleading information is submitted.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Five submission types */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Filing Requirements</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">
            The Five Mandatory Submission Types
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            Every regulated entity must prepare and submit these five document types to the Local Content Secretariat.
          </p>

          <div className="space-y-4">
            {submissionTypes.map((sub, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl border border-border p-6 card-lift">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center shrink-0">
                    <FileText size={22} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-semibold text-text-primary text-lg">{sub.type}</h3>
                      <span className="text-[10px] font-semibold bg-accent/10 text-accent px-2.5 py-0.5 rounded-full">Due: {sub.due}</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-2">{sub.desc}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                      <span className="flex items-center gap-1"><Calendar size={12} /> Period: {sub.period}</span>
                      <span className="flex items-center gap-1"><FileText size={12} /> Format: {sub.format}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How the LC rate is calculated */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Methodology</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">
            How the Local Content Rate Is Calculated
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            The LC rate is calculated per service category and appears in the Expenditure sub-report of your half-yearly filing.
          </p>

          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Formula</p>
            <div className="bg-surface rounded-xl p-6 text-center mb-6">
              <p className="font-display text-xl md:text-2xl text-text-primary">
                LC Rate = <span className="text-accent">(Local Spend &divide; Total Spend)</span> &times; 100
              </p>
            </div>

            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Worked Example: Marine Transport Services</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-surface rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-text-primary">$2.4M</p>
                <p className="text-xs text-text-muted mt-1">Total spend on marine transport</p>
              </div>
              <div className="bg-surface rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-accent">$1.8M</p>
                <p className="text-xs text-text-muted mt-1">Spend with LCS-registered Guyanese suppliers</p>
              </div>
              <div className="bg-surface rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-emerald-600">75%</p>
                <p className="text-xs text-text-muted mt-1">Local content rate for this category</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-1">Verification note</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    The Secretariat cross-checks your figures against the Local Content Register. Suppliers claimed as &ldquo;Guyanese&rdquo; must hold valid LCS registration. Suppliers without a valid certificate do not count toward your local content percentage, even if they are Guyanese-owned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First consideration */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12">
            <div>
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Section 22</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-6">
                What &ldquo;First Consideration&rdquo; Actually Means
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Section 22 of the LCA requires that contractors, sub-contractors, and licensees give <strong>&ldquo;first consideration&rdquo;</strong> to Guyanese suppliers in procurement. This is the cornerstone of the Act, but it does not mean you must always choose the Guyanese supplier.
                </p>
                <p>It means you must:</p>
                <ol className="space-y-3 ml-4">
                  {[
                    "Actively seek Guyanese suppliers on the Local Content Register",
                    "Evaluate their bids on fair and equitable terms",
                    "Document your procurement decision — whether you chose the local supplier or not",
                    "Provide a written explanation to the Secretariat if you bypassed a Guyanese supplier for a foreign one",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                  <p className="text-sm text-amber-700 leading-relaxed">
                    <strong className="text-amber-800">Key point:</strong> Price alone may not be sufficient justification for selecting a foreign supplier. The Act&apos;s intent is to build Guyanese capacity, and the Secretariat interprets first consideration broadly. Consistently bypassing local suppliers raises audit flags.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sole source */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Sole Source Approvals</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-6">
            When No Local Supplier Exists
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
            <p>
              When no qualified Guyanese supplier exists for a specific service or product, operators can apply for <strong>Sole Source approval</strong> to engage a foreign provider. This is not an exemption from the Act — it&apos;s a structured process that requires documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: "01", title: "Document the search", desc: "Show that you searched the Local Content Register and approached Guyanese suppliers. Include RFQ records and responses received." },
              { step: "02", title: "Justify the decision", desc: "Explain why no local alternative is qualified — technical capability, safety requirements, timeline constraints, or capacity limitations." },
              { step: "03", title: "Include a development plan", desc: "Describe how you plan to develop local capacity in this category over time. The Secretariat expects a plan, not just a justification." },
            ].map((s, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 card-lift">
                <span className="text-accent text-xs font-bold tracking-widest uppercase">Step {s.step}</span>
                <h3 className="font-semibold text-text-primary mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 40+ reporting categories */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Service Categories</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">
            40+ Reporting Categories Under the LCA
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            The V4.1 template requires expenditure data broken down across 14 primary service categories. Your LC rate is calculated per category.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {lcCategories.map((cat, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-4 text-sm text-text-primary flex items-center gap-2.5">
                <CheckCircle size={14} className="text-accent shrink-0" />
                {cat}
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted text-center mt-6">
            Plus additional sub-categories within each primary category per the V4.1 guidelines.
          </p>
        </div>
      </section>

      {/* Penalties table */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Enforcement</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">
            Penalties and What Triggers Them
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            The Secretariat is actively auditing submissions and following up on late or missing filings. Non-compliance carries real consequences.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-text-muted font-semibold text-xs uppercase tracking-wider">Offence</th>
                  <th className="text-left py-3 px-4 text-text-muted font-semibold text-xs uppercase tracking-wider">Penalty</th>
                  <th className="text-left py-3 px-4 text-text-muted font-semibold text-xs uppercase tracking-wider">Section</th>
                </tr>
              </thead>
              <tbody>
                {penalties.map((p, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 text-text-primary">{p.offence}</td>
                    <td className="py-3 px-4 text-red-600 font-medium">{p.penalty}</td>
                    <td className="py-3 px-4 text-text-muted">{p.section}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* V4.1 changes */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Latest Update</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-6">
            V4.1 Template Changes (June 2025)
          </h2>
          <div className="space-y-4">
            {[
              { title: "Employment Sub-Report", desc: "More granular workforce categorization. Breakdown by position level (management, professional, technical, skilled, semi-skilled, unskilled), nationality, department, and FTE basis. Makes it harder to obscure non-compliance by bundling categories." },
              { title: "Expenditure Sub-Report", desc: "Explicit categorization across all 14 LCA service categories instead of allowing lump-sum reporting. Each category must show total spend, spend with Guyanese suppliers, spend with foreign suppliers, and percentage of local content achieved." },
              { title: "Capacity Development Sub-Report", desc: "Now requires specific documentation of training programs (dates, duration, participant counts), skills transfer initiatives, technology transfer activities, and succession planning for positions held by non-Guyanese nationals." },
            ].map((change, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 card-lift">
                <h3 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                  <FileText size={16} className="text-accent" />
                  {change.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{change.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
            <p className="text-sm text-amber-700 leading-relaxed">
              <strong className="text-amber-800">Important:</strong> Submissions using the older V4.0 template will be returned for correction by the Secretariat, which effectively means a late filing if you miss the deadline.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">FAQ</p>
          <h2 className="font-display text-3xl text-text-primary mb-10 text-center">
            Common Questions About the LCA
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Training CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <BookOpen size={32} className="text-accent mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
            Want to learn the LCA in a structured format?
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
            LCA Desk includes LCA Fundamentals — a 5-module course covering everything on this page, with quizzes and a completion badge for your audit trail.
          </p>
          <Link href="/training" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal px-8 py-3.5 text-sm font-medium text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] transition-all">
            Explore the Learning Centre <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTABanner
        headline="Stay compliant with the Local Content Act."
        body="LCA Desk manages all five mandatory submissions with AI narrative drafting and compliance gap detection. Start your 30-day trial today."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
