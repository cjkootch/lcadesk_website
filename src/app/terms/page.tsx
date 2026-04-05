import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms of service for LCA Desk, the local content compliance platform for Guyana's oil and gas sector.",
};

export default function TermsPage() {
  return (
    <>
      <HeroSection headline="Terms of Service" sub="Last updated: April 2026" geometricVariant="grid" />
      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-sm">
        <h2 className="font-display text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-text-secondary mb-6">By using LCA Desk, you agree to these terms of service. If you do not agree, do not use the platform.</p>
        <h2 className="font-display text-xl font-semibold mb-4">2. Service Description</h2>
        <p className="text-text-secondary mb-6">LCA Desk provides compliance software for Local Content Act filings in Guyana&apos;s petroleum sector.</p>
        <h2 className="font-display text-xl font-semibold mb-4">3. Free Trial</h2>
        <p className="text-text-secondary mb-6">14-day trial with full Pro access. No credit card required. Data saved after trial.</p>
        <h2 className="font-display text-xl font-semibold mb-4">4. Pricing &amp; Payment</h2>
        <p className="text-text-secondary mb-6">Prices as listed on lcadesk.com/pricing. Cancel anytime. Data exportable on request.</p>
        <h2 className="font-display text-xl font-semibold mb-4">5. Data Ownership</h2>
        <p className="text-text-secondary mb-6">You own your data. We process it to provide services only.</p>
        <h2 className="font-display text-xl font-semibold mb-4">6. Limitation of Liability</h2>
        <p className="text-text-secondary mb-6">LCA Desk is a software tool. We do not provide legal or regulatory advice.</p>
        <h2 className="font-display text-xl font-semibold mb-4">7. Contact</h2>
        <p className="text-text-secondary mb-6">hello@lcadesk.com</p>
      </div>
    </>
  );
}
