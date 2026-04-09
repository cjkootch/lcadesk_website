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
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #10b981, #14b8a6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
              color: "white",
            }}
          >
            LC
          </div>
          <span style={{ fontSize: "56px", fontWeight: 700, color: "white" }}>
            LCA Desk
          </span>
        </div>
        <p
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "white",
            lineHeight: 1.3,
            maxWidth: "900px",
            margin: 0,
          }}
        >
          Regulatory-Grade Local Content Compliance Platform
        </p>
        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            marginTop: "16px",
            maxWidth: "800px",
          }}
        >
          AI-powered filing, validation, and audit workflows for extractive industries
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "48px",
          }}
        >
          {["Guyana", "Namibia", "Mozambique", "Ghana", "Nigeria"].map(
            (market) => (
              <span
                key={market}
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#10b981",
                  padding: "8px 20px",
                  border: "1.5px solid #10b981",
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
