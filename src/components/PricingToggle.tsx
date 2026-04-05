"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Sparkles, Headset } from "lucide-react";

interface Plan {
  name: string;
  bestFor: string;
  monthly: number | null;
  annual: number | null;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  isService?: boolean;
  aiBadge?: string;
  monthlySubtext?: string;
  annualSubtext?: string;
}

const plans: Plan[] = [
  {
    name: "Lite",
    bestFor: "Small vendors / 1\u201315 employees",
    monthly: 99,
    annual: 990,
    features: [
      "1 entity",
      "2 users",
      "All 5 mandatory submission types",
      "Guided data entry wizard",
      "Deadline alerts & filing calendar",
      "Filing export: $25 per report generated",
      "1 year data history",
      "Email support (48hr)",
    ],
    cta: { label: "Start Free Trial", href: "/signup" },
    monthlySubtext: "per month + $25 per report generated",
    annualSubtext: "$990/yr \u00b7 save $198 \u00b7 + $25/report",
  },
  {
    name: "Pro",
    bestFor: "Growing contractors / 15\u2013150 employees",
    monthly: 599,
    annual: 5990,
    highlighted: true,
    aiBadge: "Includes AI Narrative Drafting",
    features: [
      "Up to 5 entities/projects",
      "10 users",
      "Unlimited report generation",
      "AI Narrative Drafting",
      "AI Compliance Gap Detection",
      "Workforce + procurement dashboards",
      "Unlimited data history",
      "Audit log",
      "Priority support (24hr)",
    ],
    cta: { label: "Start Free Trial", href: "/signup" },
    monthlySubtext: "per month",
    annualSubtext: "$5,990/yr \u00b7 save $1,198",
  },
  {
    name: "Enterprise",
    bestFor: "Large contractors / multi-entity",
    monthly: 1999,
    annual: 19990,
    aiBadge: "All AI Features + Document Intelligence",
    features: [
      "Unlimited entities",
      "Unlimited users",
      "All AI features",
      "Role-based permissions (viewer/editor/submitter/admin)",
      "API / ERP integrations",
      "White-glove onboarding",
      "Custom workflows",
      "SLA support (4hr, named CSM)",
    ],
    cta: { label: "Contact Us", href: "/contact" },
    monthlySubtext: "per month",
    annualSubtext: "$19,990/yr \u00b7 save $3,998",
  },
  {
    name: "Full Service",
    bestFor: "Done-for-you filings",
    monthly: null,
    annual: null,
    isService: true,
    features: [
      "Software included",
      "Data collection coordination",
      "Report preparation",
      "AI drafting + human review",
      "Secretariat submission on your behalf",
      "Acknowledgement tracking",
      "Secretariat follow-up",
      "Audit defense",
    ],
    cta: { label: "Get a Quote", href: "/contact" },
    monthlySubtext: "starting price",
    annualSubtext: "Custom annual contract",
  },
];

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <span className={`text-sm font-medium transition-colors ${!annual ? "text-text-primary" : "text-text-muted"}`}>
          Monthly
        </span>
        <button
          onClick={() => setAnnual(!annual)}
          className={`relative w-14 h-7 rounded-full transition-colors ${annual ? "bg-accent" : "bg-gray-300"}`}
          aria-label="Toggle annual pricing"
        >
          <motion.div
            className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md"
            animate={{ left: annual ? "calc(100% - 25px)" : "2px" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
        <span className={`text-sm font-medium transition-colors ${annual ? "text-text-primary" : "text-text-muted"}`}>
          Annual
        </span>
        {annual && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full"
          >
            Save up to 17%
          </motion.span>
        )}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4 }}
            className={`rounded-2xl p-6 flex flex-col border transition-all ${
              plan.highlighted
                ? "border-accent border-2 bg-card relative shadow-lg"
                : plan.isService
                  ? "border-border bg-surface"
                  : "border-border bg-card"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </span>
            )}

            {plan.isService && (
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <Headset size={16} className="text-accent" />
              </div>
            )}

            <h3 className="text-lg font-medium text-text-primary mb-1">{plan.name}</h3>
            <p className="text-xs text-text-muted mb-2">{plan.bestFor}</p>

            {plan.aiBadge && (
              <p className="text-[10px] font-medium text-accent bg-accent/10 px-2 py-1 rounded inline-block mb-3 w-fit">
                {plan.aiBadge}
              </p>
            )}

            <div className="mb-1 mt-2">
              {plan.isService ? (
                <span className="font-[family-name:var(--font-tech)] text-3xl font-bold text-text-primary">
                  From $2,500
                </span>
              ) : (
                <motion.span
                  key={`${plan.name}-${annual}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-[family-name:var(--font-tech)] text-3xl font-bold text-text-primary"
                >
                  ${annual ? Math.round(plan.annual! / 12).toLocaleString() : plan.monthly!.toLocaleString()}
                </motion.span>
              )}
              <span className="text-sm text-text-muted ml-1">/mo</span>
            </div>

            <p className="text-xs text-text-muted mb-5">
              {annual ? plan.annualSubtext : plan.monthlySubtext}
            </p>

            <ul className="space-y-2.5 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                  <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={plan.cta.href}
              className={`rounded-lg px-6 py-3 text-sm font-medium text-center transition-all hover:scale-[1.02] ${
                plan.highlighted
                  ? "bg-gradient-to-r from-accent to-teal text-white hover:shadow-lg shadow-accent/20"
                  : "border border-accent text-accent hover:bg-accent/5"
              }`}
            >
              {plan.cta.label}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footnote */}
      <p className="text-text-muted text-sm text-center mt-8">
        No setup fees. Cancel anytime. Data exportable on request.
      </p>

      {/* Anthropic credibility strip */}
      <div className="bg-gray-800 rounded-2xl p-6 mt-12 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
          <Sparkles size={20} className="text-white" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Powered by Claude &mdash; Anthropic&apos;s AI</p>
          <p className="text-gray-400 text-sm mt-1">
            LCA Desk&apos;s AI features are built on Claude, Anthropic&apos;s frontier AI model. All AI outputs are reviewed by compliance professionals before submission.
          </p>
        </div>
      </div>

      {/* Jurisdiction add-ons */}
      <div className="mt-12 border border-border rounded-2xl p-8 max-w-3xl mx-auto">
        <h3 className="font-display text-xl font-semibold text-text-primary mb-6">Jurisdiction Add-Ons (Phase 2)</h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-secondary">{"\u{1F1F9}\u{1F1F9}"} Trinidad & Tobago module: +$199/month per entity</span>
            <span className="text-xs font-medium text-text-muted bg-surface px-2 py-1 rounded">Coming Soon</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-secondary">{"\u{1F1F3}\u{1F1EC}"} Nigeria (NCDMB) module: +$299/month per entity</span>
            <span className="text-xs font-medium text-text-muted bg-surface px-2 py-1 rounded">Coming Soon</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-secondary">Additional jurisdictions: announced at launch</span>
            <span className="text-xs font-medium text-text-muted bg-surface px-2 py-1 rounded">Coming Soon</span>
          </div>
        </div>
        <div className="bg-surface rounded-xl p-5">
          <p className="text-sm font-semibold text-text-primary mb-3">Multi-Jurisdiction Bundle Discounts</p>
          <div className="space-y-2 text-sm text-text-secondary">
            <p>2 jurisdictions: 15% off combined monthly</p>
            <p>3 jurisdictions: 25% off combined monthly</p>
            <p>4+ jurisdictions: Enterprise contract</p>
          </div>
        </div>
      </div>
    </div>
  );
}
