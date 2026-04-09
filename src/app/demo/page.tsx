"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { track } from "@vercel/analytics";
import HeroSection from "@/components/HeroSection";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const demoHighlights = [
  "AI Narrative Drafting in real-time",
  "Compliance Gap Detection walkthrough",
  "Report generation demo",
  "Filing calendar & deadline management",
  "Q&A with our team",
];

const inputClasses =
  "w-full rounded-lg border border-border px-4 py-3 bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-text-primary";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", country: "", role: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, inquiryType: "demo" }),
      });
      if (!res.ok) throw new Error("Failed");

      track("Demo Requested", {
        company: form.company,
        country: form.country,
        role: form.role,
      });

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email support@lcadesk.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Demo"
        headline="See LCA Desk in Action"
        sub="30-minute live demo. We'll build a live LCA submission from your company's data."
        geometricVariant="nodes"
      />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: What you'll see */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
          >
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              What you&apos;ll see:
            </h2>
            <ul className="space-y-4">
              {demoHighlights.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-text-secondary text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-text-muted text-sm mt-8">
              Or email{" "}
              <a href="mailto:support@lcadesk.com" className="text-accent hover:underline">
                support@lcadesk.com
              </a>{" "}
              to schedule directly
            </p>
          </motion.div>

          {/* Right: Demo request form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
          >
            {submitted ? (
              <div className="bg-card rounded-2xl border border-border p-8 text-center">
                <p className="text-lg font-semibold text-text-primary mb-2">
                  Demo request received!
                </p>
                <p className="text-sm text-text-secondary">
                  We&apos;ll email you within 24 hours to schedule a time.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-5">
                <h3 className="text-lg font-semibold text-text-primary">Request a Demo</h3>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Full Name</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Work Email</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Company / Organization</label>
                  <input type="text" name="company" required value={form.company} onChange={handleChange} className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Role</label>
                  <select name="role" required value={form.role} onChange={handleChange} className={inputClasses}>
                    <option value="">Select your role</option>
                    <option value="regulator">Regulator / Government</option>
                    <option value="operator">Operator / Licensee</option>
                    <option value="contractor">Contractor / Sub-contractor</option>
                    <option value="supplier">Supplier / Service Provider</option>
                    <option value="consultant">Consultant / Advisor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Country</label>
                  <select name="country" required value={form.country} onChange={handleChange} className={inputClasses}>
                    <option value="">Select country</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Zambia">Zambia</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">What are you most interested in?</label>
                  <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="e.g. filing automation, regulator review workflows, jurisdiction expansion..." className={inputClasses} />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg text-white font-medium text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, #00A87A 0%, #047857 100%)" }}
                >
                  {submitting ? "Submitting..." : "Request Demo"}
                </button>
                {error && <p className="text-xs text-red-500">{error}</p>}
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
