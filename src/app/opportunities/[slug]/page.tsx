import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Building2, Tag, ShieldCheck, FileText, AlertTriangle, Clock, Users } from "lucide-react";
import { fetchOpportunities } from "@/lib/opportunities";
import CTABanner from "@/components/CTABanner";
import GeometricBg from "@/components/GeometricBg";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const opportunities = await fetchOpportunities();
  return opportunities.map((opp) => ({ slug: opp.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const opportunities = await fetchOpportunities();
  const opp = opportunities.find((o) => o.id === slug);

  if (!opp) {
    return { title: "Opportunity Not Found" };
  }

  const contractor = opp.contractor_name !== "Contractor Not Specified" ? ` from ${opp.contractor_name}` : "";
  const noticeType = opp.notice_type ? `${opp.notice_type}: ` : "";
  const category = opp.lca_category ? ` in ${opp.lca_category}` : "";
  const deadline = opp.deadline ? ` | Deadline: ${new Date(opp.deadline).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}` : "";

  return {
    title: `${noticeType}${opp.title} | Guyana Oil Sector Procurement`,
    description: `${opp.title}${contractor}${category}. Active procurement opportunity in Guyana's oil sector requiring first consideration to LCS-certified Guyanese suppliers under the Local Content Act 2021.${deadline}`,
    openGraph: {
      title: `${noticeType}${opp.title}`,
      description: opp.description?.slice(0, 200) || `Procurement opportunity in Guyana's oil sector.`,
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

const noticeTypeInfo: Record<string, { full: string; desc: string }> = {
  EOI: {
    full: "Expression of Interest",
    desc: "An EOI is the first stage of procurement. The contractor is identifying potential suppliers who may be capable of delivering the required goods or services. Responding to an EOI typically involves submitting your company profile, relevant experience, and capabilities.",
  },
  RFI: {
    full: "Request for Information",
    desc: "An RFI is used by contractors to gather information about potential suppliers and the market. It helps them understand what solutions are available before issuing a formal tender. Responses should focus on your company's capabilities, past performance, and available resources.",
  },
  RFQ: {
    full: "Request for Quotation",
    desc: "An RFQ is a formal request for pricing on specific goods or services. The contractor has defined their requirements and is seeking competitive quotes. Your response should include detailed pricing, delivery timelines, and any terms and conditions.",
  },
  RFP: {
    full: "Request for Proposal",
    desc: "An RFP is a comprehensive procurement document seeking detailed proposals for complex services or projects. Responses should include your technical approach, team qualifications, project timeline, methodology, and pricing.",
  },
  ITT: {
    full: "Invitation to Tender",
    desc: "An ITT is a formal invitation to submit a binding bid for a specific scope of work. This is typically the final stage before contract award. Your tender must comply with all specifications and will be evaluated against defined criteria.",
  },
};

const lcaSections: { title: string; content: string; icon: typeof ShieldCheck }[] = [
  {
    title: "What the Local Content Act Requires",
    content: "Under Section 22 of the Local Content Act 2021, contractors in Guyana's petroleum sector must give first consideration to Guyanese suppliers registered on the Local Content Register. This is a legal requirement, not a preference.",
    icon: ShieldCheck,
  },
  {
    title: "How to Respond to This Notice",
    content: "To respond, visit the original notice link and follow the submission instructions. Ensure your company has an active Local Content Secretariat (LCS) certificate. Include your LCS registration number in your response to demonstrate your first-consideration eligibility.",
    icon: FileText,
  },
  {
    title: "Who Is Eligible",
    content: "Guyanese-owned companies registered on the Local Content Register are eligible for first consideration. Companies must hold a valid LCS certificate and demonstrate capability to deliver the required goods or services. Foreign companies may bid but must demonstrate that no qualified Guyanese supplier is available.",
    icon: Users,
  },
];

export default async function OpportunityDetailPage({ params }: Props) {
  const { slug } = await params;
  const opportunities = await fetchOpportunities();
  const opp = opportunities.find((o) => o.id === slug);

  if (!opp) {
    notFound();
  }

  const deadlineStatus = getDeadlineStatus(opp.deadline);
  const noticeInfo = opp.notice_type ? noticeTypeInfo[opp.notice_type] : null;
  const hasContractor = opp.contractor_name && opp.contractor_name !== "Contractor Not Specified" && opp.contractor_name !== "Unknown";

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: opp.title,
    description: opp.description || `Procurement opportunity in Guyana's oil sector`,
    provider: hasContractor
      ? { "@type": "Organization", name: opp.contractor_name }
      : undefined,
    areaServed: {
      "@type": "Country",
      name: "Guyana",
    },
    serviceType: opp.notice_type || "Procurement Notice",
    category: opp.lca_category || "Oil & Gas Services",
    url: opp.source_url || `https://lcadesk.com/opportunities/${slug}`,
    ...(opp.deadline && {
      offers: {
        "@type": "Offer",
        validThrough: opp.deadline,
      },
    }),
    isRelatedTo: {
      "@type": "Legislation",
      name: "Local Content Act 2021",
      legislationJurisdiction: "Guyana",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-surface">
        <GeometricBg variant="grid" />
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <Link href="/opportunities" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition mb-6">
            <ArrowLeft size={14} /> Back to All Opportunities
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {opp.notice_type && (
              <span className="text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent px-3 py-1 rounded-full">
                {opp.notice_type}
                {noticeInfo && <span className="font-normal ml-1">— {noticeInfo.full}</span>}
              </span>
            )}
            {opp.lca_category && (
              <span className="text-xs font-medium bg-gray-100 text-text-secondary px-3 py-1 rounded-full flex items-center gap-1">
                <Tag size={11} /> {opp.lca_category}
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 leading-tight">
            {opp.title}
          </h1>

          {hasContractor && (
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={16} className="text-text-muted" />
              <span className="text-text-secondary font-medium">{opp.contractor_name}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            {opp.deadline && (
              <div className={`flex items-center gap-1.5 ${deadlineStatus?.urgent ? "text-amber-600 font-semibold" : deadlineStatus?.expired ? "text-red-500" : ""}`}>
                <Calendar size={14} />
                <span>Deadline: {formatDate(opp.deadline)}</span>
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
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: description */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="font-display text-xl text-text-primary mb-4">Notice Details</h2>
                {opp.description ? (
                  <div className="prose prose-sm max-w-none text-text-secondary leading-relaxed">
                    {opp.description.split(/\n+/).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-text-muted text-sm">
                    Full details are available on the original notice. Click &ldquo;View Original Notice&rdquo; to see the complete requirements.
                  </p>
                )}
              </div>

              {/* Notice type explainer */}
              {noticeInfo && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    What is {noticeInfo.full === "Expression of Interest" ? "an" : "a"} {noticeInfo.full} ({opp.notice_type})?
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed">{noticeInfo.desc}</p>
                </div>
              )}

              {/* LCA context sections */}
              <div className="space-y-4">
                {lcaSections.map((section, i) => (
                  <div key={i} className="bg-surface rounded-xl border border-border p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <section.icon size={16} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-1.5">{section.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: sidebar */}
            <div className="space-y-5">
              {/* Action card */}
              <div className="bg-card rounded-2xl border border-border p-6 space-y-4 sticky top-24">
                {opp.source_url && (
                  <a
                    href={opp.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.01] transition-all"
                  >
                    View Original Notice <ExternalLink size={14} />
                  </a>
                )}

                <Link
                  href="/suppliers/register"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-accent text-accent px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-white transition-all"
                >
                  Register as Supplier <ArrowRight size={14} />
                </Link>

                {deadlineStatus?.expired && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={14} className="text-red-500" />
                      <span className="text-xs font-medium text-red-700">This deadline has passed</span>
                    </div>
                    <p className="text-xs text-red-600 mt-1">
                      <Link href="/opportunities" className="underline">Browse current opportunities</Link>
                    </p>
                  </div>
                )}

                {/* Details summary */}
                <div className="border-t border-border pt-4 space-y-3">
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">Details</h3>
                  {opp.notice_type && (
                    <div className="flex items-start gap-2">
                      <FileText size={13} className="text-text-muted mt-0.5" />
                      <div>
                        <p className="text-xs text-text-muted">Notice Type</p>
                        <p className="text-sm text-text-primary font-medium">{noticeInfo?.full || opp.notice_type}</p>
                      </div>
                    </div>
                  )}
                  {hasContractor && (
                    <div className="flex items-start gap-2">
                      <Building2 size={13} className="text-text-muted mt-0.5" />
                      <div>
                        <p className="text-xs text-text-muted">Contractor</p>
                        <p className="text-sm text-text-primary font-medium">{opp.contractor_name}</p>
                      </div>
                    </div>
                  )}
                  {opp.lca_category && (
                    <div className="flex items-start gap-2">
                      <Tag size={13} className="text-text-muted mt-0.5" />
                      <div>
                        <p className="text-xs text-text-muted">LCA Category</p>
                        <p className="text-sm text-text-primary font-medium">{opp.lca_category}</p>
                      </div>
                    </div>
                  )}
                  {opp.deadline && (
                    <div className="flex items-start gap-2">
                      <Clock size={13} className="text-text-muted mt-0.5" />
                      <div>
                        <p className="text-xs text-text-muted">Deadline</p>
                        <p className="text-sm text-text-primary font-medium">{formatDate(opp.deadline)}</p>
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

      {/* FAQ section for GEO */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl text-text-primary mb-8 text-center">
            About LCA Procurement in Guyana
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What does 'first consideration' mean under the LCA?",
                a: "Under Section 22 of the Local Content Act 2021, contractors must evaluate Guyanese suppliers first before considering foreign companies. This means local bids are reviewed and assessed before any international options are explored. Contractors must document this process and report it to the Local Content Secretariat.",
              },
              {
                q: "Do I need an LCS certificate to respond to this notice?",
                a: "While not always required at the EOI/RFI stage, having an active Local Content Secretariat (LCS) certificate significantly strengthens your bid. For formal tenders (RFQ, RFP, ITT), an LCS certificate is typically required to qualify for first-consideration status. You can apply for certification through the Ministry of Natural Resources.",
              },
              {
                q: "How are procurement decisions made?",
                a: "Contractors must follow fair and equitable evaluation criteria as defined in Section 23. Bids are typically assessed on technical capability, pricing, delivery timeline, and local content compliance. Contractors must report their procurement decisions in half-yearly reports to the Secretariat.",
              },
              {
                q: "What happens if a contractor doesn't give first consideration to Guyanese suppliers?",
                a: "Non-compliance with the Local Content Act can result in penalties ranging from GY$1 million to GY$50 million per offence. The Local Content Secretariat actively audits contractor procurement reports and investigates complaints from suppliers who believe they were unfairly bypassed.",
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
        headline="Are you a Guyanese supplier?"
        body="Register on LCA Desk to receive alerts when opportunities matching your service categories are posted. It's free."
        primaryCTA={{ label: "Register as Supplier", href: "/suppliers/register" }}
        secondaryCTA={{ label: "Browse All Opportunities", href: "/opportunities" }}
      />
    </>
  );
}
