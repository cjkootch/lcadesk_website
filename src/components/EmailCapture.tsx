"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, CheckCircle2, AlertTriangle, ArrowRight, Loader2 } from "lucide-react";
import { track } from "@vercel/analytics";

const APP_URL = process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com";

interface EmailCaptureProps {
  /** Headline text */
  headline?: string;
  /** Description text */
  description?: string;
  /** Which list/topic to subscribe to */
  list?: "filing_reminders" | "opportunities" | "newsletter";
  /** Visual variant */
  variant?: "inline" | "card";
}

export default function EmailCapture({
  headline = "Get LCA filing deadline reminders",
  description = "We'll email you 30, 14, and 7 days before each filing deadline. No spam — just the dates that matter.",
  list = "filing_reminders",
  variant = "card",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${APP_URL}/api/public/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), list }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      track("Email Subscribed", { list });
      setStatus("success");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-2xl p-6 text-center ${
          variant === "card"
            ? "bg-emerald-50 border border-emerald-200"
            : "bg-emerald-50/50 rounded-xl"
        }`}
      >
        <CheckCircle2 size={28} className="text-emerald-600 mx-auto mb-3" />
        <p className="font-semibold text-emerald-900 mb-1">You&apos;re subscribed!</p>
        <p className="text-sm text-emerald-700">
          {list === "filing_reminders"
            ? "We'll send you reminders before each LCA filing deadline."
            : list === "opportunities"
            ? "You'll get alerts when new opportunities are posted."
            : "You'll receive our latest updates and compliance tips."}
        </p>
      </motion.div>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "loading"}
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition disabled:opacity-60"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-60 disabled:hover:scale-100 whitespace-nowrap"
      >
        {status === "loading" ? (
          <><Loader2 size={14} className="animate-spin" /> Subscribing...</>
        ) : (
          <>Subscribe <ArrowRight size={14} /></>
        )}
      </button>
    </form>
  );

  if (variant === "inline") {
    return (
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Bell size={15} className="text-accent" />
          <p className="font-semibold text-text-primary text-sm">{headline}</p>
        </div>
        <p className="text-xs text-text-secondary mb-3">{description}</p>
        {formContent}
        <AnimatePresence>
          {status === "error" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5 text-xs text-red-600 mt-2">
              <AlertTriangle size={12} /> {errorMsg}
            </motion.p>
          )}
        </AnimatePresence>
        <p className="text-[10px] text-text-muted mt-2">No spam. Unsubscribe anytime.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-surface to-white rounded-2xl border border-border p-6 md:p-8">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Bell size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="font-display text-lg text-text-primary mb-1">{headline}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
        </div>
      </div>
      {formContent}
      <AnimatePresence>
        {status === "error" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5 text-xs text-red-600 mt-3">
            <AlertTriangle size={12} /> {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
      <p className="text-[10px] text-text-muted mt-3">No spam. Unsubscribe anytime. We only send filing deadline reminders.</p>
    </div>
  );
}
