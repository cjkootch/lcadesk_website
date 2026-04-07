"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2, Scale, FileText, Users, AlertTriangle, DollarSign,
  ShieldCheck, Globe, ArrowRight, Droplets, MapPin, Clock,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import EmailCapture from "@/components/EmailCapture";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const keyProvisions = [
  { icon: Users, title: "Surinamese Employment Priority", desc: "Operators must prioritize Surinamese nationals in all job categories. The government tracks workforce composition to ensure meaningful local employment across all project phases." },
  { icon: DollarSign, title: "Local Procurement Requirements", desc: "Contractors must give preference to Surinamese suppliers and service providers. Local procurement targets are expected to increase as the domestic supply chain develops." },
  { icon: Building2, title: "Capacity Building Obligations", desc: "Operators must invest in training programs, skills transfer, and technology transfer to develop Surinamese capabilities across the petroleum value chain." },
  { icon: Scale, title: "Regulatory Oversight", desc: "Staatsolie, the national oil company, plays a central role in overseeing local content compliance alongside the Ministry of Natural Resources." },
  { icon: Globe, title: "Joint Venture Requirements", desc: "Foreign operators are encouraged to partner with Surinamese companies through joint ventures, creating direct pathways for local participation in major projects." },
  { icon: ShieldCheck, title: "Reporting Requirements", desc: "Operators must submit periodic reports on local content performance, including employment data, procurement spend, and capacity building activities." },
];

const blocks = [
  { name: "Block 58", operator: "TotalEnergies / APA Corporation", status: "Appraisal — multiple discoveries", discoveries: "Maka Central, Sapakara, Krabdagu" },
  { name: "Block 52", operator: "Petronas", status: "Exploration", discoveries: "Sloanea-1 discovery (2020)" },
  { name: "Block 48", operator: "TotalEnergies", status: "Exploration", discoveries: "Active exploration program" },
  { name: "Block 53", operator: "QatarEnergy / ExxonMobil", status: "Exploration", discoveries: "Awarded 2024" },
  { name: "Block 64", operator: "Chevron", status: "Exploration", discoveries: "Awarded 2024" },
];

