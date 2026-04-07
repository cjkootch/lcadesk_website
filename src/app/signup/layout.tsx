import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your LCA Desk account and start your 30-day Professional trial. Card collected at signup. Automate your Local Content Act filings today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
