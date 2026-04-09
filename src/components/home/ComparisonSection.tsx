"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const rows = [
  { cap: "Submission intake", old: "Emailed spreadsheets and PDFs", desk: "Structured filing workflows" },
  { cap: "Validation", old: "Manual checking by reviewer", desk: "Rules-based validation before submission" },
  { cap: "Resubmissions", old: "Reply-all email chains", desk: "Versioned resubmissions with linked comments" },
  { cap: "Evidence", old: "Scattered attachments", desk: "Evidence linked to specific line items" },
  { cap: "Reviewer workflow", old: "Inbox and personal trackers", desk: "Reviewer queues with status tracking" },
  { cap: "Audit trail", old: "Reconstruct from email", desk: "Immutable, timestamped audit records" },
  { cap: "Benchmarking", old: "Manual aggregation", desk: "Cross-company, cross-period analytics" },
  { cap: "Narrative sections", old: "Copy-paste from prior filings", desk: "AI-drafted, reviewer-approved" },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">The Shift</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
          Replace Email, Excel, and PDF Chaos
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-gray-50 border-b border-border">
            <div className="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Capability</div>
            <div className="p-4 text-xs font-semibold text-red-500 uppercase tracking-wider text-center">Legacy Process</div>
            <div className="p-4 text-xs font-semibold text-accent uppercase tracking-wider text-center">LCA Desk</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? "" : "bg-gray-50/50"} ${i < rows.length - 1 ? "border-b border-border/50" : ""}`}>
              <div className="p-4 text-sm font-medium text-text-primary">{row.cap}</div>
              <div className="p-4 text-sm text-center flex items-center justify-center gap-1.5 text-text-muted"><X size={14} className="text-red-400 flex-shrink-0" /> <span className="text-xs">{row.old}</span></div>
              <div className="p-4 text-sm text-center flex items-center justify-center gap-1.5 text-text-secondary font-medium"><Check size={14} className="text-accent flex-shrink-0" /> <span className="text-xs">{row.desk}</span></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
