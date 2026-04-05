import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register as a Job Seeker",
  description:
    "Create your LCA Desk job seeker profile to discover local content employment opportunities in Guyana's oil and gas sector.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
