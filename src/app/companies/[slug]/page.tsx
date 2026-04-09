import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft, Building2, ShieldCheck, Briefcase, Users, MapPin,
  ExternalLink, Calendar, Tag, ArrowRight, Globe, AlertTriangle,
  Lock, BarChart3, FileText, TrendingUp, Shield, Eye,
} from "lucide-react";
import type { PublicCompany } from "@/lib/types";
import CompanyDetailClient from "@/components/CompanyDetailClient";

type Props = { params: Promise<{ slug: string }> };

async function fetchCompanies(): Promise<PublicCompany[]> {
  try {
    const res = await fetch("https://app.lcadesk.com/api/public/companies?sort=name", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.companies ?? [];
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  const companies = await fetchCompanies();
  // Only pre-render companies with activity (opportunities or jobs or LCS)
  return companies
    .filter((c) => c.activeOpportunities > 0 || c.openJobPostings > 0 || c.lcsRegistered)
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const companies = await fetchCompanies();
  const company = companies.find((c) => c.slug === slug);

  if (!company) return { title: "Company Not Found" };

  const parts: string[] = [];
  if (company.lcsRegistered) parts.push("LCS Registered");
  if (company.activeOpportunities > 0) parts.push(`${company.activeOpportunities} Active Opportunities`);
  if (company.openJobPostings > 0) parts.push(`${company.openJobPostings} Open Jobs`);

  return {
    title: `${company.companyName} | Company Directory`,
    description: `${company.companyName} - ${parts.join(", ") || "Company operating under a local content regime"}. ${company.description || "View company profile, procurement opportunities, and job openings."}`.slice(0, 300),
    alternates: { canonical: `https://lcadesk.com/companies/${slug}` },
    openGraph: {
      title: company.companyName,
      description: company.description || `${company.companyName} - company in the local content sector.`,
    },
  };
}

export default async function CompanyDetailPage({ params }: Props) {
  const { slug } = await params;
  const companies = await fetchCompanies();
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    return (
      <main className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <Building2 size={48} className="mx-auto text-text-muted mb-4" />
          <h1 className="text-2xl font-bold text-text-primary mb-2">Company Not Found</h1>
          <p className="text-text-muted mb-6">This company profile doesn&apos;t exist or has been removed.</p>
          <Link href="/companies" className="text-accent hover:underline">Back to Directory</Link>
        </div>
      </main>
    );
  }

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.companyName,
    ...(company.description && { description: company.description }),
    ...(company.website && { url: company.website }),
    ...(company.lcsAddress && {
      address: {
        "@type": "PostalAddress",
        streetAddress: company.lcsAddress,
        addressCountry: "GY",
      },
    }),
    ...(company.parentCompany && {
      parentOrganization: { "@type": "Organization", name: company.parentCompany },
    }),
  };

  return (
    <main className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-10">
          <Link href="/companies" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Directory
          </Link>

          <CompanyDetailClient company={company} />
        </div>
      </section>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            {company.description && (
              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">About</h2>
                <p className="text-text-secondary text-sm leading-relaxed">{company.description}</p>
              </div>
            )}

            {/* Key Services */}
            {company.keyServices && company.keyServices.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">Key Services</h2>
                <div className="flex flex-wrap gap-2">
                  {company.keyServices.map((s) => (
                    <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* LCS Service Categories */}
            {company.lcsServiceCategories.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">LCS Service Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {company.lcsServiceCategories.map((s) => (
                    <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Active Opportunities */}
            {company.activeOpportunities > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">
                  Active Procurement ({company.activeOpportunities})
                </h2>
                <p className="text-sm text-text-secondary mb-3">
                  This company has {company.activeOpportunities} active procurement {company.activeOpportunities === 1 ? "notice" : "notices"}.
                  Local suppliers receive first consideration under applicable local content legislation.
                </p>
                <Link
                  href={`/opportunities?company=${encodeURIComponent(company.companyName)}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  View Opportunities <ArrowRight size={14} />
                </Link>
                {company.procurementCategories.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {company.procurementCategories.map((c) => (
                      <span key={c} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Open Jobs */}
            {company.openJobPostings > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">
                  Open Positions ({company.openJobPostings})
                </h2>
                <p className="text-sm text-text-secondary mb-3">
                  {company.openJobPostings} open {company.openJobPostings === 1 ? "position" : "positions"}.
                  Local nationals receive first consideration for employment under applicable local content legislation.
                </p>
                <Link
                  href={`/jobs?company=${encodeURIComponent(company.companyName)}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  View Jobs <ArrowRight size={14} />
                </Link>
                {company.employmentCategories.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {company.employmentCategories.map((c) => (
                      <span key={c} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* No activity */}
            {!company.description && !company.activeOpportunities && !company.openJobPostings && company.lcsRegistered && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <p className="text-sm text-text-secondary">
                  This company is registered on the Local Content Register. Detailed profile information, procurement notices,
                  and job postings will appear here as they become available.
                </p>
              </div>
            )}

            {/* Filing Obligation Indicator */}
            {company.likelyFilingObligation && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={16} className="text-amber-600" />
                  <h3 className="font-semibold text-amber-900 text-sm">LCA Filing Obligation</h3>
                </div>
                <p className="text-sm text-amber-800">
                  Based on public data, this company likely has a filing obligation under the Local Content Act 2021.
                  This means they must submit half-yearly reports, annual plans, and other mandatory filings to the Secretariat.
                </p>
              </div>
            )}

            {/* Compliance Intelligence Teaser */}
            <div className="relative rounded-2xl border border-border overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 size={18} className="text-accent" />
                  <h2 className="text-lg font-semibold text-text-primary">Compliance Intelligence</h2>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded-full ml-auto">Premium</span>
                </div>

                {/* Blurred preview */}
                <div className="relative select-none" aria-hidden="true">
                  <div className="blur-[6px] pointer-events-none space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-surface rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-tech)" }}>87%</p>
                        <p className="text-xs text-text-muted">Compliance Score</p>
                      </div>
                      <div className="bg-surface rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-tech)" }}>12</p>
                        <p className="text-xs text-text-muted">Reports Filed</p>
                      </div>
                      <div className="bg-surface rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-tech)" }}>On Time</p>
                        <p className="text-xs text-text-muted">Last Filing</p>
                      </div>
                    </div>
                    <div className="bg-surface rounded-lg p-4">
                      <p className="text-xs font-medium text-text-secondary mb-2">Procurement Breakdown</p>
                      <div className="flex gap-1 h-6">
                        <div className="bg-accent rounded h-full" style={{ width: "65%" }} />
                        <div className="bg-teal rounded h-full" style={{ width: "20%" }} />
                        <div className="bg-amber-400 rounded h-full" style={{ width: "15%" }} />
                      </div>
                      <div className="flex justify-between mt-1.5">
                        <span className="text-[10px] text-text-muted">Local: 65%</span>
                        <span className="text-[10px] text-text-muted">Regional: 20%</span>
                        <span className="text-[10px] text-text-muted">Foreign: 15%</span>
                      </div>
                    </div>
                    <div className="bg-surface rounded-lg p-4">
                      <p className="text-xs font-medium text-text-secondary mb-2">Workforce Composition</p>
                      <div className="flex gap-1 h-6">
                        <div className="bg-blue-500 rounded h-full" style={{ width: "88%" }} />
                        <div className="bg-slate-300 rounded h-full" style={{ width: "12%" }} />
                      </div>
                      <div className="flex justify-between mt-1.5">
                        <span className="text-[10px] text-text-muted">Local: 88%</span>
                        <span className="text-[10px] text-text-muted">Non-Local: 12%</span>
                      </div>
                    </div>
                  </div>

                  {/* Overlay CTA */}
                  <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-card/60 to-card/90 flex flex-col items-center justify-center">
                    <div className="bg-card border border-border rounded-xl p-6 shadow-lg text-center max-w-sm">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                        <Lock size={18} className="text-accent" />
                      </div>
                      <p className="font-semibold text-text-primary text-sm mb-1">Unlock Compliance Intelligence</p>
                      <p className="text-xs text-text-secondary mb-4">
                        See filing history, compliance scores, procurement patterns, and workforce data for every company on the register.
                      </p>
                      <Link
                        href="https://app.lcadesk.com/auth/signup?role=filer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal px-5 py-2.5 text-xs font-semibold text-white hover:shadow-lg transition-all"
                      >
                        Start 30-Day Free Trial <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity History Teaser */}
            <div className="relative rounded-2xl border border-border overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={18} className="text-accent" />
                  <h2 className="text-lg font-semibold text-text-primary">Activity Timeline</h2>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded-full ml-auto">Premium</span>
                </div>
                <div className="relative select-none" aria-hidden="true">
                  <div className="blur-[6px] pointer-events-none space-y-3">
                    {[
                      { date: "Mar 2026", text: "Posted 3 new procurement opportunities in Marine & Offshore" },
                      { date: "Feb 2026", text: "Filed H2 2025 Half-Yearly Report (on time)" },
                      { date: "Jan 2026", text: "Hired 14 local nationals across 3 employment categories" },
                      { date: "Dec 2025", text: "Updated Annual Plan for 2026 filing period" },
                      { date: "Nov 2025", text: "Added 2 new local suppliers to procurement records" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-text-muted">{item.date}</p>
                          <p className="text-sm text-text-secondary">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-card flex items-end justify-center pb-4">
                    <Link
                      href="https://app.lcadesk.com/auth/signup?role=filer"
                      className="inline-flex items-center gap-2 rounded-lg border-2 border-accent text-accent px-5 py-2.5 text-xs font-semibold hover:bg-accent hover:text-white transition-all"
                    >
                      <Eye size={13} /> Sign up to see full activity history
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info Card */}
            <div className="bg-card rounded-xl border border-border p-5 space-y-4">
              <h3 className="font-semibold text-text-primary text-sm">Company Info</h3>

              {company.legalName && company.legalName !== company.companyName && (
                <div className="flex items-start gap-2">
                  <FileText size={14} className="text-text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Legal Name</p>
                    <p className="text-sm text-text-primary">{company.legalName}</p>
                  </div>
                </div>
              )}

              {company.industry && (
                <div className="flex items-start gap-2">
                  <Tag size={14} className="text-text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Industry</p>
                    <p className="text-sm text-text-primary">{company.industry}</p>
                  </div>
                </div>
              )}

              {company.companyType && (
                <div className="flex items-start gap-2">
                  <Building2 size={14} className="text-text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Company Type</p>
                    <p className="text-sm text-text-primary">{company.companyType}</p>
                  </div>
                </div>
              )}

              {company.parentCompany && (
                <div className="flex items-start gap-2">
                  <Building2 size={14} className="text-text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Parent Company</p>
                    <p className="text-sm text-text-primary">{company.parentCompany}</p>
                  </div>
                </div>
              )}

              {company.employeeEstimate && (
                <div className="flex items-start gap-2">
                  <Users size={14} className="text-text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Employees (est.)</p>
                    <p className="text-sm text-text-primary">{company.employeeEstimate}</p>
                  </div>
                </div>
              )}

              {company.guyanaPresence && (
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Local Presence</p>
                    <p className="text-sm text-text-primary">{company.guyanaPresence}</p>
                  </div>
                </div>
              )}

              {company.lcsAddress && (
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Registered Address</p>
                    <p className="text-sm text-text-primary">{company.lcsAddress}</p>
                  </div>
                </div>
              )}

              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  <Globe size={14} /> Website <ExternalLink size={12} />
                </a>
              )}
            </div>

            {/* Platform Activity */}
            {(company.totalOpportunities > 0 || company.totalJobPostings > 0) && (
              <div className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-semibold text-text-primary text-sm mb-4">Platform Activity</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-text-primary" style={{ fontFamily: "var(--font-tech)" }}>{company.totalOpportunities}</p>
                    <p className="text-[10px] text-text-muted">Total Opportunities</p>
                  </div>
                  <div className="bg-surface rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-text-primary" style={{ fontFamily: "var(--font-tech)" }}>{company.activeOpportunities}</p>
                    <p className="text-[10px] text-text-muted">Active Now</p>
                  </div>
                  <div className="bg-surface rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-text-primary" style={{ fontFamily: "var(--font-tech)" }}>{company.totalJobPostings}</p>
                    <p className="text-[10px] text-text-muted">Total Job Posts</p>
                  </div>
                  <div className="bg-surface rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-text-primary" style={{ fontFamily: "var(--font-tech)" }}>{company.openJobPostings}</p>
                    <p className="text-[10px] text-text-muted">Open Now</p>
                  </div>
                </div>
              </div>
            )}

            {/* LCS Registration Card */}
            {company.lcsRegistered && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <h3 className="font-semibold text-emerald-800 text-sm">LCS Registered</h3>
                </div>
                {company.lcsCertId && (
                  <p className="text-xs text-emerald-700">Cert: {company.lcsCertId}</p>
                )}
                {company.lcsStatus && (
                  <p className="text-xs text-emerald-700">
                    Status: <span className="font-semibold capitalize">{company.lcsStatus}</span>
                  </p>
                )}
                {company.lcsExpirationDate && (
                  <p className="text-xs text-emerald-700">
                    Expires: {new Date(company.lcsExpirationDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                )}
                <Link
                  href={`/verify?cert=${company.lcsCertId}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:underline"
                >
                  Verify Certification <ArrowRight size={12} />
                </Link>
              </div>
            )}

            {/* Claim CTA */}
            {!company.claimed && (
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
                <p className="text-sm font-semibold text-text-primary mb-2">Is this your company?</p>
                <p className="text-xs text-text-secondary mb-3">
                  Claim this profile to add your description, services, and contact details.
                </p>
                <Link
                  href="https://app.lcadesk.com/auth/signup?role=supplier"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent text-white px-4 py-2 text-xs font-semibold hover:bg-accent/90 transition-colors"
                >
                  Claim Profile <ArrowRight size={12} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
