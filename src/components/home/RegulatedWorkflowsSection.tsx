"use client";

import { motion } from "framer-motion";
import { Shield, Users, History, FileCheck, Lock, Eye } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const items = [
  { icon: Users, title: "Role-Based Permissions", desc: "Filers, reviewers, supervisors, and auditors each see only what they need. Access is scoped by entity, jurisdiction, and role." },
  { icon: FileCheck, title: "Evidence Traceability", desc: "Every data point links to supporting documents. Invoices, payroll exports, training certificates, and contracts attach directly to line items." },
  { icon: History, title: "Version History", desc: "Every submission version is preserved. Resubmissions, amendments, and clarifications are tracked with full context." },
  { icon: Shield, title: "Audit Trail", desc: "Every action is logged with user, timestamp, and reason. Immutable records that regulators can inspect at any point." },
  { icon: Eye, title: "Regulator-Ready Review Records", desc: "Structured review decisions, validation scores, and approval chains. No more reconstructing what happened from email threads." },
  { icon: Lock, title: "Enterprise Security Posture", desc: "Encryption at rest and in transit, secure authentication, and data isolation. Built for regulated environments handling sensitive compliance data." },
];

export default function RegulatedWorkflowsSection() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-emerald-300 text-sm font-semibold tracking-widest uppercase mb-4">Trust and Auditability</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-white text-center mb-12">
          Built for Regulated Workflows
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.06 }}
              className="bg-white/[0.07] backdrop-blur border border-white/10 rounded-xl p-5">
              <div className="w-9 h-9 rounded-lg bg-emerald-400/20 flex items-center justify-center mb-3">
                <item.icon size={18} className="text-emerald-300" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
              <p className="text-emerald-100/60 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
