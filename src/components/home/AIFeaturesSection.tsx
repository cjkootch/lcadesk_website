"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Search, FileText, MessageSquare, ArrowRight } from "lucide-react";
import GeometricBg from "@/components/GeometricBg";
import UIFrame from "@/components/UIFrame";

const vp = { once: true as const, margin: "-60px" as const };

export default function AIFeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 30%, #047857 60%, #064E3B 100%)" }}>
      <GeometricBg variant="circuits" />
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-emerald-300 text-sm font-semibold tracking-widest uppercase mb-4">Powered by Claude AI</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-white text-center mb-4">
          The AI That Does the Hard Work
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} className="text-emerald-100/60 text-center mb-14 max-w-2xl mx-auto">
          Four AI capabilities purpose-built for LCA compliance — so you can focus on running your business.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Brain size={18} className="text-emerald-300" />
              <h3 className="text-white font-semibold">AI Narrative Drafting</h3>
              <span className="text-[10px] font-medium bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full ml-auto">MOST REQUESTED</span>
            </div>
            <p className="text-emerald-100/70 text-sm mb-4">Feed LCA Desk your employment, expenditure, and capacity data. The AI drafts the full Comparative Analysis narrative in the formal tone the Secretariat expects.</p>
            <UIFrame title="AI Narrative Drafting">
              <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                <p className="text-emerald-400">&gt; Drafting H1 2026 Comparative Analysis...</p>
                <p className="text-gray-400 mt-1">Section: Employment &amp; Training</p>
                <p className="text-gray-300 mt-1">The contractor employed 847 Guyanese nationals during H1 2026, representing 92% of total workforce...</p>
              </div>
            </UIFrame>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Search size={18} className="text-emerald-300" />
              <h3 className="text-white font-semibold">Compliance Gap Detection</h3>
              <span className="text-[10px] font-medium bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full ml-auto">PROACTIVE</span>
            </div>
            <p className="text-emerald-100/70 text-sm mb-4">Before you file, LCA Desk scans your data for missing fields, inconsistencies, and potential red flags.</p>
            <UIFrame title="Gap Detection Report">
              <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                <p className="text-amber-400">{"\u26a0"} Gap detected: Section 4.2 — Local procurement percentage (67%) falls below the 80% target threshold.</p>
                <p className="text-emerald-400 mt-1">{"\u2713"} Section 3.1 Employment data: Complete</p>
                <p className="text-emerald-400">{"\u2713"} Section 5.1 Training expenditure: Complete</p>
              </div>
            </UIFrame>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText size={18} className="text-emerald-300" />
              <h3 className="text-white font-semibold">Automatic Data Extraction</h3>
              <span className="text-[10px] font-medium bg-white/10 text-gray-300 px-2 py-0.5 rounded-full ml-auto">COMING SOON</span>
            </div>
            <p className="text-emerald-100/70 text-sm">Upload payroll exports, procurement spreadsheets, and training records. The AI maps fields to LCA categories automatically.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare size={18} className="text-emerald-300" />
              <h3 className="text-white font-semibold">Ask the LCA Expert</h3>
              <span className="text-[10px] font-medium bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full ml-auto">AVAILABLE NOW</span>
            </div>
            <p className="text-emerald-100/70 text-sm mb-4">In-app AI assistant trained on the LCA Act 2021 and Version 4.1 guidelines. Ask any compliance question.</p>
            <UIFrame title="LCA Expert">
              <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                <p className="text-blue-400">Q: What&apos;s the deadline for H1 2026 half-yearly reports?</p>
                <p className="text-gray-300 mt-1">A: July 30, 2026. Per Section 21(1), half-yearly reports must be submitted within 30 days of each half-year period ending.</p>
              </div>
            </UIFrame>
          </motion.div>
        </div>
        <div className="text-center mt-8">
          <Link href="/features" className="text-emerald-300 hover:text-white text-sm font-medium inline-flex items-center gap-1 transition">
            See all features <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
