"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const entries = [
  {
    date: "April 2026",
    title: "Public launch — LCA Desk v1.0",
    description:
      "Full platform launch with all 5 submission types, AI Narrative Drafting, Compliance Gap Detection, and filing calendar.",
  },
  {
    date: "March 2026",
    title: "Beta launch",
    description:
      "Invite-only beta with 50 companies. AI features in testing.",
  },
  {
    date: "January 2026",
    title: "Alpha development",
    description:
      "Core platform build. Template engine, data entry wizard, export system.",
  },
  {
    date: "Q3 2025",
    title: "Research & design",
    description:
      "Regulatory analysis, user interviews, and product design phase.",
  },
];

export default function ChangelogPage() {
  return (
    <>
      <HeroSection
        eyebrow="Changelog"
        headline="What's New in LCA Desk"
        sub="Track every update, feature, and improvement."
        geometricVariant="grid"
      />

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="relative">
          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-8 pb-10 last:pb-0 border-l-2 border-border"
            >
              {/* Accent dot */}
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent" />

              <p className="text-sm font-bold text-accent mb-1">
                {entry.date}
              </p>
              <h3 className="text-lg font-semibold mb-1">{entry.title}</h3>
              <p className="text-text-secondary text-sm">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
