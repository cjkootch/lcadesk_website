"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, ExternalLink, Calendar, AlertTriangle, Building2, Tag, ArrowRight, X, SlidersHorizontal, Clock } from "lucide-react";
import Link from "next/link";
import type { PublicOpportunity } from "@/lib/types";

const noticeConfig: Record<string, { bg: string; text: string; border: string; dot: string; label: string }> = {
  EOI: { bg: "bg-blue-50", text: "text-blue-700", border: "border-l-blue-500", dot: "bg-blue-500", label: "Expression of Interest" },
  RFQ: { bg: "bg-amber-50", text: "text-amber-700", border: "border-l-amber-500", dot: "bg-amber-500", label: "Request for Quotation" },
  RFP: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-l-emerald-600", dot: "bg-emerald-600", label: "Request for Proposal" },
  RFI: { bg: "bg-purple-50", text: "text-purple-700", border: "border-l-purple-500", dot: "bg-purple-500", label: "Request for Information" },
};

const defaultNotice = { bg: "bg-gray-50", text: "text-gray-600", border: "border-l-gray-400", dot: "bg-gray-400", label: "Notice" };

type SortOption = "newest" | "deadline" | "title";
type DeadlineFilter = "all" | "open" | "closing_soon" | "expired";

function getDeadlineInfo(deadline: string | null) {
  if (!deadline) return { label: "Open deadline", urgent: false, expired: false, daysLeft: Infinity };
  const d = new Date(deadline);
  const now = new Date();
  const diff = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  const formatted = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  if (diff < 0) return { label: `Closed ${formatted}`, urgent: false, expired: true, daysLeft: diff };
  if (diff < 3) return { label: `${Math.ceil(diff)}d left – ${formatted}`, urgent: true, expired: false, daysLeft: diff };
  if (diff < 7) return { label: `${Math.ceil(diff)}d left – ${formatted}`, urgent: true, expired: false, daysLeft: diff };
  return { label: `Due ${formatted}`, urgent: false, expired: false, daysLeft: diff };
}

interface Props {
  opportunities: PublicOpportunity[];
}

