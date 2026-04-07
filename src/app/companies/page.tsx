import Link from "next/link";
import { Building2, ArrowRight, ShieldCheck, Briefcase, Users, TrendingUp } from "lucide-react";
import CompanyFilters from "@/components/CompanyFilters";
import CTABanner from "@/components/CTABanner";
import GeometricBg from "@/components/GeometricBg";
import StatCard from "@/components/StatCard";
import FAQAccordion from "@/components/FAQAccordion";
import type { PublicCompany } from "@/lib/types";

export const revalidate = 3600;

interface ApiResponse {
  companies: PublicCompany[];
  filters: { categories: string[]; sorts: string[] };
  summary: {
    total: number;
    lcsRegistered: number;
    claimed: number;
    withOpportunities: number;
    hiring: number;
    withFilingObligation: number;
  };
}

async function fetchCompanies(): Promise<ApiResponse> {
  try {
    const res = await fetch("https://app.lcadesk.com/api/public/companies?sort=opportunities", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch {
    return {
      companies: [],
      filters: { categories: [], sorts: [] },
      summary: { total: 0, lcsRegistered: 0, claimed: 0, withOpportunities: 0, hiring: 0, withFilingObligation: 0 },
    };
  }
}

const faqItems = [
  { q: "Who are these companies?", a: "This directory includes every company operating in Guyana's oil and gas sector — contractors, sub-contractors, licensees, and service providers. Data comes from the Local Content Secretariat Register, public procurement notices, and job postings." },
  { q: "What does LCS Registered mean?", a: "Companies registered with the Local Content Secretariat (LCS) are on the official Local Content Register maintained by the Government of Guyana. Registration is required for all entities operating under petroleum agreements." },
  { q: "How do I claim my company profile?", a: "Company profiles are automatically generated from public data. To claim and enrich your profile with a description, services, and contact information, sign up for LCA Desk and verify your organization." },
  { q: "How often is this data updated?", a: "Company data is updated weekly from the LCS Register, procurement notices, and job postings. Opportunity and job counts reflect the latest available data." },
];

export default async function CompaniesPage() {
  const { companies, summary } = await fetchCompanies();

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-surface">
        <GeometricBg variant="nodes" />
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">
              {summary.total.toLocaleString()} Companies &middot; Updated Weekly
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-text-primary mb-5">
            Company{" "}
            <span className="gradient-text-static">Directory</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed">
            Every company operating in Guyana&apos;s oil and gas sector — contractors, sub-contractors, and service providers. Filter by LCS registration, hiring, and procurement activity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://app.lcadesk.com/auth/signup?role=supplier"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Claim Your Profile <ArrowRight size={16} />
            </Link>
            <Link
              href="/opportunities"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-text-primary hover:bg-card transition-all"
            >
              <Briefcase size={16} /> Browse Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-8 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value={summary.total.toLocaleString()} label="Total Companies" lightOnDark />
          <StatCard value={summary.lcsRegistered.toLocaleString()} label="LCS Registered" lightOnDark />
          <StatCard value={summary.withOpportunities.toString()} label="Active Procurement" lightOnDark />
          <StatCard value={summary.hiring.toString()} label="Currently Hiring" lightOnDark />
        </div>
      </section>

      {/* Directory */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <CompanyFilters companies={companies} />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary text-center mb-10">Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <CTABanner
        headline="Is your company listed?"
        body="Claim your profile, add services, and connect with suppliers and job seekers."
        primaryCTA={{ label: "Claim Your Profile", href: "https://app.lcadesk.com/auth/signup?role=supplier" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
