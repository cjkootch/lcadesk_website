import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, ShieldCheck, Clock, TrendingUp, Building2, Truck, Wrench, HardHat, Utensils, GraduationCap, Stethoscope, Anchor } from "lucide-react";
import type { PublicOpportunity } from "@/lib/types";
import OpportunityFilters from "@/components/OpportunityFilters";
import CTABanner from "@/components/CTABanner";
import GeometricBg from "@/components/GeometricBg";
import StatCard from "@/components/StatCard";
import FAQAccordion from "@/components/FAQAccordion";
import { getSession } from "@/lib/public-auth";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "LCA Procurement Opportunities | Guyana Oil Sector",
  description:
    "Active procurement opportunities from oil sector contractors in Guyana. All postings require first consideration to LCS-certified Guyanese suppliers under the Local Content Act 2021.",
};

interface ApiNotice {
  title: string;
  contractorName: string;
  noticeType: string | null;
  lcaCategory: string | null;
  deadline: string | null;
  description: string | null;
  sourceUrl: string | null;
}

function decodeEntities(str: string | null): string {
  if (!str) return "";
  return str
    .replace(/&#8211;/g, "\u2013")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&#038;/g, "&")
    .replace(/&#amp;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function cleanTitle(raw: string): string {
  let t = decodeEntities(raw);
  // Strip trailing " – Local Content Register" or similar suffixes
  t = t.replace(/\s*[–\-]\s*Local Content Register\s*$/i, "");
  // Strip leading notice type prefix if duplicated (e.g. "EOI & Pre-Qualification –")
  return t.trim();
}

async function getOpportunities(): Promise<PublicOpportunity[]> {
  try {
    const res = await fetch("https://app.lcadesk.com/api/public/opportunities", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const notices: ApiNotice[] = data.notices ?? [];
    return notices.map((n, i) => ({
      id: String(i),
      title: cleanTitle(n.title),
      contractor_name: decodeEntities(n.contractorName) || "Contractor Not Specified",
      type: "supplier" as const,
      notice_type: n.noticeType,
      lca_category: decodeEntities(n.lcaCategory) || null,
      deadline: n.deadline,
      description: decodeEntities(n.description),
      source_url: n.sourceUrl,
      posted_date: null,
      employment_category: null,
      status: null,
      location: null,
      contract_type: null,
    }));
  } catch {
    return [];
  }
}

const lcaCategories = [
  { icon: Building2, name: "Construction & Fabrication", desc: "Civil works, structural steel, concrete, building services" },
  { icon: Truck, name: "Transportation & Logistics", desc: "Freight, trucking, warehousing, customs brokerage" },
  { icon: Wrench, name: "Maintenance & Repair", desc: "Equipment maintenance, welding, mechanical services" },
  { icon: HardHat, name: "Engineering & Technical", desc: "Surveying, geotechnical, environmental monitoring" },
  { icon: Utensils, name: "Catering & Hospitality", desc: "Offshore catering, camp management, laundry" },
  { icon: GraduationCap, name: "Training & Development", desc: "Safety training, skills development, certification" },
  { icon: Stethoscope, name: "Medical & HSE", desc: "Occupational health, medivac, safety equipment" },
  { icon: Anchor, name: "Marine & Offshore", desc: "Vessel supply, offshore logistics, port services" },
];

const faqItems = [
  { q: "Who can bid on these opportunities?", a: "Any Guyanese-registered supplier on the Local Content Register can bid. Under Section 22 of the LCA, contractors must give first consideration to Guyanese suppliers. If you are not yet on the Register, you can apply through the Local Content Secretariat." },
  { q: "How does 'first consideration' work?", a: "Contractors must demonstrate that they actively sought Guyanese suppliers before engaging foreign companies. This means advertising locally, evaluating local bids on fair terms, and documenting the decision process. LCA Desk tracks and displays these notices to increase visibility." },
  { q: "How often is this board updated?", a: "We scrape and update procurement notices weekly from public sources including the LCS Register, contractor websites, and gazette notices. Sign up for alerts to be notified when new opportunities in your category are posted." },
  { q: "What if I don't see opportunities in my category?", a: "New notices are added weekly as contractors publish them. Register on LCA Desk and select your service categories — we'll email you when matching opportunities appear." },
  { q: "Are these opportunities verified?", a: "All opportunities displayed are sourced from contractors with active LCA filing obligations. We link back to the original source for each notice. LCA Desk aggregates public data — we do not create or endorse any specific opportunity." },
  { q: "What do EOI, RFQ, RFP, and RFI mean?", a: "EOI (Expression of Interest) is an initial gauge of supplier capability. RFQ (Request for Quotation) is a request for pricing. RFP (Request for Proposal) is a detailed bid request. RFI (Request for Information) is a preliminary inquiry. Each represents a different stage in the procurement process." },
];

export default async function OpportunitiesPage() {
  const [opportunities, session] = await Promise.all([
    getOpportunities(),
    getSession("supplier"),
  ]);
  const isLoggedIn = !!session;
  const activeCount = opportunities.length;
  const uniqueContractors = new Set(opportunities.map((o) => o.contractor_name)).size;
  const uniqueCategories = new Set(opportunities.map((o) => o.lca_category).filter(Boolean)).size;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-surface">
        <GeometricBg variant="grid" />
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-wide uppercase">Live &middot; Updated Weekly</span>
            </div>
            <Link href="/suppliers/dashboard" className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent transition">
              <Building2 size={14} /> My Profile
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-text-primary mb-5">
            LCA Procurement{" "}
            <span className="gradient-text-static">Opportunities</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed">
            Active procurement notices from oil sector contractors required to give first consideration to Guyanese suppliers under the Local Content Act 2021.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/suppliers/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Register as a Supplier <ArrowRight size={16} />
            </Link>
            <Link
              href="/suppliers/login"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border text-text-secondary px-7 py-3.5 text-sm font-semibold hover:border-accent hover:text-accent transition-all"
            >
              Log In
            </Link>
            <Link
              href="https://app.lcadesk.com/auth/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border text-text-secondary px-7 py-3.5 text-sm font-semibold hover:border-accent hover:text-accent transition-all"
            >
              Post an Opportunity (Contractors)
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <GeometricBg variant="hexagons" />
        <div className="relative max-w-5xl mx-auto px-6 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value={activeCount > 0 ? `${activeCount}` : "—"} label="Active Opportunities" lightOnDark />
            <StatCard value={uniqueContractors > 0 ? `${uniqueContractors}` : "1,300+"} label="Contractors Filing" lightOnDark />
            <StatCard value={uniqueCategories > 0 ? `${uniqueCategories}` : "40+"} label="LCA Categories" lightOnDark />
            <StatCard value="GY$50M" label="Non-Compliance Penalty" lightOnDark />
          </div>
        </div>
      </section>

      {/* Legal context — how LCA procurement works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Understanding the Law</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-6">How LCA Procurement Works</h2>
          <p className="text-text-secondary text-center mb-14 max-w-2xl mx-auto">
            The Local Content Act 2021 creates a legally mandated pipeline of business for Guyanese suppliers. Here&apos;s how it works.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: ShieldCheck, title: "Legal Mandate", desc: "Under Sections 19\u201322 of the LCA, every contractor must give first consideration to Guyanese suppliers. This isn\u2019t voluntary \u2014 it\u2019s law. Non-compliance triggers penalties up to GY$50 million." },
              { step: "02", icon: Briefcase, title: "Procurement Notices", desc: "Contractors publish EOIs, RFQs, RFPs, and RFIs seeking local suppliers. These notices must be accessible to Guyanese businesses. LCA Desk aggregates them in one place for the first time." },
              { step: "03", icon: TrendingUp, title: "Growing Market", desc: "With 900,000+ barrels/day production and rising, the procurement opportunity is massive. ExxonMobil alone has spent over US$5 billion with local suppliers since first oil." },
            ].map((s, i) => (
              <div key={i} className="relative">
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-3 block" style={{ fontFamily: "var(--font-tech)" }}>Step {s.step}</span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mb-4">
                  <s.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance context banner */}
      <section className="bg-emerald-50 border-y border-emerald-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-start gap-3">
            <ShieldCheck size={20} className="text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-emerald-900 mb-1">Local Content Act 2021 \u2014 Section 22: Procurement</p>
              <p className="text-sm text-emerald-800 leading-relaxed">
                &ldquo;A contractor, sub-contractor or licensee shall, in the procurement of goods and services, give first consideration to a Guyanese supplier or service provider who is included in the Register.&rdquo; Contractors must demonstrate compliance in their half-yearly and annual reports filed with the Local Content Secretariat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-2">Browse Opportunities</h2>
          <p className="text-text-secondary mb-8">Filter by category, notice type, or search by company name.</p>
          <OpportunityFilters opportunities={opportunities} isLoggedIn={isLoggedIn} />
        </div>
      </section>

      {/* LCA Categories — what suppliers are needed */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Supplier Categories</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-6">What Types of Suppliers Are Needed?</h2>
          <p className="text-text-secondary text-center mb-14 max-w-2xl mx-auto">
            The LCA covers 40+ procurement categories. Here are the most active sectors where contractors are actively seeking Guyanese suppliers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lcaCategories.map((cat, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 card-lift group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <cat.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary text-sm mb-1">{cat.name}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-muted text-sm mt-8">
            Don&apos;t see your category? The full LCA covers 40+ service areas.{" "}
            <Link href="/lca-act-overview" className="text-accent hover:underline">View the complete list</Link>.
          </p>
        </div>
      </section>

      {/* How to get listed */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">For Suppliers</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">How to Win LCA Procurement</h2>
          <div className="space-y-8">
            {[
              { num: "1", title: "Get on the Local Content Register", desc: "Apply to the Local Content Secretariat. Registration is free and required for contractors to count you as a \u201cGuyanese supplier.\u201d Without registration, you\u2019re invisible to the system." },
              { num: "2", title: "Set up your LCA Desk profile", desc: "Register on LCA Desk to receive alerts when contractors post opportunities matching your service categories. Build a profile that showcases your capabilities, certifications, and track record." },
              { num: "3", title: "Respond to notices quickly", desc: "EOIs and RFQs have deadlines. The companies posting them have legal obligations to evaluate local bids fairly. Respond early, respond professionally, and include your LCS registration number." },
              { num: "4", title: "Build your compliance track record", desc: "Contractors prefer suppliers who understand the LCA process. Demonstrating that you file your own LCA reports (if applicable) and meet local content thresholds gives you an edge over competitors." },
            ].map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{ fontFamily: "var(--font-tech)" }}>{step.num}</div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to Jobs */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <p className="text-xs text-accent font-semibold tracking-widest uppercase mb-2">Also on LCA Desk</p>
            <h3 className="font-display text-xl text-text-primary mb-2">Oil Sector Jobs for Guyanese Nationals</h3>
            <p className="text-sm text-text-secondary">Contractors are legally required to prioritize Guyanese nationals in hiring. Browse positions posted by companies with active LCA filing obligations.</p>
          </div>
          <Link href="/jobs" className="inline-flex items-center gap-2 rounded-xl border-2 border-accent text-accent px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-white transition-all flex-shrink-0">
            View Jobs Board <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Are you a Guyanese supplier?"
        body="Register on LCA Desk to receive alerts when contractors post opportunities in your service category. It&rsquo;s free."
        primaryCTA={{ label: "Register Free", href: "/suppliers/register" }}
        secondaryCTA={{ label: "Learn More", href: "/features" }}
      />
    </>
  );
}
