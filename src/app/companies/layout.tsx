import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Directory | Oil & Gas Companies in Guyana",
  description:
    "Browse 600+ oil and gas companies operating in Guyana. Filter by LCS registration, service category, hiring status, and active procurement. The most comprehensive directory of Guyana's energy sector.",
  alternates: { canonical: "https://lcadesk.com/companies" },
  openGraph: {
    title: "Company Directory — Guyana Oil & Gas Sector | LCA Desk",
    description: "600+ companies in Guyana's energy sector. Filter by LCS registration, procurement, hiring, and service category.",
    url: "https://lcadesk.com/companies",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
