import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Tag, Share2 } from "lucide-react";
import { posts, getPost, getRelatedPosts } from "@/lib/blog";
import CTABanner from "@/components/CTABanner";
import EmailCapture from "@/components/EmailCapture";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | LCA Desk Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Regulatory Updates": { bg: "bg-blue-50", text: "text-blue-700" },
  "Compliance Tips": { bg: "bg-emerald-50", text: "text-emerald-700" },
  "Industry Analysis": { bg: "bg-purple-50", text: "text-purple-700" },
  "Product Updates": { bg: "bg-amber-50", text: "text-amber-700" },
};

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${i}`} className="list-disc pl-5 space-y-1.5 mb-6 text-text-secondary leading-relaxed">
          {listItems.map((item, j) => {
            // Handle bold within list items
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j}>
                {parts.map((part, k) =>
                  k % 2 === 1 ? <strong key={k} className="text-text-primary font-semibold">{part}</strong> : part
                )}
              </li>
            );
          })}
        </ul>
      );
      listItems = [];
    }
  }

  while (i < lines.length) {
    const line = lines[i];

    // Headers
    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={i} className="font-semibold text-text-primary text-lg mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={i} className="font-display text-xl font-semibold text-text-primary mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    }
    // List items
    else if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
    }
    // Numbered list
    else if (/^\d+\.\s/.test(line)) {
      flushList();
      // Collect numbered items
      const numberedItems: string[] = [line.replace(/^\d+\.\s/, "")];
      while (i + 1 < lines.length && /^\d+\.\s/.test(lines[i + 1])) {
        i++;
        numberedItems.push(lines[i].replace(/^\d+\.\s/, ""));
      }
      elements.push(
        <ol key={i} className="list-decimal pl-5 space-y-1.5 mb-6 text-text-secondary leading-relaxed">
          {numberedItems.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j}>
                {parts.map((part, k) =>
                  k % 2 === 1 ? <strong key={k} className="text-text-primary font-semibold">{part}</strong> : part
                )}
              </li>
            );
          })}
        </ol>
      );
    }
    // Table
    else if (line.startsWith("|")) {
      flushList();
      const tableLines: string[] = [line];
      while (i + 1 < lines.length && lines[i + 1].startsWith("|")) {
        i++;
        tableLines.push(lines[i]);
      }
      // Parse table
      const headers = tableLines[0].split("|").filter(Boolean).map((h) => h.trim());
      const rows = tableLines.slice(2).map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
      elements.push(
        <div key={i} className="rounded-xl border border-border overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-surface">
                {headers.map((h, j) => (
                  <th key={j} className="text-left px-4 py-3 font-semibold text-text-primary">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j} className="border-b last:border-b-0">
                  {row.map((cell, k) => (
                    <td key={k} className="px-4 py-3 text-text-secondary">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    // Empty line
    else if (line.trim() === "") {
      flushList();
    }
    // Paragraph
    else {
      flushList();
      // Handle bold and inline formatting
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={i} className="text-text-secondary leading-relaxed mb-4">
          {parts.map((part, k) =>
            k % 2 === 1 ? <strong key={k} className="text-text-primary font-semibold">{part}</strong> : part
          )}
        </p>
      );
    }
    i++;
  }
  flushList();
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const color = categoryColors[post.category] || { bg: "bg-gray-50", text: "text-gray-600" };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "LCA Desk", url: "https://lcadesk.com" },
    publisher: { "@type": "Organization", name: "LCA Desk", url: "https://lcadesk.com" },
    url: `https://lcadesk.com/blog/${slug}`,
    mainEntityOfPage: `https://lcadesk.com/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <article className="pt-32 pb-16 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${color.bg} ${color.text}`}>
              {post.category}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-text-primary leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            {post.description}
          </p>

          <div className="flex items-center gap-5 text-sm text-text-muted flex-wrap pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </div>
      </article>

      {/* Content */}
      <section className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 pt-10">
          {renderMarkdown(post.content)}
        </div>
      </section>

      {/* Mid-article CTA */}
      <section className="bg-surface py-12">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gradient-to-r from-accent/5 to-teal/5 border border-accent/20 rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl text-text-primary mb-2">Ready to simplify your LCA filings?</h3>
            <p className="text-sm text-text-secondary max-w-lg mx-auto mb-5">
              LCA Desk automates report generation, flags compliance gaps, and tracks your deadlines. Free 14-day trial — no credit card.
            </p>
            <Link
              href="https://app.lcadesk.com/auth/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Start Free Trial <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="bg-white py-12">
        <div className="max-w-xl mx-auto px-6">
          <EmailCapture
            headline="Get articles like this in your inbox"
            description="Join compliance officers getting LCA regulatory updates, filing tips, and industry analysis."
            list="newsletter"
            variant="card"
          />
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-surface py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-2xl text-text-primary mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp) => {
                const rpColor = categoryColors[rp.category] || { bg: "bg-gray-50", text: "text-gray-600" };
                return (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="block bg-white rounded-2xl border border-border p-6 group hover:shadow-lg hover:border-accent/20 transition-all"
                  >
                    <span className={`inline-flex text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md mb-3 ${rpColor.bg} ${rpColor.text}`}>
                      {rp.category}
                    </span>
                    <h3 className="font-semibold text-text-primary text-[15px] leading-snug mb-2 group-hover:text-accent transition-colors">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-3">
                      {rp.description}
                    </p>
                    <span className="text-xs text-text-muted flex items-center gap-1.5">
                      <Clock size={11} /> {rp.readTime}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        headline="Stop guessing. Start filing with confidence."
        body="LCA Desk walks you through every required field. Auto-generates compliant reports. Flags gaps before you submit."
        primaryCTA={{ label: "Start Free Trial", href: "https://app.lcadesk.com/auth/signup" }}
        secondaryCTA={{ label: "Book a Demo", href: "/demo" }}
      />
    </>
  );
}
