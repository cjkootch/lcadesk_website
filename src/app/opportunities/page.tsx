import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDb } from "@/lib/db";
import { sql } from "drizzle-orm";
import type { PublicOpportunity } from "@/lib/types";
import OpportunityFilters from "@/components/OpportunityFilters";
import CTABanner from "@/components/CTABanner";
import GeometricBg from "@/components/GeometricBg";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "LCA Procurement Opportunities | Guyana Oil Sector",
  description:
    "Active procurement opportunities from oil sector contractors in Guyana. All postings require first consideration to LCS-certified Guyanese suppliers under the Local Content Act 2021.",
};

async function getOpportunities(): Promise<PublicOpportunity[]> {
  try {
    const db = getDb();
    const result = await db.execute(
      sql`SELECT * FROM lcs_opportunities
          WHERE type = 'supplier'
          AND (deadline IS NULL OR deadline >= CURRENT_DATE - INTERVAL '7 days')
          ORDER BY posted_date DESC NULLS LAST
          LIMIT 100`
    );
    return result.rows as unknown as PublicOpportunity[];
  } catch {
    return [];
  }
}

export default async function OpportunitiesPage() {
  const opportunities = await getOpportunities();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-surface">
        <GeometricBg variant="grid" />
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="inline-flex items-center gap-2 mb-5 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">Live &middot; Updated Weekly</span>
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
              href="https://app.lcadesk.com/auth/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Register as a Supplier <ArrowRight size={16} />
            </Link>
            <Link
              href="https://app.lcadesk.com/auth/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border text-text-secondary px-7 py-3.5 text-sm font-semibold hover:border-accent hover:text-accent transition-all"
            >
              Post an Opportunity
            </Link>
          </div>
        </div>
      </section>

      {/* Filters + Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <OpportunityFilters opportunities={opportunities} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Are you a Guyanese supplier?"
        body="Register on LCA Desk to receive alerts when contractors post opportunities in your service category."
        primaryCTA={{ label: "Register Free", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Learn More", href: "/features" }}
      />
    </>
  );
}
