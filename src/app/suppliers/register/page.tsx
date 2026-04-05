"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Check, Building2, ShieldCheck, AlertTriangle, Loader2 } from "lucide-react";
import GeometricBg from "@/components/GeometricBg";

const serviceCategories = [
  "Construction & Fabrication",
  "Transportation & Logistics",
  "Maintenance & Repair",
  "Engineering & Technical",
  "Catering & Hospitality",
  "Training & Development",
  "Medical & HSE",
  "Marine & Offshore",
  "Environmental Services",
  "Information Technology",
  "Professional Services",
  "Security Services",
  "Waste Management",
  "Equipment Supply & Rental",
];

export default function SupplierRegister() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    legalName: "",
    tradingName: "",
    contactName: "",
    email: "",
    password: "",
    phone: "",
    lcsCertId: "",
    selectedCategories: [] as string[],
  });
  const [verification, setVerification] = useState<{
    status: "idle" | "verifying" | "verified" | "not_found" | "expired";
    companyName?: string;
    expiryDate?: string;
    categories?: string[];
  }>({ status: "idle" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function update(field: string, value: string | string[]) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function toggleCategory(cat: string) {
    setForm((f) => ({
      ...f,
      selectedCategories: f.selectedCategories.includes(cat)
        ? f.selectedCategories.filter((c) => c !== cat)
        : [...f.selectedCategories, cat],
    }));
  }

  async function verifyCert() {
    if (!form.lcsCertId.trim()) return;
    setVerification({ status: "verifying" });

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com"}/api/public/suppliers/verify`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cert_id: form.lcsCertId }),
        }
      );
      const data = await res.json();

      if (data.found && data.status === "approved") {
        setVerification({
          status: "verified",
          companyName: data.company_name,
          expiryDate: data.expiry_date,
          categories: data.categories,
        });
        if (data.categories?.length) {
          update("selectedCategories", data.categories);
        }
      } else if (data.found && data.status === "expired") {
        setVerification({
          status: "expired",
          companyName: data.company_name,
          expiryDate: data.expiry_date,
        });
      } else {
        setVerification({ status: "not_found" });
      }
    } catch {
      setVerification({ status: "not_found" });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com"}/api/public/suppliers/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            legal_name: form.legalName,
            trading_name: form.tradingName || undefined,
            contact_name: form.contactName,
            email: form.email,
            password: form.password,
            phone: form.phone || undefined,
            lcs_cert_id: form.lcsCertId || undefined,
            service_categories: form.selectedCategories,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");

      router.push("/opportunities?registered=true");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-surface min-h-screen">
      <GeometricBg variant="grid" />
      <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-xl mx-auto px-6 z-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mx-auto mb-5">
              <Building2 size={24} className="text-accent" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-text-primary mb-3">
              Register as a <span className="gradient-text-static">Supplier</span>
            </h1>
            <p className="text-text-secondary text-sm">
              Get discovered by contractors and receive procurement alerts in your service categories.
            </p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition ${
                  step >= s ? "bg-accent text-white" : "bg-surface border border-border text-text-muted"
                }`}>{s}</div>
                {s < 3 && <div className={`w-8 h-px ${step > s ? "bg-accent" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">{error}</div>
            )}

            {/* Step 1: Basic details */}
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Company Legal Name *</label>
                  <input type="text" required value={form.legalName} onChange={(e) => update("legalName", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                    placeholder="e.g. ABC Services Inc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Trading Name <span className="text-text-muted">(optional)</span></label>
                  <input type="text" value={form.tradingName} onChange={(e) => update("tradingName", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Contact Name *</label>
                  <input type="text" required value={form.contactName} onChange={(e) => update("contactName", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Password *</label>
                  <input type="password" required minLength={8} value={form.password} onChange={(e) => update("password", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                    placeholder="Minimum 8 characters" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Phone <span className="text-text-muted">(optional)</span></label>
                  <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                    placeholder="+592 ..." />
                </div>
                <button type="button" onClick={() => setStep(2)}
                  disabled={!form.legalName || !form.contactName || !form.email || !form.password}
                  className="w-full rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl transition-all disabled:opacity-40 flex items-center justify-center gap-2">
                  Continue <ArrowRight size={16} />
                </button>
              </>
            )}

            {/* Step 2: LCS Verification */}
            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">LCS Certificate ID</label>
                  <p className="text-xs text-text-muted mb-2">Optional. If you have a Local Content Secretariat certificate, enter your ID to verify your registration.</p>
                  <div className="flex gap-2">
                    <input type="text" value={form.lcsCertId} onChange={(e) => update("lcsCertId", e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                      placeholder="LCSR-xxxxxxxx" />
                    <button type="button" onClick={verifyCert}
                      disabled={!form.lcsCertId.trim() || verification.status === "verifying"}
                      className="px-5 py-2.5 rounded-xl border-2 border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all disabled:opacity-40 flex items-center gap-1.5">
                      {verification.status === "verifying" ? <Loader2 size={14} className="animate-spin" /> : <ShieldCheck size={14} />}
                      Verify
                    </button>
                  </div>
                </div>

                {/* Verification result */}
                {verification.status === "verified" && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck size={16} className="text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-800">Verified</span>
                    </div>
                    <p className="text-sm text-emerald-700">{verification.companyName} &mdash; Active until {verification.expiryDate}</p>
                  </div>
                )}
                {verification.status === "expired" && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle size={16} className="text-amber-600" />
                      <span className="text-sm font-semibold text-amber-800">Certificate Expired</span>
                    </div>
                    <p className="text-sm text-amber-700">{verification.companyName} &mdash; Expired {verification.expiryDate}. You can still register.</p>
                  </div>
                )}
                {verification.status === "not_found" && (
                  <div className="bg-gray-50 border border-border rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle size={16} className="text-text-muted" />
                      <span className="text-sm font-semibold text-text-secondary">Certificate not found</span>
                    </div>
                    <p className="text-sm text-text-muted">Not found on the Local Content Register. You can still register &mdash; your profile will be listed as unverified.</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)}
                    className="flex-1 rounded-xl border-2 border-border px-6 py-3 text-sm font-semibold text-text-secondary hover:border-accent transition-all">
                    Back
                  </button>
                  <button type="button" onClick={() => setStep(3)}
                    className="flex-1 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    Continue <ArrowRight size={16} />
                  </button>
                </div>

                <p className="text-xs text-text-muted text-center">LCS verification is optional. You can skip this step.</p>
              </>
            )}

            {/* Step 3: Service categories */}
            {step === 3 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Service Categories</label>
                  <p className="text-xs text-text-muted mb-3">Select the categories your company operates in. You&apos;ll receive alerts when procurement opportunities are posted in these areas.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceCategories.map((cat) => (
                      <label key={cat} className="flex items-center gap-2.5 p-2.5 rounded-lg border border-border hover:border-accent/30 cursor-pointer transition group">
                        <div className={`w-4.5 h-4.5 rounded border-2 flex items-center justify-center transition flex-shrink-0 ${
                          form.selectedCategories.includes(cat) ? "bg-accent border-accent" : "border-border group-hover:border-accent/50"
                        }`} style={{ width: "18px", height: "18px" }}>
                          {form.selectedCategories.includes(cat) && <Check size={11} className="text-white" />}
                        </div>
                        <input type="checkbox" className="sr-only" checked={form.selectedCategories.includes(cat)} onChange={() => toggleCategory(cat)} />
                        <span className="text-xs text-text-secondary">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)}
                    className="flex-1 rounded-xl border-2 border-border px-6 py-3 text-sm font-semibold text-text-secondary hover:border-accent transition-all">
                    Back
                  </button>
                  <button type="submit" disabled={loading}
                    className="flex-1 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                    {loading ? "Creating account..." : "Create Account"}
                    {!loading && <ArrowRight size={16} />}
                  </button>
                </div>
              </>
            )}

            <p className="text-xs text-text-muted text-center pt-2">
              Already registered?{" "}
              <Link href="/suppliers/login" className="text-accent hover:underline font-medium">Log in</Link>
            </p>
          </form>

          <p className="text-xs text-text-muted text-center mt-6 max-w-sm mx-auto">
            By registering, you agree to LCA Desk&apos;s{" "}
            <Link href="/terms" className="text-accent hover:underline">Terms</Link> and{" "}
            <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
