"use client";

import { motion } from "framer-motion";
import { Settings, Database, FileCheck, ClipboardCheck } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const steps = [
  { step: "01", title: "Configure jurisdiction pack", desc: "Select the country, filing type, and reporting period. The platform loads the correct schema, validation rules, deadlines, and export format.", icon: Settings },
  { step: "02", title: "Collect and structure filing data", desc: "Enter workforce, procurement, and training data through guided forms, or upload existing spreadsheets. Evidence files attach directly to line items.", icon: Database },
  { step: "03", title: "Validate and submit", desc: "The rules engine checks completeness, thresholds, and required evidence before submission. AI drafts narrative sections and flags compliance gaps.", icon: FileCheck },
  { step: "04", title: "Review, resolve, and audit", desc: "Regulators review in structured queues. Clarification requests and resubmissions flow through the platform. Every action is logged in a traceable audit trail.", icon: ClipboardCheck },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">How It Works</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-16">
          From Filing to Audit in One Platform
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line — behind icons */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30 z-0" />
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.1 }}
              className="text-center relative z-10">
              <div className="w-24 h-24 rounded-2xl border border-accent/20 flex items-center justify-center mx-auto mb-6 bg-white">
                <s.icon size={32} className="text-accent" />
              </div>
              <span className="text-accent text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-tech)" }}>Step {s.step}</span>
              <h3 className="font-semibold text-text-primary text-[15px] mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} className="mt-12 text-center">
          <a href="https://app.lcadesk.com/auth/signup?role=filer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all">
            Start Your Free Trial
          </a>
          <p className="text-xs text-text-muted mt-3">Full Professional access for 30 days</p>
        </motion.div>
      </div>
    </section>
  );
}
