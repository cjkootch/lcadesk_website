"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, Headset, ChevronDown, X, Minus } from "lucide-react";

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
    name: "Essentials",
    bestFor: "Small contractors / 1\u201315 employees",
    monthly: 199,
    annual: 1910,
    features: [
      "1 entity",
      "3 users",
      "All 5 mandatory submission types",
      "Guided data entry wizard",
      "Deadline alerts & filing calendar",
      "Compliance Health Score",
      "Unlimited report generation",
      "1 year data history",
      "Email support (48hr)",
    ],
    cta: { label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" },
    monthlySubtext: "per month",
    annualSubtext: "$1,910/yr \u00b7 save $478",
  },
  {
    name: "Professional",
    bestFor: "Growing contractors / 15\u2013150 employees",
    monthly: 399,
    annual: 3830,
    highlighted: true,
    aiBadge: "Includes AI Narrative Drafting",
    features: [
      "Up to 5 entities/projects",
      "10 users",
      "Unlimited report generation",
      "AI Narrative Drafting",
      "AI Compliance Gap Detection",
      "Compliance Health Score",
      "Workforce + procurement dashboards",
      "Payment log & audit trail",
      "Unlimited data history",
      "Priority support (24hr)",
    ],
    cta: { label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" },
    monthlySubtext: "per month",
    annualSubtext: "$3,830/yr \u00b7 save $958",
  },
  {
    name: "Enterprise",
    bestFor: "Large contractors / multi-entity",
    monthly: null,
    annual: null,
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
  },
  {
    name: "Managed Service",
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
  },
];

type CellValue = boolean | string;

interface ComparisonRow {
  feature: string;
  essentials: CellValue;
  professional: CellValue;
  enterprise: CellValue;
  managed: CellValue;
}

interface ComparisonCategory {
  category: string;
  rows: ComparisonRow[];
}

const comparisonData: ComparisonCategory[] = [
  {
    category: "Capacity",
    rows: [
      { feature: "Entities / projects", essentials: "1", professional: "Up to 5", enterprise: "Unlimited", managed: "Unlimited" },
      { feature: "Users", essentials: "3", professional: "10", enterprise: "Unlimited", managed: "N/A" },
      { feature: "Data history", essentials: "1 year", professional: "Unlimited", enterprise: "Unlimited", managed: "Unlimited" },
    ],
  },
  {
    category: "Filing & Reporting",
    rows: [
      { feature: "All 5 submission types", essentials: true, professional: true, enterprise: true, managed: true },
      { feature: "Guided data entry wizard", essentials: true, professional: true, enterprise: true, managed: true },
      { feature: "Unlimited report generation", essentials: true, professional: true, enterprise: true, managed: true },
      { feature: "Secretariat-ready exports (PDF & Excel)", essentials: true, professional: true, enterprise: true, managed: true },
      { feature: "Notice of Submission letter", essentials: true, professional: true, enterprise: true, managed: true },
      { feature: "Deadline alerts & filing calendar", essentials: true, professional: true, enterprise: true, managed: true },
    ],
  },
  {
    category: "AI Features",
    rows: [
      { feature: "AI Narrative Drafting", essentials: false, professional: true, enterprise: true, managed: true },
      { feature: "AI Compliance Gap Detection", essentials: false, professional: true, enterprise: true, managed: true },
      { feature: "Ask the LCA Expert (AI assistant)", essentials: false, professional: true, enterprise: true, managed: true },
      { feature: "Document Intelligence", essentials: false, professional: false, enterprise: true, managed: true },
    ],
  },
  {
    category: "Analytics & Insights",
    rows: [
      { feature: "Compliance Health Score", essentials: true, professional: true, enterprise: true, managed: true },
      { feature: "Workforce dashboards", essentials: false, professional: true, enterprise: true, managed: true },
      { feature: "Procurement dashboards", essentials: false, professional: true, enterprise: true, managed: true },
      { feature: "Payment log", essentials: false, professional: true, enterprise: true, managed: true },
      { feature: "Full audit trail", essentials: false, professional: true, enterprise: true, managed: true },
    ],
  },
  {
    category: "Administration",
    rows: [
      { feature: "Role-based permissions", essentials: false, professional: false, enterprise: true, managed: "N/A" },
      { feature: "API / ERP integrations", essentials: false, professional: false, enterprise: true, managed: "N/A" },
      { feature: "Custom workflows", essentials: false, professional: false, enterprise: true, managed: "N/A" },
      { feature: "White-glove onboarding", essentials: false, professional: false, enterprise: true, managed: true },
    ],
  },
  {
    category: "Managed Services",
    rows: [
      { feature: "Data collection coordination", essentials: false, professional: false, enterprise: false, managed: true },
      { feature: "Report preparation", essentials: false, professional: false, enterprise: false, managed: true },
      { feature: "AI drafting + human review", essentials: false, professional: false, enterprise: false, managed: true },
      { feature: "Secretariat submission on your behalf", essentials: false, professional: false, enterprise: false, managed: true },
      { feature: "Acknowledgement tracking", essentials: false, professional: false, enterprise: false, managed: true },
      { feature: "Audit defense", essentials: false, professional: false, enterprise: false, managed: true },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Email support", essentials: "48hr", professional: "24hr", enterprise: "4hr SLA", managed: "4hr SLA" },
      { feature: "Named CSM", essentials: false, professional: false, enterprise: true, managed: true },
    ],
  },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === true) return <Check size={16} className="text-accent mx-auto" />;
  if (value === false) return <Minus size={14} className="text-text-muted/40 mx-auto" />;
  if (value === "N/A") return <span className="text-xs text-text-muted">N/A</span>;
  return <span className="text-xs font-medium text-text-secondary">{value}</span>;
}

