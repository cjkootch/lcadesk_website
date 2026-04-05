import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the team behind LCA Desk — built by energy traders who needed a better way to manage Local Content Act compliance in Guyana.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
