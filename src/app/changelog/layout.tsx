import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "See what's new in LCA Desk — product updates, new features, and improvements to the local content compliance platform.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
