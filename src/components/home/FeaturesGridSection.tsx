"use client";

import { motion } from "framer-motion";
import { FileText, Calendar, BarChart3, Shield, Users, Download } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const features = [
  { icon: FileText, title: "All 5 Submission Types", desc: "Half-Yearly Reports (H1 & H2), Annual Plans, Master Plans, Performance Reports." },
  { icon: Calendar, title: "Filing Calendar & Alerts", desc: "Never miss a deadline. Automated reminders for all filing periods." },
  { icon: BarChart3, title: "Dashboards & Analytics", desc: "Workforce composition, procurement spend, training investment — all visualized." },
  { icon: Shield, title: "Audit Trail", desc: "Every change logged with user, timestamp, and reason. Secretariat-ready." },
  { icon: Users, title: "Multi-Entity Support", desc: "Manage compliance for multiple subsidiaries, JVs, and project entities." },
  { icon: Download, title: "Secretariat-Ready Exports", desc: "Export the Excel template, Comparative Analysis PDF, and Notice of Submission letter — all pre-filled. Everything the Secretariat requires, in one click." },
];

export default function FeaturesGridSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Platform Features</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
          Everything You Need for LCA Compliance
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.06 }}
              className="bg-card rounded-2xl border border-border p-7 card-lift group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <f.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2 text-[15px]">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
