import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "@/app/api/contact/route";

// Mock @vercel/analytics/server
vi.mock("@vercel/analytics/server", () => ({
  track: vi.fn().mockResolvedValue(undefined),
}));

// Capture all fetch calls
const fetchSpy = vi.fn();

beforeEach(() => {
  fetchSpy.mockReset();
  // Default: backend returns 200, HubSpot returns 200
  fetchSpy.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
  vi.stubGlobal("fetch", fetchSpy);
});

function makeRequest(body: Record<string, unknown>, headers?: Record<string, string>) {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  it("returns 400 when name is missing", async () => {
    const res = await POST(makeRequest({ email: "test@example.com" }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toMatch(/required/i);
  });

  it("returns 400 when email is missing", async () => {
    const res = await POST(makeRequest({ name: "Test User" }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toMatch(/required/i);
  });

  it("returns 200 for valid contact submission", async () => {
    const res = await POST(
      makeRequest({
        name: "Jane Doe",
        email: "jane@example.com",
        inquiryType: "product",
        message: "Tell me more",
      })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
  });

  it("submits to backend API with correct payload", async () => {
    await POST(
      makeRequest({
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "+1234567890",
        company: "Acme Corp",
        country: "Guyana",
        inquiryType: "demo",
        message: "Interested in a demo",
      })
    );

    // First fetch call is to backend
    const backendCall = fetchSpy.mock.calls[0];
    expect(backendCall[0]).toBe("https://app.lcadesk.com/api/public/contact");
    const backendBody = JSON.parse(backendCall[1].body);
    expect(backendBody.email).toBe("jane@example.com");
    expect(backendBody.name).toBe("Jane Doe");
    expect(backendBody.company).toBe("Acme Corp");
    expect(backendBody.inquiryType).toBe("demo");
  });

  it("submits to HubSpot Forms API with correct field mapping", async () => {
    await POST(
      makeRequest({
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "+1234567890",
        company: "Acme Corp",
        country: "Guyana",
        role: "regulator",
        inquiryType: "demo",
        message: "Interested in a demo",
      })
    );

    // Second fetch call is to HubSpot
    const hsCall = fetchSpy.mock.calls[1];
    expect(hsCall[0]).toContain("hsforms.com/submissions/v3/integration/submit");
    expect(hsCall[0]).toContain("245833475"); // Portal ID

    const hsBody = JSON.parse(hsCall[1].body);
    const fields = hsBody.fields;

    // Verify field mapping
    expect(fields.find((f: { name: string }) => f.name === "email").value).toBe("jane@example.com");
    expect(fields.find((f: { name: string }) => f.name === "firstname").value).toBe("Jane");
    expect(fields.find((f: { name: string }) => f.name === "lastname").value).toBe("Doe");
    expect(fields.find((f: { name: string }) => f.name === "phone").value).toBe("+1234567890");
    expect(fields.find((f: { name: string }) => f.name === "company").value).toBe("Acme Corp");
    expect(fields.find((f: { name: string }) => f.name === "jobtitle").value).toBe("regulator");

    // Verify context
    expect(hsBody.context.pageName).toBe("Demo Request");
  });

  it("splits single-word name correctly (no last name)", async () => {
    await POST(
      makeRequest({ name: "Madonna", email: "madonna@example.com", message: "Hi" })
    );

    const hsCall = fetchSpy.mock.calls[1];
    const hsBody = JSON.parse(hsCall[1].body);
    const fields = hsBody.fields;

    expect(fields.find((f: { name: string }) => f.name === "firstname").value).toBe("Madonna");
    expect(fields.find((f: { name: string }) => f.name === "lastname").value).toBe("");
  });

  it("splits multi-part name correctly", async () => {
    await POST(
      makeRequest({ name: "Jean Claude Van Damme", email: "jcvd@example.com", message: "Hi" })
    );

    const hsCall = fetchSpy.mock.calls[1];
    const hsBody = JSON.parse(hsCall[1].body);
    const fields = hsBody.fields;

    expect(fields.find((f: { name: string }) => f.name === "firstname").value).toBe("Jean");
    expect(fields.find((f: { name: string }) => f.name === "lastname").value).toBe("Claude Van Damme");
  });

  it("omits optional fields when not provided", async () => {
    await POST(
      makeRequest({ name: "Jane Doe", email: "jane@example.com", message: "Hello" })
    );

    const hsCall = fetchSpy.mock.calls[1];
    const hsBody = JSON.parse(hsCall[1].body);
    const fieldNames = hsBody.fields.map((f: { name: string }) => f.name);

    expect(fieldNames).not.toContain("phone");
    expect(fieldNames).not.toContain("company");
    expect(fieldNames).not.toContain("country");
    expect(fieldNames).not.toContain("jobtitle");
  });

  it("still returns 200 when backend fails", async () => {
    fetchSpy
      .mockRejectedValueOnce(new Error("Network error")) // backend fails
      .mockResolvedValueOnce(new Response("{}", { status: 200 })); // HubSpot succeeds

    const res = await POST(
      makeRequest({ name: "Jane Doe", email: "jane@example.com", message: "Test" })
    );
    expect(res.status).toBe(200);
  });

  it("still returns 200 when HubSpot fails", async () => {
    fetchSpy
      .mockResolvedValueOnce(new Response("{}", { status: 200 })) // backend succeeds
      .mockRejectedValueOnce(new Error("HubSpot down")); // HubSpot fails

    const res = await POST(
      makeRequest({ name: "Jane Doe", email: "jane@example.com", message: "Test" })
    );
    expect(res.status).toBe(200);
  });

  it("still returns 200 when both external services fail", async () => {
    fetchSpy.mockRejectedValue(new Error("Everything is down"));

    const res = await POST(
      makeRequest({ name: "Jane Doe", email: "jane@example.com", message: "Test" })
    );
    expect(res.status).toBe(200);
  });

  it("sets pageName to 'Contact Form' for non-demo inquiries", async () => {
    await POST(
      makeRequest({
        name: "Jane Doe",
        email: "jane@example.com",
        inquiryType: "product",
        message: "Tell me about it",
      })
    );

    const hsCall = fetchSpy.mock.calls[1];
    const hsBody = JSON.parse(hsCall[1].body);
    expect(hsBody.context.pageName).toBe("Contact Form");
  });
});
