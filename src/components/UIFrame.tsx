"use client";

import { motion } from "framer-motion";

interface UIFrameProps {
  title: string;
  children: React.ReactNode;
}

export default function UIFrame({ title, children }: UIFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-border overflow-hidden bg-card shadow-md"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-bg rounded px-3 py-1 text-xs text-text-muted text-center">
            {title}
          </div>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  );
}
