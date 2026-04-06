import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, templates, and tools to help you navigate Local Content Act compliance — filing calendars, compliance checklists, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
