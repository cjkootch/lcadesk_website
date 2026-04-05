import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Supplier Certification",
  description:
    "Verify a supplier's LCA Desk certification status — confirm registration, check expiry dates, and validate local content compliance credentials.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
