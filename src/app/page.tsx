"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Droplets, Building2, Ship, HardHat, Factory, Truck, Leaf, Zap,
  FileText, Calendar, BarChart3, Shield, Users, Download,
  Brain, Search, MessageSquare, ArrowRight, X, Check,
  Briefcase, Package, ClipboardCheck,
} from "lucide-react";
import Ticker from "@/components/Ticker";
import StatCard from "@/components/StatCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import PricingToggle from "@/components/PricingToggle";
import GeometricBg from "@/components/GeometricBg";
import UIFrame from "@/components/UIFrame";

const trustBadges = [
  { icon: Droplets, label: "Oil & Gas" },
  { icon: Building2, label: "Financial Services" },
  { icon: Ship, label: "Maritime & Shipping" },
  { icon: HardHat, label: "Construction" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Truck, label: "Logistics" },
  { icon: Leaf, label: "Environmental" },
  { icon: Zap, label: "Energy Services" },
];

const features = [
  { icon: FileText, title: "All 5 Submission Types", desc: "Half-Yearly Reports (H1 & H2), Annual Plans, Master Plans, Performance Reports." },
  { icon: Calendar, title: "Filing Calendar & Alerts", desc: "Never miss a deadline. Automated reminders for all filing periods." },
  { icon: BarChart3, title: "Dashboards & Analytics", desc: "Workforce composition, procurement spend, training investment — all visualized." },
  { icon: Shield, title: "Audit Trail", desc: "Every change logged with user, timestamp, and reason. Secretariat-ready." },
  { icon: Users, title: "Multi-Entity Support", desc: "Manage compliance for multiple subsidiaries, JVs, and project entities." },
  { icon: Download, title: "One-Click Export", desc: "Generate Secretariat-ready PDFs and Excel files with a single click." },
];

