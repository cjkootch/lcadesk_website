import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, BookOpen, Award, Users, CheckCircle, GraduationCap,
  Shield, BarChart3, Clock, FileText, Brain, Briefcase,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "LCA Training & Certification | LCA Desk Learning Centre",
  description:
    "Structured compliance training for the Local Content Act 2021. Two built-in courses, completion badges in your audit trail, and team progress tracking. The only LCA training platform in Guyana.",
  openGraph: {
    title: "LCA Desk Learning Centre — Compliance Training for Guyana's Oil Sector",
    description: "Structured LCA compliance training. Two courses, audit trail badges, team tracking. Free with your trial.",
  },
};

const courses = [
  {
    title: "LCA Fundamentals",
    modules: 5,
    duration: "~2 hours",
    level: "Foundation",
    audience: "All team members",
    color: "from-emerald-500 to-teal-500",
    included: "All plans",
    topics: [
      "What the Local Content Act 2021 requires and who it applies to",
      "The five mandatory submission types and their deadlines",
      "How the local content rate is calculated (with worked examples)",
      "Understanding 'first consideration' for employment and procurement",
      "Penalties, audits, and what triggers Secretariat enforcement",
    ],
  },
  {
    title: "Mastering LCA Desk",
    modules: 8,
    duration: "~4 hours",
    level: "Practitioner",
    audience: "Compliance officers & filers",
    color: "from-accent to-blue-500",
    included: "Professional & Enterprise",
    topics: [
      "Navigating the dashboard and setting up your entities",
      "Guided data entry for employment, procurement, and capacity development",
      "Using AI Narrative Drafting for the Comparative Analysis",
      "Running Compliance Gap Detection before filing",
      "Generating Secretariat-ready exports (Excel template + PDF + Notice)",
      "Multi-entity management and role-based permissions",
      "Audit trail best practices and Secretariat-ready documentation",
      "Filing calendar setup and automated deadline reminders",
    ],
  },
];

const upcomingCourses = [
  { title: "Annual Local Content Plan Preparation", status: "Q3 2026" },
  { title: "Local Content Master Plan Development", status: "Q4 2026" },
  { title: "Annual Performance Report Filing", status: "Q1 2027" },
  { title: "LCA for Finance Officers: Procurement & Expenditure Reporting", status: "2027" },
];

const whoItsFor = [
  { icon: Shield, title: "Compliance Managers", desc: "Understand every reporting requirement so you can file accurately and on time." },
  { icon: BarChart3, title: "Finance Officers", desc: "Learn how procurement and expenditure data maps to LCA categories before reporting season." },
  { icon: Users, title: "HR & Workforce Leads", desc: "Master the employment sub-report — ISCO-08 classifications, Guyanese vs. non-Guyanese breakdowns, and succession planning." },
  { icon: Briefcase, title: "New Hires", desc: "Get up to speed on the Local Content Act before you attest a report or make a procurement decision." },
  { icon: Brain, title: "Senior Management", desc: "Understand your company's compliance exposure and what the Secretariat is actually looking for." },
  { icon: FileText, title: "External Consultants", desc: "Advise clients confidently with structured knowledge of the LCA 2021 and V4.1 guidelines." },
];

const faqItems = [
  { q: "Does LCA Desk offer training on the Local Content Act?", a: "Yes. LCA Desk includes two structured compliance courses: LCA Fundamentals (5 modules covering the Act, deadlines, penalties, and calculation methodology) and Mastering LCA Desk (8 modules covering every platform feature from data entry to AI-assisted filing). Both are built into the dashboard with quizzes and completion tracking." },
  { q: "Can I show the Secretariat that my team completed compliance training?", a: "Yes. Badges from completed courses appear in your audit trail alongside filing activity. When the Secretariat reviews your submission, they can see that the individuals who prepared and attested the report completed structured LCA training. This demonstrates due diligence." },
  { q: "Is training included in the subscription?", a: "LCA Fundamentals is included in all plan levels, including during your 30-day trial. Mastering LCA Desk is included in Professional and Enterprise plans. Enterprise customers also get access to team training dashboards and completion reporting." },
  { q: "How long does each course take to complete?", a: "LCA Fundamentals takes approximately 2 hours across 5 modules. Mastering LCA Desk takes approximately 4 hours across 8 modules. Both courses are self-paced — complete them over days or weeks to fit your schedule." },
  { q: "Do I need to complete training before I can file?", a: "No — training is optional but strongly recommended. Compliance managers who complete LCA Fundamentals before their first filing report fewer Secretariat follow-up requests and faster filing times." },
  { q: "Will there be a formal LCA certification program?", a: "Yes. We're developing the LCA Desk Certified Compliance Professional credential — a formal certification that compliance officers, job seekers, and consultants can earn and share. Details will be announced in 2027." },
];

