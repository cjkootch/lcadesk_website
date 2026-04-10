"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GeometricBg from "./GeometricBg";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  sub: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  fullHeight?: boolean;
  compact?: boolean;
  geometricVariant?: "grid" | "topology" | "nodes" | "waves" | "hexagons" | "circuits";
  heroImage?: { src: string; alt: string };
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

export default function HeroSection({
  eyebrow,
  headline,
  sub,
  primaryCTA,
  secondaryCTA,
  fullHeight = false,
  compact = false,
  geometricVariant = "grid",
  heroImage,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden bg-surface ${
        fullHeight ? "min-h-screen" : compact ? "" : "min-h-[60vh]"
      } pt-28 ${compact ? "pb-10" : "pb-16"}`}
    >
      <GeometricBg variant={geometricVariant} />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className={`relative mx-auto px-6 z-10 ${heroImage ? "max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" : "max-w-4xl text-center"}`}>
        <div className={heroImage ? "" : ""}>
          {eyebrow && (
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={`inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase mb-6`}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent">{eyebrow}</span>
            </motion.p>
          )}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`font-display leading-[1.1] text-text-primary mb-6 ${heroImage ? "text-4xl md:text-5xl" : "text-5xl md:text-7xl"}`}
          >
            {headline}
          </motion.h1>
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`text-lg md:text-xl text-text-secondary mb-10 leading-relaxed ${heroImage ? "max-w-xl" : "max-w-2xl mx-auto"}`}
          >
            {sub}
          </motion.p>
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={`flex flex-col sm:flex-row gap-4 ${heroImage ? "" : "justify-center"}`}
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal px-8 py-3.5 text-sm font-medium text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] transition-all"
                >
                  {primaryCTA.label}
                  <ArrowRight size={16} />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent/30 text-accent px-8 py-3.5 text-sm font-medium hover:bg-accent/5 hover:border-accent hover:scale-[1.02] transition-all"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>
        {heroImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden lg:block"
          >
            <img src={heroImage.src} alt={heroImage.alt} className="w-full max-w-md mx-auto drop-shadow-xl mix-blend-multiply" loading="eager" />
          </motion.div>
        )}
      </div>

      {fullHeight && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-accent/30 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-accent"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
