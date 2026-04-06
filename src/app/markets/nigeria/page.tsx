"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

export default function NigeriaPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="\u{1F1F3}\u{1F1EC} Nigeria"
        headline="NCDMB Compliance — Nigeria"
        sub="Nigerian Content Development & Monitoring Board. 1,500+ companies affected. LCA Desk Nigeria module coming soon."
        geometricVariant="waves"
      />

      {/* Regulatory Summary */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="font-display text-3xl text-text-primary mb-8">
            Regulatory Summary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                Regulatory Body
              </p>
              <p className="text-sm font-medium text-text-primary">NCDMB</p>
              <p className="text-xs text-text-secondary mt-0.5">
                Nigerian Content Development &amp; Monitoring Board
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                Key Law
              </p>
              <p className="text-sm font-medium text-text-primary">
                Nigerian Oil and Gas Industry Content Development Act (2010)
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                Requirements
              </p>
              <p className="text-sm font-medium text-text-primary">
                Nigerian Content Plans, Performance Reports, 106 workforce
                categories
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                Penalties
              </p>
              <p className="text-sm font-medium text-text-primary">
                5% of project value per offence, or project cancellation
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                Affected Companies
              </p>
              <p className="text-sm font-medium text-text-primary">1,500+</p>
            </div>
          </div>
        </motion.div>

        {/* Waitlist */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={1}
          className="flex justify-center"
        >
          <div className="bg-card rounded-xl border border-border p-6 max-w-md w-full text-center">
            <h3 className="font-display text-xl text-text-primary mb-2">
              Get Notified
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Be the first to know when the Nigeria module launches.
            </p>
            {submitted ? (
              <p className="text-sm text-accent font-medium">
                &#10003; You&apos;re on the waitlist!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-lg border border-border px-3 py-2 bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
                <button
                  type="submit"
                  className="bg-accent text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            )}
            <p className="text-xs text-text-muted mt-4 italic">
              LCA Desk Nigeria module &mdash; pricing from $699/month &mdash;
              launching Q3 2026
            </p>
          </div>
        </motion.div>
      </section>

      <CTABanner
        headline="Ready to simplify LCA compliance?"
        body="Start your free 14-day trial today. No credit card required."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </main>
  );
}
