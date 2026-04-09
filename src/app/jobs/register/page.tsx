"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Check, UserPlus } from "lucide-react";
import GeometricBg from "@/components/GeometricBg";

export default function JobSeekerRegister() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const applyJobId = searchParams?.get("apply") ?? null;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    isGuyanese: true,
    employmentCategory: "",
    currentJobTitle: "",
    locationPreference: "Any",
    alertsEnabled: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function update(field: string, value: string | boolean) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com"}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            role: "job_seeker",
            name: form.fullName,
            email: form.email,
            password: form.password,
            companyName: "Job Seeker",
            phone: form.phone || undefined,
            is_guyanese: form.isGuyanese,
            employment_category: form.employmentCategory || undefined,
            current_job_title: form.currentJobTitle || undefined,
            location_preference: form.locationPreference,
            alerts_enabled: form.alertsEnabled,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");

      // Redirect to app login after registration
      const loginUrl = `${process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com"}/auth/login?role=job_seeker&registered=true${applyJobId ? `&apply=${applyJobId}` : ""}`;
      window.location.href = loginUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden bg-surface min-h-screen">
        <GeometricBg variant="waves" />
        <div className="absolute top-20 right-[15%] w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-xl mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mx-auto mb-5">
                <UserPlus size={24} className="text-accent" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl text-text-primary mb-3">
                Register as a <span className="gradient-text-static">Job Seeker</span>
              </h1>
              <p className="text-text-secondary text-sm">
                Create your profile to apply for positions and receive job alerts from contractors with LCA filing obligations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">{error}</div>
              )}

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Password *</label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                  placeholder="Minimum 8 characters"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Phone <span className="text-text-muted">(optional)</span></label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                  placeholder="+592 ..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Employment Category</label>
                  <select
                    value={form.employmentCategory}
                    onChange={(e) => update("employmentCategory", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition"
                  >
                    <option value="">Select category</option>
                    <option value="Managerial">Managerial</option>
                    <option value="Technical">Technical</option>
                    <option value="Non-Technical">Non-Technical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Location Preference</label>
                  <select
                    value={form.locationPreference}
                    onChange={(e) => update("locationPreference", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-text-secondary focus:outline-none focus:border-accent transition"
                  >
                    <option value="Any">Any location</option>
                    <option value="Georgetown">Georgetown</option>
                    <option value="Offshore">Offshore</option>
                    <option value="East Bank Demerara">East Bank Demerara</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Current Job Title <span className="text-text-muted">(optional)</span></label>
                <input
                  type="text"
                  value={form.currentJobTitle}
                  onChange={(e) => update("currentJobTitle", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                  placeholder="e.g. Welder, Logistics Coordinator"
                />
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition ${form.isGuyanese ? "bg-accent border-accent" : "border-border group-hover:border-accent/50"}`}>
                    {form.isGuyanese && <Check size={12} className="text-white" />}
                  </div>
                  <input type="checkbox" className="sr-only" checked={form.isGuyanese} onChange={(e) => update("isGuyanese", e.target.checked)} />
                  <span className="text-sm text-text-secondary">I am a Guyanese national or permanent resident</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition ${form.alertsEnabled ? "bg-accent border-accent" : "border-border group-hover:border-accent/50"}`}>
                    {form.alertsEnabled && <Check size={12} className="text-white" />}
                  </div>
                  <input type="checkbox" className="sr-only" checked={form.alertsEnabled} onChange={(e) => update("alertsEnabled", e.target.checked)} />
                  <span className="text-sm text-text-secondary">Send me email alerts when matching jobs are posted</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? "Creating account..." : "Create Account"}
                {!loading && <ArrowRight size={16} />}
              </button>

              <p className="text-xs text-text-muted text-center pt-2">
                Already have an account?{" "}
                <Link href="https://app.lcadesk.com/auth/login" className="text-accent hover:underline font-medium">Log in</Link>
              </p>
            </form>

            <p className="text-xs text-text-muted text-center mt-6 max-w-sm mx-auto">
              By registering, you agree to LCA Desk&apos;s{" "}
              <Link href="/terms" className="text-accent hover:underline">Terms of Service</Link> and{" "}
              <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
