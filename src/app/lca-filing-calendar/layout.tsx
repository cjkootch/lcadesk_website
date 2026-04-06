import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LCA Filing Calendar",
  description:
    "Key dates and deadlines for all 5 Local Content Act submission types in Guyana — half-yearly reports, annual plans, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
