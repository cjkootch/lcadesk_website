"use client";

import { motion } from "framer-motion";
import { FileText, Brain, Download } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">How It Works</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-16">
          Three steps to compliant filings
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30" />
          {[
            { step: "01", title: "Enter your data", desc: "Input employment, procurement, and training data through guided wizards — or upload existing spreadsheets.", icon: FileText },
            { step: "02", title: "AI drafts your report", desc: "Claude AI generates Secretariat-ready narratives, detects compliance gaps, and flags issues before you file.", icon: Brain },
            { step: "03", title: "Export & submit", desc: "One-click PDF and Excel exports formatted exactly as the Secretariat expects. Full audit trail included.", icon: Download },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.15 }}
              className="text-center relative">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/10 to-teal/5 border border-accent/20 flex items-center justify-center mx-auto mb-6 relative z-10">
                <s.icon size={32} className="text-accent" />
              </div>
              <span className="text-accent text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-tech)" }}>Step {s.step}</span>
              <h3 className="font-semibold text-text-primary text-lg mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
