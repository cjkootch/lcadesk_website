import type { Metadata } from "next";
import Ticker from "@/components/Ticker";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  alternates: { canonical: "https://lcadesk.com" },
};
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import PlatformArchitectureSection from "@/components/home/PlatformArchitectureSection";
import AIFeaturesSection from "@/components/home/AIFeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesGridSection from "@/components/home/FeaturesGridSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import RegulatedWorkflowsSection from "@/components/home/RegulatedWorkflowsSection";
import StatsBarSection from "@/components/home/StatsBarSection";
import MarketsSection from "@/components/home/MarketsSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import SocialProofSection from "@/components/home/SocialProofSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <ProblemSection />
      <PlatformArchitectureSection />
      <AIFeaturesSection />
      <HowItWorksSection />
      <FeaturesGridSection />
      <ComparisonSection />
      <RegulatedWorkflowsSection />
      <StatsBarSection />
      <MarketsSection />
      <PricingSection />
      <FAQSection />
      <SocialProofSection />
      <CTABanner
        headline="Your next filing deadline is closer than you think."
        body="Mandated local content filings recur on fixed schedules. Start your 30-day trial with full platform access, or request a demo for your jurisdiction."
        primaryCTA={{ label: "Request a Demo", href: "/demo" }}
        secondaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
      />
    </>
  );
}
