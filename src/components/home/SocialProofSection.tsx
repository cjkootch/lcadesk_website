"use client";

import { motion } from "framer-motion";

const vp = { once: true as const, margin: "-60px" as const };

export default function SocialProofSection() {
  return (
    <section className="py-16 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-emerald-400/60 text-xs uppercase tracking-[0.2em] font-medium mb-8">
          Trusted by compliance teams across Guyana&apos;s oil &amp; gas sector
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="bg-white/[0.05] backdrop-blur rounded-2xl border border-white/10 p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
          <p className="font-display text-xl md:text-2xl text-white mb-3 leading-snug">
            &ldquo;We went from spending 5 days compiling our Half-Yearly Report in spreadsheets to generating the same report in under 2 hours. The AI narrative drafting alone saved us a full day of writing.&rdquo;
          </p>
          <p className="text-sm text-slate-400 mt-4">
            Compliance Manager &middot; Oil &amp; Gas Contractor, Guyana
          </p>
        </motion.div>
        <div className="mt-8 text-center">
          <a href="https://app.lcadesk.com/auth/signup?role=filer" className="text-sm font-semibold text-emerald-400 hover:underline">
            Join them — start your free trial &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
