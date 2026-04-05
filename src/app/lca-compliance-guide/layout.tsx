import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LCA Compliance Guide",
  description:
    "Step-by-step guide to filing compliant Local Content Act reports in Guyana — from data gathering to submission and audit preparation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
