import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nigeria — NCDMB Compliance",
  description:
    "LCA Desk for Nigeria — manage Nigerian Content Development and Monitoring Board (NCDMB) compliance and local content reporting.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
