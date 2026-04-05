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
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "\u{1F1EC}\u{1F1FE} Guyana", href: "/markets/guyana" },
      { label: "\u{1F1F3}\u{1F1EC} Nigeria", href: "/markets/nigeria" },
      { label: "\u{1F1F9}\u{1F1F9} Trinidad & Tobago", href: "/markets/trinidad" },
      { label: "\u{1F1EC}\u{1F1ED} Ghana", href: "/markets/ghana" },
      { label: "\u{1F1F2}\u{1F1FF} Mozambique", href: "/markets/mozambique" },
      { label: "\u{1F1F3}\u{1F1E6} Namibia", href: "/markets/namibia" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "LCA Filing Calendar", href: "/lca-filing-calendar" },
      { label: "LCA Act Overview", href: "/lca-act-overview" },
      { label: "Compliance Guide", href: "/lca-compliance-guide" },
      { label: "All Resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
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
              <Image src="/lca-desk-logo-white.png" alt="LCA Desk" width={160} height={44} className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The world&apos;s only AI-native Local Content Act compliance platform. Built for Guyana. Expanding globally.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Powered by Stabroek Advisory LLC &middot; Houston, TX
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
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
