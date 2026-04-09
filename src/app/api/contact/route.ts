import { NextResponse } from "next/server";
import { track } from "@vercel/analytics/server";

const HUBSPOT_PORTAL_ID = "245833475";
const HUBSPOT_FORM_GUID = process.env.HUBSPOT_FORM_GUID || "8b37db6a-7062-4b35-a039-3af713aed2f4";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, country, role, inquiryType, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const nameParts = (name as string).trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Submit to backend (best-effort)
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

    // Submit to HubSpot Forms API (best-effort)
    if (HUBSPOT_FORM_GUID) {
      try {
        const hsRes = await fetch(
          `https://api-na2.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fields: [
                { name: "email", value: email },
                { name: "firstname", value: firstName },
                { name: "lastname", value: lastName },
                { name: "0-2/name", value: name },
                ...(phone ? [{ name: "phone", value: phone }] : []),
                ...(company ? [{ name: "company", value: company }] : []),
                ...(country ? [{ name: "country", value: country }] : []),
                ...(role ? [{ name: "jobtitle", value: role }] : []),
                ...(message ? [{ name: "message", value: message }] : []),
              ],
              context: {
                pageUri: req.headers.get("referer") || "https://lcadesk.com",
                pageName: inquiryType === "demo" ? "Demo Request" : "Contact Form",
              },
            }),
          }
        );
        if (!hsRes.ok) {
          console.error("HubSpot form submission returned", hsRes.status, await hsRes.text().catch(() => ""));
        }
      } catch (e) {
        console.error("HubSpot submission error:", e);
      }
    }

    // Server-side Vercel analytics
    await track("Form Submission", {
      type: inquiryType || "general",
      country: country || "unknown",
      hasCompany: !!company,
    }).catch(() => {});

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
