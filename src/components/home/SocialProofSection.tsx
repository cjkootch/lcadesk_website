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
            &ldquo;LCA Desk replaces the spreadsheets, the consultants, and the guesswork &mdash; with a single platform built specifically for the Local Content Act.&rdquo;
          </p>
          <p className="text-sm text-text-muted mt-4">
            Houston, TX &middot; Specialists in Guyana&apos;s oil &amp; gas compliance
          </p>
        </motion.div>
      </div>
    </section>
  );
}
