"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart3, FileText, Users, Calendar, Brain,
  Search, Check, ArrowRight,
} from "lucide-react";
import GeometricBg from "@/components/GeometricBg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-24 pb-16">
      <GeometricBg variant="topology" />
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-accent/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-[5%] w-[400px] h-[400px] bg-teal/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">Now Live in Guyana</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] text-text-primary mb-6">
            The Only Software Built for{" "}
            <span className="gradient-text-static">LCA Compliance.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-text-secondary max-w-xl mb-8 leading-relaxed">
            Manage all five mandatory Local Content Act submissions with AI narrative drafting, compliance gap detection, and one-click Secretariat-ready exports.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href="https://app.lcadesk.com/auth/signup?role=filer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] transition-all">
              Start 30-Day Trial <ArrowRight size={16} />
            </Link>
            <Link href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border text-text-secondary px-8 py-4 text-sm font-semibold hover:border-accent hover:text-accent transition-all">
              Book a Demo
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-text-muted">
            <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> 30-day trial, card collected</span>
            <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> Full Professional access</span>
            <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> Cancel anytime</span>
          </motion.div>
        </div>

        {/* Right — floating dashboard mockup */}
        <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-teal/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-white shadow-2xl shadow-black/[0.08] overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-border">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
                <div className="flex-1 mx-3"><div className="bg-white rounded-md px-4 py-1.5 text-xs text-text-muted text-center border border-border/50">app.lcadesk.com/dashboard</div></div>
              </div>
              <div className="flex">
                <div className="w-44 bg-gray-50 border-r border-border p-3 space-y-0.5 hidden xl:block">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium"><BarChart3 size={13} /> Dashboard</div>
                  <div className="flex items-center gap-2 px-3 py-2 text-text-muted text-xs"><FileText size={13} /> Submissions</div>
                  <div className="flex items-center gap-2 px-3 py-2 text-text-muted text-xs"><Users size={13} /> Workforce</div>
                  <div className="flex items-center gap-2 px-3 py-2 text-text-muted text-xs"><Calendar size={13} /> Calendar</div>
                  <div className="flex items-center gap-2 px-3 py-2 text-text-muted text-xs"><Brain size={13} /> AI Assistant</div>
                </div>
                <div className="flex-1 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div><p className="text-sm font-semibold text-text-primary">Compliance Dashboard</p><p className="text-[10px] text-text-muted">H1 2026 Filing Period</p></div>
                    <span className="text-[10px] font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-full">4 entities</span>
                  </div>
                  <div className="bg-surface rounded-xl p-3 border border-border">
                    <div className="flex items-center justify-between mb-1.5"><span className="text-[11px] font-medium text-text-secondary">Overall Completion</span><span className="text-[11px] font-bold text-accent">78%</span></div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-accent to-teal rounded-full" style={{ width: "78%" }} /></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[{ v: "3", l: "Due This Period", c: "text-text-primary" }, { v: "2", l: "AI Drafts Ready", c: "text-accent" }, { v: "12d", l: "Until Deadline", c: "text-amber-500" }].map((s, i) => (
                      <div key={i} className="bg-surface rounded-lg p-2.5 border border-border text-center">
                        <p className={`text-base font-bold ${s.c}`} style={{ fontFamily: "var(--font-tech)" }}>{s.v}</p>
                        <p className="text-[9px] text-text-muted leading-tight">{s.l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0"><Check size={10} className="text-white" /></div>
                      <div><p className="text-[11px] font-medium text-text-primary">AI narrative drafted for H1 Report</p><p className="text-[9px] text-text-muted">2 min ago</p></div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0"><Search size={10} className="text-amber-600" /></div>
                      <div><p className="text-[11px] font-medium text-text-primary">Gap detection found 1 issue</p><p className="text-[9px] text-text-muted">15 min ago</p></div>
                    </div>
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
