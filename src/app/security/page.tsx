"use client";

import { motion } from "framer-motion";
import {
  Lock,
  Cloud,
  Users,
  FileSearch,
  Database,
  Brain,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const securityCards = [
  {
    icon: Lock,
    title: "Encrypted in Transit & at Rest",
    description:
      "TLS 1.3 for all connections. AES-256 encryption for stored data.",
  },
  {
    icon: Cloud,
    title: "Cloud-Hosted Infrastructure",
    description:
      "99.9% uptime SLA. Automatic backups. US-based data centers.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description:
      "Viewer, editor, submitter, admin — granular permissions per entity.",
  },
  {
    icon: FileSearch,
    title: "Audit Trail",
    description:
      "Every change logged with user, timestamp, and reason. Tamper-proof.",
  },
  {
    icon: Database,
    title: "Data Isolation",
    description:
      "Logical separation between tenants. No cross-tenant data access.",
  },
  {
    icon: Brain,
    title: "AI Data Privacy",
    description:
      "Real-time processing only. Your data is never used for model training.",
  },
];

const securityFAQs = [
  {
    q: "Where is my data stored?",
    a: "US-based cloud infrastructure with automatic backups and 99.9% uptime SLA.",
  },
  {
    q: "Is my data used to train AI models?",
    a: "No. LCA Desk uses Anthropic's Claude API for real-time processing only. Your data is never stored by Anthropic or used for model training.",
  },
  {
    q: "Who can access my data?",
    a: "Only authorized users within your organization, based on role-based permissions you configure.",
  },
  {
    q: "Do you comply with data protection regulations?",
    a: "Yes. We follow industry best practices for data protection and are committed to compliance with applicable regulations.",
  },
];

export default function SecurityPage() {
  return (
    <main>
      {/* 1. Hero */}
      <HeroSection
        eyebrow="Security"
        headline="Enterprise-grade security for sensitive compliance data."
        sub="Your LCA data is protected with industry-leading security measures."
        geometricVariant="grid"
      />
      <div className="hidden lg:block mt-12 max-w-5xl mx-auto px-6">
        <img src="/illustrations/hero-security.png" alt="Enterprise-grade data security and encryption for compliance data" className="w-full max-w-2xl mx-auto rounded-2xl opacity-90" loading="eager" />
      </div>

      {/* 2. Security Cards Grid */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="rounded-xl border border-border bg-card p-6"
            >
              <card.icon className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-1 text-lg font-semibold text-text-primary">
                {card.title}
              </h3>
              <p className="text-sm text-text-secondary">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Security FAQs */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-bold text-text-primary"
          >
            Your Questions Answered
          </motion.h2>
          <FAQAccordion items={securityFAQs} />
        </div>
      </section>

      {/* 4. CTA Banner */}
      <CTABanner
        headline="Security questions?"
        body="Our team is happy to walk through our security practices."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
