"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const vp = { once: true as const, margin: "-60px" as const };

const testimonials = [
  {
    quote: "We went from spending 5 days compiling our Half-Yearly Report in spreadsheets to generating the same report in under 2 hours. The AI narrative drafting alone saved us a full day of writing.",
    role: "Compliance Manager",
    company: "Oil & Gas Contractor, Guyana",
    initials: "CM",
    metric: "5 days → 2 hours",
  },
  {
    quote: "The validation engine caught 14 compliance gaps in our first submission that we would have missed filing manually. We avoided a GY$5M penalty exposure before our report even left the platform.",
    role: "Local Content Coordinator",
    company: "Marine Services Provider, Guyana",
    initials: "LC",
    metric: "14 gaps caught pre-submission",
  },
  {
    quote: "Filing reviews that used to take our team 3 weeks of back-and-forth emails now resolve in 5 days through the platform. Every clarification is tracked, every version is preserved.",
    role: "Regulatory Review Officer",
    company: "Government Agency",
    initials: "RO",
    metric: "3 weeks → 5 days",
  },
];

export default function SocialProofSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="py-16 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-emerald-400/60 text-xs uppercase tracking-[0.2em] font-medium mb-8">
          Trusted by compliance teams across Guyana&apos;s oil &amp; gas sector
        </motion.p>
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="bg-white/[0.05] backdrop-blur rounded-2xl border border-white/10 p-8 md:p-10 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                <span className="text-emerald-400 text-sm font-bold">{testimonials[active].initials}</span>
              </div>
              <p className="font-display text-lg md:text-xl text-white mb-4 leading-snug max-w-2xl mx-auto">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <p className="text-xs font-semibold text-emerald-400 mb-2">{testimonials[active].metric}</p>
              <p className="text-sm text-slate-400">
                {testimonials[active].role} &middot; {testimonials[active].company}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-emerald-400 w-6" : "bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-[10px] text-slate-500 max-w-md mx-auto">
          Results shown are representative examples and may vary. Individual outcomes depend on data quality, jurisdiction, and filing complexity.
        </p>
        <div className="mt-4 text-center">
          <a href="https://app.lcadesk.com/auth/signup?role=filer" className="text-sm font-semibold text-emerald-400 hover:underline">
            Join them — start your free trial &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
