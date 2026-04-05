import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, FileCheck, UserCheck } from "lucide-react";
import { getDb } from "@/lib/db";
import { sql } from "drizzle-orm";
import type { PublicOpportunity } from "@/lib/types";
import JobFilters from "@/components/JobFilters";
import CTABanner from "@/components/CTABanner";
import GeometricBg from "@/components/GeometricBg";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Oil Sector Jobs in Guyana | LCA Guyanese-First Employment",
  description:
    "Oil and gas jobs posted by contractors legally required to prioritize Guyanese nationals under the Local Content Act 2021. Updated weekly from the LCS Register.",
};

async function getJobs(): Promise<PublicOpportunity[]> {
  try {
    const db = getDb();
    const result = await db.execute(
      sql`SELECT * FROM lcs_opportunities
          WHERE type = 'employment'
          AND (deadline IS NULL OR deadline >= CURRENT_DATE - INTERVAL '7 days')
          ORDER BY posted_date DESC NULLS LAST
          LIMIT 100`
    );
    return result.rows as unknown as PublicOpportunity[];
  } catch {
    return [];
  }
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-surface">
        <GeometricBg variant="waves" />
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="inline-flex items-center gap-2 mb-5 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
            <span className="text-xs">{"\uD83C\uDDEC\uD83C\uDDFE"}</span>
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">Guyanese Nationals Prioritized by Law</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-text-primary mb-5">
            Oil Sector Jobs{" "}
            <span className="gradient-text-static">in Guyana</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed">
            Positions posted by contractors required under the Local Content Act 2021 to prioritize Guyanese nationals in hiring. Every employer listed here has an active LCA filing obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://app.lcadesk.com/auth/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Register as a Job Seeker <ArrowRight size={16} />
            </Link>
            <Link
              href="https://app.lcadesk.com/auth/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border text-text-secondary px-7 py-3.5 text-sm font-semibold hover:border-accent hover:text-accent transition-all"
            >
              Post a Position
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance context banner */}
      <section className="bg-emerald-50 border-y border-emerald-200">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <p className="text-sm text-emerald-800 leading-relaxed">
            <span className="font-semibold">Under Section 12 of the Local Content Act 2021,</span> all contractors must prioritize Guyanese nationals for employment. Companies are legally required to document first consideration given to Guyanese applicants before hiring expatriates.
          </p>
        </div>
      </section>

      {/* Filters + Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <JobFilters jobs={jobs} />
        </div>
      </section>

      {/* Why This Board Exists */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">Why This Board Exists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Required by Law", desc: "The LCA mandates Guyanese-first hiring. Contractors must demonstrate they searched for local candidates before seeking expatriates." },
              { icon: FileCheck, title: "Documented Evidence", desc: "Employers must prove they searched for local candidates. Posting here creates a documented record of first consideration." },
              { icon: UserCheck, title: "Direct Access", desc: "Apply directly to companies with legal hiring obligations. No intermediaries — connect with contractors actively seeking Guyanese talent." },
            ].map((card, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-7 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mx-auto mb-5">
                  <card.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{card.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Are you a Guyanese national looking for oil sector work?"
        body="Register on LCA Desk to receive alerts when positions matching your skills are posted by contractors."
        primaryCTA={{ label: "Register Free", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "View Opportunities", href: "/opportunities" }}
      />
    </>
  );
}
