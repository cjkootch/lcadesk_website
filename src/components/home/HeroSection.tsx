"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Shield, Globe, FileCheck } from "lucide-react";
import GeometricBg from "@/components/GeometricBg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-24 pb-16">
      <GeometricBg variant="topology" />
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-accent/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-[5%] w-[400px] h-[400px] bg-teal/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left copy */}
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">Live in Guyana &middot; Multi-Jurisdiction Expansion</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] text-text-primary mb-6">
            The Compliance Operating System for{" "}
            <span className="gradient-text-static">Local Content Programs</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-text-secondary max-w-xl mb-8 leading-relaxed">
            LCA Desk digitizes mandated local content filing, validation, regulator review, and audit workflows for extractive industries. Built for regulators and industry. Configurable for every jurisdiction.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] transition-all">
              Request a Demo <ArrowRight size={16} />
            </Link>
            <Link href="/for-regulators"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border text-text-secondary px-8 py-4 text-sm font-semibold hover:border-accent hover:text-accent transition-all">
              For Regulators
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-text-muted">
            <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> Regulatory-grade workflows</span>
            <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> Jurisdiction-configurable</span>
            <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> Industry + regulator access</span>
          </motion.div>
        </div>

        {/* Right: platform schematic */}
        <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-teal/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-white shadow-2xl shadow-black/[0.08] overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-border">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
                <div className="flex-1 mx-3"><div className="bg-white rounded-md px-4 py-1.5 text-xs text-text-muted text-center border border-border/50">app.lcadesk.com/reviewer/queue</div></div>
              </div>
              {/* Reviewer console mockup */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Submission Review Queue</p>
                    <p className="text-[10px] text-text-muted">Guyana H1 2026 Filing Period</p>
                  </div>
                  <span className="text-[10px] font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-full">12 pending review</span>
                </div>
                {/* Submission rows */}
                <div className="space-y-2">
                  {[
                    { company: "Atlantic Marine Services Ltd", type: "Half-Yearly Report", status: "Submitted", statusColor: "bg-blue-100 text-blue-700", score: "94%" },
                    { company: "Guyana Oilfield Supplies Inc", type: "Half-Yearly Report", status: "Needs Information", statusColor: "bg-amber-100 text-amber-700", score: "71%" },
                    { company: "Caribbean Drilling Corp", type: "Annual Plan", status: "Under Review", statusColor: "bg-purple-100 text-purple-700", score: "88%" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-surface border border-border">
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-medium text-text-primary truncate">{row.company}</p>
                        <p className="text-[9px] text-text-muted">{row.type}</p>
                      </div>
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${row.statusColor}`}>{row.status}</span>
                      <div className="text-right flex-shrink-0">
                        <p className="text-[10px] font-bold text-accent">{row.score}</p>
                        <p className="text-[8px] text-text-muted">Validation</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Bottom bar */}
                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                    <Shield size={11} className="text-accent" /> Audit trail active
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                    <Globe size={11} className="text-accent" /> Guyana LCA v4.1
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                    <FileCheck size={11} className="text-accent" /> 47 rules validated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <div className="w-6 h-10 rounded-full border-2 border-accent/30 flex items-start justify-center p-1.5">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
        </div>
      </motion.div>
    </section>
  );
}
