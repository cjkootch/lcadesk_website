"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, ExternalLink, Calendar, AlertTriangle, Building2, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PublicOpportunity } from "@/lib/types";

const noticeConfig: Record<string, { bg: string; text: string; border: string; label: string }> = {
  EOI: { bg: "bg-blue-50", text: "text-blue-700", border: "border-l-blue-500", label: "Expression of Interest" },
  RFQ: { bg: "bg-amber-50", text: "text-amber-700", border: "border-l-amber-500", label: "Request for Quotation" },
  RFP: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-l-emerald-600", label: "Request for Proposal" },
  RFI: { bg: "bg-purple-50", text: "text-purple-700", border: "border-l-purple-500", label: "Request for Information" },
};

const defaultNotice = { bg: "bg-gray-50", text: "text-gray-600", border: "border-l-gray-400", label: "Notice" };

function getDeadlineInfo(deadline: string | null) {
  if (!deadline) return { label: "Open deadline", urgent: false, expired: false };
  const d = new Date(deadline);
  const now = new Date();
  const diff = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  const formatted = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  if (diff < 0) return { label: `Closed ${formatted}`, urgent: false, expired: true };
  if (diff < 7) return { label: `${Math.ceil(diff)}d left \u2013 ${formatted}`, urgent: true, expired: false };
  if (diff < 14) return { label: `Due ${formatted}`, urgent: false, expired: false };
  return { label: `Due ${formatted}`, urgent: false, expired: false };
}

interface Props {
  opportunities: PublicOpportunity[];
}

export default function OpportunityFilters({ opportunities }: Props) {
  const [category, setCategory] = useState("all");
  const [noticeType, setNoticeType] = useState("all");
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    const cats = new Set(opportunities.map((o) => o.lca_category).filter(Boolean));
    return Array.from(cats).sort();
  }, [opportunities]);

  const filtered = useMemo(() => {
    return opportunities.filter((o) => {
      if (category !== "all" && o.lca_category !== category) return false;
      if (noticeType !== "all" && o.notice_type !== noticeType) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !o.title.toLowerCase().includes(q) &&
          !o.contractor_name.toLowerCase().includes(q) &&
          !(o.description || "").toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [opportunities, category, noticeType, search]);

  const noticeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    opportunities.forEach((o) => {
      const t = o.notice_type || "Other";
      counts[t] = (counts[t] || 0) + 1;
    });
    return counts;
  }, [opportunities]);

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-white rounded-2xl border border-border shadow-sm p-5 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search by title, company, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c!}>{c}</option>
            ))}
          </select>
          <select
            value={noticeType}
            onChange={(e) => setNoticeType(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition"
          >
            <option value="all">All Notice Types</option>
            {Object.entries(noticeConfig).map(([key, cfg]) => (
              <option key={key} value={key}>{key} — {cfg.label} {noticeCounts[key] ? `(${noticeCounts[key]})` : ""}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-text-muted">
          Showing <span className="font-semibold text-text-primary">{filtered.length}</span> opportunit{filtered.length === 1 ? "y" : "ies"}
        </p>
        {(category !== "all" || noticeType !== "all" || search) && (
          <button
            onClick={() => { setCategory("all"); setNoticeType("all"); setSearch(""); }}
            className="text-xs text-accent hover:underline"
          >
            Clear filters
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
                    <span className={`text-[11px] flex items-center gap-1 ${deadline.expired ? "text-red-400 line-through" : deadline.urgent ? "text-amber-600 font-semibold" : "text-text-muted"}`}>
                      {deadline.urgent && <AlertTriangle size={11} />}
                      {deadline.expired && <AlertTriangle size={11} />}
                      {!deadline.urgent && !deadline.expired && <Calendar size={11} />}
                      {deadline.label}
                    </span>
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
            {search || category !== "all" || noticeType !== "all" ? "No matching opportunities" : "Opportunities loading"}
          </h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
            {search || category !== "all" || noticeType !== "all"
              ? "Try adjusting your filters or search terms."
              : "We\u2019re populating this board from the Local Content Register. Check back shortly \u2014 or register to receive alerts when opportunities are posted in your category."}
          </p>
          {!(search || category !== "all" || noticeType !== "all") && (
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
