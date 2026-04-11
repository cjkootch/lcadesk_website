"use client";

import { motion } from "framer-motion";

const vp = { once: true as const, margin: "-60px" as const };

const securityBadges = [
  {
    label: "256-bit SSL",
    sublabel: "Encrypted",
    logo: "/logos/ssl.png",
  },
  {
    label: "Powered by",
    sublabel: "Stripe",
    logo: "/logos/stripe.png",
  },
  {
    label: "AES-256",
    sublabel: "Encryption at Rest",
    logo: "/logos/aes256.webp",
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
    label: "Hosted on",
    sublabel: "Vercel",
    logo: "/logos/vercel.svg",
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
                {"logo" in badge && badge.logo ? (
                  <img src={badge.logo} alt={badge.label} className="w-14 h-14 object-contain" />
                ) : (
                  "icon" in badge && badge.icon
                )}
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
