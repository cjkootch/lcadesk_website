import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, regulatory updates, and compliance tips for navigating Guyana's Local Content Act and oil sector requirements.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
