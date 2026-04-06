import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ghana — Petroleum Commission Compliance",
  description:
    "LCA Desk for Ghana — manage Petroleum Commission local content compliance and reporting for oil and gas operations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
