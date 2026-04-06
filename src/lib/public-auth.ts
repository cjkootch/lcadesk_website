const APP_URL = process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com";

// Register a new user (job seeker or supplier) via the unified register API
export async function registerUser(
  role: "job_seeker" | "supplier",
  data: Record<string, unknown>
): Promise<{ success: boolean; redirectTo: string; error?: string }> {
  const res = await fetch(`${APP_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, role }),
  });
  const result = await res.json();
  if (!res.ok) return { success: false, redirectTo: "", error: result.error };
  return { success: true, redirectTo: result.redirectTo };
}

// After registration, redirect to app.lcadesk.com for login
// The unified login at app.lcadesk.com handles all roles
export function getLoginUrl(role: "job_seeker" | "supplier"): string {
  return `${APP_URL}/auth/login?role=${role}&redirect=${
    role === "job_seeker" ? "/seeker/dashboard" : "/supplier-portal/dashboard"
  }`;
}

// Verify LCS certificate — calls the public verify endpoint
export async function verifyLcsCert(certId: string) {
  const res = await fetch(`${APP_URL}/api/public/suppliers/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cert_id: certId }),
  });
  return res.json();
}
