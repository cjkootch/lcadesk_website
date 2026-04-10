import type { MetadataRoute } from "next";
import { fetchOpportunities } from "@/lib/opportunities";
import { posts } from "@/lib/blog";
import type { PublicCompany } from "@/lib/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lcadesk.com";

  // Fixed dates representing when content was last meaningfully updated.
  // Update these when page content actually changes.
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: "2026-04-09", changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/pricing`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/markets`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/features`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/opportunities`, lastModified: "2026-04-01", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/jobs`, lastModified: "2026-04-01", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/security`, lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/demo`, lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/markets/guyana`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/markets/nigeria`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/markets/trinidad`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/markets/ghana`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/markets/mozambique`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/markets/namibia`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/markets/suriname`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: "2026-04-01", changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/changelog`, lastModified: "2026-04-01", changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/lca-filing-calendar`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/lca-act-overview`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/lca-compliance-guide`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/lca-half-yearly-report-guide`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/companies`, lastModified: "2026-04-01", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/suppliers`, lastModified: "2026-04-01", changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/verify`, lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/signup`, lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/for-regulators`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/for-contractors`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for-suppliers`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for-job-seekers`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/training`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/affiliate`, lastModified: "2026-04-10", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: "2026-01-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: "2026-01-01", changeFrequency: "yearly", priority: 0.3 },
  ];

  // Dynamic opportunity pages — use deadline or posted_date when available
  const opportunities = await fetchOpportunities();
  const opportunityPages: MetadataRoute.Sitemap = opportunities.map((opp) => ({
    url: `${baseUrl}/opportunities/${opp.id}`,
    lastModified: opp.posted_date || opp.deadline || "2026-04-01",
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Job pages — use posted_date when available
  let jobPages: MetadataRoute.Sitemap = [];
  try {
    const jobRes = await fetch("https://app.lcadesk.com/api/public/lcs-jobs", { next: { revalidate: 3600 } });
    if (jobRes.ok) {
      const jobData = await jobRes.json();
      const jobs = jobData.jobs ?? [];
      jobPages = jobs.map((j: { id?: string; posted_date?: string | null }, i: number) => ({
        url: `${baseUrl}/jobs/${j.id || i}`,
        lastModified: j.posted_date || "2026-04-01",
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    }
  } catch {}

  // Blog posts — use actual publication date
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Company pages
  let companyPages: MetadataRoute.Sitemap = [];
  try {
    const compRes = await fetch("https://app.lcadesk.com/api/public/companies?sort=opportunities", { next: { revalidate: 3600 } });
    if (compRes.ok) {
      const compData = await compRes.json();
      const companies: PublicCompany[] = compData.companies ?? [];
      companyPages = companies
        .filter((c) => c.activeOpportunities > 0 || c.openJobPostings > 0 || c.lcsRegistered)
        .map((c) => ({
          url: `${baseUrl}/companies/${c.slug}`,
          lastModified: "2026-04-01",
          changeFrequency: "weekly" as const,
          priority: 0.6,
        }));
    }
  } catch {}

  return [...staticPages, ...opportunityPages, ...jobPages, ...blogPages, ...companyPages];
}
