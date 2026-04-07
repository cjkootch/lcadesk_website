import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how LCA Desk protects your data with enterprise-grade encryption and strict privacy practices for local content compliance filings.",
};

export default function PrivacyPage() {
  return (
    <>
      <HeroSection headline="Privacy Policy" sub="Last updated: April 6, 2026" geometricVariant="grid" />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-10 text-sm text-text-secondary leading-relaxed">

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">1. Introduction</h2>
            <p className="mb-3">
              LCA Desk (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is operated by LCA Desk, a company registered in Houston, Texas, USA. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website (lcadesk.com) and platform (app.lcadesk.com).
            </p>
            <p>By using LCA Desk, you consent to the practices described in this policy. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">2. Information We Collect</h2>
            <h3 className="font-semibold text-text-primary mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc pl-5 space-y-1.5 mb-4">
              <li><strong className="text-text-primary">Account information:</strong> Name, email address, company name, role, and phone number when you register.</li>
              <li><strong className="text-text-primary">Compliance data:</strong> Employment, procurement, and capacity development data you enter into the platform for LCA report generation.</li>
              <li><strong className="text-text-primary">Payment information:</strong> Billing details processed by our payment provider (Stripe). We do not store credit card numbers on our servers.</li>
              <li><strong className="text-text-primary">Communications:</strong> Emails, contact form submissions, and support requests.</li>
              <li><strong className="text-text-primary">Email subscriptions:</strong> Email address and subscription preferences when you sign up for filing deadline reminders or opportunity alerts.</li>
            </ul>
            <h3 className="font-semibold text-text-primary mb-2">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-text-primary">Usage data:</strong> Pages visited, features used, time spent, and interactions within the platform.</li>
              <li><strong className="text-text-primary">Device information:</strong> Browser type, operating system, screen resolution, and IP address.</li>
              <li><strong className="text-text-primary">Cookies:</strong> We use essential cookies for authentication and session management, and analytics cookies (Google Analytics) to understand site usage. See Section 7.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Provide, maintain, and improve LCA Desk services, including generating compliance reports.</li>
              <li>Process transactions and send billing-related communications.</li>
              <li>Send filing deadline reminders, opportunity alerts, and product updates you have opted into.</li>
              <li>Respond to your support requests and inquiries.</li>
              <li>Analyze usage patterns to improve the platform experience.</li>
              <li>Detect, prevent, and address technical issues and security threats.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p className="mt-3 font-medium text-text-primary">We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">4. AI Data Processing</h2>
            <p className="mb-3">
              LCA Desk uses AI features powered by Anthropic&apos;s Claude API to assist with report generation, compliance gap detection, and document analysis. When you use AI features:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Your data is sent to Anthropic&apos;s API for real-time processing only. It is not stored by Anthropic after the request completes.</li>
              <li>Your data is <strong className="text-text-primary">not</strong> used to train Anthropic&apos;s AI models.</li>
              <li>AI-generated outputs (such as narrative report drafts) are stored on our servers as part of your account data.</li>
              <li>You retain full ownership of all data and AI-generated content.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">5. Data Security</h2>
            <p className="mb-3">We implement industry-standard security measures to protect your data:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-text-primary">Encryption in transit:</strong> All data is transmitted over TLS 1.3.</li>
              <li><strong className="text-text-primary">Encryption at rest:</strong> Data stored on our servers is encrypted using AES-256.</li>
              <li><strong className="text-text-primary">Access controls:</strong> Role-based access controls limit data access to authorized personnel only.</li>
              <li><strong className="text-text-primary">Infrastructure:</strong> Hosted on SOC 2-compliant cloud infrastructure with automated backups.</li>
              <li><strong className="text-text-primary">Monitoring:</strong> We monitor for unauthorized access attempts and security anomalies.</li>
            </ul>
            <p className="mt-3">While we take every reasonable precaution, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">6. Data Retention</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-text-primary">Active accounts:</strong> We retain your data for as long as your account is active.</li>
              <li><strong className="text-text-primary">Cancelled accounts:</strong> Upon account cancellation, we retain your data for 90 days to allow for reactivation. After 90 days, your data is permanently deleted unless required by law.</li>
              <li><strong className="text-text-primary">Email subscriptions:</strong> We retain your email address until you unsubscribe. You can unsubscribe at any time via the link in any email.</li>
              <li><strong className="text-text-primary">Legal requirements:</strong> We may retain certain data longer if required to comply with legal, tax, or regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">7. Cookies</h2>
            <p className="mb-3">We use the following types of cookies:</p>
            <div className="rounded-xl border border-border overflow-hidden mb-3">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-surface">
                    <th className="text-left px-4 py-3 font-semibold text-text-primary">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-text-primary">Purpose</th>
                    <th className="text-left px-4 py-3 font-semibold text-text-primary">Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium text-text-primary">Essential</td>
                    <td className="px-4 py-3">Authentication, session management, CSRF protection</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium text-text-primary">Analytics</td>
                    <td className="px-4 py-3">Google Analytics (GA4) for site usage analysis</td>
                    <td className="px-4 py-3">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-text-primary">Functional</td>
                    <td className="px-4 py-3">Remembering preferences and settings</td>
                    <td className="px-4 py-3">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>You can control cookie preferences through your browser settings. Disabling essential cookies may affect platform functionality.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">8. Third-Party Services</h2>
            <p className="mb-3">We share data with the following third-party services, strictly for operational purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-text-primary">Anthropic (Claude API):</strong> AI processing. Data processed in real-time, not stored.</li>
              <li><strong className="text-text-primary">Stripe:</strong> Payment processing. Subject to <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Stripe&apos;s Privacy Policy</a>.</li>
              <li><strong className="text-text-primary">Resend:</strong> Transactional email delivery (filing reminders, alerts).</li>
              <li><strong className="text-text-primary">Google Analytics:</strong> Anonymous site usage analytics.</li>
              <li><strong className="text-text-primary">Vercel:</strong> Website and application hosting.</li>
              <li><strong className="text-text-primary">Neon:</strong> Database hosting (PostgreSQL).</li>
            </ul>
            <p className="mt-3">We do not share your compliance data (employment, procurement, capacity development figures) with any third party except Anthropic for AI processing, as described in Section 4.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">9. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-text-primary">Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong className="text-text-primary">Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong className="text-text-primary">Deletion:</strong> Request deletion of your account and associated data.</li>
              <li><strong className="text-text-primary">Export:</strong> Request an export of your data in a standard machine-readable format.</li>
              <li><strong className="text-text-primary">Opt out:</strong> Unsubscribe from marketing emails at any time via the unsubscribe link or by contacting us.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email <a href="mailto:privacy@lcadesk.com" className="text-accent hover:underline">privacy@lcadesk.com</a>. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">10. International Data Transfers</h2>
            <p>
              LCA Desk is operated from the United States. If you are accessing our services from outside the US (including Guyana, Nigeria, or other jurisdictions), your data may be transferred to and processed in the United States. By using our services, you consent to this transfer. We ensure that appropriate safeguards are in place to protect your data in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">11. Children&apos;s Privacy</h2>
            <p>LCA Desk is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will delete it promptly.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify registered users of material changes via email. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of LCA Desk after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">13. Governing Law</h2>
            <p>This Privacy Policy is governed by the laws of the State of Texas, United States, without regard to conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">14. Contact</h2>
            <p className="mb-2">For privacy-related inquiries:</p>
            <div className="bg-surface rounded-xl border border-border p-5">
              <p className="font-medium text-text-primary mb-1">LCA Desk</p>
              <p>Houston, Texas, USA</p>
              <p>Email: <a href="mailto:privacy@lcadesk.com" className="text-accent hover:underline">privacy@lcadesk.com</a></p>
              <p>General: <a href="mailto:hello@lcadesk.com" className="text-accent hover:underline">hello@lcadesk.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
