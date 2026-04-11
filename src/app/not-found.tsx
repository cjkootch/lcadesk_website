import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | LCA Desk",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <img src="/illustrations/empty-no-results.svg" alt="" className="w-32 h-32 mx-auto mb-6 opacity-80" />
        <p className="text-7xl font-bold text-accent/20 mb-4">404</p>
        <h1 className="font-display text-2xl text-text-primary mb-3">Page Not Found</h1>
        <p className="text-text-secondary text-sm mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-border text-text-secondary px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
