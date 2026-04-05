"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Droplets, Building2, Ship, HardHat, Factory, Truck, Leaf, Zap,
  FileText, Calendar, BarChart3, Shield, Users, Download,
  Brain, Search, MessageSquare, ArrowRight, X, Check,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
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
      {/* 1. Hero */}
      <HeroSection
        eyebrow="LOCAL CONTENT ACT COMPLIANCE \u00b7 AI-POWERED \u00b7 GLOBAL"
        headline="The Only Software Built for LCA Compliance."
        sub="LCA Desk manages all five mandatory Local Content Act submissions with AI narrative drafting, compliance gap detection, and one-click Secretariat-ready exports. Built for Guyana. Expanding globally."
        primaryCTA={{ label: "Start Free 14-Day Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
        geometricVariant="topology"
        fullHeight
      />

      {/* 2. Trust line */}
      <div className="bg-white border-b border-border py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
          <span>{"\u2713"} No credit card required</span>
          <span>{"\u2713"} Full Pro access for 14 days</span>
          <span>{"\u2713"} Built on LCA v4.1 guidelines</span>
          <span>{"\u2713"} Powered by Claude AI</span>
        </div>
      </div>

      {/* 3. Ticker */}
      <Ticker />

      {/* 4. Trust badges */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} className="text-center text-text-muted text-sm mb-8 uppercase tracking-widest">
            Trusted across Guyana&apos;s oil and gas ecosystem
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {trustBadges.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.04 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface border border-border hover:border-accent/20 transition">
                <b.icon size={20} className="text-accent" />
                <span className="text-xs text-text-secondary text-center font-medium">{b.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Problem Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12 leading-tight">
            Every company in Guyana&apos;s oil sector has a compliance obligation.<br className="hidden md:block" /> Most are still using spreadsheets.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "The Reporting Burden", color: "border-l-orange-500", desc: "5 mandatory submissions per year, complex Excel templates, overlapping deadlines that catch companies off guard." },
              { title: "The Complexity", color: "border-l-amber-500", desc: "40+ reporting categories, Section 12 requirements, workforce and procurement breakdowns across multiple entities." },
              { title: "The Risk", color: "border-l-red-500", desc: "GY$1M\u2013GY$50M penalties per offence, criminal liability for false submissions, active auditing by the Secretariat." },
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-xl p-6 border-l-4 ${card.color} border border-border`}>
                <h3 className="font-semibold text-text-primary mb-2">{card.title}</h3>
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
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-white text-center mb-4">
            The AI That Does the Hard Work
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} className="text-emerald-100/70 text-center mb-12 max-w-2xl mx-auto">
            Four AI capabilities purpose-built for LCA compliance
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

      {/* 7. Product Mockups */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <UIFrame title="LCA Desk — Dashboard">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                <span className="text-sm font-medium">Submissions Due</span>
                <span className="text-accent font-bold" style={{ fontFamily: "var(--font-tech)" }}>3</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                <span className="text-sm font-medium">Completion</span>
                <span className="text-accent font-bold" style={{ fontFamily: "var(--font-tech)" }}>78%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                <span className="text-sm font-medium">Entities</span>
                <span className="text-accent font-bold" style={{ fontFamily: "var(--font-tech)" }}>4</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <span className="text-sm font-medium text-accent">Next Deadline</span>
                <span className="text-accent font-bold text-sm">H1 Report — Jul 30</span>
              </div>
            </div>
          </UIFrame>
          <UIFrame title="Submit Checklist">
            <div className="space-y-3">
              {["Employment data entered", "Procurement data entered", "Training records uploaded", "AI narrative drafted", "Gap detection passed"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${i < 3 ? "bg-accent text-white" : "bg-surface border border-border"}`}>
                    {i < 3 && <Check size={12} />}
                  </div>
                  <span className={`text-sm ${i < 3 ? "text-text-primary" : "text-text-muted"}`}>{item}</span>
                </div>
              ))}
            </div>
          </UIFrame>
        </div>
      </section>

      {/* 8. Features Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
            Everything You Need for LCA Compliance
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-6 hover:border-accent/20 transition">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8b. Integrations strip */}
      <section className="py-12 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} className="text-center text-text-muted text-sm mb-8 uppercase tracking-widest">
            Connects with the tools you already use
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <Image src="/zapier-logo.svg" alt="Zapier" width={120} height={34} className="h-8 w-auto opacity-70 hover:opacity-100 transition" />
            <Image src="/quickbooks-logo.png" alt="QuickBooks" width={140} height={34} className="h-8 w-auto opacity-70 hover:opacity-100 transition" />
            <Image src="/xero-logo.png" alt="Xero" width={80} height={34} className="h-8 w-auto opacity-70 hover:opacity-100 transition" />
            <Image src="/claude-logo.png" alt="Claude AI" width={120} height={26} className="h-7 w-auto opacity-70 hover:opacity-100 transition" />
          </motion.div>
        </div>
      </section>

      {/* 9. Stats bar */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <GeometricBg variant="hexagons" />
        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <StatCard value="1,300+" label="Companies Filing in Guyana" lightOnDark />
            <StatCard value="35+" label="Countries With LCA Laws" lightOnDark />
            <StatCard value="5x" label="Annual Mandatory Submissions" lightOnDark />
            <StatCard value="50,000,000" label="GY$ Maximum Penalty" lightOnDark />
            <StatCard value="900,000+" label="Barrels/Day (and growing)" lightOnDark />
          </div>
        </div>
      </section>

      {/* 10. Markets Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            Built for Guyana. Expanding Globally.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Local content compliance is mandatory in 35+ countries. LCA Desk is building jurisdiction modules for every major oil-producing market &mdash; one platform, every LCA framework.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-accent/20 transition">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{m.flag}</span>
                  <h3 className="font-semibold text-text-primary">{m.name}</h3>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ml-auto ${
                    m.status === "LIVE" ? "bg-accent text-white" : "bg-gray-100 text-text-muted"
                  }`}>{m.status}</span>
                </div>
                <p className="text-sm text-text-secondary mb-4">{m.desc}</p>
                <Link href={m.href} className={`text-sm font-medium inline-flex items-center gap-1 ${
                  m.status === "LIVE" ? "text-accent hover:text-accent-hover" : "text-text-muted hover:text-accent"
                } transition`}>
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
      <section id="pricing" className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
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

      {/* 13. Comparison strip */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
            LCA Desk vs. The Old Way
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
              className="bg-card rounded-2xl border border-red-200 p-6">
              <h3 className="font-semibold text-red-600 mb-4 flex items-center gap-2"><X size={18} /> The Old Way</h3>
              <ul className="space-y-3">
                {["Manual spreadsheets", "Missed deadlines", "No audit trail", "Copy-paste narratives", "No gap detection"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                    <X size={14} className="text-red-400" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
              className="bg-card rounded-2xl border border-emerald-200 p-6">
              <h3 className="font-semibold text-accent mb-4 flex items-center gap-2"><Check size={18} /> LCA Desk</h3>
              <ul className="space-y-3">
                {["AI-powered platform", "Automated reminders", "Full audit log", "AI-drafted narratives", "Proactive gap alerts"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Check size={14} className="text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 14. CTA Banner */}
      <CTABanner
        headline="Your next LCA filing deadline is closer than you think."
        body="H1 reports are due July 30. H2 reports are due January 30. Start your free 14-day trial — full Pro access, no credit card required."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
