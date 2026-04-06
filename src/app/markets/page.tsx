"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

interface MarketCard {
  flag: string;
  country: string;
  status: "LIVE" | "COMING SOON";
  details: string[];
  pricing?: string;
  cta?: { label: string; href: string };
}

const markets: MarketCard[] = [
  {
    flag: "\u{1F1EC}\u{1F1FE}",
    country: "Guyana",
    status: "LIVE",
    details: [
      "Regulatory body: Local Content Secretariat",
      "Key requirements: 5 submission types, LCA v4.1 guidelines",
      "Penalties: GY$1M\u2013GY$50M per offence",
      "Filing: H1 (Jul 30), H2 (Jan 30), Annual Plan, Master Plan, Performance Report",
      "Companies: 1,300+",
    ],
    cta: { label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" },
  },
  {
    flag: "\u{1F1F3}\u{1F1EC}",
    country: "Nigeria",
    status: "COMING SOON",
    details: [
      "Regulatory body: NCDMB",
      "Requirements: Nigerian Content Plans, Performance Reports, 106 workforce targets",
      "Penalties: 5% of project value per offence, or project cancellation",
      "Companies affected: 1,500+",
    ],
    pricing: "LCA Desk Nigeria module \u2014 pricing from $699/month",
  },
  {
    flag: "\u{1F1F9}\u{1F1F9}",
    country: "Trinidad & Tobago",
    status: "COMING SOON",
    details: [
      "Regulatory body: MEEI Permanent Local Content Committee (PLCC)",
      "Policy: Local Content and Local Participation Policy Framework (2004)",
      "Same timezone as Houston (EST)",
    ],
    pricing: "Pricing from $499/month",
  },
  {
    flag: "\u{1F1EC}\u{1F1ED}",
    country: "Ghana",
    status: "COMING SOON",
    details: [
      "Regulatory body: Petroleum Commission",
      "Regulations: LI 2204",
    ],
    pricing: "Pricing from $399/month",
  },
  {
    flag: "\u{1F1F2}\u{1F1FF}",
    country: "Mozambique",
    status: "COMING SOON",
    details: [
      "Regulatory body: INP",
      "Law: 15/2017",
      "LNG sector: TotalEnergies, ENI, ExxonMobil",
    ],
    pricing: "Pricing from $349/month",
  },
  {
    flag: "\u{1F1F8}\u{1F1F7}",
    country: "Suriname",
    status: "COMING SOON",
    details: [
      "National oil company: Staatsolie",
      "Key operators: TotalEnergies, APA Corp, Petronas, QatarEnergy",
      "Block 58: 6.5B+ estimated recoverable barrels",
      "First oil expected ~2028",
      "Local content framework in development",
    ],
    pricing: "LCA Desk Suriname module \u2014 coming 2027",
  },
  {
    flag: "\u{1F1F3}\u{1F1E6}",
    country: "Namibia",
    status: "COMING SOON",
    details: [
      "Regulatory body: Ministry of Mines and Energy",
      "Policy: National Upstream Petroleum Local Content Policy (Cabinet approved Dec 2024)",
      "Operators: TotalEnergies, Shell, Galp, ExxonMobil, Chevron",
      "11B+ barrels discovered",
    ],
    pricing: "Pricing from $299/month",
  },
];

export default function MarketsPage() {
  const [emails, setEmails] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  function handleEmailChange(country: string, value: string) {
    setEmails((prev) => ({ ...prev, [country]: value }));
  }

  function handleNotify(country: string) {
    if (!emails[country]) return;
    setSubmitted((prev) => ({ ...prev, [country]: true }));
  }

  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        eyebrow="Markets"
        headline="Built for Guyana. Expanding to 35+ Countries."
        sub="Local content compliance is mandatory in 35+ countries. LCA Desk is building jurisdiction modules for every major oil-producing market."
        geometricVariant="waves"
      />

      {/* Market Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, i) => (
            <motion.div
              key={market.country}
              className="rounded-2xl border border-border p-6 bg-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-text-primary">
                  {market.flag} {market.country}
                </h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    market.status === "LIVE"
                      ? "bg-accent text-white"
                      : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {market.status}
                </span>
              </div>

              {/* Details */}
              <ul className="space-y-2 mb-5">
                {market.details.map((detail, j) => (
                  <li key={j} className="text-sm text-text-secondary leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Pricing note */}
              {market.pricing && (
                <p className="text-xs text-text-muted mb-4 italic">{market.pricing}</p>
              )}

              {/* CTA for LIVE market */}
              {market.cta && (
                <Link
                  href={market.cta.href}
                  className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                >
                  {market.cta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}

              {/* Email capture for COMING SOON */}
              {market.status === "COMING SOON" && (
                <div className="mt-1">
                  {submitted[market.country] ? (
                    <p className="text-sm text-accent font-medium">
                      ✓ You&apos;re on the waitlist!
                    </p>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleNotify(market.country);
                      }}
                      className="flex gap-2"
                    >
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={emails[market.country] || ""}
                        onChange={(e) =>
                          handleEmailChange(market.country, e.target.value)
                        }
                        className="flex-1 rounded-lg border border-border px-3 py-2 bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      />
                      <button
                        type="submit"
                        className="bg-accent text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                      >
                        Notify Me
                      </button>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <p className="text-center text-text-muted text-sm mt-12">
          35+ countries have local content laws. We&apos;re building them all.
          More jurisdictions announced quarterly.
        </p>
      </section>

      <CTABanner
        headline="Ready to simplify LCA compliance?"
        body="Start your free 14-day trial today. No credit card required."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </main>
  );
}
