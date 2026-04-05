import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/public-auth";
import { Briefcase, Bell, User, ArrowRight, Clock, CheckCircle2, XCircle, Search } from "lucide-react";

export const metadata = { title: "My Applications | LCA Desk Jobs" };

const statusConfig: Record<string, { label: string; color: string; icon: typeof Clock }> = {
  received: { label: "Received", color: "bg-gray-100 text-gray-600", icon: Clock },
  reviewing: { label: "Reviewing", color: "bg-blue-100 text-blue-700", icon: Search },
  shortlisted: { label: "Shortlisted", color: "bg-amber-100 text-amber-700", icon: CheckCircle2 },
  interviewed: { label: "Interviewed", color: "bg-purple-100 text-purple-700", icon: User },
  selected: { label: "Selected", color: "bg-emerald-100 text-emerald-700", icon: CheckCircle2 },
  rejected: { label: "Not Selected", color: "bg-red-100 text-red-600", icon: XCircle },
};

interface Application {
  id: string;
  job_title: string;
  company_name: string;
  applied_date: string;
  status: string;
  employment_category: string;
}

async function getApplications(token: string): Promise<Application[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com"}/api/public/job-seekers/applications`,
      { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.applications || [];
  } catch {
    return [];
  }
}

export default async function JobSeekerDashboard() {
  const session = await getSession("seeker");
  if (!session) redirect("/jobs/login");

  // We'd get the token from cookies to fetch applications
  // For now, show the dashboard shell
  const applications: Application[] = [];

  return (
    <section className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="font-display text-3xl text-text-primary mb-2">
            Welcome back, <span className="gradient-text-static">{session.name}</span>
          </h1>
          <p className="text-text-secondary text-sm">Track your applications and manage your job alerts.</p>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Link href="/jobs" className="bg-card rounded-2xl border border-border p-5 card-lift group">
            <Briefcase size={20} className="text-accent mb-3" />
            <h3 className="font-semibold text-text-primary text-sm mb-1">Browse Jobs</h3>
            <p className="text-xs text-text-muted">View open positions</p>
          </Link>
          <div className="bg-card rounded-2xl border border-border p-5">
            <Bell size={20} className="text-accent mb-3" />
            <h3 className="font-semibold text-text-primary text-sm mb-1">Job Alerts</h3>
            <p className="text-xs text-text-muted">Active &mdash; you&apos;ll receive email notifications</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-5">
            <User size={20} className="text-accent mb-3" />
            <h3 className="font-semibold text-text-primary text-sm mb-1">My Profile</h3>
            <p className="text-xs text-text-muted">{session.email}</p>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-6">
          <h2 className="font-display text-xl text-text-primary mb-1">My Applications</h2>
          <p className="text-sm text-text-muted">{applications.length} application{applications.length !== 1 ? "s" : ""}</p>
        </div>

        {applications.length > 0 ? (
          <div className="space-y-4">
            {applications.map((app) => {
              const st = statusConfig[app.status] || statusConfig.received;
              const StatusIcon = st.icon;
              return (
                <div key={app.id} className="bg-card rounded-2xl border border-border p-6 flex items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary text-sm">{app.job_title}</h3>
                    <p className="text-xs text-text-muted mt-0.5">{app.company_name} &middot; Applied {new Date(app.applied_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full inline-flex items-center gap-1 ${st.color}`}>
                    <StatusIcon size={12} />
                    {st.label}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-card rounded-2xl border border-border p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center mx-auto mb-4">
              <Briefcase size={24} className="text-text-muted" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">No applications yet</h3>
            <p className="text-sm text-text-secondary mb-6 max-w-sm mx-auto">
              Browse the jobs board to find positions posted by contractors with LCA filing obligations.
            </p>
            <Link href="/jobs" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white hover:shadow-lg transition-all">
              Browse Jobs <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* Logout */}
        <div className="mt-10 text-center">
          <Link href="/api/auth/logout?type=seeker" className="text-xs text-text-muted hover:text-accent transition">
            Log out
          </Link>
        </div>
      </div>
    </section>
  );
}
