"use client";

import Link from "next/link";
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
    q: "What happens after the 14-day trial?",
    a: "If you don't upgrade to a paid plan (Lite or Pro), platform access is paused — you won't be able to create, edit, or export reports. Your data is saved for 90 days. Upgrade anytime to pick up where you left off.",
  },
  {
    q: "What happens when I cancel?",
    a: "You can cancel anytime. Your data is saved for 90 days and exportable on request. After cancellation, platform access is paused until you resubscribe.",
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

      {/* Free for job seekers and suppliers */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <p className="text-emerald-800 font-semibold text-lg mb-2">Free for Job Seekers &amp; Suppliers</p>
          <p className="text-emerald-700 text-sm leading-relaxed max-w-2xl mx-auto mb-5">
            The pricing above is for LCA compliance software (contractors, sub-contractors, and licensees filing reports with the Secretariat).
            If you&apos;re a <strong>Guyanese job seeker</strong> or a <strong>Guyanese supplier</strong>, registration and access are completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/jobs/register" className="inline-flex items-center gap-2 rounded-lg border-2 border-emerald-600 text-emerald-700 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-600 hover:text-white transition-all">
              Register as Job Seeker
            </Link>
            <Link href="/suppliers/register" className="inline-flex items-center gap-2 rounded-lg border-2 border-emerald-600 text-emerald-700 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-600 hover:text-white transition-all">
              Register as Supplier
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="mb-10 text-center text-3xl font-bold text-text-primary">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={pricingFAQs} />
      </section>

      <CTABanner
        headline="Ready to simplify LCA compliance?"
        body="Start your free 14-day trial today."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </main>
  );
}
