import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Book a personalized demo of LCA Desk and see how AI-powered compliance tools can streamline your Local Content Act filings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
