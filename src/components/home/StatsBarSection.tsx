"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import GeometricBg from "@/components/GeometricBg";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 7, suffix: "", label: "Jurisdictions in Pipeline" },
  { value: 35, suffix: "+", label: "Countries With LC Mandates" },
  { value: 1300, suffix: "+", label: "Companies Filing in Guyana" },
  { value: 5, suffix: "", label: "Filing Types Supported" },
];

export default function StatsBarSection() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
      <GeometricBg variant="hexagons" />
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-tech)" }}>
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-emerald-200/60 text-sm mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-emerald-200/70 text-sm mb-4">H1 filing deadline: July 30. H2 filing deadline: January 30.</p>
          <a href="https://app.lcadesk.com/auth/signup?role=filer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-emerald-900 px-8 py-3 text-sm font-semibold hover:bg-emerald-50 hover:shadow-lg transition-all">
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
