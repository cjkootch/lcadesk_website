import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guyana — Local Content Compliance",
  description:
    "LCA Desk for Guyana — automate Local Content Act filings, track deadlines, and stay compliant with the Local Content Secretariat.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
