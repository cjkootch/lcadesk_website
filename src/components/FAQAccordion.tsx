"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  items: Array<{ q: string; a: string }>;
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.03, duration: 0.35 }}
            className={`border rounded-xl overflow-hidden transition-all duration-200 ${
              isOpen ? "border-accent/40 bg-accent-light/30 shadow-sm" : "border-border hover:border-accent/20 bg-card"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 transition-colors ${
                  isOpen ? "bg-accent text-white" : "bg-surface text-text-muted"
                }`}>
                  {i + 1}
                </span>
                <span className={`text-sm font-medium pr-4 transition-colors ${
                  isOpen ? "text-accent" : "text-text-primary"
                }`}>
                  {item.q}
                </span>
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 transition-colors ${
                    isOpen ? "text-accent" : "text-text-muted"
                  }`}
                />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pl-15">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
