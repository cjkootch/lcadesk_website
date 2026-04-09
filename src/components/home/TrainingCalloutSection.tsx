"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Award, Shield, GraduationCap, ArrowRight } from "lucide-react";

const vp = { once: true as const, margin: "-60px" as const };

export default function TrainingCalloutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                className="text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
                <GraduationCap size={16} /> Built-In Training
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
                className="font-display text-2xl md:text-3xl text-white mb-4 leading-snug">
                Your team needs to understand the law before they can file it.
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                className="text-emerald-100/80 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                LCA Desk includes structured compliance training &mdash; not just software. Two courses, badges in the audit trail, team progress tracking. The Secretariat is watching. Show them your team was prepared.
              </motion.p>
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  { icon: BookOpen, label: "LCA Fundamentals", detail: "5 modules" },
                  { icon: Award, label: "Mastering LCA Desk", detail: "8 modules" },
                  { icon: Shield, label: "Audit Trail Badges", detail: "On completion" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur">
                    <item.icon size={14} className="text-emerald-300" />
                    <div>
                      <p className="text-white text-xs font-semibold">{item.label}</p>
                      <p className="text-emerald-200/60 text-[10px]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/training" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-200 hover:gap-3 transition-all">
                Explore the Learning Centre <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
