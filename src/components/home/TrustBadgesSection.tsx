"use client";

import { motion } from "framer-motion";
import {
  Droplets, Building2, Ship, HardHat, Factory, Truck, Leaf, Zap,
} from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

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

export default function TrustBadgesSection() {
  return (
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
  );
}
