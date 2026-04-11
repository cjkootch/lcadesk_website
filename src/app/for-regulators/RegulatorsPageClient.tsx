"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Inbox, ClipboardCheck, Scale, FileCheck,
  BarChart3, Settings, Shield, Users, History, Eye, Database,
} from "lucide-react";
import GeometricBg from "@/components/GeometricBg";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

const vp = { once: true as const, margin: "-60px" as const };

const capabilities = [
  {
    icon: Inbox,
    title: "Filing Intake and Submission Workflow",
    desc: "Receive structured filings through the platform instead of email. Every submission arrives with validated data, linked evidence, and attestation metadata. No more chasing missing attachments.",
  },
  {
    icon: ClipboardCheck,
    title: "Reviewer Console and Queue Management",
    desc: "Assign submissions to reviewers. Track review status across companies and filing periods. Prioritize by deadline, validation score, or entity risk. Every reviewer action is logged.",
  },
  {
    icon: Scale,
    title: "Rules-Based Validation",
    desc: "The platform validates submissions against jurisdiction-specific rules before they reach your team. Completeness checks, threshold enforcement, and cross-field consistency are automated.",
  },
  {
    icon: FileCheck,
    title: "Resubmission and Clarification Handling",
    desc: "Request clarification or additional information through the platform. Filers resubmit with version tracking. The full clarification thread is preserved alongside the filing record.",
  },
  {
    icon: Shield,
    title: "Evidence and Audit Trail",
    desc: "Every filing, review decision, resubmission, and approval is timestamped and immutable. When an audit is required, the complete record is already assembled.",
  },
  {
    icon: BarChart3,
    title: "Cross-Company Benchmarking",
    desc: "See local content performance across your jurisdiction. Aggregate procurement spend, workforce composition, and training investment by sector, company type, or filing period.",
  },
];

const deploymentSteps = [
  { step: "01", title: "Scope your jurisdiction", desc: "We map your filing types, templates, deadlines, validation rules, and evidence requirements into a jurisdiction pack." },
  { step: "02", title: "Configure the platform", desc: "Filing schemas, reviewer workflows, validation logic, and export formats are configured to match your regulatory process." },
  { step: "03", title: "Pilot with a filing cycle", desc: "Run one complete filing cycle through the platform. Measure submission completeness, review cycle time, and back-and-forth reduction." },
  { step: "04", title: "Expand to full deployment", desc: "Scale to all filing types, all entities, and all reviewers. Ongoing support, training, and rule updates included." },
];

const faqItems = [
  { q: "Does LCA Desk replace our existing portal?", a: "LCA Desk can operate as your primary filing system or complement an existing registration portal. Many jurisdictions have supplier registration portals but lack structured filing and review workflows for recurring compliance reports. LCA Desk fills that gap." },
  { q: "How is the platform deployed for regulators?", a: "Regulator deployments are licensed implementations with dedicated onboarding. This includes jurisdiction pack configuration, reviewer console setup, workflow mapping, and training for your review team. The platform is hosted and maintained by LCA Desk." },
  { q: "What does a pilot look like?", a: "A typical pilot covers one filing type for one reporting period. We configure the jurisdiction pack, onboard a subset of filers, and run the full cycle: submission, validation, review, clarification, and approval. Success is measured by submission completeness rate, review cycle time, and reduction in manual follow-up." },
  { q: "Who owns the data?", a: "Regulator data belongs to the regulator. Company submissions belong to the submitting entities. LCA Desk hosts and secures the data but does not claim ownership. Aggregated, de-identified datasets may be used for benchmarking with explicit permission." },
  { q: "Can we configure our own validation rules?", a: "Yes. Each jurisdiction pack defines the specific validation rules, required fields, thresholds, and evidence requirements. These are configured during onboarding and can be updated as regulations change, without custom software development." },
];

