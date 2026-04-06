/** Shared style primitives for all OG images */

export const ogBackground = "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)";

export const ogColors = {
  white: "#ffffff",
  slate300: "#cbd5e1",
  slate400: "#94a3b8",
  slate500: "#64748b",
  slate700: "#334155",
  emerald500: "#10b981",
  teal500: "#14b8a6",
  amber500: "#f59e0b",
  blue500: "#3b82f6",
  purple500: "#a855f7",
};

export const ogGradient = "linear-gradient(135deg, #10b981, #14b8a6)";

export function OgLogo({ size = 48 }: { size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "10px",
          background: ogGradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: `${size * 0.5}px`,
          fontWeight: 700,
          color: "white",
        }}
      >
        LC
      </div>
      <span style={{ fontSize: `${size * 0.75}px`, fontWeight: 700, color: "white" }}>
        LCA Desk
      </span>
    </div>
  );
}

export function OgPill({ text, color = ogColors.slate500 }: { text: string; color?: string }) {
  return (
    <span
      style={{
        fontSize: "14px",
        color,
        padding: "6px 16px",
        border: `1px solid ${ogColors.slate700}`,
        borderRadius: "999px",
      }}
    >
      {text}
    </span>
  );
}

export function OgBadge({ text, bgColor = "rgba(16,185,129,0.15)", textColor = ogColors.emerald500 }: { text: string; bgColor?: string; textColor?: string }) {
  return (
    <span
      style={{
        fontSize: "13px",
        fontWeight: 600,
        color: textColor,
        background: bgColor,
        padding: "5px 14px",
        borderRadius: "6px",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {text}
    </span>
  );
}

export function OgContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: ogBackground,
        fontFamily: "system-ui, sans-serif",
        padding: "60px",
      }}
    >
      {children}
    </div>
  );
}
