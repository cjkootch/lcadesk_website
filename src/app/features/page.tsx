"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  BarChart3,
  Shield,
  Users,
  Download,
  Lock,
  ClipboardCheck,
  Eye,
  ArrowRight,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import GeometricBg from "@/components/GeometricBg";
import UIFrame from "@/components/UIFrame";
import CTABanner from "@/components/CTABanner";
import { BrandedIconDark } from "@/components/BrandedIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const gridFeatures = [
  {
    icon: FileText,
    title: "All 5 Submission Types",
    description:
      "Half-Yearly Reports (H1 & H2), Annual Plans, Master Plans, Performance Reports",
  },
  {
    icon: Calendar,
    title: "Filing Calendar & Alerts",
    description:
      "Never miss a deadline. Automated reminders for all filing periods.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description: "Workforce, procurement, training — all visualized.",
  },
  {
    icon: Shield,
    title: "Audit Trail",
    description: "Every change logged with user, timestamp, reason.",
  },
  {
    icon: Users,
    title: "Multi-Entity Support",
    description:
      "Manage multiple subsidiaries, JVs, and project entities.",
  },
  {
    icon: Download,
    title: "One-Click Export",
    description: "Secretariat-ready PDFs and Excel files.",
  },
];

const steps = [
  {
    title: "Create your entity",
    description:
      "Add your company details and select which submission types apply.",
  },
  {
    title: "Enter your data",
    description: "Use the guided wizard or upload spreadsheets.",
  },
  {
    title: "AI reviews & drafts",
    description:
      "Gap detection runs automatically. AI drafts narrative sections.",
  },
  {
    title: "Export & submit",
    description: "Download Secretariat-ready reports in one click.",
  },
];

const securityHighlights = [
  {
    icon: Lock,
    title: "Encryption Everywhere",
    description:
      "TLS 1.3 in transit, AES-256 at rest. Your data is protected at every layer.",
  },
  {
    icon: ClipboardCheck,
    title: "Role-Based Access Control",
    description:
      "Granular permissions — viewer, editor, submitter, admin — per entity.",
  },
  {
    icon: Eye,
    title: "Full Audit Trail",
    description:
      "Every change logged with user, timestamp, and reason. Tamper-proof.",
  },
];

const comparisonRows = [
  { feature: "Data entry", desk: "Guided wizard with validation", old: "Manual spreadsheets" },
  { feature: "Narrative drafting", desk: "AI-generated, editable", old: "Written from scratch" },
  { feature: "Gap detection", desk: "Automatic before filing", old: "Manual review (if any)" },
  { feature: "Deadlines", desk: "Automated calendar & alerts", old: "Track manually" },
  { feature: "Export format", desk: "Secretariat-ready PDF/Excel", old: "Copy-paste into templates" },
  { feature: "Audit trail", desk: "Built-in, tamper-proof", old: "None" },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* 1. Hero */}
      <HeroSection
        eyebrow="Features"
        headline="Everything you need for LCA compliance."
        sub="From guided data entry to AI narrative drafting — LCA Desk handles the complexity so you can focus on your business."
        geometricVariant="nodes"
      />

      {/* 2. AI Features Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-deep to-emerald-deep/90 py-24">
        <GeometricBg variant="circuits" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center text-3xl font-bold text-white md:text-4xl"
          >
            AI-Powered Compliance
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* AI Narrative Drafting */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className="mb-3 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                MOST REQUESTED
              </span>
              <h3 className="mb-2 text-xl font-semibold text-white">
                AI Narrative Drafting
              </h3>
              <p className="mb-5 text-sm text-white/70">
                Feed your data. Get Secretariat-ready narratives. The AI drafts
                Comparative Analysis Reports in the formal tone regulators
                expect.
              </p>
              <UIFrame title="ai-narrative-draft.sh">
                <pre className="text-xs leading-relaxed text-emerald-300">
                  {`> Drafting H1 2026 Comparative Analysis...
Section: Employment & Training
The contractor employed 847 Guyanese nationals
during H1 2026, representing 92% of total
workforce...`}
                </pre>
              </UIFrame>
            </motion.div>

            {/* Compliance Gap Detection */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className="mb-3 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                PROACTIVE
              </span>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Compliance Gap Detection
              </h3>
              <p className="mb-5 text-sm text-white/70">
                Before you file, LCA Desk scans your submission for missing
                fields, inconsistencies, and red flags.
              </p>
              <UIFrame title="gap-scan-results.log">
                <pre className="text-xs leading-relaxed text-emerald-300">
                  {`⚠ Gap detected: Section 4.2 — Local procurement
  (67%) below 80% target.
✓ Section 3.1 Employment data: Complete
✓ Section 5.1 Training expenditure: Complete`}
                </pre>
              </UIFrame>
            </motion.div>

            {/* Automatic Data Extraction */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/60">
                COMING SOON
              </span>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Automatic Data Extraction
              </h3>
              <p className="text-sm text-white/70">
                Upload payroll exports, procurement spreadsheets, and training
                records. AI maps fields to LCA categories automatically.
              </p>
            </motion.div>

            {/* Ask the LCA Expert */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className="mb-3 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                AVAILABLE NOW
              </span>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Ask the LCA Expert
              </h3>
              <p className="mb-5 text-sm text-white/70">
                In-app AI assistant trained on the LCA Act 2021 and Version 4.1
                guidelines.
              </p>
              <UIFrame title="lca-expert-chat">
                <pre className="text-xs leading-relaxed text-emerald-300">
                  {`Q: What's the deadline for H1 2026?
A: July 30, 2026. Per Section 21(1), reports
due within 30 days of each half-year period
ending.`}
                </pre>
              </UIFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-text-primary"
        >
          Platform Features
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gridFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="rounded-xl border border-border bg-card p-6"
            >
              <BrandedIconDark icon={f.icon} size="md" className="mb-4" />
              <h3 className="mb-1 text-lg font-semibold text-text-primary">
                {f.title}
              </h3>
              <p className="text-sm text-text-secondary">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center text-3xl font-bold text-text-primary"
          >
            How It Works
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Security Highlights */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-text-primary"
        >
          Built for Security
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {securityHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <BrandedIconDark icon={item.icon} size="md" className="mx-auto mb-4" />
              <h3 className="mb-1 text-lg font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Comparison Table */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-text-primary"
          >
            LCA Desk vs. The Old Way
          </motion.h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-card">
                  <th className="px-5 py-3 font-semibold text-text-primary">
                    Feature
                  </th>
                  <th className="px-5 py-3 font-semibold text-accent">
                    LCA Desk
                  </th>
                  <th className="px-5 py-3 font-semibold text-text-muted">
                    Spreadsheets & Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-card/50" : "bg-card"}
                  >
                    <td className="px-5 py-3 font-medium text-text-primary">
                      {row.feature}
                    </td>
                    <td className="px-5 py-3 text-text-secondary">
                      {row.desk}
                    </td>
                    <td className="px-5 py-3 text-text-muted">{row.old}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <CTABanner
        headline="Ready to modernize your LCA workflow?"
        body="Start your 30-day trial today. Full Professional access, card collected at signup."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </main>
  );
}
