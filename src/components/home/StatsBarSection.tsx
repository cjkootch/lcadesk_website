import StatCard from "@/components/StatCard";
import GeometricBg from "@/components/GeometricBg";

export default function StatsBarSection() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
      <GeometricBg variant="hexagons" />
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard value="7" label="Jurisdictions in Pipeline" lightOnDark />
          <StatCard value="35+" label="Countries With LC Mandates" lightOnDark />
          <StatCard value="1,300+" label="Companies Filing in Guyana" lightOnDark />
          <StatCard value="5" label="Filing Types Supported" lightOnDark />
        </div>
        <div className="mt-10 text-center">
          <p className="text-emerald-200/70 text-sm mb-4">H1 filing deadline: July 30. H2 filing deadline: January 30.</p>
          <a href="https://app.lcadesk.com/auth/signup?role=filer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-emerald-900 px-8 py-3 text-sm font-semibold hover:bg-emerald-50 hover:shadow-lg transition-all">
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
