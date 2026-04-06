import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "LCA Desk | AI-Powered Local Content Act Compliance Software",
  description:
    "LCA Desk is the world's first AI-native Local Content Act compliance platform. Manage mandatory LCA filings for Guyana, Nigeria, Trinidad, Ghana, Mozambique and more.",
  openGraph: {
    title: "LCA Desk | AI-Powered Local Content Act Compliance Software",
    description: "The world's first AI-native Local Content Act compliance platform for oil and gas.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "LCA Desk — AI-Powered LCA Compliance" }],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
