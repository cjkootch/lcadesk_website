"use client";

import { motion } from "framer-motion";
import {
  Scale, Clock, FileCheck, BarChart3, CheckCircle, AlertTriangle,
  Brain, Search, FileText, Zap,
} from "lucide-react";
import GeometricBg from "@/components/GeometricBg";

const vp = { once: true as const, margin: "-60px" as const };

const rulesItems = [
  { icon: Scale, label: "Jurisdiction-specific filing schemas" },
  { icon: FileCheck, label: "Required fields and evidence requirements" },
  { icon: Clock, label: "Deadlines, filing windows, and cadence controls" },
  { icon: CheckCircle, label: "Completeness and threshold enforcement" },
  { icon: BarChart3, label: "Plan vs. actual variance checks" },
  { icon: AlertTriangle, label: "Validation logic and export requirements" },
];

const aiItems = [
  { icon: Brain, label: "Draft comparative analysis narratives" },
  { icon: Search, label: "Flag compliance gaps and missing evidence" },
  { icon: FileText, label: "Explain variance between plan and actuals" },
  { icon: Zap, label: "Accelerate repetitive review workflows" },
];

export default function RulesAndAutomationSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 30%, #047857 60%, #064E3B 100%)" }}>
      <GeometricBg variant="circuits" />
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-emerald-300 text-sm font-semibold tracking-widest uppercase mb-4">Platform Engine</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-white text-center mb-4">
          Built on Regulatory Rules and Workflow Automation
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-emerald-100/60 text-center mb-14 max-w-2xl mx-auto">
          The rules engine encodes each jurisdiction's filing requirements as structured, enforceable logic. AI accelerates the work that rules alone cannot automate.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rules-as-Code */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="bg-white/[0.14] backdrop-blur-md border border-white/20 rounded-2xl p-7 shadow-lg shadow-black/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center">
                <Scale size={20} className="text-emerald-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Rules-as-Code Engine</h3>
                <span className="text-[10px] font-medium text-emerald-300 uppercase tracking-wider">Foundation</span>
              </div>
            </div>
            <p className="text-emerald-100/85 text-sm mb-5">
              Every jurisdiction's filing obligations are encoded as configurable validation rules. No custom code per country. Change the schema, and the platform enforces the new requirements automatically.
            </p>
            <div className="space-y-2.5">
              {rulesItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <item.icon size={15} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-100/90">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Automation */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.1 }}
            className="bg-white/[0.14] backdrop-blur-md border border-white/20 rounded-2xl p-7 shadow-lg shadow-black/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center">
                <Brain size={20} className="text-emerald-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">AI Workflow Automation</h3>
                <span className="text-[10px] font-medium text-emerald-300 uppercase tracking-wider">Acceleration Layer</span>
              </div>
            </div>
            <p className="text-emerald-100/85 text-sm mb-5">
              AI handles the narrative, interpretive, and pattern-detection work that rules engines cannot. It drafts, flags, and explains, so filers and reviewers spend time on exceptions, not data assembly.
            </p>
            <div className="space-y-2.5 mb-6">
              {aiItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <item.icon size={15} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-100/90">{item.label}</span>
                </div>
              ))}
            </div>
            {/* Mini demo */}
            <div className="bg-gray-900/60 rounded-xl p-4 border border-white/5">
              <p className="text-[10px] text-emerald-400 font-mono mb-1">&gt; Drafting H1 2026 Comparative Analysis...</p>
              <p className="text-[10px] text-gray-400 font-mono">Section: Employment &amp; Training</p>
              <p className="text-[10px] text-gray-300 font-mono mt-1">"The contractor employed 847 Guyanese nationals during H1 2026, representing 92% of total workforce, an increase of 4.2% over the prior period..."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
