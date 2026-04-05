import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Namibia — Local Content Compliance",
  description:
    "LCA Desk for Namibia — prepare for local content compliance as Namibia's offshore oil and gas sector rapidly develops.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
