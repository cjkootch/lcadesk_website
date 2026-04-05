import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mozambique — Local Content Compliance",
  description:
    "LCA Desk for Mozambique — automate local content compliance and reporting for the country's growing LNG and oil sector.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
