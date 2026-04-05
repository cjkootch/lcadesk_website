import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Learn how LCA Desk protects your compliance data with TLS 1.3, AES-256 encryption, role-based access controls, and SOC 2-aligned practices.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
