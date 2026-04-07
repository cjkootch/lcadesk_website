"use client";

import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import PricingToggle from "@/components/PricingToggle";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

const pricingFAQs = [
  {
    q: "What's the difference between Essentials and Professional?",
    a: "Essentials ($199/month) covers 1 entity, 3 users, all 5 submission types, and includes a Compliance Health Score. Professional ($399/month) adds AI Narrative Drafting, Compliance Gap Detection, up to 5 entities, workforce + procurement dashboards, and a payment log.",
  },
  {
    q: "Does the 30-day trial include AI features?",
    a: "Yes. Full Professional access including AI Narrative Drafting and Compliance Gap Detection. A credit card is collected at signup but you won't be charged until the trial ends.",
  },
  {
    q: "What happens after the 30-day trial?",
    a: "If you don't select a paid plan (Essentials or Professional), platform access is paused — you won't be able to create, edit, or export reports. Your data is saved for 90 days. Upgrade anytime to pick up where you left off.",
  },
  {
    q: "What happens when I cancel?",
    a: "You can cancel anytime. Your data is saved for 90 days and exportable on request. After cancellation, platform access is paused until you resubscribe.",
  },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LCA Desk",
  description:
    "AI-powered Local Content Act compliance software for oil and gas contractors in Guyana.",
  brand: {
    "@type": "Brand",
    name: "LCA Desk",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Essentials",
      price: "199",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "199",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
      description:
        "1 entity, 3 users, all 5 submission types, guided data entry, deadline alerts, Compliance Health Score, unlimited reports.",
      url: "https://app.lcadesk.com/auth/signup",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "399",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "399",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
      description:
        "Up to 5 entities, 10 users, unlimited reports, AI Narrative Drafting, AI Compliance Gap Detection, Compliance Health Score, dashboards, payment log, audit trail.",
      url: "https://app.lcadesk.com/auth/signup",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      priceCurrency: "USD",
      description:
        "Unlimited entities and users, all AI features, role-based permissions, API/ERP integrations, SLA support. Contact for pricing.",
      url: "https://lcadesk.com/contact",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFAQs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function PricingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection
        eyebrow="Pricing"
        headline="Simple, transparent pricing."
        sub="30-day trial with card collected. Cancel anytime."
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
        body="Start your 30-day trial today. Full Professional access, card collected at signup."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </main>
  );
}
