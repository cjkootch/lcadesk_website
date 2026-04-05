"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GeometricBg from "./GeometricBg";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  headline: string;
  body: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTABanner({
  headline,
  body,
  primaryCTA,
  secondaryCTA,
}: CTABannerProps) {
  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: "linear-gradient(135deg, #064E3B 0%, #065F46 30%, #047857 60%, #064E3B 100%)",
    }}>
      <GeometricBg variant="nodes" />

      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="font-display text-2xl md:text-4xl text-white mb-4"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1 }}
          className="text-emerald-100/80 text-sm md:text-base mb-10 max-w-xl mx-auto"
        >
          {body}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-medium text-emerald-900 hover:bg-emerald-50 hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] transition-all"
          >
            {primaryCTA.label}
            <ArrowRight size={16} />
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/50 transition-all"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
