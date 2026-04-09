import type { Metadata } from "next";
import RegulatorsPageClient from "./RegulatorsPageClient";

export const metadata: Metadata = {
  title: "For Regulators | Digitize Local Content Filing, Review, and Audit",
  description:
    "LCA Desk gives regulatory bodies and local content secretariats a structured system for filing intake, validation, reviewer case management, resubmission handling, and audit-ready records.",
  alternates: { canonical: "https://lcadesk.com/for-regulators" },
  openGraph: {
    title: "LCA Desk for Regulators",
    description:
      "Digitize mandated local content filing intake, review workflows, and audit trails. Built for secretariats and regulatory authorities.",
    url: "https://lcadesk.com/for-regulators",
  },
};

export default function ForRegulatorsPage() {
  return <RegulatorsPageClient />;
}
