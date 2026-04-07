import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LCA Desk Pricing — Plans from $199/month";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const plans = [
    { name: "Essentials", price: "$199", period: "/mo", note: "All 5 submissions", color: "#94a3b8" },
    { name: "Professional", price: "$399", period: "/mo", note: "AI included", color: "#10b981", highlight: true },
    { name: "Enterprise", price: "Custom", period: "", note: "Contact us", color: "#94a3b8" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "linear-gradient(135deg, #10b981, #14b8a6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 700, color: "white" }}>LC</div>
          <span style={{ fontSize: "36px", fontWeight: 700, color: "white" }}>LCA Desk</span>
        </div>
        <p style={{ fontSize: "20px", color: "#94a3b8", marginBottom: "48px" }}>Simple, transparent pricing</p>
        <div style={{ display: "flex", gap: "24px" }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "32px 48px",
                borderRadius: "16px",
                border: plan.highlight ? "2px solid #10b981" : "1px solid #334155",
                background: plan.highlight ? "rgba(16,185,129,0.08)" : "rgba(30,41,59,0.5)",
                minWidth: "220px",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: 600, color: plan.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>{plan.name}</span>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <span style={{ fontSize: "48px", fontWeight: 700, color: "white" }}>{plan.price}</span>
                {plan.period && <span style={{ fontSize: "18px", color: "#64748b", marginLeft: "4px" }}>{plan.period}</span>}
              </div>
              <span style={{ fontSize: "13px", color: "#64748b", marginTop: "8px" }}>{plan.note}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "16px", color: "#10b981", marginTop: "32px" }}>30-day trial · Card collected at signup</p>
      </div>
    ),
    { ...size }
  );
}
