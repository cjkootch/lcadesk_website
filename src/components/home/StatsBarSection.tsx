import StatCard from "@/components/StatCard";
import GeometricBg from "@/components/GeometricBg";

export default function StatsBarSection() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #064E3B 100%)" }}>
      <GeometricBg variant="hexagons" />
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard value="1,300+" label="Companies Filing in Guyana" lightOnDark />
          <StatCard value="35+" label="Countries With LCA Laws" lightOnDark />
          <StatCard value="GY$50M" label="Maximum Penalty Per Offence" lightOnDark />
          <StatCard value="900K+" label="Barrels/Day (and growing)" lightOnDark />
        </div>
      </div>
    </section>
  );
}
