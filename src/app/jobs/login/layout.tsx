import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Seeker Login",
  description:
    "Sign in to your LCA Desk job seeker account to manage your profile and track applications for oil and gas positions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
