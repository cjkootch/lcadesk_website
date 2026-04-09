"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search, Building2, ShieldCheck, Briefcase, Users, ArrowRight,
  X, SlidersHorizontal, MapPin, ExternalLink, Tag, ChevronDown,
  Lock,
} from "lucide-react";
import type { PublicCompany } from "@/lib/types";
import { getContractorLogo } from "@/lib/contractor-logos";

interface Props {
  companies: PublicCompany[];
}

function ContractorLogo({ name, size = 32 }: { name: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const logo = getContractorLogo(name);

  if (!logo || failed) {
    return (
      <div
        className="rounded-lg bg-slate-100 flex items-center justify-center text-slate-400"
        style={{ width: size, height: size }}
      >
        <Building2 size={size * 0.5} />
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="rounded-lg object-contain bg-white border border-gray-100"
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}

type SortKey = "relevance" | "name" | "opportunities" | "jobs";
type FilterKey = "all" | "lcs" | "hiring" | "procurement";

const FREE_LIMIT = 12;

export default function CompanyFilters({ companies }: Props) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("relevance");
  const [filter, setFilter] = useState<FilterKey>("all");
  const showCount = FREE_LIMIT;

  const filtered = useMemo(() => {
    let result = [...companies];

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (c) =>
          c.companyName.toLowerCase().includes(q) ||
          (c.description && c.description.toLowerCase().includes(q)) ||
          (c.keyServices && c.keyServices.some((s) => s.toLowerCase().includes(q))) ||
          (c.lcsServiceCategories && c.lcsServiceCategories.some((s) => s.toLowerCase().includes(q)))
      );
    }

    // Filter
    switch (filter) {
      case "lcs":
        result = result.filter((c) => c.lcsRegistered);
        break;
      case "hiring":
        result = result.filter((c) => c.openJobPostings > 0);
        break;
      case "procurement":
        result = result.filter((c) => c.activeOpportunities > 0);
        break;
    }

    // Sort
    switch (sort) {
      case "name":
        result.sort((a, b) => a.companyName.localeCompare(b.companyName));
        break;
      case "opportunities":
        result.sort((a, b) => b.activeOpportunities - a.activeOpportunities);
        break;
      case "jobs":
        result.sort((a, b) => b.openJobPostings - a.openJobPostings);
        break;
      case "relevance":
      default:
        // Score: opportunities + jobs + LCS + description completeness
        result.sort((a, b) => {
          const score = (c: PublicCompany) => {
            let s = 0;
            s += c.activeOpportunities * 3;
            s += c.openJobPostings * 2;
            if (c.lcsRegistered) s += 1;
            if (c.description) s += 2;
            if (c.keyServices && c.keyServices.length > 0) s += 1;
            return s;
          };
          return score(b) - score(a);
        });
        break;
    }

    return result;
  }, [companies, query, sort, filter]);

  const displayed = filtered.slice(0, showCount);

  const filterTabs: { key: FilterKey; label: string; count: number }[] = [
    { key: "all", label: "All", count: companies.length },
    { key: "lcs", label: "LCS Registered", count: companies.filter((c) => c.lcsRegistered).length },
    { key: "procurement", label: "Active Procurement", count: companies.filter((c) => c.activeOpportunities > 0).length },
    { key: "hiring", label: "Hiring", count: companies.filter((c) => c.openJobPostings > 0).length },
  ];

  return (
    <div>
      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search companies, services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-card text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary">
              <X size={14} />
            </button>
          )}
        </div>
        <div className="relative">
          <SlidersHorizontal size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="appearance-none pl-9 pr-10 py-3 rounded-xl border border-border bg-card text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 cursor-pointer"
          >
            <option value="relevance">Most Active</option>
            <option value="name">A → Z</option>
            <option value="opportunities">Most Opportunities</option>
            <option value="jobs">Most Jobs</option>
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === tab.key
                ? "bg-accent text-white shadow-sm"
                : "bg-card border border-border text-text-secondary hover:border-accent/30"
            }`}
          >
            {tab.label}
            <span className={`ml-1.5 text-xs ${filter === tab.key ? "text-white/70" : "text-text-muted"}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-text-muted mb-4">
        Showing {displayed.length} of {filtered.length} companies
        {query && <> matching &ldquo;{query}&rdquo;</>}
      </p>

      {/* Company Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {displayed.map((company) => (
          <Link
            key={company.slug}
            href={`/companies/${company.slug}`}
            className="group block bg-card rounded-xl border border-border p-5 hover:border-accent/30 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3 mb-3">
              <ContractorLogo name={company.companyName} size={40} />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-text-primary text-sm leading-tight group-hover:text-accent transition-colors truncate">
                  {company.companyName}
                </h3>
                {company.companyType && (
                  <span className="text-xs text-text-muted">{company.companyType}</span>
                )}
              </div>
              {company.lcsRegistered && (
                <div className="flex-shrink-0" title="LCS Registered">
                  <ShieldCheck size={16} className="text-emerald-500" />
                </div>
              )}
            </div>

            {company.description && (
              <p className="text-xs text-text-secondary mb-3 line-clamp-2">{company.description}</p>
            )}

            {/* Tags */}
            {company.keyServices && company.keyServices.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {company.keyServices.slice(0, 3).map((s) => (
                  <span key={s} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {s}
                  </span>
                ))}
                {company.keyServices.length > 3 && (
                  <span className="text-[10px] text-text-muted">+{company.keyServices.length - 3}</span>
                )}
              </div>
            )}

            {/* LCS categories for registered companies without keyServices */}
            {(!company.keyServices || company.keyServices.length === 0) && company.lcsServiceCategories.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {company.lcsServiceCategories.slice(0, 3).map((s) => (
                  <span key={s} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {s}
                  </span>
                ))}
                {company.lcsServiceCategories.length > 3 && (
                  <span className="text-[10px] text-text-muted">+{company.lcsServiceCategories.length - 3}</span>
                )}
              </div>
            )}

            {/* Stats row */}
            <div className="flex items-center gap-4 text-xs text-text-muted pt-2 border-t border-border/50">
              {company.activeOpportunities > 0 && (
                <span className="flex items-center gap-1">
                  <Briefcase size={12} className="text-blue-500" />
                  {company.activeOpportunities} {company.activeOpportunities === 1 ? "opportunity" : "opportunities"}
                </span>
              )}
              {company.openJobPostings > 0 && (
                <span className="flex items-center gap-1">
                  <Users size={12} className="text-amber-500" />
                  {company.openJobPostings} {company.openJobPostings === 1 ? "job" : "jobs"}
                </span>
              )}
              {company.lcsRegistered && company.lcsStatus && (
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-500" />
                  LCS {company.lcsStatus}
                </span>
              )}
              {!company.activeOpportunities && !company.openJobPostings && !company.lcsRegistered && (
                <span className="text-text-muted">Listed company</span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {displayed.length === 0 && (
        <div className="text-center py-20">
          <img src="/illustrations/empty-no-results.png" alt="" className="w-24 h-24 mx-auto mb-5 opacity-80" />
          <p className="text-text-secondary font-medium mb-2">No companies found</p>
          <p className="text-text-muted text-sm">Try adjusting your search or filter criteria.</p>
        </div>
      )}

      {/* Paygate */}
      {filtered.length > FREE_LIMIT && (
        <div className="relative mt-0">
          {/* Gradient fade over last row */}
          <div className="absolute -top-40 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />

          <div className="relative z-20 text-center pt-8 pb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
              <Lock size={20} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              {filtered.length - FREE_LIMIT} more companies available
            </h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">
              Start your free 30-day trial to access the full company directory, advanced filters, and company profiles.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://app.lcadesk.com/auth/signup?role=filer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Start 30-Day Trial <ArrowRight size={16} />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-text-primary hover:bg-card transition-all"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
