import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://lcadesk.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  title: {
    default: "LCA Desk | Regulatory-Grade Local Content Compliance Platform",
    template: "%s | LCA Desk",
  },
  description:
    "LCA Desk is a regulatory-grade compliance operating system for local content programs. Digitize mandated filing, validation, regulator review, and audit workflows for extractive industries. Configurable for every jurisdiction.",
  keywords: [
    "local content compliance platform",
    "local content act software",
    "regulatory compliance operating system",
    "local content filing software",
    "Guyana local content act",
    "local content secretariat",
    "NCDMB compliance",
    "LCA half-yearly report",
    "oil gas compliance software",
    "LCA desk",
    "local content reporting",
    "regulator filing intake",
    "compliance audit trail",
    "jurisdiction packs",
    "Namibia local content policy",
    "Mozambique REFC",
    "Ghana petroleum commission",
    "extractive industry compliance",
  ],
  authors: [{ name: "LCA Desk" }],
  creator: "LCA Desk",
  publisher: "LCA Desk",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "LCA Desk | Regulatory-Grade Local Content Compliance Platform",
    description:
      "Regulatory-grade compliance infrastructure for local content programs. Digitize mandated filing, validation, regulator review, and audit workflows for extractive industries.",
    url: "https://lcadesk.com",
    siteName: "LCA Desk",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LCA Desk - Regulatory-Grade Local Content Compliance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LCA Desk | Local Content Compliance Platform",
    description:
      "Regulatory-grade compliance infrastructure for local content programs in extractive industries.",
    images: ["/og-image.png"],
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
        "Regulatory-grade compliance operating system for local content programs in extractive industries. Digitize mandated filing, validation, regulator review, and audit workflows.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
      email: "support@lcadesk.com",
      sameAs: [],
      knowsAbout: [
        "Local Content Act Compliance",
        "Regulatory Filing Infrastructure",
        "Oil and Gas Compliance",
        "LCA Half-Yearly Report",
        "Local Content Secretariat",
        "NCDMB Compliance",
        "Jurisdiction Pack Configuration",
        "Compliance Audit Trail",
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
        "Regulatory-grade compliance operating system for local content programs. Digitize mandated filing, validation, regulator review, and audit workflows across jurisdictions.",
      url: "https://lcadesk.com",
      offers: [
        {
          "@type": "Offer",
          name: "Essentials",
          price: "199",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Professional",
          price: "399",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          priceCurrency: "USD",
          description: "Custom pricing — contact us",
        },
        {
          "@type": "Offer",
          name: "Managed Service",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J4T660ZKK3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-J4T660ZKK3');

            // Delayed navigation helper for conversion tracking
            window.gtagSendEvent = function(url) {
              var callback = function () {
                if (typeof url === 'string') { window.location = url; }
              };
              gtag('event', 'conversion_event_purchase', {
                'event_callback': callback,
                'event_timeout': 2000,
              });
              return false;
            };

            // Fire conversion on any Start Free Trial click (signup link)
            document.addEventListener('click', function(e) {
              var el = e.target.closest && e.target.closest('a');
              if (!el) return;
              var href = el.getAttribute('href') || '';
              if (href.indexOf('app.lcadesk.com/auth/signup') === -1) return;
              if (el.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) {
                // Let the browser open new tab normally; still fire event without callback
                gtag('event', 'conversion_event_purchase', {});
                return;
              }
              e.preventDefault();
              window.gtagSendEvent(href);
            });
          `}
        </Script>
        <Script
          id="hs-script-loader"
          src="//js-na2.hs-scripts.com/245833475.js"
          strategy="afterInteractive"
        />
        <Script
          id="contentsquare"
          src="https://t.contentsquare.net/uxa/5e4a32d1b4839.js"
          strategy="afterInteractive"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
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
        <ExitIntentPopup />
        <Analytics />
      </body>
    </html>
  );
}
