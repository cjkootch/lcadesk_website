import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LCA Desk — AI-Powered Local Content Act Compliance Software";
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
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #10b981, #14b8a6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "white",
            }}
          >
            LC
          </div>
          <span style={{ fontSize: "48px", fontWeight: 700, color: "white" }}>
            LCA Desk
          </span>
        </div>
        <p
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          AI-Powered Local Content Act Compliance Software
        </p>
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {["Guyana", "Nigeria", "Trinidad", "Ghana", "Mozambique", "Namibia"].map(
            (market) => (
              <span
                key={market}
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  padding: "6px 16px",
                  border: "1px solid #334155",
                  borderRadius: "999px",
                }}
              >
                {market}
              </span>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
