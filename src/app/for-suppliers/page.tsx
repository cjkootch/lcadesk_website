import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Building2, ShieldCheck, Search, Eye, BarChart3,
  Star, Bell, MessageSquare, CheckCircle, TrendingUp, Globe,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "For Suppliers | Get Discovered by Petroleum Contractors",
  description:
    "Get discovered by every contractor in Guyana's petroleum sector. Your LCS certificate works harder on LCA Desk. Free listing, or upgrade to Supplier Pro for $99/mo.",
  openGraph: {
    title: "LCA Desk for Guyanese Suppliers",
    description: "Your LCS certificate works harder on LCA Desk. Get discovered by petroleum contractors.",
  },
};

const benefits = [
  {
    icon: Eye,
    title: "Visibility to every contractor",
    desc: "Your company appears in the Verified Companies directory that every filer on the platform uses when sourcing local procurement.",
  },
  {
    icon: Search,
    title: "Browse procurement opportunities",
    desc: "See procurement opportunities posted by contractors — with AI-extracted scope of work, eligibility requirements, and deadlines.",
  },
  {
    icon: MessageSquare,
    title: "Express interest & track responses",
    desc: "Respond to opportunities directly on the platform. Track which contractors have viewed your profile and responses.",
  },
];

const freeVsPro = [
  { feature: "Directory listing", free: true, pro: true },
  { feature: "Browse all opportunities", free: true, pro: true },
  { feature: "Opportunity responses", free: "3/month", pro: "Unlimited" },
  { feature: "Response analytics", free: false, pro: true },
  { feature: "Priority placement", free: false, pro: true },
  { feature: "Enhanced company profile", free: false, pro: true },
  { feature: "Contractor view tracking", free: false, pro: true },
];

const faqItems = [
  { q: "Do I need to be LCS registered?", a: "The directory is synced from the Local Content Secretariat register, so LCS-registered companies appear automatically. If you're seeking registration, you can still create a profile and claim it once certified." },
  { q: "What does 'first consideration' mean?", a: "Under the LCA 2021, contractors must give first consideration to Guyanese suppliers for procurement. Being visible on LCA Desk makes it easy for contractors to find and shortlist you." },
  { q: "What's included in the free tier?", a: "A profile in the Verified Companies directory, access to browse all procurement opportunities, and 3 opportunity responses per month. No credit card required." },
  { q: "What does Supplier Pro add?", a: "Unlimited opportunity responses, response analytics (who viewed your profile, which contractors opened your responses), priority placement in search results, and an enhanced company profile with services, capabilities, and certifications." },
  { q: "How do contractors find me?", a: "When filers are preparing their reports or sourcing procurement, they use the directory to find qualified Guyanese suppliers. Your profile includes your LCS categories, certifications, and capabilities." },
];

export default function ForSuppliersPage() {
  return (
    <main>
      <HeroSection
        eyebrow="For Guyanese Suppliers"
        headline="Get discovered by every contractor in Guyana."
        sub="Your LCS certificate works harder on LCA Desk. 796+ Guyanese companies are already listed. Browse procurement opportunities, express interest, and grow your business."
        primaryCTA={{ label: "Get Listed Free", href: "https://app.lcadesk.com/auth/signup?role=supplier" }}
        secondaryCTA={{ label: "Browse Opportunities", href: "/opportunities" }}
        geometricVariant="grid"
      />

      {/* How it connects */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Why LCA Desk</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            Contractors need you. We make sure they find you.
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Every contractor filing LCA reports must demonstrate local procurement. LCA Desk is where they come to find qualified Guyanese suppliers — and that&apos;s where you should be.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-7">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5">
                  <b.icon size={22} className="text-amber-600" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2 text-lg">{b.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for suppliers */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            Three steps to getting discovered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Claim your profile", desc: "Register with your LCS certificate number. Your company is verified against the Secretariat register automatically.", icon: ShieldCheck },
              { step: "02", title: "Showcase capabilities", desc: "Add your services, equipment, certifications, and past performance. Contractors see your complete profile when sourcing.", icon: Building2 },
              { step: "03", title: "Respond to opportunities", desc: "Browse procurement opportunities from contractors, express interest, and track your responses — all in one place.", icon: TrendingUp },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-5">
                  <s.icon size={28} className="text-amber-600" />
                </div>
                <span className="text-amber-600 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-tech)" }}>Step {s.step}</span>
                <h3 className="font-semibold text-text-primary text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Pro comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            Free to start. Pro to grow.
          </h2>
          <p className="text-text-secondary text-center mb-10">
            Every supplier gets a free listing. Upgrade to Pro for $99/mo to unlock growth tools.
          </p>
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-border">
              <div className="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Feature</div>
              <div className="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider text-center">Free</div>
              <div className="p-4 text-xs font-semibold text-amber-600 uppercase tracking-wider text-center">Pro $99/mo</div>
            </div>
            {freeVsPro.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? "" : "bg-gray-50/50"} ${i < freeVsPro.length - 1 ? "border-b border-border/50" : ""}`}>
                <div className="p-4 text-sm font-medium text-text-primary">{row.feature}</div>
                <div className="p-4 text-sm text-center">
                  {row.free === true ? <CheckCircle size={16} className="text-accent mx-auto" /> :
                   row.free === false ? <span className="text-text-muted">&mdash;</span> :
                   <span className="text-text-secondary text-xs">{row.free}</span>}
                </div>
                <div className="p-4 text-sm text-center">
                  {row.pro === true ? <CheckCircle size={16} className="text-accent mx-auto" /> :
                   <span className="text-text-secondary text-xs font-medium">{row.pro}</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="https://app.lcadesk.com/auth/signup?role=supplier"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Get Listed Free <ArrowRight size={16} />
            </Link>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-border text-text-secondary px-7 py-3.5 text-sm font-semibold hover:border-accent hover:text-accent transition-all"
            >
              Browse Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner
        headline="Your LCS certificate works harder on LCA Desk."
        body="Get discovered by every contractor in Guyana's petroleum sector. Free to list, Pro for $99/mo."
        primaryCTA={{ label: "Get Listed Free", href: "https://app.lcadesk.com/auth/signup?role=supplier" }}
        secondaryCTA={{ label: "Browse Opportunities", href: "/opportunities" }}
      />
    </main>
  );
}
