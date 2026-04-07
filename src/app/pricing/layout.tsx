import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for LCA Desk. 30-day trial with card collected. Essentials $199/mo, Professional $399/mo.",
  alternates: { canonical: "https://lcadesk.com/pricing" },
  openGraph: {
    title: "LCA Desk Pricing — Plans from $199/month",
    description: "Essentials $199/mo. Professional $399/mo with AI Narrative Drafting. 30-day trial, card collected at signup.",
    url: "https://lcadesk.com/pricing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
