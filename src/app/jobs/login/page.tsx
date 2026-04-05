"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, LogIn } from "lucide-react";
import GeometricBg from "@/components/GeometricBg";

export default function JobSeekerLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com"}/api/public/job-seekers/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Invalid email or password");

      // Set cookie via API route on our domain
      await fetch("/api/auth/set-cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: data.token, userType: "seeker" }),
      });

      router.push("/jobs/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-surface min-h-screen">
      <GeometricBg variant="waves" />
      <div className="absolute top-20 left-[15%] w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-md mx-auto px-6 z-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mx-auto mb-5">
              <LogIn size={24} className="text-accent" />
            </div>
            <h1 className="font-display text-3xl text-text-primary mb-3">
              Job Seeker <span className="gradient-text-static">Log In</span>
            </h1>
            <p className="text-text-secondary text-sm">
              Access your applications and job alerts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">{error}</div>
            )}

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-accent transition"
                placeholder="Your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? "Logging in..." : "Log In"}
              {!loading && <ArrowRight size={16} />}
            </button>

            <p className="text-xs text-text-muted text-center pt-2">
              Don&apos;t have an account?{" "}
              <Link href="/jobs/register" className="text-accent hover:underline font-medium">Register here</Link>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
