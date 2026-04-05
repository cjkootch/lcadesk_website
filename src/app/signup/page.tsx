"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const inputClasses =
  "w-full rounded-lg border border-border px-4 py-3 bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-text-primary";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Free Trial"
        headline="Start Your Free Trial"
        sub="14 days of full Pro access. No credit card required."
        geometricVariant="grid"
      />

      <section className="max-w-xl mx-auto px-6 py-20">
        {/* Trust Line */}
        <motion.p
          className="text-center text-sm text-text-secondary mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          ✓ Full AI features included &middot; ✓ Data saved if you don&apos;t
          upgrade &middot; ✓ Cancel anytime
        </motion.p>

        {/* Signup Form */}
        <motion.div
          id="signup-form"
          className="max-w-md mx-auto bg-card rounded-2xl border border-border p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
        >
          {submitted ? (
            <div className="text-center py-6">
              <p className="text-lg font-semibold text-text-primary mb-2">
                Welcome to LCA Desk!
              </p>
              <p className="text-sm text-text-secondary">
                Check your email to get started.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-medium text-sm transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, #00A87A 0%, #047857 100%)",
                }}
              >
                Start Free Trial
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </main>
  );
}
