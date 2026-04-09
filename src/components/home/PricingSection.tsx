"use client";

import { motion } from "framer-motion";
import PricingToggle from "@/components/PricingToggle";

const vp = { once: true as const, margin: "-60px" as const };

export default function PricingSection() {
  return (
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
  );
}
