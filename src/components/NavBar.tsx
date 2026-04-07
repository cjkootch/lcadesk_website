"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Briefcase, Users, Building2, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const topLinks = [
  { href: "/features", label: "Features" },
  { href: "/markets", label: "Markets" },
  { href: "/pricing", label: "Pricing" },
];

const directoryLinks = [
  { href: "/jobs", label: "Jobs Board", desc: "Oil & gas positions for Guyanese", icon: Users },
  { href: "/opportunities", label: "Opportunities", desc: "Procurement & tenders", icon: Briefcase },
  { href: "/companies", label: "Companies", desc: "639+ sector companies", icon: Building2 },
  { href: "/suppliers", label: "Supplier Directory", desc: "Guyanese suppliers & services", icon: Package },
];

const allMobileLinks = [
  { href: "/features", label: "Features" },
  { href: "/markets", label: "Markets" },
  { href: "/pricing", label: "Pricing" },
  { href: "/jobs", label: "Jobs Board" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/companies", label: "Companies" },
  { href: "/suppliers", label: "Supplier Directory" },
  { href: "/blog", label: "Blog" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dirOpen, setDirOpen] = useState(false);
  const dirRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dirRef.current && !dirRef.current.contains(e.target as Node)) {
        setDirOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
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
        <div className="hidden md:flex items-center gap-7">
          {topLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}

          {/* Directory dropdown */}
          <div ref={dirRef} className="relative">
            <button
              onClick={() => setDirOpen(!dirOpen)}
              onMouseEnter={() => setDirOpen(true)}
              className="flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors font-medium"
            >
              Directory
              <ChevronDown size={14} className={`transition-transform ${dirOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {dirOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  onMouseLeave={() => setDirOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl border border-border shadow-xl p-2"
                >
                  {directoryLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setDirOpen(false)}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/15 transition-colors">
                        <l.icon size={15} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">{l.label}</p>
                        <p className="text-xs text-text-muted">{l.desc}</p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/blog"
            className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
          >
            Blog
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://app.lcadesk.com/auth/login"
            className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
          >
            Log In
          </Link>
          <Link
            href="/demo"
            className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
          >
            Book a Demo
          </Link>
          <Link
            href="https://app.lcadesk.com/auth/signup?role=filer"
            className="rounded-lg bg-gradient-to-r from-accent to-teal px-5 py-2 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] transition-all"
          >
            Start 30-Day Trial
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
              {allMobileLinks.map((l) => (
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
                href="https://app.lcadesk.com/auth/login"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
              >
                Log In
              </Link>
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
              >
                Book a Demo
              </Link>
              <Link
                href="https://app.lcadesk.com/auth/signup?role=filer"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-gradient-to-r from-accent to-teal px-5 py-2.5 text-sm font-semibold text-white text-center hover:shadow-lg transition-all"
              >
                Start 30-Day Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
