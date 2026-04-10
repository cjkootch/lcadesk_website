"use client";

import { motion } from "framer-motion";
import { Globe, GitBranch, Database } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const layers = [
  {
    icon: Globe,
    title: "Jurisdiction Packs",
    subtitle: "Configuration Layer",
    desc: "Each jurisdiction runs on configurable filing templates, validation rules, deadlines, evidence requirements, and export formats.",
    items: ["Guyana", "Namibia", "Mozambique", "Ghana", "Suriname", "Zambia", "Nigeria"],
    color: "from-accent to-teal",
    bgColor: "bg-accent/5",
    borderColor: "border-accent/20",
  },
  {
    icon: GitBranch,
    title: "Workflow Engine",
    subtitle: "Process Layer",
    desc: "Standardized workflows for filers, regulators, and supervisors reduce back-and-forth and create a traceable compliance record.",
    items: ["Draft", "Submit", "Review", "Needs Information", "Resubmit", "Approve / Reject", "Audit"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Database,
    title: "Structured Data Layer",
    subtitle: "Data Layer",
    desc: "LCA Desk turns fragmented spreadsheets, PDFs, and attachments into normalized, auditable compliance data.",
    items: ["Supplier registry", "Workforce data", "Procurement data", "Training records", "Evidence files", "Benchmark analytics"],
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

export default function PlatformArchitectureSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Architecture</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
          Built as Regulatory-Grade Compliance Infrastructure
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-text-secondary text-center mb-14 max-w-2xl mx-auto">
          Three reusable layers that map to every local content filing regime. Configure a new jurisdiction without custom code.
        </motion.p>

        <div className="space-y-5">
          {layers.map((layer, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border p-7 md:p-8 ${layer.bgColor} ${layer.borderColor} relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${layer.color}`} />
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-5 items-start">
                {/* Icon + Title */}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} bg-opacity-15 flex items-center justify-center flex-shrink-0`}
                    style={{ background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 12%, transparent), color-mix(in srgb, var(--color-teal) 8%, transparent))` }}>
                    <layer.icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-0.5">{layer.subtitle}</p>
                    <h3 className="font-display text-lg text-text-primary">{layer.title}</h3>
                  </div>
                </div>
                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed md:pt-1">{layer.desc}</p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 md:max-w-[200px]">
                  {layer.items.map((item, j) => (
                    <span key={j} className="text-[10px] font-medium bg-white/80 border border-border/60 text-text-secondary px-2.5 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} className="mt-10 text-center">
          <a href="https://app.lcadesk.com/auth/signup?role=filer" className="text-sm font-semibold text-accent hover:underline">
            See the platform in action — start a free trial &rarr;
          </a>
        </motion.div>
      </div>
    </section>
}
