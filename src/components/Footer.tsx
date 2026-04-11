import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
      { label: "Changelog", href: "/changelog" },
      { label: "Book a Demo", href: "/demo" },
      { label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup?role=filer" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Opportunities Board", href: "/opportunities" },
      { label: "Jobs Board \uD83C\uDDEC\uD83C\uDDFE", href: "/jobs" },
      { label: "Company Directory", href: "/companies" },
      { label: "Supplier Directory", href: "/suppliers" },
      { label: "Verify LCS Certificate", href: "/verify" },
    ],
  },
  {
    title: "Jurisdictions",
    links: [
      { label: "\u{1F1EC}\u{1F1FE} Guyana", href: "/markets/guyana" },
      { label: "\u{1F1F3}\u{1F1E6} Namibia", href: "/markets/namibia" },
      { label: "\u{1F1F2}\u{1F1FF} Mozambique", href: "/markets/mozambique" },
      { label: "\u{1F1EC}\u{1F1ED} Ghana", href: "/markets/ghana" },
      { label: "\u{1F1F3}\u{1F1EC} Nigeria", href: "/markets/nigeria" },
      { label: "\u{1F1F8}\u{1F1F7} Suriname", href: "/markets/suriname" },
      { label: "All Jurisdictions", href: "/markets" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Training & Certification", href: "/training" },
      { label: "LCA Filing Calendar", href: "/lca-filing-calendar" },
      { label: "LCA Act Overview", href: "/lca-act-overview" },
      { label: "Half-Yearly Report Guide", href: "/lca-half-yearly-report-guide" },
      { label: "Compliance Guide", href: "/lca-compliance-guide" },
      { label: "All Resources", href: "/resources" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Regulators", href: "/for-regulators" },
      { label: "For Contractors", href: "/for-contractors" },
      { label: "For Suppliers", href: "/for-suppliers" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Affiliate Program", href: "/affiliate" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1A] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image src="/lca-desk-logo-white.svg" alt="LCA Desk" width={160} height={44} className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Regulatory-grade compliance infrastructure for local content programs. Configurable for every jurisdiction.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Houston, TX
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.linkedin.com/company/lcadesk" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <p className="text-gray-600 text-[10px] mt-4">
              SOC 2 Infrastructure &middot; AES-256 Encryption &middot; GDPR Ready
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; 2026 LCA Desk &middot; lcadesk.com &middot; Houston, Texas
          </p>
          <p className="text-gray-600 text-xs text-center mt-2 max-w-3xl mx-auto">
            LCA Desk is an independent software platform. Not affiliated with the Government of Guyana, the Local Content Secretariat, NCDMB, or any petroleum operator.
          </p>
        </div>
      </div>
    </footer>
  );
}
