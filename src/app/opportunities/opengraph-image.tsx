import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Guyana Oil Sector Procurement Opportunities — LCA Desk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        <p style={{ fontSize: "32px", fontWeight: 700, color: "white", marginBottom: "8px" }}>Procurement Opportunities</p>
        <p style={{ fontSize: "18px", color: "#94a3b8", marginBottom: "40px", textAlign: "center", maxWidth: "700px" }}>
          Active tenders and contracts from oil & gas operators in Guyana
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          {["Equipment & Materials", "Logistics & Transport", "Construction", "Catering & Camp", "Technical Services", "Training"].map((cat) => (
            <span
              key={cat}
              style={{
                fontSize: "13px",
                color: "#cbd5e1",
                padding: "8px 18px",
                borderRadius: "8px",
                border: "1px solid #334155",
                background: "rgba(30,41,59,0.6)",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "36px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
          <span style={{ fontSize: "15px", color: "#10b981" }}>Guyanese suppliers receive first consideration under the LCA</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
