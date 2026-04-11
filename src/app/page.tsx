import type { Metadata } from "next";
import Ticker from "@/components/Ticker";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  alternates: { canonical: "https://lcadesk.com" },
  openGraph: {
    title: "LCA Desk | Regulatory-Grade Local Content Compliance Platform",
    description:
      "AI-powered compliance platform for local content programs. Digitize mandated filing, validation, regulator review, and audit workflows. Configurable for every jurisdiction.",
    url: "https://lcadesk.com",
  },
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is LCA Desk?", acceptedAnswer: { "@type": "Answer", text: "LCA Desk is a regulatory-grade compliance operating system for local content programs. It digitizes mandated filing, validation, regulator review, and audit workflows for extractive industries. The platform is configurable per jurisdiction, starting with Guyana." } },
    { "@type": "Question", name: "Who uses LCA Desk?", acceptedAnswer: { "@type": "Answer", text: "Both sides of the compliance relationship. Industry users (operators, contractors, subcontractors, suppliers) prepare and submit filings. Regulators and secretariats receive, review, validate, and audit those submissions." } },
    { "@type": "Question", name: "How is this different from a filing portal?", acceptedAnswer: { "@type": "Answer", text: "Filing portals handle document upload. LCA Desk manages the full compliance lifecycle: structured data collection, rules-based validation, AI-assisted narrative drafting, reviewer queues, resubmission handling, evidence linking, and immutable audit trails." } },
    { "@type": "Question", name: "What penalties exist for non-compliance?", acceptedAnswer: { "@type": "Answer", text: "Penalties vary by jurisdiction. In Guyana, penalties range from GY$1 million to GY$50 million per offence. False or misleading submissions carry criminal liability." } },
    { "@type": "Question", name: "How do I get started?", acceptedAnswer: { "@type": "Answer", text: "For industry users, request a demo or start a 30-day trial with full platform access. For regulators and government bodies, contact us to discuss a pilot deployment scoped to your jurisdiction and filing requirements." } },
  ],
};
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import StatsBarSection from "@/components/home/StatsBarSection";
import MarketsSection from "@/components/home/MarketsSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import SecurityBadgesSection from "@/components/home/SecurityBadgesSection";
import EmailCapture from "@/components/EmailCapture";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <HeroSection />
      <Ticker />
      <ProblemSection />
      <HowItWorksSection />
      <ComparisonSection />
      <StatsBarSection />
      <MarketsSection />
      <PricingSection />
      <FAQSection />
      <SocialProofSection />
      <SecurityBadgesSection />
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <EmailCapture
            headline="Get LCA filing deadline reminders"
            description="We'll email you 30, 14, and 7 days before each filing deadline. No spam — just the dates that matter."
            list="filing_reminders"
          />
        </div>
      </section>
      <CTABanner
        headline="Your next filing deadline is closer than you think."
        body="Mandated local content filings recur on fixed schedules. Start your 30-day trial with full platform access, or book a demo for your jurisdiction."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
