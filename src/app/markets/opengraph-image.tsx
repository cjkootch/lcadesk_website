import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LCA Desk Global Coverage — 7 Oil & Gas Markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const markets = [
    { flag: "🇬🇾", name: "Guyana", status: "LIVE", statusColor: "#10b981" },
    { flag: "🇳🇬", name: "Nigeria", status: "COMING SOON", statusColor: "#f59e0b" },
    { flag: "🇹🇹", name: "Trinidad", status: "COMING SOON", statusColor: "#f59e0b" },
    { flag: "🇬🇭", name: "Ghana", status: "COMING SOON", statusColor: "#f59e0b" },
    { flag: "🇲🇿", name: "Mozambique", status: "COMING SOON", statusColor: "#f59e0b" },
    { flag: "🇳🇦", name: "Namibia", status: "COMING SOON", statusColor: "#f59e0b" },
    { flag: "🇸🇷", name: "Suriname", status: "COMING SOON", statusColor: "#f59e0b" },
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
        <p style={{ fontSize: "28px", fontWeight: 600, color: "white", marginBottom: "40px" }}>Global Coverage</p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", maxWidth: "900px" }}>
          {markets.map((m) => (
            <div
              key={m.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 20px",
                borderRadius: "12px",
                border: m.status === "LIVE" ? "1px solid #10b981" : "1px solid #334155",
                background: m.status === "LIVE" ? "rgba(16,185,129,0.1)" : "rgba(30,41,59,0.6)",
              }}
            >
              <span style={{ fontSize: "24px" }}>{m.flag}</span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "white" }}>{m.name}</span>
                <span style={{ fontSize: "10px", fontWeight: 600, color: m.statusColor, textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
