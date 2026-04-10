"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Link2, Share2, TrendingUp, Users, Globe, GraduationCap, Building2, Calculator } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

const vp = { once: true as const, margin: "-60px" as const };

const commissionTiers = [
  { plan: "Essentials", price: "$199", commission: "$39.80", rate: 39.80, color: "from-emerald-500 to-teal-500" },
  { plan: "Professional", price: "$499", commission: "$99.80", rate: 99.80, color: "from-emerald-600 to-teal-600" },
  { plan: "Enterprise", price: "$999", commission: "$199.80", rate: 199.80, color: "from-emerald-700 to-teal-700" },
];

const steps = [
  { icon: Link2, title: "Apply & get your link", desc: "Sign up as an affiliate and get your unique referral URL in seconds." },
  { icon: Share2, title: "Share with your network", desc: "Use our marketing assets, email templates, or your own outreach to spread the word." },
  { icon: DollarSign, title: "Earn monthly", desc: "We pay 20% recurring commission via PayPal on the 1st of every month." },
];

const audiences = [
  { icon: Users, label: "LCA compliance consultants" },
  { icon: Building2, label: "Petroleum sector advisors" },
  { icon: GraduationCap, label: "Industry associations & training providers" },
  { icon: Globe, label: "Professionals in Guyana, Nigeria, Ghana, Mozambique, Namibia, Suriname" },
];

const faqs = [
  { q: "What's the commission rate?", a: "20% recurring — you earn every month your referral stays subscribed. No cap on how many companies you can refer." },
  { q: "When do I get paid?", a: "Monthly via PayPal, on the 1st of each month. Minimum payout threshold is $50." },
  { q: "Is there a cap on earnings?", a: "No cap. Refer as many companies as you want. The more active referrals you have, the more you earn each month." },
  { q: "How do I track referrals?", a: "Your affiliate dashboard at app.lcadesk.com shows real-time stats — clicks, signups, qualified referrals, and payouts." },
  { q: "What counts as a qualified referral?", a: "A referral qualifies when they subscribe to a paid plan (Essentials, Professional, or Enterprise). Both you and the referral get 14 extra trial days." },
  { q: "Do you provide marketing materials?", a: "Yes. Your affiliate dashboard includes promo images, LinkedIn/Facebook post templates, and email copy you can use right away." },
];

function EarningsCalculator() {
  const [referrals, setReferrals] = useState(5);
  const [plan, setPlan] = useState(1); // 0=Essentials, 1=Professional, 2=Enterprise
  const tier = commissionTiers[plan];
  const monthly = referrals * tier.rate;
  const yearly = monthly * 12;

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            <Calculator size={16} /> Earnings Calculator
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary">
            See What You Could Earn
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-sm">
          {/* Plan selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-text-secondary mb-3">Average plan your referrals subscribe to</label>
            <div className="grid grid-cols-3 gap-2">
              {commissionTiers.map((t, i) => (
                <button key={t.plan} onClick={() => setPlan(i)}
                  className={`rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
                    plan === i
                      ? "bg-accent text-white shadow-lg shadow-accent/25"
                      : "bg-surface text-text-secondary hover:bg-surface/80 border border-border"
                  }`}>
                  {t.plan}
                </button>
              ))}
            </div>
          </div>

          {/* Referral slider */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-text-secondary">Active referrals</label>
              <span className="text-sm font-bold text-accent tabular-nums">{referrals}</span>
            </div>
            <input
              type="range"
              min={1}
              max={50}
              value={referrals}
              onChange={(e) => setReferrals(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-border accent-accent"
            />
            <div className="flex justify-between text-[10px] text-text-muted mt-1">
              <span>1</span>
              <span>10</span>
              <span>25</span>
              <span>50</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface rounded-xl p-5 text-center">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Monthly Earnings</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${monthly}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-accent tabular-nums"
                >
                  ${monthly.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="bg-surface rounded-xl p-5 text-center">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Yearly Earnings</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${yearly}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-text-primary tabular-nums"
                >
                  ${yearly.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <p className="text-xs text-text-muted text-center mt-4">
            Based on {referrals} active {tier.plan} referral{referrals > 1 ? "s" : ""} at {tier.commission}/mo each
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Partner Program"
        headline="Earn 20% Recurring Commission"
        sub="Refer companies to LCA Desk and earn every month they stay subscribed. No cap. Monthly PayPal payouts."
        primaryCTA={{ label: "Become an Affiliate", href: "https://app.lcadesk.com/auth/signup?role=affiliate" }}
        secondaryCTA={{ label: "Affiliate Login", href: "https://app.lcadesk.com/auth/login?role=affiliate" }}
        geometricVariant="nodes"
      />

      {/* Commission Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            Your Commission per Referral
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Commissions are recurring — you earn every month your referral stays subscribed.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commissionTiers.map((tier, i) => (
              <motion.div key={tier.plan}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={vp}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-xl hover:border-accent/30 transition-all cursor-default group">
                <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2 group-hover:text-accent transition-colors">{tier.plan}</p>
                <p className="text-text-secondary text-sm mb-6">{tier.price}/mo plan</p>
                <div className={`inline-flex items-baseline gap-1 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  <span className="text-4xl font-bold">{tier.commission}</span>
                  <span className="text-lg font-semibold">/mo</span>
                </div>
                <p className="text-xs text-text-muted mt-3">per active referral</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={vp}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                  className={`h-1 rounded-full bg-gradient-to-r ${tier.color} mt-6 mx-auto`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <EarningsCalculator />

      {/* How It Works */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
            How It Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector lines (desktop only) */}
            <div className="hidden md:block absolute top-7 left-1/6 right-1/6 h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={vp}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="h-px bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 origin-left"
              />
            </div>
            {steps.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon size={24} className="text-accent" />
                </motion.div>
                <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Step {i + 1}</div>
                <h3 className="font-semibold text-text-primary text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            Who Should Join?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            className="text-text-secondary text-center mb-10 max-w-xl mx-auto">
            If you work with companies that have local content filing obligations, this program is for you.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4 bg-card rounded-xl border border-border p-5">
                <div className="w-10 h-10 rounded-lg bg-accent/[0.08] flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-text-primary">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-surface overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "20%", label: "Recurring Commission" },
              { stat: "No Cap", label: "On Earnings" },
              { stat: "Monthly", label: "PayPal Payouts" },
              { stat: "+14 Days", label: "Bonus Trial for Both" },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={vp}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-2xl md:text-3xl font-bold text-accent"
                >
                  {item.stat}
                </motion.p>
                <p className="text-xs text-text-muted mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
            Frequently Asked Questions
          </motion.h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        headline="Ready to earn with LCA Desk?"
        body="Join the affiliate program and start earning 20% recurring commission on every company you refer. No cap, monthly payouts, and a dedicated dashboard to track your referrals."
        primaryCTA={{ label: "Become an Affiliate", href: "https://app.lcadesk.com/auth/signup?role=affiliate" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
