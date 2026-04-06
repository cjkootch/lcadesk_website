"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Briefcase, ExternalLink, Calendar, AlertTriangle,
  Building2, Tag, ArrowRight, X, SlidersHorizontal, Clock,
  Bookmark, BookmarkCheck, Bell, BellRing, Lock, Crown,
  ChevronDown, ChevronUp, BarChart3,
} from "lucide-react";
import Link from "next/link";
import type { PublicOpportunity } from "@/lib/types";

/* ── Notice type config ─────────────────────────────────────────── */

const noticeConfig: Record<string, { bg: string; text: string; border: string; dot: string; label: string; gradient: string }> = {
  EOI: { bg: "bg-blue-50", text: "text-blue-700", border: "border-l-blue-500", dot: "bg-blue-500", label: "Expression of Interest", gradient: "from-blue-500 to-blue-600" },
  RFQ: { bg: "bg-amber-50", text: "text-amber-700", border: "border-l-amber-500", dot: "bg-amber-500", label: "Request for Quotation", gradient: "from-amber-500 to-amber-600" },
  RFP: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-l-emerald-600", dot: "bg-emerald-600", label: "Request for Proposal", gradient: "from-emerald-500 to-emerald-600" },
  RFI: { bg: "bg-purple-50", text: "text-purple-700", border: "border-l-purple-500", dot: "bg-purple-500", label: "Request for Information", gradient: "from-purple-500 to-purple-600" },
};

const defaultNotice = { bg: "bg-gray-50", text: "text-gray-600", border: "border-l-gray-400", dot: "bg-gray-400", label: "Notice", gradient: "from-gray-400 to-gray-500" };

type SortOption = "newest" | "deadline" | "title";
type DeadlineFilter = "all" | "open" | "closing_soon" | "expired";

function getDeadlineInfo(deadline: string | null) {
  if (!deadline) return { label: "Open deadline", urgent: false, expired: false, daysLeft: Infinity };
  const d = new Date(deadline);
  const now = new Date();
  const diff = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  const formatted = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  if (diff < 0) return { label: `Closed ${formatted}`, urgent: false, expired: true, daysLeft: diff };
  if (diff < 7) return { label: `${Math.ceil(diff)}d left`, urgent: true, expired: false, daysLeft: diff };
  return { label: formatted, urgent: false, expired: false, daysLeft: diff };
}

function truncate(str: string, len: number) {
  if (str.length <= len) return str;
  return str.slice(0, len).replace(/\s+\S*$/, "") + "…";
}

/* ── Auth-gated action modal ─────────────────────────────────────── */

