import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore LCA Desk features — AI narrative drafting, compliance gap detection, filing calendar, audit-ready reports, and more for LCA compliance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
