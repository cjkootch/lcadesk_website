"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const vp = { once: true as const, margin: "-60px" as const };

export default function IntegrationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-text-muted text-xs mb-10 uppercase tracking-[0.2em] font-medium">
          Connects with the tools you already use
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          <div className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <Image src="/zapier-logo.svg" alt="Zapier" width={120} height={34} className="h-8 w-auto" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <Image src="/quickbooks-logo.png" alt="QuickBooks" width={140} height={34} className="h-8 w-auto" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <Image src="/xero-logo.png" alt="Xero" width={80} height={34} className="h-8 w-auto" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <Image src="/claude-logo.png" alt="Claude AI" width={120} height={26} className="h-7 w-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
