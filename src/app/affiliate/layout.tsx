import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program — Earn 20% Recurring Commission",
  description:
    "Join the LCA Desk affiliate program and earn 20% recurring commission on every company you refer. Monthly PayPal payouts, no cap on earnings.",
  alternates: { canonical: "https://lcadesk.com/affiliate" },
  openGraph: {
    title: "LCA Desk Affiliate Program — Earn 20% Recurring",
    description: "Refer companies to LCA Desk and earn 20% recurring commission. Monthly PayPal payouts, no cap, marketing assets included.",
    url: "https://lcadesk.com/affiliate",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
