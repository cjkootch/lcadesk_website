import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for LCA Desk. Start with a free 14-day Pro trial — no credit card required. Plans from $99/month.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
