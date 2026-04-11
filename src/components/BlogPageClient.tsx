"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, User, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import EmailCapture from "@/components/EmailCapture";

interface Props {
  posts: BlogPost[];
  categories: readonly string[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  "Regulatory Updates": { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  "Compliance Tips": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "Industry Analysis": { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
  "Product Updates": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
};

const defaultColor = { bg: "bg-gray-50", text: "text-gray-600", dot: "bg-gray-400" };

const categoryImages: Record<string, string> = {
  "Regulatory Updates": "/illustrations/blog-regulatory.png",
  "Compliance Tips": "/illustrations/blog-guide.png",
  "Industry Analysis": "/illustrations/blog-regulatory.png",
  "Product Updates": "/illustrations/blog-guide.png",
};

export default function BlogPageClient({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts.find((p) => p.featured);
  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  // Non-featured posts for the grid
  const gridPosts = filtered.filter((p) => !(activeCategory === "All" && p.featured));

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-surface">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 z-10">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent">Blog</span>
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4 leading-tight">
            LCA Compliance Insights
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Expert analysis on local content legislation, compliance strategies, and regulatory updates for oil and gas operators.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {activeCategory === "All" && featured && (
        <section className="max-w-5xl mx-auto px-6 -mt-2 mb-12">
          <Link href={`/blog/${featured.slug}`} className="block group">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/15 text-emerald-200 px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-emerald-300 px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-white mb-3 group-hover:text-emerald-200 transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-emerald-100/80 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
                  {featured.description}
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                    Read article <ArrowRight size={16} />
                  </span>
                  <span className="text-emerald-300 text-xs flex items-center gap-1.5">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                  <span className="text-emerald-300 text-xs flex items-center gap-1.5">
                    <Calendar size={12} /> {formatDate(featured.date)}
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        </section>
      )}

      {/* Category tabs */}
      <section className="max-w-5xl mx-auto px-6 mb-10">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const color = cat === "All" ? defaultColor : (categoryColors[cat] || defaultColor);
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition ${
                  isActive
                    ? "bg-accent text-white border-accent"
                    : "bg-white text-text-secondary border-border hover:border-accent/30 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Post grid */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {gridPosts.map((post, i) => {
              const color = categoryColors[post.category] || defaultColor;
              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block bg-white rounded-2xl border border-border overflow-hidden group hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 transition-all h-full"
                  >
                    {/* Cover image */}
                    <div className="h-36 bg-surface flex items-center justify-center overflow-hidden">
                      <Image
                        src={categoryImages[post.category] || "/illustrations/blog-guide.png"}
                        alt=""
                        width={200}
                        height={96}
                        quality={85}
                        className="h-24 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col h-full">
                      {/* Category + date */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${color.bg} ${color.text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
                          {post.category}
                        </span>
                        <span className="text-[11px] text-text-muted">{formatDate(post.date)}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-text-primary text-[15px] leading-snug mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                        {post.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-border/30">
                        <span className="text-xs text-text-muted flex items-center gap-1.5">
                          <Clock size={11} /> {post.readTime}
                        </span>
                        <span className="text-sm font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {gridPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted">No articles in this category yet. Check back soon.</p>
          </div>
        )}
      </section>

      {/* Email capture */}
      <section className="bg-surface py-16">
        <div className="max-w-xl mx-auto px-6">
          <EmailCapture
            headline="Get compliance insights in your inbox"
            description="Join compliance officers getting LCA regulatory updates, filing tips, and industry analysis. No spam — just the insights that matter."
            list="newsletter"
            variant="card"
          />
        </div>
      </section>
    </main>
  );
}
