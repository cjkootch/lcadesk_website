import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Briefcase, GraduationCap, FileText, UserCheck,
  Search, Bell, Award, TrendingUp, Building2, Shield, Star,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "For Job Seekers | Petroleum Sector Jobs in Guyana",
  description:
    "Your skills are in demand. Build your profile, get certified, get hired. Browse petroleum sector jobs from contractors required to prioritize Guyanese nationals.",
  openGraph: {
    title: "LCA Desk for Job Seekers",
    description: "Petroleum sector jobs in Guyana. Free forever — build your profile, get certified, get hired.",
  },
};

const features = [
  {
    icon: Briefcase,
    title: "Comprehensive job board",
    desc: "Company-posted positions plus LCS scraped notices — every petroleum sector opening in Guyana, in one place.",
  },
  {
    icon: FileText,
    title: "AI resume builder",
    desc: "Build an industry-optimized resume that highlights the skills and certifications contractors are looking for.",
  },
  {
    icon: GraduationCap,
    title: "Learning courses",
    desc: "Free courses on HSE, industry certifications, and skills development to make you more competitive in the job market.",
  },
  {
    icon: Shield,
    title: "Compliance profile",
    desc: "Store your certifications, training records, and qualifications in one place. Contractors can verify your credentials instantly.",
  },
  {
    icon: Bell,
    title: "Job alerts",
    desc: "Get notified when new positions match your skills, experience, and preferred location. Never miss an opportunity.",
  },
  {
    icon: TrendingUp,
    title: "Application tracking",
    desc: "Track the status of your applications and see when contractors have viewed your profile.",
  },
];

const faqItems = [
  { q: "Is it really free?", a: "Yes, 100% free — forever. There is no paid tier for job seekers. Your presence makes the platform more valuable for contractors and suppliers, so we keep it free to grow the network." },
  { q: "What does 'Guyanese-first consideration' mean?", a: "Under the LCA 2021, contractors operating in Guyana's petroleum sector must give first consideration to Guyanese nationals when hiring. This means if a qualified Guyanese candidate is available, the contractor must consider them before foreign workers." },
  { q: "What kinds of jobs are listed?", a: "Everything from engineering and operations to HSE, administration, catering, logistics, and more. Jobs come from contractor postings on the platform and scraped from the LCS public notices." },
  { q: "Do I need to be in the oil industry already?", a: "No. Many positions are entry-level or transferable-skill roles. The learning courses help you build industry-specific qualifications." },
  { q: "How do contractors find me?", a: "When contractors file their reports, they need to demonstrate Guyanese employment. Your profile — with skills, certifications, and availability — appears in their talent search when they're hiring." },
];

export default function ForJobSeekersPage() {
  return (
    <main>
      <HeroSection
        eyebrow="For Guyanese Job Seekers"
        headline="Your skills are in demand."
        sub="Build your profile, get certified, get hired. Browse petroleum sector jobs from contractors legally required to prioritize Guyanese nationals under the LCA 2021."
        primaryCTA={{ label: "Find Petroleum Jobs", href: "https://app.lcadesk.com/auth/signup?role=job_seeker" }}
        secondaryCTA={{ label: "Browse Jobs", href: "/jobs" }}
        geometricVariant="nodes"
      />

      {/* Why it matters */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">The Law Is On Your Side</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-4">
            Contractors must hire Guyanese first. Make sure they find you.
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            The Local Content Act 2021 requires petroleum contractors to give first consideration to Guyanese nationals in employment. LCA Desk puts your profile in front of every hiring contractor on the platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: UserCheck, title: "First consideration by law", desc: "Section 19 of the LCA requires contractors to prioritize Guyanese nationals for employment at all levels.", color: "bg-blue-50", iconColor: "text-blue-600" },
              { icon: Building2, title: "1,300+ companies filing", desc: "Every company on the Local Content Register is a potential employer. They all use LCA Desk to manage compliance.", color: "bg-emerald-50", iconColor: "text-emerald-600" },
              { icon: Star, title: "Free forever", desc: "No hidden costs, no premium tier. Your presence grows the network, which makes the platform more valuable for everyone.", color: "bg-amber-50", iconColor: "text-amber-600" },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-7">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5`}>
                  <item.icon size={22} className={item.iconColor} />
                </div>
                <h3 className="font-semibold text-text-primary mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">What You Get</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            Everything you need to get hired — for free.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2 text-[15px]">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            Three steps to getting hired
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Create your profile", desc: "Add your skills, experience, education, and certifications. The AI resume builder helps you present yourself professionally.", icon: FileText },
              { step: "02", title: "Get discovered", desc: "Your profile appears in contractor talent searches. Get notified when positions match your skills and experience.", icon: Search },
              { step: "03", title: "Apply & get hired", desc: "Apply to positions directly on the platform. Track your applications and get notified of updates.", icon: Award },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-5">
                  <s.icon size={28} className="text-blue-600" />
                </div>
                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-tech)" }}>Step {s.step}</span>
                <h3 className="font-semibold text-text-primary text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
            <p className="text-blue-900 font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-tech)" }}>$0</p>
            <p className="text-blue-800 font-semibold text-lg mb-2">Free forever. No paid tier.</p>
            <p className="text-blue-700 text-sm leading-relaxed max-w-lg mx-auto mb-5">
              Job seekers are the network effect — more profiles means more value for contractors and suppliers. That&apos;s why it&apos;s free, and always will be.
            </p>
            <Link
              href="https://app.lcadesk.com/auth/signup?role=job_seeker"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-blue-700 transition-all"
            >
              Create Your Profile <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner
        headline="The petroleum sector needs Guyanese talent."
        body="Contractors must prioritize you by law. Make sure they can find you. Free forever."
        primaryCTA={{ label: "Find Petroleum Jobs", href: "https://app.lcadesk.com/auth/signup?role=job_seeker" }}
        secondaryCTA={{ label: "Browse Jobs", href: "/jobs" }}
      />
    </main>
  );
}
