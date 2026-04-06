import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LCA Half-Yearly Report Guide",
  description:
    "Complete guide to filing your Guyana Local Content Act half-yearly report — step-by-step instructions, deadlines, templates, and common mistakes to avoid.",
  alternates: { canonical: "https://lcadesk.com/lca-half-yearly-report-guide" },
  openGraph: {
    title: "How to File Your LCA Half-Yearly Report — Complete Guide",
    description: "Step-by-step guide to Guyana's Local Content Act half-yearly report. Covers all 5 submission types, deadlines, data requirements, and AI-assisted filing.",
    url: "https://lcadesk.com/lca-half-yearly-report-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