export default function TrainingPage() {
  return (
    <>
      <HeroSection
        eyebrow="Learning Centre"
        headline="Understand the LCA. File with confidence."
        sub="The only structured compliance training for Guyana's Local Content Act 2021. Two courses, completion badges in your audit trail, and team progress tracking — built into LCA Desk."
        geometricVariant="nodes"
        primaryCTA={{ label: "Start with LCA Fundamentals", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "See the Curriculum", href: "#courses" }}
      />

      {/* Why training matters */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Why This Matters</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">
            Your team needs to understand the law before they can file it.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-14 text-center leading-relaxed">
            The LCA has 40+ reporting categories, ISCO-08 classifications, a Sole Source approval process, five different submission types, and a V4.1 guideline that changed in June 2025. The Secretariat offers no structured training. There are no courses. There is no certification. Until now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Structured, not scattered", desc: "Module-by-module curriculum covering every aspect of the LCA 2021 — not a PDF download or a webinar recording." },
              { icon: Award, title: "Badges in your audit trail", desc: "Completed courses earn badges visible in your filing documentation. Show the Secretariat your team was trained before they filed." },
              { icon: BarChart3, title: "Team progress tracking", desc: "See which team members have completed which courses. Ensure everyone who attests a report understands the requirements." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-7 card-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 bg-surface scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Curriculum</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-14 text-center">
            Two courses. Every compliance topic covered.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden card-lift">
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                      <GraduationCap size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-text-primary">{course.title}</h3>
                      <p className="text-xs text-text-muted">{course.level} Level</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary bg-surface rounded-full px-3 py-1">
                      <BookOpen size={12} /> {course.modules} modules
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary bg-surface rounded-full px-3 py-1">
                      <Clock size={12} /> {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary bg-surface rounded-full px-3 py-1">
                      <Users size={12} /> {course.audience}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">What you&apos;ll learn</p>
                  <ul className="space-y-2.5 mb-6">
                    {course.topics.map((topic, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                        <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-text-muted">Included in: <strong className="text-text-primary">{course.included}</strong></span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                      <Award size={14} className="text-accent" /> Badge on completion
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badge system */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <Award size={20} className="text-emerald-300" />
                <span className="text-emerald-300 text-xs font-semibold tracking-widest uppercase">Audit Trail Badges</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-4 leading-snug">
                The Secretariat is watching. Show them your team was prepared.
              </h2>
              <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed mb-6">
                When your team completes a course, a badge appears in the audit trail alongside their filing activity. This isn&apos;t just internal tracking — it&apos;s evidence of due diligence. When the Secretariat reviews your submission, they see that the individuals who prepared and attested the report completed structured compliance training.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "LCA Fundamentals", detail: "Badge visible on all submissions" },
                  { label: "Mastering LCA Desk", detail: "Badge + platform proficiency" },
                  { label: "Team Dashboard", detail: "Track completion across your org" },
                ].map((badge, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4 backdrop-blur">
                    <div className="flex items-center gap-2 mb-1">
                      <Award size={14} className="text-emerald-300" />
                      <span className="text-white text-sm font-semibold">{badge.label}</span>
                    </div>
                    <p className="text-emerald-200/70 text-xs">{badge.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Who It&apos;s For</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-14 text-center">
            Training for every role on your compliance team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoItsFor.map((role, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-7 card-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-teal/10 flex items-center justify-center mb-5">
                  <role.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{role.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming courses */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">Coming Soon</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 text-center">
            More courses in development
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-xl mx-auto leading-relaxed">
            We&apos;re expanding the curriculum to cover every submission type and compliance scenario.
          </p>
          <div className="space-y-3">
            {upcomingCourses.map((course, i) => (
              <div key={i} className="flex items-center justify-between bg-card rounded-xl border border-border p-5 card-lift">
                <div className="flex items-center gap-3">
                  <BookOpen size={18} className="text-text-muted" />
                  <span className="text-sm font-medium text-text-primary">{course.title}</span>
                </div>
                <span className="text-xs font-semibold bg-surface text-text-muted px-3 py-1 rounded-full">{course.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification teaser */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4 bg-amber-100 border border-amber-200 rounded-full px-4 py-1.5">
            <GraduationCap size={16} className="text-amber-600" />
            <span className="text-amber-700 text-xs font-semibold tracking-wide uppercase">Coming 2027</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
            LCA Desk Certified Compliance Professional
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
            A formal credential for compliance officers, job seekers, and consultants. Complete the curriculum, pass the assessment, and earn a certification you can share on LinkedIn and include in procurement submissions. Recognized by the industry. Backed by the platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
            {["Shareable certificate (PDF & URL)", "LinkedIn integration", "Appears on job seeker profiles", "Annual renewal keeps knowledge current"].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2">
                <CheckCircle size={14} className="text-accent" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 text-center">FAQ</p>
          <h2 className="font-display text-3xl text-text-primary mb-10 text-center">
            Training Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner
        headline="Start with LCA Fundamentals — free with your trial."
        body="Your 30-day trial includes full access to LCA Fundamentals. Train your team, earn badges, and file your first report with confidence."
        primaryCTA={{ label: "Start 30-Day Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
