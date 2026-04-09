import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the LCA Desk team for questions about local content compliance, pricing, or partnership opportunities.",
  alternates: { canonical: "https://lcadesk.com/contact" },
  openGraph: {
    title: "Contact LCA Desk",
    description: "Questions about local content compliance, pricing, or partnerships? Reach out — we respond within 24 hours.",
    url: "https://lcadesk.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "LCA Desk",
    url: "https://lcadesk.com",
    email: "support@lcadesk.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@lcadesk.com",
      contactType: "customer support",
      availableLanguage: "English",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
