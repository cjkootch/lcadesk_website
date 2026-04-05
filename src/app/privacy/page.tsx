import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Privacy Policy | LCA Desk",
  description:
    "Learn how LCA Desk protects your data with enterprise-grade encryption and strict privacy practices for local content compliance filings.",
};

export default function PrivacyPage() {
  return (
    <>
      <HeroSection headline="Privacy Policy" sub="Last updated: April 2026" geometricVariant="grid" />
      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-sm">
        <h2 className="font-display text-xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="text-text-secondary mb-6">We collect information you provide directly, including name, email, company information, and LCA filing data entered into the platform.</p>
        <h2 className="font-display text-xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="text-text-secondary mb-6">Your information is used to provide LCA compliance services, generate reports, and improve our platform. We do not sell your data.</p>
        <h2 className="font-display text-xl font-semibold mb-4">3. Data Security</h2>
        <p className="text-text-secondary mb-6">We use TLS 1.3 encryption in transit and AES-256 encryption at rest. Access is controlled through role-based permissions.</p>
        <h2 className="font-display text-xl font-semibold mb-4">4. AI Data Processing</h2>
        <p className="text-text-secondary mb-6">AI features use Anthropic&apos;s Claude API for real-time processing. Your data is not stored by Anthropic or used for model training.</p>
        <h2 className="font-display text-xl font-semibold mb-4">5. Contact</h2>
        <p className="text-text-secondary mb-6">For privacy inquiries, contact hello@lcadesk.com.</p>
      </div>
    </>
  );
}
