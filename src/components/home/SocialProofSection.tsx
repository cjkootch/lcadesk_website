"use client";

import { motion } from "framer-motion";

const vp = { once: true as const, margin: "-60px" as const };

export default function SocialProofSection() {
  return (
    <section className="py-16 bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="bg-gradient-to-br from-surface to-white rounded-2xl border border-border p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent to-teal rounded-full" />
          <p className="font-display text-2xl md:text-3xl text-text-primary mb-3 leading-snug">
            &ldquo;LCA Desk replaces the spreadsheets, the email chains, and the manual follow-ups with a single platform built specifically for local content compliance.&rdquo;
          </p>
          <p className="text-sm text-text-muted mt-4">
            Compliance Manager &middot; Oil &amp; Gas Contractor, Guyana
          </p>
        </motion.div>
        <div className="mt-8 text-center">
          <a href="https://app.lcadesk.com/auth/signup?role=filer" className="text-sm font-semibold text-accent hover:underline">
            Join them — start your free trial &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
