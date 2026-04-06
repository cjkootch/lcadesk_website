import type { Metadata } from "next";
import BlogPageClient from "@/components/BlogPageClient";
import { posts, categories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | LCA Compliance Insights",
  description:
    "Expert analysis on local content legislation, compliance strategies, and industry updates for oil and gas operators in Guyana and beyond.",
  openGraph: {
    title: "LCA Desk Blog | Compliance Insights",
    description: "Expert analysis on local content legislation, compliance strategies, and regulatory updates.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "LCA Desk Blog",
  description:
    "Expert analysis on local content legislation, compliance strategies, and industry updates.",
  url: "https://lcadesk.com/blog",
  publisher: {
    "@type": "Organization",
    name: "LCA Desk",
    url: "https://lcadesk.com",
  },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    author: { "@type": "Organization", name: "LCA Desk" },
    publisher: { "@type": "Organization", name: "LCA Desk" },
    url: `https://lcadesk.com/blog/${p.slug}`,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogPageClient posts={posts} categories={categories} />
    </>
  );
}
