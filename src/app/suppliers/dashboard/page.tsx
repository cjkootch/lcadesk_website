import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/public-auth";
import { Building2, Bell, ShieldCheck, Briefcase, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: "Supplier Dashboard | LCA Desk" };

export default async function SupplierDashboard() {
  const session = await getSession("supplier");
  if (!session) redirect("/suppliers/login");

  return (
    <section className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="font-display text-3xl text-text-primary mb-2">
            Welcome, <span className="gradient-text-static">{session.name}</span>
          </h1>
          <p className="text-text-secondary text-sm">Manage your supplier profile and view procurement opportunities.</p>
        </div>

        {/* Profile + Cert status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-card rounded-2xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 size={20} className="text-accent" />
              <h3 className="font-semibold text-text-primary">Company Profile</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-text-secondary"><span className="text-text-muted">Email:</span> {session.email}</p>
              <p className="text-text-secondary"><span className="text-text-muted">Visibility:</span> Public</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-accent" />
              <h3 className="font-semibold text-text-primary">LCS Certificate Status</h3>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" />
              <p className="text-sm text-text-secondary">Not yet verified &mdash; <Link href="/suppliers/register" className="text-accent hover:underline">verify your certificate</Link></p>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Link href="/opportunities" className="bg-card rounded-2xl border border-border p-5 card-lift group">
            <Briefcase size={20} className="text-accent mb-3" />
            <h3 className="font-semibold text-text-primary text-sm mb-1">Browse Opportunities</h3>
            <p className="text-xs text-text-muted">View active procurement notices</p>
          </Link>
          <div className="bg-card rounded-2xl border border-border p-5">
            <Bell size={20} className="text-accent mb-3" />
            <h3 className="font-semibold text-text-primary text-sm mb-1">Procurement Alerts</h3>
            <p className="text-xs text-text-muted">Active &mdash; alerts in your categories</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-5">
            <ShieldCheck size={20} className="text-accent mb-3" />
            <h3 className="font-semibold text-text-primary text-sm mb-1">Upgrade to Pro</h3>
            <p className="text-xs text-text-muted">Featured listings &amp; priority alerts</p>
          </div>
        </div>

        {/* Matching opportunities */}
        <div className="mb-6">
          <h2 className="font-display text-xl text-text-primary mb-1">Opportunities in Your Categories</h2>
          <p className="text-sm text-text-muted">Procurement notices matching your service categories.</p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center mx-auto mb-4">
            <Briefcase size={24} className="text-text-muted" />
          </div>
          <h3 className="font-semibold text-text-primary mb-2">No matching opportunities yet</h3>
          <p className="text-sm text-text-secondary mb-6 max-w-sm mx-auto">
            We&apos;ll notify you when contractors post procurement notices in your service categories.
          </p>
          <Link href="/opportunities" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white hover:shadow-lg transition-all">
            Browse All Opportunities <ArrowRight size={16} />
          </Link>
        </div>

        {/* Logout */}
        <div className="mt-10 text-center">
          <Link href="/api/auth/logout?type=supplier" className="text-xs text-text-muted hover:text-accent transition">
            Log out
          </Link>
        </div>
      </div>
    </section>
  );
}
