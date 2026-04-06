"use client";

import { useEffect } from "react";

export default function SupplierDashboardRedirect() {
  useEffect(() => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com"}/supplier-portal/dashboard`;
  }, []);

  return null;
}
