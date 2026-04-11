"use client";

import { motion } from "framer-motion";

const vp = { once: true as const, margin: "-60px" as const };

const securityBadges = [
  {
    label: "256-bit SSL",
    sublabel: "Encrypted",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-600">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "Powered by",
    sublabel: "Stripe",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#635BFF]" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
      </svg>
    ),
  },
  {
    label: "AES-256",
    sublabel: "Encryption at Rest",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-600">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "GDPR",
    sublabel: "Compliant",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l2 2" />
        <path d="M3.5 12h1M19.5 12h1M12 3.5v1M12 19.5v1" />
      </svg>
    ),
  },
  {
    label: "Vercel",
    sublabel: "Edge Network",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-black dark:text-white" fill="currentColor">
        <path d="M12 1L24 22H0L12 1z" />
      </svg>
    ),
  },
];

export default function SecurityBadgesSection() {
  return (
    <section className="py-12 bg-[#f8faf9] border-y border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          className="text-center text-text-muted text-[11px] mb-8 uppercase tracking-[0.25em] font-medium"
        >
          Enterprise-grade security &amp; compliance
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {securityBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-sm transition-shadow"
            >
              <div className="flex-shrink-0">
                {badge.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-text-primary leading-tight">{badge.label}</span>
                <span className="text-[10px] text-text-muted leading-tight">{badge.sublabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
