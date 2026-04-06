import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Oil & Gas Jobs in Guyana — LCA Desk Jobs Board";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const categories = [
    { label: "Management", color: "#f59e0b" },
    { label: "Technical", color: "#3b82f6" },
    { label: "Administrative", color: "#a855f7" },
    { label: "Skilled Labour", color: "#10b981" },
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
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "linear-gradient(135deg, #10b981, #14b8a6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 700, color: "white" }}>LC</div>
          <span style={{ fontSize: "36px", fontWeight: 700, color: "white" }}>LCA Desk</span>
        </div>
        <p style={{ fontSize: "32px", fontWeight: 700, color: "white", marginBottom: "8px" }}>Oil & Gas Jobs in Guyana</p>
        <p style={{ fontSize: "18px", color: "#94a3b8", marginBottom: "40px", textAlign: "center", maxWidth: "700px" }}>
          Guyanese nationals receive first consideration under the Local Content Act 2021
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          {categories.map((c) => (
            <div
              key={c.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "999px",
                border: "1px solid #334155",
                background: "rgba(30,41,59,0.6)",
              }}
            >
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: c.color }} />
              <span style={{ fontSize: "14px", color: "#cbd5e1" }}>{c.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "32px", marginTop: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "36px", fontWeight: 700, color: "#10b981" }}>48+</span>
            <span style={{ fontSize: "13px", color: "#64748b" }}>Active Positions</span>
          </div>
          <div style={{ width: "1px", background: "#334155" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "36px", fontWeight: 700, color: "#10b981" }}>Free</span>
            <span style={{ fontSize: "13px", color: "#64748b" }}>For Job Seekers</span>
          </div>
          <div style={{ width: "1px", background: "#334155" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "36px", fontWeight: 700, color: "#10b981" }}>AI</span>
            <span style={{ fontSize: "13px", color: "#64748b" }}>Enriched Listings</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
