import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Explore LCA Desk's coverage across global oil and gas markets — Guyana, Nigeria, Trinidad, Ghana, Mozambique, Namibia, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
