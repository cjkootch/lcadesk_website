import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Sparkles, FileText, Download, Users,
  CheckCircle2, Clock, Target, BarChart3, Zap,
  Shield, Eye,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "AI Resume Builder | Oil & Gas Resumes | LCA Desk",
  description:
    "Build an ATS-optimized, petroleum-sector resume in under 2 minutes. AI-powered, 3 professional templates, unlimited PDF exports. $15 one-time — lifetime access.",
  openGraph: {
    title: "AI Resume Builder for Oil & Gas | LCA Desk",
    description: "Generate a professional, ATS-optimized petroleum sector resume in under 2 minutes. $15 one-time, lifetime access.",
  },
};

const stats = [
  { value: "7.4s", label: "Average time a recruiter spends on your resume", icon: Clock },
  { value: "75%", label: "Of resumes rejected by ATS before a human sees them", icon: Target },
  { value: "< 2 min", label: "To generate yours with AI", icon: Zap },
  { value: "3x", label: "More interviews with keyword-optimized resumes", icon: BarChart3 },
];

const features = [
  {
    icon: Sparkles,
    title: "AI-powered generation",
    desc: "Enter your profile data and our AI writes compelling bullet points, skill summaries, and role descriptions tailored to petroleum sector hiring patterns.",
  },
  {
    icon: Target,
    title: "Petroleum sector optimized",
    desc: "Built for FPSO, drilling, HSE, engineering, logistics, and operations roles. Keywords match what oil & gas recruiters actually search for.",
  },
  {
    icon: FileText,
    title: "3 professional templates",
    desc: "Modern, Traditional, and Compact layouts. Each is ATS-compatible and designed to pass automated screening systems.",
  },
  {
    icon: Download,
    title: "Unlimited PDF exports",
    desc: "Download your resume as many times as you need. Update it, re-export it, send it anywhere. No per-download fees.",
  },
  {
    icon: Users,
    title: "Auto-saves to the Talent Pool",
    desc: "Your completed resume is visible to employers in the LCA Desk Talent Pool. Get discovered by contractors actively hiring.",
  },
  {
    icon: Shield,
    title: "ISCO-08 classification aware",
    desc: "Job titles are mapped to ISCO-08 codes, which contractors need for LCA employment reporting. Your resume speaks their compliance language.",
  },
];

export default function ResumeBuilderPage() {
  return (
    <main>
      <HeroSection
        eyebrow="AI Resume Builder"
        headline="Build a Resume That Gets You Hired in Oil & Gas"
        sub="Our AI resume builder is trained on petroleum sector hiring patterns. Generate a professional, ATS-optimized resume in under 2 minutes."
        primaryCTA={{ label: "Build Your Resume", href: "https://app.lcadesk.com/auth/signup?role=job_seeker" }}
        secondaryCTA={{ label: "See How It Works", href: "#how-it-works" }}
        geometricVariant="circuits"
      />

      {/* Stats grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div key={i} className="bg-surface rounded-2xl border border-border p-6 text-center">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mx-auto mb-3">
                  <s.icon size={20} className="text-amber-600" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-text-primary mb-1" style={{ fontFamily: "var(--font-tech)" }}>
                  {s.value}
                </p>
                <p className="text-xs text-text-muted leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">What You Get</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            Not just a resume builder. A hiring advantage.
          </h2>
          <p className="text-text-secondary text-center mb-14 max-w-2xl mx-auto">
            Most resume tools are generic. Ours is trained on the petroleum sector and integrated into the platform where contractors actually hire.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-emerald-600" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2 text-[15px]">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            Three steps. Two minutes. One resume.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Enter your details", desc: "Add your experience, skills, certifications, and education. Or import from your existing LCA Desk profile.", icon: FileText },
              { step: "02", title: "AI generates your resume", desc: "Our AI writes optimized bullet points, matches industry keywords, and formats everything into a professional layout.", icon: Sparkles },
              { step: "03", title: "Download & get discovered", desc: "Export unlimited PDFs. Your resume is also saved to the Talent Pool, visible to contractors hiring on LCA Desk.", icon: Eye },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                  <s.icon size={28} className="text-emerald-600" />
                </div>
                <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-tech)" }}>Step {s.step}</span>
                <h3 className="font-semibold text-text-primary text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing card */}
      <section className="py-20 bg-surface">
        <div className="max-w-lg mx-auto px-6">
          <div className="bg-card rounded-3xl border-2 border-accent/20 p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-teal" />
            <p className="text-accent text-xs font-bold tracking-widest uppercase mb-6">One-Time Purchase</p>
            <p className="text-6xl font-bold text-text-primary mb-1" style={{ fontFamily: "var(--font-tech)" }}>$15</p>
            <p className="text-text-muted text-sm mb-6">Lifetime access. No subscription.</p>
            <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
              {[
                "AI-powered resume generation",
                "3 professional templates",
                "Unlimited PDF exports",
                "Auto-saved to Talent Pool",
                "ISCO-08 job classification",
                "All future template updates",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="https://app.lcadesk.com/auth/signup?role=job_seeker"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-accent to-teal px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Build Your Resume <ArrowRight size={18} />
            </Link>
            <p className="text-xs text-text-muted mt-4">
              Join 6,000+ professionals on LCA Desk
            </p>
          </div>
        </div>
      </section>

      {/* Social proof / trust */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Trusted Across the Sector</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-6">
            Your resume lands in the right hands.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            Completed resumes are saved to the LCA Desk Talent Pool, where contractors like ExxonMobil, Halliburton, SLB, and CNOOC search for candidates to meet their local content hiring requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Built for this sector",
                desc: "Used by job seekers across Guyana's petroleum sector. Keywords, role titles, and skill categories are industry-specific.",
                icon: Target,
              },
              {
                title: "Same AI, different output",
                desc: "Powered by the same AI engine that drafts compliance reports for petroleum operators. Applied to your career.",
                icon: Sparkles,
              },
              {
                title: "Visible to hiring contractors",
                desc: "Contractors filing LCA reports need Guyanese employees. Your Talent Pool profile appears in their hiring workflows.",
                icon: Users,
              },
            ].map((item, i) => (
              <div key={i} className="bg-surface rounded-2xl border border-border p-7 text-left">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-emerald-600" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Your next role is one resume away."
        body="Build an AI-powered, petroleum-sector resume in under 2 minutes. $15 one-time, lifetime access."
        primaryCTA={{ label: "Build Your Resume", href: "https://app.lcadesk.com/auth/signup?role=job_seeker" }}
        secondaryCTA={{ label: "Browse Jobs", href: "/jobs" }}
      />
    </main>
  );
}
