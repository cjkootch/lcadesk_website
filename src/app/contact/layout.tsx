import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the LCA Desk team for questions about local content compliance, pricing, or partnership opportunities.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
