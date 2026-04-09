"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClipboardCheck, Package, Briefcase, ArrowRight } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const paths = [
  {
    icon: ClipboardCheck,
    title: "Contractors & Filers",
    desc: "Stop filing with spreadsheets. Generate your LCA reports in minutes, not days. AI narrative drafting, gap detection, and Secretariat-ready exports.",
    cta: "Start 30-Day Free Trial",
    href: "/for-contractors",
    color: "from-accent to-teal",
    tag: "From $199/mo",
  },
  {
    icon: Package,
    title: "Guyanese Suppliers",
    desc: "Get discovered by every contractor in Guyana\u2019s petroleum sector. Your LCS certificate works harder on LCA Desk. Browse opportunities, express interest, track responses.",
    cta: "Get Listed",
    href: "/for-suppliers",
    color: "from-amber-500 to-yellow-500",
    tag: "Free + Pro $99/mo",
  },
  {
    icon: Briefcase,
    title: "Guyanese Job Seekers",
    desc: "Your skills are in demand. Build your profile, get certified, get hired. Browse petroleum sector jobs from contractors required to prioritize Guyanese nationals.",
    cta: "Find Petroleum Jobs",
    href: "/for-job-seekers",
    color: "from-blue-500 to-cyan-500",
    tag: "Free",
  },
];

export default function AudiencePathsSection() {
  return (
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
          {paths.map((path, i) => (
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
  );
}
