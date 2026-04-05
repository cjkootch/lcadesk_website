"use client";

const items = [
  "1,300+ Companies Required to File in Guyana",
  "5 Mandatory Submissions Per Year",
  "GY$50M Maximum Non-Compliance Penalty",
  "35+ Countries With Local Content Laws",
  "Nigeria: 5% of Project Value Penalty",
  "Guyana: World\u2019s Fastest Growing Economy",
  "Zero Dedicated LCA Software Existed \u2014 Until Now",
  "900,000+ Barrels Per Day Production",
  "Namibia: 11B Barrels Discovered \u2014 LCA Framework Live",
];

export default function Ticker() {
  const content = items.map((item, i) => (
    <span key={i} className="inline-flex items-center gap-2 mx-8">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
      <span className="text-white/70 text-sm" style={{ fontFamily: "var(--font-tech)" }}>{item}</span>
    </span>
  ));

  return (
    <div className="w-full bg-[#0A0F1A] py-3 overflow-hidden">
      <div
        className="flex whitespace-nowrap items-center"
        style={{ animation: "scroll 40s linear infinite" }}
      >
        <span className="inline-flex items-center">{content}</span>
        <span className="inline-flex items-center">{content}</span>
      </div>
    </div>
  );
}
