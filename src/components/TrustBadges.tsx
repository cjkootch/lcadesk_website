"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CreditCard, Brain, Globe, Users, FileCheck, Clock } from "lucide-react";

const badges = [
  {
    icon: Lock,
    title: "256-bit Encryption",
    detail: "AES-256 at rest · TLS 1.3 in transit",
  },
  {
    icon: Shield,
    title: "SOC 2 Infrastructure",
    detail: "Hosted on certified providers",
  },
  {
    icon: CreditCard,
    title: "PCI Compliant",
    detail: "Payments secured by Stripe",
  },
  {
    icon: Brain,
    title: "No AI Training",
    detail: "Your data is never used to train models",
  },
  {
    icon: Globe,
    title: "GDPR Ready",
    detail: "Export, delete, and control your data",
  },
  {
    icon: FileCheck,
    title: "Immutable Audit Trail",
    detail: "Every action logged and timestamped",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    detail: "Granular permissions per entity",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    detail: "Enterprise-grade availability",
  },
];

interface TrustBadgesProps {
  variant?: "full" | "compact";
}

export default function TrustBadges({ variant = "full" }: TrustBadgesProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 py-8">
        {badges.slice(0, 5).map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-2.5 text-text-muted"
          >
            <div className="w-8 h-8 rounded-lg bg-accent/[0.08] flex items-center justify-center">
              <b.icon size={15} className="text-accent" />
            </div>
            <span className="text-xs font-medium">{b.title}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-center text-text-muted text-xs uppercase tracking-[0.2em] font-medium mb-10"
        >
          Security &amp; Compliance
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-border bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/[0.08] flex items-center justify-center">
                <b.icon size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">{b.title}</p>
                <p className="text-[11px] text-text-muted mt-0.5">{b.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
