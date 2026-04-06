import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guyana — Local Content Compliance",
  description:
    "LCA Desk for Guyana — automate Local Content Act filings, track deadlines, and stay compliant with the Local Content Secretariat.",
  alternates: { canonical: "https://lcadesk.com/markets/guyana" },
  openGraph: {
    title: "LCA Desk for Guyana — Local Content Act Compliance Software",
    description: "Automate all 5 mandatory LCA submission types for Guyana. AI-drafted narratives, deadline tracking, and Secretariat-ready exports.",
    url: "https://lcadesk.com/markets/guyana",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