export default function RegulatorsPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-24 pb-16">
        <GeometricBg variant="topology" />
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-accent/[0.07] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-[5%] w-[400px] h-[400px] bg-teal/[0.06] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent">For Regulators and Governments</span>
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-text-primary mb-6 leading-[1.1]">
              Digitize Local Content Filing, Review, and Audit
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-text-secondary max-w-xl mb-8 leading-relaxed">
              Give your secretariat a regulatory-grade operating system. Structured filing intake, automated validation, reviewer case management, resubmission workflows, and audit-ready records.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3">
              <Link href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all">
                Request a Pilot Discussion <ArrowRight size={16} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-accent/30 text-accent px-8 py-4 text-sm font-semibold hover:bg-accent/5 hover:border-accent transition-all">
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Secretariat Dashboard */}
          <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-teal/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-white shadow-2xl shadow-black/[0.08] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-border">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
                  <div className="flex-1 mx-3"><div className="bg-white rounded-md px-4 py-1.5 text-xs text-text-muted text-center border border-border/50">app.lcadesk.com/secretariat/review-queue</div></div>
                </div>
                <img src="/illustrations/screenshot-secretariat.png" alt="LCA Desk Secretariat review console" className="w-full" loading="eager" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Platform Capabilities</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            What LCA Desk Does for Your Secretariat
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl border border-border p-6 card-lift">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <cap.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2 text-[15px]">{cap.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviewer console mockup */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 30%, #047857 60%, #064E3B 100%)" }}>
        <GeometricBg variant="circuits" />
        <div className="relative max-w-5xl mx-auto px-6 z-10">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-white text-center mb-4">
            A Reviewer Console Built for Compliance Teams
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-emerald-100/60 text-center mb-12 max-w-2xl mx-auto">
            Reviewers see a structured queue of submissions, not an inbox of emails. Every filing arrives validated, scored, and ready for review.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="bg-white/[0.07] backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Inbox, label: "Pending Review", value: "24" },
                { icon: Eye, label: "Under Review", value: "8" },
                { icon: History, label: "Needs Resubmission", value: "5" },
                { icon: Shield, label: "Approved This Period", value: "41" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <stat.icon size={16} className="text-emerald-300 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-tech)" }}>{stat.value}</p>
                  <p className="text-[10px] text-emerald-200/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[
                { company: "Atlantic Marine Services Ltd", type: "H1 Half-Yearly Report", score: "94%", status: "Ready for Review", color: "text-emerald-400" },
                { company: "Guyana Oilfield Supplies Inc", type: "H1 Half-Yearly Report", score: "71%", status: "Needs Information", color: "text-amber-400" },
                { company: "Caribbean Drilling Corp", type: "Annual Plan 2026", score: "88%", status: "Under Review", color: "text-blue-400" },
                { company: "South America Energy Services", type: "H1 Half-Yearly Report", score: "96%", status: "Ready for Review", color: "text-emerald-400" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 rounded-lg px-4 py-3 border border-white/5">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium truncate">{row.company}</p>
                    <p className="text-[10px] text-emerald-200/50">{row.type}</p>
                  </div>
                  <span className={`text-xs font-semibold ${row.color}`}>{row.score}</span>
                  <span className="text-[10px] text-emerald-200/60 hidden sm:block">{row.status}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deployment Process */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Implementation</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            From Pilot to Full Deployment
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentSteps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 relative">
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-3 block" style={{ fontFamily: "var(--font-tech)" }}>Step {s.step}</span>
                <h3 className="font-semibold text-text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
            Built for Regulated Environments
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Users, title: "Role-based access control", desc: "Scoped permissions for filers, reviewers, supervisors, and auditors." },
              { icon: Shield, title: "Immutable audit records", desc: "Every action timestamped and preserved. Cannot be altered after the fact." },
              { icon: Database, title: "Data isolation", desc: "Each jurisdiction's data is logically isolated. Government data stays under government control." },
              { icon: History, title: "Version control", desc: "Every submission, resubmission, and amendment is versioned and traceable." },
              { icon: Settings, title: "Configurable rules", desc: "Validation rules, thresholds, and filing requirements update without code changes." },
              { icon: FileCheck, title: "Export and portability", desc: "Data and records are exportable. No vendor lock-in on compliance records." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-4 rounded-xl bg-surface border border-border">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
            Questions from Regulatory Bodies
          </motion.h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to digitize your local content compliance process?"
        body="Start with a pilot scoped to one filing type and one reporting period. Measure the difference in submission completeness, review time, and audit readiness."
        primaryCTA={{ label: "Request a Pilot Discussion", href: "/demo" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
