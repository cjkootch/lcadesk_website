import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your free LCA Desk account and start your 14-day Pro trial. No credit card required. Automate your Local Content Act filings today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
