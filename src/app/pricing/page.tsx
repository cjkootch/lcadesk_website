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
      url: "https://app.lcadesk.com/auth/signup?role=filer",
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
      url: "https://app.lcadesk.com/auth/signup?role=filer",
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
        heroImage={{ src: "/illustrations/hero-pricing.png", alt: "LCA Desk pricing plans" }}
      />

      <PricingToggle />

      {/* Supplier & Job Seeker Pricing */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Not a Filer?</p>
        <h2 className="text-center font-bold text-3xl text-text-primary mb-4">Pricing for Suppliers &amp; Job Seekers</h2>
        <p className="text-center text-text-secondary text-sm mb-10 max-w-2xl mx-auto">
          The plans above are for contractors, sub-contractors, and licensees filing LCA reports. If you&apos;re a Guyanese supplier or job seeker, here&apos;s what&apos;s available.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Supplier tiers */}
          <div className="bg-card rounded-2xl border border-border p-7 flex flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full w-fit mb-4">Suppliers</span>
            <h3 className="text-lg font-semibold text-text-primary mb-1">Supplier Free</h3>
            <p className="text-xs text-text-muted mb-3">LCS-registered Guyanese businesses</p>
            <p className="text-3xl font-bold text-text-primary mb-1" style={{ fontFamily: "var(--font-tech)" }}>$0</p>
            <p className="text-xs text-text-muted mb-5">forever</p>
            <ul className="space-y-2 mb-6 flex-1 text-sm text-text-secondary">
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Profile in the Verified Companies directory</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Browse all procurement opportunities</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> 3 opportunity responses per month</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Basic company profile</li>
            </ul>
            <div className="border-t border-border pt-5 mt-auto">
              <h3 className="text-lg font-semibold text-text-primary mb-1">Supplier Pro</h3>
              <p className="text-3xl font-bold text-text-primary mb-1" style={{ fontFamily: "var(--font-tech)" }}>$99<span className="text-sm font-normal text-text-muted ml-1">/mo</span></p>
              <p className="text-xs text-text-muted mb-4">Unlock growth tools</p>
              <ul className="space-y-2 mb-6 text-sm text-text-secondary">
                <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Everything in Free</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Unlimited opportunity responses</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Response analytics &amp; tracking</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Priority placement in directory</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Enhanced company profile</li>
              </ul>
            </div>
            <Link href="https://app.lcadesk.com/auth/signup?role=supplier" className="rounded-lg px-6 py-3 text-sm font-medium text-center border border-accent text-accent hover:bg-accent/5 transition-all hover:scale-[1.02]">
              Get Listed
            </Link>
          </div>

          {/* Job Seeker */}
          <div className="bg-card rounded-2xl border border-border p-7 flex flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full w-fit mb-4">Job Seekers</span>
            <h3 className="text-lg font-semibold text-text-primary mb-1">Always Free</h3>
            <p className="text-xs text-text-muted mb-3">Guyanese nationals in the petroleum sector</p>
            <p className="text-3xl font-bold text-text-primary mb-1" style={{ fontFamily: "var(--font-tech)" }}>$0</p>
            <p className="text-xs text-text-muted mb-5">forever &middot; no paid tier</p>
            <ul className="space-y-2 mb-6 flex-1 text-sm text-text-secondary">
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Full job board access (company + LCS postings)</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> AI resume builder</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Learning courses &amp; certifications</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Compliance profile with credentials</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Job alerts &amp; application tracking</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Visible to hiring contractors</li>
            </ul>
            <p className="text-xs text-text-muted mb-5 p-3 bg-blue-50 rounded-lg border border-blue-100">
              Job seekers are the network effect — more profiles means more value for contractors and suppliers. That&apos;s why it&apos;s free forever.
            </p>
            <Link href="https://app.lcadesk.com/auth/signup?role=job_seeker" className="rounded-lg px-6 py-3 text-sm font-medium text-center border border-accent text-accent hover:bg-accent/5 transition-all hover:scale-[1.02]">
              Find Petroleum Jobs
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
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </main>
  );
}
