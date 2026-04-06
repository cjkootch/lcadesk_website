import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for LCA Desk. Start with a free 14-day Pro trial — no credit card required. Lite $99/mo, Pro $299/mo.",
  alternates: { canonical: "https://lcadesk.com/pricing" },
  openGraph: {
    title: "LCA Desk Pricing — Plans from $99/month",
    description: "Lite $99/mo + $25/report. Pro $299/mo with unlimited reports and AI features. 14-day free trial, no credit card required.",
    url: "https://lcadesk.com/pricing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
