import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for LCA Desk, the AI-powered local content compliance platform for oil and gas companies.",
};

export default function TermsPage() {
  return (
    <>
      <HeroSection headline="Terms of Service" sub="Last updated: April 6, 2026" geometricVariant="grid" />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-10 text-sm text-text-secondary leading-relaxed">

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="mb-3">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the LCA Desk platform and website (collectively, the &ldquo;Service&rdquo;), operated by Stabroek Advisory LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By creating an account or using the Service, you agree to be bound by these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization.
            </p>
            <p>If you do not agree to these Terms, do not use the Service.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">2. Service Description</h2>
            <p className="mb-3">LCA Desk provides software tools for managing compliance with Local Content Act requirements in petroleum-producing jurisdictions, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Guided report generation for half-yearly, annual, and master plan submissions.</li>
              <li>AI-assisted compliance gap detection and narrative drafting.</li>
              <li>Filing deadline tracking and automated reminders.</li>
              <li>Procurement opportunity board and supplier directory.</li>
              <li>Job board for petroleum sector employment.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">3. Not Legal or Regulatory Advice</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-3">
              <p className="text-amber-900 font-medium">
                LCA Desk is a software tool. It does not constitute legal, tax, or regulatory advice. The platform generates reports based on data you provide, but it is your responsibility to verify accuracy and ensure compliance with applicable laws. We are not affiliated with any government regulatory body, including the Local Content Secretariat, NCDMB, or any petroleum operator.
              </p>
            </div>
            <p>You should consult qualified legal and compliance professionals for advice specific to your situation. We disclaim all liability for regulatory penalties, enforcement actions, or other consequences resulting from reliance on our Service.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">4. Account Registration</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>You must provide accurate, complete, and current information when registering.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>You must notify us immediately at <a href="mailto:hello@lcadesk.com" className="text-accent hover:underline">hello@lcadesk.com</a> if you suspect unauthorized access.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">5. Trial Period</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>New accounts receive a 30-day trial with full Professional-tier access. A credit card is collected at signup.</li>
              <li>A credit card is collected at signup. You will not be charged until the trial ends.</li>
              <li>At the end of the trial, platform access is suspended unless you subscribe to a paid plan. Your data is retained for 90 days.</li>
              <li>Data entered during the trial is retained and accessible if you subscribe.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">6. Pricing, Payment & Cancellation</h2>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Current pricing is published at <Link href="/pricing" className="text-accent hover:underline">lcadesk.com/pricing</Link>. Prices are in US dollars and exclude applicable taxes.</li>
              <li>Subscriptions are billed monthly or annually via Stripe. Payment is due at the beginning of each billing cycle.</li>
              <li>We may change pricing with 30 days&apos; notice. Existing subscribers will be notified by email before any price change takes effect.</li>
              <li>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing cycle. No refunds are provided for partial billing periods.</li>
              <li>Upon cancellation, you may request an export of your data within 90 days. After 90 days, your data will be permanently deleted.</li>
            </ul>
            <h3 className="font-semibold text-text-primary mb-2">Free Accounts (Job Seekers &amp; Suppliers)</h3>
            <p>Guyanese job seekers and suppliers may register and use the jobs board and supplier directory at no cost. Free accounts do not include access to the compliance reporting platform. Free accounts are subject to these same Terms.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">7. Data Ownership & Intellectual Property</h2>
            <h3 className="font-semibold text-text-primary mb-2">Your Data</h3>
            <p className="mb-3">You retain full ownership of all data, documents, and content you upload or create using the Service (&ldquo;Your Data&rdquo;). We do not claim any intellectual property rights over Your Data. We process Your Data solely to provide and improve the Service.</p>
            <h3 className="font-semibold text-text-primary mb-2">Our Intellectual Property</h3>
            <p className="mb-3">The Service, including its software, design, branding, documentation, and all AI-generated templates and report structures, is owned by Stabroek Advisory LLC and protected by intellectual property laws. You may not copy, modify, distribute, reverse-engineer, or create derivative works of any part of the Service.</p>
            <h3 className="font-semibold text-text-primary mb-2">AI-Generated Content</h3>
            <p>Reports and content generated by the AI features based on Your Data are owned by you. However, the underlying AI models, prompts, and report templates remain our intellectual property.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">8. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Use the Service for any unlawful purpose or to submit false or misleading information to regulatory bodies.</li>
              <li>Attempt to gain unauthorized access to any part of the Service or its infrastructure.</li>
              <li>Interfere with or disrupt the Service or the servers and networks connected to it.</li>
              <li>Use automated tools (bots, scrapers) to access the Service without our written consent.</li>
              <li>Sublicense, resell, or redistribute access to the Service without authorization.</li>
              <li>Upload malicious code, viruses, or any content designed to harm the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">9. Service Availability & Modifications</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>We strive to maintain high availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or factors beyond our control.</li>
              <li>We may modify, suspend, or discontinue features of the Service at any time. We will provide reasonable notice for material changes that affect paid subscribers.</li>
              <li>We are not liable for any loss or damage arising from Service downtime or modifications.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">10. Limitation of Liability</h2>
            <div className="bg-surface rounded-xl border border-border p-5">
              <p className="mb-3">TO THE MAXIMUM EXTENT PERMITTED BY LAW, STABROEK ADVISORY LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.</li>
                <li>Any regulatory penalties, fines, or enforcement actions resulting from your use of or reliance on the Service.</li>
                <li>Any errors, inaccuracies, or omissions in AI-generated content or compliance reports.</li>
                <li>Any unauthorized access to or alteration of your data.</li>
              </ul>
              <p className="mt-3">OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">11. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Stabroek Advisory LLC, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">12. Termination</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>You may terminate your account at any time by contacting us or using the account settings.</li>
              <li>We may suspend or terminate your access if you violate these Terms, fail to pay fees when due, or if required by law.</li>
              <li>Upon termination, your right to use the Service ceases immediately. Sections 3, 7, 10, 11, 13, and 14 survive termination.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">13. Governing Law & Dispute Resolution</h2>
            <p className="mb-3">
              These Terms are governed by the laws of the State of Texas, United States, without regard to conflict of law principles. Any disputes arising from these Terms or the Service shall be resolved through:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li><strong className="text-text-primary">Informal resolution:</strong> Both parties agree to attempt to resolve disputes informally by contacting <a href="mailto:hello@lcadesk.com" className="text-accent hover:underline">hello@lcadesk.com</a> before initiating formal proceedings.</li>
              <li><strong className="text-text-primary">Arbitration:</strong> If informal resolution fails, disputes will be resolved through binding arbitration administered in Houston, Texas.</li>
            </ol>
            <p className="mt-3">You agree to waive any right to participate in class action lawsuits or class-wide arbitration against us.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">14. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. We will notify registered users of material changes via email at least 30 days in advance. Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">15. Contact</h2>
            <p className="mb-2">For questions about these Terms:</p>
            <div className="bg-surface rounded-xl border border-border p-5">
              <p className="font-medium text-text-primary mb-1">Stabroek Advisory LLC</p>
              <p>Houston, Texas, USA</p>
              <p>Email: <a href="mailto:hello@lcadesk.com" className="text-accent hover:underline">hello@lcadesk.com</a></p>
              <p>Website: <Link href="/" className="text-accent hover:underline">lcadesk.com</Link></p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
