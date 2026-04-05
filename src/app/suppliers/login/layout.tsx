import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supplier Login",
  description:
    "Sign in to your LCA Desk supplier account to manage your company profile, certifications, and visibility to oil and gas operators.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
