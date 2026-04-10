"use client";

import { motion } from "framer-motion";
import {
  FileText, Package, Download, Building2,
  CheckCircle, BarChart3, AlertTriangle, Clock,
  Users, Shield, History, Camera,
  Database, Layers, LineChart, PieChart,
  Brain, Search, Zap, FileCheck,
} from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const categories = [
  {
    title: "Filing Infrastructure",
    color: "from-accent to-teal",
    items: [
      { icon: FileText, label: "Filing packages with structured data and attachments" },
      { icon: Package, label: "Submission tracking across entities and periods" },
      { icon: Download, label: "Secretariat-ready export generation" },
      { icon: Building2, label: "Multi-entity and multi-jurisdiction support" },
    ],
  },
  {
    title: "Validation and Rules",
    color: "from-blue-500 to-cyan-500",
    items: [
      { icon: CheckCircle, label: "Completeness checks before submission" },
      { icon: BarChart3, label: "Plan vs. actual variance detection" },
      { icon: AlertTriangle, label: "Threshold enforcement and flagging" },
      { icon: Clock, label: "Deadline and filing window controls" },
    ],
  },
  {
    title: "Review and Audit",
    color: "from-purple-500 to-violet-500",
    items: [
      { icon: Users, label: "Reviewer workflows and queue management" },
      { icon: Shield, label: "Evidence handling and linked attachments" },
      { icon: History, label: "Version history and resubmission tracking" },
      { icon: Camera, label: "Audit trail and audit snapshots" },
    ],
  },
  {
    title: "Data and Insights",
    color: "from-amber-500 to-orange-500",
    items: [
      { icon: Database, label: "Supplier registry integration" },
      { icon: Layers, label: "Workforce and procurement taxonomies" },
      { icon: LineChart, label: "Cross-company benchmarking" },
      { icon: PieChart, label: "Compliance dashboards and analytics" },
    ],
  },
  {
    title: "Automation",
    color: "from-emerald-500 to-teal",
    items: [
      { icon: Brain, label: "AI narrative drafting for comparative analysis" },
      { icon: Search, label: "Anomaly detection and gap identification" },
      { icon: FileCheck, label: "Variance explanations and summaries" },
      { icon: Zap, label: "Workflow acceleration for filers and reviewers" },
    ],
  },
];

export default function FeaturesGridSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Platform Capabilities</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
          Structured for Regulatory-Grade Compliance
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div key={ci} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: ci * 0.06 }}
              className={`bg-card rounded-2xl border border-border p-6 relative overflow-hidden ${ci === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color}`} />
              <h3 className="font-semibold text-text-primary mb-4 text-[15px]">{cat.title}</h3>
              <div className="space-y-3">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="flex items-start gap-2.5">
                    <item.icon size={15} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} className="mt-12 text-center">
          <p className="text-text-secondary text-sm mb-4">All features included in your 30-day trial.</p>
          <a href="https://app.lcadesk.com/auth/signup?role=filer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all">
            Start Free Trial
          </a>
        </motion.div>
      </div>
    </section>
}
