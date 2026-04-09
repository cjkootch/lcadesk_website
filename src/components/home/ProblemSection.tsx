"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Clock, AlertTriangle, Users } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const cards = [
  { icon: Calendar, title: "Recurring Filing Deadlines", desc: "Half-yearly, quarterly, and annual filings recur by law. Miss one and penalties compound. Most teams track deadlines in calendars and email threads." },
  { icon: Building2, title: "Multi-Entity Reporting", desc: "Operators, contractors, and subcontractors all file separately. A single project can generate dozens of overlapping submissions across entities." },
  { icon: Clock, title: "Manual Review Bottlenecks", desc: "Regulators receive filings by email and spreadsheet. Review cycles stretch weeks because every submission requires manual validation and follow-up." },
  { icon: AlertTriangle, title: "Audit Exposure", desc: "No version history, no evidence linking, no traceable approval chain. When the regulator audits, companies scramble to reconstruct what was filed and why." },
  { icon: Users, title: "Regulator-Industry Coordination", desc: "Resubmissions, clarification requests, and approvals happen over email. Neither side has a shared, structured record of the compliance interaction." },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Why This Demands Infrastructure</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4 leading-tight">
          Mandated. Recurring. Auditable.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-text-secondary text-center mb-14 max-w-2xl mx-auto">
          Local content obligations are mandated by law. Filings recur on fixed schedules. Regulators must review, validate, and audit every submission. Most jurisdictions still operate through email, spreadsheets, and fragmented portals.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.07 }}
              className={`bg-card rounded-2xl p-6 border border-border card-lift group ${i >= 3 ? "lg:col-span-1" : ""}`}>
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <card.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{card.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
