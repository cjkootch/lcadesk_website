"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, ExternalLink, Calendar, AlertTriangle } from "lucide-react";
import Link from "next/link";
import type { PublicOpportunity } from "@/lib/types";

const noticeColors: Record<string, string> = {
  EOI: "bg-blue-100 text-blue-700",
  RFQ: "bg-amber-100 text-amber-700",
  RFP: "bg-emerald-100 text-emerald-700",
  RFI: "bg-purple-100 text-purple-700",
};

function getDeadlineStyle(deadline: string | null) {
  if (!deadline) return { label: null, className: "" };
  const d = new Date(deadline);
  const now = new Date();
  const diff = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  if (diff < 0) return { label: "Expired", className: "text-red-500" };
  if (diff < 7) return { label: `${Math.ceil(diff)}d left`, className: "text-amber-600 font-semibold" };
  return { label: null, className: "text-text-muted" };
}

function formatDate(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
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

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-card rounded-2xl border border-border p-5 mb-8 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search company or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
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
          <option value="EOI">EOI</option>
          <option value="RFQ">RFQ</option>
          <option value="RFP">RFP</option>
          <option value="RFI">RFI</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-text-muted mb-6">Showing {filtered.length} opportunit{filtered.length === 1 ? "y" : "ies"}</p>

      {/* Cards grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((opp, i) => {
            const deadlineInfo = getDeadlineStyle(opp.deadline);
            const badge = opp.notice_type || "Other";
            const badgeColor = noticeColors[badge] || "bg-gray-100 text-gray-600";
            return (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: Math.min(i * 0.04, 0.3) }}
                className="bg-card rounded-2xl border border-border p-7 card-lift group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeColor}`}>
                    {badge}
                  </span>
                  <span className="text-xs text-text-muted">{formatDate(opp.posted_date)}</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-text-secondary">{opp.contractor_name}</span>
                  <span className="text-[9px] font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-full">LCA Filer</span>
                </div>

                <h3 className="font-semibold text-text-primary text-[15px] mb-3 leading-snug line-clamp-2">{opp.title}</h3>

                {opp.description && (
                  <p className="text-xs text-text-muted mb-3 line-clamp-2">{opp.description}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {opp.lca_category && (
                    <span className="text-[10px] font-medium bg-surface text-text-secondary px-2.5 py-1 rounded-full border border-border">
                      {opp.lca_category}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  {opp.deadline ? (
                    <span className={`text-xs flex items-center gap-1 ${deadlineInfo.className}`}>
                      {deadlineInfo.label === "Expired" ? <AlertTriangle size={12} /> : <Calendar size={12} />}
                      Deadline: {formatDate(opp.deadline)}
                      {deadlineInfo.label && deadlineInfo.label !== "Expired" && ` · ${deadlineInfo.label}`}
                    </span>
                  ) : (
                    <span className="text-xs text-text-muted">Open deadline</span>
                  )}
                  {opp.source_url ? (
                    <a
                      href={opp.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1 transition"
                    >
                      View Notice <ExternalLink size={12} />
                    </a>
                  ) : (
                    <Link
                      href="https://app.lcadesk.com/auth/signup"
                      className="text-xs font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1 transition"
                    >
                      Sign up to view <ExternalLink size={12} />
                    </Link>
                  )}
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
          <h3 className="font-semibold text-text-primary text-lg mb-2">Opportunities loading</h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
            We&apos;re populating this board from the Local Content Register. Check back shortly — or register to receive alerts when opportunities are posted in your category.
          </p>
          <Link
            href="https://app.lcadesk.com/auth/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white hover:shadow-lg shadow-accent/25 transition-all"
          >
            Register as a Supplier
          </Link>
        </div>
      )}
    </div>
  );
}
