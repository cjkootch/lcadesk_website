import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LCA Desk Features — AI-Powered Compliance Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const features = [
    { icon: "📄", label: "5 Submission Types" },
    { icon: "🤖", label: "AI Narrative Drafting" },
    { icon: "📅", label: "Filing Calendar" },
    { icon: "📊", label: "Dashboards" },
    { icon: "🔍", label: "Gap Detection" },
    { icon: "📥", label: "One-Click Export" },
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
        <p style={{ fontSize: "28px", fontWeight: 600, color: "white", marginBottom: "8px" }}>AI-Powered Compliance Tools</p>
        <p style={{ fontSize: "18px", color: "#94a3b8", marginBottom: "48px" }}>Everything you need for Local Content Act compliance</p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", maxWidth: "900px" }}>
          {features.map((f) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 24px",
                borderRadius: "12px",
                border: "1px solid #334155",
                background: "rgba(30,41,59,0.6)",
              }}
            >
              <span style={{ fontSize: "22px" }}>{f.icon}</span>
              <span style={{ fontSize: "15px", color: "#cbd5e1", fontWeight: 500 }}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
