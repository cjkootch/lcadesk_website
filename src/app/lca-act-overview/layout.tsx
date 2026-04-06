import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Content Act 2021 — Overview",
  description:
    "Comprehensive overview of Guyana's Local Content Act 2021 — key provisions, compliance obligations, and requirements for oil and gas operators.",
  alternates: { canonical: "https://lcadesk.com/lca-act-overview" },
  openGraph: {
    title: "Guyana Local Content Act 2021 — Key Provisions and Requirements",
    description: "Understand your obligations under the Local Content Act 2021. Covers mandatory filings, penalties, Guyanese-first requirements, and compliance deadlines.",
    url: "https://lcadesk.com/lca-act-overview",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
