"use client";

import { motion } from "framer-motion";
import { FileCheck, Scale } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const filings = [
  { country: "\u{1F1EC}\u{1F1FE} Guyana", desc: "Half-yearly report with PDF comparative analysis and Excel expenditure/employment workbook, per LCA v4.1 guidelines", status: "Live" },
  { country: "\u{1F1F2}\u{1F1FF} Mozambique", desc: "REFC quarterly filing to INP covering employment, training, and national contracting, per DM 55/2024", status: "In Development" },
  { country: "\u{1F1F3}\u{1F1E6} Namibia", desc: "Annual performance reporting with procurement consolidation and employment/training data, per draft upstream LC policy", status: "In Development" },
  { country: "\u{1F1EC}\u{1F1ED} Ghana", desc: "Petroleum Commission annual plans and performance reports under LI 2204, plus Minerals Commission procurement plans under LI 2431", status: "Roadmap" },
  { country: "\u{1F1F3}\u{1F1EC} Nigeria", desc: "NCDMB statutory reporting templates covering procurement, employment, R&D, technology transfer, and marine services utilization", status: "Enterprise Roadmap" },
  { country: "\u{1F1FF}\u{1F1F2} Zambia", desc: "Mining local content rules under Statutory Instrument No. 68 of 2025, with procurement reporting requirements", status: "Roadmap" },
];

export default function BuiltAgainstOfficialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Credibility</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
          Built Against Official Filing Rules and Templates
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-text-secondary text-center mb-14 max-w-2xl mx-auto">
          Every jurisdiction pack is grounded in published regulatory requirements, official templates, and government-issued filing guidelines. No assumptions. No generic forms.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filings.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.06 }}
              className="bg-card rounded-xl border border-border p-5 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                {f.status === "Live" ? <FileCheck size={18} className="text-accent" /> : <Scale size={18} className="text-text-muted" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="font-semibold text-text-primary text-sm">{f.country}</h3>
                  <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                    f.status === "Live" ? "bg-accent text-white" : f.status === "In Development" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-text-muted"
                  }`}>{f.status}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
