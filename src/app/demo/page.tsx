"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const demoHighlights = [
  "AI Narrative Drafting in real-time",
  "Compliance Gap Detection walkthrough",
  "Report generation demo",
  "Filing calendar & deadline management",
  "Q&A with our team",
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Demo"
        headline="See LCA Desk in Action"
        sub="30-minute live demo. We'll build a live LCA submission from your company's data."
        geometricVariant="nodes"
      />

      <section className="max-w-3xl mx-auto px-6 py-20">
        {/* What you'll see */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-text-primary mb-6">
            What you&apos;ll see:
          </h2>
          <ul className="space-y-4">
            {demoHighlights.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
              >
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-text-secondary text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Calendly Placeholder */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={2}
        >
          <div
            id="calendly-embed"
            className="bg-surface rounded-2xl border border-border p-12 text-center min-h-[400px] flex items-center justify-center"
          >
            <div>
              <p className="text-text-secondary text-sm mb-2">
                Calendly embed loading...
              </p>
              <p className="text-text-muted text-xs">
                Demo calendar will appear here
              </p>
            </div>
          </div>
        </motion.div>

        {/* Email Fallback */}
        <p className="text-center text-text-muted text-sm mt-8">
          Or email{" "}
          <a
            href="mailto:hello@lcadesk.com"
            className="text-accent hover:underline"
          >
            hello@lcadesk.com
          </a>{" "}
          to schedule
        </p>
      </section>
    </main>
  );
}
