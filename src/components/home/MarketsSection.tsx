"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

const markets = [
  { flag: "\u{1F1EC}\u{1F1FE}", name: "Guyana", status: "LIVE", desc: "LCA v4.1 \u00b7 5 submission types \u00b7 GY$50M penalties", cta: "Explore Guyana", href: "/markets/guyana" },
  { flag: "\u{1F1F3}\u{1F1EC}", name: "Nigeria", status: "COMING SOON", desc: "NCDMB \u00b7 Nigerian Content Plans \u00b7 5% project value penalties", cta: "Join Waitlist", href: "/markets/nigeria" },
  { flag: "\u{1F1F9}\u{1F1F9}", name: "Trinidad & Tobago", status: "COMING SOON", desc: "MEEI PLCC \u00b7 Local Content Policy \u00b7 EST timezone", cta: "Join Waitlist", href: "/markets/trinidad" },
  { flag: "\u{1F1EC}\u{1F1ED}", name: "Ghana", status: "COMING SOON", desc: "Petroleum Commission \u00b7 LI 2204 regulations", cta: "Join Waitlist", href: "/markets/ghana" },
  { flag: "\u{1F1F2}\u{1F1FF}", name: "Mozambique", status: "COMING SOON", desc: "INP \u00b7 Law 15/2017 \u00b7 LNG sector expansion", cta: "Join Waitlist", href: "/markets/mozambique" },
  { flag: "\u{1F1F3}\u{1F1E6}", name: "Namibia", status: "COMING SOON", desc: "Cabinet-approved LCA policy \u00b7 TotalEnergies, Shell, Galp", cta: "Join Waitlist", href: "/markets/namibia" },
  { flag: "\u{1F1F8}\u{1F1F7}", name: "Suriname", status: "COMING SOON", desc: "Block 58 \u00b7 Staatsolie \u00b7 Local content framework emerging", cta: "Join Waitlist", href: "/markets/suriname" },
];

export default function MarketsSection() {
  return (
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
            <Link key={i} href={m.href}>
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl border border-border p-7 card-lift group relative overflow-hidden cursor-pointer h-full">
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
                <span className={`text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all ${
                  m.status === "LIVE" ? "text-accent" : "text-text-muted group-hover:text-accent"
                }`}>
                  {m.cta} <ArrowRight size={14} />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
        <p className="text-center text-text-muted text-sm mt-8">
          More jurisdictions added quarterly. Building in a market not listed?{" "}
          <Link href="/contact" className="text-accent hover:underline">Contact us</Link>.
        </p>
      </div>
    </section>
  );
}
