"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  lightOnDark?: boolean;
}

export default function StatCard({ value, label, lightOnDark = false }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([\d,]+)/);
    if (!match) {
      setDisplayed(value);
      return;
    }
    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = value.slice(match[1].length);
    const duration = 1200;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      setDisplayed(current.toLocaleString() + suffix);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className={`text-center px-3 py-4 rounded-xl transition-colors ${
        lightOnDark ? "hover:bg-white/5" : "hover:bg-accent/5"
      }`}
    >
      <p className={`text-4xl md:text-5xl font-bold tracking-tight mb-2 ${
        lightOnDark ? "text-emerald-300" : "gradient-text"
      }`}>
        {displayed}
      </p>
      <p className={`text-sm ${lightOnDark ? "text-white/70" : "text-text-secondary"}`}>{label}</p>
    </motion.div>
  );
}
