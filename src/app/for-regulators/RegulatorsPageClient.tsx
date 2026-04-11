"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Inbox, ClipboardCheck, Scale, FileCheck,
  BarChart3, Shield, Users, Database,
} from "lucide-react";
import GeometricBg from "@/components/GeometricBg";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

const vp = { once: true as const, margin: "-60px" as const };

const capabilities = [
  {
    icon: Inbox,
    title: "Filing Intake",
    desc: "Receive structured filings through the platform instead of email. Every submission arrives validated with linked evidence.",
  },
  {
    icon: ClipboardCheck,
    title: "Reviewer Console",
    desc: "Assign submissions to reviewers. Track status across companies and filing periods. Prioritize by deadline or risk.",
  },
  {
    icon: Scale,
    title: "Rules-Based Validation",
    desc: "Submissions are validated against jurisdiction-specific rules before they reach your team. Completeness and threshold checks are automated.",
  },
  {
    icon: FileCheck,
    title: "Resubmission Handling",
    desc: "Request clarification through the platform. Filers resubmit with version tracking. The full thread is preserved.",
  },
  {
    icon: Shield,
    title: "Immutable Audit Trail",
    desc: "Every filing, review decision, and approval is timestamped and tamper-proof. Complete audit records are always assembled.",
  },
  {
    icon: BarChart3,
    title: "Cross-Company Benchmarking",
    desc: "Aggregate procurement spend, workforce composition, and training investment by sector, company type, or filing period.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    desc: "Scoped permissions for filers, reviewers, supervisors, and auditors. Each jurisdiction's data is logically isolated.",
  },
  {
    icon: Database,
    title: "Data Sovereignty",
    desc: "Government data stays under government control. All records are exportable. No vendor lock-in on compliance data.",
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
  { q: "How long does implementation take?", a: "A pilot can be configured and launched within 4–6 weeks. Full deployment — covering all filing types, all entities, and reviewer training — typically takes 8–12 weeks depending on jurisdiction complexity." },
  { q: "What does a typical contract look like?", a: "Regulator licenses are scoped by jurisdiction, filing types, and number of reviewers. Pricing is annual with dedicated support included. We provide detailed proposals after a scoping conversation — no generic pricing tiers for government deployments." },
  { q: "What are the ongoing costs?", a: "Annual licensing covers platform access, hosting, support, and rule updates as regulations change. There are no per-filing or per-entity surcharges. Training for new staff is included." },
  { q: "Who owns the data?", a: "Regulator data belongs to the regulator. Company submissions belong to the submitting entities. LCA Desk hosts and secures the data but does not claim ownership. All records are exportable at any time." },
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
                <Image src="/illustrations/screenshot-secretariat.png" alt="LCA Desk Secretariat review console" width={800} height={500} quality={90} className="w-full" priority />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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

      <CTABanner
        headline="Ready to pilot LCA Desk with your secretariat?"
        body="A typical pilot covers one filing period, one filing type. Implementation takes 4–6 weeks. Schedule a scoping conversation with our team."
        primaryCTA={{ label: "Schedule Scoping Call", href: "/demo" }}
        secondaryCTA={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
}
