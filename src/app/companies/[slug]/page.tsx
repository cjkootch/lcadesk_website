import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft, Building2, ShieldCheck, Briefcase, Users, MapPin,
  ExternalLink, Calendar, Tag, ArrowRight, Globe, AlertTriangle,
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
    title: `${company.companyName} | Guyana Oil & Gas Directory`,
    description: `${company.companyName} — ${parts.join(", ") || "Company in Guyana's oil and gas sector"}. ${company.description || "View company profile, procurement opportunities, and job openings."}`.slice(0, 300),
    alternates: { canonical: `https://lcadesk.com/companies/${slug}` },
    openGraph: {
      title: company.companyName,
      description: company.description || `${company.companyName} — company operating in Guyana's oil and gas sector.`,
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
                  Guyanese suppliers receive first consideration under the Local Content Act.
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
                  Guyanese nationals receive first consideration for employment.
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info Card */}
            <div className="bg-card rounded-xl border border-border p-5 space-y-4">
              <h3 className="font-semibold text-text-primary text-sm">Company Info</h3>

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
                    <p className="text-xs text-text-muted">Guyana Presence</p>
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
                  href="https://app.lcadesk.com/auth/signup"
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
