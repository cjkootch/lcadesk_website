"use client";

import { useEffect } from "react";

export default function JobsDashboardRedirect() {
  useEffect(() => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com"}/seeker/dashboard`;
  }, []);

  return null;
}