const markets = [
  { flag: "\u{1F1EC}\u{1F1FE}", name: "Guyana", status: "LIVE", desc: "LCA v4.1 \u00b7 5 submission types \u00b7 GY$50M penalties", cta: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" },
  { flag: "\u{1F1F3}\u{1F1EC}", name: "Nigeria", status: "COMING SOON", desc: "NCDMB \u00b7 Nigerian Content Plans \u00b7 5% project value penalties", cta: "Join Waitlist", href: "/markets/nigeria" },
  { flag: "\u{1F1F9}\u{1F1F9}", name: "Trinidad & Tobago", status: "COMING SOON", desc: "MEEI PLCC \u00b7 Local Content Policy \u00b7 EST timezone", cta: "Join Waitlist", href: "/markets/trinidad" },
  { flag: "\u{1F1EC}\u{1F1ED}", name: "Ghana", status: "COMING SOON", desc: "Petroleum Commission \u00b7 LI 2204 regulations", cta: "Join Waitlist", href: "/markets/ghana" },
  { flag: "\u{1F1F2}\u{1F1FF}", name: "Mozambique", status: "COMING SOON", desc: "INP \u00b7 Law 15/2017 \u00b7 LNG sector expansion", cta: "Join Waitlist", href: "/markets/mozambique" },
  { flag: "\u{1F1F3}\u{1F1E6}", name: "Namibia", status: "COMING SOON", desc: "Cabinet-approved LCA policy \u00b7 TotalEnergies, Shell, Galp", cta: "Join Waitlist", href: "/markets/namibia" },
];

const faqItems = [
  { q: "Who is required to file LCA half-yearly reports?", a: "Every contractor, sub-contractor, and licensee operating under a petroleum agreement in Guyana must file half-yearly reports with the Local Content Secretariat. This applies to all companies on the Local Content Register, regardless of size or nationality." },
  { q: "What are the penalties for non-compliance?", a: "Penalties range from GY$1 million to GY$50 million per offence. False or misleading submissions are a criminal offence. The Secretariat is actively auditing and following up on late or missing submissions." },
  { q: "What\u2019s the difference between Lite and Pro?", a: "Lite ($99/month) includes platform access plus $25 per report generated \u2014 ideal for infrequent filers. Pro ($599/month) includes unlimited report generation plus AI Narrative Drafting and Compliance Gap Detection. After 4 reports per month, Pro is cheaper than Lite." },
  { q: "Does the 14-day trial include AI features?", a: "Yes. Your free 14-day trial gives you full Pro access \u2014 including AI Narrative Drafting and Compliance Gap Detection \u2014 with no credit card required." },
  { q: "What happens to my data after the trial ends?", a: "Your data is saved. If you don\u2019t upgrade, you\u2019ll be downgraded to a read-only view. Upgrade anytime to regain full access and continue where you left off." },
  { q: "Will LCA Desk cover Nigeria and other markets?", a: "Yes. Nigeria (NCDMB), Trinidad & Tobago, Ghana, Mozambique, and Namibia are in active development. Join the waitlist on the Markets page to be notified at launch." },
  { q: "Can you handle the Comparative Analysis narrative sections?", a: "Yes \u2014 this is LCA Desk\u2019s signature AI feature. The AI reads your expenditure, employment, and capacity development data and drafts the full narrative in the formal tone the Secretariat expects. You review and approve before export." },
];

const vp = { once: true as const, margin: "-60px" as const };

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — split layout with floating dashboard */}
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
              <Link href="https://app.lcadesk.com/auth/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] transition-all">
                Start Free 14-Day Trial <ArrowRight size={16} />
              </Link>
              <Link href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border text-text-secondary px-8 py-4 text-sm font-semibold hover:border-accent hover:text-accent transition-all">
                Book a Demo
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-text-muted">
              <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> No credit card required</span>
              <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> Full Pro access for 14 days</span>
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
                      <div><p className="text-sm font-semibold text-text-primary">Compliance Dashboard</p><p className="text-[10px] text-text-muted">H1 2025 Filing Period</p></div>
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

      {/* 3. Ticker */}
      <Ticker />

      {/* 3b. Choose Your Path */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Who Are You?</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            LCA Desk Serves Three Audiences
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Whether you&apos;re filing compliance reports, bidding on contracts, or looking for work &mdash; the Local Content Act affects you. Choose your path.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: ClipboardCheck,
                title: "LCA Compliance Filers",
                desc: "Contractors, sub-contractors, and licensees required to file half-yearly reports, annual plans, and master plans with the Secretariat.",
                cta: "Start Free Trial",
                href: "https://app.lcadesk.com/auth/signup",
                color: "from-accent to-teal",
                tag: "Software Platform",
              },
              {
                icon: Briefcase,
                title: "Guyanese Job Seekers",
                desc: "Guyanese nationals looking for oil sector employment. The LCA mandates that contractors give you first consideration in hiring.",
                cta: "Browse Jobs",
                href: "/jobs",
                color: "from-blue-500 to-cyan-500",
                tag: "Free",
              },
              {
                icon: Package,
                title: "Guyanese Suppliers",
                desc: "Local companies seeking procurement opportunities. Contractors must give first consideration to LCS-registered Guyanese suppliers.",
                cta: "Browse Opportunities",
                href: "/opportunities",
                color: "from-amber-500 to-yellow-500",
                tag: "Free",
              },
            ].map((path, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-7 card-lift relative overflow-hidden group flex flex-col">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${path.color}`} />
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${path.color} bg-opacity-15 flex items-center justify-center`}
                    style={{ background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 15%, transparent), color-mix(in srgb, var(--color-teal) 10%, transparent))` }}>
                    <path.icon size={22} className="text-accent" />
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    path.tag === "Free" ? "bg-emerald-100 text-emerald-700" : "bg-accent/10 text-accent"
                  }`}>{path.tag}</span>
                </div>
                <h3 className="font-display text-lg text-text-primary mb-2">{path.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">{path.desc}</p>
                <Link href={path.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                    i === 0
                      ? "bg-gradient-to-r from-accent to-teal text-white shadow-md shadow-accent/20 hover:shadow-lg"
                      : "border-2 border-accent text-accent hover:bg-accent hover:text-white"
                  }`}>
                  {path.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust badges */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} className="text-center text-text-muted text-xs mb-10 uppercase tracking-[0.2em] font-medium">
            Built for every sector in Guyana&apos;s oil &amp; gas ecosystem
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {trustBadges.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.04 }}
                className="flex flex-col items-center gap-2.5 p-4 rounded-xl bg-surface/80 border border-border hover:border-accent/30 hover:shadow-sm transition-all group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-accent/[0.08] flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <b.icon size={18} className="text-accent" />
                </div>
                <span className="text-[11px] text-text-secondary text-center font-medium leading-tight">{b.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Problem Section */}
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

      {/* 6. AI Features Section */}
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
                  <p className="text-emerald-400">&gt; Drafting H1 2025 Comparative Analysis...</p>
                  <p className="text-gray-400 mt-1">Section: Employment &amp; Training</p>
                  <p className="text-gray-300 mt-1">The contractor employed 847 Guyanese nationals during H1 2025, representing 92% of total workforce...</p>
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
                  <p className="text-blue-400">Q: What&apos;s the deadline for H1 2025 half-yearly reports?</p>
                  <p className="text-gray-300 mt-1">A: July 30, 2025. Per Section 21(1), half-yearly reports must be submitted within 30 days of each half-year period ending.</p>
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

      {/* 7. How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">How It Works</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-16">
            Three steps to compliant filings
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
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

      {/* 8. Features Grid */}
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

      {/* 8b. Integrations strip */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-center text-text-muted text-xs mb-10 uppercase tracking-[0.2em] font-medium">
            Connects with the tools you already use
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            <div className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <Image src="/zapier-logo.svg" alt="Zapier" width={120} height={34} className="h-8 w-auto" />
            </div>
            <div className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <Image src="/quickbooks-logo.png" alt="QuickBooks" width={140} height={34} className="h-8 w-auto" />
            </div>
            <div className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <Image src="/xero-logo.png" alt="Xero" width={80} height={34} className="h-8 w-auto" />
            </div>
            <div className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <Image src="/claude-logo.png" alt="Claude AI" width={120} height={26} className="h-7 w-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Stats bar */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <GeometricBg variant="hexagons" />
        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="1,300+" label="Companies Filing in Guyana" lightOnDark />
            <StatCard value="35+" label="Countries With LCA Laws" lightOnDark />
            <StatCard value="GY$50M" label="Maximum Penalty Per Offence" lightOnDark />
            <StatCard value="900K+" label="Barrels/Day (and growing)" lightOnDark />
          </div>
        </div>
      </section>

      {/* 10. Markets Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Global Coverage</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            Built for Guyana. Expanding Globally.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-text-secondary text-center mb-14 max-w-2xl mx-auto">
            Local content compliance is mandatory in 35+ countries. LCA Desk is building jurisdiction modules for every major oil-producing market &mdash; one platform, every LCA framework.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl border border-border p-7 card-lift group relative overflow-hidden">
                {m.status === "LIVE" && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-teal" />}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{m.flag}</span>
                  <div>
                    <h3 className="font-semibold text-text-primary text-lg">{m.name}</h3>
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                      m.status === "LIVE" ? "bg-accent text-white" : "bg-gray-100 text-text-muted"
                    }`}>{m.status}</span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary mb-5 leading-relaxed">{m.desc}</p>
                <Link href={m.href} className={`text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all ${
                  m.status === "LIVE" ? "text-accent" : "text-text-muted hover:text-accent"
                }`}>
                  {m.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-text-muted text-sm mt-8">
            More jurisdictions added quarterly. Building in a market not listed?{" "}
            <Link href="/contact" className="text-accent hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>

      {/* 11. Pricing */}
      <section id="pricing" className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Pricing</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            Simple, Transparent Pricing
          </motion.h2>
          <PricingToggle />
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
            Frequently Asked Questions
          </motion.h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* 13. Comparison table */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Why Switch</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            LCA Desk vs. The Old Way
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-border">
              <div className="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Capability</div>
              <div className="p-4 text-xs font-semibold text-red-500 uppercase tracking-wider text-center">Spreadsheets</div>
              <div className="p-4 text-xs font-semibold text-accent uppercase tracking-wider text-center">LCA Desk</div>
            </div>
            {[
              { cap: "Data entry", old: "Manual Excel", desk: "Guided wizards" },
              { cap: "Narrative sections", old: "Copy-paste", desk: "AI-drafted" },
              { cap: "Gap detection", old: "None", desk: "Automatic" },
              { cap: "Deadline tracking", old: "Calendar reminders", desk: "Built-in alerts" },
              { cap: "Audit trail", old: "None", desk: "Full log" },
              { cap: "Multi-entity", old: "Separate files", desk: "Unified dashboard" },
              { cap: "Export format", old: "Varies", desk: "Secretariat-ready" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? "" : "bg-gray-50/50"} ${i < 6 ? "border-b border-border/50" : ""}`}>
                <div className="p-4 text-sm font-medium text-text-primary">{row.cap}</div>
                <div className="p-4 text-sm text-center flex items-center justify-center gap-1.5 text-text-muted"><X size={14} className="text-red-400" /> {row.old}</div>
                <div className="p-4 text-sm text-center flex items-center justify-center gap-1.5 text-text-secondary font-medium"><Check size={14} className="text-accent" /> {row.desk}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 14. Social proof strip */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="bg-gradient-to-br from-surface to-white rounded-2xl border border-border p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent to-teal rounded-full" />
            <p className="font-display text-2xl md:text-3xl text-text-primary mb-3 leading-snug">
              &ldquo;LCA Desk replaces the spreadsheets, the consultants, and the guesswork &mdash; with a single platform built specifically for the Local Content Act.&rdquo;
            </p>
            <p className="text-sm text-text-muted mt-4">
              Built by <span className="font-semibold text-text-secondary">Stabroek Advisory LLC</span> &middot; Houston, TX &middot; Specialists in Guyana&apos;s oil &amp; gas compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* 15. CTA Banner */}
      <CTABanner
        headline="Your next LCA filing deadline is closer than you think."
        body="H1 reports are due July 30. H2 reports are due January 30. Start your free 14-day trial — full Pro access, no credit card required."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
