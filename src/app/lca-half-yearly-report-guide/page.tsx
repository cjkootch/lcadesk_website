import type { Metadata } from "next";
import HalfYearlyReportGuideClient from "@/components/HalfYearlyReportGuideClient";

export const metadata: Metadata = {
  title: "LCA Half-Yearly Report Guide | Deadlines, Requirements & Penalties",
  description:
    "Complete guide to Guyana's LCA Half-Yearly Report. Filing deadlines (July 30 & January 30), who must file, the 3 required sub-reports, and penalties up to GY$50M for non-compliance.",
  openGraph: {
    title: "LCA Half-Yearly Report Guide | Guyana",
    description:
      "Filing deadlines, requirements, and penalties for the LCA Half-Yearly Report. Contractors, sub-contractors, and licensees must file twice per year.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "LCA Half-Yearly Report Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LCA Half-Yearly Report Guide",
    description: "Deadlines, requirements & penalties for Guyana's LCA Half-Yearly Report.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  name: "LCA Half-Yearly Report Filing",
  description:
    "Mandatory half-yearly report filing required under Guyana's Local Content Act 2021 for oil and gas contractors, sub-contractors, and licensees.",
  serviceType: "Regulatory Compliance Filing",
  provider: {
    "@type": "GovernmentOrganization",
    name: "Local Content Secretariat",
    address: {
      "@type": "PostalAddress",
      streetAddress: "116-117 Cowan Street, Kingston",
      addressLocality: "Georgetown",
      addressCountry: "GY",
    },
    telephone: "+592-225-8315",
    email: "localcontent@nre.gov.gy",
  },
  areaServed: {
    "@type": "Country",
    name: "Guyana",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the LCA Half-Yearly Report due?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "H1 reports (covering January–June) are due by July 30. H2 reports (covering July–December) are due by January 30 of the following year.",
      },
    },
    {
      "@type": "Question",
      name: "Who must file the LCA Half-Yearly Report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contractors, sub-contractors, and licensees operating in Guyana's petroleum sector are required to file under Section 47 of the Local Content Act 2021.",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for not filing the LCA Half-Yearly Report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Penalties range from GY$1 million for late submission to GY$50 million for operating without meeting minimum local content requirements. False or misleading submissions carry a GY$1 million penalty.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Half-Yearly Report contain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The report consists of three sub-reports: Employment (workforce data by nationality, position, and remuneration), Expenditure/Procurement (spending with Guyanese vs. foreign suppliers, including Supplier Type), and Capacity Development (training and skills transfer programs). Current template is Version 4, June 2025.",
      },
    },
  ],
};

export default function HalfYearlyReportGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HalfYearlyReportGuideClient />
    </>
  );
}
