"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface Props {
  jobId: string;
  jobTitle: string;
  companyName: string;
}

type FormState = "idle" | "loading" | "success" | "error";

export default function JobApplyForm({ jobId, jobTitle, companyName }: Props) {
  const [state, setState] = useState<FormState>("idle");
  const [sentToRecruiter, setSentToRecruiter] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://app.lcadesk.com/api/public/lcs-jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job_id: jobId,
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone") || undefined,
          cover_letter: data.get("cover_letter") || undefined,
          is_guyanese: data.get("is_guyanese") === "on",
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to submit application");
      }

      const result = await res.json();
      setSentToRecruiter(result.sentToRecruiter);
      setState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="text-center py-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
          <CheckCircle size={24} className="text-emerald-600" />
        </div>
        <h3 className="font-semibold text-text-primary mb-1">Application Submitted</h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          {sentToRecruiter
            ? `Your application for ${jobTitle} has been sent to ${companyName}. Check your email for a confirmation.`
            : `Your application for ${jobTitle} has been received. We'll forward it to the employer and notify you.`}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h3 className="font-semibold text-text-primary text-sm">Apply for this position</h3>

      <div>
        <input
          name="name"
          type="text"
          required
          placeholder="Full name *"
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
        />
      </div>

      <div>
        <input
          name="email"
          type="email"
          required
          placeholder="Email address *"
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
        />
      </div>

      <div>
        <input
          name="phone"
          type="tel"
          placeholder="Phone number (optional)"
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
        />
      </div>

      <div>
        <textarea
          name="cover_letter"
          rows={3}
          placeholder="Brief cover note (optional)"
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition resize-none"
        />
      </div>

      <label className="flex items-start gap-2 cursor-pointer">
        <input
          name="is_guyanese"
          type="checkbox"
          defaultChecked
          className="mt-0.5 rounded border-border text-accent focus:ring-accent/20"
        />
        <span className="text-xs text-text-secondary leading-relaxed">
          I am a Guyanese national or permanent resident entitled to first consideration under the Local Content Act 2021
        </span>
      </label>

      {state === "error" && (
        <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2.5">
          <AlertCircle size={14} className="shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-60 disabled:pointer-events-none"
      >
        {state === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <Send size={14} /> Submit Application
          </>
        )}
      </button>

      <p className="text-[10px] text-text-muted text-center leading-relaxed">
        Your application is sent directly to the employer. Guyanese nationals receive first consideration by law.
      </p>
    </form>
  );
}
