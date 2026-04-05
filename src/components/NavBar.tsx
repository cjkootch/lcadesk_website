"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/features", label: "Features" },
  { href: "/markets", label: "Markets" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/blog", label: "Blog" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image src="/lca-desk-logo.png" alt="LCA Desk" width={140} height={40} className="h-9 w-auto" priority />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/demo"
            className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
          >
            Book a Demo
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-gradient-to-r from-accent to-teal px-5 py-2 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] transition-all"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
              >
                Book a Demo
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-gradient-to-r from-accent to-teal px-5 py-2.5 text-sm font-semibold text-white text-center hover:shadow-lg transition-all"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
