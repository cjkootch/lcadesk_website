import type { Metadata } from "next";
import BlogPageClient from "@/components/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | LCA Compliance Insights",
  description:
    "Expert analysis on local content legislation, compliance strategies, and industry updates for oil and gas operators in Guyana and beyond.",
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "LCA Desk Blog",
  description:
    "Expert analysis on local content legislation, compliance strategies, and industry updates.",
  publisher: {
    "@type": "Organization",
    name: "LCA Desk",
    url: "https://lcadesk.com",
  },
  blogPost: [
    {
      "@type": "BlogPosting",
      headline: "Understanding Guyana's LCA v4.1 Template Changes",
      description:
        "A detailed walkthrough of the latest template updates and what they mean for your next filing.",
      author: { "@type": "Organization", name: "LCA Desk" },
      publisher: { "@type": "Organization", name: "LCA Desk" },
      keywords: ["LCA v4.1", "Guyana", "compliance template", "half-yearly report"],
    },
    {
      "@type": "BlogPosting",
      headline: "5 Common Mistakes in Half-Yearly Report Filings",
      description:
        "Avoid these pitfalls when preparing your next submission to the Local Content Secretariat.",
      author: { "@type": "Organization", name: "LCA Desk" },
      publisher: { "@type": "Organization", name: "LCA Desk" },
      keywords: ["half-yearly report", "compliance mistakes", "LCA filing", "Guyana"],
    },
    {
      "@type": "BlogPosting",
      headline: "Nigeria vs. Guyana: Comparing Local Content Frameworks",
      description:
        "A side-by-side analysis of two major compliance regimes and what operators need to know.",
      author: { "@type": "Organization", name: "LCA Desk" },
      publisher: { "@type": "Organization", name: "LCA Desk" },
      keywords: ["Nigeria NCDMB", "Guyana LCA", "local content comparison", "oil gas compliance"],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogPageClient />
    </>
  );
}
