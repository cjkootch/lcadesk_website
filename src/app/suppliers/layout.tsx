import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supplier Directory",
  description:
    "Browse Guyana's local content supplier directory — find registered Guyanese suppliers for oil and gas procurement and local content compliance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
