import type { Metadata } from "next";
import PricingPageClient from "@/components/PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing | LCA Desk Compliance Software",
  description:
    "Simple, transparent pricing for LCA compliance software. Start free for 14 days. Lite from $99/month, Pro from $599/month with AI features. Job seekers and suppliers register free.",
  openGraph: {
    title: "LCA Desk Pricing | From $99/month",
    description: "Simple, transparent pricing. 14-day free trial with full Pro access. No credit card required.",
  },
};

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
      name: "Lite",
      price: "99",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "99",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
      description:
        "1 entity, 2 users, all 5 submission types, guided data entry, deadline alerts, $25 per report generated.",
      url: "https://app.lcadesk.com/auth/signup",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "599",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "599",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
      description:
        "Up to 5 entities, 10 users, unlimited reports, AI Narrative Drafting, AI Compliance Gap Detection, dashboards, audit log.",
      url: "https://app.lcadesk.com/auth/signup",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "1999",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1999",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
      description:
        "Unlimited entities and users, all AI features, role-based permissions, API/ERP integrations, SLA support.",
      url: "https://lcadesk.com/contact",
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <PricingPageClient />
    </>
  );
}
