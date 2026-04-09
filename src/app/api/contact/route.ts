import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, country, role, inquiryType, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Submit to backend (best-effort, non-blocking on failure)
    try {
      const res = await fetch("https://app.lcadesk.com/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          country,
          role,
          inquiryType,
          message: message || `${inquiryType || "general"} inquiry`,
        }),
      });
      if (!res.ok) {
        console.error("Backend contact API returned", res.status);
      }
    } catch (e) {
      console.error("Backend contact API error:", e);
    }

    // Always return success - HubSpot tracking handles contact creation client-side
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
