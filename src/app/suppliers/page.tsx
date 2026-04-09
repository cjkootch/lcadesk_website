import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Search, FileCheck, Truck, Wrench, HardHat, Utensils, GraduationCap, Stethoscope, Anchor, Globe, Leaf, Monitor, Shield, Trash2, Package } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import GeometricBg from "@/components/GeometricBg";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Supplier Directory | Registered Local Content Suppliers",
  description:
    "Browse suppliers registered under local content regimes. Find certified companies across service categories for oil and gas procurement. Currently covering Guyana, with more jurisdictions coming soon.",
  openGraph: {
    title: "Supplier Directory | LCA Desk",
    description: "Browse registered suppliers across service categories for oil and gas procurement under local content regimes.",
    images: [{ url: "/og-suppliers.png", width: 1200, height: 630, alt: "Supplier directory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supplier Directory | LCA Desk",
    description: "Registered suppliers across service categories under local content regimes.",
    images: ["/og-suppliers.png"],
  },
};

const categories = [
  { icon: Building2, name: "Construction & Fabrication", count: 0 },
  { icon: Truck, name: "Transportation & Logistics", count: 0 },
  { icon: Wrench, name: "Maintenance & Repair", count: 0 },
  { icon: HardHat, name: "Engineering & Technical", count: 0 },
  { icon: Utensils, name: "Catering & Hospitality", count: 0 },
  { icon: GraduationCap, name: "Training & Development", count: 0 },
  { icon: Stethoscope, name: "Medical & HSE", count: 0 },
  { icon: Anchor, name: "Marine & Offshore", count: 0 },
  { icon: Leaf, name: "Environmental Services", count: 0 },
  { icon: Monitor, name: "Information Technology", count: 0 },
  { icon: Globe, name: "Professional Services", count: 0 },
  { icon: Shield, name: "Security Services", count: 0 },
  { icon: Trash2, name: "Waste Management", count: 0 },
  { icon: Package, name: "Equipment Supply & Rental", count: 0 },
];

async function getSupplierCount(): Promise<number> {
  try {
    const res = await fetch("https://app.lcadesk.com/api/public/opportunities", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return data.summary?.totalContractors ?? 0;
  } catch {
    return 0;
  }
}

export default async function SuppliersPage() {
  const supplierCount = await getSupplierCount();

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-surface">
        <GeometricBg variant="grid" />
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
              <ShieldCheck size={14} className="text-accent" />
              <span className="text-accent text-xs font-semibold tracking-wide uppercase">Regulator Verified</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-text-primary mb-5">
              Supplier{" "}
              <span className="gradient-text-static">Directory</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed">
              Browse suppliers registered under local content regimes. Contractors are legally required to give first consideration to registered local suppliers under applicable legislation. Currently covering Guyana.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://app.lcadesk.com/auth/signup?role=supplier"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Register Your Company <ArrowRight size={16} />
              </Link>
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border text-text-secondary px-7 py-3.5 text-sm font-semibold hover:border-accent hover:text-accent transition-all"
              >
                Browse Opportunities
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="/illustrations/hero-suppliers.png" alt="Supplier directory with verified certification badges" className="w-full rounded-2xl" loading="eager" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-white">{supplierCount || "50+"}</p>
            <p className="text-emerald-200 text-sm mt-1">Active Contractors</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">14</p>
            <p className="text-emerald-200 text-sm mt-1">Service Categories</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-emerald-200 text-sm mt-1">LCS Verified</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">Weekly</p>
            <p className="text-emerald-200 text-sm mt-1">Updates</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">For Suppliers</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
            Get Found by Sector Contractors
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Contractors must demonstrate they searched for local suppliers before sourcing internationally. Being listed here puts you in front of them.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Register Your Company", desc: "Create a free profile with your company details, registration certificate, and service categories." },
            { step: "02", title: "Get Verified", desc: "We verify your registration status directly against the relevant regulator register. Verified suppliers get priority visibility." },
            { step: "03", title: "Receive Opportunities", desc: "Get notified when contractors post procurement opportunities matching your service categories." },
          ].map((item) => (
            <div key={item.step} className="relative bg-white rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow">
              <span className="text-5xl font-bold text-accent/10 absolute top-4 right-6">{item.step}</span>
              <h3 className="font-display text-lg text-text-primary mb-3 mt-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">Service Categories</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
              Service Categories
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Local content legislation defines service categories where registered local suppliers receive first consideration for sector contracts.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div key={cat.name} className="flex items-start gap-3 bg-white rounded-xl border border-border p-4 hover:border-accent/30 transition-colors">
                <cat.icon size={20} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-text-primary">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal context */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">Legal Framework</p>
          <h2 className="font-display text-3xl text-text-primary mb-4">What the Law Requires</h2>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 space-y-4">
          <p className="text-text-secondary text-sm mb-2">Local content legislation across jurisdictions typically mandates the following. Example references from Guyana&apos;s Local Content Act 2021:</p>
          <div className="flex items-start gap-3">
            <FileCheck size={20} className="text-emerald-600 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-text-primary mb-1">First Consideration for Local Suppliers</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Contractors, subcontractors, and licensees must give first consideration to registered local suppliers of goods and services before sourcing internationally.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Search size={20} className="text-emerald-600 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-text-primary mb-1">Local Procurement Procedures</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Contractors must advertise procurement opportunities locally and evaluate local bids on fair and equitable terms before sourcing internationally.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck size={20} className="text-emerald-600 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-text-primary mb-1">Regulator-Maintained Supplier Register</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Each jurisdiction maintains an official register of local suppliers and service providers. Registration is typically required for first consideration status.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to grow your local content business?"
        body="Register on LCA Desk to get matched with procurement opportunities from contractors required to source locally under applicable legislation."
        primaryCTA={{ label: "Register Your Company", href: "https://app.lcadesk.com/auth/signup?role=supplier" }}
        secondaryCTA={{ label: "Browse Opportunities", href: "/opportunities" }}
      />
    </main>
  );
}
