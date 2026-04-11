import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, FileText, Calendar, BarChart3, Shield, Users, Download,
  Brain, Search, Clock, AlertTriangle, CheckCircle, Zap,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PricingToggle from "@/components/PricingToggle";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "For Contractors & Filers | LCA Compliance Software",
  description:
    "Stop filing with spreadsheets. LCA Desk generates your half-yearly reports, annual plans, and master plans in minutes with AI narrative drafting and Secretariat-ready exports.",
  openGraph: {
    title: "LCA Desk for Contractors & Filers",
    description: "AI-powered LCA compliance software. Generate Secretariat-ready reports in minutes.",
  },
};

const painPoints = [
  {
    icon: Clock,
    title: "Days wasted on spreadsheets",
    desc: "Every filing period means manually populating complex Excel templates, cross-referencing payroll data, and copy-pasting narratives from last period.",
  },
  {
    icon: AlertTriangle,
    title: "GY$50M penalty exposure",
    desc: "Penalties range from GY$1M to GY$50M per offence. False or misleading submissions are a criminal offence. The Secretariat is actively auditing.",
  },
  {
    icon: Users,
    title: "Multi-entity complexity",
    desc: "Managing compliance for multiple subsidiaries, JVs, and project entities across 40+ reporting categories with overlapping deadlines.",
  },
];

const features = [
  { icon: FileText, title: "All 5 Submission Types", desc: "Half-Yearly Reports (H1 & H2), Annual Plans, Master Plans, Performance Reports — all in one platform." },
  { icon: Brain, title: "AI Narrative Drafting", desc: "Feed your data in, get Secretariat-ready Comparative Analysis narratives out. Reviewed and approved by you before export." },
  { icon: Search, title: "Compliance Gap Detection", desc: "AI scans your data before filing for missing fields, inconsistencies, and red flags that would trigger an audit." },
  { icon: Calendar, title: "Filing Calendar & Alerts", desc: "Never miss a deadline. Automated reminders for all filing periods — H1 due July 30, H2 due January 30." },
  { icon: BarChart3, title: "Dashboards & Analytics", desc: "Workforce composition, procurement spend, training investment — all visualized in real-time." },
  { icon: Shield, title: "Full Audit Trail", desc: "Every change logged with user, timestamp, and reason. Export the complete history for Secretariat review." },
  { icon: Download, title: "Secretariat-Ready Exports", desc: "One-click PDF and Excel exports formatted exactly as the Secretariat expects. Includes Notice of Submission." },
  { icon: Zap, title: "Guided Data Entry", desc: "Step-by-step wizards walk you through each reporting category. No guessing which field goes where." },
];

const faqItems = [
  { q: "Who needs to file LCA reports?", a: "Every contractor, sub-contractor, and licensee operating under a petroleum agreement in Guyana. This applies to all companies on the Local Content Register, regardless of size or nationality." },
  { q: "What are the penalties for non-compliance?", a: "Penalties range from GY$1 million to GY$50 million per offence. False or misleading submissions are a criminal offence under Section 41 of the LCA 2021." },
  { q: "What's the difference between Essentials and Professional?", a: "Essentials ($199/mo) covers 1 entity, 3 users, all 5 submission types, and Compliance Health Score. Professional ($399/mo) adds AI Narrative Drafting, Compliance Gap Detection, up to 5 entities, dashboards, and payment log." },
  { q: "Does the trial include AI features?", a: "Yes. The 30-day trial gives you full Professional access — including AI Narrative Drafting and Compliance Gap Detection. Card collected at signup, not charged until trial ends." },
  { q: "Can LCA Desk handle multi-entity filings?", a: "Yes. Professional supports up to 5 entities. Enterprise supports unlimited entities with role-based permissions across subsidiaries, JVs, and project companies." },
  { q: "What data formats can I import?", a: "Upload Excel spreadsheets, CSVs, and payroll exports. AI maps fields to LCA categories automatically. Or use the guided data entry wizards to enter data step by step." },
];

export default function ForContractorsPage() {
  return (
    <main>
      <HeroSection
        eyebrow="For Contractors & Filers"
        headline="Stop filing with spreadsheets."
        sub="Generate your LCA reports in minutes, not days. AI narrative drafting, compliance gap detection, and Secretariat-ready exports — all in one platform."
        primaryCTA={{ label: "Start 30-Day Free Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
        geometricVariant="topology"
        heroImage={{ src: "/illustrations/cta-signup.png", alt: "Start your compliance journey" }}
      />

      {/* Who is this for */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Built for you</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            If you have a filing obligation, this is your platform.
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Contractors, sub-contractors, and licensees operating under petroleum agreements in Guyana — from ExxonMobil subcontractors to marine logistics firms.
          </p>
        </div>
      </section>

      {/* Pain points */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="text-center text-red-400 text-sm font-semibold tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-12">
            LCA compliance shouldn&apos;t be this hard.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <div key={i} className="bg-white/[0.07] backdrop-blur rounded-2xl border border-white/10 p-7">
                <div className="w-12 h-12 rounded-xl bg-red-500/15 flex items-center justify-center mb-5">
                  <p.icon size={22} className="text-red-400" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-lg">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            Three steps to compliant filings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Enter your data", desc: "Input employment, procurement, and training data through guided wizards — or upload existing spreadsheets.", icon: FileText },
              { step: "02", title: "AI drafts your report", desc: "Claude AI generates Secretariat-ready narratives, detects compliance gaps, and flags issues before you file.", icon: Brain },
              { step: "03", title: "Export & submit", desc: "One-click PDF and Excel exports formatted exactly as the Secretariat expects. Full audit trail included.", icon: Download },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/10 to-teal/5 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                  <s.icon size={28} className="text-accent" />
                </div>
                <span className="text-accent text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-tech)" }}>Step {s.step}</span>
                <h3 className="font-semibold text-text-primary text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="text-center text-emerald-300 text-sm font-semibold tracking-widest uppercase mb-4">Platform Features</p>
          <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-14">
            Everything you need for LCA compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-white/[0.07] backdrop-blur rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{f.title}</h3>
                <p className="text-xs text-emerald-100/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            Simple, transparent pricing
          </h2>
          <PricingToggle />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner
        headline="Your next filing deadline is closer than you think."
        body="H1 reports are due July 30. H2 reports are due January 30. Start free — no card required, full Professional access for 30 days."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </main>
  );
}
