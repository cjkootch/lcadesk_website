"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, AlertTriangle, XCircle, Loader2, FileCheck, Clock, Building2 } from "lucide-react";
import GeometricBg from "@/components/GeometricBg";

type VerifyResult = {
  status: "verified" | "expired" | "not_found";
  companyName?: string;
  certificateNumber?: string;
  issueDate?: string;
  expiryDate?: string;
  categories?: string[];
} | null;

export default function VerifyPage() {
  const [certNumber, setCertNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyResult>(null);
  const [searched, setSearched] = useState(false);

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!certNumber.trim()) return;
    setLoading(true);
    setResult(null);
    setSearched(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com"}/api/public/verify-lcs?cert=${encodeURIComponent(certNumber.trim())}`
      );
      if (res.ok) {
        const data = await res.json();
        setResult(data);
      } else {
        setResult({ status: "not_found" });
      }
    } catch {
      setResult({ status: "not_found" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-surface">
        <GeometricBg variant="topology" />
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:block order-2">
          <img src="/illustrations/hero-verify.png" alt="Certificate verification" className="w-full max-w-md mx-auto drop-shadow-xl" loading="eager" />
        </div>
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-5 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
            <ShieldCheck size={14} className="text-accent" />
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">Certificate Verification</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-text-primary mb-5">
            Verify an{" "}
            <span className="gradient-text-static">LCS Certificate</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
            Check the validity of a Local Content Secretariat certificate. Confirm whether a Guyanese supplier or service provider is currently registered on the LCS Register.
          </p>

          {/* Search form */}
          <form onSubmit={handleVerify} className="max-w-lg mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  value={certNumber}
                  onChange={(e) => setCertNumber(e.target.value)}
                  placeholder="Enter LCS certificate number..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-border bg-white text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading || !certNumber.trim()}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : "Verify"}
              </button>
            </div>
          </form>
        </div>
        </div>
      </section>

      {/* Result */}
      {searched && (
        <section className="py-12 max-w-2xl mx-auto px-6">
          {loading ? (
            <div className="text-center py-12">
              <Loader2 size={32} className="animate-spin text-accent mx-auto mb-3" />
              <p className="text-text-secondary text-sm">Checking LCS Register...</p>
            </div>
          ) : result?.status === "verified" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck size={24} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-lg font-bold text-emerald-800">Certificate Valid</p>
                  <p className="text-sm text-emerald-600">This supplier is on the LCS Register</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {result.companyName && (
                  <div className="flex items-start gap-2">
                    <Building2 size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-emerald-600">Company</p>
                      <p className="text-sm font-medium text-text-primary">{result.companyName}</p>
                    </div>
                  </div>
                )}
                {result.certificateNumber && (
                  <div className="flex items-start gap-2">
                    <FileCheck size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-emerald-600">Certificate #</p>
                      <p className="text-sm font-medium text-text-primary">{result.certificateNumber}</p>
                    </div>
                  </div>
                )}
                {result.expiryDate && (
                  <div className="flex items-start gap-2">
                    <Clock size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-emerald-600">Valid Until</p>
                      <p className="text-sm font-medium text-text-primary">{result.expiryDate}</p>
                    </div>
                  </div>
                )}
                {result.categories && result.categories.length > 0 && (
                  <div className="sm:col-span-2 flex flex-wrap gap-2 mt-2">
                    {result.categories.map((cat) => (
                      <span key={cat} className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">{cat}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ) : result?.status === "expired" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <AlertTriangle size={24} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-lg font-bold text-amber-800">Certificate Expired</p>
                  <p className="text-sm text-amber-600">This certificate was found but is no longer current</p>
                </div>
              </div>
              {result.companyName && (
                <p className="text-sm text-text-secondary">Company: <span className="font-medium">{result.companyName}</span></p>
              )}
              <p className="text-sm text-amber-700 mt-3">The supplier should contact the Local Content Secretariat to renew their certificate.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <XCircle size={24} className="text-gray-400" />
              </div>
              <p className="text-lg font-bold text-text-primary mb-2">Certificate Not Found</p>
              <p className="text-sm text-text-secondary max-w-md mx-auto">
                No matching certificate was found on the LCS Register. Double-check the certificate number and try again. If you believe this is an error, contact the Local Content Secretariat directly.
              </p>
            </motion.div>
          )}
        </section>
      )}

      {/* Info section */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">About Verification</p>
          <h2 className="font-display text-3xl text-text-primary mb-4">Why Verify LCS Certificates?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Confirm Supplier Status",
              desc: "Verify that a supplier claiming Guyanese status is genuinely registered on the LCS Register before awarding contracts.",
            },
            {
              icon: FileCheck,
              title: "Compliance Documentation",
              desc: "Contractors must document that they sourced from LCS-registered suppliers. Certificate verification creates an auditable record.",
            },
            {
              icon: Clock,
              title: "Check Expiry Dates",
              desc: "LCS certificates have expiry dates. Verify that a supplier's certificate is current before entering into new agreements.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow">
              <item.icon size={24} className="text-accent mb-4" />
              <h3 className="font-display text-base text-text-primary mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