function ComparisonTable() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 max-w-5xl mx-auto">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-border bg-card hover:bg-surface text-sm font-semibold text-text-secondary hover:text-accent transition-all"
      >
        {open ? "Hide" : "Compare all features"}
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 rounded-2xl border border-border bg-card overflow-x-auto shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider w-[40%]">Feature</th>
                    <th className="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider text-center">Essentials</th>
                    <th className="p-4 text-xs font-semibold text-accent uppercase tracking-wider text-center relative">
                      Professional
                      <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-accent rounded-full" />
                    </th>
                    <th className="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider text-center">Enterprise</th>
                    <th className="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider text-center">Managed</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((cat) => (
                    <>
                      <tr key={cat.category}>
                        <td colSpan={5} className="px-4 pt-5 pb-2">
                          <span className="text-xs font-bold text-accent uppercase tracking-widest">{cat.category}</span>
                        </td>
                      </tr>
                      {cat.rows.map((row, j) => (
                        <tr key={`${cat.category}-${j}`} className={`border-t border-border/50 ${j % 2 === 0 ? "" : "bg-surface/30"}`}>
                          <td className="px-4 py-3 text-sm text-text-primary">{row.feature}</td>
                          <td className="px-4 py-3 text-center"><CellIcon value={row.essentials} /></td>
                          <td className="px-4 py-3 text-center bg-accent/[0.02]"><CellIcon value={row.professional} /></td>
                          <td className="px-4 py-3 text-center"><CellIcon value={row.enterprise} /></td>
                          <td className="px-4 py-3 text-center"><CellIcon value={row.managed} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Plan CTAs at bottom of table */}
            <div className="grid grid-cols-4 gap-4 mt-4 max-w-5xl">
              <div className="text-center">
                <Link href="https://app.lcadesk.com/auth/signup?role=filer" className="text-xs font-semibold text-accent hover:underline">
                  Start Free
                </Link>
              </div>
              <div className="text-center">
                <Link href="https://app.lcadesk.com/auth/signup?role=filer" className="text-xs font-semibold text-accent hover:underline">
                  Start Free
                </Link>
              </div>
              <div className="text-center">
                <Link href="/contact" className="text-xs font-semibold text-accent hover:underline">
                  Contact Us
                </Link>
              </div>
              <div className="text-center">
                <Link href="/contact" className="text-xs font-semibold text-accent hover:underline">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6">
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
            Save up to 20%
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
                Your Trial Plan
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
            {plan.name === "Professional" && (
              <p className="text-xs text-text-muted mb-2">
                Everything in your free trial — keep it after day 30
              </p>
            )}

            <div className="mb-1 mt-2">
              {plan.isService ? (
                <span className="font-[family-name:var(--font-tech)] text-3xl font-bold text-text-primary">
                  From $2,500
                </span>
              ) : plan.monthly === null ? (
                <span className="font-[family-name:var(--font-tech)] text-3xl font-bold text-text-primary">
                  Custom
                </span>
              ) : (
                <motion.span
                  key={`${plan.name}-${annual}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-[family-name:var(--font-tech)] text-3xl font-bold text-text-primary"
                >
                  ${annual ? Math.round(plan.annual! / 12).toLocaleString() : plan.monthly.toLocaleString()}
                </motion.span>
              )}
              {plan.monthly !== null && <span className="text-sm text-text-muted ml-1">/mo</span>}
            </div>

            {(plan.monthlySubtext || plan.annualSubtext) && (
              <p className="text-xs text-text-muted mb-5">
                {annual ? plan.annualSubtext : plan.monthlySubtext}
              </p>
            )}
            {!plan.monthlySubtext && !plan.annualSubtext && <div className="mb-5" />}

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
        30-day free trial, no card required. Add a payment method anytime before your trial ends. Cancel anytime.
      </p>

      {/* Feature comparison table */}
      <ComparisonTable />

      {/* Anthropic credibility strip */}
      <div className="bg-gray-800 rounded-2xl p-6 mt-12 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <Image src="/claude-logo.png" alt="Claude by Anthropic" width={140} height={30} className="h-8 w-auto flex-shrink-0 brightness-0 invert" />
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
