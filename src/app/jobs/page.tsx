import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, FileCheck, UserCheck, Briefcase, GraduationCap, Wrench, Users, Clock, TrendingUp, ShieldCheck, Building2, User } from "lucide-react";
import type { PublicJob } from "@/lib/types";
import JobFilters from "@/components/JobFilters";
import CTABanner from "@/components/CTABanner";
import GeometricBg from "@/components/GeometricBg";
import StatCard from "@/components/StatCard";
import FAQAccordion from "@/components/FAQAccordion";
import EmailCapture from "@/components/EmailCapture";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Oil Sector Jobs in Guyana | LCA Guyanese-First Employment",
  description:
    "Oil and gas jobs posted by contractors legally required to prioritize Guyanese nationals under the Local Content Act 2021. Updated weekly from the LCS Register.",
  openGraph: {
    title: "Oil Sector Jobs in Guyana | Guyanese-First Employment",
    description: "Jobs from contractors legally required to prioritize Guyanese nationals under the LCA 2021.",
    images: [{ url: "/og-jobs.png", width: 1200, height: 630, alt: "Oil sector jobs in Guyana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oil Sector Jobs in Guyana",
    description: "Guyanese nationals get first consideration by law.",
    images: ["/og-jobs.png"],
  },
};

interface ApiJob {
  id?: string;
  jobTitle?: string;
  companyName?: string;
  employmentCategory?: string | null;
  noticeType?: string | null;
  description?: string | null;
  location?: string | null;
  closingDate?: string | null;
  postedDate?: string | null;
  sourceUrl?: string | null;
  status?: string | null;
  aiTeaser?: string | null;
  aiData?: {
    summary?: string | null;
    responsibilities?: string[] | null;
    skills?: string[] | null;
    experience_required?: string | null;
    education_required?: string | null;
    employment_type?: string | null;
    how_to_apply?: string | null;
    guyanese_first_consideration?: boolean;
    salary_range?: string | null;
  } | null;
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

function cleanLocation(loc: string | null | undefined): string | null {
  if (!loc) return null;
  // Some records have HTML artifacts in location field
  if (loc.includes("<") || loc.includes("data-") || loc.includes("elementor")) return null;
  return loc.trim() || null;
}

async function getJobs(): Promise<PublicJob[]> {
  try {
    const res = await fetch("https://app.lcadesk.com/api/public/lcs-jobs", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const jobs: ApiJob[] = data.jobs ?? [];
    return jobs.map((j, i) => {
      const ai = j.aiData;
      return {
        id: j.id || String(i),
        company_name: j.companyName || "Unknown",
        job_title: decodeEntities(j.jobTitle || "Untitled Position"),
        department: null,
        employment_type: ai?.employment_type || null,
        location: cleanLocation(j.location),
        summary: j.aiTeaser || decodeEntities(j.description ?? null) || ai?.summary || null,
        experience_required: ai?.experience_required || null,
        education_required: ai?.education_required || null,
        closing_date: j.closingDate || null,
        posted_date: j.postedDate || null,
        source_url: j.sourceUrl || null,
        guyanese_first_consideration: ai?.guyanese_first_consideration ?? true,
        employment_category: j.employmentCategory || null,
        salary_range: ai?.salary_range || null,
        ai_teaser: j.aiTeaser || null,
        responsibilities: ai?.responsibilities || null,
        skills: ai?.skills || null,
        how_to_apply: ai?.how_to_apply || null,
        notice_type: j.noticeType || null,
        status: j.status || null,
      };
    });
  } catch {
    return [];
  }
}

const employmentCategories = [
  { icon: Building2, title: "Management", desc: "Senior leadership, project management, country managers, compliance officers, finance directors", color: "from-amber-500 to-yellow-500" },
  { icon: Wrench, title: "Technical", desc: "Engineers, geoscientists, HSE specialists, instrumentation technicians, IT professionals", color: "from-blue-500 to-cyan-500" },
  { icon: Briefcase, title: "Administrative", desc: "Office staff, HR coordinators, procurement officers, accounting clerks, document controllers", color: "from-purple-500 to-purple-600" },
  { icon: Users, title: "Skilled & Semi-Skilled Labour", desc: "Welders, electricians, mechanics, riggers, crane operators, heavy equipment operators, drivers", color: "from-emerald-500 to-emerald-600" },
];

const faqItems = [
  { q: "Who is eligible for these positions?", a: "These positions prioritize Guyanese nationals by law. Under Section 12 of the LCA 2021, contractors must give first consideration to Guyanese citizens and permanent residents. Foreign nationals may only be hired when no qualified Guyanese candidate is available, and the contractor must document their search efforts." },
  { q: "Do I need to be on the Local Content Register?", a: "The Register is primarily for companies (suppliers and contractors). As an individual job seeker, you do not need to be on the Register. However, having relevant certifications (BOSIET, STCW, trade certificates) and registering on LCA Desk will help you stand out." },
  { q: "What qualifications are most in demand?", a: "Technical certifications are highly valued: BOSIET/HUET for offshore work, welding certifications (6G, 6GR), electrical licenses, HSE certifications (NEBOSH, IOSH), and engineering degrees. For non-technical roles, logistics experience, valid driver\u2019s licenses, and food safety certifications are commonly requested." },
  { q: "How are wages determined?", a: "Under Section 18 of the LCA, Guyanese nationals must be paid wages comparable to expatriates performing the same work. This means equal pay for equal work is legally mandated, not just a policy preference." },
  { q: "What if a contractor hires an expatriate instead of me?", a: "Contractors must document that they gave first consideration to Guyanese candidates and that no qualified local was available. If you believe a contractor bypassed this requirement, you can report it to the Local Content Secretariat. LCA Desk can provide records of your application." },
  { q: "How often are new positions posted?", a: "We update this board weekly from public sources. Register on LCA Desk and select your skills and preferred employment category \u2014 we\u2019ll notify you when matching positions are posted." },
];

export default async function JobsPage() {
  const jobs = await getJobs();
  const activeCount = jobs.filter((j) => {
    if (!j.closing_date) return true;
    return new Date(j.closing_date) >= new Date();
  }).length;
  const uniqueCompanies = new Set(jobs.map((j) => j.company_name)).size;

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-surface">
        <GeometricBg variant="waves" />
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
                <span className="text-xs">{"\uD83C\uDDEC\uD83C\uDDFE"}</span>
                <span className="text-accent text-xs font-semibold tracking-wide uppercase">Guyanese Nationals Prioritized by Law</span>
              </div>
              <Link href="/jobs/dashboard" className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent transition">
                <User size={14} /> Job Seeker Dashboard
              </Link>
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
                href="/jobs/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Register as a Job Seeker <ArrowRight size={16} />
              </Link>
              <Link
                href="/jobs/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border text-text-secondary px-7 py-3.5 text-sm font-semibold hover:border-accent hover:text-accent transition-all"
              >
                Log In
              </Link>
              <Link
                href="https://app.lcadesk.com/auth/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border text-text-secondary px-7 py-3.5 text-sm font-semibold hover:border-accent hover:text-accent transition-all"
              >
                Employers: Post a Position
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="/illustrations/hero-jobs.png" alt="Oil and gas jobs board for Guyanese workers and professionals" className="w-full rounded-2xl" loading="eager" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <GeometricBg variant="hexagons" />
        <div className="relative max-w-5xl mx-auto px-6 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value={activeCount > 0 ? `${activeCount}` : "\u2014"} label="Active Positions" lightOnDark />
            <StatCard value={uniqueCompanies > 0 ? `${uniqueCompanies}` : "1,300+"} label="Hiring Companies" lightOnDark />
            <StatCard value="92%" label="Guyanese Workforce Target" lightOnDark />
            <StatCard value="Equal" label="Pay Mandated by Law" lightOnDark />
          </div>
        </div>
      </section>

      {/* Compliance context banner */}
      <section className="bg-emerald-50 border-y border-emerald-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-start gap-3">
            <ShieldCheck size={20} className="text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-emerald-900 mb-1">Local Content Act 2021 &mdash; Section 12: Employment</p>
              <p className="text-sm text-emerald-800 leading-relaxed">
                &ldquo;A contractor, sub-contractor, licensee or any other person engaged in petroleum operations shall give first consideration to Guyanese nationals in employment at all levels of the operations.&rdquo; Companies must document first consideration given to Guyanese applicants before hiring expatriates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding LCA Employment */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Understanding the Law</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-6">LCA Employment Requirements</h2>
          <p className="text-text-secondary text-center mb-14 max-w-2xl mx-auto">
            The Local Content Act doesn&apos;t just suggest Guyanese hiring &mdash; it mandates it, with specific documentation requirements and penalties for non-compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Scale, title: "First Consideration is Law", desc: "Section 12 requires contractors to prioritize Guyanese nationals at all levels \u2014 from entry-level to senior management. This applies to every company in petroleum operations." },
              { icon: FileCheck, title: "Documented Search Required", desc: "Contractors must prove they searched for local candidates before hiring expatriates. Job postings, interview records, and skills assessments must be documented and reported to the Secretariat." },
              { icon: Clock, title: "Reported Semi-Annually", desc: "Every 6 months, contractors file half-yearly reports detailing their workforce composition: total employees, Guyanese nationals, expatriates, and the justification for any foreign hires." },
              { icon: TrendingUp, title: "Equal Pay Mandated", desc: "Section 18 requires that Guyanese nationals receive compensation comparable to expatriates performing the same role. Equal work means equal pay \u2014 by law, not just policy." },
            ].map((card, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-7 card-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mb-4">
                  <card.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employment Categories */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Employment Categories</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-6">Three Categories Under the LCA</h2>
          <p className="text-text-secondary text-center mb-14 max-w-2xl mx-auto">
            The LCA tracks employment across three categories. Contractors must report hiring numbers in each category and demonstrate Guyanese-first consideration for all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employmentCategories.map((cat, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden card-lift">
                <div className={`h-1.5 bg-gradient-to-r ${cat.color}`} />
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mb-4">
                    <cat.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-text-primary text-lg mb-2">{cat.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-2">Browse Positions</h2>
          <p className="text-text-secondary mb-8">Filter by employment category, company, or search by job title.</p>
          <JobFilters jobs={jobs} />
        </div>
      </section>

      {/* Email capture for job alerts */}
      <section className="bg-surface py-16">
        <div className="max-w-xl mx-auto px-6">
          <EmailCapture
            headline="Get job alerts in your inbox"
            description="Be the first to know when new oil sector positions are posted. We'll send you matching jobs based on your skills and category preference."
            list="opportunities"
            variant="card"
          />
        </div>
      </section>

      {/* How to get hired */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">For Job Seekers</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">How to Land an Oil Sector Job</h2>
          <div className="space-y-8">
            {[
              { num: "1", title: "Get certified", desc: "Offshore roles require BOSIET/HUET certification. Technical roles need trade certificates or engineering degrees. HSE certifications (NEBOSH, IOSH) are valued across all categories. Invest in the credentials that contractors are required to verify." },
              { num: "2", title: "Join the Talent Pool", desc: "Register on LCA Desk\u2019s Talent Pool with your skills, certifications, and preferred employment category. Contractors searching for Guyanese candidates can find your profile directly. We\u2019ll also notify you when matching positions are posted." },
              { num: "3", title: "Apply early and professionally", desc: "When a position appears, apply quickly with a tailored CV highlighting relevant experience. Include your certification numbers and any prior oil sector experience. Contractors must evaluate local applications before considering expatriates." },
              { num: "4", title: "Know your rights", desc: "Under Section 18, you\u2019re entitled to pay comparable to expatriates doing the same work. Under Section 12, contractors must give you first consideration. If you believe these rights were violated, contact the Local Content Secretariat." },
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

      {/* Why This Board Exists */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">Our Mission</p>
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">Why This Board Exists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Required by Law", desc: "The LCA mandates Guyanese-first hiring. Contractors must demonstrate they searched for local candidates before seeking expatriates." },
              { icon: FileCheck, title: "Documented Evidence", desc: "Employers must prove they searched for local candidates. Posting here creates a documented record of first consideration." },
              { icon: UserCheck, title: "Direct Access", desc: "Apply directly to companies with legal hiring obligations. No intermediaries \u2014 connect with contractors actively seeking Guyanese talent." },
            ].map((card, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-7 text-center card-lift">
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

      {/* Cross-link to Opportunities */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <p className="text-xs text-accent font-semibold tracking-widest uppercase mb-2">Also on LCA Desk</p>
            <h3 className="font-display text-xl text-text-primary mb-2">LCA Procurement Opportunities</h3>
            <p className="text-sm text-text-secondary">Contractors are legally required to give first consideration to Guyanese suppliers. Browse active procurement notices from companies with LCA filing obligations.</p>
          </div>
          <Link href="/opportunities" className="inline-flex items-center gap-2 rounded-xl border-2 border-accent text-accent px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-white transition-all flex-shrink-0">
            View Opportunities <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Are you a Guyanese national looking for oil sector work?"
        body="Register on LCA Desk to receive alerts when positions matching your skills are posted by contractors. It&rsquo;s free."
        primaryCTA={{ label: "Register Free", href: "/jobs/register" }}
        secondaryCTA={{ label: "View Opportunities", href: "/opportunities" }}
      />
    </main>
  );
}
