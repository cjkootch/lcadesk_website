"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
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

const inputClasses =
  "w-full rounded-lg border border-border px-4 py-3 bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-text-primary";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "support@lcadesk.com",
    href: "mailto:support@lcadesk.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Houston, Texas",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "We respond within 24 hours",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    inquiryType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
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
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");

      // Identify contact in HubSpot
      const _hsq = (window as any)._hsq = (window as any)._hsq || [];
      _hsq.push(["identify", {
        email: form.email,
        firstname: form.name.split(" ")[0],
        lastname: form.name.split(" ").slice(1).join(" "),
        company: form.company,
        phone: form.phone,
        country: form.country,
        hs_lead_status: "NEW",
      }]);
      _hsq.push(["trackPageView"]);

      track("Contact Submitted", {
        inquiryType: form.inquiryType,
        country: form.country,
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
        eyebrow="Contact"
        headline="Get in Touch"
        sub="Questions about LCA Desk? We'd love to hear from you."
        geometricVariant="grid"
      />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
          >
            {submitted ? (
              <div className="bg-card rounded-2xl border border-border p-8 text-center">
                <p className="text-lg font-semibold text-text-primary mb-2">
                  Thanks! We&apos;ll be in touch within 24 hours.
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
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
                    Country
                  </label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className={inputClasses}
                  >
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
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    required
                    value={form.inquiryType}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="product">Product inquiry</option>
                    <option value="demo">Demo request</option>
                    <option value="partnership">Partnership / white-label</option>
                    <option value="waitlist">Nigeria/market waitlist</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg text-white font-medium text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{
                    background:
                      "linear-gradient(135deg, #00A87A 0%, #047857 100%)",
                  }}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>

                {error && (
                  <p className="text-xs text-red-500">{error}</p>
                )}

                <p className="text-xs text-text-muted">
                  Interested in the Full Service managed filing plan? Select
                  &quot;Product inquiry&quot; and tell us your filing volume.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Info Cards + Illustration */}
          <div className="space-y-5">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className="rounded-2xl border border-border p-6 bg-card flex items-start gap-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i + 1}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-muted mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-text-primary font-medium hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-text-primary font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
            <div className="hidden lg:block">
              <img src="/illustrations/hero-contact.png" alt="Contact LCA Desk support team for compliance questions" className="w-full rounded-2xl" loading="eager" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
