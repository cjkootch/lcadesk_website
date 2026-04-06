"use client";

import { useEffect } from "react";

const APP_URL = process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com";

export default function SupplierLogin() {
  useEffect(() => {
    window.location.href = `${APP_URL}/auth/login?role=supplier&redirect=/supplier-portal/dashboard`;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-text-muted text-sm">Redirecting to login...</p>
    </div>
  );
}
