"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const jurisdictions = [
  { flag: "\u{1F1EC}\u{1F1FE}", country: "Guyana", regime: "Half-yearly reporting, annual plans", cadence: "Semi-annual + annual", regulator: "Local Content Secretariat", status: "Live", statusColor: "bg-accent text-white" },
  { flag: "\u{1F1F3}\u{1F1E6}", country: "Namibia", regime: "Annual performance, procurement, employment reporting", cadence: "Annual + quarterly", regulator: "Ministry of Mines and Energy", status: "In Development", statusColor: "bg-blue-100 text-blue-700" },
  { flag: "\u{1F1F2}\u{1F1FF}", country: "Mozambique", regime: "REFC quarterly filing", cadence: "Quarterly", regulator: "INP (Instituto Nacional de Petroleo)", status: "In Development", statusColor: "bg-blue-100 text-blue-700" },
  { flag: "\u{1F1EC}\u{1F1ED}", country: "Ghana", regime: "Annual plans, performance reports, procurement plans", cadence: "Annual + quarterly", regulator: "Petroleum Commission / Minerals Commission", status: "Roadmap", statusColor: "bg-gray-100 text-text-muted" },
  { flag: "\u{1F1F8}\u{1F1F7}", country: "Suriname", regime: "Policy-stage enablement", cadence: "To be defined", regulator: "Local Content Board", status: "Early Access", statusColor: "bg-amber-100 text-amber-700" },
  { flag: "\u{1F1FF}\u{1F1F2}", country: "Zambia", regime: "Mining local participation reporting", cadence: "Per SI No. 68/2025", regulator: "Ministry of Mines", status: "Roadmap", statusColor: "bg-gray-100 text-text-muted" },
  { flag: "\u{1F1F3}\u{1F1EC}", country: "Nigeria", regime: "NCDMB statutory reports, procurement, R&D", cadence: "Quarterly + annual", regulator: "NCDMB", status: "Enterprise Roadmap", statusColor: "bg-gray-100 text-text-muted" },
];

export default function MarketsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Jurisdiction Coverage</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
          Configurable for Every Jurisdiction
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Each country runs on configurable filing templates, validation rules, deadlines, evidence requirements, and export formats. One platform, jurisdiction-specific compliance.
        </motion.p>

        {/* Jurisdiction table */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 border-b border-border px-6 py-3">
            <div className="col-span-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Country</div>
            <div className="col-span-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Filing Regime</div>
            <div className="col-span-2 text-xs font-semibold text-text-muted uppercase tracking-wider">Cadence</div>
            <div className="col-span-2 text-xs font-semibold text-text-muted uppercase tracking-wider">Regulator</div>
            <div className="col-span-2 text-xs font-semibold text-text-muted uppercase tracking-wider text-right">Status</div>
          </div>
          {/* Rows */}
          {jurisdictions.map((j, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 ${i < jurisdictions.length - 1 ? "border-b border-border/50" : ""} ${i % 2 !== 0 ? "bg-gray-50/30" : ""}`}>
              <div className="col-span-3 flex items-center gap-2.5">
                <span className="text-xl">{j.flag}</span>
                <span className="font-semibold text-text-primary text-sm">{j.country}</span>
              </div>
              <div className="col-span-3 text-sm text-text-secondary flex items-center">
                <span className="md:hidden text-xs text-text-muted mr-2">Regime:</span>
                {j.regime}
              </div>
              <div className="col-span-2 text-sm text-text-secondary flex items-center">
                <span className="md:hidden text-xs text-text-muted mr-2">Cadence:</span>
                {j.cadence}
              </div>
              <div className="col-span-2 text-xs text-text-muted flex items-center">{j.regulator}</div>
              <div className="col-span-2 flex items-center md:justify-end">
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${j.statusColor}`}>{j.status}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-text-muted text-sm mt-8">
          Additional jurisdictions added based on regulatory readiness and demand.{" "}
          <Link href="/markets" className="text-accent hover:underline">View full jurisdiction roadmap</Link>.
        </motion.p>
      </div>
    </section>
  );
}
