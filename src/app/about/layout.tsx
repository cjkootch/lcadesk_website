import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the team behind LCA Desk — built by energy traders who needed a better way to manage Local Content Act compliance in Guyana.",
  alternates: { canonical: "https://lcadesk.com/about" },
  openGraph: {
    title: "About LCA Desk — AI-Native Compliance Platform",
    description: "Built by energy traders who needed a better way to manage Local Content Act compliance. The world's only purpose-built LCA software.",
    url: "https://lcadesk.com/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