export default function SurinamePage() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow={"\u{1F1F8}\u{1F1F7} Suriname"}
        headline="Local Content Compliance — Suriname"
        sub="Guyana's neighbor is on the verge of becoming a major oil producer. TotalEnergies, APA, Petronas, and others are advancing Block 58 toward first oil. LCA Desk Suriname module coming 2027."
        geometricVariant="waves"
      />
      <div className="hidden lg:block mt-12 max-w-5xl mx-auto px-6">
        <img src="/illustrations/market-suriname.png" alt="Suriname offshore oil exploration and emerging local content framework" className="w-full max-w-2xl mx-auto rounded-2xl opacity-90" loading="eager" />
      </div>

      {/* Key stats */}
      <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "6.5B+", label: "Est. Recoverable Barrels (Block 58)" },
              { value: "2028", label: "Expected First Oil" },
              { value: "5+", label: "Active Exploration Blocks" },
              { value: "~620K", label: "Population" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                <p className="text-emerald-200 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <motion.p custom={0} variants={fadeUp} className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">The Opportunity</motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl text-text-primary mb-4">Suriname&apos;s Emerging Oil Sector</motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-text-secondary max-w-3xl mb-6 leading-relaxed">
              Suriname sits on the same prolific Guyana-Suriname basin that has transformed its neighbor. With multiple world-class discoveries in Block 58 and active exploration across several other blocks, Suriname is developing its regulatory framework to ensure the country benefits from its petroleum resources.
            </motion.p>
            <motion.p custom={3} variants={fadeUp} className="text-text-secondary max-w-3xl mb-10 leading-relaxed">
              The government is developing local content legislation modeled in part on Guyana&apos;s Local Content Act 2021 and Nigeria&apos;s NOGICD Act 2010. Companies preparing to operate in Suriname should anticipate mandatory local content requirements similar to neighboring jurisdictions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { label: "National Oil Company", value: "Staatsolie Maatschappij Suriname", sub: "State-owned, holds participating interests in offshore blocks" },
              { label: "Regulatory Direction", value: "Local Content Framework in Development", sub: "Expected to mirror Guyana/Nigeria models" },
              { label: "Key Ministry", value: "Ministry of Natural Resources", sub: "Overseeing petroleum sector governance" },
              { label: "Basin", value: "Guyana-Suriname Basin", sub: "Same geological play as Stabroek Block" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1">{item.label}</p>
                <p className="text-sm font-medium text-text-primary">{item.value}</p>
                <p className="text-xs text-text-secondary mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active blocks */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Offshore Activity</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-10 text-center">Active Exploration & Appraisal Blocks</h2>

          <div className="space-y-4">
            {blocks.map((block, i) => (
              <motion.div
                key={block.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-xl border border-border p-5 flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary mb-1 flex items-center gap-2">
                    <Droplets size={14} className="text-accent" /> {block.name}
                  </h3>
                  <p className="text-sm text-text-secondary">{block.operator}</p>
                </div>
                <div className="flex gap-6 sm:text-right flex-shrink-0">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-text-muted">Status</p>
                    <p className="text-xs font-medium text-text-primary">{block.status}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-text-muted">Key Info</p>
                    <p className="text-xs font-medium text-text-primary">{block.discoveries}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Expected Requirements</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">Anticipated Local Content Obligations</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            Based on the evolving regulatory framework and precedents from neighboring Guyana, operators in Suriname should prepare for these requirements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyProvisions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-surface rounded-2xl border border-border p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
            <AlertTriangle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-amber-900 text-sm mb-1">Regulatory Framework Still Evolving</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                Suriname&apos;s local content legislation is currently under development. The specifics of filing requirements, penalty structures, and minimum content targets may change. LCA Desk monitors regulatory developments and will update the Suriname module as the framework is finalized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why prepare now */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Why Prepare Now?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "First Oil is Coming", desc: "Block 58 FID (Final Investment Decision) is anticipated by 2026, with first oil targeted for 2028. Companies entering now will face local content requirements from day one." },
              { icon: MapPin, title: "Same Basin as Guyana", desc: "The geological play that produced 11+ billion barrels in Guyana extends into Suriname. The regulatory response will follow — and likely draw from Guyana's Local Content Act." },
              { icon: Scale, title: "Regional Precedent", desc: "Guyana's LCA is the regional model. Companies already compliant in Guyana will have a significant head start when Suriname's framework takes effect." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-6 text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">Suriname vs. Guyana: Context</h2>
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-surface">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">Aspect</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1F8}\u{1F1F7}"} Suriname</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-muted font-medium">{"\u{1F1EC}\u{1F1FE}"} Guyana</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "First Oil", sr: "Expected ~2028", gy: "2019 (Liza Phase 1)" },
                  { aspect: "Production (current)", sr: "Pre-production", gy: "~650,000 bbl/day" },
                  { aspect: "Major Operator", sr: "TotalEnergies / APA Corp", gy: "ExxonMobil" },
                  { aspect: "Local Content Law", sr: "In development", gy: "Local Content Act 2021" },
                  { aspect: "National Oil Company", sr: "Staatsolie", gy: "N/A (Government direct)" },
                  { aspect: "Basin", sr: "Guyana-Suriname Basin", gy: "Guyana-Suriname Basin" },
                  { aspect: "LCA Desk Support", sr: "Coming 2027", gy: "Live now" },
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-5 py-3 font-medium text-text-primary">{row.aspect}</td>
                    <td className="px-5 py-3 text-text-secondary">{row.sr}</td>
                    <td className="px-5 py-3 text-text-secondary">{row.gy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="py-12 bg-surface">
        <div className="max-w-xl mx-auto px-6">
          <EmailCapture
            headline="Get Suriname regulatory updates"
            description="Be the first to know when Suriname's local content framework is finalized and the LCA Desk module launches."
            list="newsletter"
            variant="card"
          />
        </div>
      </section>

      <CTABanner
        headline="Already operating in Guyana?"
        body="LCA Desk is live for Guyana's Local Content Act. Companies compliant in Guyana will have a head start in Suriname."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "View Guyana Module", href: "/markets/guyana" }}
      />
    </main>
  );
}
