"use client";

import HeroSection from "@/components/HeroSection";
import PricingToggle from "@/components/PricingToggle";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

const pricingFAQs = [
  {
    q: "What's the difference between Lite and Pro?",
    a: "Lite ($99/month) includes platform access plus $25 per report generated. Pro ($599/month) includes unlimited report generation plus AI Narrative Drafting and Compliance Gap Detection. After 4 reports per month, Pro is cheaper than Lite.",
  },
  {
    q: "Does the 14-day trial include AI features?",
    a: "Yes. Full Pro access including AI Narrative Drafting and Compliance Gap Detection — no credit card required.",
  },
  {
    q: "What happens when I cancel?",
    a: "You can cancel anytime. Your data is saved and exportable on request. You'll be downgraded to read-only view.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Pricing"
        headline="Simple, transparent pricing."
        sub="Start free for 14 days. No credit card required."
        geometricVariant="grid"
      />

      <PricingToggle />

      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="mb-10 text-center text-3xl font-bold text-text-primary">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={pricingFAQs} />
      </section>

      <CTABanner
        headline="Ready to simplify LCA compliance?"
        body="Start your free 14-day trial today."
        primaryCTA={{ label: "Start Free Trial", href: "/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </main>
  );
}
