"use client";

import { useState } from "react";
import { Building2, ShieldCheck, Briefcase, Users } from "lucide-react";
import type { PublicCompany } from "@/lib/types";
import { getContractorLogo } from "@/lib/contractor-logos";

export default function CompanyDetailClient({ company }: { company: PublicCompany }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const logo = getContractorLogo(company.companyName);

  return (
    <div className="flex items-start gap-5">
      {logo && !logoFailed ? (
        <img
          src={logo}
          alt={`${company.companyName} logo`}
          width={64}
          height={64}
          className="rounded-xl object-contain bg-white border border-gray-200 flex-shrink-0"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
          <Building2 size={28} className="text-slate-400" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{company.companyName}</h1>
          {company.lcsRegistered && (
            <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              <ShieldCheck size={12} /> LCS Registered
            </span>
          )}
        </div>
        {company.companyType && (
          <p className="text-sm text-text-muted mb-2">{company.companyType}{company.industry ? ` · ${company.industry}` : ""}</p>
        )}
        <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
          {company.activeOpportunities > 0 && (
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} className="text-blue-500" />
              {company.activeOpportunities} active {company.activeOpportunities === 1 ? "opportunity" : "opportunities"}
            </span>
          )}
          {company.openJobPostings > 0 && (
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-amber-500" />
              {company.openJobPostings} open {company.openJobPostings === 1 ? "position" : "positions"}
            </span>
          )}
          {company.totalOpportunities > company.activeOpportunities && (
            <span className="text-text-muted text-xs">
              ({company.totalOpportunities} total opportunities)
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
