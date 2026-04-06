"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Users, ExternalLink, Calendar, MapPin, AlertTriangle,
  Building2, Tag, ArrowRight, X, SlidersHorizontal, Clock,
  Bookmark, BookmarkCheck, Bell, Lock, Crown,
  ChevronDown, ChevronUp, Sparkles, Briefcase, DollarSign,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import type { PublicJob } from "@/lib/types";
import { getContractorLogo } from "@/lib/contractor-logos";

/* ── Contractor logo with fallback ──────────────────────────────── */

function ContractorLogo({ name, size = 16 }: { name: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const logoUrl = getContractorLogo(name);

  if (!logoUrl || failed) {
    return <Building2 size={size - 3} className="text-text-muted shrink-0" />;
  }

  return (
    <img
      src={logoUrl}
      alt=""
      width={size}
      height={size}
      className="rounded-sm object-contain shrink-0"
      style={{ width: size, height: size }}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

/* ── Category config ───────────────────────────────────────────── */

const categoryConfig: Record<string, { bg: string; text: string; dot: string; gradient: string }> = {
  Management: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", gradient: "from-amber-500 to-yellow-500" },
  Technical: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500", gradient: "from-blue-500 to-cyan-500" },
  Administrative: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500", gradient: "from-purple-500 to-purple-600" },
  "Skilled Labour": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500", gradient: "from-emerald-500 to-emerald-600" },
  "Semi-Skilled Labour": { bg: "bg-cyan-50", text: "text-cyan-700", dot: "bg-cyan-500", gradient: "from-cyan-500 to-cyan-600" },
  "Unskilled Labour": { bg: "bg-gray-50", text: "text-gray-600", dot: "bg-gray-400", gradient: "from-gray-400 to-slate-500" },
};

const defaultCat = { bg: "bg-gray-50", text: "text-gray-600", dot: "bg-gray-400", gradient: "from-gray-400 to-gray-500" };

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

function formatDeadline(deadline: string) {
  return new Date(deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function truncate(str: string, len: number) {
  if (str.length <= len) return str;
  return str.slice(0, len).replace(/\s+\S*$/, "") + "\u2026";
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
          {action === "save" ? "Save Jobs" : "Set Up Job Alerts"}
        </h3>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
          {action === "save"
            ? "Create a free account to save jobs and track your applications."
            : "Register to receive email alerts when new positions match your skills and preferences."}
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/jobs/register"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Register Free <ArrowRight size={14} />
          </Link>
          <Link
            href="/jobs/login"
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
  jobs: PublicJob[];
  isLoggedIn?: boolean;
}

export default function JobFilters({ jobs, isLoggedIn = false }: Props) {
  const [empCategory, setEmpCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [deadlineFilter, setDeadlineFilter] = useState<DeadlineFilter>("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [authPrompt, setAuthPrompt] = useState<string | null>(null);

  const companies = useMemo(() => {
    const cs = new Set(jobs.map((j) => j.company_name).filter((n) => n && n !== "Unknown"));
    return Array.from(cs).sort();
  }, [jobs]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    jobs.forEach((j) => {
      const c = j.employment_category || "Other";
      counts[c] = (counts[c] || 0) + 1;
    });
    return counts;
  }, [jobs]);

  const activeFilterCount = [
    empCategory !== "all",
    company !== "all",
    deadlineFilter !== "all",
  ].filter(Boolean).length;

  const filtered = useMemo(() => {
    const results = jobs.filter((j) => {
      if (empCategory !== "all" && j.employment_category !== empCategory) return false;
      if (company !== "all" && j.company_name !== company) return false;
      if (deadlineFilter !== "all") {
        const info = getDeadlineInfo(j.closing_date);
        if (deadlineFilter === "open" && info.expired) return false;
        if (deadlineFilter === "closing_soon" && (info.expired || info.daysLeft > 14)) return false;
        if (deadlineFilter === "expired" && !info.expired) return false;
      }
      if (search) {
        const q = search.toLowerCase();
        const fields = [j.job_title, j.company_name, j.summary || "", j.ai_teaser || "", j.department || "", j.location || "", j.employment_category || ""];
        if (!fields.some((f) => f.toLowerCase().includes(q))) return false;
      }
      return true;
    });

    results.sort((a, b) => {
      // Always push expired to the bottom
      const aExpired = getDeadlineInfo(a.closing_date).expired;
      const bExpired = getDeadlineInfo(b.closing_date).expired;
      if (aExpired !== bExpired) return aExpired ? 1 : -1;

      if (sortBy === "deadline") {
        const da = a.closing_date ? new Date(a.closing_date).getTime() : Infinity;
        const db = b.closing_date ? new Date(b.closing_date).getTime() : Infinity;
        return da - db;
      }
      if (sortBy === "title") return a.job_title.localeCompare(b.job_title);
      // Default: most complete listings first (more filled fields = higher rank)
      const completeness = (j: typeof a) => {
        let score = 0;
        if (j.ai_teaser) score += 3;
        if (j.responsibilities && j.responsibilities.length > 0) score += 2;
        if (j.skills && j.skills.length > 0) score += 2;
        if (j.experience_required) score += 1;
        if (j.education_required) score += 1;
        if (j.salary_range) score += 1;
        if (j.how_to_apply) score += 1;
        if (j.location) score += 1;
        if (j.employment_type) score += 1;
        if (j.employment_category) score += 1;
        if (j.company_name && j.company_name !== "Unknown") score += 1;
        return score;
      };
      const diff = completeness(b) - completeness(a);
      if (diff !== 0) return diff;
      // Tiebreak: newest first
      const pa = a.posted_date ? new Date(a.posted_date).getTime() : 0;
      const pb = b.posted_date ? new Date(b.posted_date).getTime() : 0;
      return pb - pa || b.id.localeCompare(a.id);
    });

    return results;
  }, [jobs, empCategory, company, deadlineFilter, search, sortBy]);

  function clearAll() {
    setEmpCategory("all");
    setCompany("all");
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
  }, [isLoggedIn]);

  const hasFilters = empCategory !== "all" || company !== "all" || deadlineFilter !== "all" || search;

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
              placeholder='Search jobs\u2026 (e.g. "engineer", "ExxonMobil", "HSE")'
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
            title="Get email alerts for new positions"
          >
            <Bell size={15} />
            <span className="hidden sm:inline">Job Alert</span>
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

        {/* Category quick pills */}
        <div className="px-4 pb-4 flex flex-wrap gap-2">
          {Object.entries(categoryConfig).map(([key, cfg]) => {
            const count = categoryCounts[key] || 0;
            const active = empCategory === key;
            return (
              <button
                key={key}
                onClick={() => setEmpCategory(active ? "all" : key)}
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
              <div className="border-t border-border px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-text-muted uppercase tracking-wider mb-1.5">Company</label>
                  <select value={company} onChange={(e) => setCompany(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition">
                    <option value="all">All Companies</option>
                    {companies.map((c) => <option key={c} value={c}>{c}</option>)}
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
                    <option value="newest">Most Complete</option>
                    <option value="deadline">Deadline (soonest)</option>
                    <option value="title">Title (A\u2013Z)</option>
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
              <p className="text-white text-sm font-semibold">Get AI-powered job matching &amp; insights</p>
              <p className="text-emerald-200 text-xs">See role requirements, salary context, and how your profile matches \u2014 powered by AI analysis of each posting.</p>
            </div>
          </div>
          <Link href="/jobs/register" className="shrink-0 inline-flex items-center gap-1.5 bg-white text-emerald-900 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-emerald-50 transition">
            Register Free <ArrowRight size={12} />
          </Link>
        </div>
      )}

      {/* Active filter chips + results count */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm text-text-muted">
            <span className="font-semibold text-text-primary">{filtered.length}</span> position{filtered.length === 1 ? "" : "s"}
          </p>
          {empCategory !== "all" && (
            <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">
              {empCategory} <button onClick={() => setEmpCategory("all")}><X size={11} /></button>
            </span>
          )}
          {company !== "all" && (
            <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">
              {company} <button onClick={() => setCompany("all")}><X size={11} /></button>
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
          {filtered.map((job, i) => {
            const catCfg = categoryConfig[job.employment_category || ""] || defaultCat;
            const deadline = getDeadlineInfo(job.closing_date);
            const isSaved = savedIds.has(job.id);

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: Math.min(i * 0.025, 0.15) }}
                className={`relative bg-white rounded-xl border overflow-hidden transition-all group ${
                  deadline.expired
                    ? "border-gray-200 bg-gray-50/50"
                    : deadline.urgent
                      ? "border-amber-200 shadow-sm shadow-amber-100/50"
                      : "border-border/80 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20"
                }`}
              >
                {/* Color accent bar */}
                <div className={`h-1 bg-gradient-to-r ${deadline.expired ? "from-gray-300 to-gray-300" : catCfg.gradient}`} />

                <div className="p-5">
                  {/* Header: category badge + save */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                        deadline.expired ? "bg-gray-100 text-gray-500" : `${catCfg.bg} ${catCfg.text}`
                      }`}>
                        {job.employment_category || "Other"}
                      </span>
                      {job.guyanese_first_consideration && !deadline.expired && (
                        <span className="text-[9px] font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                          {"\uD83C\uDDEC\uD83C\uDDFE"} Guyanese Prioritized
                        </span>
                      )}
                      {deadline.urgent && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md animate-pulse">
                          <Clock size={10} /> {deadline.label}
                        </span>
                      )}
                      {deadline.expired && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                          Closed
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleSave(job.id)}
                      className={`shrink-0 p-1.5 rounded-lg transition ${
                        isSaved
                          ? "text-accent bg-accent/10"
                          : "text-text-muted hover:text-accent hover:bg-accent/5"
                      }`}
                      title={isSaved ? "Saved" : "Save job"}
                    >
                      {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                    </button>
                  </div>

                  {/* Company with logo */}
                  {job.company_name && job.company_name !== "Unknown" && (
                    <div className="flex items-center gap-2 mb-2">
                      <ContractorLogo name={job.company_name} size={16} />
                      <span className="text-xs font-medium text-text-secondary truncate">{job.company_name}</span>
                      {job.department && (
                        <span className="text-[10px] text-text-muted">&middot; {job.department}</span>
                      )}
                    </div>
                  )}

                  {/* Job title */}
                  <h3 className={`font-semibold text-[15px] leading-snug mb-2 transition-colors ${
                    deadline.expired ? "text-text-muted" : "text-text-primary group-hover:text-accent"
                  }`}>
                    <Link href={`/jobs/${job.id}`} className="hover:underline">
                      {job.job_title}
                    </Link>
                  </h3>

                  {/* AI Teaser with blur gate */}
                  {job.ai_teaser && (
                    <div className="mb-3">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Sparkles size={12} className="text-purple-500" />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-600">AI Summary</span>
                      </div>
                      <div className="relative">
                        <p className="text-[13px] text-text-secondary leading-relaxed">
                          {truncate(job.ai_teaser, 80)}
                        </p>
                        {job.ai_teaser.length > 80 && (
                          <div className="relative mt-1">
                            <p className="text-[13px] text-text-secondary leading-relaxed select-none" style={{ filter: "blur(4px)", WebkitUserSelect: "none" }}>
                              {job.ai_teaser.slice(80, 200)}
                            </p>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white flex items-end justify-center pb-1">
                              <Link
                                href="/jobs/register"
                                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-purple-600 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full hover:bg-purple-100 transition"
                              >
                                <Lock size={10} /> Register to see full details
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Description fallback — only show if no AI teaser */}
                  {!job.ai_teaser && job.summary && (
                    <div className="mb-3">
                      <p className="text-[13px] text-text-secondary leading-relaxed">
                        {truncate(job.summary, 120)}
                      </p>
                    </div>
                  )}

                  {/* Tags row: deadline, location, salary, type */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {job.closing_date && (
                      <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                        deadline.expired
                          ? "bg-red-50 text-red-600 border-red-200"
                          : deadline.urgent
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-gray-50 text-text-secondary border-gray-100"
                      }`}>
                        <Calendar size={10} />
                        {deadline.expired ? `Closed ${formatDeadline(job.closing_date)}` : `Closes ${formatDeadline(job.closing_date)}`}
                      </span>
                    )}
                    {!job.closing_date && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-text-muted px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100">
                        <Calendar size={10} /> Open deadline
                      </span>
                    )}
                    {job.location && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-gray-50 text-text-secondary px-2 py-0.5 rounded-md border border-gray-100">
                        <MapPin size={10} /> {job.location}
                      </span>
                    )}
                    {job.employment_type && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-gray-50 text-text-secondary px-2 py-0.5 rounded-md border border-gray-100">
                        {job.employment_type}
                      </span>
                    )}
                    {job.salary_range && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md border border-emerald-100">
                        <DollarSign size={10} /> {job.salary_range}
                      </span>
                    )}
                    {job.experience_required && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-purple-50 text-purple-700 px-2 py-0.5 rounded-md border border-purple-100">
                        <Briefcase size={10} /> {job.experience_required}
                      </span>
                    )}
                    {job.education_required && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-100">
                        <GraduationCap size={10} /> {job.education_required}
                      </span>
                    )}
                  </div>

                  {/* Footer actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-border/30">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/jobs/${job.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition group/link"
                      >
                        View Details <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                      {job.source_url && (
                        <a
                          href={job.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition"
                        >
                          Apply <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    {job.posted_date && (
                      <span className="text-[10px] text-text-muted">
                        Posted {new Date(job.posted_date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
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
            <Users size={28} className="text-text-muted" />
          </div>
          <h3 className="font-semibold text-text-primary text-lg mb-2">
            {hasFilters ? "No matching positions" : "Job postings loading"}
          </h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
            {hasFilters
              ? "Try adjusting your filters or search terms."
              : "We\u2019re aggregating employment notices from the LCS Register. Register to be notified when positions matching your skills are posted."}
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
              href="/jobs/register"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white hover:shadow-lg shadow-accent/25 transition-all"
            >
              Register as a Job Seeker
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
