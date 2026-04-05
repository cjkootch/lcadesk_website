"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Users, ExternalLink, Calendar, MapPin, AlertTriangle } from "lucide-react";
import Link from "next/link";
import type { PublicOpportunity } from "@/lib/types";

const categoryColors: Record<string, string> = {
  Managerial: "bg-amber-100 text-amber-700",
  Technical: "bg-blue-100 text-blue-700",
  "Non-Technical": "bg-gray-100 text-gray-600",
};

function formatDate(d: string | null) {
  if (!d) return "\u2014";
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function getDeadlineStyle(deadline: string | null) {
  if (!deadline) return { label: null, className: "" };
  const d = new Date(deadline);
  const now = new Date();
  const diff = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  if (diff < 0) return { label: "Closed", className: "text-red-500" };
  if (diff < 7) return { label: `${Math.ceil(diff)}d left`, className: "text-amber-600 font-semibold" };
  return { label: null, className: "text-text-muted" };
}

interface Props {
  jobs: PublicOpportunity[];
}

export default function JobFilters({ jobs }: Props) {
  const [empCategory, setEmpCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [search, setSearch] = useState("");

  const companies = useMemo(() => {
    const cs = new Set(jobs.map((j) => j.contractor_name));
    return Array.from(cs).sort();
  }, [jobs]);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      if (empCategory !== "all" && j.employment_category !== empCategory) return false;
      if (company !== "all" && j.contractor_name !== company) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !j.title.toLowerCase().includes(q) &&
          !j.contractor_name.toLowerCase().includes(q) &&
          !(j.description || "").toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [jobs, empCategory, company, search]);

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-card rounded-2xl border border-border p-5 mb-8 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search job title or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
          />
        </div>
        <select
          value={empCategory}
          onChange={(e) => setEmpCategory(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition"
        >
          <option value="all">All Categories</option>
          <option value="Managerial">Managerial</option>
          <option value="Technical">Technical</option>
          <option value="Non-Technical">Non-Technical</option>
        </select>
        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition"
        >
          <option value="all">All Companies</option>
          {companies.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-text-muted mb-6">Showing {filtered.length} position{filtered.length === 1 ? "" : "s"}</p>

      {/* Cards grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((job, i) => {
            const deadlineInfo = getDeadlineStyle(job.deadline);
            const empCat = job.employment_category || "Other";
            const badgeColor = categoryColors[empCat] || "bg-gray-100 text-gray-600";
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: Math.min(i * 0.04, 0.3) }}
                className="bg-card rounded-2xl border border-border p-7 card-lift group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeColor}`}>
                      {empCat}
                    </span>
                    <span className="text-[9px] font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                      {"\uD83C\uDDEC\uD83C\uDDFE"} Guyanese Prioritized
                    </span>
                  </div>
                  <span className="text-xs text-text-muted">{formatDate(job.posted_date)}</span>
                </div>

                <h3 className="font-semibold text-text-primary text-[15px] mb-2 leading-snug line-clamp-2">{job.title}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-text-secondary">{job.contractor_name}</span>
                  <span className="text-[9px] font-medium bg-surface text-text-muted px-2 py-0.5 rounded-full border border-border">LCA Filing Client</span>
                </div>

                {job.description && (
                  <p className="text-xs text-text-muted mb-3 line-clamp-2">{job.description}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.location && (
                    <span className="text-[10px] font-medium bg-surface text-text-secondary px-2.5 py-1 rounded-full border border-border inline-flex items-center gap-1">
                      <MapPin size={10} /> {job.location}
                    </span>
                  )}
                  {job.contract_type && (
                    <span className="text-[10px] font-medium bg-surface text-text-secondary px-2.5 py-1 rounded-full border border-border">
                      {job.contract_type}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  {job.deadline ? (
                    <span className={`text-xs flex items-center gap-1 ${deadlineInfo.className}`}>
                      {deadlineInfo.label === "Closed" ? <AlertTriangle size={12} /> : <Calendar size={12} />}
                      Apply by: {formatDate(job.deadline)}
                      {deadlineInfo.label && deadlineInfo.label !== "Closed" && ` \u00b7 ${deadlineInfo.label}`}
                    </span>
                  ) : (
                    <span className="text-xs text-text-muted">Open application</span>
                  )}
                  {job.source_url ? (
                    <a
                      href={job.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1 transition"
                    >
                      View &amp; Apply <ExternalLink size={12} />
                    </a>
                  ) : (
                    <Link
                      href="https://app.lcadesk.com/auth/signup"
                      className="text-xs font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1 transition"
                    >
                      Sign up to apply <ExternalLink size={12} />
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
            <Users size={28} className="text-text-muted" />
          </div>
          <h3 className="font-semibold text-text-primary text-lg mb-2">Job postings loading</h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
            We&apos;re aggregating employment notices from the LCS Register. Register to be notified when positions matching your skills are posted.
          </p>
          <Link
            href="https://app.lcadesk.com/auth/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white hover:shadow-lg shadow-accent/25 transition-all"
          >
            Register as a Job Seeker
          </Link>
        </div>
      )}
    </div>
  );
}
