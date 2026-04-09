import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Directory | Local Content Sector Companies",
  description:
    "Browse companies operating under local content regimes. Filter by registration status, service category, hiring activity, and active procurement. Currently covering Guyana, with more jurisdictions coming soon.",
  alternates: { canonical: "https://lcadesk.com/companies" },
  openGraph: {
    title: "Company Directory | LCA Desk",
    description: "Companies operating under local content regimes. Filter by registration status, procurement, and hiring activity.",
    url: "https://lcadesk.com/companies",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
