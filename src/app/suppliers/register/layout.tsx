import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register as a Supplier",
  description:
    "Register your company on LCA Desk's supplier directory to connect with oil and gas operators seeking local content-compliant vendors.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
