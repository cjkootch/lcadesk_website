"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("exitPopupShown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exitPopupShown", "1");
        document.removeEventListener("mouseout", handleMouseLeave);
      }
    };

    // Delay listener so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
            >
              <X size={18} />
            </button>

            <div className="text-center">
              <div className="mb-5">
                <img
                  src="/illustrations/start-cta.svg"
                  alt="Get started with LCA Desk"
                  className="w-full h-auto max-h-44 object-contain"
                />
              </div>
              <h2 className="font-display text-xl text-text-primary mb-2">
                Don&apos;t leave without your free trial
              </h2>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                30 days of AI narrative drafting, compliance gap detection, and audit-ready reports. No credit card required.
              </p>
              <a
                href="https://app.lcadesk.com/auth/signup?role=filer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-teal px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all w-full"
              >
                Start Free Trial
              </a>
              <button
                onClick={() => setShow(false)}
                className="block mx-auto mt-3 text-xs text-text-muted hover:text-text-secondary transition-colors"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
