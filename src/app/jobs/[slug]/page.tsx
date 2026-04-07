import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowRight, Calendar, Building2, Tag,
  ShieldCheck, FileText, AlertTriangle, Clock, Users, MapPin,
  Briefcase, GraduationCap, DollarSign,
} from "lucide-react";
import type { PublicJob } from "@/lib/types";
import { getContractorLogo } from "@/lib/contractor-logos";
import CTABanner from "@/components/CTABanner";
import GeometricBg from "@/components/GeometricBg";
import JobApplyForm from "@/components/JobApplyForm";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

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
  if (loc.includes("<") || loc.includes("data-") || loc.includes("elementor")) return null;
  return loc.trim() || null;
}

async function fetchJobs(): Promise<PublicJob[]> {
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

export async function generateStaticParams() {
  const jobs = await fetchJobs();
  return jobs.map((j) => ({ slug: j.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const jobs = await fetchJobs();
  const job = jobs.find((j) => j.id === slug);

  if (!job) return { title: "Job Not Found" };

  const company = job.company_name !== "Unknown" ? ` at ${job.company_name}` : "";
  const location = job.location ? ` in ${job.location}` : " in Guyana";

  return {
    title: `${job.job_title}${company} | Oil Sector Jobs in Guyana`,
    description: `${job.job_title}${company}${location}. Guyanese nationals receive first consideration under the Local Content Act 2021.${job.ai_teaser ? ` ${job.ai_teaser.slice(0, 120)}` : job.summary ? ` ${job.summary.slice(0, 120)}` : ""}`,
    alternates: { canonical: `https://lcadesk.com/jobs/${slug}` },
    openGraph: {
      title: `${job.job_title}${company}`,
      description: job.ai_teaser?.slice(0, 200) || job.summary?.slice(0, 200) || `Oil sector employment opportunity${location}. Guyanese nationals prioritized by law.`,
      type: "article",
    },
  };
}

function formatDate(d: string | null) {
  if (!d) return null;
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function getDeadlineStatus(deadline: string | null) {
  if (!deadline) return null;
  const d = new Date(deadline);
  const now = new Date();
  const diff = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  if (diff < 0) return { label: "Deadline Passed", urgent: false, expired: true };
  if (diff < 7) return { label: `${Math.ceil(diff)} days remaining`, urgent: true, expired: false };
  if (diff < 30) return { label: `${Math.ceil(diff)} days remaining`, urgent: false, expired: false };
  return { label: `${Math.ceil(diff)} days remaining`, urgent: false, expired: false };
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Management: { bg: "bg-amber-50", text: "text-amber-700" },
  Technical: { bg: "bg-blue-50", text: "text-blue-700" },
  Administrative: { bg: "bg-purple-50", text: "text-purple-700" },
  "Skilled Labour": { bg: "bg-emerald-50", text: "text-emerald-700" },
  "Semi-Skilled Labour": { bg: "bg-cyan-50", text: "text-cyan-700" },
  "Unskilled Labour": { bg: "bg-gray-50", text: "text-gray-600" },
};

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const jobs = await fetchJobs();
  const job = jobs.find((j) => j.id === slug);

  if (!job) notFound();

  const deadlineStatus = getDeadlineStatus(job.closing_date);
  const hasCompany = job.company_name && job.company_name !== "Unknown";
  const catColor = categoryColors[job.employment_category || ""] || { bg: "bg-gray-50", text: "text-gray-600" };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.job_title,
    description: job.summary || `Employment opportunity in Guyana's oil sector`,
    datePosted: job.posted_date,
    ...(job.closing_date && { validThrough: job.closing_date }),
    hiringOrganization: hasCompany
      ? { "@type": "Organization", name: job.company_name }
      : undefined,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location || "Georgetown",
        addressCountry: "GY",
      },
    },
    ...(job.employment_type && { employmentType: job.employment_type }),
    ...(job.salary_range && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "GYD",
        value: { "@type": "QuantitativeValue", value: job.salary_range },
      },
    }),
    ...(job.education_required && {
      educationRequirements: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: job.education_required,
      },
    }),
    ...(job.experience_required && {
      experienceRequirements: job.experience_required,
    }),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-surface">
        <GeometricBg variant="grid" />
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <Link href="/jobs" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition mb-6">
            <ArrowLeft size={14} /> Back to All Jobs
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {job.employment_category && (
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${catColor.bg} ${catColor.text}`}>
                {job.employment_category}
              </span>
            )}
            {job.employment_type && (
              <span className="text-xs font-medium bg-gray-100 text-text-secondary px-3 py-1 rounded-full">
                {job.employment_type}
              </span>
            )}
            {job.guyanese_first_consideration && (
              <span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
                {"\uD83C\uDDEC\uD83C\uDDFE"} Guyanese First Consideration
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 leading-tight">
            {job.job_title}
          </h1>

          {hasCompany && (() => {
            const logoUrl = getContractorLogo(job.company_name);
            return (
              <div className="flex items-center gap-2.5 mb-4">
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    alt={job.company_name}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Building2 size={16} className="text-text-muted" />
                )}
                <span className="text-text-secondary font-medium">{job.company_name}</span>
                {job.department && (
                  <span className="text-text-muted text-sm">&middot; {job.department}</span>
                )}
              </div>
            );
          })()}

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            {job.location && (
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {job.location}
              </span>
            )}
            {job.closing_date && (
              <div className={`flex items-center gap-1.5 ${deadlineStatus?.urgent ? "text-amber-600 font-semibold" : deadlineStatus?.expired ? "text-red-500" : ""}`}>
                <Calendar size={14} />
                <span>Deadline: {formatDate(job.closing_date)}</span>
                {deadlineStatus && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ml-1 ${
                    deadlineStatus.expired ? "bg-red-100 text-red-600" :
                    deadlineStatus.urgent ? "bg-amber-100 text-amber-700" :
                    "bg-gray-100 text-text-muted"
                  }`}>
                    {deadlineStatus.label}
                  </span>
                )}
              </div>
            )}
            {job.posted_date && (
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> Posted {formatDate(job.posted_date)}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: details */}
            <div className="lg:col-span-2 space-y-8">
              {/* AI Teaser */}
              {job.ai_teaser && (
                <div>
                  <h2 className="font-display text-xl text-text-primary mb-4">About This Position</h2>
                  <div className="prose prose-sm max-w-none text-text-secondary leading-relaxed">
                    {job.ai_teaser.split(/\n+/).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary fallback */}
              {!job.ai_teaser && job.summary && (
                <div>
                  <h2 className="font-display text-xl text-text-primary mb-4">About This Position</h2>
                  <div className="prose prose-sm max-w-none text-text-secondary leading-relaxed">
                    {job.summary.split(/\n+/).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <div>
                  <h2 className="font-display text-xl text-text-primary mb-4">Key Responsibilities</h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {job.skills && job.skills.length > 0 && (
                <div>
                  <h2 className="font-display text-xl text-text-primary mb-4">Required Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s, i) => (
                      <span key={i} className="text-xs font-medium bg-gray-100 text-text-secondary px-3 py-1.5 rounded-full border border-gray-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements cards */}
              {(job.experience_required || job.education_required || job.salary_range) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {job.experience_required && (
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={16} className="text-purple-600" />
                        <h3 className="font-semibold text-purple-900 text-sm">Experience Required</h3>
                      </div>
                      <p className="text-sm text-purple-800 leading-relaxed">{job.experience_required}</p>
                    </div>
                  )}
                  {job.education_required && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap size={16} className="text-blue-600" />
                        <h3 className="font-semibold text-blue-900 text-sm">Education Required</h3>
                      </div>
                      <p className="text-sm text-blue-800 leading-relaxed">{job.education_required}</p>
                    </div>
                  )}
                  {job.salary_range && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign size={16} className="text-emerald-600" />
                        <h3 className="font-semibold text-emerald-900 text-sm">Salary Range</h3>
                      </div>
                      <p className="text-sm text-emerald-800 leading-relaxed">{job.salary_range}</p>
                    </div>
                  )}
                </div>
              )}

              {/* How to Apply */}
              {job.how_to_apply && (
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h3 className="font-semibold text-text-primary mb-2">How to Apply</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{job.how_to_apply}</p>
                </div>
              )}

              {/* LCA context */}
              <div className="space-y-4">
                <div className="bg-surface rounded-xl border border-border p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShieldCheck size={16} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1.5">Your Rights Under the LCA</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        Under Section 12 of the Local Content Act 2021, this employer must give first consideration to Guyanese nationals. Under Section 18, Guyanese employees are entitled to compensation comparable to expatriates performing the same role.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface rounded-xl border border-border p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileText size={16} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1.5">How to Apply</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        Click &ldquo;Apply Through LCA Desk&rdquo; to submit your application. We forward it directly to the employer with your profile, certifications, and CV. Prepare a tailored CV highlighting relevant experience and any prior oil sector work.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface rounded-xl border border-border p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users size={16} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1.5">Reporting Non-Compliance</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        If you believe an employer has not given first consideration to Guyanese nationals, you can report it to the Local Content Secretariat. Contractors must document their hiring process and justify any expatriate hires.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: sidebar */}
            <div className="space-y-5">
              <div className="bg-card rounded-2xl border border-border p-6 space-y-4 sticky top-24">
                {!deadlineStatus?.expired ? (
                  <JobApplyForm jobId={slug} jobTitle={job.job_title} companyName={job.company_name} />
                ) : null}

                {deadlineStatus?.expired && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={14} className="text-red-500" />
                      <span className="text-xs font-medium text-red-700">This deadline has passed</span>
                    </div>
                    <p className="text-xs text-red-600 mt-1">
                      <Link href="/jobs" className="underline">Browse current positions</Link>
                    </p>
                  </div>
                )}

                {/* Details summary */}
                <div className="border-t border-border pt-4 space-y-3">
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">Details</h3>
                  {hasCompany && (() => {
                    const sidebarLogo = getContractorLogo(job.company_name);
                    return (
                      <div className="flex items-start gap-2">
                        {sidebarLogo ? (
                          <img src={sidebarLogo} alt="" width={13} height={13} className="w-[13px] h-[13px] rounded-sm object-contain mt-0.5" loading="lazy" />
                        ) : (
                          <Building2 size={13} className="text-text-muted mt-0.5" />
                        )}
                        <div>
                          <p className="text-xs text-text-muted">Company</p>
                          <p className="text-sm text-text-primary font-medium">{job.company_name}</p>
                        </div>
                      </div>
                    );
                  })()}
                  {job.department && (
                    <div className="flex items-start gap-2">
                      <Tag size={13} className="text-text-muted mt-0.5" />
                      <div>
                        <p className="text-xs text-text-muted">Department</p>
                        <p className="text-sm text-text-primary font-medium">{job.department}</p>
                      </div>
                    </div>
                  )}
                  {job.employment_category && (
                    <div className="flex items-start gap-2">
                      <Briefcase size={13} className="text-text-muted mt-0.5" />
                      <div>
                        <p className="text-xs text-text-muted">LCA Category</p>
                        <p className="text-sm text-text-primary font-medium">{job.employment_category}</p>
                      </div>
                    </div>
                  )}
                  {job.location && (
                    <div className="flex items-start gap-2">
                      <MapPin size={13} className="text-text-muted mt-0.5" />
                      <div>
                        <p className="text-xs text-text-muted">Location</p>
                        <p className="text-sm text-text-primary font-medium">{job.location}</p>
                      </div>
                    </div>
                  )}
                  {job.employment_type && (
                    <div className="flex items-start gap-2">
                      <Clock size={13} className="text-text-muted mt-0.5" />
                      <div>
                        <p className="text-xs text-text-muted">Employment Type</p>
                        <p className="text-sm text-text-primary font-medium">{job.employment_type}</p>
                      </div>
                    </div>
                  )}
                  {job.closing_date && (
                    <div className="flex items-start gap-2">
                      <Calendar size={13} className="text-text-muted mt-0.5" />
                      <div>
                        <p className="text-xs text-text-muted">Closing Date</p>
                        <p className="text-sm text-text-primary font-medium">{formatDate(job.closing_date)}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-2">
                    <ShieldCheck size={13} className="text-text-muted mt-0.5" />
                    <div>
                      <p className="text-xs text-text-muted">Legal Framework</p>
                      <p className="text-sm text-text-primary font-medium">Local Content Act 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for SEO */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl text-text-primary mb-8 text-center">
            About LCA Employment in Guyana
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What does 'first consideration' mean for job seekers?",
                a: "Under Section 12 of the Local Content Act 2021, contractors must evaluate Guyanese candidates first before considering expatriate hires. This means your application must be reviewed and assessed before any international candidate is considered. Contractors must document this process and report it to the Local Content Secretariat.",
              },
              {
                q: "Am I entitled to equal pay?",
                a: "Yes. Section 18 of the LCA mandates that Guyanese nationals receive compensation comparable to expatriates performing the same work. This is a legal requirement, not a voluntary policy. If you believe you are being paid less than an expatriate in the same role, you can report it to the Secretariat.",
              },
              {
                q: "What certifications improve my chances?",
                a: "For offshore roles: BOSIET/HUET, T-BOSIET, STCW certifications. For technical roles: relevant trade certificates, engineering degrees, welding certifications (6G, 6GR). For HSE roles: NEBOSH, IOSH, or equivalent. For all roles: first aid certification and a valid passport are advantages.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-border p-6" itemScope itemType="https://schema.org/Question">
                <h3 className="font-semibold text-text-primary mb-2" itemProp="name">{item.q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-sm text-text-secondary leading-relaxed" itemProp="text">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Are you a Guyanese national looking for oil sector work?"
        body="Register on LCA Desk to receive alerts when positions matching your skills are posted. It's free."
        primaryCTA={{ label: "Register Free", href: "https://app.lcadesk.com/auth/signup?role=job_seeker" }}
        secondaryCTA={{ label: "Browse All Jobs", href: "/jobs" }}
      />
    </main>
  );
}
