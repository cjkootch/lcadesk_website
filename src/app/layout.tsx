import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lcadesk.com"),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
    ],
  },
  title: {
    default: "LCA Desk | AI-Powered Local Content Act Compliance Software",
    template: "%s | LCA Desk",
  },
  description:
    "LCA Desk is the world's first AI-native Local Content Act compliance platform. Manage mandatory LCA filings for Guyana, Nigeria, Trinidad, Ghana, Mozambique and more — from a single dashboard.",
  keywords: [
    "local content act compliance software",
    "LCA compliance platform",
    "Guyana local content act",
    "NCDMB compliance software",
    "Nigerian content plan software",
    "LCA half-yearly report",
    "local content secretariat",
    "oil gas compliance software",
    "LCA desk",
    "local content reporting",
    "Trinidad local content",
    "Ghana petroleum commission compliance",
    "Mozambique local content",
    "Namibia local content policy",
    "AI compliance software oil gas",
  ],
  authors: [{ name: "LCA Desk" }],
  creator: "LCA Desk",
  publisher: "LCA Desk",
  alternates: {
    canonical: "https://lcadesk.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "LCA Desk | AI-Powered Local Content Act Compliance Software",
    description:
      "The world's first AI-native Local Content Act compliance platform. Manage mandatory LCA filings for Guyana, Nigeria, Trinidad, Ghana, Mozambique and more.",
    url: "https://lcadesk.com",
    siteName: "LCA Desk",
  },
  twitter: {
    card: "summary_large_image",
    title: "LCA Desk | AI-Powered LCA Compliance",
    description:
      "The world's first AI-native Local Content Act compliance platform for oil and gas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lcadesk.com/#organization",
      name: "LCA Desk",
      url: "https://lcadesk.com",
      description:
        "The world's first AI-native Local Content Act compliance platform for oil and gas sector companies.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
      email: "hello@lcadesk.com",
      sameAs: [],
      knowsAbout: [
        "Local Content Act Compliance",
        "Oil and Gas Compliance",
        "LCA Half-Yearly Report",
        "Local Content Secretariat",
        "NCDMB Compliance",
        "AI Compliance Software",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://lcadesk.com/#website",
      url: "https://lcadesk.com",
      name: "LCA Desk",
      publisher: { "@id": "https://lcadesk.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://lcadesk.com/#software",
      name: "LCA Desk",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI-powered Local Content Act compliance software. Manage all mandatory LCA submissions from a single dashboard.",
      url: "https://lcadesk.com",
      offers: [
        {
          "@type": "Offer",
          name: "Lite",
          price: "99",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "599",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          price: "1999",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Full Service",
          price: "2500",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
      ],
      provider: { "@id": "https://lcadesk.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg font-sans text-text-primary antialiased">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
