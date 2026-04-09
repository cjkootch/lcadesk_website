import Ticker from "@/components/Ticker";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/home/HeroSection";
import AudiencePathsSection from "@/components/home/AudiencePathsSection";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";
import ProblemSection from "@/components/home/ProblemSection";
import AIFeaturesSection from "@/components/home/AIFeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesGridSection from "@/components/home/FeaturesGridSection";
import TrainingCalloutSection from "@/components/home/TrainingCalloutSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import StatsBarSection from "@/components/home/StatsBarSection";
import MarketsSection from "@/components/home/MarketsSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import SocialProofSection from "@/components/home/SocialProofSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <AudiencePathsSection />
      <TrustBadgesSection />
      <ProblemSection />
      <AIFeaturesSection />
      <HowItWorksSection />
      <FeaturesGridSection />
      <TrainingCalloutSection />
      <IntegrationsSection />
      <StatsBarSection />
      <MarketsSection />
      <PricingSection />
      <FAQSection />
      <ComparisonSection />
      <SocialProofSection />
      <CTABanner
        headline="Your next LCA filing deadline is closer than you think."
        body="H1 reports are due July 30. H2 reports are due January 30. Start your 30-day trial — full Professional access, card collected at signup."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
