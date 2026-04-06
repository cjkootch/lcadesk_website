import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore LCA Desk features — AI narrative drafting, compliance gap detection, filing calendar, audit-ready reports, and more for LCA compliance.",
  alternates: { canonical: "https://lcadesk.com/features" },
  openGraph: {
    title: "LCA Desk Features — AI-Powered Compliance Tools",
    description: "AI narrative drafting, compliance gap detection, filing calendar, workforce and procurement dashboards, and audit-ready report exports.",
    url: "https://lcadesk.com/features",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
