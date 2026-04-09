"use client";

import { motion } from "framer-motion";

const vp = { once: true as const, margin: "-60px" as const };

export default function ProblemSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">The Problem</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-6 leading-tight">
          Every company in Guyana&apos;s oil sector has a compliance obligation.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-text-secondary text-center mb-14 max-w-2xl mx-auto">Most are still using spreadsheets, consultants, and guesswork.</motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "The Reporting Burden", icon: "5x", color: "from-orange-500 to-amber-500", desc: "5 mandatory submissions per year, complex Excel templates, overlapping deadlines that catch companies off guard." },
            { title: "The Complexity", icon: "40+", color: "from-amber-500 to-yellow-500", desc: "40+ reporting categories, Section 12 requirements, workforce and procurement breakdowns across multiple entities." },
            { title: "The Risk", icon: "$50M", color: "from-red-500 to-rose-500", desc: "GY$1M\u2013GY$50M penalties per offence, criminal liability for false submissions, active auditing by the Secretariat." },
          ].map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 border border-border card-lift relative overflow-hidden group">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />
              <div className={`text-3xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent mb-3`} style={{ fontFamily: "var(--font-tech)" }}>{card.icon}</div>
              <h3 className="font-semibold text-text-primary mb-2 text-lg">{card.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