export default function OpportunityFilters({ opportunities }: Props) {
  const [category, setCategory] = useState("all");
  const [noticeType, setNoticeType] = useState("all");
  const [contractor, setContractor] = useState("all");
  const [deadlineFilter, setDeadlineFilter] = useState<DeadlineFilter>("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [showFilters, setShowFilters] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(opportunities.map((o) => o.lca_category).filter(Boolean));
    return Array.from(cats).sort();
  }, [opportunities]);

  const contractors = useMemo(() => {
    const set = new Set(opportunities.map((o) => o.contractor_name).filter((n) => n && n !== "Contractor Not Specified"));
    return Array.from(set).sort();
  }, [opportunities]);

  const noticeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    opportunities.forEach((o) => {
      const t = o.notice_type || "Other";
      counts[t] = (counts[t] || 0) + 1;
    });
    return counts;
  }, [opportunities]);

  const activeFilterCount = [
    category !== "all",
    noticeType !== "all",
    contractor !== "all",
    deadlineFilter !== "all",
  ].filter(Boolean).length;

  const filtered = useMemo(() => {
    let results = opportunities.filter((o) => {
      if (category !== "all" && o.lca_category !== category) return false;
      if (noticeType !== "all" && o.notice_type !== noticeType) return false;
      if (contractor !== "all" && o.contractor_name !== contractor) return false;

      if (deadlineFilter !== "all") {
        const info = getDeadlineInfo(o.deadline);
        if (deadlineFilter === "open" && info.expired) return false;
        if (deadlineFilter === "closing_soon" && (info.expired || info.daysLeft > 14)) return false;
        if (deadlineFilter === "expired" && !info.expired) return false;
      }

      if (search) {
        const q = search.toLowerCase();
        const fields = [o.title, o.contractor_name, o.description || "", o.lca_category || "", o.notice_type || ""];
        if (!fields.some((f) => f.toLowerCase().includes(q))) return false;
      }
      return true;
    });

    results.sort((a, b) => {
      if (sortBy === "deadline") {
        const da = a.deadline ? new Date(a.deadline).getTime() : Infinity;
        const db = b.deadline ? new Date(b.deadline).getTime() : Infinity;
        return da - db;
      }
      if (sortBy === "title") return a.title.localeCompare(b.title);
      // newest: by posted_date desc, fallback to id desc
      return Number(b.id) - Number(a.id);
    });

    return results;
  }, [opportunities, category, noticeType, contractor, deadlineFilter, search, sortBy]);

  function clearAll() {
    setCategory("all");
    setNoticeType("all");
    setContractor("all");
    setDeadlineFilter("all");
    setSearch("");
    setSortBy("newest");
  }

  const hasFilters = category !== "all" || noticeType !== "all" || contractor !== "all" || deadlineFilter !== "all" || search;

  return (
    <div>
      {/* Search + toggle */}
      <div className="bg-white rounded-2xl border border-border shadow-sm mb-5">
        <div className="p-4 flex gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search opportunities... (e.g. &quot;welding&quot;, &quot;ExxonMobil&quot;, &quot;catering&quot;)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary">
                <X size={14} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition ${
              showFilters || activeFilterCount > 0
                ? "border-accent bg-accent/5 text-accent"
                : "border-border text-text-secondary hover:border-accent hover:text-accent"
            }`}
          >
            <SlidersHorizontal size={15} />
            <span className="hidden sm:inline">Filters</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Notice type quick pills */}
        <div className="px-4 pb-4 flex flex-wrap gap-2">
          {Object.entries(noticeConfig).map(([key, cfg]) => {
            const count = noticeCounts[key] || 0;
            const active = noticeType === key;
            return (
              <button
                key={key}
                onClick={() => setNoticeType(active ? "all" : key)}
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                  active
                    ? `${cfg.bg} ${cfg.text} border-current`
                    : "bg-white border-border text-text-secondary hover:border-gray-300"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${active ? cfg.dot : "bg-gray-300"}`} />
                {key}
                <span className="text-[10px] opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Expanded filters */}
        {showFilters && (
          <div className="border-t border-border px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1.5">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c!}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1.5">Contractor</label>
              <select
                value={contractor}
                onChange={(e) => setContractor(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition"
              >
                <option value="all">All Contractors</option>
                {contractors.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1.5">Deadline</label>
              <select
                value={deadlineFilter}
                onChange={(e) => setDeadlineFilter(e.target.value as DeadlineFilter)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition"
              >
                <option value="all">Any Deadline</option>
                <option value="open">Open (not expired)</option>
                <option value="closing_soon">Closing within 14 days</option>
                <option value="expired">Expired / Closed</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1.5">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition"
              >
                <option value="newest">Newest First</option>
                <option value="deadline">Deadline (soonest)</option>
                <option value="title">Title (A–Z)</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Active filter chips + results count */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm text-text-muted">
            <span className="font-semibold text-text-primary">{filtered.length}</span> opportunit{filtered.length === 1 ? "y" : "ies"}
          </p>
          {category !== "all" && (
            <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">
              {category} <button onClick={() => setCategory("all")}><X size={11} /></button>
            </span>
          )}
          {contractor !== "all" && (
            <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">
              {contractor} <button onClick={() => setContractor("all")}><X size={11} /></button>
            </span>
          )}
          {deadlineFilter !== "all" && (
            <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">
              {deadlineFilter === "open" ? "Open" : deadlineFilter === "closing_soon" ? "Closing soon" : "Expired"}
              <button onClick={() => setDeadlineFilter("all")}><X size={11} /></button>
            </span>
          )}
        </div>
        {hasFilters && (
          <button onClick={clearAll} className="text-xs text-accent hover:underline font-medium">
            Clear all
          </button>
        )}
      </div>

      {/* Cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((opp, i) => {
            const notice = noticeConfig[opp.notice_type || ""] || defaultNotice;
            const deadline = getDeadlineInfo(opp.deadline);
            return (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: Math.min(i * 0.03, 0.2) }}
                className={`relative bg-white rounded-xl border border-border/80 border-l-4 ${notice.border} overflow-hidden hover:shadow-md hover:border-border transition-all group`}
              >
                <div className="p-6">
                  {/* Top row: notice type + deadline */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${notice.bg} ${notice.text}`}>
                      {opp.notice_type || "Notice"}
                    </span>
                    {deadline.urgent ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                        <Clock size={11} /> {deadline.label}
                      </span>
                    ) : deadline.expired ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-red-400 line-through">
                        <AlertTriangle size={11} /> {deadline.label}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] text-text-muted">
                        <Calendar size={11} /> {deadline.label}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-text-primary text-[15px] leading-snug mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                    {opp.title}
                  </h3>

                  {/* Description */}
                  {opp.description && (
                    <p className="text-[13px] text-text-secondary mb-4 line-clamp-2 leading-relaxed">{opp.description}</p>
                  )}

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
                      <Building2 size={12} className="text-text-muted" />
                      {opp.contractor_name}
                    </span>
                    {opp.lca_category && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
                        <Tag size={12} className="text-text-muted" />
                        {opp.lca_category}
                      </span>
                    )}
                  </div>

                  {/* Action */}
                  <div className="pt-3 border-t border-border/40">
                    {opp.source_url ? (
                      <a
                        href={opp.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition group/link"
                      >
                        View Original Notice <ExternalLink size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href="/suppliers/register"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition group/link"
                      >
                        Register to Apply <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center mx-auto mb-5">
            <Briefcase size={28} className="text-text-muted" />
          </div>
          <h3 className="font-semibold text-text-primary text-lg mb-2">
            {hasFilters ? "No matching opportunities" : "Opportunities loading"}
          </h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
            {hasFilters
              ? "Try adjusting your filters or search terms."
              : "We\u2019re populating this board from the Local Content Register. Check back shortly \u2014 or register to receive alerts."}
          </p>
          {hasFilters ? (
            <button
              onClick={clearAll}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-accent text-accent px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-white transition-all"
            >
              Clear All Filters
            </button>
          ) : (
            <Link
              href="/suppliers/register"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white hover:shadow-lg shadow-accent/25 transition-all"
            >
              Register as a Supplier
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
