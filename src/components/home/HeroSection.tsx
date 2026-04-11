"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import GeometricBg from "@/components/GeometricBg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-24 pb-16">
      <GeometricBg variant="topology" />
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-accent/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-[5%] w-[400px] h-[400px] bg-teal/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left copy */}
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">Live in Guyana &middot; Multi-Jurisdiction Expansion</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] text-text-primary mb-6">
            The Compliance Operating System for{" "}
            <span className="gradient-text-static">Local Content Programs</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-text-secondary max-w-xl mb-8 leading-relaxed">
            LCA Desk digitizes mandated local content filing, validation, regulator review, and audit workflows for extractive industries. Built for regulators and industry. Configurable for every jurisdiction.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-8">
            <motion.div animate={{ boxShadow: ["0 10px 25px -5px rgba(0,168,122,0.25)", "0 10px 35px -5px rgba(0,168,122,0.45)", "0 10px 25px -5px rgba(0,168,122,0.25)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="rounded-xl">
              <Link href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-8 py-4 text-sm font-semibold text-white hover:scale-[1.02] transition-transform">
                Book a Demo <ArrowRight size={16} />
              </Link>
            </motion.div>
            <a href="https://app.lcadesk.com/auth/signup?role=filer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-accent/30 text-accent px-8 py-4 text-sm font-semibold hover:bg-accent/5 hover:border-accent transition-all">
              Start Free Trial
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-text-muted mb-2">
            <Check size={13} className="text-accent" /> 30-day free trial
            <span className="text-border">·</span>
            No card required
            <span className="text-border">·</span>
            Full Professional access
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }}
            className="text-xs text-text-muted mb-4">
            Or{" "}
            <a href="https://app.lcadesk.com/try" className="text-accent hover:underline font-medium">
              explore a live demo without signing up &rarr;
            </a>
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-text-muted">
            <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> Regulatory-grade workflows</span>
            <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> Jurisdiction-configurable</span>
            <span className="flex items-center gap-1.5"><Check size={13} className="text-accent" /> Industry + regulator access</span>
          </motion.div>
        </div>

        {/* Right: platform screenshot */}
        <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-teal/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-white shadow-2xl shadow-black/[0.08] overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-border">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
                <div className="flex-1 mx-3"><div className="bg-white rounded-md px-4 py-1.5 text-xs text-text-muted text-center border border-border/50">app.lcadesk.com/dashboard</div></div>
              </div>
              <Image src="/illustrations/feature-dashboard.png" alt="LCA Desk compliance dashboard" width={800} height={500} quality={90} className="w-full" priority />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <div className="w-6 h-10 rounded-full border-2 border-accent/30 flex items-start justify-center p-1.5">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
        </div>
      </motion.div>
    </section>
  );
}