function AuthPrompt({ action, onClose }: { action: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
          {action === "save" ? <Bookmark size={24} className="text-accent" /> : <Bell size={24} className="text-accent" />}
        </div>
        <h3 className="font-display text-xl text-text-primary mb-2">
          {action === "save" ? "Save Opportunities" : "Set Up Alerts"}
        </h3>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
          {action === "save"
            ? "Create a free account to save opportunities and track your responses."
            : "Register to receive email alerts when new opportunities match your service categories."}
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/suppliers/register"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Register Free <ArrowRight size={14} />
          </Link>
          <Link
            href="/suppliers/login"
            className="text-sm font-medium text-text-secondary hover:text-accent transition"
          >
            Already have an account? Log in
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */

interface Props {
  opportunities: PublicOpportunity[];
  isLoggedIn?: boolean;
}

export default function OpportunityFilters({ opportunities, isLoggedIn = false }: Props) {
  const [category, setCategory] = useState("all");
  const [noticeType, setNoticeType] = useState("all");
  const [contractor, setContractor] = useState("all");
  const [deadlineFilter, setDeadlineFilter] = useState<DeadlineFilter>("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [authPrompt, setAuthPrompt] = useState<string | null>(null);

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
    const results = opportunities.filter((o) => {
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

  const handleSave = useCallback((id: string) => {
    if (!isLoggedIn) { setAuthPrompt("save"); return; }
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, [isLoggedIn]);

  const handleAlert = useCallback(() => {
    if (!isLoggedIn) { setAuthPrompt("alert"); return; }
    // TODO: wire to backend alert preferences
  }, [isLoggedIn]);

  const hasFilters = category !== "all" || noticeType !== "all" || contractor !== "all" || deadlineFilter !== "all" || search;

  return (
    <div>
      {/* Auth prompt modal */}
      <AnimatePresence>
        {authPrompt && <AuthPrompt action={authPrompt} onClose={() => setAuthPrompt(null)} />}
      </AnimatePresence>

      {/* Search bar */}
      <div className="bg-white rounded-2xl border border-border shadow-sm mb-5 overflow-hidden">
        <div className="p-4 flex gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder='Search opportunities… (e.g. "welding", "ExxonMobil", "catering")'
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
            onClick={handleAlert}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border text-sm font-medium text-text-secondary hover:border-accent hover:text-accent transition"
            title="Get email alerts for new opportunities"
          >
            <Bell size={15} />
            <span className="hidden sm:inline">Set Alert</span>
          </button>
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
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="border-t border-border px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1.5">Category</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition">
                    <option value="all">All Categories</option>
                    {categories.map((c) => <option key={c} value={c!}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1.5">Contractor</label>
                  <select value={contractor} onChange={(e) => setContractor(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition">
                    <option value="all">All Contractors</option>
                    {contractors.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1.5">Deadline</label>
                  <select value={deadlineFilter} onChange={(e) => setDeadlineFilter(e.target.value as DeadlineFilter)} className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition">
                    <option value="all">Any Deadline</option>
                    <option value="open">Open (not expired)</option>
                    <option value="closing_soon">Closing within 14 days</option>
                    <option value="expired">Expired / Closed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1.5">Sort By</label>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)} className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition">
                    <option value="newest">Newest First</option>
                    <option value="deadline">Deadline (soonest)</option>
                    <option value="title">Title (A–Z)</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pro upsell banner */}
      {!isLoggedIn && (
        <div className="mb-6 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-xl p-4 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-1 min-w-[200px]">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Crown size={18} className="text-amber-400" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Upgrade to Pro for contractor insights</p>
              <p className="text-emerald-200 text-xs">See procurement history, LCA compliance scores, and get early access to new opportunities.</p>
            </div>
          </div>
          <Link href="https://app.lcadesk.com/auth/signup" className="shrink-0 inline-flex items-center gap-1.5 bg-white text-emerald-900 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-emerald-50 transition">
            Learn More <ArrowRight size={12} />
          </Link>
        </div>
      )}

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
            const isSaved = savedIds.has(opp.id);
            const isExpanded = expandedId === opp.id;
            const hasLongDesc = (opp.description || "").length > 120;
            const showFullDesc = isLoggedIn || isExpanded;

            return (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: Math.min(i * 0.025, 0.15) }}
                className={`relative bg-white rounded-xl border overflow-hidden transition-all group ${
                  deadline.expired
                    ? "border-border/50 opacity-70"
                    : deadline.urgent
                      ? "border-amber-200 shadow-sm shadow-amber-100/50"
                      : "border-border/80 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20"
                }`}
              >
                {/* Color accent bar at top */}
                <div className={`h-1 bg-gradient-to-r ${notice.gradient}`} />

                <div className="p-5">
                  {/* Header: notice badge + actions */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${notice.bg} ${notice.text}`}>
                        {opp.notice_type || "Notice"}
                      </span>
                      {deadline.urgent && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                          <Clock size={10} /> {deadline.label}
                        </span>
                      )}
                      {deadline.expired && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-red-500 bg-red-50 px-2 py-0.5 rounded-md">
                          Closed
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleSave(opp.id)}
                      className={`shrink-0 p-1.5 rounded-lg transition ${
                        isSaved
                          ? "text-accent bg-accent/10"
                          : "text-text-muted hover:text-accent hover:bg-accent/5"
                      }`}
                      title={isSaved ? "Saved" : "Save opportunity"}
                    >
                      {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                    </button>
                  </div>

                  {/* Contractor */}
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 size={13} className="text-text-muted shrink-0" />
                    <span className="text-xs font-medium text-text-secondary truncate">{opp.contractor_name}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-text-primary text-[15px] leading-snug mb-2 group-hover:text-accent transition-colors">
                    {opp.title}
                  </h3>

                  {/* Description — gated for non-logged-in users */}
                  {opp.description && (
                    <div className="mb-3">
                      <p className="text-[13px] text-text-secondary leading-relaxed">
                        {!isLoggedIn && hasLongDesc && !isExpanded
                          ? truncate(opp.description, 120)
                          : opp.description}
                      </p>
                      {!isLoggedIn && hasLongDesc && (
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : opp.id)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-accent mt-1.5 hover:underline"
                        >
                          {isExpanded ? (
                            <>Show less <ChevronUp size={12} /></>
                          ) : (
                            <>
                              <Lock size={10} /> Register to read full description
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Tags row */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {opp.lca_category && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-gray-50 text-text-secondary px-2 py-0.5 rounded-md border border-gray-100">
                        <Tag size={10} /> {opp.lca_category}
                      </span>
                    )}
                    {!deadline.expired && !deadline.urgent && opp.deadline && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-text-muted px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100">
                        <Calendar size={10} /> {deadline.label}
                      </span>
                    )}
                  </div>

                  {/* Footer actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-border/30">
                    {opp.source_url ? (
                      <a
                        href={opp.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition group/link"
                      >
                        View Notice <ExternalLink size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href="/suppliers/register"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition group/link"
                      >
                        Register to Apply <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                    {!isLoggedIn && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-text-muted">
                        <BarChart3 size={10} />
                        <span className="hidden sm:inline">Pro: contractor insights</span>
                      </span>
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
