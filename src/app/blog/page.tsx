"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const articles = [
  {
    category: "Regulatory Updates",
    title: "Understanding Guyana's LCA v4.1 Template Changes",
    description:
      "A detailed walkthrough of the latest template updates and what they mean for your next filing.",
  },
  {
    category: "Compliance Tips",
    title: "5 Common Mistakes in Half-Yearly Report Filings",
    description:
      "Avoid these pitfalls when preparing your next submission to the Local Content Secretariat.",
  },
  {
    category: "Industry Analysis",
    title: "Nigeria vs. Guyana: Comparing Local Content Frameworks",
    description:
      "A side-by-side analysis of two major compliance regimes and what operators need to know.",
  },
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        eyebrow="Blog"
        headline="LCA Compliance Insights"
        sub="Expert analysis on local content legislation, compliance strategies, and industry updates."
        geometricVariant="grid"
      />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl border p-6 flex flex-col gap-3"
            >
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {article.category}
              </span>
              <h3 className="font-semibold text-lg">{article.title}</h3>
              <p className="text-text-secondary text-sm flex-1">
                {article.description}
              </p>
              <span className="inline-block mt-2 text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full w-fit">
                Coming Soon
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
